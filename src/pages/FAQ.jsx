import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How does the pickup and delivery service work?",
      answer: "We offer convenient pickup and delivery services for all our clients. Simply schedule a time through our app or website, and our professional team will collect your garments from your doorstep. Once cleaned and carefully pressed, we'll return them to you at your preferred time."
    },
    {
      question: "What types of garments do you specialize in?",
      answer: "We specialize in premium garment care for all fabrics including delicate silks, luxury wools, cashmere, formal wear, wedding dresses, and everyday clothing. Our experts are trained in handling even the most delicate and valuable pieces with the utmost care."
    },
    {
      question: "How do you handle special stains or delicate fabrics?",
      answer: "Our stain removal experts use eco-friendly, specialized solutions tailored to different fabric types and stains. Each garment is individually assessed and treated with the appropriate method. For delicate fabrics, we use gentle hand-washing techniques and air-drying to preserve quality and longevity."
    },
    {
      question: "What is your turnaround time?",
      answer: "Standard service takes 24-48 hours. We also offer express service with same-day turnaround (by 8 PM) for an additional fee. For large orders or special items like wedding dresses that require detailed attention, we'll provide a specific timeline during consultation."
    },
    {
      question: "Do you offer eco-friendly cleaning options?",
      answer: "Yes, we're committed to sustainable practices. We offer green cleaning options using biodegradable detergents, energy-efficient equipment, and water recycling systems. All our packaging is recycled and recyclable, and we continuously work to reduce our environmental footprint."
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
        {/* Header Section */}
        <div>
          <span className="inline-block bg-[rgba(139,90,43,0.1)] text-[#8B5A2B] px-4 py-2 rounded-full text-sm font-semibold mb-6 tracking-wide">
            FAQ
          </span>
          
          <h1 className="font-playfair text-4xl md:text-5xl font-semibold text-[#2C3E50] leading-tight mb-4">
            Frequently<br />Asked<br />Questions
          </h1>
          
          <p className="text-[#4A5568] text-lg">
            Find answers to common questions about our premium laundry and garment care services.
          </p>
        </div>

        {/* FAQ Items Section */}
        <div className="lg:col-span-2">
          <div className="space-y-0">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className={`border-t border-[rgba(197,188,174,0.4)] transition-all duration-300 ${
                  activeIndex === index ? 'bg-[rgba(197,188,174,0.05)]' : ''
                } ${index === faqItems.length - 1 ? 'border-b border-[rgba(197,188,174,0.4)]' : ''}`}
              >
                <button 
                  className="w-full bg-transparent border-none py-6 text-left font-medium text-[#2C3E50] text-lg cursor-pointer flex justify-between items-center transition-all duration-300 hover:text-[#8B5A2B]"
                  onClick={() => toggleFAQ(index)}
                >
                  {item.question}
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 ml-4 relative">
                    <span className={`absolute w-4 h-0.5 bg-[#8B5A2B] transition-all duration-300 ${activeIndex === index ? 'rotate-45' : ''}`}></span>
                    <span className={`absolute w-4 h-0.5 bg-[#8B5A2B] transition-all duration-300 ${activeIndex === index ? '-rotate-45' : 'rotate-90'}`}></span>
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="pb-6 text-[#4A5568] leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;