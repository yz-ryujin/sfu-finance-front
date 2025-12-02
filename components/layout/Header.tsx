import { Icon } from "@iconify-icon/react";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-12 py-3.5 bg-white shadow-md">
      <div className="text-2xl font-bold text-gray-800">SFU Finance</div>

      <div className="flex items-center gap-4">
        <button className="relative text-gray-600 hover:text-gray-800 transition">
          <Icon icon="mdi:bell-outline" width="24" />
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex flex-col">
            <span className="font-semibold text-gray-800">
              Franklin William
            </span>
            <span className="text-sm text-gray-500">Administrador</span>
          </div>

          <Image
            width={60}
            height={50}
            src="/assets/img/profile.jpg"
            alt="Usuário"
            className="rounded-full"
          />

          
      </div>
    </header>
  );
}
