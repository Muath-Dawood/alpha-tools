import { images } from "@/lib/data/images";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Statistics from "@/components/shared/Statistics";
import Animate from "@/components/shared/Animate";

const AboutUs = () => {
  const translation = useTranslations("about");

  return (
    <section className="w-full">
      <div className="flex-center relative mx-auto w-full max-w-[74rem] flex-col justify-between gap-5 md:flex-row md:items-start">
        <div className="flex-center max-w-[35.75rem] flex-col items-start gap-10 font-medium md:max-w-[28.375rem]">
          <h2 className="text-xl font-bold sm:text-[2.5rem] sm:leading-[3.25rem]">
            <Animate
              fromTop={75}
              toTop={0}
              initialOpacity={0}
              finalOpcaity={1}
              once={true}
            >
              {translation(
                "Empowering Couples to Overcome Challenges Together",
              )}
            </Animate>
          </h2>

          <p>{translation("The first clinic in Palestine")}</p>

          <p>{translation("Our clinic follows international standards")}</p>
        </div>

        <div className="flex-center mt-8 max-w-[35.75rem] flex-col items-start gap-10 font-medium">
          <div className="flex-center flex-col items-start gap-6">
            <div className="flex-center justify-start gap-3 text-xl font-bold leading-5 text-primary-background">
              <div className="flex-center h-11 w-11 rounded-[0.5rem] bg-[#ECF9F8]">
                <Image src={images.people} alt="people" />
              </div>

              {translation("our Staff")}
            </div>

            <p className="font-medium">{translation("our staff desc")}</p>
          </div>

          <div className="flex-center flex-col items-start gap-6">
            <div className="flex-center justify-start gap-3 text-xl font-bold leading-5 text-primary-background">
              <div className="flex-center h-11 w-11 rounded-[0.5rem] bg-[#ECF9F8]">
                <Image src={images.clinic} alt="clinic" />
              </div>

              {translation("our clinic")}
            </div>

            <p className="font-medium">{translation("our clinic desc")}</p>
          </div>
        </div>
      </div>

      <div className="mt-24 w-full">
        <Statistics />
      </div>
    </section>
  );
};

export default AboutUs;
