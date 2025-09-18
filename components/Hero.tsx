'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Star, Shield, Clock, CheckCircle } from 'lucide-react'

const Hero = () => {
  const [selectedService, setSelectedService] = useState('')

  const services = [
    'TV Repair',
    'AC Repair', 
    'Washing Machine Repair',
    'Refrigerator Repair',
    'Microwave Repair',
    'Laptop Repair'
  ]

  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-blue-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-primary-50/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Professional
                <span className="text-primary-600 block">Electronics &</span>
                <span className="text-primary-600">Appliance Repair</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Expert repair services for all your electronics and home appliances. 
                Fast, reliable, and affordable solutions in Hyderabad.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-500" />
                <span className="font-semibold">100% Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-500" />
                <span className="font-semibold">Same Day Service</span>
              </div>
            </div>

            {/* Service Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">What needs repair?</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {services.map((service) => (
                  <button
                    key={service}
                    onClick={() => setSelectedService(service)}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 text-left ${
                      selectedService === service
                        ? 'border-primary-500 bg-primary-50 text-primary-700'
                        : 'border-gray-200 bg-white hover:border-primary-300 hover:bg-primary-25'
                    }`}
                  >
                    <div className="font-medium text-sm">{service}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="tel:+919666111327"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call Now: +91 96661 11327
              </Link>
              <Link
                href="/book-service"
                className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors duration-200 text-center"
              >
                Book Service Online
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">5000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">24/7</div>
                <div className="text-sm text-gray-600">Service Available</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Image Placeholder */}
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Expert Repair Services
                    </h3>
                    <p className="text-gray-600">
                      Professional technicians at your doorstep
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 animate-bounce">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Same Day Service</div>
                    <div className="text-xs text-gray-600">Available</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 animate-pulse">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Star className="h-5 w-5 text-yellow-600 fill-current" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">4.9/5 Rating</div>
                    <div className="text-xs text-gray-600">Customer Reviews</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-blue-300 rounded-2xl transform rotate-3 scale-105 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
