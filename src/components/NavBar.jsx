import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpa } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
 
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Navbar becomes more solid on scroll
      setIsScrolled(scrollTop > 50);
      
      // Hide/show navbar on scroll direction
      if (scrollTop > 100 && scrollTop > lastScrollTop) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  const toggleMenu =() => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={`fixed top-0 w-full z-50 transition-all duration-300 bg-gradient-to-r from-[#c5bcae] to-[#a89b86] backdrop-blur shadow-lg ${isHidden ? '-translate-y-full' : 'translate-y-0'} ${isScrolled ? 'bg-[#c9beae] bg-opacity-98 shadow-xl' : ''}`}>
      <div className="relative w-full mx-auto">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
        
        <nav className="flex justify-between items-center py-4 px-4 sm:px-8 w-full">
          <div className="flex items-center text-2xl font-bold text-[#2C3E50] font-playfair">
            <FontAwesomeIcon icon={faSpa} className="text-[#8B5A2B] mr-2 text-xl" />
            <span>LazyDrafts</span>
          </div>
          
          <div className={`lg:flex items-center gap-8 absolute lg:static top-full left-0 w-full lg:w-auto bg-[#c9beae] lg:bg-transparent backdrop-blur-lg lg:backdrop-blur-none flex-col lg:flex-row py-4 lg:py-0 px-8 lg:px-0 transition-all duration-300 ${isMenuOpen ? 'flex' : 'hidden lg:flex'}`}>
           {[
        { name: "Home", to: "home" },
        { name: "Services", to: "services" },
        { name: "About", to: "about" },
        { name: "FAQ", to: "faq" }
       ].map((item) => (
       <Link
       key={item.name}
       to={item.to}
       smooth={true}
      duration={600}
      offset={0} 
      className="cursor-pointer text-[#4A5568] font-medium hover:text-[#2C3E50] transition-colors duration-300 relative py-2 lg:py-0 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-[#8B5A2B] after:transition-all after:duration-300 hover:after:w-full"
      onClick={closeMenu}
     >
      {item.name}
    </Link>
    ))}
            <div className="flex flex-col lg:flex-row gap-4 mt-4 lg:mt-0 lg:ml-8">
              <a href="#" className="px-4 py-2 font-semibold text-[#2C3E50] border border-[#2C3E50] rounded hover:bg-[#2C3E50]/10 transition-colors duration-300 text-center">
                Login
              </a>
              <a href="#" className="px-4 py-2 font-semibold text-[#2C3E50] border border-[#2C3E50] rounded hover:bg-[#2C3E50]/10 transition-colors duration-300 text-center">
                Sign Up
              </a>
            </div>
          </div>
          
          <button 
            className="lg:hidden flex flex-col justify-between w-6 h-5 bg-transparent border-none cursor-pointer z-50"
            onClick={toggleMenu}
          >
            <span className={`w-full h-0.5 bg-[#2C3E50] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-[#2C3E50] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`w-full h-0.5 bg-[#2C3E50] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </nav>
      </div>
    </div>
  );
};
export default Navbar