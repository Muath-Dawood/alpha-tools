import { useTranslations, useLocale } from "next-intl";
import CarouselSection from "./CarouselSection";
import { CarouselItem } from "../ui/carousel";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/lib/data/testimonials";
import Animate from "./Animate";
import useTextDirection from "@/hooks/useTextDirection";
import { Locale } from "@/i18n.config";

const Testimonials = () => {
  const translation = useTranslations("testimonials");
  const dir = useTextDirection();
  const locale = useLocale() as Locale;
  return (
    <section
      className="mt-0 flex w-full flex-col items-center justify-between gap-10 overflow-hidden sm:w-screen lg:gap-16"
      id={locale === "ar" ? "شهادات المرضى" : "patient-testimonials"}
    >
      <div className="flex-center relative flex w-full flex-col gap-4 text-center">
        <h2 className="mx-auto text-[2.5rem] font-bold leading-[3.25rem]">
          <Animate
            fromRight={dir === "ltr" ? 100 : -100}
            toRight={0}
            initialOpacity={0}
            finalOpcaity={1}
            wrapper="span"
            once={true}
          >
            {translation("title")}
          </Animate>
        </h2>
        <p className="text-[24px] font-semibold text-[#9F9F9F]">
          <Animate
            fromLeft={dir === "ltr" ? 100 : -100}
            toLeft={0}
            initialOpacity={0}
            finalOpcaity={1}
            wrapper="span"
            once={true}
          >
            {translation("desc")}
          </Animate>
        </p>
      </div>

      <div className="w-full">
        <CarouselSection
          title={translation("title")}
          desc={translation("desc")}
          align="center"
        >
          {testimonials().map((testimonial, i) => (
            <CarouselItem
              className="group w-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
              key={i}
            >
              <TestimonialCard {...testimonial} />
            </CarouselItem>
          ))}
        </CarouselSection>
      </div>
    </section>
  );
};

export default Testimonials;
