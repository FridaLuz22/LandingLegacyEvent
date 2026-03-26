import Header from "@/components/navbar";
import Hero from "./hero";
import Exhibitors from "./exhibitors";
import EventContent from "./event-content";
import Band from "./band";
import Footer from "@/components/footer";
import Choreography from "./choreography";
import OurConference from "./ourConference";

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

          <section id="choreography">
            <Choreography />
          </section>

          <section id="itinerary">
            <EventContent />
          </section>
          
          <section id="our-conference">
            <OurConference />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
