import { Shield, Clock, Wrench, Phone, Star } from 'lucide-react'

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: '100% Guarantee',
      description: 'Every AC or appliance service includes a workmanship guarantee. If the issue returns within the warranty window, we fix it at no extra cost.',
      color: 'bg-green-500'
    },
    {
      icon: Clock,
      title: 'Same Day Service',
      description: 'Priority slots for Ameenpur, Beeramguda, Patancheru, BHEL Township, Miyapur and neighbouring Hyderabad localities. We arrive on time and respect your schedule.',
      color: 'bg-blue-500'
    },
    {
      icon: Wrench,
      title: 'Expert Technicians',
      description: 'Seasoned specialists for inverter ACs, side-by-side refrigerators, fully automatic washing machines, LED/QLED TVs and RO water purifiers.',
      color: 'bg-purple-500'
    },
    {
      icon: Phone,
      title: '24/7 Support',
      description: 'Call or WhatsApp +91 96763 33505 / +91 96765 82723 anytime. Emergency visits arranged for critical cooling or electrical issues.',
      color: 'bg-cyan-500'
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Genuine spares, calibrated tools and transparent visit charge of ₹299. We explain every step before the work begins.',
      color: 'bg-pink-500'
    }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Why Choose <span className="text-primary-600">VL CoolTech?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Since 2012 we have supported homeowners, facility teams and small businesses with reliable AC, refrigerator, washing machine, LED TV, water purifier and electrical services throughout Ameenpur, Beeramguda, Patancheru, BHEL Township, Miyapur and Greater Hyderabad.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 sm:p-8">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 ${feature.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6`}>
                  <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 sm:mt-16 bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Your Comfort Partner in Hyderabad West
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                VL CoolTech operates from Ameenpur with a fully equipped workshop, on-field service vans and experienced technicians. We specialise in premium cooling solutions, preventive maintenance and quick breakdown support that keeps homes and offices running without interruption.
              </p>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-center text-gray-700 text-sm sm:text-base">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Certified technicians trained on multi-brand inverter, VRF and cassette AC systems
                </li>
                <li className="flex items-center text-gray-700 text-sm sm:text-base">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Genuine manufacturer spares with warranty coverage
                </li>
                <li className="flex items-center text-gray-700 text-sm sm:text-base">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Transparent visiting charge of ₹299 adjusted in final bill
                </li>
                <li className="flex items-center text-gray-700 text-sm sm:text-base">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Preventive maintenance plans for residential and commercial properties
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-blue-100 rounded-xl sm:rounded-2xl p-6 sm:p-8">
              <div className="text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Service Guarantee
                </h4>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  We're so confident in our work that we offer a comprehensive 
                  warranty on all repairs. Your satisfaction is our guarantee.
                </p>
                <div className="bg-white rounded-lg p-3 sm:p-4">
                  <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-2">100%</div>
                  <div className="text-gray-600 text-sm sm:text-base">Satisfaction Guarantee</div>
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
