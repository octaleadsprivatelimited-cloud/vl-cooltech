import type { Metadata } from 'next'
import { Smartphone, Star, Shield, Clock, Wrench, CheckCircle, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import { GetQuoteButton } from '@/components/CTA'

export const metadata: Metadata = {
  title: 'Mobile Repair Hyderabad | iPhone, Samsung, OnePlus Mobile Repair | ApplianceCares.in',
  description: 'Professional mobile repair service in Hyderabad. We repair iPhone, Samsung, OnePlus, Xiaomi, Vivo, Oppo mobiles. Same-day service available in HITEC City, Gachibowli, Kondapur, Madhapur, Jubilee Hills, Banjara Hills, Pragathi Nagar. Call +91 96661 11327.',
  keywords: 'mobile repair Hyderabad, iPhone repair Hyderabad, Samsung mobile repair, OnePlus mobile repair, Xiaomi mobile repair, Vivo mobile repair, Oppo mobile repair, Realme mobile repair, Motorola mobile repair, Nokia mobile repair, Google Pixel mobile repair, mobile repair near me, mobile repair HITEC City, mobile repair Gachibowli, mobile repair Kondapur, mobile repair Madhapur, mobile repair Jubilee Hills, mobile repair Banjara Hills, mobile repair Pragathi Nagar, mobile repair Kukatpally, mobile repair Miyapur, mobile repair Serilingampally, mobile repair Chandanagar, mobile repair Alwal, mobile repair Malkajgiri, mobile repair Lal Bahadur Nagar, mobile repair Dilsukhnagar, mobile repair Uppal, mobile repair Nagole, mobile repair LB Nagar, same day mobile repair, emergency mobile repair, smartphone repair Hyderabad, mobile screen replacement Hyderabad, mobile battery replacement Hyderabad, mobile screen repair, mobile display repair, mobile charging port repair, mobile camera repair, mobile speaker repair, mobile motherboard repair, mobile software repair, mobile virus removal, mobile data recovery, mobile water damage repair, mobile drop damage repair, mobile cracked screen repair, mobile touch screen repair, mobile LCD repair, mobile AMOLED repair, mobile OLED repair, mobile back cover replacement, mobile front camera repair, mobile rear camera repair, mobile fingerprint sensor repair, mobile face unlock repair, mobile charging issue repair, mobile overheating repair, mobile slow performance repair, mobile app installation, mobile OS update, mobile factory reset, mobile unlock service, mobile rooting service, mobile jailbreak service, professional mobile repair, certified mobile repair, genuine parts mobile repair, warranty mobile repair, affordable mobile repair, best mobile repair service Hyderabad, top mobile repair center Hyderabad, trusted mobile repair shop Hyderabad, expert mobile technician Hyderabad, experienced mobile repair engineer, mobile repair service center, mobile repair workshop, mobile repair lab, mobile repair clinic, mobile repair station, mobile repair outlet, mobile repair store, mobile repair shop, mobile repair center, mobile repair service, mobile phone repair, smartphone service, mobile device repair, cell phone repair, phone repair service, mobile gadget repair, handheld device repair, portable device repair, electronic device repair, digital device repair, mobile equipment repair, mobile hardware repair, mobile software service, mobile technical support, mobile troubleshooting, mobile diagnosis, mobile inspection, mobile maintenance, mobile servicing, mobile refurbishment, mobile restoration, mobile renovation, mobile upgrade, mobile customization, mobile modification, mobile enhancement, mobile optimization, mobile tuning, mobile calibration, mobile adjustment, mobile fixing, mobile mending, mobile restoration, mobile renovation, mobile upgrade, mobile customization, mobile modification, mobile enhancement, mobile optimization, mobile tuning, mobile calibration, mobile adjustment, mobile fixing, mobile mending',
}

const mobileBrands = [
  'iPhone', 'Samsung', 'OnePlus', 'Xiaomi', 'Vivo', 'Oppo', 'Realme', 'Motorola', 'Nokia', 'Google Pixel'
]

const mobileTypes = [
  'Smartphone', 'iPhone', 'Android Phone', 'Budget Phone', 'Flagship Phone', 'Gaming Phone', 'Business Phone', 'Feature Phone'
]

const mobileProblems = [
  {
    problem: 'Screen Issues',
    solutions: ['Screen replacement', 'LCD repair', 'Touch repair', 'Display calibration']
  },
  {
    problem: 'Battery Problems',
    solutions: ['Battery replacement', 'Battery calibration', 'Charging port repair', 'Wireless charging repair']
  },
  {
    problem: 'Camera Issues',
    solutions: ['Camera replacement', 'Camera lens repair', 'Flash repair', 'Camera calibration']
  },
  {
    problem: 'Software Problems',
    solutions: ['OS update', 'Virus removal', 'Data recovery', 'App installation']
  },
  {
    problem: 'Audio Issues',
    solutions: ['Speaker replacement', 'Earpiece repair', 'Microphone repair', 'Audio jack repair']
  },
  {
    problem: 'Hardware Problems',
    solutions: ['Motherboard repair', 'Button repair', 'Port repair', 'Sensors repair']
  }
]

const locations = [
  'HITEC City', 'Gachibowli', 'Kondapur', 'Madhapur', 'Jubilee Hills', 'Banjara Hills', 
  'Pragathi Nagar', 'Kukatpally', 'Miyapur', 'Serilingampally', 'Chandanagar', 'Alwal',
  'Malkajgiri', 'Lal Bahadur Nagar', 'Dilsukhnagar', 'Uppal', 'Nagole', 'LB Nagar'
]

export default function MobileRepair() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 via-pink-700 to-purple-800 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Professional <span className="text-yellow-300">Mobile Repair Service</span> in Hyderabad
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Expert mobile repair service for all brands including iPhone, Samsung, OnePlus, Xiaomi, Vivo, Oppo. 
                Same-day service available in HITEC City, Gachibowli, Kondapur, Madhapur, Jubilee Hills, Banjara Hills, Pragathi Nagar, and all areas of Hyderabad.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link
                  href="tel:+919666111327"
                  className="bg-yellow-400 text-pink-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="hidden sm:inline">Call Now: +91 96661 11327</span>
                  <span className="sm:hidden">Call Now</span>
                </Link>
                <Link
                  href="/book-service"
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-white hover:text-pink-900 transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Smartphone className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="hidden sm:inline">Book Mobile Repair</span>
                  <span className="sm:hidden">Book Repair</span>
                </Link>
                <GetQuoteButton
                  serviceType="mobile-repair"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  WhatsApp Quote
                </GetQuoteButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Brands We Repair */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Mobile Brands We Repair in Hyderabad
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We repair all major mobile brands with genuine parts and manufacturer-approved service across all areas of Hyderabad.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {mobileBrands.map((brand, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-pink-50 transition-colors duration-200">
                <div className="font-semibold text-gray-900 mb-2">{brand}</div>
                <div className="text-sm text-gray-600 mb-3">Mobile Repair</div>
                <GetQuoteButton
                  serviceType="mobile-repair"
                  brand={brand.toLowerCase()}
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs font-medium transition-colors duration-200 w-full"
                >
                  WhatsApp
                </GetQuoteButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Types We Repair */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Mobile Types We Repair
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From iPhone to Android, we repair all types of mobile phones with expert care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mobileTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center gap-3">
                  <Smartphone className="h-8 w-8 text-pink-600" />
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

      {/* Common Mobile Problems & Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Common Mobile Problems & Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our expert technicians can diagnose and fix all types of mobile problems with professional care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileProblems.map((item, index) => (
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

      {/* Why Choose Us for Mobile Repair */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us for Mobile Repair in Hyderabad?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide the best mobile repair service in Hyderabad with these key advantages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">
            <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <div className="w-20 h-20 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Same Day Service</h3>
              <p className="text-gray-600 leading-relaxed">Most mobile repairs completed the same day across all areas of Hyderabad</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Wrench className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Technicians</h3>
              <p className="text-gray-600 leading-relaxed">Certified technicians with 15+ years of mobile repair experience</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Genuine Parts</h3>
              <p className="text-gray-600 leading-relaxed">We use only genuine parts for all mobile repairs</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Star className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Warranty</h3>
              <p className="text-gray-600 leading-relaxed">Comprehensive warranty on all mobile repairs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Mobile Repair Service Areas in Hyderabad
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide professional mobile repair service across all major areas of Hyderabad.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {locations.map((location, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-pink-50 transition-colors duration-200">
                <MapPin className="h-5 w-5 text-pink-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900 text-sm">{location}</div>
                <div className="text-xs text-gray-600">Mobile Repair</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Need Mobile Repair Service in Hyderabad?
          </h2>
          <p className="text-xl text-white mb-8">
            Get professional mobile repair service for all brands. Same-day service available across all areas of Hyderabad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+919666111327"
              className="bg-yellow-400 text-pink-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call Now: +91 96661 11327
            </Link>
            <Link
              href="/book-service"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-pink-900 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Smartphone className="h-5 w-5" />
              Book Mobile Repair Service
            </Link>
            <GetQuoteButton
              serviceType="mobile-repair"
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