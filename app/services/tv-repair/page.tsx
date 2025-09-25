import type { Metadata } from 'next'
import { Tv, Star, Shield, Clock, Wrench, CheckCircle, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import { GetQuoteButton } from '@/components/CTA'

export const metadata: Metadata = {
  title: 'TV Repair Service Hyderabad | Samsung, LG, Sony TV Repair | ApplianceCares.in',
  description: 'Professional TV repair service in Hyderabad. We repair Samsung, LG, Sony, Panasonic, TCL, OnePlus, Mi TVs. Same-day service available in HITEC City, Gachibowli, Kondapur, Madhapur, Jubilee Hills, Banjara Hills, Pragathi Nagar. Call +91 77802 25280.',
  keywords: 'TV repair Hyderabad, Samsung TV repair, LG TV repair, Sony TV repair, Panasonic TV repair, TCL TV repair, OnePlus TV repair, Mi TV repair, LED TV repair, LCD TV repair, Smart TV repair, OLED TV repair, TV repair near me, TV repair HITEC City, TV repair Gachibowli, TV repair Kondapur, TV repair Madhapur, TV repair Jubilee Hills, TV repair Banjara Hills, TV repair Pragathi Nagar, same day TV repair, emergency TV repair, TV screen replacement, TV repair service Hyderabad, professional TV repair, TV repair technician Hyderabad',
}

const tvBrands = [
  'Samsung', 'LG', 'Sony', 'Panasonic', 'TCL', 'OnePlus', 'Mi', 'Videocon', 
  'Thomson', 'Kodak', 'iFFalcon', 'Realme', 'Motorola', 'Nokia'
]

const tvTypes = [
  'LED TV', 'LCD TV', 'OLED TV', 'Smart TV', 'Android TV', '4K TV', '8K TV', 'HD TV', 'Full HD TV'
]

const tvProblems = [
  {
    problem: 'Screen Issues',
    solutions: ['Screen replacement', 'Backlight repair', 'Pixel repair', 'Display calibration']
  },
  {
    problem: 'Power Problems',
    solutions: ['Power board repair', 'Fuse replacement', 'Power cable repair', 'Main board repair']
  },
  {
    problem: 'Audio Issues',
    solutions: ['Speaker replacement', 'Audio board repair', 'Sound system repair', 'Audio calibration']
  },
  {
    problem: 'Smart TV Problems',
    solutions: ['Software update', 'App installation', 'WiFi connectivity', 'Smart features repair']
  },
  {
    problem: 'Remote Control Issues',
    solutions: ['Remote repair', 'Remote replacement', 'IR sensor repair', 'Bluetooth connectivity']
  },
  {
    problem: 'HDMI & Connectivity',
    solutions: ['HDMI port repair', 'USB port repair', 'AV input repair', 'Connectivity setup']
  }
]

const locations = [
  'HITEC City', 'Gachibowli', 'Kondapur', 'Madhapur', 'Jubilee Hills', 'Banjara Hills', 
  'Pragathi Nagar', 'Kukatpally', 'Miyapur', 'Serilingampally', 'Chandanagar', 'Alwal',
  'Malkajgiri', 'Lal Bahadur Nagar', 'Dilsukhnagar', 'Uppal', 'Nagole', 'LB Nagar'
]

export default function TVRepair() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Professional <span className="text-yellow-300">TV Repair Service</span> in Hyderabad
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-4xl mx-auto">
              Expert TV repair service for all brands including Samsung, LG, Sony, Panasonic, TCL, OnePlus, Mi TVs. 
              Same-day service available in HITEC City, Gachibowli, Kondapur, Madhapur, Jubilee Hills, Banjara Hills, Pragathi Nagar, and all areas of Hyderabad.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="tel:+917780225280"
                className="bg-yellow-400 text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Call Now: +91 77802 25280</span>
                <span className="sm:hidden">Call Now</span>
              </Link>
              <Link
                href="/book-service"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Tv className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Book TV Repair</span>
                <span className="sm:hidden">Book Repair</span>
              </Link>
              <GetQuoteButton
                serviceType="tv-repair"
                className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                WhatsApp Quote
              </GetQuoteButton>
            </div>
          </div>
        </div>
      </section>

      {/* TV Brands We Repair */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              TV Brands We Repair in Hyderabad
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We repair all major TV brands with genuine parts and manufacturer-approved service across all areas of Hyderabad.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {tvBrands.map((brand, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 transition-colors duration-200">
                <div className="font-semibold text-gray-900">{brand}</div>
                <div className="text-sm text-gray-600">TV Repair</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TV Types We Repair */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              TV Types We Repair
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From LED to OLED, Smart TVs to 4K displays, we repair all types of televisions with expert care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tvTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center gap-3">
                  <Tv className="h-8 w-8 text-blue-600" />
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

      {/* Common TV Problems & Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Common TV Problems & Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our expert technicians can diagnose and fix all types of TV problems with professional care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tvProblems.map((item, index) => (
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

      {/* Why Choose Us for TV Repair */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us for TV Repair in Hyderabad?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide the best TV repair service in Hyderabad with these key advantages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Same Day Service</h3>
              <p className="text-gray-600">Most TV repairs completed the same day across all areas of Hyderabad</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Technicians</h3>
              <p className="text-gray-600">Certified technicians with 15+ years of TV repair experience</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Genuine Parts</h3>
              <p className="text-gray-600">We use only genuine parts for all TV repairs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Warranty</h3>
              <p className="text-gray-600">Comprehensive warranty on all TV repairs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              TV Repair Service Areas in Hyderabad
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide professional TV repair service across all major areas of Hyderabad.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {locations.map((location, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 transition-colors duration-200">
                <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900 text-sm">{location}</div>
                <div className="text-xs text-gray-600">TV Repair</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Need TV Repair Service in Hyderabad?
          </h2>
          <p className="text-xl text-white mb-8">
            Get professional TV repair service for all brands. Same-day service available across all areas of Hyderabad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+917780225280"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call Now: +91 77802 25280
            </Link>
            <Link
              href="/book-service"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Tv className="h-5 w-5" />
              Book TV Repair Service
            </Link>
            <GetQuoteButton
              serviceType="tv-repair"
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