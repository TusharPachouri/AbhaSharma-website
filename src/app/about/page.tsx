"use client"
import React, { useState, useEffect } from 'react';

export default function AboutPage() {
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
      const isInView = rect.top < window.innerHeight - 100 && rect.bottom > 0;
      
      setIsVisible(prev => ({
        ...prev,
        [elementId]: isInView
      }));
    }
  };

  useEffect(() => {
    const elements = ['hero', 'intro', 'story', 'wound', 'yoga', 'healing', 'mission'];
    const handleScroll = () => {
      elements.forEach(fadeInOnScroll);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="hero" className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-transparent to-teal-900 opacity-60 z-10" />
        
        <div className={`relative z-20 text-center text-white px-4 transform transition-all duration-1000 ${isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">Journey</span>
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
            From healing to helping others find their authentic selves
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="intro" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible.intro ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6 text-gray-900">
              Hello! I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Jess!</span>
            </h2>
            <div className="h-1 bg-gradient-to-r from-emerald-600 to-teal-500 w-20 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              I'm a coach, healer, yoga teacher, and entrepreneur committed to helping you be your most grounded and authentic self.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <blockquote className="text-center">
              <p className="text-2xl md:text-3xl font-light italic text-gray-800 mb-6 leading-relaxed">
                "There is no greater agony than bearing an untold story inside you."
              </p>
              <footer className="text-lg text-emerald-700 font-medium tracking-wide">
                — Dr. Maya Angelou
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section id="story" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible.story ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="Peaceful meditation in nature representing inner journey" 
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-emerald-600 to-teal-500 rounded-full flex items-center justify-center shadow-xl">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className={`transform transition-all duration-1000 delay-500 ${isVisible.story ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
              <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6 text-gray-900">
                My <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Story</span>
              </h2>
              <div className="h-1 bg-gradient-to-r from-emerald-600 to-teal-500 w-20 mb-8"></div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  I grew up in a single-parent home in Winnipeg, Canada. I'm mixed-race – my mother is Anishinaabe First Nations and my dad is Punjabi from India. I jokingly say that I'm the misnomer and the proper. I'm honored to be a part of both of these cultures.
                </p>
                
                <p className="text-lg">
                  Growing up as the eldest of four in low-income housing, I faced challenges including racism, food scarcity, and home instability. My grandmother was a residential school survivor. I had two different cultural heritages, yet I didn't feel like I fully belonged to either one.
                </p>
                
                <p className="text-lg">
                  As soon as I could, I left Canada for the UK, running away from problems like many people who don't have the proper tools to deal with life. I numbed with alcohol, drugs, shopping, overspending, disordered eating, codependent behavior, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Deep Wound Section */}
      <section id="wound" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible.wound ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6 text-gray-900 text-center">
              The Deep Wound of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Racism</span>
            </h2>
            <div className="h-1 bg-gradient-to-r from-emerald-600 to-teal-500 w-20 mx-auto mb-12"></div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 md:p-12 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                There's this term coined by Pauline Boss called <strong>Ambiguous Loss</strong> which she calls, "loss that often goes unnoticed, perhaps because it is ubiquitous."
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Racism is an ambiguous loss because it permeates everything. It's remarkably accurate at hitting its targets. The weight accumulates from generation to generation.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                For me, it created a feeling of unworthiness that permeated every aspect of my life. I tried suicide twice because of how much unworthiness I felt in 2002 and 2008. It's devastating that I got to those points, but I'm grateful to be alive today.
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-xl text-emerald-700 font-medium italic">
                It took a while for me to realize how important I am to the world. And how much of a joy it is to be alive. This is healing happening.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Yoga As Teacher Section */}
      <section id="yoga" className="py-20 px-4 relative overflow-hidden">
        {/* Background with parallax */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.3}px)`,
            backgroundAttachment: 'fixed'
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-emerald-50 opacity-90 z-5" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className={`transform transition-all duration-1000 ${isVisible.yoga ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6 text-gray-900 text-center">
              Yoga As My <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Teacher</span>
            </h2>
            <div className="h-1 bg-gradient-to-r from-emerald-600 to-teal-500 w-20 mx-auto mb-12"></div>
            
            <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Part of that slow shift was when I found yoga in 2001. I remember my first class vividly: I wore heavy clothing, made weird shapes, while other people made even more interesting shapes with theirs, and had a chance to lay down for an extended period.
                </p>
                
                <p className="text-lg">
                  To lay down and be quiet. I had no idea what savasana was. But I loved it. I loved being still, being quiet, and having time to just be in my body. I had never experienced that before.
                </p>
                
                <p className="text-lg">
                  Over time, I realized I was learning to self-regulate my nervous system with this somatic healing therapy. Yoga is a somatic healing practice that focuses on the mind-body connection to help bring about change.
                </p>
                
                <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl p-6 mt-8">
                  <p className="text-lg font-medium text-emerald-800">
                    Ten years after I came to the mat for the first time, I became a yoga teacher and health coach in 2012. Ten years after that in 2022, I became a somatic healing coach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healing Journey Section */}
      <section id="healing" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-4xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible.healing ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6 text-gray-900 text-center">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Healing</span>
            </h2>
            <div className="h-1 bg-gradient-to-r from-emerald-600 to-teal-500 w-20 mx-auto mb-12"></div>
            
            <div className="space-y-8">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                For as long as I can remember, I wanted to feel the freedom to trust myself, be free and expansive with who I am, and enjoy life fully and authentically.
              </p>
              
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  It was only when I started to evaluate my own history and lived experiences that I was able to see I was ceding control of my life to unworthy factors. The scars of racism, poverty, and food scarcity were dictating my present-day happiness.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  I wanted to learn the truth of how these systems played a role in how I saw the world and how the world saw me. It was a messy process to be vulnerable, but breaking open multiple times through the years helped me process my grief.
                </p>
                
                <div className="text-center bg-gradient-to-r from-emerald-600 to-teal-500 text-white rounded-xl p-6">
                  <p className="text-xl font-medium">
                    My healing journey continues every day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-teal-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="lotus-about" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="white" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#lotus-about)" />
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className={`text-center transform transition-all duration-1000 ${isVisible.mission ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-8 text-white">
              My Purpose
            </h2>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-white">
              <p className="text-xl md:text-2xl leading-relaxed mb-8">
                In this process, I've learned my life's passion is to help others heal from their trauma and live life empowered, with purpose, and have the confidence to be themselves.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed mb-8">
                I'm helping to usher in a more equitable world where all are welcome and seen. These are the tools to help the victims of racism and other traumas heal.
              </p>
              
              <div className="text-center">
                <p className="text-xl font-medium italic">
                  It's not easy work, but I can't think of anything more important.
                </p>
              </div>
            </div>
            
            <div className="mt-12">
              <button className="bg-white text-emerald-600 px-10 py-4 rounded-full text-lg font-bold tracking-wide hover:shadow-2xl hover:scale-105 transition-all duration-300 uppercase">
                Work With Me
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}