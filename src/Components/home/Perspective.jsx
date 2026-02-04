import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Perspective() {
  const points = [
    "From real decisions, not tools",
    "From workflows, not dashboards",
    "From trust and adoption, not novelty",
  ];

  return (
    <section className="group relative bg-white pt-16 px-6 md:px-10">
      <div className="w-full">
        {/* items-stretch ensures the vertical line matches the content height */}
        <div className="flex items-stretch gap-6 md:gap-10">
          
          {/* Vertical accent line */}
          <div className="relative flex flex-col items-center">
            <div className="w-[1.5px] h-full bg-gray-200" />
            <div className="absolute top-0 w-2 h-2 rounded-full bg-gray-400 -translate-y-1/2" />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-12 pb-16">
            {/* Heading */}
            <h2 className="text-[48px] md:text-[64px] font-semibold text-[#282828] leading-tight">
              Our<br />perspective
            </h2>

            {/* Body text */}
            <div className="space-y-6 max-w-4xl">
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                We don’t see analytics, AI, and engineering as separate
                disciplines.
              </p>

              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                They are parts of one system — shaped as much by human judgment
                and behavior as by models and code.
              </p>

              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-bold">
                So we design data and AI systems backwards:
              </p>
            </div>

            {/* List */}
            <ul className="space-y-4 max-w-4xl">
              {points.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-4 text-lg md:text-xl text-gray-800 group/item cursor-default"
                >
                  <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-gray-400 shrink-0 transition-transform group-hover/item:scale-150" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* NEW: Interactive Arrow Icon */}
            <div className="flex items-center justify-start py-4">
              <ArrowUpRight 
                className="w-12 h-12 text-[#282828] transition-all duration-500 ease-in-out transform group-hover:rotate-45 group-hover:scale-110" 
                strokeWidth={1.5}
              />
            </div>

            {/* Image */}
            <div className="pt-8">
              <img
                src="https://www.solita.fi/wp-content/uploads/2023/05/Industrial_1200x630.jpg"
                alt="Industrial perspective"
                className="w-full rounded-2xl object-cover shadow-sm grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}