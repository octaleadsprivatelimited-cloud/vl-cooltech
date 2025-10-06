import type { Metadata } from 'next'
import { Shield, Lock, Eye, FileText, Mail, Phone, Calendar, AlertCircle, User, Wrench, MapPin, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy - ApplianceCares.in | Data Protection & Privacy',
  description: 'Learn how ApplianceCares.in protects your personal information and respects your privacy. Our comprehensive privacy policy outlines data collection and usage.',
  keywords: 'privacy policy, data protection, personal information, privacy rights, data security',
}

const PrivacyPolicy = () => {
  const dataWeCollect = [
    {
      icon: User,
      title: 'Personal Information',
      items: ['Name and contact details', 'Service address', 'Phone number and email', 'Service preferences']
    },
    {
      icon: Wrench,
      title: 'Service Information',
      items: ['Appliance details', 'Repair history', 'Service requests', 'Payment information']
    },
    {
      icon: MapPin,
      title: 'Location Data',
      items: ['Service address', 'GPS coordinates (for navigation)', 'Area coverage verification']
    },
    {
      icon: FileText,
      title: 'Communication Records',
      items: ['Call recordings', 'Email correspondence', 'SMS messages', 'Service feedback']
    },
    {
      icon: Eye,
      title: 'Website Analytics Data',
      items: ['IP address and location', 'Browser type and version', 'Device information', 'Website usage patterns', 'Page views and session duration', 'Referral sources and search terms']
    }
  ]

  const dataUsage = [
    'Providing appliance repair services',
    'Processing service requests and bookings',
    'Communicating about service appointments',
    'Processing payments and billing',
    'Improving our services and customer experience',
    'Sending service updates and notifications',
    'Conducting customer satisfaction surveys',
    'Complying with legal obligations'
  ]

  const dataProtection = [
    'SSL encryption for data transmission',
    'Secure servers with regular security updates',
    'Limited access to personal information',
    'Regular security audits and assessments',
    'Secure payment processing systems',
    'Employee training on data protection',
    'Regular backup and recovery procedures'
  ]

  const userRights = [
    {
      right: 'Access',
      description: 'Request access to your personal data we hold'
    },
    {
      right: 'Correction',
      description: 'Request correction of inaccurate personal information'
    },
    {
      right: 'Deletion',
      description: 'Request deletion of your personal data'
    },
    {
      right: 'Portability',
      description: 'Request transfer of your data to another service'
    },
    {
      right: 'Objection',
      description: 'Object to processing of your personal data'
    },
    {
      right: 'Restriction',
      description: 'Request restriction of data processing'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect 
              your personal information when you use our services.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 rounded-xl p-8 mb-12">
            <div className="flex items-start space-x-4">
              <Shield className="h-8 w-8 text-primary-600 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Commitment to Privacy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  At ApplianceCares, we are committed to protecting your privacy and personal information. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you use our appliance repair services. We respect your privacy rights and are 
                  transparent about our data practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Information We Collect
            </h2>
            <p className="text-lg text-gray-600">
              We collect information necessary to provide our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataWeCollect.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <category.icon className="h-6 w-6 text-primary-600" />
                  <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-lg text-gray-600">
              We use your information to provide and improve our services
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <ul className="space-y-4">
              {dataUsage.map((use, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{use}</span>
                </li>
              ))}
              </ul>
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Data Protection & Security
            </h2>
            <p className="text-lg text-gray-600">
              We implement robust security measures to protect your data
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dataProtection.map((measure, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3">
                  <Lock className="h-5 w-5 text-primary-600" />
                  <span className="text-gray-700">{measure}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
            </section>

      {/* Your Rights */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Privacy Rights
            </h2>
            <p className="text-lg text-gray-600">
              You have certain rights regarding your personal information
            </p>
          </div>

          <div className="space-y-6">
            {userRights.map((right, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {right.right}
                </h3>
                <p className="text-gray-600">{right.description}</p>
              </div>
            ))}
          </div>
        </div>
            </section>

      {/* Google Analytics & Tag Manager */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Google Analytics & Tag Manager
            </h2>
            <p className="text-lg text-gray-600">
              How we use Google services to improve our website
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 mb-8">
            <div className="flex items-start space-x-4">
              <Eye className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Google Tag Manager & Analytics
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use Google Tag Manager (GTM) and Google Analytics to understand how visitors interact with our website. 
                  This helps us improve our services and user experience.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Data Collected by Google Services:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Website usage statistics and user behavior</li>
                    <li>• Device and browser information</li>
                    <li>• Geographic location (country/city level)</li>
                    <li>• Traffic sources and referral information</li>
                    <li>• Page views, session duration, and bounce rates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-xl p-8">
            <div className="flex items-start space-x-4">
              <AlertCircle className="h-8 w-8 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Your Consent & Control
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You can control your data collection preferences through our cookie consent banner. 
                  You can also opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://tools.google.com/dlpage/gaoptout" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn bg-yellow-600 text-white hover:bg-yellow-700 px-6 py-3 rounded-lg font-semibold text-center hover:scale-105 transform transition-all duration-300"
                  >
                    Google Analytics Opt-out
                  </a>
                  <button 
                    onClick={() => {
                      // This would trigger the consent banner
                      if (typeof window !== 'undefined' && window.gtag) {
                        window.gtag('consent', 'update', {
                          'analytics_storage': 'denied'
                        });
                      }
                    }}
                    className="btn border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white px-6 py-3 rounded-lg font-semibold text-center hover:scale-105 transform transition-all duration-300"
                  >
                    Disable Analytics Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sharing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Information Sharing
            </h2>
            <p className="text-lg text-gray-600">
              We do not sell your personal information to third parties
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <p className="text-gray-700 leading-relaxed mb-6">
              We may share your information only in the following limited circumstances:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">With your explicit consent</span>
              </li>
              <li className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">To comply with legal obligations</span>
              </li>
              <li className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">With trusted service providers who assist in our operations</span>
              </li>
              <li className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">To protect our rights and prevent fraud</span>
              </li>
              </ul>
          </div>
        </div>
            </section>

      {/* Contact for Privacy */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Privacy Inquiries
            </h2>
            <p className="text-lg text-gray-600">
              Contact us for any privacy-related questions or requests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary-50 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Mail className="h-6 w-6 text-primary-600" />
                <h3 className="text-xl font-bold text-gray-900">Email Us</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Send us your privacy questions or requests
              </p>
              <Link
                href="mailto:privacy@appliancecares.in"
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                privacy@appliancecares.in
              </Link>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Phone className="h-6 w-6 text-primary-600" />
                <h3 className="text-xl font-bold text-gray-900">Call Us</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Speak with our privacy team directly
              </p>
              <Link
                href="tel:+917780225280"
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                +91 77802 25280
              </Link>
            </div>
          </div>
        </div>
            </section>

      {/* Policy Updates */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Policy Updates
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We may update this Privacy Policy from time to time. 
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
            Questions About Your Privacy?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            We're here to help you understand and exercise your privacy rights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/customer-support"
              className="btn bg-white text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              Contact Support
            </Link>
            <Link
              href="mailto:privacy@appliancecares.in"
              className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-semibold text-lg text-center hover:scale-105 transform transition-all duration-300"
            >
              Email Privacy Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy