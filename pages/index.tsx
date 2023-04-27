
import Layout from '@/components/Layout'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Projects from '@/components/Projects'
import { motion, useScroll } from 'framer-motion'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'



export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <Layout>
      <Navbar />
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </Layout>
  )
}
