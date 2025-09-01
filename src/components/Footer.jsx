import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSpa, 
  faLeaf, 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope, 
  faClock 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faInstagram, 
  faTwitter, 
  faPinterest 
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[rgba(197,188,174,0.95)] to-[rgba(168,155,134,0.95)] text-[#2C3E50] pt-20 px-8 pb-8 mt-auto relative overflow-hidden shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
      {/* Background pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none z-10">
        <FontAwesomeIcon icon={faSpa} className="absolute text-[10rem] text-[#8B5A2B] top-1/5 left-1/10" />
        <FontAwesomeIcon icon={faLeaf} className="absolute text-[10rem] text-[#8B5A2B] bottom-[15%] right-1/10" />
      </div>
      
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8B5A2B] to-transparent"></div>
      
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-20">
        {/* Company Info Column */}
        <div className="footer-column">
          <h3 className="text-xl mb-7 relative inline-block font-semibold tracking-wide font-['Playfair_Display']">
            WOSHO Premium
            <span className="absolute -bottom-2.5 left-0 w-12 h-0.5 bg-[#8B5A2B] rounded transition-all duration-300 group-hover:w-16"></span>
          </h3>
          <p className="text-[#4A5568] leading-relaxed mb-6">
            Elevating garment care to an art form with premium cleaning services tailored for your most valued pieces.
          </p>
          <div className="flex gap-4 mt-8">
            <a href="#" className="text-[#2C3E50] bg-[rgba(139,90,43,0.15)] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm border border-[rgba(139,90,43,0.2)] hover:bg-[#8B5A2B] hover:text-white hover:-translate-y-1 hover:scale-110 hover:shadow-md">
              <FontAwesomeIcon icon={faFacebookF} className="text-sm" />
            </a>
            <a href="#" className="text-[#2C3E50] bg-[rgba(139,90,43,0.15)] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm border border-[rgba(139,90,43,0.2)] hover:bg-[#8B5A2B] hover:text-white hover:-translate-y-1 hover:scale-110 hover:shadow-md">
              <FontAwesomeIcon icon={faInstagram} className="text-sm" />
            </a>
            <a href="#" className="text-[#2C3E50] bg-[rgba(139,90,43,0.15)] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm border border-[rgba(139,90,43,0.2)] hover:bg-[#8B5A2B] hover:text-white hover:-translate-y-1 hover:scale-110 hover:shadow-md">
              <FontAwesomeIcon icon={faTwitter} className="text-sm" />
            </a>
            <a href="#" className="text-[#2C3E50] bg-[rgba(139,90,43,0.15)] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm border border-[rgba(139,90,43,0.2)] hover:bg-[#8B5A2B] hover:text-white hover:-translate-y-1 hover:scale-110 hover:shadow-md">
              <FontAwesomeIcon icon={faPinterest} className="text-sm" />
            </a>
          </div>
        </div>
        
        {/* Quick Links Column */}
        <div className="footer-column group">
          <h3 className="text-xl mb-7 relative inline-block font-semibold tracking-wide font-['Playfair_Display']">
            Quick Links
            <span className="absolute -bottom-2.5 left-0 w-12 h-0.5 bg-[#8B5A2B] rounded transition-all duration-300 group-hover:w-16"></span>
          </h3>
          <ul className="list-none p-0">
            {['Home', 'Services', 'Pricing', 'Blog', 'About Us'].map((item, index) => (
              <li key={index} className="mb-4 relative pl-6">
                <span className="absolute left-0 top-0 text-[#8B5A2B] font-bold">•</span>
                <a href="#" className="text-[#4A5568] no-underline transition-all duration-300 inline-block hover:text-[#2C3E50] hover:translate-x-1">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Services Column */}
        <div className="footer-column group">
          <h3 className="text-xl mb-7 relative inline-block font-semibold tracking-wide font-['Playfair_Display']">
            Services
            <span className="absolute -bottom-2.5 left-0 w-12 h-0.5 bg-[#8B5A2B] rounded transition-all duration-300 group-hover:w-16"></span>
          </h3>
          <ul className="list-none p-0">
            {['Dry Cleaning', 'Wash & Fold', 'Ironing', 'Shoe Care', 'Specialty Fabrics'].map((item, index) => (
              <li key={index} className="mb-4 relative pl-6">
                <span className="absolute left-0 top-0 text-[#8B5A2B] font-bold">•</span>
                <a href="#" className="text-[#4A5568] no-underline transition-all duration-300 inline-block hover:text-[#2C3E50] hover:translate-x-1">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Contact Column */}
        <div className="footer-column group">
          <h3 className="text-xl mb-7 relative inline-block font-semibold tracking-wide font-['Playfair_Display']">
            Contact
            <span className="absolute -bottom-2.5 left-0 w-12 h-0.5 bg-[#8B5A2B] rounded transition-all duration-300 group-hover:w-16"></span>
          </h3>
          <ul className="list-none p-0">
            <li className="mb-4 relative pl-6">
              <span className="absolute left-0 top-0 text-[#8B5A2B] font-bold">•</span>
              <a href="#" className="text-[#4A5568] no-underline transition-all duration-300 inline-block hover:text-[#2C3E50] hover:translate-x-1">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 text-[#8B5A2B] mr-2 inline-block" />
                123 Premium Lane, Fashion District
              </a>
            </li>
            <li className="mb-4 relative pl-6">
              <span className="absolute left-0 top-0 text-[#8B5A2B] font-bold">•</span>
              <a href="#" className="text-[#4A5568] no-underline transition-all duration-300 inline-block hover:text-[#2C3E50] hover:translate-x-1">
                <FontAwesomeIcon icon={faPhone} className="w-4 text-[#8B5A2B] mr-2 inline-block" />
                +1 (555) 123-4567
              </a>
            </li>
            <li className="mb-4 relative pl-6">
              <span className="absolute left-0 top-0 text-[#8B5A2B] font-bold">•</span>
              <a href="#" className="text-[#4A5568] no-underline transition-all duration-300 inline-block hover:text-[#2C3E50] hover:translate-x-1">
                <FontAwesomeIcon icon={faEnvelope} className="w-4 text-[#8B5A2B] mr-2 inline-block" />
                care@woshopremium.com
              </a>
            </li>
            <li className="mb-4 relative pl-6">
              <span className="absolute left-0 top-0 text-[#8B5A2B] font-bold">•</span>
              <a href="#" className="text-[#4A5568] no-underline transition-all duration-300 inline-block hover:text-[#2C3E50] hover:translate-x-1">
                <FontAwesomeIcon icon={faClock} className="w-4 text-[#8B5A2B] mr-2 inline-block" />
                Mon-Sat: 8AM-8PM
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="mt-16 pt-8 border-t border-[rgba(139,90,43,0.2)] text-center text-[#4A5568] text-sm relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-[#8B5A2B]"></div>
        <p>&copy; 2023 WOSHO Premium Laundry Services. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;