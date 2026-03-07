"use client";

export function FixedPlugin() {
  const phone = "+51933401503"; // tu número con código país (Perú = 51)
  const message = "Hola, quiero más información sobre la conferencia Legacy";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-[#25D366] hover:bg-[#1ebe5d] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
        <svg
          viewBox="0 0 32 32"
          fill="white"
          className="w-7 h-7"
        >
          <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L0 32l8.3-2.4c2.3 1.3 4.9 2 7.7 2 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.7c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.9 1.4 1.4-4.8-.3-.5C3.7 21 3 18.6 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13-5.8 13.1-13 13.1zm7.2-9.8c-.4-.2-2.3-1.1-2.7-1.2-.4-.2-.6-.2-.9.2-.3.4-1 1.2-1.2 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3.1-2-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.6.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7 0-.2-.9-2.1-1.2-2.8-.3-.7-.6-.6-.9-.6h-.8c-.3 0-.7.1-1 .5-.3.4-1.4 1.3-1.4 3.2 0 1.9 1.4 3.7 1.6 3.9.2.3 2.8 4.3 6.9 6 .9.4 1.6.6 2.2.7.9.3 1.7.2 2.3.1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5z"/>
        </svg>
      </div>
    </a>
  );
}
