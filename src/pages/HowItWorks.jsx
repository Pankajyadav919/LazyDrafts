const HowItWorks = () => {
  return (
    <section id="how-it-works" className="max-w-6xl mx-auto py-16 px-4" aria-label="How it works">
      <div className="text-center mb-16">
        <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-[#2C3E50] mb-4">
          How It Works
        </h2>
        <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
          Our simple 4-step process to get your laundry needs met quickly and efficiently
        </p>
      </div>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical connector line */}
        <div className="absolute top-10 bottom-10 left-1/2 w-0.5 bg-gradient-to-b from-transparent via-[#8B5A2B] to-transparent transform -translate-x-1/2 z-0 md:block hidden"></div>
        
        <div className="space-y-12 md:space-y-0">
          {/* Step 1 - Left side */}
          <div className="relative flex md:flex-row flex-col items-center md:items-stretch">
            <div className="md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-10 flex-shrink-0 mb-4 md:mb-0">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#8B5A2B] text-white font-bold rounded-full flex items-center justify-center text-lg">
                01
              </div>
            </div>
            <div className="md:w-1/2 md:pr-8 md:ml-auto">
              <div className="bg-[#FFFDF8] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-[rgba(197,188,174,0.3)] hover:-translate-y-1">
                <h3 className="font-playfair text-xl font-semibold text-[#2C3E50] mb-3">
                  Sign Up
                </h3>
                <p className="text-[#4A5568] leading-relaxed">
                  Create your account in under 60 seconds. Just provide your basic details and you're ready to schedule your first service.
                </p>
              </div>
            </div>
          </div>
          
          {/* Step 2 - Right side */}
          <div className="relative flex md:flex-row flex-col items-center md:items-stretch">
            <div className="md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-10 flex-shrink-0 mb-4 md:mb-0">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#8B5A2B] text-white font-bold rounded-full flex items-center justify-center text-lg">
                02
              </div>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <div className="bg-[#FFFDF8] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-[rgba(197,188,174,0.3)] hover:-translate-y-1">
                <h3 className="font-playfair text-xl font-semibold text-[#2C3E50] mb-3">
                  Choose Service
                </h3>
                <p className="text-[#4A5568] leading-relaxed">
                  Pick what you need and a time that works. Select from our range of services and choose a pickup time that fits your schedule.
                </p>
              </div>
            </div>
          </div>
          
          {/* Step 3 - Left side */}
          <div className="relative flex md:flex-row flex-col items-center md:items-stretch">
            <div className="md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-10 flex-shrink-0 mb-4 md:mb-0">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#8B5A2B] text-white font-bold rounded-full flex items-center justify-center text-lg">
                03
              </div>
            </div>
            <div className="md:w-1/2 md:pr-8 md:ml-auto">
              <div className="bg-[#FFFDF8] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-[rgba(197,188,174,0.3)] hover:-translate-y-1">
                <h3 className="font-playfair text-xl font-semibold text-[#2C3E50] mb-3">
                  We Do The Work
                </h3>
                <p className="text-[#4A5568] leading-relaxed">
                  A vetted pro handles it end-to-end. Our experienced team carefully cleans and cares for your garments using premium products.
                </p>
              </div>
            </div>
          </div>
          
          {/* Step 4 - Right side */}
          <div className="relative flex md:flex-row flex-col items-center md:items-stretch">
            <div className="md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-10 flex-shrink-0 mb-4 md:mb-0">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#8B5A2B] text-white font-bold rounded-full flex items-center justify-center text-lg">
                04
              </div>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <div className="bg-[#FFFDF8] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-[rgba(197,188,174,0.3)] hover:-translate-y-1">
                <h3 className="font-playfair text-xl font-semibold text-[#2C3E50] mb-3">
                  Track & Pay
                </h3>
                <p className="text-[#4A5568] leading-relaxed">
                  Live updates, secure payment, invoice by email. Follow the process in real-time and receive your items back fresh and perfectly cared for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-16">
        <a 
          href="#pricing" 
          className="inline-block bg-[#8B5A2B] text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7a4d23]"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HowItWorks;