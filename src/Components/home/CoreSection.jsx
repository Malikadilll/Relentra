import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const CoreBackground = () => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const PARTICLE_COUNT = 5000;
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(50, container.offsetWidth / container.offsetHeight, 0.1, 100);
    camera.position.set(1.5, 0.5, 4); 

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const initialPositions = new Float32Array(PARTICLE_COUNT * 3); 
    
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const angle = (i / PARTICLE_COUNT) * Math.PI * 20; 
      const radius = (i / PARTICLE_COUNT) * 2.5; 
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const z = (Math.random() - 0.5) * 0.2; 

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      initialPositions[i * 3] = x;
      initialPositions[i * 3 + 1] = y;
      initialPositions[i * 3 + 2] = z;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      color: '#282828',
      size: 0.008,
      transparent: true,
      opacity: 0.35,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(particlesGeometry, material);
    particles.position.x = 1.0; 
    particles.rotation.x = -Math.PI * 0.3;
    scene.add(particles);

    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) - 0.5;
      mouseY = (e.clientY / window.innerHeight) - 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;
    let frameId;
    const tick = () => {
      time += 0.015;
      const posAttr = particlesGeometry.attributes.position;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const x_val = initialPositions[i * 3];
        const y_val = initialPositions[i * 3 + 1];
        const dist = Math.sqrt(x_val * x_val + y_val * y_val);
        const wave = Math.sin(dist * 2.5 - time) * 0.15;
        posAttr.array[i * 3 + 2] = wave;
        posAttr.array[i * 3] = x_val + Math.cos(time + dist) * 0.02;
        posAttr.array[i * 3 + 1] = y_val + Math.sin(time + dist) * 0.02;
      }
      posAttr.needsUpdate = true;
      particles.rotation.z += 0.0005; 
      
      particles.position.x += (1.0 + mouseX * 0.3 - particles.position.x) * 0.05;
      particles.position.y += (-mouseY * 0.3 - particles.position.y) * 0.05;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(tick);
    };
    tick();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.offsetWidth / container.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.offsetWidth, container.offsetHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

export default function CoreSection() {
  const [hasAppeared, setHasAppeared] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasAppeared(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const fullText = "Relentra is a Finland-based data, AI, and analytics consultancy. We help organizations turn data and AI into clear, decision-ready systems — designed for how people actually think, decide, and work.";
  const words = fullText.split(" ");
  const grayPart = "Relentra is a Finland-based data, AI, and analytics consultancy.";

  return (
    <section id="work" ref={sectionRef} className="relative bg-white py-12 md:py-24 px-6 md:px-12 lg:px-16 overflow-hidden flex flex-col items-center justify-center">
      <CoreBackground />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col items-start">
        
        {/* "Our Core" Title - Reduced spacing (20% of previous) */}
        <h2 className={`text-sm font-bold tracking-widest uppercase text-[#282828] mb-4 md:mb-6 transition-opacity duration-1000 ${hasAppeared ? 'opacity-100' : 'opacity-0'}`}>
          Our Core
        </h2>
        
        {/* Main Text Content */}
        <div className="w-full flex items-center justify-center">
          <p 
            className="flex flex-wrap justify-center text-center"
            style={{ 
              fontFamily: '"Sharp Sans Display No1", Helvetica, Arial, sans-serif',
              fontWeight: 700,
            }}
          >
            {words.map((word, i) => {
              const cumulativeString = words.slice(0, i + 1).join(" ");
              const isGray = grayPart.includes(word) && cumulativeString.length <= grayPart.length;

              return (
                <span
                  key={i}
                  className={`inline-block mx-1 md:mx-2 transition-all duration-700 ease-out ${
                    hasAppeared ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  } text-[24px] sm:text-[36px] md:text-[50px] lg:text-[62.464px] leading-tight md:leading-[68px]`}
                  style={{ 
                    transitionDelay: `${i * 30}ms`,
                    letterSpacing: '-0.437248px',
                    color: isGray ? '#9ca3af' : '#282828'
                  }}
                >
                  {word}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}