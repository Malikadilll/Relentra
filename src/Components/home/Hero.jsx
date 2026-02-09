import React, { useState, useEffect, useRef } from 'react';

export default function SolitaHero() {
  const [animationState, setAnimationState] = useState(0);
  const canvasRef = useRef(null);

  // --- BACKGROUND PARTICLE LOGIC ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    let animationFrameId;
    let mouse = { x: null, y: null, radius: 150 };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      init();
    };

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x; this.y = y;
        this.directionX = directionX; this.directionY = directionY;
        this.size = size; this.color = color;
        this.baseX = x; this.baseY = y;
        this.density = (Math.random() * 30) + 1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
      update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          let force = (mouse.radius - distance) / mouse.radius;
          this.x -= (dx / distance) * force * this.density;
          this.y -= (dy / distance) * force * this.density;
        } else {
          if (this.x !== this.baseX) this.x -= (this.x - this.baseX) / 20;
          if (this.y !== this.baseY) this.y -= (this.y - this.baseY) / 20;
        }
        this.draw();
      }
    }

    function init() {
      particlesArray = [];
      let numberOfParticles = (window.innerWidth * window.innerHeight) / 12000;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1.5;
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        particlesArray.push(new Particle(x, y, Math.random() * 2 - 1, Math.random() * 2 - 1, size, 'rgba(40, 40, 40, 0.5)'));
      }
    }

    function connect() {
      const connectDistance = 110;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let dx = particlesArray[a].x - particlesArray[b].x;
          let dy = particlesArray[a].y - particlesArray[b].y;
          let dist = dx * dx + dy * dy;
          if (dist < (connectDistance * connectDistance)) {
            let opacity = 1 - (dist / (connectDistance * connectDistance));
            ctx.strokeStyle = `rgba(40, 40, 40, ${opacity * 0.4})`;
            ctx.lineWidth = 1.2;
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
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let i = 0; i < particlesArray.length; i++) particlesArray[i].update();
      connect();
    }

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    resizeCanvas();
    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // --- HERO ANIMATION TIMINGS ---
  useEffect(() => {
    const timings = [200, 550, 900, 1250, 1850, 2200, 2550, 3000, 3400];
    timings.forEach((timing, index) => {
      setTimeout(() => setAnimationState(index + 1), timing);
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Background Layer */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full pointer-events-none" 
        style={{ zIndex: 0 }} 
      />

      {/* Hero Content Layer */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 pt-24 pb-12 md:py-20 lg:py-28">
        
        {/* --- MOBILE LAYOUT (UPDATED) --- */}
        <div className="lg:hidden">
          <h1 
            className="font-medium leading-[1.1] mb-8"
            style={{ fontFamily: '"Sharp Sans", Helvetica, Arial, sans-serif', color: '#282828' }}
          >
            {/* UPDATED TEXT HERE TO MATCH DESKTOP */}
            {[
              "So, a data scientist,",
              "a developer &",
              "a psychologist meet",
              "over coffee..."
            ].map((text, i) => (
              <div 
                key={i}
                className={`text-[36px] sm:text-[44px] transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                  animationState >= i + 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {text}
              </div>
            ))}
          </h1>

          <div className="flex gap-2 h-[320px] sm:h-[380px] mb-8 ml-auto w-[85%]">
            {[
              { id: 1, color: "bg-gray-800", origin: "bottom", step: 5 },
              { id: 2, color: "bg-orange-500", origin: "center", step: 6 },
              { id: 3, color: "bg-purple-500", origin: "top", step: 7 }
            ].map((vid) => (
              <div key={vid.id} className="flex-1 rounded-lg overflow-hidden relative">
                <div 
                  className={`absolute inset-0 ${vid.color} transition-all duration-700 ease-out ${
                    animationState >= vid.step ? 'scale-y-100' : 'scale-y-50'
                  }`}
                  style={{ transformOrigin: vid.origin }}
                >
                  <video autoPlay loop muted playsInline className="h-full w-full object-cover">
                    <source src={`https://www.solita.fi/wp-content/uploads/2023/11/frontpage-video-person-${vid.id}.mp4`} type="video/mp4" />
                  </video>
                </div>
              </div>
            ))}
          </div>

          <div className={`border-l-[3px] border-black pl-6 space-y-4 transition-all duration-700 ease-out ${
            animationState >= 9 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
          }`}>
            {/* UPDATED PARAGRAPH TO MATCH DESKTOP */}
            <p className="text-[16px] sm:text-[17px] leading-[32px] sm:leading-[34px] font-medium" style={{ color: '#282828' }}>
              Three perspectives.<br/> One coffee table.<br/> A shared curiosity about why<br/> things work - or don't.
            </p>
            {/* UPDATED WELCOME TEXT */}
            <p className="text-[16px] sm:text-[17px] leading-[32px] sm:leading-[34px] font-bold" style={{ color: '#282828' }}>
              Welcome to Relentra.
            </p>
            <div className="pt-3">
              <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>

        {/* --- DESKTOP LAYOUT (ALREADY CORRECT) --- */}
        <div className="hidden lg:flex justify-between gap-16">
          <div className="w-[48%] xl:w-[50%]">
            <h1 
              className="font-medium leading-[1.1] mb-16"
              style={{ fontFamily: '"Sharp Sans", Helvetica, Arial, sans-serif', color: '#282828' }}
            >
              {[
                "So, a data scientist,",
                "a developer &",
                "a psychologist meet",
                "over coffee..."
              ].map((text, i) => (
                <div 
                  key={i}
                  className={`text-[72px] xl:text-[88px] transition-all duration-800 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                    animationState >= i + 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                >
                  {text}
                </div>
              ))}
            </h1>
            
            <div className={`border-l-[3px] border-black pl-8 space-y-6 transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              animationState >= 9 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <p className="text-[20px] leading-[40px] font-medium" style={{ color: '#282828' }}>
                Three perspectives.<br/> One coffee table.<br/> A shared curiosity about why<br/> things work - or don't.
              </p>
              <p className="text-[20px] leading-[40px] font-bold" style={{ color: '#282828' }}>
                Welcome to Relentra.
              </p>
              <div className="pt-4">
                <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-[42%] xl:w-[38%] ml-auto">
            <div className="flex gap-3 h-[750px] xl:h-[820px]">
              {/* Left Block */}
              <div className="flex-1 rounded-lg overflow-hidden relative">
                <div 
                  className={`absolute inset-0 bg-gray-800 transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    animationState >= 8 ? 'scale-y-100 duration-[600ms]' : animationState >= 5 ? 'scale-y-[0.48] duration-[700ms]' : 'scale-y-0 duration-[500ms]'
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
                  className={`absolute inset-0 bg-orange-500 transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    animationState >= 6 ? 'scale-y-100 duration-[750ms]' : 'scale-y-0 duration-[500ms]'
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
                  className={`absolute inset-0 bg-purple-500 transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    animationState >= 8 ? 'scale-y-100 duration-[600ms]' : animationState >= 7 ? 'scale-y-[0.48] duration-[700ms]' : 'scale-y-0 duration-[500ms]'
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