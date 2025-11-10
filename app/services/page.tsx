import Link from 'next/link'
import { GetQuoteButton } from '@/components/CTA'
import { Tv, Wind, Refrigerator, Wrench, RotateCcw, Sparkles, Zap, ArrowRight } from 'lucide-react'
import type { CSSProperties } from 'react'

export const metadata = {
  title: 'VL CoolTech Services | AC, Refrigerator, Washing Machine, LED TV & Electrical Care',
  description:
    'Explore VL CoolTech’s AC repair, installation, foam cleaning, inverter AC diagnostics, refrigerator, washing machine, LED/QLED TV, water purifier and electrical services. Same-day doorstep support across Ameenpur, Beeramguda, Patancheru, BHEL Township, Lingampally, Miyapur and Greater Hyderabad with ₹299 visiting charge.',
  keywords:
    'VL CoolTech services, AC repair Ameenpur, AC installation Beeramguda, AC foam cleaning Hyderabad, inverter AC service Patancheru, refrigerator repair BHEL Township, washing machine repair Miyapur, LED TV repair Lingampally, water purifier service Hyderabad west, electrical works Hyderabad',
}

const ServicesPage = () => {
  const services = [
    {
      icon: Wind,
      title: 'AC Repair & Service',
      description: 'Split, window and inverter AC diagnostics with experienced technicians and genuine spares.',
      features: ['Gas top-up & leak fix', 'Cooling & sensor issues', 'PCB repair', 'Emergency breakdown visits'],
      href: '/services/ac-repair',
      color: 'bg-cyan-500',
    },
    {
      icon: Wrench,
      title: 'AC Installation & Relocation',
      description: 'Professional installation, dismantling and shifting for split and window AC units with proper vacuuming.',
      features: ['New AC installation', 'Relocation & re-install', 'Copper piping & insulation', 'Stabilizer & wiring setup'],
      href: '/services/ac-repair#installation',
      color: 'bg-blue-500',
    },
    {
      icon: Sparkles,
      title: 'AC Foam & Deep Cleaning',
      description: 'High-pressure foam jet cleaning that restores airflow, removes odour and improves AC efficiency.',
      features: ['Indoor/outdoor coil wash', 'Drain tray & blower cleaning', 'Anti-fungal treatment', 'Seasonal maintenance plans'],
      href: '/services/ac-repair#cleaning',
      color: 'bg-sky-500',
    },
    {
      icon: Refrigerator,
      title: 'Refrigerator & Freezer Service',
      description: 'Cooling solutions for single door, double door, side-by-side and deep freezers with coolant handling expertise.',
      features: ['Cooling complaints', 'Compressor & relay service', 'Thermostat & sensors', 'Door gasket replacement'],
      href: '/services/refrigerator-repair',
      color: 'bg-green-500',
    },
    {
      icon: RotateCcw,
      title: 'Washing Machine Repair',
      description: 'Top-load, front-load, semi-automatic and inverter washing machine repairs with original spares.',
      features: ['Drum & bearing repair', 'Motor & belt replacement', 'Water inlet/drainage fix', 'Error code troubleshooting'],
      href: '/services/washing-machine-repair',
      color: 'bg-indigo-500',
    },
    {
      icon: Tv,
      title: 'LED & QLED TV Repair',
      description: 'Board-level repair, backlight replacement and panel calibration for LED, QLED and Smart TVs.',
      features: ['Backlight kits', 'Display & panel', 'No power / sound', 'Smart TV software'],
      href: '/services/tv-repair',
      color: 'bg-purple-500',
    },
    {
      icon: Zap,
      title: 'Water Purifier & Electrical Works',
      description: 'RO/UV purifier service, filter replacement and residential electrical troubleshooting by certified electricians.',
      features: ['RO filter & membrane change', 'Motor & SMPS', 'Wiring & MCB upgrades', 'Appliance electrical setup'],
      href: '/services/home-appliances',
      color: 'bg-amber-500',
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="page-hero bg-gradient-to-br from-primary-600 to-blue-700 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24"
        style={{ '--hero-bg': "url('/images/hero/ac repair.jpg')", '--hero-overlay': 'rgba(12, 74, 110, 0.78)' } as CSSProperties}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              VL CoolTech Services
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Visiting charge ₹299 | Same-day doorstep AC, refrigerator, washing machine, LED TV, water purifier and electrical services across Ameenpur, Beeramguda, Patancheru, BHEL Township, Lingampally, Miyapur and Greater Hyderabad.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="p-6">
                    {/* Icon */}
                    <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>


                    {/* Features */}
                    <ul className="space-y-1 mb-4">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-gray-500 flex items-center">
                          <div className="w-1 h-1 bg-primary-400 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Learn More */}
                    <div className="flex items-center text-primary-600 font-medium text-sm group-hover:text-primary-700 transition-colors duration-200">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose VL CoolTech?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine specialised AC expertise with comprehensive appliance and electrical support, transparent pricing and prompt response across Hyderabad West.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Same-Day Slots</h3>
              <p className="text-gray-600">Priority coverage for Ameenpur, Beeramguda, Patancheru, BHEL Township & Lingampally</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Service Warranty</h3>
              <p className="text-gray-600">Genuine spares, workmanship guarantee and post-service support</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">Flat ₹299 visiting charge adjusted in the final invoice</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Book Your VL CoolTech Technician?
          </h2>
          <p className="text-xl text-white mb-8">
            Call or WhatsApp to secure your slot. We’ll share technician details, visiting charge and ETA immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+919676333505"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Call Now: +91 96763 33505
            </Link>
            <GetQuoteButton
              serviceType="general"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              Get Free Quote
            </GetQuoteButton>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
