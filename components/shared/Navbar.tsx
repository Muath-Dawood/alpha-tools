"use client";
import { Link, Locale, locales, usePathname, useRouter } from "@/i18n.config";
import { images } from "@/lib/data/images";
import { links } from "@/lib/data/navLinks";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClock4, LuInstagram } from "react-icons/lu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AiOutlineGlobal } from "react-icons/ai";
import useTextDirection from "@/hooks/useTextDirection";

const Navbar = () => {
  const translation = useTranslations("navbar");
  const pathName = usePathname();
  const curentLocale = useLocale() as Locale;
  const router = useRouter();
  const dir = useTextDirection();

  return (
    <nav className="sticky -top-20 z-[100] hidden w-full text-primary-foreground px-5 lg:block 2xl:px-0">
      <div className="flex-center h-[70px] justify-center gap-3 xl:gap-5 2xl:gap-10 bg-secondary-background">

        <div className="flex-center gap-2">
          <HiOutlineLocationMarker className="h-auto w-5 text-primary-background xl:w-6" />

          <div className="flex-center flex-col items-start leading-5">
            <span>
              {translation("Jerusalem - Wadi ElHommos - Almentar")}
            </span>
            <span>{translation("near the concrete factory")}</span>
          </div>
        </div>

        <div className="h-12 w-[0.125rem] bg-[#000000]"></div>

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

        <div className="h-12 w-[0.125rem] bg-[#000000]"></div>

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

        <div className="h-12 w-[0.125rem] bg-[#000000]"></div>

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
      </div>

      <div className="mt-0 h-[75px] w-full rounded-[0rem] bg-primary-background">
        <div className="flex-center mx-auto h-full w-full max-w-[76rem] justify-between px-8">
          <Link href={"/"}>
          <Image
            src={images.alphaToolsLogo}
            alt="logo"
            className="h-auto w-[5.1rem] xl:w-[7.5rem]"
          />
          </Link>
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={`text-[16px] font-semibold leading-4 text-white transition-all duration-300 hover:text-[#000]`}
            >
              {translation(link.name)}
            </Link>
          ))}

          <Select
            defaultValue={curentLocale}
            onValueChange={(value) => {
              if (pathName && router)
                router.replace(pathName, { locale: value as Locale });
            }}
            dir={dir}
          >
            <SelectTrigger className="w-fit border-none bg-transparent px-1 text-base font-semibold uppercase text-gray-100 outline-none">
              <AiOutlineGlobal className="me-1 h-5 w-5 text-gray-100" />

              <SelectValue placeholder="lang" />
            </SelectTrigger>
            <SelectContent className="z-[101] w-fit min-w-0 py-1">
              <SelectGroup>
                {locales.map((locale) => (
                  <SelectItem
                    key={locale}
                    value={locale}
                    className={`${curentLocale === locale ? "text-primary-background focus:text-primary-background" : "text-secondary-background focus:text-primary-background"} w-full cursor-pointer px-1 uppercase`}
                    withChecked={false}
                  >
                    {translation(locale)}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
