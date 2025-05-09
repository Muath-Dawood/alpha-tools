import Animate from "@/components/shared/Animate";
import useTextDirection from "@/hooks/useTextDirection";
import { useLocale, useTranslations } from "next-intl";
import IntroVideo from "./IntroVideo";
import { Locale } from "@/i18n.config";

const WhyChoose = () => {
  const translation = useTranslations("why choose best clinic");
  const dir = useTextDirection();
  const locale = useLocale() as Locale;

  return (
    <section
      className="reltaive w-full scroll-m-28 text-center"
      id={locale === "ar" ? "من نحن" : "about us"}
    >
      <h2 className="text-xl font-bold sm:text-[2.5rem] sm:leading-[3.25rem]">
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
        className="mx-auto mt-3 max-w-[49.375rem] text-base font-semibold text-muted-foreground/60"
      >
        {translation("desc")}
      </Animate>

      <IntroVideo
        url="https://www.youtube.com/watch?v=eP6DpMkQ2aw"
        className="bg-[#046F67]"
        containerClassName="mt-16 sm:mt-32 lg:mt-40"
      />
    </section>
  );
};

export default WhyChoose;
