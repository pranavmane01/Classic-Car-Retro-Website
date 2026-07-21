import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import FeaturedCars from '../components/FeaturedCars/FeaturedCars'
import Categories from '../components/Categories/Categories'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import Testimonials from '../components/Testimonials/Testimonials'
import Blog from '../components/Blog/Blog'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-stone-900">
      <Navbar />
      <Hero />
      <FeaturedCars />
      <Categories />
      <About />
      <Services />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
