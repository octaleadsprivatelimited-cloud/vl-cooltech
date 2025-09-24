import { Monitor, CheckCircle, Clock, Shield, Wrench, Star, Phone } from 'lucide-react'
import Link from 'next/link'
import { GetQuoteButton } from '@/components/CTA'

export const metadata = {
  title: 'Home Appliances Repair Services - ApplianceCares.in | Professional Home Appliance Repair in Hyderabad',
  description: 'Expert home appliance repair services in Hyderabad. We repair mixer grinder, iron, geyser, water purifier, induction cooker. Same-day service. Call +91 77802 25280',
  keywords: 'home appliance repair, mixer grinder repair, iron repair, geyser repair, water purifier repair, induction cooker repair, Hyderabad, Pragathi Nagar, home appliances service',
}

export default function HomeAppliancesRepair() {
  const services = [
    'Mixer Grinder Repair',
    'Iron Repair',
    'Geyser Repair',
    'Water Purifier Repair',
    'Induction Cooker Repair',
    'Electric Kettle Repair',
    'Toaster Repair',
    'Coffee Maker Repair'
  ]

  const brands = [
    'Bajaj', 'Prestige', 'Butterfly', 'Morphy Richards', 'Philips', 'Kenwood', 'Havells', 'Crompton', 'Usha', 'Orient'
  ]

  const problems = [
    {
      issue: 'Mixer Grinder Not Working',
      solution: 'Motor or blade repair/replacement',
    },
    {
      issue: 'Iron Not Heating',
      solution: 'Heating element or thermostat repair',
    },
    {
      issue: 'Geyser Not Heating',
      solution: 'Heating element or thermostat repair',
    },
    {
      issue: 'Water Purifier Issues',
      solution: 'Filter replacement or pump repair',
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-800 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Professional <span className="text-yellow-300">Home Appliance Repair</span> in Hyderabad
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Expert home appliance repair for all types of kitchen and home appliances. 
                Mixer grinder, iron, geyser, water purifier, and more. Same-day service available in HITEC City, Gachibowli, Kondapur, Madhapur, Jubilee Hills, Banjara Hills, Pragathi Nagar, and all areas of Hyderabad.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link
                  href="tel:+917780225280"
                  className="bg-white text-teal-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="hidden sm:inline">Call Now: +91 77802 25280</span>
                  <span className="sm:hidden">Call Now</span>
                </Link>
                <GetQuoteButton
                  serviceType="home-appliances"
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-white hover:text-teal-600 transition-colors duration-200 text-center text-sm sm:text-base"
                >
                  Get Free Quote
                </GetQuoteButton>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center">
                <Monitor className="h-24 w-24 text-white mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">All Home Appliance Brands</h3>
                <p className="text-white mb-6">
                  We repair all major home appliance brands with expert technicians.
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
              Home Appliance Repair Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive home appliance repair services for all types of kitchen and home appliances. 
              From mixer grinder to geyser repair, we handle it all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <CheckCircle className="h-8 w-8 text-teal-600 mx-auto mb-4" />
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
              Common Home Appliance Problems
            </h2>
            <p className="text-xl text-gray-600">
              Quick diagnosis and repair for the most common home appliance issues
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{problem.issue}</h3>
                <p className="text-gray-600 mb-4">{problem.solution}</p>
                <div className="flex justify-end items-center">
                  <GetQuoteButton 
                    size="sm" 
                    serviceType="home-appliances"
                    className="text-teal-600 hover:text-teal-700 font-medium"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Home Appliance Repair? We're Here to Help!
          </h2>
          <p className="text-xl text-white mb-8">
            Get your home appliances fixed by expert technicians. Same-day service with warranty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+917780225280"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Call Now: +91 77802 25280
            </Link>
            <GetQuoteButton
              serviceType="home-appliances"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-600 transition-colors duration-200"
            >
              Get Free Quote
            </GetQuoteButton>
          </div>
        </div>
      </section>
    </div>
  )
}
