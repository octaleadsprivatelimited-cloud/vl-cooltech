import type { Metadata } from 'next'
import Link from 'next/link'
import type { CSSProperties } from 'react'

export const metadata: Metadata = {
  title: 'VL CoolTech | AC Installation & Uninstallation Experts in Hyderabad West',
  description:
    'Book VL CoolTech for professional split and window AC installation, relocation and dismantling across Ameenpur, Beeramguda, Patancheru, BHEL Township, Lingampally, Miyapur and Greater Hyderabad. Certified technicians, proper vacuuming, copper piping and ₹299 visiting charge adjusted in final invoice.',
  keywords:
    'AC installation Hyderabad, split AC installation Ameenpur, AC uninstallation Beeramguda, AC relocation Patancheru, VL CoolTech installation, AC mounting service Hyderabad, copper piping AC install, AC vacuuming service, ₹299 visiting charge AC install, window AC installation Hyderabad west',
}

const packages = [
  {
    name: 'Standard Split AC Installation',
    details: ['Indoor & outdoor unit mounting', 'Vacuuming & pressure test', 'Copper piping up to 3 meters', 'Drain pipe routing & insulation', 'Electrical connection check'],
  },
  {
    name: 'Split AC Relocation / Reinstallation',
    details: ['Safe dismantling & transport prep', 'Bracket reinstallation', 'Leak test & gas top-up (if required)', 'Insulation replacement', 'Performance check & demo'],
  },
  {
    name: 'Window AC Installation / Removal',
    details: ['Window frame preparation', 'Vibration pad placement', 'Drain alignment', 'Seal & insulation fitment', 'Thermostat calibration'],
  },
]

const highlights = [
  {
    title: 'Certified Technicians',
    description: 'Teams trained on all major brands including Daikin, LG, Samsung, Mitsubishi, Voltas, Carrier and Blue Star.',
  },
  {
    title: 'Proper Tools & Safety Gear',
    description: 'Vacuum pumps, manifold gauges, leak detectors and insulated ladders used on every installation job.',
  },
  {
    title: 'Transparent Pricing',
    description: 'Visiting charge ₹299 adjusted in the final invoice with clear breakup for labour, piping, brackets and accessories.',
  },
]

const process = [
  {
    step: '1',
    title: 'Survey & Planning',
    text: 'Technician reviews indoor/outdoor placement, load bearing, drainage path and electrical supply before starting work.',
  },
  {
    step: '2',
    title: 'Mount & Connect',
    text: 'Indoor wall plate, outdoor brackets and vibration pads fitted, followed by copper piping, insulation and drain routing.',
  },
  {
    step: '3',
    title: 'Vacuuming & Testing',
    text: 'System is vacuumed, pressure checked and leak tested. Gas levels verified, thermostat calibrated and full demo provided.',
  },
]

export default function ACInstallationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <section
        className="page-hero bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 pt-16 pb-10 sm:pt-20 sm:pb-14 lg:pt-22 lg:pb-16"
        style={{ '--hero-bg': "url('/images/hero/ac repair.jpg')", '--hero-overlay': 'rgba(0, 0, 0, 0.7)' } as CSSProperties}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            VL CoolTech AC Installation & Relocation Specialists
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
            Professional split and window AC installation, dismantling and relocation across Hyderabad West. Certified
            technicians, vacuum pumps and genuine accessories ensure your cooling system performs at its best from day one.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="tel:+919676333505"
              className="bg-yellow-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200"
            >
              Call +91 96763 33505
            </Link>
            <Link
              href="/book-service"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors duration-200"
            >
              Book Installation Slot
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Split & Window AC Installation Services</h2>
            <p className="text-gray-600 mb-4">
              VL CoolTech handles complete installation and dismantling for split and window air conditioners in homes,
              apartments, offices and commercial spaces. Our teams follow manufacturer guidelines, ensure airtight
              connections and leave your space tidy after the job is done.
            </p>
            <p className="text-gray-600">
              We also provide relocation support when you move homes or offices, including safe dismantling, transport
              preparation, refitting, gas balancing and insulation replacement. Every visit begins with a quick site
              survey to avoid surprises and guarantee a reliable outcome.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              {highlights.map((item) => (
                <div key={item.title} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                  <h3 className="text-primary-600 font-semibold text-sm uppercase tracking-wide mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Popular Installation Packages</h3>
            <div className="space-y-5">
              {packages.map((pkg) => (
                <div key={pkg.name} className="border border-primary-100 rounded-xl p-4">
                  <h4 className="text-primary-700 font-semibold mb-3">{pkg.name}</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {pkg.details.map((line) => (
                      <li key={line} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500"></span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">How Your Installation Visit Works</h2>
          <div className="space-y-6">
            {process.map((item) => (
              <div key={item.step} className="flex flex-col sm:flex-row gap-4 bg-gray-50 rounded-xl p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white text-lg font-semibold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Ready to Install or Relocate Your AC?</h2>
          <p className="text-lg text-primary-100 mb-6">
            Share your requirement and we will assign the nearest VL CoolTech installation team with the right tools and
            accessories.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/book-service"
              className="bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-primary-100 transition-colors duration-200"
            >
              Book Installation
            </Link>
            <Link
              href="tel:+919676333505"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-colors duration-200"
            >
              Call +91 96763 33505
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
