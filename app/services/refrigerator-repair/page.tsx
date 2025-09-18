import { Refrigerator, CheckCircle, Clock, Shield, Wrench, Star, Phone } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Refrigerator Repair Services - ApplianceCares.in | Professional Refrigerator Repair in Hyderabad',
  description: 'Expert refrigerator repair services in Hyderabad. We repair all brands of refrigerators. Cooling issues, compressor repair, thermostat. Same-day service. Call +91 96661 11327',
  keywords: 'refrigerator repair, fridge repair, cooling issues, compressor repair, thermostat repair, Hyderabad, Pragathi Nagar, refrigerator service',
}

export default function RefrigeratorRepair() {
  const services = [
    'Cooling Issues',
    'Compressor Repair',
    'Thermostat Problems',
    'Door Seal Replacement',
    'Ice Maker Repair',
    'Water Dispenser Issues',
    'Temperature Control',
    'Defrost Problems'
  ]

  const brands = [
    'LG', 'Samsung', 'Whirlpool', 'Godrej', 'Haier', 'Bosch', 'Panasonic', 'TCL', 'Onida', 'Videocon'
  ]

  const problems = [
    {
      issue: 'Refrigerator Not Cooling',
      solution: 'Compressor or gas leak repair',
      price: '₹1000-4000'
    },
    {
      issue: 'Water Leakage',
      solution: 'Drain pipe cleaning or replacement',
      price: '₹300-800'
    },
    {
      issue: 'Ice Maker Not Working',
      solution: 'Ice maker motor or water valve repair',
      price: '₹500-1500'
    },
    {
      issue: 'Door Not Sealing',
      solution: 'Door gasket replacement',
      price: '₹400-1200'
    }
  ]

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-emerald-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Professional Refrigerator Repair
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Expert refrigerator repair for all brands including single door, double door, 
                and side-by-side refrigerators. Same-day service with warranty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="tel:+919666111327"
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Call Now: +91 96661 11327
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors duration-200 text-center"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center">
                <Refrigerator className="h-24 w-24 text-white mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">All Refrigerator Brands</h3>
                <p className="text-green-100 mb-6">
                  We repair all major refrigerator brands with expert technicians.
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
              Refrigerator Repair Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive refrigerator repair services for all types of fridges. 
              From cooling issues to compressor repair, we handle it all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-4" />
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
              Common Refrigerator Problems
            </h2>
            <p className="text-xl text-gray-600">
              Quick diagnosis and repair for the most common refrigerator issues
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{problem.issue}</h3>
                <p className="text-gray-600 mb-4">{problem.solution}</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-semibold">{problem.price}</span>
                  <Link
                    href="/contact"
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Get Quote →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Refrigerator Repair? We're Here to Help!
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Get your refrigerator fixed by expert technicians. Same-day service with warranty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+919666111327"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Call Now: +91 96661 11327
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors duration-200"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
