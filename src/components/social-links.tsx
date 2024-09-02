import React from 'react'

//icons
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaReddit } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function SociaLinks() {
  const iconsStyles = 'w-[26px] h-[26px] text-main_fourth border border-gray-300 p-1 rounded-full hover:border-b-[1.5px] hover:border-main_third cursor-pointer'
  return (
    <div className="flex gap-x-2">
              <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer">
              <FaFacebook className={iconsStyles}/>
              </a>
              <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer">
              <BsTwitterX className={iconsStyles}/>
              </a>
              <a href="https://www.reddit.com/" target="_blank" rel="noopener noreferrer">
              <FaReddit className={iconsStyles}/>
              </a>
              <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane className={iconsStyles}/>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <FaYoutube className={iconsStyles}/>
              </a>
              <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
              <FaDiscord className={iconsStyles}/>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram className={iconsStyles}/>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className={iconsStyles}/>
              </a>
    </div>
  )
}
