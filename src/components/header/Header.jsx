'use client'
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from 'next/image'
import Logo from '@/img/logo.png'
const Header = () => {
   const [header, setHeader] = useState(0);

   useEffect(()=>{
      const upDatePosition = ()=>{
         setHeader(window.pageYOffset)
      }
      window.addEventListener('scroll', upDatePosition)
      upDatePosition()

      return ()=>{window.removeEventListener('scroll', upDatePosition)}
   },[])
  return (
    <header className={`w-full min-h-14 py-2 fixed top-0 left-0 z-50 ${header? 'bg-white shadow-md': 'bg-gray-700 bg-opacity-20'} duration-150 ease-linear`}>
        <nav className="w-full h-full px-10 flex items-center justify-between">
            <Link href="/">
                <Image className="max-w-36 h-auto" priority={true} src={Logo} alt="Enriched Coverages" />
            </Link>
            <ul className="flex items-center">
                <li>
                   <Link className={`text-xl px-5 py-2 hover:bg-orange-700 hover:text-white rounded-full duration-100 ${header ? "text-gray-900 font-medium": "text-white font-normal"}`} href="/service">Services</Link>
                </li>
                <li>
                   <Link className={`text-xl px-5 py-2 hover:bg-orange-700 hover:text-white rounded-full duration-100 ${header ? "text-gray-900 font-medium": "text-white font-normal"}`} href="/medicare">Medicare101</Link>
                </li>
                <li>
                   <Link className={`text-xl px-5 py-2 hover:bg-orange-700 hover:text-white rounded-full duration-100 ${header ? "text-gray-900 font-medium": "text-white font-normal"}`} href="/about">About us</Link>
                </li>
                <li>
                   <Link className={`text-xl px-5 py-2 hover:bg-orange-700 hover:text-white rounded-full duration-100 ${header ? "text-gray-900 font-medium": "text-white font-normal"}`} href="/resources">Resources</Link>
                </li>
                <li>
                   <Link className={`text-xl px-5 py-2 hover:bg-orange-700 hover:text-white rounded-full duration-100 ${header ? "text-gray-900 font-medium": "text-white font-normal"}`} href="/location">Location</Link>
                </li>
            </ul>
            <Link className="text-white text-xl font-medium rounded-full bg-orange-700 px-8 py-3 hover:bg-orange-800 duration-100" href="/contact">Contact US</Link>
        </nav>
    </header>
  )
}

export default Header