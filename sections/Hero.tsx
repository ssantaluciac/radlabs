'use client'

import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"
import { ConnectButton } from "@rainbow-me/rainbowkit"

const Hero = () => {
  const metamaskInstalled = true
 
  return (
    <div className="flexCenter flex-col">
      <div className="mt-[270px]">
        <Image
          src="/logo.svg"
          alt="Rad Labs Logo"
          width={100}
          height={100}
          className="object-contain mt-5"
        />
      </div>
      <div className="flex relative justify-center mt-20">
        {metamaskInstalled ? (
          <div>
            <ConnectButton
              label="Login"
              
            />
          </div>
        ) : (
          <>
            <p className="text-white">
              Please install {' '}
              <Link
                href="https://metamask.io/" target="_blank"
                className="underline"
                >
                Metamask
              </Link>
            </p>
          </>
          )}
      </div>
      <Footer />
    </div>
  )
}

export default Hero