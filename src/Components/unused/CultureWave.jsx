import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CultureWave = () => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let frameId;
    const scene = new THREE.Scene();
    
    // Use the container's immediate dimensions
    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const count = 3000; // Slightly reduced for mobile performance
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 1.5) * 4;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: '#282828',
      size: 0.015,
      transparent: true,
      opacity: 0.15,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let time = 0;
    const animate = () => {
      time += 0.005;
      const pos = geometry.attributes.position.array;
      for (let i = 0; i < count; i++) {
        const x = pos[i * 3];
        pos[i * 3 + 1] += Math.sin(x + time) * 0.002;
      }
      geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Added overflow-hidden to ensure canvas doesn't bleed
  return <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden" />;
};

export default function Culture() {
  const mainTextStyle = {
    fontFamily: '"Sharp Sans", Helvetica, Arial, sans-serif',
    fontWeight: 700,
    letterSpacing: '-0.02em',
    color: '#282828',
    WebkitFontSmoothing: 'antialiased',
  };

  return (
    <section className="relative bg-white pt-20 pb-24 md:pt-28 md:pb-48 px-6 md:px-10 overflow-hidden w-full">
      <CultureWave />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        <div className="flex flex-col">
          
          <h2 className="text-[11px] md:text-sm font-bold tracking-[0.2em] uppercase text-[#282828] mb-8 md:mb-12 text-left">
            Our Culture
          </h2>

          <div className="w-full">
            {/* Reduced mobile font size to text-[26px] to prevent screen exit */}
            <div 
              style={mainTextStyle} 
              className="w-full mb-16 md:mb-24"
            >
              <p className="text-left md:text-center text-[26px] sm:text-[40px] md:text-[54px] lg:text-[62px] leading-[1.15] break-words">
                We work best in environments
                <br className="hidden sm:block" /> 
                <span className="opacity-40">
                  {" "}that value curiosity, clarity, and calm confidence.
                  <span className="hidden md:inline"> We value clear thinking over clever solutions.</span>
                </span>
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16 w-full">
              {/* Image Container */}
              <div className="w-full md:w-[65%] overflow-hidden"> 
                <img 
                  src="https://www.solita.fi/wp-content/uploads/2023/06/front-culture-1-min.jpg" 
                  alt="Culture" 
                  className="w-full h-auto grayscale-[0.2] hover:grayscale-0 transition-all duration-700 object-cover"
                />
              </div>
              
              {/* Quote Container */}
              <div className="w-full md:w-[35%] text-left">
                <div className="text-red-600 text-6xl font-serif leading-none mb-0">"</div>
                
                <p 
                  className="text-[17px] md:text-[19px] leading-[1.5] font-bold text-[#282828] mb-8" 
                  style={{ fontFamily: '"Sharp Sans", sans-serif' }}
                >
                  Our way of working has matured into a unique culture with strong values, wide autonomy, and possibilities to grow. Everything we have, is in our people.
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden shrink-0">
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
      </div>
    </section>
  );
}