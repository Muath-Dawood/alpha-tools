import Animate from "@/components/shared/Animate";
import useTextDirection from "@/hooks/useTextDirection";
import { images } from "@/lib/data/images";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import UnspokenSection from "./UnspokenSection";
import { Locale } from "@/i18n.config";

const UnspokenIssues = () => {
  const translation = useTranslations("Unspoken issues - Unresolved conflicts");
  const locale = useLocale() as Locale;

  return (
    <section
      className="w-full scroll-m-28"
      id={locale === "ar" ? "مشكلات" : "issues"}
    >
      <h2 className="mx-auto mb-16 text-center text-xl font-bold sm:text-[2.5rem] sm:leading-[3.25rem]">
        <Animate
          fromBottom={-50}
          toBottom={0}
          initialOpacity={0}
          finalOpcaity={1}
          wrapper="span"
          once={true}
        >
          {translation("title")}
        </Animate>
      </h2>

      <div className="flex-center w-full flex-col items-start gap-16">
        <UnspokenSection
          title={translation("Before Seeking Help")}
          desc={translation("Many couples struggle with conflict")}
          mainImage={images.blog_background_image_5}
          cardImage={images.unspoken1}
          cards={[
            {
              title: translation("Recurring arguments & miscommunication"),
              desc: translation("Recurring arguments & miscommunication desc"),
            },
            {
              title: translation("Emotional distance affecting connection"),
              desc: translation("Emotional distance affecting connection desc"),
            },
            {
              title: translation("Unresolved conflicts causing frustration"),
              desc: translation(
                "Unresolved conflicts causing frustration desc",
              ),
            },
          ]}
        />

        <UnspokenSection
          title={translation("The Healing Process")}
          desc={translation("Therapy helps couples")}
          mainImage={images.blog_background_image_5}
          cardImage={images.unspoken2}
          isReverse={true}
          cards={[
            {
              title: translation("Safe space for open conversations"),
              desc: translation("Safe space for open conversations desc"),
            },
            {
              title: translation("Learning healthier communication"),
              desc: translation("Learning healthier communication desc"),
            },
            {
              title: translation("Breaking negative patterns"),
              desc: translation("Breaking negative patterns desc"),
            },
          ]}
        />

        <UnspokenSection
          title={translation("A Stronger Relationship")}
          desc={translation("After therapy, couples improve")}
          mainImage={images.blog_background_image_5}
          cardImage={images.unspoken3}
          cards={[
            {
              title: translation("Confidence in handling challenges together"),
              desc: translation(
                "Confidence in handling challenges together desc",
              ),
            },
            {
              title: translation("Improved communication"),
              desc: translation("Improved communication desc"),
            },
            {
              title: translation("Tools for lasting harmony"),
              desc: translation("Tools for lasting harmony desc"),
            },
          ]}
        />
      </div>
    </section>
  );
};

export default UnspokenIssues;
