import { motion } from 'framer-motion'
import { categories } from '../../data/siteData'
import SectionHeading from '../Common/SectionHeading'

const Categories = () => {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Explore by style"
          title="Choose the era that fits your next drive."
          description="From plush luxury cruisers to muscular statement pieces, each category offers a distinct experience."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {categories.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-2xl">
                {item.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-stone-900">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-stone-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
