import { Wind, CheckCircle, Clock, Shield, Wrench, Star, Phone } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'AC Repair Services - ApplianceCares.in | Professional AC Repair in Hyderabad',
  description: 'Expert AC repair services in Hyderabad. We repair all brands of air conditioners. Gas filling, compressor repair, cooling issues. Same-day service. Call +91 96661 11327',
  keywords: 'AC repair, air conditioner repair, AC gas filling, AC compressor repair, AC cooling issues, AC maintenance, Hyderabad, Pragathi Nagar, AC service',
}

export default function ACRepair() {
  const services = [
    'Gas Filling & Leak Detection',
    'Compressor Repair & Replacement',
    'Cooling Issues',
    'Remote Control Problems',
    'AC Maintenance & Cleaning',
    'Thermostat Repair',
    'Fan Motor Issues',
    'Drainage Problems'
  ]

  const brands = [
    'Daikin', 'Carrier', 'LG', 'Samsung', 'Voltas', 'Blue Star', 'Hitachi', 'Panasonic', 'TCL', 'Haier'
  ]

  const problems = [
    {
      issue: 'AC Not Cooling',
      solution: 'Gas filling or compressor repair',
      price: '₹800-3000'
    },
    {
      issue: 'AC Not Starting',
      solution: 'Power supply or capacitor repair',
      price: '₹500-1500'
    },
    {
      issue: 'Water Leakage',
      solution: 'Drainage pipe cleaning or repair',
      price: '₹300-800'
    },
    {
      issue: 'Remote Not Working',
      solution: 'Remote repair or replacement',
      price: '₹200-600'
    }
  ]

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-600 to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Professional AC Repair Services
              </h1>
              <p className="text-xl text-cyan-100 mb-8">
                Expert AC repair for all brands including split, window, and central ACs. 
                Gas filling, compressor repair, and maintenance services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="tel:+919666111327"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Call Now: +91 96661 11327
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-cyan-600 transition-colors duration-200 text-center"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center">
                <Wind className="h-24 w-24 text-white mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">All AC Brands</h3>
                <p className="text-cyan-100 mb-6">
                  We repair all major AC brands with expert technicians and genuine parts.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {brands.slice(0, 6).map((brand) => (
                    <div key={brand} className="bg-white/20 rounded px-3 py-2">
                      {brand}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AC Repair Services We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AC repair services for all types of air conditioners. 
              From gas filling to compressor repair, we handle it all.
            </p>
          </div>

          {/* Service Image */}
          <div className="mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="Professional AC Repair Service"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Expert AC Repair Technicians</h3>
                <p className="text-lg">Professional AC service with genuine parts and warranty</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <CheckCircle className="h-8 w-8 text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Common AC Problems & Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Quick diagnosis and repair for the most common AC issues
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{problem.issue}</h3>
                <p className="text-gray-600 mb-4">{problem.solution}</p>
                <div className="flex justify-between items-center">
                  <span className="text-cyan-600 font-semibold">{problem.price}</span>
                  <Link
                    href="/contact"
                    className="text-cyan-600 hover:text-cyan-700 font-medium"
                  >
                    Get Quote →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AC Repair Service?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Same Day Service</h3>
              <p className="text-gray-600">Most AC repairs completed within 24 hours</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">90-Day Warranty</h3>
              <p className="text-gray-600">Comprehensive warranty on all repairs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Technicians</h3>
              <p className="text-gray-600">Certified professionals with years of experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "My Daikin AC was not cooling properly. They filled gas and fixed the issue. 
                Great service and reasonable pricing."
              </p>
              <div className="font-semibold text-gray-900">Sunita Reddy</div>
              <div className="text-sm text-gray-500">Gachibowli</div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "LG AC compressor was making noise. They replaced it quickly and the 
                service was excellent."
              </p>
              <div className="font-semibold text-gray-900">Vikram Patel</div>
              <div className="text-sm text-gray-500">Kondapur</div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Carrier AC was leaking water. They fixed the drainage issue and 
                cleaned the AC. Very satisfied!"
              </p>
              <div className="font-semibold text-gray-900">Anita Gupta</div>
              <div className="text-sm text-gray-500">HITEC City</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need AC Repair? We're Here to Help!
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Get your AC fixed by expert technicians. Same-day service with warranty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+919666111327"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Call Now: +91 96661 11327
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-cyan-600 transition-colors duration-200"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
