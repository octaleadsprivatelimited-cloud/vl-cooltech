import Link from 'next/link'
import { Phone, MessageCircle, Clock, Shield } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Your Appliances Fixed?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Don't let broken appliances disrupt your daily life. Contact us today 
            for fast, reliable, and affordable repair services in Hyderabad.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              href="tel:+919666111327"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call Now: +91 96661 11327
            </Link>
            <Link
              href="https://wa.me/919666111327"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </Link>
            <Link
              href="/book-service"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              Book Online
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Clock className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Same Day Service</h3>
              <p className="text-blue-100">Most repairs completed within 24 hours</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Shield className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">100% Guarantee</h3>
              <p className="text-blue-100">We stand behind our work</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Phone className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-blue-100">Always here when you need us</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Phone className="h-8 w-8 text-white mx-auto mb-2" />
                <div className="text-white font-semibold">Phone</div>
                <div className="text-blue-100">+91 96661 11327</div>
              </div>
              <div>
                <MessageCircle className="h-8 w-8 text-white mx-auto mb-2" />
                <div className="text-white font-semibold">Email</div>
                <div className="text-blue-100">info@appliancecares.in</div>
              </div>
              <div>
                <div className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">📍</span>
                </div>
                <div className="text-white font-semibold">Location</div>
                <div className="text-blue-100">Pragathi Nagar, Hyderabad</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
