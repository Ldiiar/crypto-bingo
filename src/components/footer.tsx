import Container from './container';
import Logo from './logo';

//icons
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaReddit } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


export default function Footer() {
  const iconsStyles = 'w-[26px] h-[26px] text-main_fourth border border-gray-300 p-1 rounded-full hover:border-b-[1.5px] hover:border-main_third cursor-pointer'
  return (
    <footer className='bg-white w-full py-[40px] px-2 text-black/50 mt-auto text-xs'>
        <Container>
          <section className='flex flex-col gap-y-4 sm:flex-row sm:gap-y-0 justify-between items-center'>
            <span className='text-main_fourth font-semibold text-lg'>Community:</span>
            <div className="flex gap-x-2">
              <FaFacebook className={iconsStyles}/>
              <BsTwitterX className={iconsStyles}/>
              <FaReddit className={iconsStyles}/>
              <FaTelegramPlane className={iconsStyles}/>
              <FaYoutube className={iconsStyles}/>
              <FaDiscord className={iconsStyles}/>
              <AiFillInstagram className={iconsStyles}/>
              <FaLinkedinIn className={iconsStyles}/>
            </div>
          </section>
          <section className='space-y-4 border-b border-main_secondary py-6'>
            <p>This website was created only with the purpose of practicing skills of developing websites and just have some fun. The purpose of this website is solely to display information regarding the products and services available on the internet. It is not intended to offer access to any of paid premium products and services.</p>
            <p>This website displays some information about crypto marketplace. But if you need verified information we would recommend to check other websites and services.</p>
          </section>
        <section className='flex justify-between items-center pt-4 pb-10'>
            <span>Copyright ©2024 Crypto-bingo. All rights reserved</span>
            <span>Privacy & Policy</span>
        </section>
        </Container>
    </footer>
  )
}
