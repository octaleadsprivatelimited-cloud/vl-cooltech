import Link from 'next/link'
import { Tv, Wind, Refrigerator, Microwave, Laptop, Smartphone, Monitor, WashingMachine } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Tv,
      title: 'TV Repair',
      description: 'Professional TV repair services for all brands including LED, LCD, OLED, and Smart TVs.',
      features: ['Screen Repair', 'Power Issues', 'Audio Problems', 'Smart TV Setup'],
      href: '/services/tv-repair',
      color: 'bg-blue-500'
    },
    {
      icon: Wind,
      title: 'AC Repair',
      description: 'Complete AC repair and maintenance services for all types of air conditioners.',
      features: ['Gas Filling', 'Compressor Repair', 'Cooling Issues', 'Maintenance'],
      href: '/services/ac-repair',
      color: 'bg-cyan-500'
    },
    {
      icon: Monitor,
      title: 'Washing Machine Repair',
      description: 'Expert washing machine repair for all brands and models.',
      features: ['Drum Issues', 'Motor Problems', 'Water Leakage', 'Spin Problems'],
      href: '/services/washing-machine-repair',
      color: 'bg-indigo-500'
    },
    {
      icon: Refrigerator,
      title: 'Refrigerator Repair',
      description: 'Comprehensive refrigerator repair services for all types of fridges.',
      features: ['Cooling Issues', 'Compressor Repair', 'Thermostat', 'Door Seals'],
      href: '/services/refrigerator-repair',
      color: 'bg-green-500'
    },
    {
      icon: Microwave,
      title: 'Microwave Repair',
      description: 'Professional microwave oven repair and maintenance services.',
      features: ['Heating Issues', 'Turntable Problems', 'Door Switches', 'Control Panel'],
      href: '/services/microwave-repair',
      color: 'bg-orange-500'
    },
    {
      icon: Laptop,
      title: 'Laptop Repair',
      description: 'Expert laptop repair services for all major brands and models.',
      features: ['Screen Replacement', 'Keyboard Repair', 'Battery Issues', 'Software Problems'],
      href: '/services/laptop-repair',
      color: 'bg-purple-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Repair',
      description: 'Professional mobile phone repair services for all smartphone brands.',
      features: ['Screen Repair', 'Battery Replacement', 'Charging Port', 'Software Issues'],
      href: '/services/mobile-repair',
      color: 'bg-pink-500'
    },
    {
      icon: Monitor,
      title: 'Home Appliances',
      description: 'Repair services for all home appliances and electronic devices.',
      features: ['Mixer Grinder', 'Iron', 'Geyser', 'Water Purifier'],
      href: '/services/home-appliances',
      color: 'bg-teal-500'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional repair services for all your electronics and home appliances. 
            We fix it right the first time, every time.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-gray-500 flex items-center">
                        <div className="w-1 h-1 bg-primary-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More */}
                  <div className="mt-4 text-primary-600 font-medium text-sm group-hover:text-primary-700 transition-colors duration-200">
                    Learn More →
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Don't see your appliance listed?
            </h3>
            <p className="text-gray-600 mb-6">
              We repair all types of electronics and home appliances. Contact us for a free quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+919666111327"
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
              >
                Call Now: +91 96661 11327
              </Link>
              <Link
                href="/contact"
                className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
