import { motion } from 'framer-motion'
import { testimonials } from '../../data/siteData'
import SectionHeading from '../Common/SectionHeading'

const Testimonials = () => {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Client stories"
          title="Trusted by collectors who value authenticity."
          description="The experience matters just as much as the car itself."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-8"
            >
              <p className="text-lg leading-8 text-stone-700">“{item.quote}”</p>
              <footer className="mt-6">
                <p className="font-semibold text-stone-900">{item.name}</p>
                <p className="text-sm text-stone-500">{item.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
