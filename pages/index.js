/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/dist/client/image";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

export default function Home() {
  return (
    <div className="bg-orange-50 h-full">
      <Head>
        <title>Kelly's Portofolio</title>
        <meta name="Kelly Quintesa Personal Portofolio" />
        <link rel="icon" href="/favicon.ico" />

        {/* <!-- Tiro font --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Tiro+Gurmukhi&display=swap"
          rel="stylesheet"
        />

        {/* <!-- Monsserat  --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&family=Tiro+Gurmukhi&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header>
        <div className="relative z-20 border-b bg-orange-100">
          <div
            className="
          px-6 
          md:px-12 
          lg:container 
          lg:mx-auto 
          lg:px-6 
          lg:py-4"
          >
            <div className="flex items-center justify-between">
              <div className="relative z-20">
                <span
                  className="
                font-primary
                 text-[#DD7041]
                 font-bold
                 text-lg "
                >
                  KQ
                </span>
              </div>

              <div
                className="
              flex 
              items-center 
              justify-end 
              border-l 
              lg:border-l-0"
              >
                <input
                  type="checkbox"
                  name="hamburger"
                  id="hamburger"
                  className="peer"
                  hidden
                />
                <label
                  for="hamburger"
                  className="
                  peer-checked:hamburger 
                  block 
                  relative 
                  z-20 
                  p-6 
                  -mr-6 
                  cursor-pointer 
                  lg:hidden"
                >
                  <div
                    aria-hidden="true"
                    className="
                    m-auto 
                    h-0.5 
                    w-6 
                    rounded 
                    bg-sky-900 
                    transition 
                    duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    className="
                    m-auto 
                    mt-2 
                    h-0.5 
                    w-6 
                    rounded 
                    bg-sky-900 
                    transition 
                    duration-300"
                  ></div>
                </label>

                <div
                  className="
                peer-checked:translate-x-0 
                fixed 
                inset-0 
                w-[calc(100%-4.5rem)] 
                translate-x-[-100%] 
                bg-orange-100 
                border-r 
                shadow-xl 
                transition 
                duration-300 
                lg:border-r-0 
                lg:w-auto 
                lg:static 
                lg:shadow-none 
                lg:translate-x-0"
                >
                  <div
                    className="
                  flex 
                  flex-col 
                  h-full 
                  justify-between 
                  lg:items-center 
                  lg:flex-row"
                  >
                    <ul
                      className="
                    px-6 
                    pt-32 
                    text-gray-700 
                    space-y-8 
                    md:px-12 
                    lg:space-y-0 
                    lg:flex 
                    lg:space-x-12 
                    lg:pt-0"
                    >
                      <li>
                        <a
                          href="#"
                          className="
                          group 
                          relative"
                        >
                          <span className="relative font-primary font-semibold hover:text-[#DD7041] text-cyan-800">
                            HOME
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#about"
                          className="
                          group 
                          relative 
                         "
                        >
                          <span className="relative font-primary font-semibold hover:text-[#DD7041] text-cyan-800">
                            ABOUT
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#projects"
                          className="
                          group 
                          relative"
                        >
                          <span className="relative font-primary font-semibold hover:text-[#DD7041] text-cyan-800">
                            PROJECTS
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Page */}
      <div className="container h-full bg-orange-50">
        <div
          className=" 
      place-items-center 
      md:grid grid-cols-2
      lg:grid
      px-5
      pb-10
      "
        >
          <div id="home" className="lg:px-3 py-10 lg:py-40 ">
            <span
              className="
            font-semibold 
            font-primary
            text-[#DD7041] 
            text-xl 
            md:text-2xl 
            lg:text-2xl 
            mb-5"
            >
              Hello, I am Kelly Quintesa 👋
            </span>
            <p
              className="
              font-semibold 
              font-secondary
              mt-3 
              text-bio 
              lg:mb-20 
              mb-10         
              text-2xl 
              md:text-3xl 
              md:max-w-lg 
              lg:text-4xl
            text-[#92CAA4]"
            >
              Welcome to my cozy space <br /> on the internet
            </p>

            <a
              href="#about"
              className="
          px-8
          py-3
         bg-[#fff]
          text-[#DD7041]
          font-secondary
          font-bold
          text-xs
          rounded-md
          shadow-md
          hover:shadow-lg 
          hover:bg-[#DD7041] 
          hover:text-white 
          transition 
          duration-150 
          ease-in-out"
            >
              Get in touch
            </a>
          </div>
          <div className="lg:py-40">
            <Image
              src="/images/main.png"
              alt="main photo"
              width={600}
              height={600}
            />
          </div>

          {/* Profile */}
          <div id="about" className="lg:pb-32 ">
            {" "}
            <Image
              src="/images/profile.jpg"
              alt="profile photo"
              width={380}
              height={500}
              className="
              rounded-xl 
              max-w-[200px] 
              mx-auto 
              md:max-w-xs 
              lg:max-w-sm 
              shadow-md"
            />
          </div>
          <div className="lg:mx-20 py-5 md:ml-10 lg:pb-32">
            <span
              className="
            font-bold 
            font-secondary 
            text-sm 
            uppercase 
            text-[#DD7041]"
            >
              a bit about me
            </span>
            <p
              className="
            font-secondary 
            text-base 
            md:text-xl 
            lg:text-xl 
            text-slate-700 
            mt-3"
            >
              Hi! My name is Kelly Quintesa and i'm an undergraduate software
              engineer student of Hezhou University China, now i'm focusing to
              learn by designing and developing various websites/portals in the
              industry, along with knowledge in HTML, CSS, JavaScript, Next JS
              etc.
            </p>

            <div className="flex mx-auto justify-center text-lg pt-10">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/kelly-quintesa-4503481a1/"
                target="_blank"
                className="
                mr-4 
              hover:text-blue-800 
              hover:bg-white
                hover:rounded-lg
                text-slate-700"
              >
                <BsLinkedin />
              </a>
              {/* Github */}
              <a
                href="https://github.com/Kellyquintesa"
                target="_blank"
                className="
                mr-4 
                hover:text-white 
                hover:bg-slate-700 
                hover:rounded-full
                text-slate-700"
              >
                <BsGithub />
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/kellyquin20/"
                target="_blank"
                className="
                mr-4 
                hover:bg-pink-400 
                hover:text-white 
                hover:rounded-lg
                text-slate-700"
              >
                {" "}
                <BsInstagram />
              </a>
              {/* Gmail */}
              <a
                href="mailto:kellyquintesa11@gmail.com"
                className="mr-4 hover:text-red-600 text-slate-700"
              >
                <SiGmail />
              </a>
            </div>
          </div>
        </div>
        <span
          className="
        block 
        text-center
        uppercase 
        max-w-full  
        font-semibold 
        text-[#DD7041] 
        text-2xl 
        lg:text-4xl 
        mb-10
        font-primary
        lg:pt-40"
        >
          PROJECTS
        </span>
        <div
          id="projects"
          className="
        grid
        md:grid-cols-2 "
        >
          {/* PROJECTS DELIMEAT */}
          <div
            className="
          py-10
          lg:py-20 
          w-full
          mx-auto "
          >
            <div className="lg:px-32">
              <div className="p-1 rounded-3xl0  ">
                <Image
                  src="/images/delimeat.jpg"
                  alt="delimeat"
                  width={480}
                  height={700}
                  className="rounded-3xl "
                />
              </div>
              <br />
              <div>
                <span
                  className="
              font-bold 
              text-xs 
              text-slate-400"
                >
                  2022
                </span>
                <p
                  className="
              font-semibold
              text-xl 
              lg:text-3xl 
              text-slate-700"
                >
                  Delimeat
                </p>
                <p
                  className="
              text-base 
              pb-5 
              lg:text-lg 
              text-slate-500"
                >
                  Allowing easy ordering and delivery experience
                </p>
                <a
                  href="/delimeat"
                  target="_blank"
                  className="
                text-sm 
                lg:text-lg 
                font-semibold 
                text-[#DD7041]"
                >
                  Learn more →
                </a>
              </div>
            </div>
          </div>
          {/* PROJECTS ARTS */}
          <div
            className="
          py-10
          lg:py-20 
          w-full
          mx-auto       
         "
          >
            <div className="lg:px-32">
              <div className="p-1 rounded-3xl0  ">
                <Image
                  src="/images/art.jpg"
                  alt="delimeat"
                  width={480}
                  height={700}
                  className="rounded-3xl "
                />
              </div>
              <br />
              <div>
                <span
                  className="
              font-bold 
              text-xs 
              text-slate-400"
                >
                  2020-2022
                </span>
                <p
                  className="
              font-semibold 
              text-xl 
              lg:text-3xl 
              text-slate-700"
                >
                  Personal Art
                </p>
                <p
                  className="
              text-base 
              pb-5 
              lg:text-lg 
              text-slate-500"
                >
                  Digital Art
                </p>
                <a
                  href="/art"
                  target="_blank"
                  className="
                text-sm 
                lg:text-lg 
                font-semibold 
                text-[#DD7041]"
                >
                  Learn more →
                </a>
              </div>
            </div>
          </div>
          {/* MOVIEZ ZONE*/}
          <div
            className="
         py-10
          lg:py-20 
          w-full
          mx-auto       
         "
          >
            <div className="lg:px-32">
              <div className="p-1 rounded-3xl0  ">
                <Image
                  src="/images/moviezone.jpg"
                  alt="delimeat"
                  width={480}
                  height={700}
                  className="rounded-3xl "
                />
              </div>
              <br />
              <div>
                <span
                  className="
              font-bold 
              text-xs 
              text-slate-400"
                >
                  2022
                </span>
                <p
                  className="
              font-semibold 
              text-xl 
              lg:text-3xl 
              text-slate-700"
                >
                  Moviez Zone
                </p>
                <p
                  className="
              text-base 
              pb-5 
              lg:text-lg 
              text-slate-500"
                >
                  Movie app that showing the popular movie
                </p>
                <a
                  href="/moviez-zone"
                  target="_blank"
                  className="
                text-sm 
                lg:text-lg 
                font-semibold 
                text-[#DD7041]"
                >
                  Learn more →
                </a>
              </div>
            </div>
          </div>
          {/* UNTITLED*/}
          <div
            className="
         py-10
          lg:py-20 
          w-full
          mx-auto       
         "
          >
            <div className="lg:px-32">
              <div className="p-1 rounded-3xl0  ">
                <Image
                  src="/images/untitled.jpg"
                  alt="delimeat"
                  width={480}
                  height={700}
                  className="rounded-3xl  "
                />
              </div>
              <br />
              <div>
                <span
                  className="
              font-bold 
              text-xs 
              text-slate-400"
                >
                  2022
                </span>
                <p
                  className="
              font-semibold 
              text-xl 
              lg:text-3xl 
              text-slate-700"
                >
                  Untitled
                </p>
                <p
                  className="
              text-base 
              pb-5 
              lg:text-lg 
              text-slate-500"
                >
                  This projects will coming soon
                </p>
                <a
                  href="/"
                  // target="_blank"
                  className="
                text-sm 
                lg:text-lg 
                font-semibold 
                text-[#DD7041]"
                >
                  Learn more →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
