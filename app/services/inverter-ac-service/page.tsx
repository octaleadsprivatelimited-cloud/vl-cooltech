import type { Metadata } from 'next'
import Link from 'next/link'
import type { CSSProperties } from 'react'

export const metadata: Metadata = {
  title: 'VL CoolTech | Inverter AC Repair & PCB Specialists in Hyderabad West',
  description:
    'VL CoolTech delivers advanced inverter AC diagnostics, PCB repair, sensor calibration, gas balancing and maintenance across Ameenpur, Beeramguda, Patancheru, BHEL Township, Lingampally, Miyapur and Greater Hyderabad. Same-day technician visits, genuine parts and ₹299 visiting charge adjusted in the final bill.',
  keywords:
    'inverter AC repair Hyderabad, inverter PCB repair, inverter AC error code fix, VL CoolTech inverter AC, inverter AC diagnostics, inverter AC service Ameenpur, inverter AC gas top-up, VRF VRV service Hyderabad west, inverter AC maintenance Hyderabad',
}

const benefits = [
  {
    title: 'Specialised Diagnostic Tools',
    text: 'Oscilloscopes, multimeters, clamp meters and refrigerant scales ensure accurate PCB and component analysis.',
  },
  {
    title: 'Brand-Trained Teams',
    text: 'Expertise across Daikin, Mitsubishi, LG, Samsung, Voltas, Carrier, Blue Star, Toshiba and more inverter models.',
  },
  {
    title: 'Smart Error Resolution',
    text: 'Quick resets, EEPROM reprogramming, sensor calibration and firmware updates handled onsite whenever possible.',
  },
]

const issues = [
  'Inverter AC showing error codes (E0, EA, EC, P6, CH, U4, F0 etc.)',
  'PCB, IPM or power board malfunction',
  'Outdoor unit not starting / fan not running',
  'Indoor unit blinking lights or no response',
  'Compressor tripping or over-heating',
  'Cooling loss, poor modulation or high power usage',
  'Sensor faults (room, coil, discharge, ambient)',
  'Abnormal vibration, noise or refrigerant leakage',
]

const maintenance = [
  'Thorough PCB cleaning and conformal coating',
  'Vacuuming, gas recharging and pressure balancing',
  'Filter, blower and coil cleaning for optimum airflow',
  'Thermal paste replacement and heat sink service',
  'Tightening terminals, contactors and wiring harness',
  'Comprehensive load testing and performance audit',
]

export default function InverterACServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <section
        className="page-hero bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 pt-16 pb-10 sm:pt-20 sm:pb-14 lg:pt-22 lg:pb-16"
        style={{ '--hero-bg': "url('/images/hero/ac repair.jpg')", '--hero-overlay': 'rgba(0, 0, 0, 0.75)' } as CSSProperties}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Inverter AC Repair & PCB Specialists</h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
            VL CoolTech resolves inverter AC issues with advanced diagnostics, genuine spare parts and brand-trained
            technicians. We cover PCB faults, sensor calibration, gas balancing and routine maintenance across Hyderabad
            West.
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
              Book Inverter AC Service
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Inverter AC Diagnostics</h2>
            <p className="text-gray-600 mb-4">
              Inverter and VRF/VRV air conditioners demand a different skill set than conventional split ACs. VL CoolTech
              technicians are trained to inspect PCB circuits, IPM modules, gate drivers, sensors and refrigerant systems
              with precision. We resolve error codes quickly and provide preventive tips to avoid recurrence.
            </p>
            <p className="text-gray-600">
              Whether it is a power surge, moisture damage, fan lock or compressor overload, our experts restore optimal
              modulation so you enjoy quiet cooling with lower power consumption.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              {benefits.map((item) => (
                <div key={item.title} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                  <h3 className="text-primary-600 font-semibold text-sm uppercase tracking-wide mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Inverter AC Problems We Fix</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              {issues.map((issue) => (
                <li key={issue} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500"></span>
                  <span>{issue}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Preventive Maintenance Plans</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
            Regular maintenance keeps inverter AC efficiency high and prevents expensive PCB or compressor failures. Our
            AMC packages include the following checks and services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {maintenance.map((item) => (
              <div key={item} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <span className="text-primary-600 font-semibold block mb-2">•</span>
                <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Need an Inverter AC Specialist Today?</h2>
          <p className="text-lg text-primary-100 mb-6">
            Share your error code or describe the fault—our support desk will guide you to the right VL CoolTech technician
            and schedule the earliest visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/book-service"
              className="bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-primary-100 transition-colors duration-200"
            >
              Book Diagnostic Visit
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
