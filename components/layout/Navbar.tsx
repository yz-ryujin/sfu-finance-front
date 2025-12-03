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

        <div className="group">

          <div
            className="
              relative
              min-w-[77px]
              w-[77px]
              group-hover:w-48
              transition-all duration-300 ease-in-out
              h-[100vh] bg-blue-800 px-3.5
              overflow-hidden
              sticky
            "
          >
            <div className="flex flex-col justify-between gap-6 mt-19">
              {menuNavBar.map((item, i) => (
                <Link key={i} href={`${item.href}`}>
                  <div
                    className={`menu
                      ${
                        activeIndex === i
                          ? "bg-white text-blue-800"
                          : "text-rc_slate hover:text-blue-800 hover:bg-white"
                      }
                    `}
                    onClick={() => setActiveIndex(i)}
                  >
                    <Icon icon={item.icon} width={24} height={24} />

                    <span
                      className="
                        opacity-0 
                        group-hover:opacity-100 
                        transition-opacity duration-200
                        whitespace-nowrap
                      "
                    >
                      {item.title}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div
              className="
                absolute bottom-0 left-0
                w-full
                h-24
                bg-white
                shadow-lg
                flex items-center justify-center
              "
            >
              <span className="text-blue-800 font-semibold">INFO</span>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
