import { motion } from 'framer-motion'

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500'
  const variants = {
    primary: 'bg-amber-500 text-stone-950 hover:bg-amber-400 shadow-lg shadow-amber-500/20',
    secondary: 'border border-stone-300 bg-white/80 text-stone-700 hover:border-stone-400 hover:bg-white',
    ghost: 'bg-transparent text-stone-700 hover:bg-stone-100',
  }

  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
