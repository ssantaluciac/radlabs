import { socials } from '@/constants';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer flex-col w-full">
      <div className="flex flex-wrap gap-12 justify-center mt-[280px]">
        {socials.map((social) => (
          <Image
            key={social.name}
            src={social.url}
            alt={social.name}
            width={24}
            height={24}
            className="object-scale-down rounded-full cursor-pointer w-[40px] h-[40px] bg-[#352339]"
          />
        ))}
      </div>
    </footer>
  )
}

export default Footer