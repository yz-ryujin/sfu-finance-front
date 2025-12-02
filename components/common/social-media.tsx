import { socialMedia } from "@/data/social-media";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import Link from "next/link";
import React from "react";

const SocialMedia: React.FC = () => {
  return (
    <>
      <ul className="flex items-center gap-5 justify-center">
        {socialMedia.map((item, i) => (
          <li key={i}>
            <Link href={item.href} target="_blank" rel="noopener">
              <Icon
                icon={item.icon}
                width={24}
                height={24}
                className="text-rc_slate"
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SocialMedia;
