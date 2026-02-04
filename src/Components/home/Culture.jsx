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

    // Create a flat plane of particles
    const count = 4000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;     // x
      positions[i * 3 + 1] = (Math.random() - 1.5) * 4;  // y (Positioned lower)
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5;  // z
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
        // Create a slow, rolling wave effect at the bottom
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
  return (
    <section className="relative bg-white pt-28 pb-48 px-6 md:px-10 overflow-hidden">
      {/* Background Animation */}
      <CultureWave />

      <div className="relative z-10 w-full">
        <div className="flex items-stretch gap-6 md:gap-10">
          {/* Vertical accent line */}
          <div className="relative flex flex-col items-center">
            <div className="w-[1.5px] h-full bg-gray-200" />
            <div className="absolute top-0 w-2 h-2 rounded-full bg-gray-400 -translate-y-1/2" />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h2 className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-400 mb-10">
              Our Culture
            </h2>

            <p className="text-[32px] md:text-[44px] leading-tight font-medium max-w-[1400px]">
              <span className="text-[#282828]">
                We work best in environments
              </span>{" "}
              <span className="text-gray-400">
                that value curiosity, clarity, and calm confidence.
                We value clear thinking over clever solutions.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}