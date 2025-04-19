"use client";
import { useState } from "react";
import { BiMessageRoundedDots } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed bottom-6 end-6 z-50 h-[3.375rem] w-[3.375rem] rounded-full [&_svg]:h-auto [&_svg]:text-white [&_svg]:transition-all [&_svg]:duration-300">
      <div
        className={`${isOpen ? "rotate-[360deg]" : ""} flex-center h-full w-full cursor-pointer rounded-full bg-secondary-background shadow-[0_3px_6px_rgb(0_0_0_25%)] transition-all duration-500 [&>svg]:absolute [&_svg]:w-9`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <IoCloseOutline
          className={`${isOpen ? "opacity-100" : "transi opacity-0"}`}
        />
        <BiMessageRoundedDots
          className={`${isOpen ? "opacity-0" : "opacity-100"}`}
        />
      </div>

      <a
        href="https://m.me/BestClinicPS"
        target="_blank"
        className={`${isOpen ? "-translate-y-16 opacity-100" : "opacity-0"} flex-center absolute inset-0 -z-10 h-[3.375rem] w-[3.375rem] cursor-pointer rounded-full bg-[#046bd2] transition-all duration-500 [&>svg]:w-8`}
      >
        <FaFacebookMessenger />
      </a>

      <a
        href="https://www.instagram.com/bestclinicps/"
        target="_blank"
        className={`${isOpen ? "-translate-y-[calc(4rem+3.375rem+0.625rem)] opacity-100" : "opacity-0"} flex-center bg-gradient-to-[45deg] absolute inset-0 -z-10 h-[3.375rem] w-[3.375rem] cursor-pointer rounded-full transition-all duration-500 [&>svg]:w-8`}
        style={{
          backgroundImage:
            "linear-gradient(45deg, #fdf497 6%, #fd5949, #d6249f 50%, #285AEB)",
        }}
      >
        <LuInstagram />
      </a>

      <a
        href="https://wa.me/970598070808?text="
        target="_blank"
        className={`${isOpen ? "-translate-y-[calc(8rem+3.375rem+0.625rem)] opacity-100" : "opacity-0"} flex-center bg-gradient-to-[45deg] absolute inset-0 -z-10 h-[3.375rem] w-[3.375rem] cursor-pointer rounded-full bg-[#49E670] transition-all duration-500 [&>svg]:w-8`}
      >
        <FaWhatsapp />
      </a>

      <a
        href="tel:+970598070808"
        className={`${isOpen ? "-translate-y-[calc(12rem+3.375rem+0.625rem)] opacity-100" : "opacity-0"} flex-center bg-gradient-to-[45deg] absolute inset-0 -z-10 h-[3.375rem] w-[3.375rem] cursor-pointer rounded-full bg-[#03E78B] transition-all duration-500 [&>svg]:w-8`}
      >
        <FiPhone />
      </a>
    </div>
  );
};

export default Chat;
