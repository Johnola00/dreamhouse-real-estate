import Header from './sections/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Bestsellers from './sections/Bestsellers'
import HowWeWork from './sections/HowWeWork'
import Articles from './sections/Articles'
import CustomerReviews from './sections/CustomerReviews'
import FAQ from './sections/FAQ'
import Footer from './sections/Footer'

function App() {
  return (
    <>
      <Header />

      <main id="top">
        <Hero />
        <About />
        <Bestsellers />
        <HowWeWork />
        <Articles />
        <CustomerReviews />
        <FAQ />
      </main>

      <Footer />
    </>
  )
}

export default App