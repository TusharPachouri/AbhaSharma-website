"use client"
import React, { useState, useEffect } from 'react';

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInOnScroll = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const rect = element.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;
      
      setIsVisible(prev => ({
        ...prev,
        [elementId]: isInView
      }));
    }
  };

  useEffect(() => {
    const elements = ['hero', 'about', 'services', 'testimonials', 'cta'];
    const handleScroll = () => {
      elements.forEach(fadeInOnScroll);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        id="hero" 
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        
        {/* Animated Background Images */}
        <div className="absolute inset-0 z-5">
          {/* Floating yoga poses */}
          <div 
            className="absolute top-20 left-10 w-32 h-32 opacity-20"
            style={{
              transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)`,
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
              alt="Yoga pose silhouette"
              className="w-full h-full object-cover rounded-full border-4 border-white border-opacity-30"
            />
          </div>
          
          <div 
            className="absolute top-32 right-16 w-24 h-24 opacity-25"
            style={{
              transform: `translateY(${scrollY * -0.2}px) rotate(${scrollY * -0.05}deg)`,
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
              alt="Meditation silhouette"
              className="w-full h-full object-cover rounded-full border-4 border-emerald-300 border-opacity-40"
            />
          </div>
          
          <div 
            className="absolute bottom-32 left-20 w-28 h-28 opacity-15"
            style={{
              transform: `translateY(${scrollY * 0.4}px) rotate(${scrollY * 0.08}deg)`,
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
              alt="Yoga balance pose"
              className="w-full h-full object-cover rounded-full border-4 border-teal-300 border-opacity-30"
            />
          </div>
          
          <div 
            className="absolute bottom-40 right-12 w-36 h-36 opacity-20"
            style={{
              transform: `translateY(${scrollY * -0.3}px) rotate(${scrollY * -0.12}deg)`,
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
              alt="Yoga flow pose"
              className="w-full h-full object-cover rounded-full border-4 border-white border-opacity-25"
            />
          </div>
        </div>

        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0 z-6 overflow-hidden">
          {/* Floating lotus petals */}
          <div 
            className="absolute top-1/4 left-1/4 w-16 h-16 opacity-10"
            style={{
              transform: `translateY(${scrollY * 0.15}px) translateX(${Math.sin(scrollY * 0.01) * 20}px)`,
            }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-300 fill-current">
              <path d="M50 10 C30 30, 30 70, 50 90 C70 70, 70 30, 50 10 Z" />
            </svg>
          </div>
          
          <div 
            className="absolute top-1/2 right-1/4 w-12 h-12 opacity-15"
            style={{
              transform: `translateY(${scrollY * -0.2}px) translateX(${Math.cos(scrollY * 0.015) * 30}px)`,
            }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full text-teal-300 fill-current">
              <circle cx="50" cy="50" r="40" />
            </svg>
          </div>
          
          <div 
            className="absolute bottom-1/4 left-1/3 w-20 h-20 opacity-8"
            style={{
              transform: `translateY(${scrollY * 0.25}px) rotate(${scrollY * 0.2}deg)`,
            }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
              <polygon points="50,15 90,85 10,85" />
            </svg>
          </div>
        </div>

        {/* Enhanced Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-emerald-900 opacity-60 z-10" />
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />
        
        {/* Hero Content */}
        <div className={`relative z-20 text-center text-white px-4 transform transition-all duration-1000 ${isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-6">
            Find Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Inner Peace
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the transformative power of yoga through mindful movement, breathwork, and meditation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-8 py-4 rounded-full text-lg font-medium tracking-wide hover:shadow-2xl hover:scale-105 transition-all duration-300 uppercase">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium tracking-wide hover:bg-white hover:text-gray-900 transition-all duration-300 uppercase">
              Watch Classes
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible.about ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="Yoga practitioner in meditation pose" 
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-emerald-600 to-teal-500 rounded-full flex items-center justify-center shadow-xl">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className={`transform transition-all duration-1000 delay-500 ${isVisible.about ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-6 text-gray-900">
                Embrace Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500"> Journey</span>
              </h2>
              <div className="h-1 bg-gradient-to-r from-emerald-600 to-teal-500 w-20 mb-8"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Serene Yoga, we believe that yoga is more than just physical postures—it's a pathway to holistic wellness that nurtures your body, mind, and spirit. Our experienced instructors guide you through transformative practices that honor ancient traditions while meeting modern needs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Whether you're a beginner taking your first steps or an experienced practitioner deepening your practice, our supportive community welcomes you with open arms and open hearts.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">500+</div>
                  <div className="text-gray-600">Happy Students</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
              
              <button className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-8 py-4 rounded-full text-lg font-medium tracking-wide hover:shadow-lg hover:scale-105 transition-all duration-300 uppercase">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible.services ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-6 text-gray-900">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Offerings</span>
            </h2>
            <div className="h-1 bg-gradient-to-r from-emerald-600 to-teal-500 w-20 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover a variety of yoga styles and wellness practices designed to meet you wherever you are on your journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Hatha Yoga",
                description: "Gentle, slow-paced practice focusing on basic postures and breathing techniques",
                image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              },
              {
                title: "Vinyasa Flow",
                description: "Dynamic sequences that synchronize movement with breath in flowing transitions",
                image: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              },
              {
                title: "Meditation",
                description: "Cultivate inner peace and mindfulness through guided meditation practices",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform ${isVisible.services ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300 group-hover:-translate-y-2">
                  <h3 className="text-2xl font-light mb-3 tracking-wide">{service.title}</h3>
                  <p className="text-gray-200 leading-relaxed opacity-90">{service.description}</p>
                  
                  <button className="mt-4 bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-medium tracking-wide hover:shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-4 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible.testimonials ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-6 text-gray-900">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Students Say</span>
            </h2>
            <div className="h-1 bg-gradient-to-r from-emerald-600 to-teal-500 w-20 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Marketing Professional",
                content: "Serene Yoga has transformed not just my flexibility, but my entire approach to stress management. The instructors are incredibly knowledgeable and create such a welcoming environment.",
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              },
              {
                name: "Michael Chen",
                role: "Software Engineer",
                content: "As someone who sits at a desk all day, these yoga classes have been a lifesaver for my posture and mental clarity. The online classes are just as engaging as in-person sessions.",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              },
              {
                name: "Emma Rodriguez",
                role: "Teacher & Mother",
                content: "The meditation sessions have helped me find calm in the chaos of daily life. I love how the practice adapts to different skill levels - perfect for beginners like me.",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform ${isVisible.testimonials ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex text-emerald-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 px-4 bg-gradient-to-r from-emerald-600 to-teal-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="lotus" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="white" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#lotus)" />
          </svg>
        </div>
        
        <div className={`max-w-4xl mx-auto text-center relative z-10 transform transition-all duration-1000 ${isVisible.cta ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h2 className="text-4xl md:text-6xl font-light tracking-wide mb-6 text-white">
            Ready to Begin?
          </h2>
          <p className="text-xl md:text-2xl text-emerald-100 mb-10 leading-relaxed">
            Join thousands who have discovered peace, strength, and community through our transformative yoga practice
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-10 py-4 rounded-full text-lg font-bold tracking-wide hover:shadow-2xl hover:scale-105 transition-all duration-300 uppercase">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full text-lg font-medium tracking-wide hover:bg-white hover:text-emerald-600 transition-all duration-300 uppercase">
              View Schedule
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Expert Instruction</h3>
              <p className="text-emerald-100 text-center">Certified teachers with years of experience</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 3.314-2.686 6-6 6s-6-2.686-6-6a4.75 4.75 0 01.332-1.973z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Flexible Schedule</h3>
              <p className="text-emerald-100 text-center">Classes throughout the day to fit your lifestyle</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Supportive Community</h3>
              <p className="text-emerald-100 text-center">Connect with like-minded practitioners</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}