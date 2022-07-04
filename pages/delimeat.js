import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Image from "next/dist/client/image";

export default function delimeat() {
  return (
    <div className="h-full bg-[#fffbe8]">
      <div
        className="
      container
      bg-[#fffbe8]
      pt-6
      px-10
      lg:px-72
      pb-20"
      >
        <a href="/">
          <MdOutlineArrowBackIosNew className="text-2xl text-slate-700" />
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
          text-[#DD7041]
          font-primary"
          >
            DELIMEAT
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
        text-slate-700 
        font-primary"
        >
          Gallery
        </span>
        <br />
        <a
          href="https://delimeat.netlify.app/"
          target="_blank"
          className="
        grid 
        justify-items-end
       font-semibold 
       font-secondary 
       text-slate-600"
        >
          Website {">"}
        </a>

        {/* PHOTOS */}
        <div className="grid justify-items-center pt-10">
          <Image
            src="/images/Group3.svg"
            alt="img1"
            width={950}
            height={600}
            className="rounded-xl"
          />
          <br />
          <Image
            src="/images/Group4.svg"
            alt="img2"
            width={950}
            height={600}
            className="rounded-xl"
          />
          <br />
          <Image
            src="/images/Group5.svg"
            alt="img3"
            width={950}
            height={600}
            className="rounded-xl"
          />
          <br />
          <Image
            src="/images/Group6.svg"
            alt="img4"
            width={950}
            height={600}
            className="rounded-xl"
          />
          <br />
          <Image
            src="/images/Group7.svg"
            alt="img5"
            width={950}
            height={600}
            className="rounded-xl"
          />
          <br />
          <Image
            src="/images/Group8.svg"
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
