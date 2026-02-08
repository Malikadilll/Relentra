import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function WhyItMatters() {
  const struggles = [
    "Dashboards that multiply, but don’t clarify",
    "AI initiatives that look promising, then quietly stall",
    "Automation that adds complexity instead of relief",
    "Teams unsure when to trust the system — or themselves",
  ];

  const textStyle = {
    fontFamily: '"Sharp Sans", Helvetica, Arial, sans-serif',
    fontSize: '18px',
    lineHeight: '1.4',
    letterSpacing: '.005em',
    color: '#282828',
    fontWeight: '500'
  };

  return (
    /* Reduced px-6 to px-4 for tighter mobile padding */
    <section className="group relative pt-16 px-4 md:px-10 bg-white">
      <div className="w-full">
        {/* gap-4 on mobile to keep text close to the line */}
        <div className="flex items-stretch gap-4 md:gap-10 text-left">
          
          {/* Thicker 3px Solid Black Vertical Line */}
          <div className="relative flex flex-col items-center">
            <div className="w-[3px] h-full bg-[#282828]" />
          </div>

          {/* Content - text-left ensures alignment stays consistent */}
          <div className="flex-1 space-y-10 pb-16 text-left">
            <h2 
              className="text-[#282828]"
              style={{
                fontFamily: '"Sharp Sans Display No1", Helvetica, Arial, sans-serif',
                fontSize: 'clamp(40px, 5vw, 62.464px)',
                lineHeight: '1',
                fontWeight: '700',
                letterSpacing: '-0.437248px'
              }}
            >
              Why this<br />matters
            </h2>

            <div style={textStyle}>
              <p className="mb-6">
                Most organizations don’t lack data or technology.
                <br />
                <span className="opacity-60">They struggle with:</span>
              </p>

              <ul className="space-y-4 max-w-4xl">
                {struggles.map((item, i) => (
                  <li
                    key={i}
                    className="group/item flex gap-4 cursor-default text-left"
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-black shrink-0 transition-transform duration-300 group-hover/item:scale-150" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <p style={{ ...textStyle, fontWeight: '700' }} className="text-left">
                Technology isn’t the bottleneck.
                <br />
                <span className="opacity-50">Decision confidence is.</span>
              </p>

              <div className="flex flex-col gap-2"> 
                <div className="flex items-center justify-start">
                  <ArrowUpRight 
                    className="w-12 h-12 text-[#282828] transition-all duration-500 ease-in-out transform group-hover:rotate-45 group-hover:scale-110" 
                    strokeWidth={1.5}
                  />
                </div>
                
                <img
                  src="https://www.solita.fi/wp-content/uploads/2023/06/hilite-1.png"
                  alt="Illustration"
                  className="w-full shadow-sm grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}