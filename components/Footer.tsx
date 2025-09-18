'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  const [openSections, setOpenSections] = useState<string[]>([])

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  const services = [
    { name: 'TV Repair', href: '/services/tv-repair' },
    { name: 'AC Repair', href: '/services/ac-repair' },
    { name: 'Washing Machine Repair', href: '/services/washing-machine-repair' },
    { name: 'Refrigerator Repair', href: '/services/refrigerator-repair' },
    { name: 'Microwave Repair', href: '/services/microwave-repair' },
    { name: 'Laptop Repair', href: '/services/laptop-repair' },
    { name: 'Mobile Repair', href: '/services/mobile-repair' },
    { name: 'Home Appliances', href: '/services/home-appliances' },
  ]

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'Press', href: '/press' },
  ]

  const support = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Service Areas', href: '/service-areas' },
    { name: 'Book Service', href: '/book-service' },
    { name: 'Track Service', href: '/track-service' },
    { name: 'Customer Support', href: '/support' },
  ]

  const legal = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Refund Policy', href: '/refund-policy' },
    { name: 'Warranty', href: '/warranty' },
    { name: 'Sitemap', href: '/sitemap' },
  ]

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'YouTube', href: '#', icon: Youtube },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="ml-2 text-xl font-bold">ApplianceCares</span>
            </div>
            <p className="text-gray-300 mb-6">
              Professional electronics and appliance repair services in Hyderabad. 
              Trusted by thousands of customers for reliable, affordable, and quality repairs.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3" />
                <span>+91 96661 11327</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3" />
                <span>info@appliancecares.in</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-3" />
                <span>Pragathi Nagar, Hyderabad, TG</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="h-4 w-4 mr-3" />
                <span>Mon-Sun: 8:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* Services - Desktop */}
          <div className="hidden lg:block">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company - Desktop */}
          <div className="hidden lg:block">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal - Desktop */}
          <div className="hidden lg:block">
            <h3 className="text-lg font-semibold mb-4">Support & Legal</h3>
            <ul className="space-y-2">
              {[...support, ...legal].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Accordion */}
          <div className="lg:hidden space-y-4">
            {/* Services */}
            <div>
              <button
                onClick={() => toggleSection('services')}
                className="flex items-center justify-between w-full text-left py-2"
              >
                <h3 className="text-lg font-semibold">Our Services</h3>
                <ChevronDown 
                  className={`h-5 w-5 transition-transform duration-200 ${
                    openSections.includes('services') ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {openSections.includes('services') && (
                <ul className="mt-2 space-y-2 pl-4">
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link 
                        href={service.href}
                        className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Company */}
            <div>
              <button
                onClick={() => toggleSection('company')}
                className="flex items-center justify-between w-full text-left py-2"
              >
                <h3 className="text-lg font-semibold">Company</h3>
                <ChevronDown 
                  className={`h-5 w-5 transition-transform duration-200 ${
                    openSections.includes('company') ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {openSections.includes('company') && (
                <ul className="mt-2 space-y-2 pl-4">
                  {company.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href}
                        className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Support */}
            <div>
              <button
                onClick={() => toggleSection('support')}
                className="flex items-center justify-between w-full text-left py-2"
              >
                <h3 className="text-lg font-semibold">Support</h3>
                <ChevronDown 
                  className={`h-5 w-5 transition-transform duration-200 ${
                    openSections.includes('support') ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {openSections.includes('support') && (
                <ul className="mt-2 space-y-2 pl-4">
                  {support.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href}
                        className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Legal */}
            <div>
              <button
                onClick={() => toggleSection('legal')}
                className="flex items-center justify-between w-full text-left py-2"
              >
                <h3 className="text-lg font-semibold">Legal</h3>
                <ChevronDown 
                  className={`h-5 w-5 transition-transform duration-200 ${
                    openSections.includes('legal') ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {openSections.includes('legal') && (
                <ul className="mt-2 space-y-2 pl-4">
                  {legal.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href}
                        className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 ApplianceCares.in. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
