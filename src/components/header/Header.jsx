import Link from "next/link"
import Image from 'next/image'
import Logo from '@/img/logo.png'
const Header = () => {
  return (
    <header className="w-full min-h-14 py-2 fixed top-0 left-0 z-50 bg-gray-700 bg-opacity-20">
        <nav className="w-full h-full px-10 flex items-center justify-between">
            <Link href="/">
                <Image className="max-w-36 h-auto" priority={true} src={Logo} alt="Enriched Coverages" />
            </Link>
            <ul className="flex items-center">
                <li>
                   <Link className="text-white text-xl font-normal px-5 py-2 hover:bg-orange-700 rounded-full duration-100" href="/service">Services</Link>
                </li>
                <li>
                   <Link className="text-white text-xl font-normal px-5 py-2 hover:bg-orange-700 rounded-full duration-100" href="/medicare">Medicare101</Link>
                </li>
                <li>
                   <Link className="text-white text-xl font-normal px-5 py-2 hover:bg-orange-700 rounded-full duration-100" href="/about">About us</Link>
                </li>
                <li>
                   <Link className="text-white text-xl font-normal px-5 py-2 hover:bg-orange-700 rounded-full duration-100" href="/resources">Resources</Link>
                </li>
                <li>
                   <Link className="text-white text-xl font-normal px-5 py-2 hover:bg-orange-700 rounded-full duration-100" href="/location">Location</Link>
                </li>
            </ul>
            <Link className="text-white text-xl font-medium rounded-full bg-orange-700 px-8 py-2 hover:bg-orange-800 duration-100" href="/contact">Contact US</Link>
        </nav>
    </header>
  )
}

export default Header