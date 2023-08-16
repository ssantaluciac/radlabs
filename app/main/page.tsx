"use client"

import Link from "next/link"
import Image from 'next/image';
import { redirect } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { mainButtons, footerButtons } from "@/constants"

const Main = () => {
    const { data: session } = useSession()

    return (
        <section className="flex flex-col items-center justify-center">
            {session?.user ? (
                <div>
                    <div className="mt-[100px] font_2">
                        <div>
                            <ConnectButton
                                label="Connect Wallet"
                            />
                        </div>
                        <div className="flex flex-col items-center text-center">
                            {mainButtons.map((button) => (
                                <Link
                                    key={button.name}     
                                    href={button.url}
                                >
                                    <p className="flex justify-center items-center w-[150px] h-[50px] bg-[#352339] rounded-full text-black text-[18px] mt-5"
                                    >
                                        {button.name}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="mt-10 flex flex-col items-center justify-center">
                        <div className="relative">
                            <div className="absolute -inset-1 rounded-full bg-[#00F395] opacity-75 blur" />
                            <button className="relative text-black rounded-full bg-[#00F395] font_2 w-20 h-20">
                                START
                            </button>
                        </div>
                        <p className="text-[#00F395] mt-5 font-semibold text-xl">
                        0.10
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-12 justify-center mt-[100px]">
                        {footerButtons.map((social) => (
                            <Image
                                key={social.name}
                                src={social.url}
                                alt={social.name}
                                width={24}
                                height={24}
                                className="object-scale-down rounded-full cursor-pointer w-[40px] h-[40px]"
                            />
                        ))}
                    </div>
                </div>
            ) : (
                redirect('/')
            )}
        </section>
    )
}


export default Main