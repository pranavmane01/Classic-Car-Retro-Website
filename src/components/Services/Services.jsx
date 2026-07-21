import { motion } from 'framer-motion'
import { services } from '../../data/siteData'
import SectionHeading from '../Common/SectionHeading'

const Services = () => {
  return (
    <section id="services" className="bg-stone-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our services"
          title="Support that goes beyond the sale."
          description="Whether you are buying, restoring, or preserving, we help every step of the way."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-[1.75rem] border border-stone-200 bg-white p-8 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-xl font-semibold text-amber-700">
                0{index + 1}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-stone-900">{service.title}</h3>
              <p className="mt-3 text-base leading-7 text-stone-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
