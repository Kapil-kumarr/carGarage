'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const pricingPlans = [
  {
    name: 'Basic Service',
    price: '79',
    description: 'Perfect for routine maintenance',
    features: [
      'Oil Change',
      'Tire Pressure Check',
      'Fluid Level Inspection',
      'Brake Inspection',
      'Battery Test',
      'Visual Safety Check',
    ],
    popular: false,
  },
  {
    name: 'Premium Service',
    price: '149',
    description: 'Comprehensive care package',
    features: [
      'Everything in Basic',
      'Tire Rotation',
      'Air Filter Replacement',
      'Cabin Filter Replacement',
      'Full Diagnostic Scan',
      'Brake Fluid Flush',
      'Coolant Top-up',
      '30-Point Inspection',
    ],
    popular: true,
  },
  {
    name: 'Complete Service',
    price: '249',
    description: 'Ultimate protection plan',
    features: [
      'Everything in Premium',
      'Transmission Service',
      'Fuel System Cleaning',
      'Engine Deep Clean',
      'Wheel Alignment',
      'Full Detailing',
      'Paint Protection',
      '1-Year Warranty',
    ],
    popular: false,
  },
]

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Service <span className="text-gradient">Packages</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose the perfect service package for your vehicle's needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular ? 'border-4 border-primary' : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-dark font-bold px-6 py-2 text-sm">
                  MOST POPULAR
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-dark mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-5xl font-bold text-dark">${plan.price}</span>
                  <span className="text-gray-600 ml-2">/ service</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block w-full text-center font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-primary hover:bg-primary-dark text-dark shadow-lg'
                      : 'bg-dark hover:bg-dark-light text-white'
                  }`}
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Pricing Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-dark mb-4">À La Carte Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Brake Pad Replacement</span>
                <span className="font-bold text-dark">from $120</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Tire Replacement</span>
                <span className="font-bold text-dark">from $80</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Battery Replacement</span>
                <span className="font-bold text-dark">from $150</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">AC Recharge</span>
                <span className="font-bold text-dark">from $90</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Engine Diagnostics</span>
                <span className="font-bold text-dark">from $60</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Wheel Alignment</span>
                <span className="font-bold text-dark">from $75</span>
              </div>
            </div>
            <p className="text-gray-600 mt-6 text-sm">
              * Prices may vary based on vehicle make and model. Contact us for a detailed quote.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
