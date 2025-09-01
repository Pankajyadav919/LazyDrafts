import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const [email, setEmail] = useState('');
  const storyRefs = useRef([]);
  const thoughtRef = useRef(null);
  const newsletterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all content sections
    storyRefs.current.forEach((ref) => {
      if (ref) {
        ref.style.opacity = 0;
        ref.style.transform = 'translateY(20px)';
        ref.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(ref);
      }
    });

    if (thoughtRef.current) {
      thoughtRef.current.style.opacity = 0;
      thoughtRef.current.style.transform = 'translateY(20px)';
      thoughtRef.current.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(thoughtRef.current);
    }

    if (newsletterRef.current) {
      newsletterRef.current.style.opacity = 0;
      newsletterRef.current.style.transform = 'translateY(20px)';
      newsletterRef.current.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(newsletterRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}! We'll keep you updated with the latest news.`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-[#F5F1EE] text-[#3A2D28] font-poppins">
      {/* Header */}
      <section className="py-20 px-4 text-center relative">
        <div className="max-w-6xl mx-auto px-5">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-black mb-5 bg-gradient-to-r from-[#3A2D28] to-[#6D4C41] bg-clip-text text-transparent relative inline-block">
            Our Story
            <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#3A2D28] to-[#6D4C41] rounded"></span>
          </h1>
          <br />
          <p className="font-playfair text-xl md:text-2xl italic">
            <br />
            "Education should be about learning, not busywork. StudentConnect is my attempt to give students back their most valuable resource: time."
          </p>
          <p className="font-semibold text-[#8D6E63] text-lg mt-2">— Nitin Shukla, Founder</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-5">
          {/* First Story Content */}
          <div 
            ref={el => storyRefs.current[0] = el}
            className="flex flex-col lg:flex-row items-center gap-12 mb-20"
          >
            <div className="w-full lg:w-1/2">
              <h2 className="font-playfair text-3xl md:text-4xl mb-5 text-[#3A2D28]">The Problem We Solve</h2>
              <p className="text-lg text-[#6D4C41] mb-6 leading-relaxed">
                For generations, students have been trapped in a cycle of inefficient learning—spending countless hours copying notes instead of focusing on skill development and true understanding.
              </p>
              <p className="text-lg text-[#6D4C41] mb-6 leading-relaxed">
                Nitin Shukla, like millions of students, found himself spending more time transcribing lectures than actually learning the material. He realized this was a systemic issue affecting students worldwide.
              </p>
              <p className="text-lg text-[#6D4C41] mb-6 leading-relaxed">
                The endless cycle of note-taking was stealing precious time that could be spent on practical application, skill development, and collaborative learning.
              </p>
            </div>
            <div className="w-full lg:w-1/2 h-96 rounded-2xl overflow-hidden shadow-xl bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1588072432839-5c17d016b4d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80')" }}></div>
          </div>

          {/* Second Story Content */}
          <div 
            ref={el => storyRefs.current[1] = el}
            className="flex flex-col lg:flex-row items-center gap-12"
          >
            <div className="w-full lg:w-1/2 h-96 rounded-2xl overflow-hidden shadow-xl bg-cover bg-center order-2 lg:order-1" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80')" }}></div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <h2 className="font-playfair text-3xl md:text-4xl mb-5 text-[#3A2D28]">The Birth of StudentConnect</h2>
              <p className="text-lg text-[#6D4C41] mb-6 leading-relaxed">
                One evening, after spending six hours copying chemistry formulas, Nitin had an epiphany: "What if someone else had already taken perfect notes that I could reference? What if I could trade my coding skills for someone else's note-taking abilities?"
              </p>
              <p className="text-lg text-[#6D4C41] mb-6 leading-relaxed">
                This insight sparked the idea for StudentConnect—a platform where students could leverage each other's strengths instead of everyone struggling with the same tasks individually.
              </p>
              <p className="text-lg text-[#6D4C41] mb-6 leading-relaxed">
                He envisioned a community where students could collaborate based on their skills and needs, transforming education from a solitary struggle into a collaborative journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 -mt-40 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <div 
            ref={newsletterRef}
            className="bg-[#F5F1EE] rounded-2xl p-10 md:p-14 shadow-lg max-w-3xl mx-auto border border-[#A1887F] border-opacity-20"
          >
            <h2 className="font-playfair text-2xl md:text-3xl mb-5 text-[#3A2D28]">Stay Updated with StudentConnect</h2>
            <p className="text-lg text-[#6D4C41] mb-8">
              Join our newsletter to receive updates on new features, success stories, and tips for maximizing your student experience.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-5 py-4 border border-[#A1887F] rounded-full text-base bg-white outline-none focus:border-[#6D4C41] focus:ring-4 focus:ring-[#6D4C41] focus:ring-opacity-20"
                placeholder="Enter your email address"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-[#3A2D28] to-[#6D4C41] text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Poppins:wght@300;400;500;600&display=swap');
        
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default About;