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
    <section className="group relative pt-16 px-6 md:px-10 bg-white">
      <div className="w-full">
        <div className="flex items-stretch gap-6 md:gap-10">
          
          {/* Consistent 3px Vertical Line */}
          <div className="relative flex flex-col items-center">
            <div className="w-[3px] h-full bg-[#282828]" />
          </div>

          {/* Content */}
          <div className="flex-1 pb-16">
            <h2 
              className="text-[#282828] mb-10"
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

            {/* Simplified Service List */}
            <div style={textStyle} className="max-w-4xl">
              <ul className="space-y-8">
                {services.map((service, i) => (
                  <li key={i} className="flex flex-col">
                    {/* Splits the string at the colon to style the first part bold if desired, 
                        or just renders as one clean block like your image */}
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compressed Icon and Image Section */}
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