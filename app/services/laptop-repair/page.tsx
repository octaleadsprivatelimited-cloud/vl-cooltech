import type { Metadata } from 'next'
import { Laptop, Star, Shield, Clock, Wrench, CheckCircle, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import { GetQuoteButton } from '@/components/CTA'
import ServiceImages from '@/components/ServiceImages'

export const metadata: Metadata = {
  title: 'Laptop Repair Hyderabad | Dell, HP, Lenovo, MacBook Repair | ApplianceCares.in',
  description: 'Professional laptop repair service in Hyderabad. We repair Dell, HP, Lenovo, Asus, Acer, MacBook laptops. Same-day service available in HITEC City, Gachibowli, Kondapur, Madhapur, Jubilee Hills, Banjara Hills, Pragathi Nagar. Call +91 96661 11327.',
  keywords: 'laptop repair Hyderabad, Dell laptop repair, HP laptop repair, Lenovo laptop repair, Asus laptop repair, Acer laptop repair, MacBook repair, laptop repair near me, laptop repair HITEC City, laptop repair Gachibowli, laptop repair Kondapur, laptop repair Madhapur, laptop repair Jubilee Hills, laptop repair Banjara Hills, laptop repair Pragathi Nagar, same day laptop repair, emergency laptop repair, laptop service Hyderabad, laptop screen replacement Hyderabad, laptop keyboard repair Hyderabad',
}

const laptopBrands = [
  'Dell', 'HP', 'Lenovo', 'Asus', 'Acer', 'MacBook', 'Apple', 'Samsung', 'MSI', 'Toshiba'
]

const laptopTypes = [
  'Business Laptop', 'Gaming Laptop', 'Ultrabook', 'Chromebook', 'MacBook Air', 'MacBook Pro', '2-in-1 Laptop', 'Notebook'
]

const laptopProblems = [
  {
    problem: 'Screen Issues',
    solutions: ['Screen replacement', 'LCD repair', 'Backlight repair', 'Display calibration']
  },
  {
    problem: 'Keyboard Problems',
    solutions: ['Keyboard replacement', 'Key repair', 'Keyboard cleaning', 'Backlight repair']
  },
  {
    problem: 'Battery Issues',
    solutions: ['Battery replacement', 'Battery calibration', 'Power adapter repair', 'Charging port repair']
  },
  {
    problem: 'Performance Issues',
    solutions: ['RAM upgrade', 'SSD installation', 'CPU thermal paste', 'Software optimization']
  },
  {
    problem: 'Hardware Problems',
    solutions: ['Motherboard repair', 'Hard drive replacement', 'Fan replacement', 'Port repair']
  },
  {
    problem: 'Software Issues',
    solutions: ['OS installation', 'Virus removal', 'Data recovery', 'Driver installation']
  }
]

const locations = [
  'HITEC City', 'Gachibowli', 'Kondapur', 'Madhapur', 'Jubilee Hills', 'Banjara Hills', 
  'Pragathi Nagar', 'Kukatpally', 'Miyapur', 'Serilingampally', 'Chandanagar', 'Alwal',
  'Malkajgiri', 'Lal Bahadur Nagar', 'Dilsukhnagar', 'Uppal', 'Nagole', 'LB Nagar'
]

export default function LaptopRepair() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Professional <span className="text-yellow-300">Laptop Repair Service</span> in Hyderabad
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-4xl mx-auto">
              Expert laptop repair service for all brands including Dell, HP, Lenovo, Asus, Acer, MacBook. 
              Same-day service available in HITEC City, Gachibowli, Kondapur, Madhapur, Jubilee Hills, Banjara Hills, Pragathi Nagar, and all areas of Hyderabad.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="tel:+919666111327"
                className="bg-yellow-400 text-purple-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Call Now: +91 96661 11327</span>
                <span className="sm:hidden">Call Now</span>
              </Link>
              <Link
                href="/book-service"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-white hover:text-purple-900 transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Laptop className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Book Laptop Repair</span>
                <span className="sm:hidden">Book Repair</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Laptop Brands We Repair */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Laptop Brands We Repair in Hyderabad
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We repair all major laptop brands with genuine parts and manufacturer-approved service across all areas of Hyderabad.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {laptopBrands.map((brand, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-purple-50 transition-colors duration-200">
                <div className="font-semibold text-gray-900">{brand}</div>
                <div className="text-sm text-gray-600">Laptop Repair</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Laptop Types We Repair */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Laptop Types We Repair
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From Business to Gaming, we repair all types of laptops with expert care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {laptopTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center gap-3">
                  <Laptop className="h-8 w-8 text-purple-600" />
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

      {/* Common Laptop Problems & Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Common Laptop Problems & Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our expert technicians can diagnose and fix all types of laptop problems with professional care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {laptopProblems.map((item, index) => (
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

      {/* Why Choose Us for Laptop Repair */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us for Laptop Repair in Hyderabad?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide the best laptop repair service in Hyderabad with these key advantages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Same Day Service</h3>
              <p className="text-gray-600">Most laptop repairs completed the same day across all areas of Hyderabad</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Technicians</h3>
              <p className="text-gray-600">Certified technicians with 15+ years of laptop repair experience</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Genuine Parts</h3>
              <p className="text-gray-600">We use only genuine parts for all laptop repairs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Warranty</h3>
              <p className="text-gray-600">Comprehensive warranty on all laptop repairs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Laptop Repair Service Areas in Hyderabad
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide professional laptop repair service across all major areas of Hyderabad.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {locations.map((location, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-purple-50 transition-colors duration-200">
                <MapPin className="h-5 w-5 text-purple-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900 text-sm">{location}</div>
                <div className="text-xs text-gray-600">Laptop Repair</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Need Laptop Repair Service in Hyderabad?
          </h2>
          <p className="text-xl text-white mb-8">
            Get professional laptop repair service for all brands. Same-day service available across all areas of Hyderabad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+919666111327"
              className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call Now: +91 96661 11327
            </Link>
            <Link
              href="/book-service"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-900 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Laptop className="h-5 w-5" />
              Book Laptop Repair Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}