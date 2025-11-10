import { Users, Award, Clock, Shield, Phone, Mail, MapPin } from 'lucide-react'
import type { CSSProperties } from 'react'

export const metadata = {
  title: 'About VL CoolTech | AC, Refrigerator & Appliance Experts in Hyderabad West',
  description:
    'Discover VL CoolTech’s story – a trusted AC and home appliance service provider from Ameenpur, Beeramguda and serving Greater Hyderabad. 12+ years of experience in AC repair, installation, foam cleaning, refrigerator, washing machine, LED TV, water purifier and electrical services.',
  keywords:
    'About VL CoolTech, AC service Ameenpur, AC experts Hyderabad west, appliance repair Beeramguda, visiting charge 299, inverter AC specialists, refrigerator washing machine LED TV service, electrical works Hyderabad',
}

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="page-hero bg-black pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20"
        style={{ '--hero-bg': "url('/images/hero/home.jpeg')", '--hero-overlay': 'rgba(0, 0, 0, 0.75)' } as CSSProperties}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About VL CoolTech
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Hyderabad West’s dedicated AC, refrigerator, washing machine, LED TV, water purifier and electrical service partner operating from Ameenpur since 2012.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                VL CoolTech began in 2012 as a two-technician crew handling emergency AC breakdowns for households in Ameenpur and Beeramguda. Word of mouth, transparent pricing and reliable workmanship helped us expand across Patancheru, BHEL Township, Lingampally, Miyapur and the rest of Greater Hyderabad.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We now operate specialised teams for AC repair and installation, inverter AC diagnostics, foam/jet cleaning, refrigerator and washing machine service, LED/QLED TV repair, water purifier maintenance and electrical works. Our workshop at 114 Sri Rajarajeshwari Colony, Ameenpur enables us to stock genuine spares and dispatch technicians quickly.
              </p>
              <p className="text-lg text-gray-600">
                Today, more than 2,500 families, gated communities and businesses trust VL CoolTech with their cooling and appliance needs. We continue to invest in training, safety and customer support so every visit ends with a satisfied customer.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-blue-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl font-bold">12+</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Years of Experience</h3>
                <p className="text-gray-600">
                  A decade-plus of hands-on service excellence across Hyderabad west corridor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and make us the trusted choice for appliance repair.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality</h3>
              <p className="text-gray-600">
                We work with genuine spares, calibrated tools and documented processes for every AC and appliance job.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Reliability</h3>
              <p className="text-gray-600">
                Same-day or next-day slots across Ameenpur, Beeramguda, Patancheru, BHEL Township, Lingampally, Miyapur, Kondapur and beyond.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer First</h3>
              <p className="text-gray-600">
                Clear communication, upfront ₹299 visiting charge (adjusted in final bill) and post-service follow-ups keep our customers informed and confident.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                Our technicians undergo periodic inverter AC, refrigeration and electrical training to stay ahead of new technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the skilled technicians who make our exceptional service possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">SK</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Srinivas – AC Lead</h3>
              <p className="text-gray-600 mb-4">12+ years handling split, inverter and VRF systems</p>
              <p className="text-sm text-gray-500">
                Heads our AC division, manages complex inverter PCB repairs and mentors junior technicians on safety and best practices.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">RK</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lavanya – Appliance Specialist</h3>
              <p className="text-gray-600 mb-4">10+ years in refrigerator & washing machine diagnostics</p>
              <p className="text-sm text-gray-500">
                Ensures every refrigerator and washing machine job uses genuine spares and preventive maintenance checklists.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">MK</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mahesh – Electrical & Water Purifier Expert</h3>
              <p className="text-gray-600 mb-4">9+ years managing electrical, RO/UV systems</p>
              <p className="text-sm text-gray-500">
                Handles electrical upgrades, MCB panels, RO purifier AMC schedules and complex leakage troubleshooting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-xl text-blue-100">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">2500+</div>
              <div className="text-xl text-blue-100">Homes & Businesses Served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-xl text-blue-100">Service Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">4.9/5</div>
              <div className="text-xl text-blue-100">Average Customer Rating</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">₹299</div>
              <div className="text-xl text-blue-100">Transparent Visiting Charge</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-600">
                Call or WhatsApp to schedule an AC, appliance or electrical visit today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call / WhatsApp</h3>
              <p className="text-gray-600">+91 96763 33505 / +91 96765 82723</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">vlcooltech@gmail.com</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">114 Sri Rajarajeshwari Colony, Ameenpur, Beeramguda, Sangareddy 502032</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
