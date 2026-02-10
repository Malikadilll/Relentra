import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Linkedin, Facebook, Instagram, Youtube, Mail, Phone } from 'lucide-react';
import * as THREE from 'three';
import { Link } from 'react-router-dom'; // Ensure this is imported

function ParticleBackground() {
  const points = useRef();
  const count = 5000; 
  const [positions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() * 6) - 10; 
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15; 
      pos[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    return [pos];
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      points.current.geometry.attributes.position.array[i3 + 1] += Math.cos(t * 0.2 + points.current.geometry.attributes.position.array[i3]) * 0.003;
    }
    points.current.geometry.attributes.position.needsUpdate = true;
    points.current.rotation.y = Math.sin(t * 0.1) * 0.05;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#ffffff"
        transparent
        opacity={0.3}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-black text-white pt-24 pb-12 px-12 md:px-24 lg:px-40 font-sans overflow-hidden">
      
      {/* Three.js Canvas Container */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ParticleBackground />
        </Canvas>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24">
          <div className="max-w-xl">
            <p className="text-[10px] tracking-[0.3em] text-gray-400 uppercase mb-5 font-semibold">
              Relentra Insights Newsletter
            </p>
            <h2 className="text-3xl md:text-4xl font-medium leading-tight">
              Get top industry insights and stay <br className="hidden md:block" /> ahead with us.
            </h2>
          </div>
          
          <div className="mt-8 md:mt-0 flex flex-col gap-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-white transition-colors">
                <Mail size={20} className="text-gray-400 group-hover:text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-widest text-gray-500 font-bold">Email:</span>
                <a href="mailto:info@relentra.io" className="text-[15px] text-gray-300 hover:text-white transition-colors">
                  info@relentra.io
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-white transition-colors">
                <Phone size={20} className="text-gray-400 group-hover:text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-widest text-gray-500 font-bold">Phone:</span>
                <a href="tel:+358406261505" className="text-[15px] text-gray-300 hover:text-white transition-colors">
                  +358 40 626 1505
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Locations */}
        <div className="mb-24">
          <p className="text-[10px] tracking-[0.3em] text-gray-500 uppercase mb-8 font-semibold">Our Locations</p>
          <div className="flex flex-wrap gap-x-24 gap-y-4 text-[15px]">
            <span className="font-medium">Finland</span>
            <span className="font-medium">Pakistan</span>
            <span className="text-gray-500 font-medium">UAE (Coming Soon)</span>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div>
            <p className="text-[10px] tracking-[0.3em] text-gray-500 uppercase mb-5 font-semibold">Get in Touch</p>
            <p className="text-sm text-gray-400 mb-8 max-w-[220px] leading-relaxed">
                How can we help? Drop us a line and let's talk.
            </p>
            <a 
              href="mailto:info@relentra.io" 
              className="inline-block border border-white px-7 py-2.5 text-[10px] font-bold tracking-widest hover:bg-white hover:text-black transition-all"
            >
              CONTACT US
            </a>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.3em] text-gray-500 uppercase mb-5 font-semibold">Media</p>
            <p className="text-sm text-gray-400 mb-8 max-w-[220px] leading-relaxed">
                Latest news, resources and material for media.
            </p>
            <button className="border border-white px-7 py-2.5 text-[10px] font-bold tracking-widest hover:bg-white hover:text-black transition-all">
              NEWSROOM
            </button>
          </div>

          <div className="hidden lg:block"></div>

          <div className="flex flex-col justify-end">
            <p className="text-[10px] tracking-[0.3em] text-gray-500 uppercase mb-6 font-semibold">Follow Us</p>
            <div className="flex gap-2.5">
              <SocialIcon href="https://linkedin.com/company/relentra/" icon={<Linkedin size={18} />} />
              <SocialIcon href="https://www.facebook.com/people/Relentra/61585171402825/" icon={<Facebook size={18} />} />
              <SocialIcon href="https://www.instagram.com/relentraofficial/" icon={<Instagram size={18} />} />
              <SocialIcon href="https://www.youtube.com/@RelentraOfficial" icon={<Youtube size={18} />} />
            </div>
          </div>
        </div>

        {/* Footer Bottom Links */}
        <div className="flex flex-col md:flex-row justify-end gap-8 text-[11px] text-gray-500 border-t border-white/10 pt-10">
          {/* UPDATED: Internal route for Privacy Policy */}
          <Link to="/services">Services</Link>
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy policy →</Link>
          <Link to="/cookies-policy" className="hover:text-white transition-colors">Cookie settings →</Link>
          <Link to="/terms-conditions" className="hover:text-white transition-colors">Terms & conditions →</Link>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon, href }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-11 h-11 bg-[#121212] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#181818] border border-white/5 transition-all rounded-sm"
    >
      {icon}
    </a>
  );
}