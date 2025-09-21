'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const services = [
    { name: 'TV Repair', href: '/services/tv-repair' },
    { name: 'AC Repair', href: '/services/ac-repair' },
    { name: 'Washing Machine Repair', href: '/services/washing-machine-repair' },
    { name: 'Refrigerator Repair', href: '/services/refrigerator-repair' },
    { name: 'Microwave Repair', href: '/services/microwave-repair' },
    { name: 'Laptop Repair', href: '/services/laptop-repair' },
  ]

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-200/50' 
        : 'bg-transparent'
    }`}>
      {/* Top bar */}
      <div className="bg-gradient-to-r from-electric-900 via-primary-800 to-cosmic-900 text-white py-3 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2 group hover:text-electric-200 transition-colors duration-200">
                <Phone className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">+91 96661 11327</span>
              </div>
              <div className="flex items-center space-x-2 group hover:text-cosmic-200 transition-colors duration-200">
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">info@appliancecares.in</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 group hover:text-sunset-200 transition-colors duration-200">
              <MapPin className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-medium">Pragathi Nagar, Hyderabad</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18 min-h-[72px]">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center group">
                <div className="h-10 w-10 bg-gradient-to-br from-electric-600 to-cosmic-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-electric-600 group-hover:to-cosmic-600 transition-all duration-300">
                  ApplianceCares
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <div className="ml-10 flex items-center space-x-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-electric-600 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-electric-50 hover:shadow-sm"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="relative group">
                  <button className="text-gray-700 hover:text-electric-600 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center hover:bg-electric-50 hover:shadow-sm">
                    Services
                    <svg className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute left-0 mt-2 w-72 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-6 py-3 text-sm text-gray-700 hover:bg-electric-50 hover:text-electric-600 transition-all duration-200 font-medium hover:translate-x-1"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <Link
                href="tel:+919666111327"
                className="bg-gradient-to-r from-electric-500 to-primary-600 text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 hover:from-electric-400 hover:to-primary-500 flex items-center"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-electric-600 p-3 rounded-lg hover:bg-electric-50 transition-all duration-200"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-lg">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 block px-4 py-3 rounded-lg text-base font-semibold hover:bg-primary-50 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <div className="text-gray-500 text-sm font-semibold px-4 py-2 mb-2">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="text-gray-600 hover:text-primary-600 block px-6 py-3 text-sm font-medium hover:bg-primary-50 rounded-lg transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <div className="pt-6">
                <Link
                  href="tel:+919666111327"
                  className="btn btn-primary w-full text-center px-4 py-3 rounded-xl text-base font-semibold shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
