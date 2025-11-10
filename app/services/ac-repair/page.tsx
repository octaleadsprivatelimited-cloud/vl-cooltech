import type { Metadata } from 'next'
import { Wind, Star, Shield, Clock, Wrench, CheckCircle, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import { GetQuoteButton } from '@/components/CTA'
import ServiceImages from '@/components/ServiceImages'
import type { CSSProperties } from 'react'

export const metadata: Metadata = {
  title: 'VL CoolTech | AC Repair, Installation, Cleaning & Inverter Service in Hyderabad West',
  description:
    'VL CoolTech offers AC repair, gas filling, inverter AC diagnostics, installation, relocation, foam cleaning and annual maintenance across Ameenpur, Beeramguda, Patancheru, BHEL Township, Lingampally, Miyapur and Greater Hyderabad. Same-day doorstep visits with visiting charge ₹299. Call +91 96763 33505 / +91 96765 82723.',
  keywords:
    'VL CoolTech AC repair, AC service Ameenpur, AC installation Beeramguda, AC relocation Patancheru, inverter AC repair Hyderabad, AC gas filling Lingampally, AC foam cleaning Miyapur, split AC service Hyderabad west, window AC repair Hyderabad, ₹299 visiting charge AC service',
}

const acBrands = [
  'Daikin',
  'LG',
  'Samsung',
  'Voltas',
  'Blue Star',
  'Carrier',
  'Hitachi',
  'Mitsubishi',
  'Godrej',
  'Haier',
]

const acTypes = [
  'Split AC',
  'Window AC',
  'Inverter Split AC',
  'Cassette AC',
  'Tower / Floor Standing AC',
  'Ductable AC',
  'VRF / VRV AC',
  'Commercial Chillers',
]

const acProblems = [
  {
    problem: 'No / Low Cooling',
    solutions: ['Gas top-up & leak detection', 'Compressor repair', 'Expansion valve & sensor replacement', 'Cooling coil cleaning'],
  },
  {
    problem: 'Inverter AC Errors',
    solutions: ['PCB repair & replacement', 'Inverter module diagnostics', 'Communication error fixes', 'Software reset & calibration'],
  },
  {
    problem: 'Water Leakage',
    solutions: ['Drain tray & pipe cleaning', 'Condensate pump service', 'Indoor unit leveling', 'Insulation renewal'],
  },
  {
    problem: 'Installation & Relocation',
    solutions: ['Split & window AC installation', 'Relocation with vacuuming', 'Copper piping & insulation', 'Stabilizer & wiring setup'],
  },
  {
    problem: 'Foam & Deep Cleaning',
    solutions: ['Foam jet cleaning', 'Outdoor coil power wash', 'Blower & filter sanitisation', 'Anti-fungal treatment'],
  },
  {
    problem: 'Noise & Vibration',
    solutions: ['Blower motor service', 'Indoor/outdoor fan balancing', 'Compressor mounting pads', 'Duct & panel insulation'],
  },
]

const locations = [
  'Ameenpur',
  'Beeramguda',
  'Patancheru',
  'BHEL Township',
  'Lingampally',
  'Miyapur',
  'Kondapur',
  'Gachibowli',
  'Kukatpally',
  'Bachupally',
  'Manikonda',
  'Tellapur',
  'Serilingampally',
  'Chandanagar',
  'Kompally',
  'Secunderabad',
]

export default function ACRepair() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="page-hero bg-gradient-to-br from-cyan-600 via-cyan-700 to-blue-800 pt-14 pb-10 sm:pt-18 sm:pb-14 lg:pt-22 lg:pb-16"
        style={{ '--hero-bg': "url('/images/hero/ac repair.jpg')", '--hero-overlay': 'rgba(0, 0, 0, 0.75)' } as CSSProperties}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              VL CoolTech <span className="text-yellow-300">AC Repair, Installation & Cleaning</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-4xl mx-auto">
              Same-day doorstep service for AC repair, gas filling, inverter diagnostics, installation, relocation and foam cleaning across Ameenpur, Beeramguda, Patancheru, BHEL Township, Lingampally, Miyapur, Kondapur, Gachibowli and Greater Hyderabad. Visiting charge ₹299 adjusted in the final invoice.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="tel:+919676333505"
                className="bg-yellow-400 text-cyan-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Call Now: +91 96763 33505</span>
                <span className="sm:hidden">Call Now</span>
              </Link>
              <Link
                href="/book-service"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-white hover:text-cyan-900 transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Wind className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Book AC Repair</span>
                <span className="sm:hidden">Book Repair</span>
              </Link>
              <GetQuoteButton
                serviceType="ac-repair"
                className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                WhatsApp Quote
              </GetQuoteButton>
            </div>
          </div>
        </div>
      </section>

      {/* AC Brands We Repair */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              AC Brands We Repair in Hyderabad
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We repair all major AC brands with genuine parts and manufacturer-approved service across all areas of Hyderabad.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {acBrands.map((brand, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-cyan-50 transition-colors duration-200">
                <div className="font-semibold text-gray-900">{brand}</div>
                <div className="text-sm text-gray-600">AC Repair</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AC Types We Repair */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              AC Types We Repair
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From Split AC to Central AC, we repair all types of air conditioners with expert care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {acTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center gap-3">
                  <Wind className="h-8 w-8 text-cyan-600" />
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

      {/* Common AC Problems & Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Common AC Problems & Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our expert technicians can diagnose and fix all types of AC problems with professional care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {acProblems.map((item, index) => (
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

      {/* Why Choose Us for AC Repair */}
      <section className="py-16 bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us for AC Repair in Hyderabad?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide the best AC repair service in Hyderabad with these key advantages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Same Day Service</h3>
              <p className="text-gray-600">Most AC repairs completed the same day across all areas of Hyderabad</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Technicians</h3>
              <p className="text-gray-600">Certified technicians with 15+ years of AC repair experience</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Genuine Parts</h3>
              <p className="text-gray-600">We use only genuine parts for all AC repairs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Warranty</h3>
              <p className="text-gray-600">Comprehensive warranty on all AC repairs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              AC Repair Service Areas in Hyderabad
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide professional AC repair service across all major areas of Hyderabad.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {locations.map((location, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-cyan-50 transition-colors duration-200">
                <MapPin className="h-5 w-5 text-cyan-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900 text-sm">{location}</div>
                <div className="text-xs text-gray-600">AC Repair</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Need VL CoolTech AC Experts at Your Doorstep?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Professional AC repair, installation, relocation, inverter diagnostics and foam cleaning across Hyderabad West with transparent ₹299 visiting charge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+919676333505"
              className="bg-yellow-400 text-cyan-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call Now: +91 96763 33505
            </Link>
            <Link
              href="/book-service"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-cyan-900 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Wind className="h-5 w-5" />
              Book AC Repair Service
            </Link>
            <GetQuoteButton
              serviceType="ac-repair"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold transition-colors duration-200 flex items-center justify-center gap-2"
            >
              WhatsApp Quote
            </GetQuoteButton>
          </div>
        </div>
      </section>
    </div>
  )
}