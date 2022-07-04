import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Image from "next/dist/client/image";

export default function moviezone() {
  return (
    <div className="h-full bg-[#252a2f]">
      <div
        className="
      container
      bg-[#252a2f]
      pt-6
      px-10
      lg:px-72
      pb-20"
      >
        <a href="/">
          <MdOutlineArrowBackIosNew className="text-2xl   text-[#FFF4D6]" />
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
           text-[#FFF4D6]
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
      text-[#FFF4D6]
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
      text-[#FFF4D6]"
        >
          Website {">"}
        </a>

        {/* PHOTOS */}
        <div className="grid justify-items-center pt-10">
          <Image
            src="/images/Group3.jpg"
            alt="img1"
            width={950}
            height={600}
            className="rounded-xl"
          />
          <br />
          <Image
            src="/images/Group4.jpg"
            alt="img2"
            width={950}
            height={600}
            className="rounded-xl"
          />
          <br />
          <Image
            src="/images/Group5.png"
            alt="img3"
            width={950}
            height={600}
            className="rounded-xl"
          />
          <br />
          <Image
            src="/images/Group6.jpg"
            alt="img4"
            width={950}
            height={600}
            className="rounded-xl"
          />
          <br />
          <Image
            src="/images/Group7.jpg"
            alt="img5"
            width={950}
            height={600}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
