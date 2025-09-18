import { Monitor, CheckCircle, Clock, Shield, Wrench, Star, Phone } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Washing Machine Repair Services - ApplianceCares.in | Professional Washing Machine Repair in Hyderabad',
  description: 'Expert washing machine repair services in Hyderabad. We repair all brands of washing machines. Drum issues, motor problems, water leakage. Same-day service. Call +91 96661 11327',
  keywords: 'washing machine repair, washing machine service, drum repair, motor repair, water leakage, Hyderabad, Pragathi Nagar, washing machine maintenance',
}

export default function WashingMachineRepair() {
  const services = [
    'Drum Repair & Replacement',
    'Motor Problems',
    'Water Leakage Issues',
    'Spin Problems',
    'Door Lock Issues',
    'Control Panel Repair',
    'Water Inlet Valve',
    'Drain Pump Repair'
  ]

  const brands = [
    'LG', 'Samsung', 'Whirlpool', 'IFB', 'Bosch', 'Haier', 'Godrej', 'Panasonic', 'TCL', 'Onida'
  ]

  const problems = [
    {
      issue: 'Washing Machine Not Spinning',
      solution: 'Motor or belt repair/replacement',
      price: '₹800-2500'
    },
    {
      issue: 'Water Leakage',
      solution: 'Seal or gasket replacement',
      price: '₹400-1200'
    },
    {
      issue: 'Drum Not Moving',
      solution: 'Motor or drum bearing repair',
      price: '₹1000-3000'
    },
    {
      issue: 'Door Not Opening',
      solution: 'Door lock mechanism repair',
      price: '₹300-800'
    }
  ]

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Professional Washing Machine Repair
              </h1>
              <p className="text-xl text-indigo-100 mb-8">
                Expert washing machine repair for all brands including front load, top load, 
                and semi-automatic machines. Same-day service with warranty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="tel:+919666111327"
                  className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Call Now: +91 96661 11327
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors duration-200 text-center"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center">
                <Monitor className="h-24 w-24 text-white mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">All Washing Machine Brands</h3>
                <p className="text-indigo-100 mb-6">
                  We repair all major washing machine brands with expert technicians.
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
              Washing Machine Repair Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive washing machine repair services for all types of machines. 
              From drum issues to motor problems, we handle it all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <CheckCircle className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
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
              Common Washing Machine Problems
            </h2>
            <p className="text-xl text-gray-600">
              Quick diagnosis and repair for the most common washing machine issues
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{problem.issue}</h3>
                <p className="text-gray-600 mb-4">{problem.solution}</p>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-600 font-semibold">{problem.price}</span>
                  <Link
                    href="/contact"
                    className="text-indigo-600 hover:text-indigo-700 font-medium"
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
              Why Choose Our Washing Machine Repair Service?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Same Day Service</h3>
              <p className="text-gray-600">Most washing machine repairs completed within 24 hours</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">90-Day Warranty</h3>
              <p className="text-gray-600">Comprehensive warranty on all repairs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Technicians</h3>
              <p className="text-gray-600">Certified professionals with years of experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Washing Machine Repair? We're Here to Help!
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Get your washing machine fixed by expert technicians. Same-day service with warranty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+919666111327"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Call Now: +91 96661 11327
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors duration-200"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
