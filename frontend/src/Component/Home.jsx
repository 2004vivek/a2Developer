import React from 'react'
import Navbar from './Navbar'
import Carousel from './Carousel'
import CompanyLogo from './CompanyLogo'
import SliderContent from './SliderContent'
import { useState } from 'react'
import Modal from './Modal'
export default function Home() {
     const [currentid, setcurrentid] = useState(0);

     const [ismodalopen, setismodalopen] = useState(false);

     const openModal = () => {
       setismodalopen(true);
     };
   
     const closeModal = () => {
       setismodalopen(false);
     };

  return (
    <div className='w-full h-screen relative bg-black/30 overflow-hidden'>
        
        <div className='absolute left-1/2 top-[2%] sm:top-[2%] -translate-x-1/2 h-fit border-b-1 border-b-white max-sm:-translate-y-[25%] -translate-y-[50%] w-[95%] sm:w-[90%] md:w-[85%] lg:w-[95%] z-50 text-white my-6'>
           <Navbar openModal={openModal}/>      
        </div>

        <div className='absolute left-1/2 top-[15%] sm:top-[15%] md:top-[15%] -translate-x-1/2 -translate-y-1/2 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[90%] z-50 text-white my-3'>
        <CompanyLogo/>
        </div>

        <div className='w-full absolute h-full inset-0 flex items-center justify-center z-30 px-4 sm:px-6 md:px-8 lg:px-10'>
          <SliderContent currentidx={currentid}/>
        </div>
        <Carousel currentidx={currentid} setcurrentidx={setcurrentid}/>

        <Modal isOpen={ismodalopen} onClose={closeModal} />
    </div>
  )
}
