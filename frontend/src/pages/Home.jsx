import React from 'react'
import Sign from '../components/Sign'
import bloodDonation from '../assets/images/bloodDonation.png'

const Home = () => {
  return (
    <div className='flex items-center justify-center w-[100vw] h-[100vh]'>

      {/* Background image div */}
      <div
        className='w-[70%] h-full bg-cover bg-no-repeat '
        style={{ backgroundImage: `url(${bloodDonation})` }}
      >
        {/* Optional: Add overlay/text/etc. */}
      </div>

      {/* Signup form */}
      
       <div className=' h-full w-[30%] flex justify-center items-start flex-col bg-slate-800'>

        <Sign />
        </div>
     
      

    </div>
  )
}

export default Home
