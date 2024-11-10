import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='bg-gray-50 z-50 sticky top-0' >
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src="/logo.jpg" alt="malik-rimsha" width={50} height={50} className='w-[50px] rounded-full h-[50px]' />
            <span className="ml-3 text-xl">Malik-Rimsha</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-gray-900" href={"/"} >Home</Link>
            <Link className="mr-5 hover:text-gray-900" href={"#About"}>About</Link>
            <Link className="mr-5 hover:text-gray-900" href={"#Skills"}>Skills</Link>
            <Link className="mr-5 hover:text-gray-900" href={"#Projects"}>Projects</Link>
            <Link className="mr-5 hover:text-gray-900" href={"#Contact"}>Contact</Link>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar