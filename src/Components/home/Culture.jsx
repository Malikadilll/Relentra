import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CultureWave = () => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);

    const count = 4000;
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
      size: 0.012,
      transparent: true,
      opacity: 0.2,
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
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      camera.aspect = container.offsetWidth / container.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.offsetWidth, container.offsetHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

export default function Culture() {
  // Matched exactly to the CoreSection "Main Text Content" properties
  const mainTextStyle = {
    fontFamily: '"Sharp Sans Display No1", Helvetica, Arial, sans-serif',
    fontWeight: 700,
    letterSpacing: '-0.437248px',
    color: '#282828',
    WebkitFontSmoothing: 'antialiased'
  };

  return (
    <section className="relative bg-white pt-28 pb-48 px-[100px] overflow-hidden">
      <CultureWave />

      <div className="relative z-10 w-full">
        <div className="flex items-stretch gap-10">
          {/* Vertical accent line */}


          {/* Content */}
          <div className="flex-1">
            <h2 className="text-xs font-semibold tracking-[0.25em] uppercase text-black mb-10">
              Our Culture
            </h2>

            <div style={mainTextStyle} className="w-full max-w-[1400px] flex justify-center">
  <p className="text-center text-[24px] sm:text-[36px] md:text-[50px] lg:text-[62.464px] leading-tight md:leading-[68px]">
    We work best in environments
    <br />
    <span className="opacity-50">
      that value curiosity, clarity, and calm confidence.
      
      We value clear thinking over clever solutions.
    </span>
  </p>
</div>

          {/* Quote/Image Section */}
<div className="mt-24 flex flex-col md:flex-row items-center gap-16 w-full">
  {/* Image on the left (70%) */}
  <div className="w-full md:w-[70%]"> 
    <img 
      src="https://www.solita.fi/wp-content/uploads/2023/06/front-culture-1-min.jpg" 
      alt="Solita Culture" 
      className="w-full grayscale-[0.2] hover:grayscale-0 transition-all duration-700 shadow-sm"
    />
  </div>
  
  {/* Text strictly to the right (30%) */}
  <div className="w-full md:w-[30%] text-left">
    {/* Reduced margin and removed line-height padding */}
    <div className="text-red-600 text-5xl font-serif leading-none mb-2">"</div>
    
    <p 
      className="text-[16px] lg:text-[18px] leading-tight font-bold text-[#282828] mb-8" 
      style={{ fontFamily: '"Sharp Sans", sans-serif' }}
    >
      Our way of working has matured into a unique culture with strong values, wide autonomy, and possibilities to grow. Everything we have, is in our people.
    </p>

    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
      <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden border border-gray-100 shrink-0">
        <img 
          src="https://www.solita.fi/wp-content/uploads/2022/12/Outi-Sivonen-Solita-150x150.jpeg" 
          alt="Outi Sivonen"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-left">
        <p className="font-bold text-sm text-[#282828]">Outi Sivonen</p>
        <p className="text-xs text-gray-500 uppercase tracking-wider">Chief Human Resources Officer, Solita</p>
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