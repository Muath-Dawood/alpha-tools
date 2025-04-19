"use client";
import { images } from "@/lib/data/images";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n.config";
import Statistics from "@/components/shared/Statistics";

const HeroSection = () => {
  const translation = useTranslations("Hero Section");
  return (
    <section className="flex-center w-full flex-col justify-start gap-10">
      <div className="flex w-full flex-col-reverse items-center justify-center md:px-12 md:py-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
        <div className="flex max-w-[736px] flex-col gap-3 py-12">
          <div className="flex-center flex-col text-center text-[30px] font-extrabold leading-[1] -tracking-tight xs:text-[40px] sm:text-[40px] md:text-[40px] lg:items-start lg:text-start lg:text-[42px] xl:text-6xl">
            <h1>{translation("Professional medical care for your health")}</h1>
          </div>
          <div className="flex-center flex-col gap-2 text-center text-[30px] font-extrabold leading-[1] -tracking-tight text-primary xs:text-[40px] sm:text-[40px] md:text-[40px] lg:items-start lg:text-start lg:text-[42px] xl:text-6xl">
            <h1>{translation("Sexuality and Reproduction")}</h1>
            <Image src={images.lines_purple} alt="doctor" />
          </div>
          <div className="flex-center flex-col gap-2 text-[20px] -tracking-tight text-[#6D6D6D] xs:text-[22px] sm:text-[25px] md:text-[25px] lg:items-start lg:text-[25px] xl:text-[35px]">
            <h5>
              {translation(
                "Comprehensive care, real support, and complete privacy!",
              )}
            </h5>
          </div>
          <div className="text-center -tracking-tight text-[#000] md:text-start xl:text-[17px]">
            <p>{translation("description")}</p>
          </div>

          <div className="flex-center mt-10 flex-wrap gap-6 text-base text-white xs:text-lg xs:leading-5 lg:justify-start">
            <Link href={"/#book now"}>
              <button className="btn-effects flex h-[52px] w-[250px] items-center justify-center gap-2 rounded-[10px] bg-primary px-[30px] py-[16px] text-[16px] uppercase text-white md:h-[52px] md:w-[220px] lg:h-[52px] lg:w-[210px] xl:h-[52px] xl:w-[286px]">
                {translation("Book your appointment now")}
              </button>
            </Link>

            <a href="https://wa.me/970598070808?text=" target="_blank">
              <button className="outline-btn-effects h-[52px] w-[250px] rounded-[10px] border-[2px] border-primary bg-white px-[30px] py-[16px] uppercase text-primary md:h-[52px] md:w-[220px] lg:h-[52px] lg:w-[190px] xl:h-[52px] xl:w-[252px]">
                {translation("Contact us")}
              </button>
            </a>
          </div>
        </div>
        <Image
          src={images.hijabi_doctor_hero_section}
          alt="doctor"
          className="h-[auto] w-[60%] sm:w-[50%] md:w-[50%] lg:h-[450px] lg:w-[450px] xl:h-[555px] xl:w-[495px]"
        />
      </div>
      <Statistics />
    </section>
  );
};

export default HeroSection;
