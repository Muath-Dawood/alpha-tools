"use client";
import useTextDirection from "@/hooks/useTextDirection";
import { images } from "@/lib/data/images";
import Image from "next/image";
import { FaFacebook, FaWhatsapp } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n.config";

import ReadMore from "../ui/ReadMore";
type TreatmentCardProps = {
  title: string;
  icon: string;
  content: string;
};

const TreatmentCard = (props: TreatmentCardProps) => {
  const dir = useTextDirection();
  const translation = useTranslations("treatments");
  return (
    <div
      className="grid min-h-[500px] w-full grid-cols-1 gap-[40px] rounded-[30px] bg-white px-[40px] py-[50px] text-start shadow-md lg:grid-cols-3"
      dir={dir}
    >
      <div className="flex-center rounded-[20px] bg-[#B3658C17] p-[50px]">
        <Image
          src={props.icon}
          className="w-[45%] rounded-xl object-cover md:w-[25%] lg:w-[70%] xl:w-[50%]"
          alt="doctor"
        />
      </div>
      <div className="flex flex-col gap-4 lg:col-span-2">
        <h1 className="text-[30px] font-[700] text-[#B3658C]">{props.title}</h1>

        <ReadMore text={props.content} />

        <div className="flex-center flex flex-col">
          <Link
            href={"/#book now"}
            className="btn-effects mt-10 flex h-[50px] w-[100%] items-center justify-center rounded-[10px] bg-primary-background px-[88px] py-[12px] text-[16px] font-[600] uppercase text-white lg:px-[60px] xl:px-[88px]"
          >
            {translation("Book an appointment now")}
          </Link>
          <div className="flex-center mt-4 flex flex-wrap items-center justify-center gap-3 [&_svg]:h-6 [&_svg]:w-6 [&_svg]:cursor-pointer [&_svg]:text-primary-background [&_svg]:transition [&_svg]:duration-300">
            <a href="https://facebook.com/BestClinicPS" target="_blank">
              <FaFacebook className="hover:text-secondary-background" />
            </a>
            <a href="https://wa.me/970598070808?text=" target="_blank">
              <FaWhatsapp className="hover:text-secondary-background" />
            </a>
            <a href="https://www.instagram.com/bestclinicps/" target="_blank">
              <LuInstagram className="hover:text-secondary-background" />
            </a>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <div className="flex max-h-[180px] flex-col items-start gap-[10px] rounded-[10px] bg-white px-[20px] py-[25px] shadow-md">
            <div className="flex w-full items-center justify-start gap-3">
              <Image
                src={images.universityـdegree_icon}
                className="object-cover"
                alt="universityـdegree_icon"
              />
              <h1 className="text-[16px] font-bold text-[#6D6D6D]">
                {translation("Highly Qualified Doctors")}
              </h1>
            </div>
            <p className="text-[14px] font-[500] text-[#ABABAB]">
              {translation(
                "Our clinic is staffed with a team of experienced doctors holding certified qualifications, ensuring a high standard of medical care",
              )}
            </p>
          </div>
          <div className="flex max-h-[180px] flex-col items-start gap-[10px] rounded-[10px] bg-white px-[20px] py-[25px] shadow-md">
            <div className="flex items-center justify-start gap-3">
              <Image
                src={images.tools_icon}
                className="object-cover"
                alt="universityـdegree_icon"
              />
              <h1 className="text-[16px] font-bold text-[#6D6D6D]">
                {translation("State-of-the-Art Medical Equipment")}
              </h1>
            </div>
            <p className="text-[14px] font-[500] text-[#ABABAB]">
              {translation(
                "By utilizing the latest technologies, we enhance diagnostic accuracy, treatment effectiveness, and patient recovery speed",
              )}
            </p>
          </div>
          <div className="flex max-h-[180px] flex-col items-start gap-[10px] rounded-[10px] bg-white px-[20px] py-[25px] shadow-md">
            <div className="flex items-center justify-start gap-3">
              <Image
                src={images.building_clinic_icon}
                className="object-cover"
                alt="universityـdegree_icon"
              />
              <h1 className="text-[16px] font-bold text-[#6D6D6D]">
                {translation("Comprehensive Range of Services")}
              </h1>
            </div>
            <p className="text-[14px] font-[500] text-[#ABABAB]">
              {translation(
                "The clinic provides holistic medical care, from diagnosis and prevention to complex surgical procedures and rehabilitation",
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentCard;
