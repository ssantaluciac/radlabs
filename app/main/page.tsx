"use client"

import Link from "next/link"
import Image from 'next/image';
import { mainButtons, footerButtons } from "@/constants"

const Main = () => {
    return (
        <section className="flex flex-col items-center">
            <div className="mt-[100px]">
                {mainButtons.map((button) => (
                    <Link
                        key={button.name}     
                        href={button.url}
                    >
                        <p className="flex justify-center items-center w-[150px] h-[50px] bg-[#352339] rounded-full text-black text-center text-[18px] mt-5"
                        >
                            {button.name}
                        </p>
                    </Link>
                ))}
            </div>
            <div className="mt-10 rounded-full inline-flex w-20 h-20 bg-[#00F395] text-black text-center items-center justify-center shadow-lg shadow-[#00F395]">
                START
            </div>
            <p className="text-[#00F395] mt-5">
                0.10
            </p>
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
        </section>
    )
}

export default Main