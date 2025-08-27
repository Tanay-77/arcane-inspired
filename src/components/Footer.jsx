import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const socialLinks = [
  { name: 'Twitter', url: 'https://twitter.com/playvalorant' },
  { name: 'Instagram', url: 'https://www.instagram.com/valorant/' },
  { name: 'YouTube', url: 'https://www.youtube.com/playvalorant' },
  { name: 'Discord', url: 'https://discord.gg/valorant' },
  { name: 'Twitch', url: 'https://www.twitch.tv/valorant' }
];

const footerLinks = [
  {
    title: 'VALORANT',
    links: ['Download', 'Champions Tour', 'News', 'Support', 'Esports']
  },
  {
    title: 'RIOT GAMES',
    links: ['League of Legends', 'Teamfight Tactics', 'Legends of Runeterra', 'Riot Forge', 'Riot Mobile']
  },
  {
    title: 'LEGAL',
    links: ['Privacy Notice', 'Terms of Service', 'Cookie Policy', 'Accessibility']
  }
];

const Footer = () => {
  useGSAP(() => {
    gsap.from('.footer-content', {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.footer-container',
        start: 'top bottom',
        end: 'center bottom',
        scrub: 1
      }
    });
  });
  
  return (
    <footer className="footer-container bg-blue-200 text-blue-100">
      <div className="footer-content max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
       
          <div className="col-span-1 lg:col-span-1 flex flex-col">
            <div className="mb-6 flex items-center">
              <img src="/img/logo.png" alt="Valorant Logo" className="h-16 w-auto" />
              <h1 className="ml-3 font-valorant text-2xl tracking-tighter" 
                style={{fontFamily: '"valorant", "Arial Black", sans-serif'}}>
                VALOR<span className="text-pink-100">A</span>NT
              </h1>
            </div>
            <p className="font-circular-web text-sm mb-6 text-blue-100/80">
              A 5v5 character-based tactical shooter where precise gunplay meets unique agent abilities.
            </p>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-pink-100 transition-colors duration-300"
                >
                  <span className="font-valorant text-sm">{social.name[0]}</span>
                </a>
              ))}
            </div>
            <div className="flex items-center">
              <img src="/img/riot.png" alt="Riot Games Logo" className="h-8 w-auto mr-2" />
              <span className="text-xs text-blue-100/70">© 2025 Riot Games, Inc.</span>
            </div>
          </div>

      
          {footerLinks.map((column) => (
            <div key={column.title} className="col-span-1">
              <h3 className="font-valorant text-lg mb-4 tracking-tight">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-blue-100/70 hover:text-pink-100 transition-colors duration-200 font-circular-web text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-blue-100/50 mb-4 md:mb-0">
              ©2025 Riot Games, Inc. VALORANT and any associated logos are trademarks, service marks, 
              or registered trademarks of Riot Games, Inc.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
