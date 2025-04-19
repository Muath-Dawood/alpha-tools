import { treatmentsBenefits } from "@/lib/data/treatmentsBenefits";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Animate from "./Animate";
import useTextDirection from "@/hooks/useTextDirection";
import TreatmentsBenefitCardd from "./TreatmentsBenefitCard";
import { Locale } from "@/i18n.config";
const TreatmentsBenefits = () => {
  const translation = useTranslations("benefits of treatments");
  const dir = useTextDirection();
  const locale = useLocale() as Locale;

  return (
    <section
      className="flex-center w-full flex-col gap-5 text-center"
      id={locale === "ar" ? "فوائد العلاج" : "benefits-of-treatment"}
    >
      <div className="w-full px-5 pb-10">
        <Animate
          fromRight={dir === "ltr" ? 100 : -100}
          toRight={0}
          initialOpacity={0}
          finalOpcaity={1}
          wrapper="h2"
          className="text-[40px] font-bold leading-[3.25rem]"
          once={true}
        >
          {translation("title")}
        </Animate>

        <Animate
          fromLeft={dir === "ltr" ? 100 : -100}
          toLeft={0}
          initialOpacity={0}
          finalOpcaity={1}
          wrapper="p"
          once={true}
          className="mt-2 text-[18px] text-[#9F9F9F]"
        >
          {translation("desc")}
        </Animate>
      </div>

      <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-8 lg:px-16 xl:grid-cols-4">
        {treatmentsBenefits().map((benefit, index) => (
          <TreatmentsBenefitCardd
            key={index}
            index={index}
            icon={benefit.image}
            description={benefit.desc}
            title={benefit.title}
          />
        ))}
      </div>
    </section>
  );
};

export default TreatmentsBenefits;
