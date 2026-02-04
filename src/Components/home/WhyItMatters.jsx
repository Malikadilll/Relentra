import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function WhyItMatters() {
  const struggles = [
    "Dashboards that multiply, but don’t clarify",
    "AI initiatives that look promising, then quietly stall",
    "Automation that adds complexity instead of relief",
    "Teams unsure when to trust the system — or themselves",
  ];

  return (
    <section className="group relative pt-16 px-6 md:px-10 bg-white">
      <div className="w-full">
        <div className="flex items-stretch gap-6 md:gap-10">
          
          {/* Vertical accent line */}
          <div className="relative flex flex-col items-center">
            <div className="w-[1.5px] h-full bg-gray-200" />
            <div className="absolute top-0 w-2 h-2 rounded-full bg-gray-400 -translate-y-1/2" />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-10 pb-16">
            {/* Heading */}
            <h2 className="text-[48px] md:text-[64px] font-semibold text-[#282828] leading-tight">
              Why this<br />matters
            </h2>

            {/* Intro */}
            <p className="text-xl text-gray-700">
              Most organizations don’t lack data or technology.
              <br />
              <span className="text-gray-500">They struggle with:</span>
            </p>

            {/* List with individual bullet animations */}
            <ul className="space-y-4 max-w-4xl">
              {struggles.map((item, i) => (
                <li
                  key={i}
                  className="group/item flex gap-4 text-lg md:text-xl text-gray-800 cursor-default"
                >
                  {/* Bullet that scales on item hover */}
                  <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-gray-400 shrink-0 transition-transform duration-300 group-hover/item:scale-150" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Statement */}
            <div className="space-y-6 pt-4">
              <p className="text-2xl md:text-3xl font-medium text-[#282828]">
                Technology isn’t the bottleneck.
                <br />
                <span className="text-gray-400">Decision confidence is.</span>
              </p>

              {/* Interactive Arrow Icon - Reacts to Section Hover */}
              <div className="flex items-center justify-start py-4">
                <ArrowUpRight 
                  className="w-12 h-12 text-[#282828] transition-all duration-500 ease-in-out transform group-hover:rotate-45 group-hover:scale-110" 
                  strokeWidth={1.5}
                />
              </div>
            </div>

            {/* Image */}
            <div className="pt-8">
              <img
                src="https://www.solita.fi/wp-content/uploads/2023/06/hilite-1.png"
                alt="Illustration"
                className="w-full rounded-2xl shadow-sm grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}