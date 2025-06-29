import { Link } from "@/i18n.config";
import { images } from "@/lib/data/images";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClock4, LuInstagram } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  const translation = useTranslations("footer");

  return (
    <footer className="w-full bg-secondary-background px-5 pb-5 pt-12 text-gray-400">
      <div className="flex-center mx-auto w-[70%] flex-wrap items-start justify-between gap-6 md:gap-14 [&>div>span]:font-bold [&>div>span]:text-primary-background [&>div]:font-medium">
        <div className="flex-center flex-col items-start gap-4 [&>a:active]:text-primary-background sm:[&>a:focus]:text-secondary-foreground sm:[&>a:hover]:text-secondary-foreground [&>a]:transition-all [&>a]:duration-300">
          <span>{translation("navigation")}</span>
          <Link href={"/#inspiring experiences"}>
            {translation("inspiring experiences")}
          </Link>
          <Link href={"/#home"}>{translation("home")}</Link>
          <Link href={"/#medical team"}>{translation("medical team")}</Link>
          <Link href={"/#book now"}>{translation("book now")}</Link>
        </div>

        <div className="flex-center flex-col items-start gap-4 [&>a:active]:text-primary-background sm:[&>a:focus]:text-secondary-foreground sm:[&>a:hover]:text-secondary-foreground [&>a]:transition-all [&>a]:duration-300">
          <span>{translation("navigation")}</span>
          <Link href={"/#inspiring experiences"}>
            {translation("inspiring experiences")}
          </Link>
          <Link href={"/#home"}>{translation("home")}</Link>
        </div>

        <div className="flex-center flex-col items-start gap-4 [&>a:active]:text-primary-background sm:[&>a:focus]:text-secondary-foreground sm:[&>a:hover]:text-secondary-foreground [&>a]:transition-all [&>a]:duration-300">
          <span>{translation("navigation")}</span>
          <Link href={"/#benefits of treatment"}>
            {translation("benefits of treatment")}
          </Link>
          <Link href={"/#Frequently Asked Questions"}>
            {translation("Frequently Asked Questions")}
          </Link>
          <Link href={"/#contact"}>{translation("contact us")}</Link>
          <Link href={"/terms"}>{translation("terms & conditions")}</Link>
          <Link href={"/privacy"}>{translation("privacy policy")}</Link>
          <Link href={"/privacy"}>{translation("privacy policy")}</Link>
        </div>

        <div className="flex-center mt-10 flex-col items-start gap-4 [&>a:active]:text-primary-background sm:[&>a:focus]:text-secondary-foreground sm:[&>a:hover]:text-secondary-foreground [&>a]:transition-all [&>a]:duration-300">
          <Link href={"/#benefits of treatment"}>
            {translation("benefits of treatment")}
          </Link>
          <Link href={"/#Frequently Asked Questions"}>
            {translation("Frequently Asked Questions")}
          </Link>
          <Link href={"/#contact"}>{translation("contact us")}</Link>
          <Link href={"/terms"}>{translation("terms & conditions")}</Link>
          <Link href={"/privacy"}>{translation("privacy policy")}</Link>
          <Link href={"/privacy"}>{translation("privacy policy")}</Link>
        </div>

        <div className="flex-center flex-col items-start gap-4 [&>a:active]:text-primary-background sm:[&>a:focus]:text-secondary-foreground sm:[&>a:hover]:text-secondary-foreground [&>a]:transition-all [&>a]:duration-300">
          <span>{translation("navigation")}</span>
          <Link href={"/#benefits of treatment"}>
            {translation("benefits of treatment")}
          </Link>
          <Link href={"/#Frequently Asked Questions"}>
            {translation("Frequently Asked Questions")}
          </Link>
          <Link href={"/#contact"}>{translation("contact us")}</Link>
          <Link href={"/terms"}>{translation("terms & conditions")}</Link>
          <Link href={"/privacy"}>{translation("privacy policy")}</Link>
          <Link href={"/privacy"}>{translation("privacy policy")}</Link>
        </div>
      </div>

      <div className="mx-auto mb-6 mt-10 h-[0.1rem] w-full max-w-[72rem] rounded-full bg-gray-500"></div>

      <div className="flex-center width-[70%] mx-auto h-[70px] justify-center gap-5 bg-secondary-background text-white xl:gap-10 2xl:gap-20">
        <div className="flex-center gap-3 xl:gap-5 [&_svg]:h-6 [&_svg]:w-6 [&_svg]:cursor-pointer [&_svg]:text-primary-foreground [&_svg]:transition [&_svg]:duration-300">
          <a href="https://facebook.com/BestClinicPS" target="_blank">
            <FaFacebook className="hover:text-secondary-foreground" />
          </a>
          <a href="https://wa.me/970598070808?text=" target="_blank">
            <FaWhatsapp className="hover:text-secondary-foreground" />
          </a>
          <a href="https://www.instagram.com/bestclinicps/" target="_blank">
            <LuInstagram className="hover:text-secondary-foreground" />
          </a>
        </div>

        <div className="flex-center gap-2">
          <LuClock4 className="h-auto w-5 text-primary-background xl:w-6" />

          <div className="flex-center flex-col items-start leading-5">
            <div>
              <span className="">
                {translation("saturday")} - {translation("thursday")}:
              </span>
              <span className="ms-1 font-medium">
                6:30{translation("am")} - 6:00{translation("pm")}
              </span>
            </div>
          </div>
        </div>

        <div className="h-12 w-[0.1rem] bg-gray-500"></div>

        <div className="flex-center gap-2">
          <FiPhone className="h-auto w-5 text-primary-background xl:w-6" />

          <div className="flex-center flex-col items-start leading-5" dir="ltr">
            <a href="tel:+970598070808" className="cursor-pointer">
              <span>052-249-9761</span>
            </a>
            <a href="tel:+972022921935" className="cursor-pointer">
              <span>02-6440518</span>
            </a>
          </div>
        </div>

        <div className="flex h-full items-center justify-center">
          <Link href={"/"}>
            <Image
              src={images.alphaToolsLogo}
              alt="logo"
              className="h-auto w-[7rem] xs:max-w-[7rem]"
            />
          </Link>
        </div>
      </div>

      <div className="flex-center mt-8">
        <p className="text-sm font-semibold text-[#ffffff] xs:text-base">
          {translation("best Clinic rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
