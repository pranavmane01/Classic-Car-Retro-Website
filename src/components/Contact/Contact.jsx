import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import Button from '../Common/Button'

const initialState = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

const Contact = () => {
  const [formData, setFormData] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const nextErrors = {}
    if (!formData.name.trim()) nextErrors.name = 'Name is required.'
    if (!formData.email.trim()) nextErrors.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = 'Please enter a valid email.'
    if (!formData.phone.trim()) nextErrors.phone = 'Phone is required.'
    if (!formData.message.trim()) nextErrors.message = 'Message is required.'
    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
      setFormData(initialState)
    }
  }

  const handleChange = (event) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  return (
    <section id="contact" className="bg-stone-950 px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">Contact us</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Plan your next visit or purchase.</h2>
          <p className="mt-6 text-lg leading-8 text-stone-300">
            Share your preferences and we will arrange a tailored viewing experience.
          </p>
          <div className="mt-8 space-y-4 text-stone-300">
            <div className="flex items-center gap-3"><FiPhone className="text-amber-500" /> +91 8010960081</div>
            <div className="flex items-center gap-3"><FiMail className="text-amber-500" /> pranavmane205@gmail.com </div>
            <div className="flex items-center gap-3"><FiMapPin className="text-amber-500" /> pune wakad ,office 406</div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-stone-800 bg-stone-900/70 p-6 shadow-2xl shadow-black/20"
          noValidate
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-stone-300" htmlFor="name">Name</label>
              <input id="name" name="name" value={formData.name} onChange={handleChange} className="w-full rounded-full border border-stone-700 bg-stone-950/70 px-4 py-3 text-white outline-none focus:border-amber-500" />
              {errors.name ? <p className="mt-2 text-sm text-amber-400">{errors.name}</p> : null}
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-stone-300" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="w-full rounded-full border border-stone-700 bg-stone-950/70 px-4 py-3 text-white outline-none focus:border-amber-500" />
              {errors.email ? <p className="mt-2 text-sm text-amber-400">{errors.email}</p> : null}
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-2 block text-sm font-medium text-stone-300" htmlFor="phone">Phone</label>
            <input id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full rounded-full border border-stone-700 bg-stone-950/70 px-4 py-3 text-white outline-none focus:border-amber-500" />
            {errors.phone ? <p className="mt-2 text-sm text-amber-400">{errors.phone}</p> : null}
          </div>
          <div className="mt-4">
            <label className="mb-2 block text-sm font-medium text-stone-300" htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} className="w-full rounded-[1.25rem] border border-stone-700 bg-stone-950/70 px-4 py-3 text-white outline-none focus:border-amber-500" />
            {errors.message ? <p className="mt-2 text-sm text-amber-400">{errors.message}</p> : null}
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button type="submit">Send Inquiry</Button>
            {submitted ? <p className="text-sm text-emerald-400">Thanks! We&apos;ll get back to you shortly.</p> : null}
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
