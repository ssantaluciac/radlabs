'use client'

import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"
import { ConnectButton } from "@rainbow-me/rainbowkit"

const Hero = () => {
 
  return (
    <div className="flexCenter flex-col">
      <div className="text-center">
        <p className="font-black text-[40px] mt-11 text-[#3D1D3D]">RADCHIP</p>
        <p className="mt-0 text-[#3D1D3D]">Only winners can hold</p>
      </div>
      <div className="mt-[180px]">
        <Image
          src="/logo.png"
          alt="Rad Labs Logo"
          width={150}
          height={150}
          className="object-contain mt-5"
        />
      </div>
      <div className="flex relative justify-center mt-[50px]">
        <ConnectButton
          label="Connect Wallet"
        />
      </div>
      <Footer />
    </div>
  )
}

export default Hero