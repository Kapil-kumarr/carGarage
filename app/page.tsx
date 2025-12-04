import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
}
