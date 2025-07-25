import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex  justify-evenly items-center bg-[#333] text-white h-15  ">
      <Image
        src="https://www.westernunion.com/content/dam/wu/logo/logo.wu.big.svg"
        width={200}
        height={200}
        alt="logo"
      />
      <div className=" hidden sm:flex justify-center items-center gap-5  ">
        <Link href="https://www.westernunion.com/web/send-money/start ">
          Envoyer de l&apos;argent
        </Link>
        <Link href="https://www.westernunion.com/web/send-money/start ">
          Recevoir de l&apos;argent
        </Link>
        <Link
          href="https://www.westernunion.com/web/send-money/start "
          className="bg-blue-950  px-1"
        >
          Nouveau
        </Link>

        <div className="border-x-1 p-1 h-full ">
          <AlignJustify className="size-10" />
        </div>
        <Link
          href="https://www.westernunion.com/web/send-money/start "
          className="border-1 hover:bg-amber-200 transition-all duration-100 ease-in px-1"
        >
          Se connecter
        </Link>
        <Link href="https://www.westernunion.com/web/send-money/start ">
          S&apos;inscrire
        </Link>
      </div>
      <div className=" sm:hidden border px-2 py-1 border-[#EFE2B5] text-[#EFE2B5]">
        <p>Menu</p>
      </div>
    </div>
  );
};

export default Header;
