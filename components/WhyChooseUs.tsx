import { Shield, Clock, Wrench, DollarSign, Phone, Star } from 'lucide-react'

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: '100% Guarantee',
      description: 'We guarantee our work. If you\'re not satisfied, we\'ll make it right or refund your money.',
      color: 'bg-green-500'
    },
    {
      icon: Clock,
      title: 'Same Day Service',
      description: 'Most repairs completed the same day. No waiting, no delays, just fast, reliable service.',
      color: 'bg-blue-500'
    },
    {
      icon: Wrench,
      title: 'Expert Technicians',
      description: 'Our certified technicians have years of experience and are trained on the latest technology.',
      color: 'bg-purple-500'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'No hidden fees, no surprises. Get a free quote before we start any work.',
      color: 'bg-orange-500'
    },
    {
      icon: Phone,
      title: '24/7 Support',
      description: 'Round-the-clock customer support. We\'re here when you need us, day or night.',
      color: 'bg-cyan-500'
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'We use only genuine parts and follow manufacturer specifications for all repairs.',
      color: 'bg-pink-500'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-primary-600">ApplianceCares?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another repair service. We're your trusted partner for all 
            electronics and appliance repair needs in Hyderabad.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-8">
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Your Trust is Our Priority
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                With over 15 years of experience in electronics and appliance repair, 
                we've built a reputation for excellence in Hyderabad. Our commitment 
                to quality, transparency, and customer satisfaction sets us apart.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Certified and experienced technicians
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Genuine parts and manufacturer-approved service
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Comprehensive warranty on all repairs
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Free pickup and delivery service
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-blue-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-12 w-12 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Service Guarantee
                </h4>
                <p className="text-gray-600 mb-6">
                  We're so confident in our work that we offer a comprehensive 
                  warranty on all repairs. Your satisfaction is our guarantee.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                  <div className="text-gray-600">Satisfaction Guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
