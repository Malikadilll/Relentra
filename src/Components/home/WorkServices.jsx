import React from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Decision-Ready Analytics",
    description: "When data exists, but confidence doesn’t.",
  },
  {
    title: "Applied AI & Decision Support",
    description: "When ambition outpaces adoption.",
  },
  {
    title: "Intelligent Growth",
    description: "When customer data feels fragmented.",
  },
  {
    title: "Data Foundations",
    description: "Because everything depends on this.",
  },
];

export default function WorkServices() {
  return (
    <section className="group relative bg-white pt-16 pb-0 px-6 md:px-10">
      <div className="w-full">
        {/* FIXED: items-stretch keeps the vertical line matching the content height */}
        <div className="flex items-stretch gap-6 md:gap-10">
          
          {/* Vertical accent line */}
          <div className="relative flex flex-col items-center">
            <div className="w-[1.5px] h-full bg-gray-200" />
            <div className="absolute top-0 w-2 h-2 rounded-full bg-gray-400 -translate-y-1/2" />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-14">
            {/* Heading */}
            <h2 className="text-[48px] md:text-[64px] font-semibold text-[#282828] leading-tight">
              Work
            </h2>

            {/* Services list */}
            <div className="space-y-8 max-w-5xl">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group/item border-b border-gray-100 pb-6 last:border-none transition-colors hover:border-black"
                >
                  <h3 className="text-2xl md:text-3xl font-medium text-[#282828]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-lg text-gray-500 max-w-3xl">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Same Arrow Interaction as WhyItMatters */}
            <div className="flex items-center justify-start py-4">
                            <ArrowUpRight 
                              className="w-12 h-12 text-[#282828] transition-all duration-500 ease-in-out transform group-hover:rotate-45 group-hover:scale-110" 
                              strokeWidth={1.5}
                            />
                          </div>
                        

            {/* Image */}
            <div className="pb-16">
              <img
                src="https://www.solita.fi/wp-content/uploads/2023/01/hsl_hero_1216x830.jpg"
                alt="Work and services"
                className="w-full rounded-2xl object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}