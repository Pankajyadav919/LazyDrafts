import React, { useEffect, useRef } from 'react';

const PremiumServices = () => {
  const serviceItemsRef = useRef([]);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    serviceItemsRef.current.forEach(item => {
      if (item) observer.observe(item);
    });
    
    return () => {
      serviceItemsRef.current.forEach(item => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-5 bg-[#f8f7f5]">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-[#2C3E50] mb-5 relative inline-block">
            Our Premium Services
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#8B5A2B]"></span>
          </h2>
          <p className="text-xl text-[#4A5568] italic max-w-2xl mx-auto leading-relaxed mt-8">
            Experience the exceptional care your garments deserve with our meticulously crafted services
          </p>
        </div>

        {/* SVG for gradient definitions */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5A2B" />
              <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2C3E50" />
              <stop offset="100%" stopColor="#4A5568" />
            </linearGradient>
          </defs>
        </svg>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-16 lg:gap-24 justify-items-center mt-10">
          {/* Service Item 1 - Premium Dry Cleaning */}
          <div 
            ref={el => serviceItemsRef.current[0] = el}
            className="text-center max-w-md w-full relative perspective-1000"
          >
            <div className="relative w-40 h-40 mx-auto mb-10 transform-style-preserve-3d animate-float">
              <svg className="progress-ring w-40 h-40 rotate-[-90deg] drop-shadow-md" viewBox="0 0 160 160">
                <circle 
                  className="progress-ring-bg" 
                  cx="80" cy="80" r="70" 
                  fill="none" 
                  stroke="rgba(197, 188, 174, 0.3)" 
                  strokeWidth="6" 
                  strokeLinecap="round"
                />
                <circle 
                  className="progress-ring-progress animate-progress" 
                  cx="80" cy="80" r="70" 
                  fill="none" 
                  stroke="url(#gradient)" 
                  strokeWidth="6" 
                  strokeLinecap="round"
                  strokeDasharray="440" 
                  strokeDashoffset="220"
                />
              </svg>
              <div className="service-icon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center bg-[#FFFDF8] rounded-full shadow-lg transition-all duration-500 hover:scale-110 hover:rotate-6 hover:shadow-xl">
                <svg className="w-8 h-8 text-[#8B5A2B] transition-all duration-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
            
            <h3 className="font-playfair text-2xl font-semibold text-[#2C3E50] mb-6 relative inline-block">
              Premium Dry Cleaning
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-10 h-0.5 bg-[#8B5A2B] transition-all duration-500 group-hover:w-20"></span>
            </h3>
            
            <p className="text-[#4A5568] text-base leading-relaxed text-center transition-transform duration-500 group-hover:-translate-y-1">
              <strong className="text-[#2C3E50] font-semibold">We understand the</strong> importance of garment care. Our team uses specialized techniques and eco-friendly solvents to delicately clean your finest garments, preserving their quality and extending their lifespan.
            </p>
            
            {/* Glow effect */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-44 h-44 rounded-full bg-radial-gradient-circle opacity-0 transition-opacity duration-500 group-hover:opacity-100 -z-10"></div>
          </div>

          {/* Service Item 2 - Expert Alterations */}
          <div 
            ref={el => serviceItemsRef.current[1] = el}
            className="text-center max-w-md w-full relative perspective-1000"
          >
            <div className="relative w-40 h-40 mx-auto mb-10 transform-style-preserve-3d animate-float animation-delay-1000">
              <svg className="progress-ring w-40 h-40 rotate-[-90deg] drop-shadow-md" viewBox="0 0 160 160">
                <circle 
                  className="progress-ring-bg" 
                  cx="80" cy="80" r="70" 
                  fill="none" 
                  stroke="rgba(197, 188, 174, 0.3)" 
                  strokeWidth="6" 
                  strokeLinecap="round"
                />
                <circle 
                  className="progress-ring-progress animate-progress" 
                  cx="80" cy="80" r="70" 
                  fill="none" 
                  stroke="url(#gradient2)" 
                  strokeWidth="6" 
                  strokeLinecap="round"
                  strokeDasharray="440" 
                  strokeDashoffset="220"
                />
              </svg>
              <div className="service-icon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center bg-[#FFFDF8] rounded-full shadow-lg transition-all duration-500 hover:scale-110 hover:rotate-6 hover:shadow-xl">
                <svg className="w-8 h-8 text-[#2C3E50] transition-all duration-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
                </svg>
              </div>
            </div>
            
            <h3 className="font-playfair text-2xl font-semibold text-[#2C3E50] mb-6 relative inline-block">
              Expert Alterations
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-10 h-0.5 bg-[#8B5A2B] transition-all duration-500 group-hover:w-20"></span>
            </h3>
            
            <p className="text-[#4A5568] text-base leading-relaxed text-center transition-transform duration-500 group-hover:-translate-y-1">
              <strong className="text-[#2C3E50] font-semibold">Our tailoring experts</strong> bring precision and care to every alteration. We specialize in garment reshaping, hemming, and custom adjustments to ensure your clothing fits perfectly and enhances your appearance.
            </p>
            
            {/* Glow effect */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-44 h-44 rounded-full bg-radial-gradient-circle opacity-0 transition-opacity duration-500 group-hover:opacity-100 -z-10"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes progressAnimation {
          from { stroke-dashoffset: 440; }
          to { stroke-dashoffset: 220; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animate-progress {
          animation: progressAnimation 2.5s ease-out forwards;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        
        .bg-radial-gradient-circle {
          background: radial-gradient(circle, rgba(139, 90, 43, 0.1) 0%, transparent 70%);
        }
        
        /* Group hover effects */
        .group:hover .service-icon {
          transform: translate(-50%, -50%) scale(1.1) rotate(5deg) !important;
          box-shadow: 0 12px 30px rgba(139, 90, 43, 0.25) !important;
        }
        
        .group:hover h3 span {
          width: 80px !important;
        }
        
        .group:hover p {
          transform: translateY(-5px);
        }
        
        .group:hover .bg-radial-gradient-circle {
          opacity: 1 !important;
        }
        
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .animate-float,
          .animate-progress,
          .service-icon,
          h3 span,
          p,
          .bg-radial-gradient-circle {
            animation: none !important;
            transition: none !important;
          }
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
          .text-4xl {
            font-size: 2.5rem;
          }
          
          .text-xl {
            font-size: 1.125rem;
          }
          
          .gap-24 {
            gap: 80px;
          }
          
          .w-40 {
            width: 140px;
          }
          
          .h-40 {
            height: 140px;
          }
          
          .w-16 {
            width: 60px;
          }
          
          .h-16 {
            height: 60px;
          }
          
          .text-2xl {
            font-size: 1.5rem;
          }
          
          .text-base {
            font-size: 0.9375rem;
          }
        }
        
        @media (max-width: 480px) {
          .py-20 {
            padding-top: 60px;
            padding-bottom: 60px;
          }
          
          .mb-20 {
            margin-bottom: 60px;
          }
          
          .text-4xl {
            font-size: 2rem;
          }
          
          .text-xl {
            font-size: 1rem;
          }
          
          .w-40 {
            width: 120px;
          }
          
          .h-40 {
            height: 120px;
          }
          
          .w-16 {
            width: 50px;
          }
          
          .h-16 {
            height: 50px;
          }
          
          .text-2xl {
            font-size: 1.375rem;
          }
          
          .text-base {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </div>
  );
};

export default PremiumServices;