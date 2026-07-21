import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import Button from '../Common/Button'

const About = () => {
  return (
    <section id="about" className="bg-stone-950 px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-[2rem] border border-stone-800 bg-stone-900/70 p-6"
        >
          <img
            src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80"
            alt="Classic car showroom interior"
            className="h-[420px] w-full rounded-[1.5rem] object-cover"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">About us</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            We connect passion, provenance, and preservation.
          </h2>
          <p className="mt-6 text-lg leading-8 text-stone-300">
            From rare collectors&apos; pieces to dependable weekend cruisers, our team brings experience, transparency, and personal care to every transaction.
          </p>
          <ul className="mt-8 space-y-4 text-stone-300">
            {[
              'Trusted sourcing with condition reports and provenance support',
              'Tailored restoration guidance for modern and classic owners',
              'Flexible purchasing and delivery options across the country',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <FiCheckCircle className="mt-1 shrink-0 text-amber-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="primary">Meet the Team</Button>
            <Button variant="secondary" className="border-stone-700 bg-transparent text-stone-200 hover:bg-stone-900">
              Read Our Story
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
