import React, { useEffect, useRef } from 'react';

const ServicesIntro = () => {
  const stepsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      
      stepsRef.current.forEach((step) => {
        if (!step) return;
        const targetId = step.getAttribute('data-target');
        const img = document.getElementById(targetId);
        if (!img) return;

        const rect = step.getBoundingClientRect();
        const start = windowHeight * 0.85; // When the top of the text enters 85% of viewport
        const end = windowHeight * 0.35;   // When it reaches 35%

        let progress = (start - rect.top) / (start - end);
        progress = Math.max(0, Math.min(1, progress));

        // Refined transform: subtle vertical lift
        const translateY = 30 - progress * 30;
        const scale = 0.97 + progress * 0.03;

        img.style.transform = `translateY(${translateY}px) scale(${scale})`;
        img.style.opacity = progress;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceSteps = [
    {
      id: 'step-1',
      num: '01.',
      text: 'Spheres of expertise combining data, business, insight, tech and organisation skills',
      img: 'https://www.solita.fi/wp-content/themes/solitafresh/img/services-intro/step1-opt-new.png',
      zIndex: 10
    },
    {
      id: 'step-2',
      num: '02.',
      text: 'Curated teams with the mix of talents specific to your challenges',
      img: 'https://www.solita.fi/wp-content/themes/solitafresh/img/services-intro/step2-opt-new.png',
      zIndex: 20
    },
    {
      id: 'step-3',
      num: '03.',
      text: 'Impact-driven solutions that generate value and squeeze out waste',
      img: 'https://www.solita.fi/wp-content/themes/solitafresh/img/services-intro/step3-opt-new.png',
      zIndex: 30
    }
  ];

  return (
    <div className="relative bg-white min-h-screen">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row">
        
        {/* Left Side: Sticky Image Stack */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-screen sticky top-0 flex items-center justify-center pointer-events-none px-6">
          <div className="relative w-full max-w-[500px] aspect-square">
            {serviceSteps.map((step) => (
              <img
                key={step.id}
                id={step.id}
                src={step.img}
                alt={`Service Step ${step.num}`}
                className="absolute inset-0 w-full h-full object-contain opacity-0 transition-all duration-75 ease-out"
                style={{ zIndex: step.zIndex }}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Scrolling Text */}
        <div className="w-full md:w-1/2 px-8 md:px-16 lg:px-24">
          {serviceSteps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepsRef.current[index] = el)}
              data-target={step.id}
              className="h-[80vh] md:h-screen flex flex-col justify-center"
            >
              <div className="max-w-md">
                <span 
                  className="block text-4xl md:text-5xl font-bold mb-8 text-[#282828]" 
                  style={{ fontFamily: '"Sharp Sans", sans-serif' }}
                >
                  {step.num}
                </span>
                <p 
                  className="text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.3] text-[#282828]" 
                  style={{ fontFamily: '"Sharp Sans", sans-serif' }}
                >
                  {step.text}
                </p>
              </div>
            </div>
          ))}
          {/* Bottom spacer to allow the final image to be seen fully before scrolling past */}
          <div className="h-[20vh]" />
        </div>

      </div>
    </div>
  );
};

export default ServicesIntro;