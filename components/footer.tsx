import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Company Information", href: "/company-information" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Blog", href: "/blog" },
    { label: "Fraud Awareness", href: "/fraud-awareness" },
    { label: "Report a Security Bug", href: "/report-security-bug" },
    { label: "Investor Relations", href: "/investor-relations" },
    { label: "Careers", href: "/careers" },
    { label: "Western Union Foundation", href: "/foundation" },
    { label: "Intellectual Property", href: "/intellectual-property" },
    { label: "Online Privacy Statement", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Cookie Information", href: "/cookie-information" },
    { label: "Cookie Settings", href: "/cookie-settings" },
    { label: "Site Map", href: "/site-map" },
  ];

  return (
    <div className="w-full items-center flex justify-center">
      <div className="  p-5  lg:py-5 flex flex-col items-center  gap-10 w-full md:w-3/5 ">
        <div className="flex gap-2 flex-wrap justify-center ">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.label}
              className="text-[10px]  font-normal"
            >
              {link.label} {"|"}
            </Link>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row  gap-4 justify-center items-center ">
          <p className="text-[10px] text-center ">
            Services may be provided by Western Union Financial Services, Inc.
            NMLS# 906983 and/or Western Union International Services, LLC NMLS#
            906985, which are licensed as Money Transmitters by the New York
            State Department of Financial Services. See terms and conditions for
            details.
          </p>
          <div className="flex flex-col  justify-center items-center  w-auto gap-4 ">
            <p className="inline-block font-semibold">Follow us on</p>
            <div className="flex items-center gap-4 ">
              <Facebook color="#5091B5" />
              <Youtube color="#5091B5" />
              <Instagram color="#5091B5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
