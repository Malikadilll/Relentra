import React, { useState, useEffect, useRef } from 'react';

export default function SolitaHero() {
  const [animationState, setAnimationState] = useState(0);
  const canvasRef = useRef(null);

  // --- KEEPING YOUR ORIGINAL BACKGROUND LOGIC ---
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
        let size = (Math.random() * 2) + 1;
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        particlesArray.push(new Particle(x, y, Math.random() * 2 - 1, Math.random() * 2 - 1, size, 'rgba(40, 40, 40, 0.6)'));
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
            ctx.strokeStyle = `rgba(40,40,40,${opacity * 0.4})`;
            ctx.lineWidth = 0.5;
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

  // --- UPDATED LAYOUT LOGIC TO REDUCE SCALE ---
  useEffect(() => {
    const timings = [200, 550, 900, 1250, 1850, 2200, 2550, 3000, 3400];
    timings.forEach((timing, index) => {
      setTimeout(() => setAnimationState(index + 1), timing);
    });
  }, []);

  return (
    <div className="relative min-h-[85vh] flex items-center bg-white overflow-hidden pt-16">
      
      {/* YOUR CANVAS REMAINS UNTOUCHED */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
          
          {/* Left Side: Scaled down text  */}
          <div className="w-full lg:w-[50%]">
            <h1 className="font-medium leading-[1.2] text-[#282828] mb-10" style={{ fontFamily: '"Sharp Sans", Helvetica, Arial, sans-serif' }}>
              {['So, a data scientist,', 'a developer &', 'a psychologist meet', 'over coffee...'].map((text, i) => (
                <div key={i} className={`text-[36px] md:text-[46px] xl:text-[52px] transition-all duration-700 ease-out ${
                  animationState >= i + 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}>
                  {text}
                </div>
              ))}
            </h1>
            
            {/* Tagline [cite: 21, 22, 23] */}
            <div className={`border-l-[2px] border-black pl-8 space-y-4 transition-all duration-1000 delay-500 ${
              animationState >= 9 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                Three perspectives. One coffee table. A shared curiosity about why things work or don't.
              </p>
              <p className="text-lg font-bold text-[#282828]">
                Welcome to Relentra.
              </p>
            </div>
          </div>

          {/* Right Side: Scaled down video blocks */}
          <div className="w-full lg:w-[38%] max-w-[420px]">
            <div className="flex gap-3 h-[380px] md:h-[450px]">
              {[
                { src: "1", origin: "bottom", step: 5, color: "bg-gray-100" },
                { src: "2", origin: "center", step: 6, color: "bg-gray-200" },
                { src: "3", origin: "top", step: 7, color: "bg-gray-300" }
              ].map((vid, i) => (
                <div key={i} className="flex-1 rounded-xl overflow-hidden relative">
                  <div className={`absolute inset-0 ${vid.color} transition-all duration-1000 ease-out ${
                    animationState >= vid.step ? 'scale-y-100' : 'scale-y-0'
                  }`} style={{ transformOrigin: vid.origin }}>
                    <video autoPlay loop muted playsInline className="h-full w-full object-cover">
                      <source src={`https://www.solita.fi/wp-content/uploads/2023/11/frontpage-video-person-${vid.src}.mp4`} type="video/mp4" />
                    </video>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}