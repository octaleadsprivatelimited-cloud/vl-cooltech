import ContactForm from '@/components/ContactForm'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import type { CSSProperties } from 'react'

export const metadata = {
  title: 'Contact VL CoolTech | AC, Refrigerator & Appliance Service in Hyderabad West',
  description:
    'Reach VL CoolTech for expert AC repair, installation, washing machine, refrigerator, LED TV, water purifier and electrical services. Call +91 96763 33505 / +91 96765 82723 or email vlcooltech@gmail.com. Same-day doorstep visits across Ameenpur, Beeramguda, Patancheru, BHEL Township, Miyapur and Greater Hyderabad with visiting charge ₹299.',
  keywords:
    'VL CoolTech contact, AC repair Ameenpur phone, AC installation Beeramguda booking, refrigerator service Patancheru contact, washing machine repair Miyapur phone, LED TV repair Lingampally contact, water purifier service Hyderabad west, electrical work Hyderabad west, visiting charge 299, same day AC service Ameenpur',
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="page-hero bg-black pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20"
        style={{ '--hero-bg': "url('/images/hero/ac repair.jpg')", '--hero-overlay': 'rgba(0, 0, 0, 0.75)' } as CSSProperties}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Contact VL CoolTech – AC & Appliance Specialists
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Talk to our service coordinators for air conditioner repair, installation, refrigerator, washing machine, LED/QLED TV, water purifier and electrical work. We serve Ameenpur, Beeramguda, Patancheru, BHEL Township, Lingampally, Miyapur and Greater Hyderabad with same-day slots and visiting charge ₹299.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone / WhatsApp</h3>
              <p className="text-gray-600 mb-2">+91 96763 33505 / +91 96765 82723</p>
              <p className="text-sm text-gray-500">8 AM – 8 PM (Emergency visits on request)</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-2">vlcooltech@gmail.com</p>
              <p className="text-sm text-gray-500">Share appliance details for fastest quote</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Workshop & Coverage</h3>
              <p className="text-gray-600 mb-2">114 Sri Rajarajeshwari Colony, Ameenpur, Beeramguda, Sangareddy 502032</p>
              <p className="text-sm text-gray-500">Ameenpur • Beeramguda • Patancheru • BHEL Township • Lingampally • Miyapur • Kondapur • Kukatpally • Gachibowli • Greater Hyderabad</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-600 mb-2">8:00 AM - 8:00 PM</p>
              <p className="text-sm text-gray-500">Mon - Sun (Public holidays on request)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Book Your VL CoolTech Visit
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Submit the form and our dispatcher will confirm the visiting slot, technician details and transparent ₹299 visit charge (adjusted in the final invoice when service is approved).
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Service Coverage – Hyderabad West & Beyond
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              VL CoolTech’s technicians travel daily across Ameenpur, Beeramguda, Patancheru, BHEL Township, Lingampally, Gachibowli, Kondapur, Miyapur, Kukatpally, Bachupally, Manikonda and other Greater Hyderabad neighbourhoods for AC, refrigerator, washing machine, LED TV, water purifier and electrical services.
            </p>
          </div>
          
          <div className="bg-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
            <div className="h-64 sm:h-72 lg:h-80">
              <iframe
                title="VL CoolTech Location"
                src="https://www.google.com/maps?q=114+Sri+Rajarajeshwari+Colony,+Ameenpur,+Beeramguda,+Sangareddy+502032&z=15&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-6 bg-white">
              <div className="flex items-center justify-center gap-3 text-gray-700">
                <MapPin className="h-5 w-5 text-primary-600" />
                <span>114 Sri Rajarajeshwari Colony, Ameenpur, Beeramguda, Sangareddy 502032</span>
              </div>
              <div className="text-center mt-3">
                <a
                  href="https://www.google.com/maps/place/114+Sri+Rajarajeshwari+Colony,+Ameenpur,+Beeramguda,+Sangareddy+502032"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center gap-2"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Common questions about our repair services in Hyderabad
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                How quickly can you repair my AC or appliance?
              </h3>
              <p className="text-gray-600">
                For Ameenpur, Beeramguda, Patancheru, BHEL Township, Lingampally and Miyapur we usually offer same-day slots. For the rest of Greater Hyderabad we schedule the next available window. Complex jobs needing spares may take 1–2 days.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Do you provide a warranty on repairs?
              </h3>
              <p className="text-gray-600">
                Yes. VL CoolTech offers service warranty on every repair – the duration depends on the part and service type. We use genuine spares with manufacturer support whenever available.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                What if the issue returns after service?
              </h3>
              <p className="text-gray-600">
                Simply call us back. Our technicians will revisit under warranty, fix the concern for free or advise the next steps. Customer satisfaction is guaranteed.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                What is your visiting charge?
              </h3>
              <p className="text-gray-600">
                Our visiting/inspection charge is ₹299 per job card. This amount is adjusted in the final invoice when you confirm the repair or installation with VL CoolTech.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Do you provide doorstep service across Hyderabad?
              </h3>
              <p className="text-gray-600">
                Yes. We cover Hyderabad West (Ameenpur, Beeramguda, Patancheru, BHEL Township, Lingampally, Miyapur, Kukatpally, Bachupally) and extend to Gachibowli, Kondapur, Manikonda, Madhapur and other Greater Hyderabad zones.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Which brands do you handle?
              </h3>
              <p className="text-gray-600">
                Our technicians service all leading brands: Daikin, Mitsubishi, LG, Samsung, Voltas, Blue Star, Carrier, Whirlpool, Godrej, Bosch, IFB, Haier, Sony, TCL and more for ACs, refrigerators, washing machines, LED/QLED TVs, water purifiers and electrical setups.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
