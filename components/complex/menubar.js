import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaSpotify, FaApple, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import Link from "next/link"
function Menubar(props) {
  return (
    <header className={`fixed top-0 w-full z-30 bg-black`}>
      <nav className={`flex mt-5 w-full justify-between items-center`}>
        <div className={`flex flex-col`}>
          <div className={`hidden lg:flex gap-1 ml-5 relative z-10`}>
            <Link href={``}><FaFacebook className={`w-5 h-5 hover:text-red-800 duration-300 hover:scale-125`} /></Link>
            <Link href={``}><FaXTwitter className={`w-5 h-5 hover:text-red-800 duration-300 hover:scale-125`} /></Link>
            <Link href={``}><FaInstagram className={`w-5 h-5 hover:text-red-800 duration-300 hover:scale-125`} /></Link>
            <Link href={``}><FaYoutube className={`w-5 h-5 hover:text-red-800 duration-300 hover:scale-125`} /></Link>
            <Link href={``}><FaSpotify className={`w-5 h-5 hover:text-red-800 duration-300 hover:scale-125`} /></Link>
            <Link href={``}><FaApple className={`w-5 h-5 hover:text-red-800 duration-300 hover:scale-125`} /></Link>
            <Link href={``}><FaTiktok className={`w-5 h-5 hover:text-red-800 duration-300 hover:scale-125`} /></Link>
          </div>
          <img className={`hidden lg:block`} src="/logo2.png" alt=""/>
        </div>
        <div className={`w-full flex flex-col justify-center items-center`}><img src="/logo1.png" alt="main logo of mms"/></div>
        <div className={`flex flex-col`}>
          <div className={`hidden lg:flex`}>
            <Link href={`#`} className={`uppercase hover:text-red-800 duration-300 text-xl mr-2`}>Subscribe </Link>
            <IoIosMail className={`w-7 h-7`} />
          </div>
          <img className={`hidden lg:block`} src="/logo23.png" alt=""/>
        </div>
      </nav>

    </header>
  );
}

export default Menubar;