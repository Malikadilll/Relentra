import React, { useState, useEffect } from 'react';

export default function SolitaHero() {
  const [animationState, setAnimationState] = useState(0);

  useEffect(() => {
    // Slower, more refined timing sequence
    const timings = [
      200,  // 1: First heading line
      550,  // 2: Second heading line
      900,  // 3: Third heading line
      1250, // 4: Fourth heading line
      1850, // 5: Left block (half from bottom)
      2200, // 6: Middle block (full from center)
      2550, // 7: Right block (half from top)
      3000, // 8: All blocks expand to full
      3400  // 9: Bottom text appears
    ];
    
    timings.forEach((timing, index) => {
      setTimeout(() => setAnimationState(index + 1), timing);
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 py-12 md:py-20 lg:py-28">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Heading */}
          <h1 
            className="font-medium leading-[1.1] mb-8"
            style={{ 
              fontFamily: '"Sharp Sans", Helvetica, Arial, sans-serif',
              color: '#282828'
            }}
          >
            <div 
              className={`text-[36px] sm:text-[44px] transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                animationState >= 1 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              So, a data scientist,
            </div>
            <div 
              className={`text-[36px] sm:text-[44px] transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] delay-150 ${
                animationState >= 2 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              an AI designer &
            </div>
            <div 
              className={`text-[36px] sm:text-[44px] transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] delay-300 ${
                animationState >= 3 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              a developer walk into
            </div>
            <div 
              className={`text-[36px] sm:text-[44px] transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] delay-[450ms] ${
                animationState >= 4
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              a juice bar...
            </div>
          </h1>

          {/* Video Blocks */}
          <div className="flex gap-2 h-[320px] sm:h-[380px] mb-8 ml-auto w-[85%]">
            {/* Left Block */}
            <div className="flex-1 rounded-lg overflow-hidden relative">
              <div 
                className={`absolute inset-0 bg-gray-800 transition-all duration-700 ease-out ${
                  animationState >= 5 ? 'scale-y-100' : 'scale-y-50'
                }`}
                style={{ transformOrigin: 'bottom' }}
              >
                <video autoPlay loop muted playsInline className="h-full w-full object-cover">
                  <source src="https://www.solita.fi/wp-content/uploads/2023/11/frontpage-video-person-1.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Middle Block */}
            <div className="flex-1 rounded-lg overflow-hidden relative">
              <div 
                className={`absolute inset-0 bg-orange-500 transition-all duration-700 ease-out ${
                  animationState >= 6 ? 'scale-y-100' : 'scale-y-0'
                }`}
                style={{ transformOrigin: 'center' }}
              >
                <video autoPlay loop muted playsInline className="h-full w-full object-cover">
                  <source src="https://www.solita.fi/wp-content/uploads/2023/11/frontpage-video-person-2.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Right Block */}
            <div className="flex-1 rounded-lg overflow-hidden relative">
              <div 
                className={`absolute inset-0 bg-purple-500 transition-all duration-700 ease-out ${
                  animationState >= 7 ? 'scale-y-100' : 'scale-y-50'
                }`}
                style={{ transformOrigin: 'top' }}
              >
                <video autoPlay loop muted playsInline className="h-full w-full object-cover">
                  <source src="https://www.solita.fi/wp-content/uploads/2023/11/frontpage-video-person-3.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div 
            className={`border-l-[3px] border-black pl-6 space-y-4 transition-all duration-700 ease-out ${
              animationState >= 9 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
            }`}
          >
            <p 
              className="text-[16px] sm:text-[17px] leading-[32px] sm:leading-[34px] font-medium"
              style={{ 
                fontFamily: '"Sharp Sans", Helvetica, Arial, sans-serif',
                color: '#282828'
              }}
            >
              Beautiful, unexpected things<br />
              happen when diverse teams<br />
              dive into juicy problems.
            </p>
            
            <p 
              className="text-[16px] sm:text-[17px] leading-[32px] sm:leading-[34px] font-bold"
              style={{ 
                fontFamily: '"Sharp Sans", Helvetica, Arial, sans-serif',
                color: '#282828'
              }}
            >
              Welcome to Solita.
            </p>
            
            <div className="pt-3">
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                style={{ color: '#282828' }}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2.5} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex justify-between gap-16">
          {/* Left Side - Text Content */}
          <div className="w-[48%] xl:w-[50%]">
            <h1 
              className="font-medium leading-[1.1] mb-16"
              style={{ 
                fontFamily: '"Sharp Sans", Helvetica, Arial, sans-serif',
                color: '#282828'
              }}
            >
              <div 
                className={`text-[72px] xl:text-[88px] transition-all duration-800 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                  animationState >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                So, a data scientist,
              </div>
              <div 
                className={`text-[72px] xl:text-[88px] transition-all duration-800 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                  animationState >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                an AI designer &
              </div>
              <div 
                className={`text-[72px] xl:text-[88px] transition-all duration-800 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                  animationState >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                a developer walk into
              </div>
              <div 
                className={`text-[72px] xl:text-[88px] transition-all duration-800 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                  animationState >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                a juice bar...
              </div>
            </h1>
            
            <div 
              className={`border-l-[3px] border-black pl-8 space-y-6 transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                animationState >= 9 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <p 
                className="text-[20px] leading-[40px] font-medium"
                style={{ 
                  fontFamily: '"Sharp Sans", Helvetica, Arial, sans-serif',
                  color: '#282828'
                }}
              >
                Beautiful, unexpected things<br />
                happen when diverse teams<br />
                dive into juicy problems.
              </p>
              
              <p 
                className="text-[20px] leading-[40px] font-bold"
                style={{ 
                  fontFamily: '"Sharp Sans", Helvetica, Arial, sans-serif',
                  color: '#282828'
                }}
              >
                Welcome to Solita.
              </p>
              
              <div className="pt-4">
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  style={{ color: '#282828' }}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2.5} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Side - Video Blocks */}
          <div className="w-[42%] xl:w-[38%] ml-auto">
            <div className="flex gap-3 h-[750px] xl:h-[820px]">
              {/* Left Block - Slides up from bottom */}
              <div className="flex-1 rounded-lg overflow-hidden relative">
                <div 
                  className={`absolute inset-0 bg-gray-800 transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    animationState >= 8
                      ? 'scale-y-100 duration-[600ms]'
                      : animationState >= 5
                      ? 'scale-y-[0.48] duration-[700ms]'
                      : 'scale-y-0 duration-[500ms]'
                  }`}
                  style={{ transformOrigin: 'bottom' }}
                >
                  <video autoPlay loop muted playsInline className="h-full w-full object-cover">
                    <source src="https://www.solita.fi/wp-content/uploads/2023/11/frontpage-video-person-1.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>

              {/* Middle Block - Grows from center */}
              <div className="flex-1 rounded-lg overflow-hidden relative">
                <div 
                  className={`absolute inset-0 bg-orange-500 transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    animationState >= 6
                      ? 'scale-y-100 duration-[750ms]'
                      : 'scale-y-0 duration-[500ms]'
                  }`}
                  style={{ transformOrigin: 'center' }}
                >
                  <video autoPlay loop muted playsInline className="h-full w-full object-cover">
                    <source src="https://www.solita.fi/wp-content/uploads/2023/11/frontpage-video-person-2.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>

              {/* Right Block - Slides down from top */}
              <div className="flex-1 rounded-lg overflow-hidden relative">
                <div 
                  className={`absolute inset-0 bg-purple-500 transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    animationState >= 8
                      ? 'scale-y-100 duration-[600ms]'
                      : animationState >= 7
                      ? 'scale-y-[0.48] duration-[700ms]'
                      : 'scale-y-0 duration-[500ms]'
                  }`}
                  style={{ transformOrigin: 'top' }}
                >
                  <video autoPlay loop muted playsInline className="h-full w-full object-cover">
                    <source src="https://www.solita.fi/wp-content/uploads/2023/11/frontpage-video-person-3.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}