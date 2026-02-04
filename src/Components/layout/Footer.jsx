import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 md:px-12 lg:px-16">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          
          {/* Brand & CTA */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-6">RELENTRA</h2>
            <p className="text-gray-400 mb-8 max-w-xs">
              Get top industry insights and stay ahead with us.
            </p>
            <button className="bg-white text-black px-8 py-3 font-bold hover:bg-gray-200 transition-colors">
              SUBSCRIBE
            </button>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-6">Our Locations</h3>
            <ul className="space-y-2 text-lg">
              <li>Finland</li>
              <li>Pakistan</li>
              <li className="text-gray-500">UAE (Coming Soon)</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-6">Get In Touch</h3>
            <div className="space-y-4">
               <div>
                 <p className="text-gray-500 text-sm uppercase font-bold">Email</p>
                 <a href="mailto:info@relentra.io" className="text-lg hover:text-orange-500 transition-colors">info@relentra.io</a>
               </div>
               <div>
                 <p className="text-gray-500 text-sm uppercase font-bold">Phone</p>
                 <a href="tel:+358406261505" className="text-lg hover:text-orange-500 transition-colors">+358 40 626 1505</a>
               </div>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-6">Follow Us</h3>
            <div className="flex gap-4">
              {['LinkedIn', 'Facebook', 'Instagram', 'YouTube'].map(social => (
                <a key={social} href="#" className="text-gray-400 hover:text-white transition-colors">{social}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:row justify-between text-sm text-gray-500 gap-4">
          <p>© 2026 Relentra. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
            <a href="/cookies" className="hover:text-white">Cookies Policy</a>
            <a href="/terms" className="hover:text-white">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}