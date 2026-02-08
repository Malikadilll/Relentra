import React from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  "Decision-Ready Analytics: When data exists, but confidence doesn’t.",
  "Applied AI & Decision Support: When ambition outpaces adoption.",
  "Intelligent Growth & MarTech Systems: When customer data and automation feel fragmented.",
  "Data Foundations & Reliability: Because everything else depends on this working quietly.",
];

export default function WorkServices() {
  const textStyle = {
    fontFamily: '"Sharp Sans", Helvetica, Arial, sans-serif',
    fontSize: '18px',
    lineHeight: '1.4',
    letterSpacing: '.005em',
    color: '#282828',
    fontWeight: '500',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale'
  };

  return (
    /* Reduced px-6 to px-4 for mobile consistency */
    <section className="group relative pt-16 px-4 md:px-10 bg-white">
      <div className="w-full">
        {/* gap-4 on mobile for a tighter look against the line */}
        <div className="flex items-stretch gap-4 md:gap-10 text-left">
          
          {/* Consistent 3px Vertical Line */}
          <div className="relative flex flex-col items-center">
            <div className="w-[3px] h-full bg-[#282828]" />
          </div>

          {/* Content */}
          <div className="flex-1 pb-16 text-left">
            <h2 
              className="text-[#282828] mb-10 text-left"
              style={{
                fontFamily: '"Sharp Sans Display No1", Helvetica, Arial, sans-serif',
                fontSize: 'clamp(40px, 5vw, 62.464px)',
                lineHeight: '1',
                fontWeight: '700',
                letterSpacing: '-0.437248px'
              }}
            >
              Work
            </h2>

            {/* Service List */}
            <div style={textStyle} className="max-w-4xl text-left">
              <ul className="space-y-8">
                {services.map((service, i) => (
                  <li key={i} className="flex flex-col text-left">
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Icon and Image Section */}
            <div className="flex flex-col mt-10"> 
              <div className="flex items-center justify-start -mb-2"> 
                <ArrowUpRight 
                  className="w-12 h-12 text-[#282828] transition-all duration-500 ease-in-out transform group-hover:rotate-45 group-hover:scale-110" 
                  strokeWidth={1.5}
                />
              </div>
              
              <img
                src="https://www.solita.fi/wp-content/uploads/2023/01/hsl_hero_1216x830.jpg"
                alt="Work and services"
                className="w-full mt-4 shadow-sm grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}