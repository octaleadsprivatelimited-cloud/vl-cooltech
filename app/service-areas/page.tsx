import type { Metadata } from 'next'
import { MapPin, Phone, Clock, CheckCircle, Star, Users, Wrench, Shield } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Service Areas - ApplianceCares.in | Electronics & Appliance Repair Services',
  description: 'We provide professional electronics and appliance repair services across Hyderabad. Serving Pragathi Nagar and surrounding areas with same-day service.',
  keywords: 'service areas, Hyderabad repair service, Pragathi Nagar, electronics repair coverage, appliance repair areas',
}

const ServiceAreas = () => {
  const primaryAreas = [
    'Pragathi Nagar',
    'Kukatpally',
    'Miyapur',
    'Chandanagar',
    'Nizampet',
    'Bachupally',
    'Gachibowli',
    'Kondapur',
    'HITEC City',
    'Madhapur',
    'Gachibowli',
    'Kondapur'
  ]

  const extendedAreas = [
    'Jubilee Hills',
    'Banjara Hills',
    'Secunderabad',
    'Begumpet',
    'Himayatnagar',
    'Tarnaka',
    'Uppal',
    'LB Nagar',
    'Dilsukhnagar',
    'Malakpet',
    'Kothapet',
    'Hayathnagar'
  ]

  const features = [
    {
      icon: Clock,
      title: 'Same Day Service',
      description: 'Quick response and same-day repair service available'
    },
    {
      icon: Users,
      title: 'Local Technicians',
      description: 'Experienced local technicians familiar with your area'
    },
    {
      icon: Wrench,
      title: 'All Appliances',
      description: 'We repair all types of electronics and home appliances'
    },
    {
      icon: Shield,
      title: 'Guaranteed Service',
      description: '100% satisfaction guarantee on all our repair services'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Service Areas
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              We provide professional electronics and appliance repair services across Hyderabad. 
              Our expert technicians are available in your area with same-day service.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Primary Service Areas
            </h2>
            <p className="text-lg text-gray-600">
              We provide same-day service in these areas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {primaryAreas.map((area, index) => (
              <div
                key={index}
                className="bg-primary-50 border border-primary-200 rounded-lg p-4 text-center hover:bg-primary-100 transition-colors duration-200"
              >
                <div className="flex items-center justify-center mb-2">
                  <MapPin className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="font-semibold text-primary-900">{area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Extended Service Areas
            </h2>
            <p className="text-lg text-gray-600">
              We also provide services in these areas with advance booking
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {extendedAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center justify-center mb-2">
                  <MapPin className="h-5 w-5 text-gray-600 mr-2" />
                  <span className="font-medium text-gray-900">{area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Service?
            </h2>
            <p className="text-lg text-gray-600">
              We provide the best repair services in Hyderabad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Service in Your Area?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Contact us to schedule your repair service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+919666111327"
              className="btn btn-primary bg-white text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call Now: +91 96661 11327
            </Link>
            <Link
              href="/book-service"
              className="btn btn-outline border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-semibold text-lg text-center hover:scale-105 transform transition-all duration-300"
            >
              Book Service Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceAreas
