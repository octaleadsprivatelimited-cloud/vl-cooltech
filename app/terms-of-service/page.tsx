import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { FileText, Shield, AlertCircle, CheckCircle, Phone, Mail, Calendar, User } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'VL CoolTech Terms of Service | AC & Appliance Service Policies',
  description:
    'Review VL CoolTech’s terms of service covering AC repair, installation, foam cleaning, refrigerator, washing machine, LED TV, water purifier and electrical works across Hyderabad West. Learn about visiting charge ₹299, warranties, cancellations and customer responsibilities.',
  keywords:
    'VL CoolTech terms, AC service policy, appliance repair terms Hyderabad, visiting charge 299, warranty policy, cancellation terms, inverter AC service terms',
}

const TermsOfService = () => {
  const serviceTerms = [
    {
      title: 'Service Provision',
      description:
        'VL CoolTech agrees to provide professional AC repair, installation, foam cleaning, refrigerator, washing machine, LED TV, water purifier and electrical services as requested by the customer within our coverage zones.'
    },
    {
      title: 'Service Scheduling',
      description:
        'Services are scheduled at mutually convenient times across Ameenpur, Beeramguda, Patancheru, BHEL Township, Lingampally, Miyapur, Kondapur, Gachibowli and the wider Hyderabad region. Our cancellation policy applies to all confirmed slots.'
    },
    {
      title: 'Payment Terms',
      description:
        'A transparent visiting charge of ₹299 is payable per job card and will be adjusted in the final invoice when the service is approved. Balance payment is due upon completion via cash, UPI or digital transfer.'
    },
    {
      title: 'Warranty Coverage',
      description:
        'All repairs include a service warranty communicated on the job card. Warranty coverage varies by appliance type, part availability and manufacturer terms.'
    },
    {
      title: 'Data Collection & Analytics',
      description: 'We use Google Tag Manager and Analytics to improve our services. You can opt out of tracking at any time.'
    },
    {
      title: 'AI-Generated Content Disclosure',
      description: 'Some content on our website may be generated using AI tools. We maintain accuracy and transparency in all communications.'
    }
  ]

  const customerObligations = [
    'Provide accurate information about the appliance and issue',
    'Ensure safe access to the appliance for repair',
    'Pay service charges as agreed upon completion',
    'Allow reasonable time for diagnosis and repair',
    'Follow post-repair care instructions',
    'Notify us immediately of any issues with completed repairs'
  ]

  const serviceLimitations = [
    'Services subject to availability of qualified technicians',
    'Repair success depends on appliance condition and issue severity',
    'Some repairs may require parts that are not immediately available',
    'Services limited to areas within our coverage zone',
    'Emergency services may incur additional charges',
    'Services may be rescheduled due to weather or safety conditions'
  ]

  const liabilityTerms = [
    {
      title: 'Service Quality',
      description: 'We strive to provide quality service but cannot guarantee repair success in all cases.'
    },
    {
      title: 'Damage Limitation',
      description: 'Our liability is limited to the cost of the service provided, except in cases of proven negligence.'
    },
    {
      title: 'Third Party Damages',
      description: 'We are not liable for damages to other appliances or property not related to our service.'
    },
    {
      title: 'Force Majeure',
      description: 'We are not liable for service delays due to circumstances beyond our control.'
    }
  ]

  const cancellationPolicy = [
    'Free cancellation up to 24 hours before scheduled service',
    'Cancellation within 24 hours may incur a cancellation fee',
    'No-show charges apply for missed appointments',
    'Emergency cancellations will be handled on a case-by-case basis',
    'Rescheduling is allowed once without additional charges'
  ]

  const disputeResolution = [
    'We encourage direct communication to resolve any issues',
    'Customer complaints will be investigated promptly',
    'Mediation services available for unresolved disputes',
    'Legal jurisdiction lies with the courts of Hyderabad, Telangana',
    'Alternative dispute resolution methods may be used'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section
        className="relative page-hero bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 pt-32 pb-20"
        style={{ '--hero-bg': "url('/images/hero/ac repair.jpg')" } as CSSProperties}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Please review these terms before booking AC, refrigerator, washing machine, LED TV, water purifier or electrical services with VL CoolTech. These conditions govern your engagement with VL CoolTech appliance services.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 rounded-xl p-8 mb-12">
            <div className="flex items-start space-x-4">
              <FileText className="h-8 w-8 text-primary-600 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Agreement to Terms
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  By booking or using any VL CoolTech service, you agree to be bound by these Terms of Service. These terms constitute a legal agreement between you and VL CoolTech. If you do not agree, please refrain from using our services. We may revise these terms periodically to reflect operational updates or regulatory requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Terms */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Service Terms
            </h2>
            <p className="text-lg text-gray-600">
              Terms governing our appliance repair services
            </p>
          </div>

          <div className="space-y-6">
            {serviceTerms.map((term, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {term.title}
                </h3>
                <p className="text-gray-600">
                  {term.description}
                </p>
              </div>
            ))}
          </div>
        </div>
            </section>

      {/* Customer Obligations */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Customer Obligations
            </h2>
            <p className="text-lg text-gray-600">
              Your responsibilities when using our services
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <ul className="space-y-4">
              {customerObligations.map((obligation, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{obligation}</span>
                </li>
              ))}
              </ul>
          </div>
        </div>
            </section>

      {/* Service Limitations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Service Limitations
            </h2>
            <p className="text-lg text-gray-600">
              Important limitations to our services
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <ul className="space-y-4">
              {serviceLimitations.map((limitation, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{limitation}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
            </section>

      {/* Liability Terms */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Liability & Limitations
            </h2>
            <p className="text-lg text-gray-600">
              Our liability limitations and disclaimers
            </p>
          </div>

          <div className="space-y-6">
            {liabilityTerms.map((term, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {term.title}
                </h3>
                <p className="text-gray-600">
                  {term.description}
                </p>
              </div>
            ))}
          </div>
        </div>
            </section>

      {/* Cancellation Policy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Cancellation Policy
            </h2>
            <p className="text-lg text-gray-600">
              Terms for cancelling or rescheduling services
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <ul className="space-y-4">
              {cancellationPolicy.map((policy, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{policy}</span>
                </li>
              ))}
              </ul>
          </div>
        </div>
            </section>

      {/* Dispute Resolution */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Dispute Resolution
            </h2>
            <p className="text-lg text-gray-600">
              How we handle disputes and complaints
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <ul className="space-y-4">
              {disputeResolution.map((resolution, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{resolution}</span>
                </li>
              ))}
              </ul>
          </div>
        </div>
            </section>

      {/* Governing Law */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Governing Law
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              These Terms of Service shall be governed by and construed in accordance with the laws of India. 
              Any disputes arising from these terms or our services shall be subject to the exclusive 
              jurisdiction of the courts in Hyderabad, Telangana.
            </p>
            <div className="bg-primary-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Important Notice</h3>
              <p className="text-gray-700 text-sm">
                By using our services, you acknowledge that you have read, understood, and agree to be bound 
                by these Terms of Service. If you have any questions, please contact us before using our services.
              </p>
            </div>
          </div>
        </div>
            </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Questions About These Terms?
            </h2>
            <p className="text-lg text-gray-600">
              Contact us if you have any questions about our terms of service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary-50 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Phone className="h-6 w-6 text-primary-600" />
                <h3 className="text-xl font-bold text-gray-900">Call Us</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Speak with our customer service team
              </p>
              <Link
                href="tel:+919676333505"
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                +91 96763 33505 / +91 96765 82723
              </Link>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Mail className="h-6 w-6 text-primary-600" />
                <h3 className="text-xl font-bold text-gray-900">Email Us</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Send us your questions via email
              </p>
              <Link
                href="mailto:vlcooltech@gmail.com"
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                vlcooltech@gmail.com
              </Link>
            </div>
          </div>
              </div>
            </section>

      {/* Terms Updates */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Terms Updates
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We may update these Terms of Service from time to time. 
            Any changes will be posted on this page with an updated revision date.
          </p>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-center space-x-4">
              <Calendar className="h-5 w-5 text-primary-600" />
              <p className="text-gray-600">
                <strong>Last Updated:</strong> January 2025<br />
                <strong>Effective Date:</strong> January 1, 2025
              </p>
            </div>
          </div>
        </div>
            </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Clarification?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Our team is here to help you understand these terms
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/customer-support"
              className="btn bg-white text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              Contact Support
            </Link>
            <Link
              href="tel:+919676333505"
              className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-semibold text-lg text-center hover:scale-105 transform transition-all duration-300"
            >
              Call VL CoolTech
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsOfService