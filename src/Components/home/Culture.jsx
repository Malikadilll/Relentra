import React from 'react';

export default function Culture() {
  const mainTextStyle = {
    fontFamily: '"Sharp Sans", Helvetica, Arial, sans-serif',
    fontWeight: 700,
    letterSpacing: '-0.02em',
    color: '#282828',
    WebkitFontSmoothing: 'antialiased',
  };

  return (
    <section className="relative bg-white py-32 md:py-56 px-6 md:px-10 pb-16 md:pb-24 overflow-hidden w-full">
      
      {/* HEADER POSITIONED OUTSIDE PADDING - Exact pattern as CoreSection */}
      <div className="absolute left-3 top-24 md:top-44">
         <h2 className="text-[11px] md:text-sm font-bold tracking-[0.2em] uppercase text-[#282828]">
            Our Culture
          </h2>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        <div className="flex flex-col">
          
          {/* Main Heading Container */}
          <div className="w-full mb-32 md:mb-48 flex flex-col items-start md:items-center">
            <div 
              style={mainTextStyle}
              className="text-left text-[26px] sm:text-[40px] md:text-[54px] lg:text-[62px] leading-[1.15] break-words w-full lg:max-w-5xl" 
            >
              <p className="indent-8 md:indent-20">
                We work best in environments
                <br className="hidden sm:block" /> 
                <span className="opacity-40">
                  {" "}that value curiosity, clarity, and calm confidence.
                  <span> We value clear thinking over clever solutions.</span>
                </span>
              </p>
            </div>
          </div>

          {/* Bottom Content Split */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-16 md:gap-24 w-full">
            
            {/* Image side (65%) */}
            <div className="w-full md:w-[65%] overflow-hidden"> 
              <img 
                src="https://www.solita.fi/wp-content/uploads/2023/06/front-culture-1-min.jpg" 
                alt="Culture" 
                className="w-full h-auto grayscale-[0.2] hover:grayscale-0 transition-all duration-700 object-cover block"
              />
            </div>
            
            {/* Quote side (35%) */}
            <div className="w-full md:w-[35%] text-left">
              <div className="text-red-600 text-6xl font-serif leading-none mb-4">"</div>
              
              <p 
                className="text-[17px] md:text-[20px] leading-[1.6] font-bold text-[#282828] mb-10" 
                style={{ fontFamily: '"Sharp Sans", sans-serif' }}
              >
                Our way of working has matured into a unique culture with strong values, wide autonomy, and possibilities to grow. Everything we have, is in our people.
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-8 border-t border-gray-100">
                <div className="w-14 h-14 rounded-full bg-gray-100 overflow-hidden shrink-0">
                  <img 
                    src="https://www.solita.fi/wp-content/uploads/2022/12/Outi-Sivonen-Solita-150x150.jpeg" 
                    alt="Outi Sivonen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-sm text-[#282828]">Outi Sivonen</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                    Chief Human Resources Officer
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}