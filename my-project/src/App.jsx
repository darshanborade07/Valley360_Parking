import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='overflow-x-hidden'>
        <Navbar />
        <Hero></Hero>
      </main>
     
    </>
  );
}

export default App
