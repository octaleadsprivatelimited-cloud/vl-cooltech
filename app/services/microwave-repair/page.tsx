import type { Metadata } from 'next'
import { Microwave, Star, Shield, Clock, Wrench, CheckCircle, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import { GetQuoteButton } from '@/components/CTA'
import ServiceImages from '@/components/ServiceImages'
import type { CSSProperties } from 'react'

export const metadata: Metadata = {
  title: 'VL CoolTech | Professional Microwave Repair Service in Hyderabad',
  description: 'VL CoolTech offers certified microwave oven repair for Samsung, LG, IFB, Whirlpool and more with same-day doorstep support in Ameenpur, Beeramguda, Patancheru, Miyapur and Greater Hyderabad. ₹299 visiting charge adjusted in final bill.',
  keywords: 'VL CoolTech microwave repair, Hyderabad microwave service, IFB oven repair Ameenpur, Whirlpool microwave technician Beeramguda, same day microwave repair Hyderabad',
}

const microwaveBrands = [
  'Samsung', 'LG', 'Whirlpool', 'IFB', 'Godrej', 'Panasonic', 'TCL', 'Videocon', 'Intex', 'Onida'
]

const microwaveTypes = [
  'Solo Microwave', 'Convection Microwave', 'Grill Microwave', 'Smart Microwave', 'Built-in Microwave', 'Countertop Microwave', 'Over-the-Range Microwave', 'Commercial Microwave'
]

const microwaveProblems = [
  {
    problem: 'Heating Issues',
    solutions: ['Magnetron replacement', 'High voltage diode repair', 'Thermal fuse replacement', 'Heating element repair']
  },
  {
    problem: 'Turntable Problems',
    solutions: ['Turntable motor repair', 'Turntable ring replacement', 'Roller guide repair', 'Turntable plate replacement']
  },
  {
    problem: 'Door Issues',
    solutions: ['Door switch replacement', 'Door seal replacement', 'Door hinge repair', 'Door latch repair']
  },
  {
    problem: 'Control Panel Problems',
    solutions: ['Control panel repair', 'Keypad replacement', 'Display repair', 'Touch panel replacement']
  },
  {
    problem: 'Electrical Issues',
    solutions: ['PCB repair', 'Fuse replacement', 'Wiring repair', 'Power cord replacement']
  },
  {
    problem: 'Noise Problems',
    solutions: ['Fan motor repair', 'Bearing replacement', 'Vibration isolation', 'Fan blade replacement']
  }
]

const locations = [
  'HITEC City', 'Gachibowli', 'Kondapur', 'Madhapur', 'Jubilee Hills', 'Banjara Hills', 
  'Pragathi Nagar', 'Kukatpally', 'Miyapur', 'Serilingampally', 'Chandanagar', 'Alwal',
  'Malkajgiri', 'Lal Bahadur Nagar', 'Dilsukhnagar', 'Uppal', 'Nagole', 'LB Nagar'
]

export default function MicrowaveRepair() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="page-hero bg-gradient-to-br from-orange-700 via-orange-600 to-amber-500 pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-18"
        style={{ '--hero-bg': "url('/images/hero/Microwave.webp')", '--hero-overlay': 'rgba(0, 0, 0, 0.75)' } as CSSProperties}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Professional <span className="text-yellow-300">Microwave Repair Service</span> in Hyderabad
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-4xl mx-auto">
              Expert microwave repair service for all brands including Samsung, LG, Whirlpool, IFB microwaves. 
              Same-day service available in HITEC City, Gachibowli, Kondapur, Madhapur, Jubilee Hills, Banjara Hills, Pragathi Nagar, and all areas of Hyderabad.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="tel:+919676333505"
                className="bg-yellow-400 text-orange-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Call Now: +91 96763 33505</span>
                <span className="sm:hidden">Call Now</span>
              </Link>
              <Link
                href="/book-service"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-white hover:text-orange-900 transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Microwave className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Book Microwave Repair</span>
                <span className="sm:hidden">Book Repair</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Microwave Brands We Repair */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Microwave Brands We Repair in Hyderabad
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We repair all major microwave brands with genuine parts and manufacturer-approved service across all areas of Hyderabad.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {microwaveBrands.map((brand, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-orange-50 transition-colors duration-200">
                <div className="font-semibold text-gray-900">{brand}</div>
                <div className="text-sm text-gray-600">Microwave Repair</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Microwave Types We Repair */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Microwave Types We Repair
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From Solo to Convection, we repair all types of microwaves with expert care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {microwaveTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center gap-3">
                  <Microwave className="h-8 w-8 text-orange-600" />
                  <div>
                    <div className="font-semibold text-gray-900">{type}</div>
                    <div className="text-sm text-gray-600">Repair Service</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Microwave Problems & Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Common Microwave Problems & Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our expert technicians can diagnose and fix all types of microwave problems with professional care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microwaveProblems.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.problem}</h3>
                <ul className="space-y-2">
                  {item.solutions.map((solution, solIndex) => (
                    <li key={solIndex} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Microwave Repair */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us for Microwave Repair in Hyderabad?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide the best microwave repair service in Hyderabad with these key advantages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Same Day Service</h3>
              <p className="text-gray-600">Most microwave repairs completed the same day across all areas of Hyderabad</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Technicians</h3>
              <p className="text-gray-600">Certified technicians with 15+ years of microwave repair experience</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Genuine Parts</h3>
              <p className="text-gray-600">We use only genuine parts for all microwave repairs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Warranty</h3>
              <p className="text-gray-600">Comprehensive warranty on all microwave repairs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Microwave Repair Service Areas in Hyderabad
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide professional microwave repair service across all major areas of Hyderabad.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {locations.map((location, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-orange-50 transition-colors duration-200">
                <MapPin className="h-5 w-5 text-orange-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900 text-sm">{location}</div>
                <div className="text-xs text-gray-600">Microwave Repair</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Need Microwave Repair Service in Hyderabad?
          </h2>
          <p className="text-xl text-white mb-8">
            Get professional microwave repair service for all brands. Same-day service available across all areas of Hyderabad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+919676333505"
              className="bg-yellow-400 text-orange-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call Now: +91 96763 33505
            </Link>
            <Link
              href="/book-service"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-orange-900 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Microwave className="h-5 w-5" />
              Book Microwave Repair Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}