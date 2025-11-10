import type { Metadata } from 'next'
import Link from 'next/link'
import type { CSSProperties } from 'react'

export const metadata: Metadata = {
  title: 'VL CoolTech | RO & UV Water Purifier Service in Hyderabad West',
  description:
    'VL CoolTech handles RO, UV and alkaline water purifier service, filter replacement, leak repair and AMC plans across Ameenpur, Beeramguda, Patancheru, BHEL Township, Lingampally, Miyapur and Greater Hyderabad. Same-day doorstep visits with ₹299 visiting charge adjusted in the final bill.',
  keywords:
    'water purifier service Hyderabad, RO filter change Ameenpur, UV purifier repair Beeramguda, RO AMC Patancheru, VL CoolTech water purifier, RO leak repair Hyderabad west, alkaline purifier maintenance, drinking water purifier service',
}

const serviceList = [
  'RO, UV, UF, alkaline and copper water purifier servicing',
  'Sediment, pre-carbon, post-carbon and mineral cartridge replacement',
  'RO membrane, pump, SMPS and solenoid valve repair',
  'Pressure switch, float valve and tap replacement',
  'Complete leak arrest, re-piping and tank sanitisation',
  'TDS adjustment and drinking water quality testing',
]

const amcPlans = [
  {
    title: 'Quarterly AMC',
    includes: ['3 routine visits per year', 'Cartridge cleaning & sanitisation', 'TDS check & taste calibration'],
  },
  {
    title: 'Bi-Annual AMC',
    includes: ['2 major services per year', 'Sediment + carbon filter replacement', 'Leak inspection & performance audit'],
  },
  {
    title: 'Comprehensive AMC',
    includes: ['Unlimited breakdown calls', 'Membrane replacement (once a year)', 'Complete RO pump & SMPS service'],
  },
]

export default function WaterPurifierServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <section
        className="page-hero bg-gradient-to-r from-cyan-900 via-blue-900 to-slate-900 pt-16 pb-10 sm:pt-20 sm:pb-14 lg:pt-22 lg:pb-16"
        style={{ '--hero-bg': "url('/images/hero/home.jpeg')", '--hero-overlay': 'rgba(0, 0, 0, 0.75)' } as CSSProperties}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">RO & UV Water Purifier Service</h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
            Keep your drinking water pure with VL CoolTech’s professional water purifier maintenance, filter replacement and
            emergency repair services across Hyderabad West.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="tel:+919676333505"
              className="bg-emerald-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-300 transition-colors duration-200"
            >
              Call +91 96763 33505
            </Link>
            <Link
              href="/book-service"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors duration-200"
            >
              Book RO Service
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Water Purifier Care</h2>
            <p className="text-gray-600 mb-4">
              From routine filter changes to complex RO pump or circuit board repairs, VL CoolTech ensures your purifier
              delivers pure, great-tasting water all year. We service all popular brands including Kent, Aquaguard,
              Pureit, Livpure, Blue Star, AO Smith, Havells, V-Guard and more.
            </p>
            <p className="text-gray-600">
              If you notice a drop in water flow, unusual taste, leakage or error indicators, schedule a visit and our
              technicians will restore the system quickly. All consumables are genuine brand-approved cartridges with
              warranty support.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Services We Offer</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              {serviceList.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Choose Your AMC Plan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {amcPlans.map((plan) => (
              <div key={plan.title} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="text-primary-600 font-semibold text-lg mb-3">{plan.title}</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {plan.includes.map((line) => (
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
      </section>

      <section className="py-16 bg-gradient-to-r from-primary-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Need Quick RO Service or Filter Replacement?</h2>
          <p className="text-lg text-primary-100 mb-6">
            Book a VL CoolTech technician today—visits available the same day across Hyderabad West with transparent pricing
            and genuine spares.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/book-service"
              className="bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-primary-100 transition-colors duration-200"
            >
              Schedule RO Service
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
