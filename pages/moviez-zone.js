import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Image from "next/dist/client/image";

export default function moviezone() {
  return (
    <div className="h-full bg-[#2e364d]">
      <div
        className="
      container
      bg-[#2e364d]
      pt-6
      px-10
      lg:px-72
      pb-20"
      >
        <a href="/">
          <MdOutlineArrowBackIosNew className="text-2xl   text-[#fff7f7]" />
        </a>
        <br />
        <div className="text-center pb-10">
          <p
            className="
          w-full 
          text-2xl 
          lg:mt-14 
          lg:text-4xl 
          font-bold 
          text-center
           text-[#fff7f7]
          font-primary"
          >
            Moviez Zone
          </p>
          <p
            className="
          w-full 
          text-xs 
          lg:text-base 
          text-slate-500
          font-secondary"
          >
            UI, Product Design, Next.JS
          </p>
        </div>
        <span
          className="
        text-xl 
        font-bold 
        lg:text-4xl 
        w-full 
      text-[#fff7f7]
        font-primary"
        >
          Gallery
        </span>
        <br />
        <a
          href="https://moviez-zone.netlify.app/"
          target="_blank"
          className="
        grid 
        justify-items-end
        font-semibold 
        font-secondary 
      text-[#fff7f7]"
        >
          Website {">"}
        </a>

        {/* PHOTOS */}
        <div className="grid justify-items-center pt-10">
          <Image
            src="/images/moviez1.svg"
            alt="img1"
            width={950}
            height={600}
          />
          <br />
          <Image
            src="/images/moviez2.svg"
            alt="img2"
            width={950}
            height={600}
          />
          <br />
          <Image
            src="/images/moviez3.svg"
            alt="img3"
            width={950}
            height={600}
          />
          <br />
          <Image
            src="/images/moviez4.svg"
            alt="img4"
            width={950}
            height={600}
          />
          <br />
          <Image
            src="/images/moviez5.svg"
            alt="img5"
            width={950}
            height={600}
          />
          <br />
          <Image
            src="/images/moviez6.svg"
            alt="img5"
            width={950}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}
