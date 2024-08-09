import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero/Hero'
import Banner from './Components/Banners/Banner'
import Banner2 from './Components/Banners/Banner2'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='overflow-x-hidden'>
        <Navbar />
        <Hero/>
        <Banner/>
        <Banner2/>
        <Footer/>
      </main>
     
    </>
  );
}

export default App
