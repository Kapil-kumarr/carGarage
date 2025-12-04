'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    icon: '🔧',
    title: 'Car Repair',
    description: 'Expert diagnostics and repair for all makes and models. From engine issues to transmission problems.',
  },
  {
    icon: '✨',
    title: 'Detailing',
    description: 'Premium car detailing services including interior cleaning, exterior polish, and paint protection.',
  },
  {
    icon: '🛞',
    title: 'Tyre Replacement',
    description: 'New tyres, alignment, balancing, and rotation. We stock all major brands and sizes.',
  },
  {
    icon: '🚨',
    title: 'Breakdown Help',
    description: '24/7 emergency roadside assistance. We\'ll get you back on the road quickly and safely.',
  },
  {
    icon: '📋',
    title: 'Periodic Service',
    description: 'Scheduled maintenance to keep your car running smoothly. Oil changes, filter replacements, and more.',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive automotive solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-primary"
            >
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-dark mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
