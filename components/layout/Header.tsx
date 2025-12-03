import { Icon } from "@iconify-icon/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-5 py-3 md:px-12 md:py-3.5 bg-white shadow-md z-20">
      <div className="">
        <Link href="#">
          <Image
            alt="Logotipo Unidesc"
            src="/assets/img/logo/unidesc_logo.svg"
            height={20}
            width={180}
          />
        </Link>
      </div>

      <div className="flex items-center space-x-6">
        <div className="hidden md:flex gap-6">
          <div className="flex flex-col justify-center">
            <button className="relative text-gray-600 hover:text-gray-800 transition cursor-pointer group">
              <Icon icon="mdi:bell-outline" width="24" />
              <span
                className="absolute -top-2 -right-2 inline-flex items-center justify-center 
                 w-4.5 h-4.5 bg-red-500 text-white text-xs font-bold rounded-full transition-transform duration-300 ease-in-out group-hover:scale-[1.06] "
              >
                2
              </span>
            </button>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-semibold text-gray-800 text-lefttext-left">
              Franklin William
            </span>
            <span className="text-sm text-gray-500">Administrador</span>
          </div>
        </div>

        <div className="cursor-pointer">
          <Image
            width={50}
            height={50}
            src="/assets/img/profile/profile.png"
            alt="Usuário"
            className="rounded-full w-11 h-11"
          />
        </div>
      </div>
    </header>
  );
}
