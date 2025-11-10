import type { Metadata } from 'next'
import { Phone, Mail, MessageCircle, Clock, MapPin, HelpCircle, Headphones, FileText } from 'lucide-react'
import Link from 'next/link'
import type { CSSProperties } from 'react'

export const metadata: Metadata = {
  title: 'VL CoolTech | Customer Support & Service Assistance',
  description:
    'Reach VL CoolTech’s customer success desk for booking help, technician coordination, AMC queries and emergency appliance service requests across Ameenpur, Beeramguda, Patancheru, BHEL Township, Miyapur and Greater Hyderabad.',
  keywords:
    'VL CoolTech customer support, Hyderabad appliance service help, VL CoolTech phone number, VL CoolTech contact, VL CoolTech service assistance',
}

const CustomerSupport = () => {
  const supportMethods = [
    {
      icon: Phone,
      title: 'Primary Phone Support',
      description: 'Speak directly with our VL CoolTech coordinators',
      contact: '+91 96763 33505',
      availability: '7 Days · 8:00 AM – 8:00 PM',
      action: 'Call Now'
    },
    {
      icon: MessageCircle,
      title: 'Alternate Phone / WhatsApp',
      description: 'Quick call-back or WhatsApp assistance',
      contact: '+91 96765 82723',
      availability: '24/7 for urgent cases',
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Share detailed service requirements or feedback',
      contact: 'vlcooltech@gmail.com',
      availability: 'Response within 1 business hour',
      action: 'Send Email'
    }
  ]

  const faqs = [
    {
      question: 'How do I book a service?',
      answer:
        'Call VL CoolTech at +91 96763 33505 / +91 96765 82723 or submit the service form on our website. We prioritise same-day visits for cooling and essential appliances.'
    },
    {
      question: 'What areas do you cover?',
      answer:
        'Our certified technicians serve Ameenpur, Beeramguda, Patancheru, BHEL Township, Lingampally, Miyapur, Kondapur, Gachibowli, Kukatpally, Bachupally and Greater Hyderabad. Call us to confirm coverage for your locality.'
    },
    {
      question: 'How much does repair cost?',
      answer:
        'Visit inspections are charged at ₹299 and adjusted in the final bill. Pricing depends on the appliance, fault and spares required—our team shares transparent estimates before starting work.'
    },
    {
      question: 'Do you provide warranty on repairs?',
      answer:
        'Yes. VL CoolTech offers up to 90 days workmanship guarantee on repairs. If the same issue returns within the warranty window, we revisit at no extra cost.'
    },
    {
      question: 'What if my appliance cannot be repaired?',
      answer:
        'If repair is not feasible, we explain the diagnosis, recommend replacement options and close the job without additional labour charges beyond the visiting fee.'
    },
    {
      question: 'How can I track my service request?',
      answer:
        'Use your VL CoolTech tracking ID on the website, chat with us on WhatsApp or call our desk. We share SMS/WhatsApp updates when the technician is dispatched and after completion.'
    }
  ]

  const supportHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Emergency Support', hours: '24/7 Available' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section
        className="relative page-hero bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 pt-32 pb-20"
        style={{ '--hero-bg': "url('/images/hero/mobile.webp')" } as CSSProperties}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Customer Support
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              We're here to help you with all your appliance repair needs. 
              Get in touch with our friendly support team for assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600">
              Choose your preferred way to contact us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportMethods.map((method, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <method.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {method.description}
                </p>
                <p className="font-semibold text-gray-900 mb-2">
                  {method.contact}
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  {method.availability}
                </p>
                {method.action === 'Call Now' ? (
                  <Link
                    href={`tel:${method.contact.replace(/\s/g, '')}`}
                    className="btn btn-primary px-6 py-3 rounded-lg font-semibold"
                  >
                    {method.action}
                  </Link>
                ) : method.action === 'Chat Now' ? (
                  <Link
                    href={`https://wa.me/${method.contact.replace(/\s/g, '').replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary px-6 py-3 rounded-lg font-semibold"
                  >
                    {method.action}
                  </Link>
                ) : (
                  <Link
                    href={`mailto:${method.contact}`}
                    className="btn btn-primary px-6 py-3 rounded-lg font-semibold"
                  >
                    {method.action}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start">
                  <HelpCircle className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Support Hours
            </h2>
            <p className="text-lg text-gray-600">
              Our customer support team is available to help you
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {supportHours.map((schedule, index) => (
                <div key={index} className="flex items-center justify-between bg-white rounded-lg p-4">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="font-semibold text-gray-900">{schedule.day}</span>
                  </div>
                  <span className="text-gray-600">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Office
            </h2>
            <p className="text-lg text-gray-600">
              Visit our office for in-person support
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  VL CoolTech Service Desk
                </h3>
                <p className="text-gray-600 mb-4">
                  114 Sri Rajarajeshwari Colony, Ameenpur, Beeramguda
                  Sangareddy District, Telangana - 502032
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">+91 96763 33505</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">vlcooltech@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Quick Actions
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Need immediate assistance? Try these quick options
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-service"
              className="btn bg-white text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              Book Service
            </Link>
            <Link
              href="/track-service"
              className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-semibold text-lg text-center hover:scale-105 transform transition-all duration-300"
            >
              Track Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CustomerSupport
