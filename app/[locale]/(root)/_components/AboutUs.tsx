import Animate from "@/components/shared/Animate";
import useTextDirection from "@/hooks/useTextDirection";
import { useTranslations, useLocale } from "next-intl";
import IntroVideo from "./IntroVideo";
import { images } from "@/lib/data/images";
import Image from "next/image";
import { Locale } from "@/i18n.config";
const AboutUs = () => {
  const translation = useTranslations("about us");
  const dir = useTextDirection();
  const locale = useLocale() as Locale;

  return (
    <section
      className="flex w-screen flex-col text-center"
      id={locale === "ar" ? "من نحن" : "about-us"}
    >
      <div className="p-10">
        <h2 className="text-[40px] font-bold leading-[3.25rem]">
          {translation.rich("title", {
            span: (chunks) => (
              <Animate
                fromLeft={dir === "ltr" ? 100 : -100}
                toLeft={0}
                initialOpacity={0}
                finalOpcaity={1}
                once={true}
                wrapper="span"
                className="text-primary-background"
              >
                {chunks}
              </Animate>
            ),
          })}
        </h2>

        <Animate
          fromY={80}
          toY={0}
          initialOpacity={0}
          finalOpcaity={1}
          once={true}
          wrapper="p"
          className="text-[18px] text-[#9F9F9F]"
        >
          {translation("desc")}
        </Animate>
      </div>

      <div
        className="mt-[60px] rounded-[10px] p-10"
        style={{
          background:
            "linear-gradient(239.48deg, rgba(179, 101, 140, 0.24) 16.91%, rgba(255, 255, 255, 0.6) 98.33%)",
        }}
      >
        <IntroVideo url="https://www.youtube.com/watch?v=eP6DpMkQ2aw" />

        <div className="flex-center relative mx-auto -mt-12 w-full max-w-[74rem] flex-col justify-between gap-5 text-start md:flex-row md:items-start">
          <div className="flex-center ms:max-w-[28.375rem] max-w-[35.75rem] flex-col items-start gap-10 font-medium">
            <h2 className="text-[30px] font-bold sm:text-[2.5rem] sm:leading-[3.25rem]">
              <Animate
                fromTop={75}
                toTop={0}
                initialOpacity={0}
                finalOpcaity={1}
                once={true}
              >
                {translation("we’re on a mission")}
              </Animate>
              <Image src={images.lines_purple} alt="doctor" />
            </h2>

            <p>
              {translation(
                "The first clinic in Palestine specialised in treating sexual and reproductive health issues",
              )}
            </p>

            <p>
              {translation(
                "In our clinic, we uphold the highest levels of confidentiality and privacy",
              )}
            </p>
          </div>

          <div className="flex-center mt-8 max-w-[35.75rem] flex-col items-start gap-10 font-medium">
            <div className="flex-center flex-col items-start gap-6">
              <div className="flex-center justify-start gap-3 text-xl font-bold leading-5 text-[#3D3D3D]">
                <div className="flex-center h-11 w-11 rounded-[0.5rem] bg-white">
                  <Image src={images.people} alt="people" />
                </div>

                {translation("our Staff")}
              </div>

              <p className="font-medium">{translation("our staff desc")}</p>
            </div>

            <div className="flex-center flex-col items-start gap-6">
              <div className="flex-center justify-start gap-3 text-xl font-bold leading-5 text-[#3D3D3D]">
                <div className="flex-center h-11 w-11 rounded-[0.5rem] bg-white">
                  <Image src={images.clinic} alt="clinic" />
                </div>

                {translation("our clinic")}
              </div>

              <p className="font-medium">{translation("our clinic desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
