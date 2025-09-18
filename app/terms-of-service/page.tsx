export const metadata = {
  title: 'Terms of Service - ApplianceCares.in | Electronics & Appliance Repair Services',
  description: 'Terms of Service for ApplianceCares.in - Learn about our service terms and conditions.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsOfService() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> January 1, 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Service Agreement</h2>
              <p className="text-gray-700 mb-4">
                By using our services, you agree to these terms and conditions. ApplianceCares.in 
                provides professional electronics and appliance repair services in Hyderabad and surrounding areas.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Service Scope</h2>
              <p className="text-gray-700 mb-4">Our services include:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>TV repair and maintenance</li>
                <li>AC repair and servicing</li>
                <li>Washing machine repair</li>
                <li>Refrigerator repair</li>
                <li>Microwave repair</li>
                <li>Laptop and mobile repair</li>
                <li>Home appliance repair</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Pricing and Payment</h2>
              <p className="text-gray-700 mb-4">
                All prices are quoted in advance and are subject to change. Payment is due upon 
                completion of service unless otherwise agreed. We accept cash, UPI, and other 
                digital payment methods.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Warranty</h2>
              <p className="text-gray-700 mb-4">
                We provide warranty on all repairs as follows:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Labor warranty: 90 days from service date</li>
                <li>Parts warranty: As per manufacturer warranty</li>
                <li>Warranty covers the same issue that was repaired</li>
                <li>Warranty does not cover damage due to misuse or accidents</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Service Guarantee</h2>
              <p className="text-gray-700 mb-4">
                We guarantee our work. If you are not satisfied with our service, we will:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Return to fix the issue at no additional cost</li>
                <li>Provide a full refund if the issue cannot be resolved</li>
                <li>Replace parts if they fail within the warranty period</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Customer Responsibilities</h2>
              <p className="text-gray-700 mb-4">Customers are responsible for:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Providing accurate information about the appliance issue</li>
                <li>Ensuring safe access to the appliance</li>
                <li>Backing up data before laptop/mobile repairs</li>
                <li>Following care instructions after service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                Our liability is limited to the cost of the service provided. We are not responsible 
                for any indirect, incidental, or consequential damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Cancellation Policy</h2>
              <p className="text-gray-700 mb-4">
                Service appointments can be cancelled or rescheduled with at least 2 hours notice. 
                Same-day cancellations may incur a cancellation fee.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these terms, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> info@appliancecares.in</p>
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91 96661 11327</p>
                <p className="text-gray-700"><strong>Address:</strong> Pragathi Nagar, Hyderabad, TG</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these terms at any time. Changes will be posted on 
                this page with an updated revision date.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
