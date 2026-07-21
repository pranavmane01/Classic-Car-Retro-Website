import { motion } from 'framer-motion'
import { featuredCars } from '../../data/siteData'
import CarCard from '../CarCard/CarCard'
import SectionHeading from '../Common/SectionHeading'

const FeaturedCars = () => {
  return (
    <section id="featured" className="bg-stone-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured inventory"
          title="Signature cars, carefully chosen for collectors and drivers alike."
          description="Each model has been reviewed for authenticity, condition, and story."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {featuredCars.map((car, index) => (
            <motion.div
              key={car.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <CarCard car={car} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCars
