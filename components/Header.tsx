'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpenMobile, setIsServicesOpenMobile] = useState(false)
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
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const services = [
    { name: 'AC Repair & Service', href: '/services/ac-repair' },
    { name: 'AC Installation & Uninstall', href: '/services/ac-installation' },
    { name: 'Inverter AC Specialists', href: '/services/inverter-ac-service' },
    { name: 'Refrigerator Service', href: '/services/refrigerator-repair' },
    { name: 'Washing Machine Repair', href: '/services/washing-machine-repair' },
    { name: 'LED & QLED TV Repair', href: '/services/tv-repair' },
    { name: 'Microwave Repair Service', href: '/services/microwave-repair' },
    { name: 'Water Purifier Service', href: '/services/water-purifier-service' },
    { name: 'Electrical Works', href: '/services/electrical-services' },
  ]

  return (
    <>
          {/* Main navigation */}
          <header className={`fixed w-full z-50 transition-all duration-500 top-0 ${
            isScrolled
              ? 'bg-black/95 backdrop-blur-xl shadow-xl border-b border-gray-800/50'
              : 'bg-black/98 backdrop-blur-md shadow-md border-b border-gray-800'
          }`}>
        <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18 min-h-[64px] sm:min-h-[72px]">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center group gap-3">
                <div className="relative flex items-center justify-center h-14 w-14 sm:h-[72px] sm:w-[72px] rounded-xl bg-gradient-to-br from-blue-600 via-cyan-500 to-sky-400 shadow-lg group-hover:shadow-xl transform transition-transform duration-300 ease-out group-hover:scale-110">
                  <span className="text-white font-bold text-xl sm:text-2xl tracking-wide">VL</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-semibold text-lg sm:text-xl leading-tight">VL CoolTech</span>
                  <span className="text-primary-200 text-xs sm:text-sm font-medium leading-tight">
                    AC · Appliance · Electrical Services
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <div className="ml-10 flex items-center space-x-2">
                {navigation.slice(0, 2).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-gray-800 hover:shadow-sm"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="relative group">
                  <button className="text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center hover:bg-gray-800 hover:shadow-sm">
                    Services
                    <svg className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute left-0 mt-2 w-72 bg-black/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-800/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-6 py-3 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200 font-medium hover:translate-x-1"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                {navigation.slice(2).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-gray-800 hover:shadow-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <Link
                href="tel:+919676333505"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg text-xs font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 hover:from-blue-500 hover:to-blue-600 flex items-center whitespace-nowrap"
              >
                <Phone className="h-3 w-3 mr-1" />
                Call Now
              </Link>
            </div>

            {/* Mobile menu button with smooth animation */}
            <div className="md:hidden">
              <button
                onClick={() => {
                  setIsMenuOpen((prev) => {
                    const next = !prev
                    if (!next) {
                      setIsServicesOpenMobile(false)
                    }
                    return next
                  })
                }}
                className="text-gray-300 hover:text-white p-3 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-110"
              >
                <div className={`transition-all duration-300 transform ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation with Smooth Motion */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-black/95 backdrop-blur-xl border-t border-gray-800 shadow-lg">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navigation.slice(0, 2).map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-gray-800 hover:text-white text-gray-300 ${
                    isMenuOpen 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-4 opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 50}ms` 
                  }}
                  onClick={() => {
                    setIsMenuOpen(false)
                    setIsServicesOpenMobile(false)
                  }}
                >
                  {item.name}
                </Link>
              ))}

              <div
                className={`pt-4 border-t border-gray-800 transition-all duration-500 ${
                  isMenuOpen
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <button
                  className="flex w-full items-center justify-between px-4 py-3 rounded-lg text-base font-semibold text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-300"
                  onClick={() => setIsServicesOpenMobile((prev) => !prev)}
                >
                  <span>Services</span>
                  <svg
                    className={`h-4 w-4 transform transition-transform duration-300 ${
                      isServicesOpenMobile ? 'rotate-180' : 'rotate-0'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isServicesOpenMobile ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {services.map((service, index) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-6 py-3 text-sm font-medium rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors duration-300"
                      style={{ transitionDelay: `${index * 40}ms` }}
                      onClick={() => {
                        setIsMenuOpen(false)
                        setIsServicesOpenMobile(false)
                      }}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {navigation.slice(2).map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-gray-800 hover:text-white text-gray-300 ${
                    isMenuOpen 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-4 opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: `${400 + index * 50}ms` 
                  }}
                  onClick={() => {
                    setIsMenuOpen(false)
                    setIsServicesOpenMobile(false)
                  }}
                >
                  {item.name}
                </Link>
              ))}

              <div
                className={`pt-6 border-t border-gray-800 transition-all duration-500 ${
                  isMenuOpen
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: '550ms' }}
              >
                <div className="px-4 space-y-3 text-gray-400 text-sm font-medium">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-blue-400" />
                    <div className="flex flex-col">
                      <span className="text-gray-300">Call Us</span>
                      <a href="tel:+919676333505" className="text-white font-semibold">+91 96763 33505</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-blue-400" />
                    <div className="flex flex-col">
                      <span className="text-gray-300">Email</span>
                      <a href="mailto:vlcooltech@gmail.com" className="text-white font-semibold">vlcooltech@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                    <div className="flex flex-col">
                      <span className="text-gray-300">Address</span>
                      <p className="text-white font-semibold leading-snug">114 Sri Rajarajeshwari Colony, Ameenpur, Beeramguda, Sangareddy 502032</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`pt-6 transition-all duration-500 ${
                isMenuOpen 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-6 opacity-0'
              }`} style={{ transitionDelay: '600ms' }}>
                <Link
                  href="tel:+919676333505"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white w-full text-center px-4 py-3 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 flex items-center justify-center"
                  onClick={() => {
                    setIsMenuOpen(false)
                    setIsServicesOpenMobile(false)
                  }}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        </nav>
      </header>
    </>
  )
}

export default Header
