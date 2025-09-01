import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true); 
  }, []);

  const handleCtaClick = (e) => {
    e.preventDefault();
    
    // Create ripple effect
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.className = 'absolute rounded-full bg-white/30 scale-0 animate-ripple pointer-events-none';
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <section className={`relative h-screen w-full flex items-center justify-center overflow-y-hidden transition-all duration-300 `} style={{marginTop: '0'}}>
      {/* Background with image */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#c9beae]/90 via-[#c9beae]/85 to-[#c9beae]/90 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-[-1]"
          style={{ backgroundImage: "url('/NEW.png')" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center mx-auto lg:mr-[60%] max-w-2xl lg:max-w-3xl px-4 sm:px-8 lg:px-4 w-full">
        <div className={`transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-[#8B5A2B] font-semibold uppercase tracking-widest text-sm mb-4 opacity-0 animate-fade-in-up animation-delay-300 animation-fill-forwards">
            STOP THE STRUGGLE
          </div>
        </div>
        
        <div className={`transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-[#2C3E50] leading-tight mb-6 text-shadow-lg opacity-0 animate-fade-in-up animation-delay-500 animation-fill-forwards">
            Feeling lazy? Or just defeated by bad notes?
          </h1>
        </div>
        
        <div className={`transition-all duration-700 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xl text-[#4A5568] leading-relaxed mb-10 opacity-0 animate-fade-in-up animation-delay-700 animation-fill-forwards">
            It's not you—it's the method. Stop struggling and let autopilot create perfect, organized notes for you.
          </p>
        </div>
        
        <div className={`transition-all duration-700 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a 
            href="#" 
            className="inline-block px-8 sm:px-12 py-4 text-lg font-semibold text-white bg-gradient-to-br from-[#8B5A2B] to-[#6D4C41] rounded-full shadow-lg hover:shadow-xl hover:from-[#6D4C41] hover:to-[#8B5A2B] transition-all duration-400 relative overflow-hidden opacity-0 animate-fade-in-up animation-delay-900 animation-fill-forwards will-change-transform-shadow"
            onClick={handleCtaClick}
          >
            Free Me From Bad Notes
            <span className="absolute inset-0 -left-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-600 hover:left-full"></span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-0 animate-fade-in animation-delay-2000 animation-fill-forwards">
        <div className="w-6 h-6 border-r-2 border-b-2 border-[#8B5A2B] rotate-45 animate-bounce"></div>
      </div>
    </section>
  );
};
export default Hero