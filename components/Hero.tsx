'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, Star, Shield, Clock, CheckCircle, Sparkles, Zap } from 'lucide-react'

const Hero = () => {
  const [selectedService, setSelectedService] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [animateStats, setAnimateStats] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const timer = setTimeout(() => setAnimateStats(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const services = [
    'TV Repair',
    'AC Repair',
    'Washing Machine Repair',
    'Refrigerator Repair',
    'Microwave Repair',
    'Laptop Repair'
  ]

  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 overflow-hidden">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 to-primary-800/95"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/10"></div>
      
      {/* Geometric Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent-500/10 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-primary-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${(i * 7) % 100}%`,
              top: `${(i * 11) % 100}%`,
              animationDelay: `${(i * 0.2)}s`,
              animationDuration: `${2 + (i % 3)}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className={`space-y-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-white via-electric-200 to-cosmic-200 bg-clip-text text-transparent">
                  Professional Electronics & Appliance Repair
                </span>
              </h1>
              <p className="text-lg text-primary-100 leading-relaxed max-w-2xl">
                Expert repair services for all your electronics and home appliances. 
                Fast, reliable, and affordable solutions in Hyderabad with 15+ years of experience.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-xs">
              <div className="flex items-center gap-2 group bg-gradient-to-r from-sunset-500/20 to-accent-500/20 backdrop-blur-sm px-3 py-2 rounded-lg hover:from-sunset-400/30 hover:to-accent-400/30 transition-all duration-300 border border-sunset-400/30">
                <div className="p-1 bg-sunset-500/30 rounded">
                  <Star className="h-4 w-4 text-sunset-300 fill-current group-hover:scale-110 transition-transform duration-200" />
                </div>
                <span className="font-semibold text-white group-hover:text-sunset-200 transition-colors duration-200">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 group bg-gradient-to-r from-neon-500/20 to-success-500/20 backdrop-blur-sm px-3 py-2 rounded-lg hover:from-neon-400/30 hover:to-success-400/30 transition-all duration-300 border border-neon-400/30">
                <div className="p-1 bg-neon-500/30 rounded">
                  <Shield className="h-4 w-4 text-neon-300 group-hover:scale-110 transition-transform duration-200" />
                </div>
                <span className="font-semibold text-white group-hover:text-neon-200 transition-colors duration-200">100% Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 group bg-gradient-to-r from-electric-500/20 to-primary-500/20 backdrop-blur-sm px-3 py-2 rounded-lg hover:from-electric-400/30 hover:to-primary-400/30 transition-all duration-300 border border-electric-400/30">
                <div className="p-1 bg-electric-500/30 rounded">
                  <Clock className="h-4 w-4 text-electric-300 group-hover:scale-110 transition-transform duration-200" />
                </div>
                <span className="font-semibold text-white group-hover:text-electric-200 transition-colors duration-200">Same Day Service</span>
              </div>
            </div>

            {/* Service Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">What needs repair?</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {services.map((service) => (
                  <button
                    key={service}
                    onClick={() => setSelectedService(service)}
                    className={`p-3 rounded-lg border-2 transition-all duration-300 text-left group ${
                      selectedService === service
                        ? 'border-primary-400 bg-primary-500/30 text-white shadow-lg shadow-primary-500/25'
                        : 'border-white/30 bg-white/10 hover:border-primary-400/50 hover:bg-primary-500/20 text-white backdrop-blur-sm'
                    }`}
                  >
                    <div className="font-medium text-xs group-hover:scale-105 transition-transform duration-200">{service}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="tel:+919666111327"
                className="group bg-gradient-to-r from-electric-500 to-primary-600 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:from-electric-400 hover:to-primary-500 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 transform hover:shadow-electric-500/25"
              >
                <Phone className="h-4 w-4 group-hover:animate-pulse" />
                Call Now: +91 96661 11327
              </Link>
              <Link
                href="/contact"
                className="group border-2 border-gradient-to-r from-cosmic-400 to-secondary-400 bg-gradient-to-r from-cosmic-500/20 to-secondary-500/20 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:from-cosmic-400/30 hover:to-secondary-400/30 hover:border-cosmic-300 transition-all duration-300 text-center hover:scale-105 transform backdrop-blur-sm"
              >
                <span className="flex items-center justify-center gap-2">
                  Book Service Online
                  <Zap className="h-4 w-4 group-hover:animate-pulse" />
                </span>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className={`grid grid-cols-3 gap-4 pt-6 border-t border-white/30 transition-all duration-1000 delay-500 ${animateStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <div className="text-center group bg-gradient-to-br from-sunset-500/20 to-accent-500/20 backdrop-blur-sm px-4 py-3 rounded-lg hover:from-sunset-400/30 hover:to-accent-400/30 transition-all duration-300 border border-sunset-400/30">
                <div className="text-xl font-bold text-white group-hover:text-sunset-300 transition-colors duration-300">5000+</div>
                <div className="text-xs text-sunset-200 group-hover:text-white transition-colors duration-300 font-medium">Happy Customers</div>
              </div>
              <div className="text-center group bg-gradient-to-br from-neon-500/20 to-success-500/20 backdrop-blur-sm px-4 py-3 rounded-lg hover:from-neon-400/30 hover:to-success-400/30 transition-all duration-300 border border-neon-400/30">
                <div className="text-xl font-bold text-white group-hover:text-neon-300 transition-colors duration-300">15+</div>
                <div className="text-xs text-neon-200 group-hover:text-white transition-colors duration-300 font-medium">Years Experience</div>
              </div>
              <div className="text-center group bg-gradient-to-br from-electric-500/20 to-primary-500/20 backdrop-blur-sm px-4 py-3 rounded-lg hover:from-electric-400/30 hover:to-primary-400/30 transition-all duration-300 border border-electric-400/30">
                <div className="text-xl font-bold text-white group-hover:text-electric-300 transition-colors duration-300">24/7</div>
                <div className="text-xs text-electric-200 group-hover:text-white transition-colors duration-300 font-medium">Service Available</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative z-10">
              {/* Product Images Grid */}
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 hover:scale-105 transform border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  {/* TV Repair */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-xs font-semibold text-blue-900">TV Repair</h4>
                  </div>
                  
                  {/* AC Repair */}
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    <h4 className="text-xs font-semibold text-green-900">AC Repair</h4>
                  </div>
                  
                  {/* Washing Machine */}
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <h4 className="text-xs font-semibold text-purple-900">Washing Machine</h4>
                  </div>
                  
                  {/* Refrigerator */}
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <h4 className="text-xs font-semibold text-orange-900">Refrigerator</h4>
                  </div>
                </div>
                
                {/* Central Call-to-Action */}
                <div className="mt-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg hover:scale-110 transition-transform duration-300 animate-glow">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-900 mb-2">
                    Expert Repair Services
                  </h3>
                  <p className="text-primary-700 font-medium text-sm">
                    Professional technicians at your doorstep
                  </p>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 animate-float border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-success-100 rounded-xl flex items-center justify-center shadow-lg">
                    <CheckCircle className="h-6 w-6 text-success-600" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-gray-900">Same Day Service</div>
                    <div className="text-xs text-gray-600 font-medium">Available</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 animate-float border border-white/20" style={{animationDelay: '1s'}}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-warning-100 rounded-xl flex items-center justify-center shadow-lg">
                    <Star className="h-6 w-6 text-warning-600 fill-current" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-gray-900">Top Rated</div>
                    <div className="text-xs text-gray-600 font-medium">5000+ Reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero