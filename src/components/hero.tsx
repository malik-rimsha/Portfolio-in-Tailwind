'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';




const Hero = () => {
  return (

    <section className="text-gray-600 body-font bg-fixed bg-gray-200 ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            <div> I am
              <br className="hidden lg:inline-block" />
              <h1>web Developer</h1>
              <h1>ui/ux Designer</h1>
            </div>
          </h1>
          <div className='w-[230px] h-[2px] bg-indigo-950'></div>
          <p className="mb-8 leading-relaxed">
            "Hello, I'm Malik-Rimsha – a passionate web developer with a recent graduate
            Currently diving deep into web development, I'm building
            my skills in Next.js, TypeScript, Html, Css and modern front-end technologies. Eager to bring
            ideas to life, I’m excited to share my journey, projects, and growth in web
            development with you. Let's connect and explore how I can contribute to innovative
            digital solutions!" </p>
          <div className="flex justify-center">
            <Link href={"#Contact"}>
              <button className="inline-flex text-white bg-indigo-950 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded mx-auto w-[15rem]"
            alt="hero"
            width={600}
            height={500}
            src="/main.jpg"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero