import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-gray-200' >
      <footer className="text-gray-600 body-font">
        <div className="container px-1 py-1 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image src="/logo.jpg" alt="Dua-Umer" width={50} height={50} className='w-[50px] rounded-full h-[50px]' />
            <span className="ml-3 text-xl">Malik-Rimsha</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Malik-Rimsha —
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <div className='text 3xl hover:text-[#0033ff]'>
              <Link className="ml-3 text-gray-500" href={"https://github.com/settings/profile"} target='blank'>
                <FaGithub />
              </Link>
            </div>
            <div className='text 3xl hover:text-[#0033ff]'>
              <Link className="ml-3 text-gray-500" href={"www.linkedin.com/in/malik-rimsha-4319"} target='blank'>
                <FaLinkedin />
              </Link>
            </div>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Footer