import React from 'react'

export default function CompanyLogo() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full py-2 md:py-4">
      <div className="flex items-center gap-1 md:gap-2 mb-3 max-sm:mt-[5rem] md:mb-0">
        <img src="/logo1.png" alt="A2 Developers Logo" className="h-10 sm:h-12 md:h-14" />
        <span className="text-xl sm:text-2xl md:text-xl lg:text-[2rem] xl:text-[3rem] font-sans text-white">A2 Developers</span>
      </div>
      
      <nav className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 pr-0 md:pr-8 lg:pr-[14rem] xl:pr-[20rem]">
        <a href="#" className="text-white text-base sm:text-lg md:text-xl lg:text-[20px] font-bold hover:underline">Home</a>
        <a href="#" className="text-white text-base sm:text-lg md:text-xl lg:text-[20px] font-bold hover:underline">About</a>
        <a href="#" className="text-white text-base sm:text-lg md:text-xl lg:text-[20px] font-bold hover:underline">Product</a>
        <a href="#" className="text-white text-base sm:text-lg md:text-xl lg:text-[20px] font-bold hover:underline">Contact</a>
      </nav>
    </div>
  )
}
