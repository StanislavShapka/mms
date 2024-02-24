'use client'

import React, {useState, useEffect, useRef} from 'react';
import { HiOutlineMenu } from "react-icons/hi";
import { IoIosMail } from "react-icons/io";
import { FiHome } from "react-icons/fi";
import Link from "next/link"
import {cn} from "@/lib/utils";
import { usePathname } from 'next/navigation'
import {FaApple, FaFacebook, FaInstagram, FaSpotify, FaTiktok, FaYoutube} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import { FaShoppingBasket } from "react-icons/fa";

function Sidebar() {
  const menuRef = useRef();
  const menu2Ref = useRef();
  const menu3Ref = useRef();
  const pathname = usePathname()
  let [open, setOpen] = useState(false);
  let [current, setCurrent] = useState('');

  useEffect(() => {
    open === true ? setOpen(false) : ``;
    if (pathname === "/") {
      setCurrent("HOME")
    } else {
      setCurrent(pathname.replace('/',''))
    }
  }, [pathname]);

  useEffect(() => {
    let handler = (e) => {
      if(!menuRef.current?.contains(e.target) & !menu2Ref.current?.contains(e.target) & !menu3Ref.current?.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
  }, []);

  return (
    <>
      <div className={cn(`fixed top-0 w-full h-screen overflow-hidden duration-300`, open === true ? `bg-black/70 z-10`: `bg-black/0 -z-10`)}></div>
      <div className={cn(`fixed left-0 lg:mt-0 mt-5 px-5 w-fit z-30`, open === true ? `z-30`: `z-20`)}>
        <div className={`flex`}>
          <button className={``} ref={menu3Ref} onClick={() => {setOpen(!open)}}><HiOutlineMenu className={cn(`w-8 h-8 hover:text-red-800 duration-300 relative z-50`,open === true ? 'rotate-90': '')} /></button>
          <button><Link href={'/'} onClick={() => {setOpen(open = false)}}><FiHome className={cn('w-8 h-8 hover:text-red-800 duration-300 ml-5 relative z-50')} /></Link></button>
          <button className={'w-8 h-8 ml-5 uppercase text-3xl'}>{current}</button>
          {/*<button className={cn(`float-end`, current.toLowerCase() === "store" ? "block": "hidden")}><Link href={'#'} onClick={() => {setOpen(open = false)}}><FaShoppingBasket className={cn('w-8 h-8 hover:text-red-800 duration-300 mr-5')} /></Link></button>*/}
        </div>
        <div className={cn(`mt-5 duration-300`, open === true ? ` opacity-1`: `hidden opacity-0`)}>
          <div ref={menuRef} className={cn('flex flex-col relative duration-300 gap-4 w-fit', open === true ? `opacity-1 visible` : `opacity-0 invisible`)}>
            <Link href={'/'} className={`duration-300 hover:text-red-800 text-[40px] w-fit`} >Home</Link>
            <Link href={'news'} className={`duration-300 hover:text-red-800 text-[40px] w-fit`} >News</Link>
            <Link href={'music'} className={`duration-300 hover:text-red-800 text-[40px] w-fit`} >Music</Link>
            <Link href={'picsvids'} className={`duration-300 hover:text-red-800 text-[40px] w-fit`} >Pics & Vids</Link>
            <Link href={'#'} className={`duration-300 hover:text-red-800 text-[40px] w-fit cursor-not-allowed`} >Store</Link>
            <Link href={'contact'} className={`lg:hidden duration-300 hover:text-red-800 text-[40px] w-fit`} >Contact</Link>
          </div>
          <div ref={menu2Ref} className={cn(`lg:hidden flex duration-300 gap-4 mt-5`, open === true ? `opacity-1 visible` : `opacity-0 invisible `)}>
            <Link href={``}><FaFacebook className={`w-7 h-7 hover:text-red-800 duration-300 hover:scale-125`} /></Link>
            <Link href={``}><FaXTwitter className={`w-7 h-7 hover:text-red-800 duration-300 hover:scale-125`} /></Link>
            <Link href={``}><FaInstagram className={`w-7 h-7 hover:text-red-800 duration-300 hover:scale-125`} /></Link>
            <Link href={``}><FaYoutube className={`w-7 h-7 hover:text-red-800 duration-300 hover:scale-125`} /></Link>
            <Link href={``}><FaSpotify className={`w-7 h-7 hover:text-red-800 duration-300 hover:scale-125`} /></Link>
            <Link href={``}><FaApple className={`w-7 h-7 hover:text-red-800 duration-300 hover:scale-125`} /></Link>
            <Link href={``}><FaTiktok className={`w-7 h-7 hover:text-red-800 duration-300 hover:scale-125`} /></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;