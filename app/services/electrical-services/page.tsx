import type { Metadata } from 'next'
import Link from 'next/link'
import type { CSSProperties } from 'react'

export const metadata: Metadata = {
  title: 'VL CoolTech | Home & Commercial Electrical Services in Hyderabad West',
  description:
    'VL CoolTech provides electrical troubleshooting, rewiring, MCB upgrades, earthing, lighting installation and appliance electrical setup across Ameenpur, Beeramguda, Patancheru, BHEL Township, Lingampally, Miyapur and Greater Hyderabad. Same-day licensed electricians with ₹299 visiting charge adjusted in final invoice.',
  keywords:
    'electrical services Hyderabad, electrician Ameenpur, MCB upgrade Beeramguda, electrical rewiring Patancheru, VL CoolTech electrical, lighting installation Hyderabad west, earthing service, appliance electrical setup, commercial electrical maintenance',
}

const serviceCategories = [
  {
    title: 'Troubleshooting & Repairs',
    items: [
      'Short circuit and power tripping diagnosis',
      'MCB, RCCB, ELCB and distribution board repair',
      'Loose wiring, sparking and overload resolution',
      'Generator / inverter changeover switch repair',
    ],
  },
  {
    title: 'Installations & Upgrades',
    items: [
      'Ceiling, wall and industrial fan installation',
      'LED panel, chandelier and track lighting setup',
      'Geyser, washing machine and appliance wiring',
      'Smart home, Wi-Fi switch and stabilizer integration',
    ],
  },
  {
    title: 'Safety & Compliance',
    items: [
      'Earthing, lightning arrestor and surge protection',
      'Load balancing and panel capacity calculation',
      'Energy audit and power factor improvement',
      'Commercial maintenance contracts and documentation',
    ],
  },
]

const safetyPractices = [
  'Licensed electricians with PPE, insulated tools and voltage detectors',
  'Lockout/tagout procedure while working on live circuits',
  'Megger testing, continuity checks and thermal scanning',
  'Detailed service reports with photos and load recommendations',
]

export default function ElectricalServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <section
        className="page-hero bg-gradient-to-r from-slate-900 via-neutral-900 to-slate-900 pt-16 pb-10 sm:pt-20 sm:pb-14 lg:pt-22 lg:pb-16"
        style={{ '--hero-bg': "url('/images/hero/home.jpeg')", '--hero-overlay': 'rgba(0, 0, 0, 0.75)' } as CSSProperties}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Electrical Troubleshooting & Installations</h1>
          <p className="text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto">
            Reliable electricians for homes, apartments and commercial spaces. VL CoolTech manages everything from minor
            repairs to complete rewiring with transparent pricing and industry-standard safety practices.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="tel:+919676333505"
              className="bg-amber-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-300 transition-colors duration-200"
            >
              Call +91 96763 33505
            </Link>
            <Link
              href="/book-service"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors duration-200"
            >
              Book Electrician Visit
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Electrical Solutions</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            VL CoolTech covers breakdown support, appliance integration and preventive maintenance for residential and
            commercial customers. Explore our core service categories below.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceCategories.map((category) => (
              <div key={category.title} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                <h3 className="text-primary-600 font-semibold text-lg mb-4">{category.title}</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Safety Procedures We Follow</h2>
            <p className="text-gray-600 mb-6">
              Electrical jobs are completed with strict adherence to safety standards and local regulations. Our checklists
              ensure you stay protected long after the technician leaves.
            </p>
            <ul className="space-y-3 text-sm text-gray-700">
              {safetyPractices.map((practice) => (
                <li key={practice} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500"></span>
                  <span>{practice}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Need an Electrician Today?</h2>
          <p className="text-lg text-primary-100 mb-6">
            Book a VL CoolTech electrician for troubleshooting, upgrades or regular check-ups—available across Hyderabad
            West with transparent pricing and professional workmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/book-service"
              className="bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-primary-100 transition-colors duration-200"
            >
              Schedule Electrical Visit
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
