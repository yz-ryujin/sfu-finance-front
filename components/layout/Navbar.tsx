"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { menuNavBar } from "@/data/menu-itens";

const Navbar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="md:block hidden">
        <div className="bg-gray-200 py-6.5 flex justify-center text-blue-800 ">
          <Icon icon="material-symbols:menu-rounded" width={24} height={24} />
        </div>
        <div
          className={`min-w-[77px] transition-all duration-500 ease h-full bg-blue-800 px-3.5 container-lg2 scrollbarStyle sticky top-5 z-10`}>
        
          <div className="relative">
            <div className="relative w-full pb-6  z-20 text-center">
              {/* <ModeToggle /> */}
            </div>
            <div className="overflow-y-auto overflow-x-hidden flex flex-col items-center gap-6 h-[calc(100vh-9rem)]">
                {menuNavBar.map((item, i) => (
                  <Link key={i} href={item.href}>
                        <div className={`menu ${
                            activeIndex === i
                              ? "bg-white text-blue-800"
                              : "text-rc_slate hover:text-blue-800 hover:bg-white"
                          }`}
                          onClick={() => setActiveIndex(i)}>
                          <Icon icon={item.icon} width={24} height={24} />
                        </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
