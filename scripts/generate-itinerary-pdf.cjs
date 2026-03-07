const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

// Estilo Legacy: colores del sitio
const colors = {
  bg: "#01275D",
  border: "#4a5568",
  title: "#2f7df6",
  subtitle: "#e2e8f0",
  dayTitle: "#ffffff",
  date: "#67e8f9",
  time: "#67e8f9",
  eventTitle: "#ffffff",
  description: "#cbd5e1",
  badge: {
    Conferencia: { bg: "#0891b2", text: "#a5f3fc" },
    Panel: { bg: "#6d28d9", text: "#c4b5fd" },
    Concierto: { bg: "#d97706", text: "#fde68a" },
    Foro: { bg: "#0d9488", text: "#5eead4" },
    Taller: { bg: "#059669", text: "#6ee7b7" },
    Clausura: { bg: "#4f46e5", text: "#a5b4fc" },
  },
  circleGradient: "#06b6d4", // cyan-500
  line: "#22d3ee",
};

const itineraryData = {
  title: "Itinerario Legacy",
  subtitle: "3 días de impacto",
  days: [
    {
      dayNumber: 1,
      dayTitle: "Día 1",
      date: "Jueves, 14 de Mayo",
      events: [
        { time: "07:00 PM", title: "Apertura", description: "Inicio Conferencia Legacy", type: "Conferencia" },
      ],
    },
    {
      dayNumber: 2,
      dayTitle: "Día 2",
      date: "Viernes, 15 de Mayo",
      events: [
        { time: "08:00 AM", title: "I Plenaria", description: "Conferencia general", type: "Conferencia" },
        { time: "10:00 AM", title: "II Plenaria", description: "Conferencia general", type: "Conferencia" },
        { time: "12:00 PM", title: "Panel 5 en 1", description: "Conversatorio", type: "Panel" },
        { time: "04:00 PM", title: "Apertura Concierto Barak", description: "", type: "Concierto" },
        { time: "06:30 PM", title: "Previas Concierto", description: "Detrás de escena", type: "Concierto" },
        { time: "08:00 PM", title: "Concierto Barak", description: "", type: "Concierto" },
      ],
    },
    {
      dayNumber: 3,
      dayTitle: "Día 3",
      date: "Sábado, 16 de Mayo",
      events: [
        { time: "08:30 AM", title: "III Plenaria", description: "Conferencia general", type: "Conferencia" },
        { time: "10:30 AM", title: "IV Plenaria", description: "Conferencia general", type: "Conferencia" },
        { time: "12:00 PM", title: "Foro", description: "Clausura de la conferencia", type: "Foro" },
        { time: "03:00 PM", title: "Talleres", description: "", type: "Taller" },
        { time: "07:30 PM", title: "Cierre", description: "Clausura de la conferencia", type: "Clausura" },
      ],
    },
  ],
};

function drawRoundedRect(doc, x, y, w, h, r) {
  doc.moveTo(x + r, y).lineTo(x + w - r, y).quadraticCurveTo(x + w, y, x + w, y + r)
    .lineTo(x + w, y + h - r).quadraticCurveTo(x + w, y + h, x + w - r, y + h)
    .lineTo(x + r, y + h).quadraticCurveTo(x, y + h, x, y + h - r).lineTo(x, y + r)
    .quadraticCurveTo(x, y, x + r, y);
}

function main() {
  const outPath = path.join(__dirname, "..", "public", "itinerario-legacy.pdf");
  const doc = new PDFDocument({ size: "A4", margin: 40, bufferPages: true });

  doc.pipe(fs.createWriteStream(outPath));

  const pageWidth = doc.page.width - 80;
  const left = 40;
  let y = 40;

  // Fondo de página (azul Legacy)
  doc.rect(0, 0, doc.page.width, doc.page.height).fill(colors.bg);

  // Título
  doc.fontSize(26).fillColor(colors.title).font("Helvetica-Bold").text(itineraryData.title, left, y, { align: "center", width: pageWidth });
  y += 36;
  doc.fontSize(14).fillColor(colors.subtitle).font("Helvetica").text(itineraryData.subtitle, left, y, { align: "center", width: pageWidth });
  y += 32;

  for (const day of itineraryData.days) {
    // Salto de página si no hay espacio (aprox. 200pt por día)
    if (y > 520) {
      doc.addPage();
      doc.rect(0, 0, doc.page.width, doc.page.height).fill(colors.bg);
      y = 40;
    }

    // Card del día: rectángulo con borde
    const cardPadding = 20;
    const cardY = y;
    const contentLeft = left + 56; // espacio para círculo + línea
    let contentY = cardY + cardPadding;

    // Fondo card (rectángulo redondeado, estilo Legacy)
    const cardW = pageWidth;
    const cardH = 60 + day.events.length * 42;
    doc.opacity(0.12).fillColor("#ffffff").strokeColor(colors.border).lineWidth(1);
    drawRoundedRect(doc, left, cardY, cardW, cardH, 8);
    doc.fillAndStroke();
    doc.opacity(1);

    // Círculo con número del día
    doc.circle(left + 28, contentY + 14, 18).fillAndStroke(colors.circleGradient, colors.border);
    doc.fillColor("#ffffff").fontSize(14).font("Helvetica-Bold").text(String(day.dayNumber), left + 20, contentY + 6, { width: 16, align: "center" });

    // Día y fecha
    doc.fillColor(colors.dayTitle).fontSize(18).font("Helvetica-Bold").text(day.dayTitle, contentLeft, contentY, { continued: false });
    doc.fillColor(colors.date).fontSize(11).font("Helvetica").text(day.date, contentLeft, contentY + 22);
    contentY += 52;

    // Línea vertical (timeline)
    doc.strokeColor(colors.line).lineWidth(2).moveTo(left + 28, contentY - 20).lineTo(left + 28, contentY + (day.events.length - 1) * 42).stroke();

    // Eventos
    for (let i = 0; i < day.events.length; i++) {
      const e = day.events[i];
      const badgeStyle = colors.badge[e.type] || { bg: "#475569", text: "#e2e8f0" };

      doc.fillColor(colors.time).fontSize(10).font("Helvetica").text(e.time, contentLeft, contentY - 2, { width: 72 });
      doc.fillColor(colors.eventTitle).fontSize(12).font("Helvetica-Bold").text(e.title, contentLeft + 76, contentY - 2, { width: cardW - 76 - 90 });
      if (e.description) {
        doc.fillColor(colors.description).fontSize(9).font("Helvetica").text(e.description, contentLeft + 76, contentY + 12, { width: cardW - 76 - 90 });
      }
      // Badge tipo
      const badgeW = Math.min(doc.widthOfString(e.type) + 14, 86);
      doc.fillColor(badgeStyle.bg).roundedRect(left + cardW - badgeW - 4, contentY - 2, badgeW, 18, 3).fill();
      doc.fillColor(badgeStyle.text).fontSize(9).font("Helvetica").text(e.type, left + cardW - badgeW - 4, contentY + 2, { width: badgeW, align: "center" });

      contentY += 42;
    }

    y = contentY + 20;
  }

  doc.end();

  console.log("PDF generado:", outPath);
}

main();
