"use client";
import Animate from "@/components/shared/Animate";
import TreatmentCard from "@/components/shared/TreatmentCard";
import CarouselWithNav from "@/components/ui/CarouselWithNav";
import useTextDirection from "@/hooks/useTextDirection";
import { images } from "@/lib/data/images";
import { treatments } from "@/lib/data/treatments";
import { useTranslations, useLocale } from "next-intl";
import { Locale } from "@/i18n.config";
import Image from "next/image";

const Treatments = () => {
  const translation = useTranslations("treatments");
  const dir = useTextDirection();
  const locale = useLocale() as Locale;
  const slides: { name: string; content: React.ReactNode }[] = [];

  treatments().map((treatment) => {
    slides.push({
      name: treatment.title,
      content: (
        <TreatmentCard
          title={treatment.title}
          icon={treatment.icon}
          content={treatment.content}
        />
      ),
    });
  });

  return (
    <section
      className="relative mb-20 w-full text-center"
      dir="ltr"
      id={locale === "ar" ? "الأمراض والعلاجات" : "Diseases-and-Treatments"}
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

      {/* <TreatmentCard /> */}
      <CarouselWithNav slides={slides} loop={false} />

      <Image
        src={images.lines}
        alt="lines"
        className="absolute top-[27%] -z-10"
      />
    </section>
  );
};

export default Treatments;
