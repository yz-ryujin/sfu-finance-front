import React from "react";
import SocialMedia from "../common/social-media";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="bg-white text-base-content text-gray-500 rounded-xl">
        <div className="mx-auto flex flex-col-reverse md:flex-row flex-wrap items-center justify-center md:justify-between gap-4 px-12 py-5 rounded-xl">
          <p className="text-center md:text-start">
            © {currentYear} SFU Finance. Todos os direitos reservados.
          </p>
          <SocialMedia />
        </div>
      </footer>
    </>
  );
};

export default Footer;
