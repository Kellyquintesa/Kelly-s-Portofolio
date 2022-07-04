/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/dist/client/image";

export default function Home() {
  return (
    <div className="bg-orange-50 h-full px-5 ">
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
          <div className="lg:px-3 py-10 lg:py-40">
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

            <button
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
            </button>
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
          <div className="lg:pb-32 ">
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
          <div className="lg:mx-20 py-5 md:ml-10">
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
        font-primary"
        >
          PROJECTS
        </span>
        <div
          className="
        grid
        md:grid-cols-2"
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
        </div>
      </div>
    </div>
  );
}
