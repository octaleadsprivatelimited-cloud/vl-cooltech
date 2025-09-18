import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import Stats from '@/components/Stats'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <Services />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </div>
  )
}
