"use client";
import { images } from "@/lib/data/images";
import { links } from "@/lib/data/navLinks";
import { TbMenu2 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { Link, Locale, locales, usePathname, useRouter } from "@/i18n.config";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { AiOutlineGlobal } from "react-icons/ai";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useTextDirection from "@/hooks/useTextDirection";

const MobileNavbar = () => {
  const translation = useTranslations("navbar");
  const pathName = usePathname();
  const curentLocale = useLocale();
  const router = useRouter();
  const dir = useTextDirection();

  return (
    <nav className="flex-center sticky top-0 z-[100] h-[4.275rem] w-full justify-between border-b-[0.143rem] border-primary-background/20 bg-white px-5 lg:hidden">
      <DropdownMenu dir={dir}>
        <DropdownMenuTrigger className="cursor-pointer border-none bg-transparent p-0 text-primary outline-none">
          <TbMenu2 className="h-auto w-8 sm:w-10" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="relative z-[102] h-[100dvh] max-h-[100dvh] w-[100cqw] translate-y-[-53px] overflow-auto rounded-none border-[0.071rem] border-[#EFF0F6] bg-white pb-8 pe-4 ps-4 pt-10 xs:start-5 xs:top-5 xs:h-auto xs:max-h-[calc(100dvh-4.275rem)] xs:w-72 xs:translate-y-0 xs:rounded-2xl xs:px-4 xs:pt-5 sm:top-4">
          <div className="flex-center align-items-center mb-4 justify-between">
            <h3 className="text-xl font-bold">{translation("menu")}</h3>
            <button
              type="button"
              name="close"
              className="relative w-fit cursor-pointer hover:text-primary-background sm:hidden"
            >
              <DropdownMenuItem className="cursor-pointer p-0 hover:bg-transparent focus:bg-transparent">
                <IoClose className="h-7 w-7 cursor-pointer transition-all duration-300" />
              </DropdownMenuItem>
            </button>
          </div>

          <DropdownMenuGroup className="flex-center flex-col items-start gap-3">
            {links.map((link) => (
              <Link href={link.href} className="w-full" key={link.name}>
                <DropdownMenuItem
                  key={link.href}
                  className={`${pathName === link.href ? "text-primary-background" : ""} flex-center relative w-full cursor-pointer justify-start gap-3 rounded-lg px-3 py-1 outline-none transition-all duration-300 xs:hover:ms-2 xs:hover:text-secondary-background`}
                >
                  <span className="leading-base text-nowrap text-base font-semibold">
                    {translation(link.name)}
                  </span>
                </DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <Link href={"/"} className="h-auto w-[6rem]">
        <Image src={images.logo} alt="logo" />
      </Link>

      <Select
        defaultValue={curentLocale}
        onValueChange={(value) => {
          router.replace(pathName, { locale: value as Locale });
        }}
      >
        <SelectTrigger className="w-fit border-none bg-transparent px-1 text-base font-semibold uppercase text-primary outline-none">
          <AiOutlineGlobal className="me-1 h-5 w-5 text-primary" />

          <SelectValue placeholder="lang" />
        </SelectTrigger>
        <SelectContent className="z-[101] w-fit min-w-0 py-1">
          <SelectGroup>
            {locales.map((locale) => (
              <SelectItem
                key={locale}
                value={locale}
                className={`${curentLocale === locale ? "text-white hover:text-[#fff] focus:text-[#fff]" : ""} w-full cursor-pointer px-1 uppercase`}
                withChecked={false}
              >
                {translation(locale)}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </nav>
  );
};

export default MobileNavbar;
