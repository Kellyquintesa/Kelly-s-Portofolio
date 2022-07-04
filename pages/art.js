import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Image from "next/dist/client/image";

export default function art() {
  return (
    <div className="h-full bg-[#070831]">
      <div
        className="
      container
      bg-[#070831]
      pt-6
      px-10
      lg:px-72
      pb-20"
      >
        <a href="/">
          <MdOutlineArrowBackIosNew className="text-2xl text-[#FFF4D6]" />
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
        text-[#FFF4D6]
        font-primary"
        >
          Gallery
        </span>
        <br />

        {/* PHOTOS */}
        <div className="grid justify-items-center pt-10">
          <Image
            src="/images/Instagram post - 1.png"
            alt="img1"
            width={950}
            height={950}
            className="rounded-xl"
          />
          <br />
          <Image
            src="/images/Instagram post - 2.png"
            alt="img2"
            width={950}
            height={950}
            className="rounded-xl"
          />
          <br />
          <Image
            src="/images/Instagram post - 3.png"
            alt="img3"
            width={950}
            height={950}
            className="rounded-xl"
          />
          <br />
          <Image
            src="/images/Instagram post - 4.png"
            alt="img4"
            width={950}
            height={950}
            className="rounded-xl"
          />
          <br />
          <Image
            src="/images/Instagram post - 5.png"
            alt="img5"
            width={950}
            height={750}
            className="rounded-xl"
          />
          <br />
          <Image
            src="/images/Instagram post - 6.png"
            alt="img6"
            width={950}
            height={950}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
