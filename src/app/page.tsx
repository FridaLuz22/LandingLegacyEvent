// // components
// "use client";
// import { Navbar, Footer} from "@/components";

// // sections
// import Hero from "./hero";
// import Exhibitors from "./exhibitors";
// import AboutEvent from "./about-event";
// import OurStats from "./our-stats";
// import EventContent from "./event-content";
// import Faq from "./faq";
// import Countdown from "./count";

// export default function Portfolio() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Countdown />
//       <Exhibitors />
//       <AboutEvent />
//       <OurStats />
//       <EventContent />
//       <Faq />
//       <Footer />
//     </>
//   );
// }

import Header from "@/components/navbar";
import Hero from "./hero";
import Exhibitors from "./exhibitors";
import { ExpandIcon } from "lucide-react";
import OurStats from "./our-stats";
import EventContent from "./event-content";
import Band from "./band";

export default function Home() {
  return (
    <>
      <div className="min-h-screen relative text-white font-body overflow-x-hidden flex flex-col items-center">
        <Header />
        <Hero />
      </div>
      <main>
        <Exhibitors/>
        <Band/>
        <EventContent/>

      </main>
      <footer className="w-full text-center py-6 text-white/40 text-xs">
        © 2023 Legacy Conference
      </footer>
    </>
    
  );
}
