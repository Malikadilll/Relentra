import WorkServices from "./Components/home/WorkServices";
import CoreSection from "./Components/home/CoreSection";
import Culture from "./Components/home/Culture";
import SolitaHero from "./Components/home/Hero";
import WhyItMatters from "./Components/home/WhyItMatters"
import Perspective from "./Components/home/Perspective"
import Footer from "./Components/layout/Footer"
import NavBar from "./Components/layout/Navbar"
import Contact from "./Components/home/ContactForm";

function App() {
  return (
    <div>
      <NavBar/>
      
      <SolitaHero />

      <section id="work" className="scroll-mt-20">
        <CoreSection/>
      </section>
      
      <div className="relative max-w-[1600px] mx-auto px-6 py-8 md:py-16">
        <div className="flex flex-col md:grid md:grid-cols-12 md:gap-y-0">
          <section id="industries" className="z-10 w-full mb-12 md:mb-0 md:col-start-1 md:col-span-4 md:row-start-1 scroll-mt-20">
            <WhyItMatters />
          </section>

          <section id="insights" className="z-30 w-full mb-12 md:mb-0 md:col-start-9 md:col-span-4 md:row-start-1 md:mt-[110%] scroll-mt-20">
            <div className="bg-white">
               <Perspective />
            </div>
          </section>

          <section id="services" className="z-20 w-full md:col-start-5 md:col-span-4 md:row-start-2 md:mt-[-90%] lg:mt-[-110%] scroll-mt-20">
            <div className="bg-white">
              <WorkServices />
            </div>
          </section>
        </div>
      </div>
      
      {/* JOIN US now scrolls here */}
      <section id="culture" className="scroll-mt-20">
        <Culture/>
      </section>

      <section id="contact" className="scroll-mt-20">
        <Contact/>
      </section>

      {/* ABOUT now scrolls here */}
      <section id="about" className="scroll-mt-20">
        <Footer/>
      </section>
    </div>
  );
}

export default App;