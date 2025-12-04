import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Pricing from '@/components/Pricing'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Pricing />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
}
