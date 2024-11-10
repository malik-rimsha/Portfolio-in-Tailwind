import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <div id='Projects'>
      <section className="text-gray-900 body-font bg-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 -mt-[5rem]">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/resume.png"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-900 mb-1">
                    My Projects
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Resume Builder
                  </h1>
                  <p className="leading-relaxed">
                    Creating impactfull resumes made easy-experience the power
                    of a user-friendly.
                  </p>
                  <Link href={"https://github.com/malik-rimsha/Resume-Milestone-4.git"}>
                    <p className="leading-relaxed text-blue-900 hover:underline">
                      view project.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/blogs.png"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-900 mb-1">
                    my projects
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Blogs In Next.js
                  </h1>
                  <p className="leading-relaxed">
                    Exploring ideas and insights welcome to our blogs.
                    where knowledge meets innovations.
                  </p>
                  <Link href={"https://github.com/DUA-UMER/currency-converterr.git"}>
                    <p className="leading-relaxed  text-blue-900 hover:underline">
                      view project.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/custom.png"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-900 mb-1">
                    My Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Custom web pages
                  </h1>
                  <p className="leading-relaxed">
                    Custom web pages, creafted with precision and
                    creativity.Every pixel,customizes
                  </p>
                  <Link href={"https://github.com/malik-rimsha/web-in-custom.git"}>
                    <p className="leading-relaxed  text-blue-900 hover:underline">
                      view project.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/currency.png "
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-900 mb-1">
                    My Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Currency Converter
                  </h1>
                  <p className="leading-relaxed">
                    Nevigate global currencies with ease and accuracy.
                    made easy & reliable.
                  </p>
                  <Link href={"https://github.com/malik-rimsha/Currency-Cunverter.git"}>
                    <p className="leading-relaxed  text-blue-900 hover:underline">
                      view project.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/number.png"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-900 mb-1">
                    My Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Number Guessing Game
                  </h1>
                  <p className="leading-relaxed">
                    A game of wit and luck-dare to guess the number.
                    are you up for challenge.
                  </p>
                  <Link href={"https://github.com/DUA-UMER/ATM-Machine.git"}>
                    <p className="leading-relaxed  text-blue-900 hover:underline">
                      view project.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/word.png"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-900 mb-1">
                    My Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Word Counter
                  </h1>
                  <p className="leading-relaxed">
                    Count the number of words in your text. Save your text
                    and get the count instantly.
                  </p>
                  <Link href={""}>
                    <p className="leading-relaxed  text-blue-900 hover:underline">
                      view project.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects