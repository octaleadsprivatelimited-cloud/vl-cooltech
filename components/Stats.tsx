import { Users, Clock, Star, Shield } from 'lucide-react'

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: '5000+',
      label: 'Happy Customers',
      description: 'Satisfied customers across Hyderabad'
    },
    {
      icon: Clock,
      number: '15+',
      label: 'Years Experience',
      description: 'Professional expertise in electronics repair'
    },
    {
      icon: Star,
      number: '4.9/5',
      label: 'Customer Rating',
      description: 'Based on 1000+ customer reviews'
    },
    {
      icon: Shield,
      number: '100%',
      label: 'Satisfaction Guarantee',
      description: 'We stand behind our work'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our numbers speak for themselves. We've been serving Hyderabad with 
            professional electronics and appliance repair services for over 15 years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 group-hover:bg-white/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-white mb-2">
                    {stat.label}
                  </div>
                  <div className="text-blue-100 text-sm">
                    {stat.description}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats
