import React from "react";
import Image from "next/image";
import MobtechLogo from "../../../public/svg/mobtechLogo.svg";

export default function SignUp() {
  return (
    <div className="bg-[#191D20] px-8 pt-9">
      <div className="w-full flex-grow flex items-center">
        <button className="w-[100px] h-[100px] rounded-full [background:linear-gradient(45deg,_#767D8D_0%,_#767D8D_50%,_#393B42_50%,_#393B42_100%)] mix-blend-soft-light">
          ←
        </button>
        <div className="flex items-center mx-auto">
          <p className="text-[34.5px] text-white leading-[59.6px] font-semibold">
            MOBTECH
          </p>
          <Image alt="" src={MobtechLogo} width={160} height={102} />
          <p className="text-[34.5px] text-white leading-[59.6px] font-semibold">
            SYNERGIES
          </p>
        </div>
        <div></div>
      </div>

      <div className="grid mx-auto w-full max-w-[741px] px-[35px] py-12 bg-black rounded-[58px]">
        <h1 className="text-[37.45px] text-white leading-[64.7px] font-semibold">
          SIGN UP TO OUR NEWSLETTER
        </h1>
      </div>
    </div>
  );
}