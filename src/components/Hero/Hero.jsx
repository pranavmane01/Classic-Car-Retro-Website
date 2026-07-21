import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import Button from '../Common/Button'

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-stone-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.25),_transparent_45%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-amber-500">
            Curated heritage motoring
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
            Discover timeless classics with modern confidence.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-stone-300">
            Browse expertly selected retro masterpieces, restoration support, and concierge buying for collectors and enthusiasts.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="primary" className="gap-2">
              Explore Inventory <FiArrowRight />
            </Button>
            <Button variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
              View Services
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-[2rem] border border-stone-800 bg-stone-900/70 p-4 shadow-2xl shadow-black/30"
        >
          <img
            src="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80"
            alt="Classic retro car in sunlight"
            className="h-[420px] w-full rounded-[1.5rem] object-cover"
            loading="lazy"
          />
          <div className="mt-5 flex items-center justify-between rounded-[1.25rem] border border-stone-800 bg-stone-950/70 px-4 py-4">
            <div>
              <p className="text-sm text-stone-400">Featured this week</p>
              <p className="mt-1 font-semibold text-white">1962 Jaguar E-Type</p>
            </div>
            <p className="rounded-full bg-amber-500/15 px-3 py-1 text-sm font-semibold text-amber-400">
              In showroom
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
