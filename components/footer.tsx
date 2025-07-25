import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const navlinks = [
    { label: "Accueil", href: "/" },
    { label: "Informations sur la société", href: "/informations-societe" },
    { label: "À propos de nous", href: "/a-propos" },
    { label: "Contactez-nous", href: "/contact" },
    { label: "Blog", href: "/blog" },
    { label: "Sensibilisation aux fraudes", href: "/fraude" },
    { label: "Signaler un bogue lié à la sécurité", href: "/bug-securite" },
    { label: "Relations avec les investisseurs", href: "/investisseurs" },
    { label: "Carrières", href: "/carrieres" },
    { label: "Fondation WU", href: "/fondation-wu" },
    { label: "Propriété intellectuelle", href: "/propriete-intellectuelle" },
    {
      label: "Déclaration de confidentialité en ligne",
      href: "/confidentialite",
    },
    { label: "Conditions générales", href: "/conditions" },
    { label: "Informations sur les cookies", href: "/cookies" },
    { label: "Paramètres des cookies", href: "/parametres-cookies" },
    { label: "Plan du site", href: "/plan-site" },
  ];

  return (
    <div className="w-full items-center flex justify-center">
      <div className="  p-5  lg:py-5 flex flex-col items-center  gap-10 w-full md:w-3/5 ">
        <div className="flex gap-2 flex-wrap justify-center ">
          {navlinks.map((link) => (
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
            © 2025 Western Union Holdings, Inc. Tous droits réservés Le service
            en ligne de Western Union est proposé par Western Union
            International Bank GmbH et Western Union International Limited.
            Western Union International Bank GmbH, exerçant sous le nom de
            Western Union International Bank, est titulaire d’une licence
            délivrée par l’autorité autrichienne de supervision financière (FMA)
            sise en Autriche.
          </p>
          <div className="flex flex-col  justify-center items-center  w-auto gap-4 ">
            <p className="inline-block font-semibold">Suivez-nous sur</p>
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
