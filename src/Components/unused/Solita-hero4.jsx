import React, { useState, useEffect, useRef } from 'react';

export default function SolitaHero() {
  const [animationState, setAnimationState] = useState(0);
  const canvasRef = useRef(null);

  // --- 1. SHARP & REFINED PARTICLE NETWORK ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    let animationFrameId;

    // Mouse state
    let mouse = { x: null, y: null, radius: 150 };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const resizeCanvas = () => {
      // FIX 1: Handle High DPI (Retina) Screens for Sharpness
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      
      // Scale down with CSS so it fits the window
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      // Normalize coordinate system
      ctx.scale(dpr, dpr);

      init();
    };

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
        this.baseX = x;
        this.baseY = y;
        this.density = (Math.random() * 30) + 1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        // Mouse interaction logic
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        // Gentle repulsion
        if (distance < mouse.radius) {
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            let force = (mouse.radius - distance) / mouse.radius;
            let directionX = forceDirectionX * force * this.density;
            let directionY = forceDirectionY * force * this.density;
            this.x -= directionX;
            this.y -= directionY;
        } else {
          // Return to base position slowly
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 20;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 20;
          }
        }
        this.draw();
      }
    }

    function init() {
      particlesArray = [];
      // FIX 2: Density Control
      // Increased divisor from 9000 to 12000 for slightly fewer, cleaner particles
      // Used window.innerWidth/Height instead of canvas.width because canvas is scaled by DPR
      let numberOfParticles = (window.innerWidth * window.innerHeight) / 12000;
      
      for (let i = 0; i < numberOfParticles; i++) {
        // FIX 3: Smaller Particles (Size 1-2 instead of 1-4)
        let size = (Math.random() * 2) + 1; 
        
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        
        let directionX = (Math.random() * 2) - 1; // Slower speed
        let directionY = (Math.random() * 2) - 1;
        let color = 'rgba(40, 40, 40, 0.6)'; // Dark grey, semi-transparent

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    function connect() {
      // FIX 4: Fixed Connection Distance
      // Instead of relying on screen size, we use a fixed pixel distance (110px).
      // This ensures the mesh looks "fine" and "high-res" on all screens.
      const connectDistance = 110; 
      
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let dx = particlesArray[a].x - particlesArray[b].x;
          let dy = particlesArray[a].y - particlesArray[b].y;
          let distance = dx * dx + dy * dy;

          if (distance < (connectDistance * connectDistance)) {
            // Calculate opacity based on distance
            let opacityValue = 1 - (distance / (connectDistance * connectDistance));
            ctx.strokeStyle = 'rgba(40,40,40,' + opacityValue * 0.4 + ')'; // Lower opacity lines
            ctx.lineWidth = 0.5; // Thinner lines
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      // Clear using window dimensions
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    }

    // Initialize
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    resizeCanvas(); // Sets size and calls init()
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // --- 2. TEXT REVEAL TIMING (Original) ---
  useEffect(() => {
    const timings = [200, 550, 900, 1250, 1850, 2200, 2550, 3000, 3400];
    timings.forEach((timing, index) => {
      setTimeout(() => setAnimationState(index + 1), timing);
    });
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      
      {/* BACKGROUND PARTICLE CANVAS */}
      <canvas 
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Hero Section */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 py-12 lg:py-16 max-w-[1600px] mx-auto">
        
        {/* Mobile Layout */}
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
          <div className="flex gap-2 h-[280px] sm:h-[320px] mb-8 ml-auto w-[90%]">
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

        {/* Desktop Layout */}
        <div className="hidden lg:flex justify-between gap-8 xl:gap-16 items-start">
          
          {/* Left Side - Text Content */}
          <div className="w-[48%] xl:w-[50%] pt-8">
            <h1 className="font-medium leading-[1.1] mb-12 text-[#282828]" style={{ fontFamily: '"Sharp Sans", Helvetica, Arial, sans-serif' }}>
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
            <div className="flex gap-3 h-[550px] xl:h-[650px]">
              <div className="flex-1 rounded-lg overflow-hidden relative">
                <div className={`absolute inset-0 bg-gray-800 transition-all ease-out duration-700 ${
                    animationState >= 8 ? 'scale-y-100' : animationState >= 5 ? 'scale-y-[0.48]' : 'scale-y-0'
                  }`} style={{ transformOrigin: 'bottom' }}>
                  <video autoPlay loop muted playsInline className="h-full w-full object-cover">
                    <source src="https://www.solita.fi/wp-content/uploads/2023/11/frontpage-video-person-1.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>

              <div className="flex-1 rounded-lg overflow-hidden relative">
                <div className={`absolute inset-0 bg-orange-500 transition-all ease-out duration-700 ${
                    animationState >= 6 ? 'scale-y-100' : 'scale-y-0'
                  }`} style={{ transformOrigin: 'center' }}>
                  <video autoPlay loop muted playsInline className="h-full w-full object-cover">
                    <source src="https://www.solita.fi/wp-content/uploads/2023/11/frontpage-video-person-2.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>

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