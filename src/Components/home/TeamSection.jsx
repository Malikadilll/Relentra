import React from 'react';
import { Linkedin, Facebook, Instagram } from 'lucide-react';

const TeamSection = () => {
  // --- ADD OR REMOVE TEAM MEMBERS HERE ---
  const teamMembers = [
    {
      id: 1,
      name: "Nasir Hussain",
      role: "Full Stack Developer",
      image: "https://techfy.io/wp-content/uploads/2021/08/NasirHussain_FullStackDe.jpeg",
      socials: { linkedin: "#", facebook: "#", instagram: "#" }
    },
    {
      id: 2,
      name: "Umar Shahi",
      role: "Software Engineer",
      image: "https://techfy.io/wp-content/uploads/2021/04/UmarShahi.jpeg",
      socials: { linkedin: "#", facebook: "#", instagram: "#" }
    },
    {
      id: 3,
      name: "Maya Brooks",
      role: "Creative Director",
      image: "https://techfy.io/wp-content/uploads/2021/04/image-71.png",
      socials: { linkedin: "#", facebook: "#", instagram: "#" }
    },
    {
      id: 4,
      name: "Azka Tariq",
      role: "Operations Manager",
      image: "https://techfy.io/wp-content/uploads/2026/01/image12.jpeg",
      socials: { linkedin: "#", facebook: "#", instagram: "#" }
    }
  ];

  // Matching your textStyle variable
  const bodyTextStyle = {
    fontFamily: '"Sharp Sans", Helvetica, Arial, sans-serif',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale'
  };

  const headerTextStyle = {
    fontFamily: '"Sharp Sans Display No1", Helvetica, Arial, sans-serif',
    letterSpacing: '-0.437248px'
  };

  return (
    <section className="bg-white py-24 px-4 md:px-10">
      <div className="w-full mx-auto">
        <h2 
          className="text-[#282828] mb-16 text-center"
          style={{
            ...headerTextStyle,
            fontSize: 'clamp(40px, 5vw, 62.464px)',
            lineHeight: '1',
            fontWeight: '700',
          }}
        >
          Our Team
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              
              {/* IMAGE CONTAINER */}
              <div className="group relative w-full aspect-[4/5] mb-8">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="h-full w-full object-cover rounded-2xl transition-all duration-700 ease-in-out
                             grayscale group-hover:grayscale-0 
                             group-hover:shadow-[0_0_50px_rgba(255,255,255,1)]
                             group-has-[.social-link:hover]:grayscale
                             group-has-[.social-link:hover]:shadow-none" 
                />

                {/* SOCIAL BUTTONS */}
                <div className="absolute inset-0 flex items-center justify-center gap-5 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a href={member.socials.linkedin} className="social-link p-3.5 bg-white rounded-full hover:bg-[#282828] hover:text-white transition-all duration-300 text-[#282828] shadow-xl scale-90 hover:scale-110">
                    <Linkedin size={22} />
                  </a>
                  <a href={member.socials.facebook} className="social-link p-3.5 bg-white rounded-full hover:bg-[#282828] hover:text-white transition-all duration-300 text-[#282828] shadow-xl scale-90 hover:scale-110">
                    <Facebook size={22} />
                  </a>
                  <a href={member.socials.instagram} className="social-link p-3.5 bg-white rounded-full hover:bg-[#282828] hover:text-white transition-all duration-300 text-[#282828] shadow-xl scale-90 hover:scale-110">
                    <Instagram size={22} />
                  </a>
                </div>
              </div>

              {/* TEXT INFO */}
              <div className="text-center" style={bodyTextStyle}>
                <h3 
                  className="text-[#282828] hover:text-[#fbbf24] transition-colors duration-500 cursor-default"
                  style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    lineHeight: '1.2',
                    marginBottom: '4px'
                  }}
                >
                  {member.name}
                </h3>
                <p 
                  style={{
                    fontSize: '16px',
                    color: '#282828',
                    fontWeight: '500',
                    opacity: '0.6',
                    letterSpacing: '.005em'
                  }}
                >
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;