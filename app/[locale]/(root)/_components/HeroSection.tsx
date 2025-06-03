"use client";
import { images } from "@/lib/data/images";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import useTextDirection from "@/hooks/useTextDirection";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Locale } from "@/i18n.config";

const HeroSection = () => {
  const translation = useTranslations("Hero Section");
  const dir = useTextDirection();
  const locale = useLocale() as Locale;

  return (
    <section
      className="flex-center w-full scroll-m-28 flex-col justify-start gap-10"
      id={locale == "ar" ? "الرئيسية" : "home"}
    >
      <div className="flex w-full flex-col-reverse items-center justify-center overflow-hidden rounded-xl lg:max-h-[700px] lg:flex-row lg:items-stretch lg:justify-between">
        <div className="flex-center w-full flex-1 bg-[#D1F5F2] px-4 pb-10 pt-10 xs:px-6 xs:pt-14 lg:w-auto lg:py-12">
          <div className="flex-center max-w-[34rem] flex-col gap-4 xs:gap-8 lg:mb-14 lg:items-start xl:mb-12">
            <div className="flex-center flex-col text-center text-[30px] font-medium leading-[120%] -tracking-tight xs:text-[40px] sm:text-[40px] md:text-[40px] lg:items-start lg:text-start lg:text-[42px] xl:text-[3.75rem]">
              <h1>{translation("Your Path to Mental Wellness")}</h1>
              <p className="font-semibold text-primary">
                {translation("Starts Here")}
              </p>
            </div>

            <div className="text-center font-medium leading-[150%] -tracking-tight text-[#000] lg:text-start xl:text-[17px]">
              <p>{translation("description")}</p>
            </div>

            <div className="flex-center mx-auto mt-5 w-full max-w-[228px] flex-wrap gap-3 text-base text-white xs:mt-8 xs:max-w-[286px] xs:text-lg xs:leading-5 sm:max-w-none lg:justify-start xl:gap-6">
              <a href={"/#booking"} className="w-full sm:w-auto">
                <button className="btn-effects flex h-[52px] w-full items-center justify-center rounded-[10px] bg-[#FFA500] px-[20px] py-[16px] text-[18px] font-medium capitalize text-white xs:px-[30px] xs:text-[20px] sm:w-auto">
                  {translation("Book your appointment now")}
                  {dir == "ltr" ? (
                    <MdKeyboardArrowRight className="hidden h-auto w-7 text-[18px] xl:block" />
                  ) : (
                    <MdKeyboardArrowLeft className="hidden h-auto w-8 text-[18px] xl:block" />
                  )}
                </button>
              </a>

              <a
                href="https://wa.me/970598070808?text="
                target="_blank"
                className="w-full sm:w-auto"
              >
                <button className="outline-btn-effects w-full rounded-[10px] border-secondary-background/20 bg-white px-[20px] py-[16px] text-[18px] font-medium capitalize text-[#00695E] xs:px-[30px] xs:text-[20px] sm:w-auto">
                  {translation("Contact us")}
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="flex-center relative w-full flex-1 lg:w-auto">
          <Image
            src={images.happy_adult_couple_hero_section}
            alt="adult_couple"
            fill
            className="mx-auto object-cover"
            priority
          />

          <Image
            src={images.logoWithNoWords}
            alt="logo"
            className="absolute bottom-0 start-1/2 w-16 translate-y-1/2 xs:w-20 sm:w-24 lg:bottom-5 lg:start-0 lg:translate-y-0 xl:bottom-8 xl:w-auto ltr:-translate-x-1/2 rtl:translate-x-1/2"
          />
        </div>
      </div>
      {/* <Statistics /> */}
    </section>
  );
};

export default HeroSection;
