import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  // Force refresh to clear cache
  const testimonials = [
    {
      name: 'Anil Reddy',
      location: 'Ameenpur, Hyderabad',
      rating: 4.9,
      text: 'VL CoolTech serviced both of our inverter split ACs. The team arrived within two hours, did a thorough foam cleaning and topped up gas. Cooling improved immediately and the visiting charge was adjusted in the bill.',
      service: 'Inverter AC Service'
    },
    {
      name: 'Swapna Rao',
      location: 'Beeramguda, Sangareddy',
      rating: 4.9,
      text: 'Our refrigerator stopped cooling right before the weekend. VL CoolTech diagnosed a relay issue, replaced it on the spot and the fridge was ready in 30 minutes. Professional and transparent pricing.',
      service: 'Double Door Fridge Repair'
    },
    {
      name: 'Mahesh Babu',
      location: 'BHEL Township, Hyderabad',
      rating: 5,
      text: 'Needed my 1.5 ton split AC relocated. The technicians dismantled, transported and reinstalled it perfectly with proper vacuuming and copper pipe insulation. Highly reliable service.',
      service: 'AC Installation & Relocation'
    },
    {
      name: 'Lavanya Iyer',
      location: 'Miyapur, Hyderabad',
      rating: 4.8,
      text: 'VL CoolTech fixed our Bosch washing machine drum issue and also cleaned the drain outlet. They explained the problem clearly and gave maintenance tips. Great value for money.',
      service: 'Front-Load Washing Machine Repair'
    },
    {
      name: 'Srinivas Rao',
      location: 'Patancheru, Hyderabad',
      rating: 5,
      text: 'Power board burnt in our LG QLED TV. VL CoolTech sourced the PCB, replaced it and calibrated the picture settings. They handled the TV carefully and completed it the same day.',
      service: 'LED/QLED TV Repair'
    },
    {
      name: 'Rukmini Devi',
      location: 'Lingampally, Hyderabad',
      rating: 4.9,
      text: 'Booked their electrical and RO service together. The electrician fixed our MCB tripping issue and the RO technician replaced the filters with genuine parts. Excellent coordination.',
      service: 'Water Purifier & Electrical Service'
    }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            What Hyderabad West <span className="text-primary-600">Customers Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            VL CoolTech is the preferred AC, refrigerator, washing machine, LED TV, water purifier and electrical partner for homes and businesses across Ameenpur, Beeramguda, Patancheru, BHEL Township, Miyapur, Lingampally and neighbouring Hyderabad localities.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300">
              {/* Quote Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <Quote className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 sm:h-5 sm:w-5 ${
                      i < Math.floor(testimonial.rating) 
                        ? 'text-yellow-400 fill-current' 
                        : i === Math.floor(testimonial.rating) && testimonial.rating % 1 !== 0
                        ? 'text-yellow-400 fill-current opacity-70'
                        : 'text-gray-300'
                    }`} 
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600 font-medium">{testimonial.rating}/5</span>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="border-t border-gray-200 pt-4 sm:pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs sm:text-sm font-medium text-primary-600">{testimonial.service}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl sm:rounded-2xl p-6 sm:p-8">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Overall Customer Rating – VL CoolTech
            </h3>
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <div className="text-4xl sm:text-6xl font-bold text-primary-600 mr-3 sm:mr-4">4.9</div>
              <div>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-gray-600 text-sm sm:text-base">Based on 2,500+ service visits across Hyderabad West</div>
              </div>
            </div>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Customers appreciate our transparent ₹299 visiting charge, quick turnaround times and the assurance of genuine spares for every AC and appliance job.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
