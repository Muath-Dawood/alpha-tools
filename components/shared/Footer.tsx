import { Link } from "@/i18n.config";
import { images } from "@/lib/data/images";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClock4, LuInstagram } from "react-icons/lu";
import GetInTouch from "./GetInTouch";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  const translation = useTranslations("footer");

  return (
    <footer className="mt-32 w-full max-w-[1400px] bg-[#ECF9F8] px-5 pb-5 pt-12">
      <GetInTouch />

      <div className="mt-10 w-full">
        <div className="flex-center w-full flex-col gap-11 lg:flex-row">
          <div className="flex h-full items-center justify-center">
            <Link href={"/"}>
              <Image
                src={images.logo}
                alt="logo"
                className="h-auto w-[30.375rem] xs:max-w-[20.375rem]"
              />
            </Link>
          </div>

          <div className="flex-center flex-wrap items-start justify-start gap-6 md:gap-14 [&>div>span]:font-bold [&>div>span]:text-primary-background [&>div]:font-medium">
            <div className="flex-center max-w-[25rem] flex-col items-start gap-4">
              <span>{translation("contact")}</span>
              <div className="flex flex-col items-start justify-start gap-4">
                {/* phones */}
                <div
                  className="flex-center flex items-center justify-center gap-1"
                  dir="rtl"
                >
                  <FiPhone className="h-auto w-[1.5625rem] text-primary-background" />
                  <div
                    className="flex-center flex-wrap items-start leading-5"
                    dir="ltr"
                  >
                    <a href="tel:+970598070808" className="cursor-pointer">
                      <span>059-807-0808</span>
                    </a>
                    <span className="mx-1">/</span>
                    <a href="tel:+972022921935" className="cursor-pointer">
                      <span>02-2921935</span>
                    </a>
                  </div>
                </div>

                {/* email */}
                <div className="flex-center flex items-center justify-center gap-1">
                  <MdOutlineEmail className="h-auto w-[1.5625rem] text-primary-background" />
                  <div className="flex-center flex-col items-start leading-5">
                    <a
                      href="mailto:info@bestclinic24.com"
                      className="cursor-pointer"
                    >
                      <span>info@bestclinic24.com</span>
                    </a>
                  </div>
                </div>

                {/* work time */}
                <div className="flex-center flex items-center justify-center gap-1">
                  <LuClock4 className="h-auto w-[1.5625rem] text-primary-background" />
                  <div className="flex-center flex-wrap justify-start leading-5">
                    <span>
                      {translation("saturday")} - {translation("thursday")}:
                    </span>
                    <span className="ms-1 font-medium">
                      9:00{translation("am")} - 4:00{translation("pm")}
                    </span>
                  </div>
                </div>

                {/* loaction */}
                <div className="flex-center flex items-center justify-center gap-1">
                  <HiOutlineLocationMarker className="h-auto w-[1.5625rem] text-primary-background" />
                  <div className="flex-center flex-col items-start font-medium leading-5">
                    <span>
                      {translation(
                        "Ramallah - Al-Manara - Roundabout - City Center",
                      )}{" "}
                      ,
                    </span>
                    <span>{translation("Building - 5th Floor")}</span>
                  </div>
                </div>

                {/* social media */}
                <div className="flex-center flex flex-wrap items-center justify-center gap-3 [&_svg]:h-6 [&_svg]:w-6 [&_svg]:cursor-pointer [&_svg]:text-primary-background [&_svg]:transition [&_svg]:duration-300">
                  <a href="https://facebook.com/BestClinicPS" target="_blank">
                    <FaFacebook className="hover:text-secondary-background" />
                  </a>
                  <a href="https://wa.me/970598070808?text=" target="_blank">
                    <FaWhatsapp className="hover:text-secondary-background" />
                  </a>
                  <a
                    href="https://www.instagram.com/bestclinicps/"
                    target="_blank"
                  >
                    <LuInstagram className="hover:text-secondary-background" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex-center flex-col items-start gap-4 [&>a:active]:text-primary-background sm:[&>a:focus]:text-secondary-background sm:[&>a:hover]:text-secondary-background [&>a]:transition-all [&>a]:duration-300">
              <span>{translation("navigation")}</span>
              <Link href={"/#inspiring experiences"}>
                {translation("inspiring experiences")}
              </Link>
              <Link href={"/#home"}>{translation("home")}</Link>
              <Link href={"/#medical team"}>{translation("medical team")}</Link>
              <Link href={"/#book now"}>{translation("book now")}</Link>
              <Link href={"/#patient testimonials"}>
                {translation("patient testimonials")}
              </Link>
              <Link href={"/#about us"}>{translation("about us")}</Link>
            </div>

            <div className="flex-center flex-col items-start gap-4 [&>a:active]:text-primary-background sm:[&>a:focus]:text-secondary-background sm:[&>a:hover]:text-secondary-background [&>a]:transition-all [&>a]:duration-300">
              <span>{translation("navigation")}</span>
              <Link href={"/#benefits of treatment"}>
                {translation("benefits of treatment")}
              </Link>
              <Link href={"/#Frequently Asked Questions"}>
                {translation("Frequently Asked Questions")}
              </Link>
              <Link href={"/#contact"}>{translation("contact us")}</Link>
              <span>{translation("legal")}</span>
              <Link href={"/terms"}>{translation("terms & conditions")}</Link>
              <Link href={"/privacy"}>{translation("privacy policy")}</Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mb-6 mt-10 h-[0.125rem] w-full max-w-[71.875rem] rounded-full bg-primary-background"></div>

        <div className="flex-center">
          <p className="text-sm font-semibold text-[#000000] xs:text-base">
            {translation("best Clinic rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
