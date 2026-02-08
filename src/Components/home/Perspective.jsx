import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Perspective() {
  const points = [
    "From real decisions, not tools",
    "From workflows, not dashboards",
    "From trust and adoption, not novelty",
  ];

  const textStyle = {
    fontFamily: '"Sharp Sans", Helvetica, Arial, sans-serif',
    fontSize: '18px',
    lineHeight: '1.4',
    letterSpacing: '.005em',
    color: '#282828',
    fontWeight: '500',
    WebkitFontSmoothing: 'antialiased'
  };

  return (
    /* Reduced px-6 to px-4 for mobile */
    <section className="group relative pt-16 px-4 md:px-10 bg-white">
      <div className="w-full">
        {/* gap-4 on mobile to keep text flush with the line */}
        <div className="flex items-stretch gap-4 md:gap-10 text-left">
          
          <div className="relative flex flex-col items-center">
            <div className="w-[3px] h-full bg-[#282828]" />
          </div>

          <div className="flex-1 space-y-10 pb-16 text-left">
            <h2 
              className="text-[#282828] text-left"
              style={{
                fontFamily: '"Sharp Sans Display No1", Helvetica, Arial, sans-serif',
                fontSize: 'clamp(40px, 5vw, 62.464px)',
                lineHeight: '1',
                fontWeight: '700',
                letterSpacing: '-0.437248px'
              }}
            >
              Our<br />perspective
            </h2>

            <div style={textStyle} className="space-y-6 max-w-4xl text-left">
              <p>
                We don’t see analytics, AI, and engineering as separate disciplines.
              </p>
              <p>
                They are parts of one system — shaped as much by human judgment
                and behavior as by models and code.
              </p>
              <p className="font-bold">
                So we design data and AI systems backwards:
              </p>

              <ul className="space-y-4 pt-4">
                {points.map((item, i) => (
                  <li key={i} className="group/item flex gap-4 cursor-default text-left">
                    <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-black shrink-0 transition-transform duration-300 group-hover/item:scale-150" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2"> 
              <div className="flex items-center justify-start">
                <ArrowUpRight 
                  className="w-12 h-12 text-[#282828] transition-all duration-500 ease-in-out transform group-hover:rotate-45 group-hover:scale-110" 
                  strokeWidth={1.5}
                />
              </div>
              <img
                src="https://www.solita.fi/wp-content/uploads/2023/05/Industrial_1200x630.jpg"
                alt="Industrial perspective"
                className="w-full shadow-sm grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}