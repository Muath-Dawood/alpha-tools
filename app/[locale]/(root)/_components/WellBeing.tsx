import Animate from "@/components/shared/Animate";
import useTextDirection from "@/hooks/useTextDirection";
import { Locale } from "@/i18n.config";
import { images } from "@/lib/data/images";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { IoArrowUp } from "react-icons/io5";

const WellBeing = () => {
  const translation = useTranslations("well being");
  const locale = useLocale() as Locale;

  return (
    <section
      className="flex-center w-full scroll-m-28 flex-col gap-4 md:flex-row md:items-end lg:gap-6"
      id={locale == "ar" ? "احجز الآن" : "book now"}
    >
      <div className="flex-center flex-1 grow-[2.2] flex-col gap-8 md:items-start md:justify-start">
        <h2 className="text-center text-xl font-medium sm:text-[2.5rem] sm:leading-[3.25rem] md:text-start">
          <Animate
            initialOpacity={0}
            finalOpcaity={1}
            wrapper="span"
            fromBottom={75}
            toBottom={0}
            once={true}
          >
            {translation("Transform Your Well-Being with Best Clinic")}
          </Animate>

          <br className="hidden lg:block" />

          <Animate
            initialOpacity={0}
            finalOpcaity={1}
            wrapper="span"
            fromBottom={-75}
            toBottom={0}
            once={true}
            className="ms-2 mt-2 text-[#0E948A] lg:ms-0"
          >
            {translation("Best Clinic")}
          </Animate>
        </h2>

        <p className="text-base font-medium leading-[150%]">
          {translation("desc")}
        </p>

        <div className="flex-center w-full flex-col gap-4 xs:flex-row xs:gap-2 lg:gap-5">
          <div
            className="flex-center relative w-full flex-1 grow flex-col items-start justify-end gap-5 overflow-hidden rounded-[.625rem] bg-[#00000033] px-5 py-5 text-white xs:w-auto"
            style={{
              aspectRatio:
                images.doctorHandShake.width / images.doctorHandShake.height,
            }}
          >
            <Image
              src={images.doctorHandShake}
              alt="lead"
              className="absolute inset-0 -z-10 object-cover"
            />

            <div className="flex-center w-full justify-between gap-1">
              <h3 className="text-lg lg:text-3xl lg:leading-10">
                {translation("Men’s Health Clinic")}
              </h3>

              <div className="flex-center aspect-square min-w-12 cursor-pointer rounded-full border-2 border-white transition-all duration-300 hover:border-[#04AD9E] hover:text-[#04AD9E] lg:min-w-16 ltr:rotate-45 rtl:-rotate-45">
                <IoArrowUp className="h-auto w-6 lg:w-8" />
              </div>
            </div>
          </div>

          <div
            className="flex-center relative w-full flex-1 grow flex-col items-start justify-end gap-5 overflow-hidden rounded-[.625rem] bg-[#00000033] px-5 py-5 text-white xs:w-auto"
            style={{
              aspectRatio:
                images.doctorHandShake.width / images.doctorHandShake.height,
            }}
          >
            <Image
              src={images.doctorHandShake}
              alt="lead"
              className="absolute inset-0 -z-10 object-cover"
            />

            <div className="flex-center w-full justify-between gap-1">
              <h3 className="text-lg lg:text-3xl lg:leading-10">
                {translation("Women’s Health Clinic")}
              </h3>

              <div className="flex-center aspect-square min-w-12 cursor-pointer rounded-full border-2 border-white transition-all duration-300 hover:border-[#04AD9E] hover:text-[#04AD9E] lg:min-w-16 ltr:rotate-45 rtl:-rotate-45">
                <IoArrowUp className="h-auto w-6 lg:w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex-center relative flex-1 grow flex-col items-start justify-end gap-5 overflow-hidden rounded-[.625rem] bg-[#00000033] px-5 py-5 text-white"
        style={{
          aspectRatio: images.lead_bg.width / images.lead_bg.height,
        }}
      >
        <Image
          src={images.lead_bg}
          alt="lead"
          className="absolute inset-0 -z-10"
        />

        <h3 className="text-lg lg:text-3xl lg:leading-10">
          {translation("Couple Therapy Clinic")}
        </h3>

        <div className="flex-center w-full justify-between gap-1">
          <p className="max-w-[330px] text-base font-medium leading-[150%]">
            {translation("We help partners improve communication")}
          </p>

          <div className="flex-center aspect-square min-w-12 cursor-pointer rounded-full border-2 border-white transition-all duration-300 hover:border-[#04AD9E] hover:text-[#04AD9E] lg:min-w-16 ltr:rotate-45 rtl:-rotate-45">
            <IoArrowUp className="h-auto w-6 lg:w-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellBeing;
