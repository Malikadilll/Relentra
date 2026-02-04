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
      <CoreSection/>
      <div className="relative py-20 md:py-40 px-6 max-w-[1600px] mx-auto overflow-visible flex flex-col">
        
  {/* 1. WHY IT MATTERS - Top Left */}
  {/* Added mb-10 for mobile; kept your -350px for desktop */}
  <div className="w-full md:w-[35%] mr-auto mb-10 md:mb-[-350px] relative z-10">
    <WhyItMatters />
  </div>

  {/* 2. PERSPECTIVE - Middle Far Right */}
  {/* Removed pt-40 on mobile; kept your pt-64 for desktop */}
  <div className="w-full md:w-[38%] ml-auto mb-10 md:mb-[-350px] relative z-20 md:pt-64">
    <Perspective />
  </div>

  {/* 3. WORK - Bottom Center */}
  {/* Removed pt-40 on mobile; kept your pt-64 for desktop */}
  <div className="w-full md:w-[35%] mx-auto relative z-30 md:pt-64">
    <WorkServices />
  </div>

</div>
      
      <Culture/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;