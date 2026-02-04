import React, { useState, useEffect, useRef } from 'react';

export default function SolitaHero() {
  const [animationState, setAnimationState] = useState(0);
  const canvasRef = useRef(null);

  // 1. WAVE ANIMATION LOGIC (From your HTML)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    let waveTime = 0;
    let animationFrameId;

    // Mouse state
    let mouse = { x: null, y: null, radius: 250 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.randomYOffset = (Math.random() - 0.5) * 100; // From your HTML logic
        this.size = Math.random() * 2 + 0.5;
        this.baseX = this.x;
        this.density = (Math.random() * 30) + 1;
      }

      draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }

      update() {
        // Wave Math from your HTML
        let wave1 = Math.sin(this.x * 0.006 + waveTime) * 60;
        let wave2 = Math.sin(this.x * 0.01 + waveTime * 0.5) * 20;
        let targetY = (canvas.height / 2) + wave1 + wave2 + this.randomYOffset;

        let dx = mouse.x - this.x;
        let dy = mouse.y - targetY;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          let force = (mouse.radius - distance) / mouse.radius;
          let directionX = (dx / distance) * force * this.density;
          let directionY = (dy / distance) * force * this.density;
          this.x -= directionX;
          this.y = targetY - directionY;
        } else {
          if (this.x !== this.baseX) {
            this.x -= (this.x - this.baseX) / 20;
          }
          this.y = targetY;
        }
        this.draw();
      }
    }

    const initParticles = () => {
      particlesArray = [];
      for (let i = 0; i < 1000; i++) particlesArray.push(new Particle());
    };

    const animateWave = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      waveTime += 0.01;
      particlesArray.forEach((p) => p.update());
      animationFrameId = requestAnimationFrame(animateWave);
    };

    // Listeners
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    // Init
    resizeCanvas();
    animateWave();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', () => {});
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // 2. YOUR ORIGINAL TIMING LOGIC
  useEffect(() => {
    const timings = [
      200, 550, 900, 1250, 1850, 2200, 2550, 3000, 3400
    ];
    
    timings.forEach((timing, index) => {
      setTimeout(() => setAnimationState(index + 1), timing);
    });
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      
      {/* BACKGROUND WAVE CANVAS */}
      <canvas 
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Hero Section - Reduced padding from py-28 to py-12 */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 py-12 lg:py-16 max-w-[1600px] mx-auto">
        
        {/* Mobile Layout (Kept largely the same, just refined) */}
        <div className="lg:hidden">
          <h1 className="font-medium leading-[1.1] mb-8 text-[#282828]" style={{ fontFamily: '"Sharp Sans", Helvetica, Arial, sans-serif' }}>
            {['So, a data scientist,', 'an AI designer &', 'a developer walk into', 'a juice bar...'].map((text, i) => (
              <div key={i} className={`text-[32px] sm:text-[40px] transition-all duration-700 ease-out ${
                animationState >= i + 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: `${i * 150}ms` }}>
                {text}
              </div>
            ))}
          </h1>
          {/* Mobile Video Blocks */}
          <div className="flex gap-2 h-[280px] sm:h-[320px] mb-8 ml-auto w-[90%]">
             {/* ... (Keep your existing mobile video block code here if needed, or copy from below) ... */}
             {/* For brevity, using the same logic but smaller height */}
             {[
               { color: 'bg-gray-800', src: 'https://www.solita.fi/wp-content/uploads/2023/11/frontpage-video-person-1.mp4', origin: 'bottom', step: 5 },
               { color: 'bg-orange-500', src: 'https://www.solita.fi/wp-content/uploads/2023/11/frontpage-video-person-2.mp4', origin: 'center', step: 6 },
               { color: 'bg-purple-500', src: 'https://www.solita.fi/wp-content/uploads/2023/11/frontpage-video-person-3.mp4', origin: 'top', step: 7 }
             ].map((vid, i) => (
               <div key={i} className="flex-1 rounded-lg overflow-hidden relative">
                 <div className={`absolute inset-0 ${vid.color} transition-all duration-700 ease-out ${
                   animationState >= vid.step ? 'scale-y-100' : (vid.step === 6 ? 'scale-y-0' : 'scale-y-50')
                 }`} style={{ transformOrigin: vid.origin }}>
                   <video autoPlay loop muted playsInline className="h-full w-full object-cover"><source src={vid.src} type="video/mp4" /></video>
                 </div>
               </div>
             ))}
          </div>
        </div>

        {/* Desktop Layout - SCALED DOWN */}
        <div className="hidden lg:flex justify-between gap-8 xl:gap-16 items-start">
          
          {/* Left Side - Text Content */}
          <div className="w-[48%] xl:w-[50%] pt-8">
            <h1 className="font-medium leading-[1.1] mb-12 text-[#282828]" style={{ fontFamily: '"Sharp Sans", Helvetica, Arial, sans-serif' }}>
              {/* Text reduced from 72/88px to 56/72px */}
              {['So, a data scientist,', 'an AI designer &', 'a developer walk into', 'a juice bar...'].map((text, i) => (
                <div key={i} className={`text-[50px] xl:text-[72px] transition-all duration-800 ease-out ${
                  animationState >= i + 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}>
                  {text}
                </div>
              ))}
            </h1>
            
            <div className={`border-l-[3px] border-black pl-8 space-y-6 transition-all duration-800 ${
                animationState >= 9 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}>
              <p className="text-[18px] xl:text-[20px] leading-relaxed font-medium text-[#282828]">
                Beautiful, unexpected things<br />
                happen when diverse teams<br />
                dive into juicy problems.
              </p>
              <p className="text-[18px] xl:text-[20px] leading-relaxed font-bold text-[#282828]">
                Welcome to Solita.
              </p>
            </div>
          </div>

          {/* Right Side - Video Blocks */}
          <div className="w-[45%] xl:w-[40%] ml-auto">
            {/* Height reduced from 750px to 600px/650px to fit laptop screens */}
            <div className="flex gap-3 h-[550px] xl:h-[650px]">
              {/* Left Block */}
              <div className="flex-1 rounded-lg overflow-hidden relative">
                <div className={`absolute inset-0 bg-gray-800 transition-all ease-out duration-700 ${
                    animationState >= 8 ? 'scale-y-100' : animationState >= 5 ? 'scale-y-[0.48]' : 'scale-y-0'
                  }`} style={{ transformOrigin: 'bottom' }}>
                  <video autoPlay loop muted playsInline className="h-full w-full object-cover">
                    <source src="https://www.solita.fi/wp-content/uploads/2023/11/frontpage-video-person-1.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>

              {/* Middle Block */}
              <div className="flex-1 rounded-lg overflow-hidden relative">
                <div className={`absolute inset-0 bg-orange-500 transition-all ease-out duration-700 ${
                    animationState >= 6 ? 'scale-y-100' : 'scale-y-0'
                  }`} style={{ transformOrigin: 'center' }}>
                  <video autoPlay loop muted playsInline className="h-full w-full object-cover">
                    <source src="https://www.solita.fi/wp-content/uploads/2023/11/frontpage-video-person-2.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>

              {/* Right Block */}
              <div className="flex-1 rounded-lg overflow-hidden relative">
                <div className={`absolute inset-0 bg-purple-500 transition-all ease-out duration-700 ${
                    animationState >= 8 ? 'scale-y-100' : animationState >= 7 ? 'scale-y-[0.48]' : 'scale-y-0'
                  }`} style={{ transformOrigin: 'top' }}>
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