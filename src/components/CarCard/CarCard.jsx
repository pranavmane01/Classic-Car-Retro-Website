import { motion } from 'framer-motion'

const CarCard = ({ car }) => {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      className="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-[0_25px_60px_-35px_rgba(0,0,0,0.3)]"
    >
      <img src={car.image} alt={car.title} className="h-56 w-full object-cover" loading="lazy" />
      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-semibold text-stone-900">{car.title}</h3>
          <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">
            {car.year}
          </span>
        </div>
        <p className="mt-3 text-sm text-stone-600">{car.location}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {car.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-stone-200 px-3 py-1 text-xs font-medium text-stone-600">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-4">
          <div>
            <p className="text-sm text-stone-500">Starting at</p>
            <p className="text-lg font-semibold text-stone-900">{car.price}</p>
          </div>
          <a href="#contact" className="text-sm font-semibold text-amber-700 transition hover:text-amber-800">
            Request details
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export default CarCard
