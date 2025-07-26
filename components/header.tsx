import {
  AlignJustify,
  CircleUserRound,
  CreditCard,
  LocateFixed,
  MailQuestionMark,
  MapPinCheck,
  Tickets,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const itemsMenu = [
    {
      name: "Send money",
      href: "/",
      icone: <Tickets color="#EFE2B5" />,
    },
    {
      name: "Track transfer",
      href: "/",
      icone: <LocateFixed color="#EFE2B5" />,
    },
    {
      name: "Find locations",
      href: "/",
      icone: <MapPinCheck color="#EFE2B5" />,
    },
    {
      name: "Customer support",
      href: "/",
      icone: <MailQuestionMark color="#EFE2B5" />,
    },
    {
      name: "Estimate Price",
      href: "/",
      icone: <CreditCard color="#EFE2B5" />,
    },
    {
      name: "Contact us",
      href: "/",
      icone: <CircleUserRound color="#EFE2B5" />,
    },
  ];

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
          Send money
        </Link>
        <Link href="https://www.westernunion.com/web/send-money/start ">
          Track transfer
        </Link>
        <Link href="https://www.westernunion.com/web/send-money/start ">
          Pay bills
        </Link>
        <Link href="https://www.westernunion.com/web/send-money/start ">
          Help
        </Link>

        <div className="border-x-1 p-1 h-full ">
          <AlignJustify className="size-10" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className=" border px-2 py-1 border-[#EFE2B5] text-[#EFE2B5]">
            Menu
          </DropdownMenuTrigger>
          <DropdownMenuContent className="  bg-[#333] flex flex-col justify-center items-center  w-[300px]">
            <div className=" w-full flex justify-evenly  text-white font-light p-5">
              <p className="border-r-1 w-1/2 text-center">Login</p>
              <p className="border-l-1 w-1/2 text-center">Sign Up</p>
            </div>
            {itemsMenu.map((item) => (
              <Link
                key={item.name}
                className="text-[#EFE2B5]   flex flex-row w-full px-5 py-1 justify-center items-center gap-5  text-xs cursor-pointer"
                href={item.href}
              >
                {item.icone}
                <span className="border-gray-500 border-b-1 w-full py-2">
                  {item.name}
                </span>
              </Link>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Link
          href="https://www.westernunion.com/web/send-money/start "
          className="border-1 hover:bg-amber-200 transition-all duration-100 ease-in px-1"
        >
          Login
        </Link>
        <Link href="https://www.westernunion.com/web/send-money/start ">
          Register
        </Link>
      </div>
      <DropdownMenu>
          <DropdownMenuTrigger className="  sm:hidden border px-2 py-1 border-[#EFE2B5] text-[#EFE2B5]">
            Menu
          </DropdownMenuTrigger>
          <DropdownMenuContent className="  bg-[#333] flex flex-col justify-center items-center  w-[300px] border-none">
            <div className=" w-full flex justify-evenly  text-white font-light p-5">
              <p className="border-r-1 w-1/2 text-center">Login</p>
              <p className="border-l-1 w-1/2 text-center">Sign Up</p>
            </div>
            {itemsMenu.map((item) => (
              <Link
                key={item.name}
                className="text-[#EFE2B5]   flex flex-row w-full px-5 py-1 justify-center items-center gap-5  text-xs cursor-pointer"
                href={item.href}
              >
                {item.icone}
                <span className="border-gray-500 border-b-1 w-full py-2">
                  {item.name}
                </span>
              </Link>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
    </div>
  );
};

export default Header;
