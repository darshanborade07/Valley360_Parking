import React from 'react'

const Hero = () => {
  return (
   <section className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px]'>
    {/*Brand Info */}
    <div className='flex flex-col justify-center py-50 md:py-0 relative z-10'>
        <div className='text-center md:text-left space-y-30 lg:max-w-[1000px]'>
            <h1 className='text-5xl lg:text-16xl font-bold leading-relaxed xl:leading-loose font-averia'>Book Your
            <br /> Parking  <span className='text-secondary'>Slot </span> Here!</h1>
            <p>  </p>
            <p> health</p>
        </div>
    </div>
     {/* Hero Image*/}

   </section>
  )
}

export default Hero
