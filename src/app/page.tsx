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
          <section id="hero">
            <Hero />
          </section>
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
          src="/image/gradient-green.svg"
          className="absolute md:max-w-[110%] max-w-[160%] top-[100px] md:-top-[30px] -left-[45%] md:-left-[40%] opacity-50 -z-50 rotate-180"
        />
        <img
          src="/image/gradient2.svg"
          className="absolute md:max-w-[50%] max-w-[100%] top-[800px] -right-[20%] md:-right-[15%] rotate-[270deg] -z-50"
        />
        <img
          src="/image/gradient.svg"
          className="absolute md:max-w-[50%] max-w-[100%] bottom-0 right-0 -z-50"
        />
      </div>
    </>
  );
}
