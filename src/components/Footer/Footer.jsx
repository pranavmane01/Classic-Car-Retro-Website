import { FiArrowRight, FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="border-t border-stone-200 bg-stone-100 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">Classic Retro</p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">Where vintage elegance meets effortless ownership.</h2>
          <p className="mt-3 max-w-xl text-base leading-7 text-stone-600">
            Discover curated classics, restoration guidance, and hospitality built around passion.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="#home" className="inline-flex items-center gap-2 text-sm font-semibold text-stone-700 transition hover:text-stone-900">
            Back to top <FiArrowRight />
          </a>
          <a href="https://instagram.com" className="rounded-full border border-stone-300 p-3 text-stone-700 transition hover:border-stone-400 hover:text-stone-900" aria-label="Instagram">
            <FiInstagram />
          </a>
          <a href="https://facebook.com" className="rounded-full border border-stone-300 p-3 text-stone-700 transition hover:border-stone-400 hover:text-stone-900" aria-label="Facebook">
            <FiFacebook />
          </a>
          <a href="https://youtube.com" className="rounded-full border border-stone-300 p-3 text-stone-700 transition hover:border-stone-400 hover:text-stone-900" aria-label="YouTube">
            <FiYoutube />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
