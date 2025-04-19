import { useTranslations } from "next-intl";

export const animatedText = () => {
  const translation = useTranslations("landing");

  return [
    translation("cta1"),
    translation("cta2"),
    translation("cta3"),
    translation("cta4"),
    translation("cta5"),
    translation("cta6"),
    translation("cta7"),
    translation("cta8"),
    translation("cta9"),
    translation("cta10"),
  ];
};
