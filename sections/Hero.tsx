'use client'

import Image from "next/image"

const Hero = () => {
 
  return (
    <div className="flexCenter flex-col text-[#3D1D3D]">
      <div className="text-center">
        <p className="font-black text-[40px] mt-11">RADCHIP</p>
        <p>Only winners can hold</p>
      </div>
      <div className="mt-[180px]">
        <Image
          src="/logo.gif"
          alt="Rad Labs Logo"
          width={150}
          height={150}
          className="object-contain mt-5"
        />
      </div>
    </div>
  )
}

export default Hero