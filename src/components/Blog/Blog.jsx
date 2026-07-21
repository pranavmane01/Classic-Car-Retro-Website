import { motion } from 'framer-motion'
import { blogPosts } from '../../data/siteData'
import SectionHeading from '../Common/SectionHeading'

const Blog = () => {
  return (
    <section id="blog" className="bg-stone-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Latest insights"
          title="Stories, advice, and inspiration from the road."
          description="Keep up with the stories shaping classic motoring culture."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-sm"
            >
              <img src={post.image} alt={post.title} className="h-48 w-full object-cover" loading="lazy" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-stone-900">{post.title}</h3>
                <p className="mt-3 text-base leading-7 text-stone-600">{post.excerpt}</p>
                <a href="#contact" className="mt-6 inline-flex text-sm font-semibold text-amber-700 transition hover:text-amber-800">
                  Read article →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
