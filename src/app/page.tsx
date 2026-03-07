import Header from "@/components/navbar";
import Hero from "./hero";
import Exhibitors from "./exhibitors";
import EventContent from "./event-content";
import Band from "./band";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <div className="relative text-white font-body overflow-x-hidden">
        <div className="">
          <Header />
          <Hero />
        </div>
        <main className="relative">
          <section id="exhibitors">
            <Exhibitors />
          </section>
           <section id="band">
            <Band />
          </section>
          <section id="itinerary">
            <EventContent />
          </section>
        </main>
        <Footer />
        <img
          src="/image/gradient.svg"
          className="absolute md:max-w-[50%] max-w-[100%] top-[300px] md:top-[50px] left-0 -z-50 rotate-180"
        />
        <img
          src="/image/gradient2.svg"
          className="absolute md:max-w-[50%] max-w-[100%] top-[800px] rotate-90 left-0 -z-50"
        />
        <img
          src="/image/gradient.svg"
          className="absolute md:max-w-[50%] max-w-[100%] bottom-0 right-0 -z-50"
        />
      </div>
    </>
  );
}
