import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Pragathi Nagar, Hyderabad',
      rating: 5,
      text: 'Excellent service! My TV was repaired within 2 hours. The technician was professional and explained everything clearly. Highly recommended!',
      service: 'TV Repair'
    },
    {
      name: 'Priya Sharma',
      location: 'Secunderabad',
      rating: 5,
      text: 'My washing machine was making strange noises. ApplianceCares fixed it perfectly and even cleaned it. Great value for money!',
      service: 'Washing Machine Repair'
    },
    {
      name: 'Amit Singh',
      location: 'Banjara Hills',
      rating: 5,
      text: 'AC wasn\'t cooling properly. They came the same day, diagnosed the issue quickly, and fixed it. Very satisfied with the service.',
      service: 'AC Repair'
    },
    {
      name: 'Sunita Reddy',
      location: 'Gachibowli',
      rating: 5,
      text: 'Refrigerator repair was done professionally. The technician was honest about the issue and provided a fair quote. Will definitely use again.',
      service: 'Refrigerator Repair'
    },
    {
      name: 'Vikram Patel',
      location: 'Kondapur',
      rating: 5,
      text: 'Laptop screen replacement was done perfectly. They used genuine parts and the service was quick. Very happy with the result.',
      service: 'Laptop Repair'
    },
    {
      name: 'Anita Gupta',
      location: 'HITEC City',
      rating: 5,
      text: 'Microwave repair service was outstanding. The technician was knowledgeable and the pricing was transparent. Highly recommend!',
      service: 'Microwave Repair'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-primary-600">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about our services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Quote className="h-6 w-6 text-primary-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-primary-600">{testimonial.service}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Overall Customer Rating
            </h3>
            <div className="flex items-center justify-center mb-4">
              <div className="text-6xl font-bold text-primary-600 mr-4">4.9</div>
              <div>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-gray-600">Based on 1000+ reviews</div>
              </div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our customers consistently rate us highly for our professional service, 
              quick response times, and quality repairs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
