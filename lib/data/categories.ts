import { useTranslations } from "next-intl";

export const categories = () => {
  const translation = useTranslations("blog page");

  return {
    title: translation("categories"),
    list: [
      {
        name: translation("womens health"),
        count: "08",
      },
      {
        name: translation("fitness & exercise"),
        count: "01",
      },
      {
        name: translation("nutrition & diet"),
        count: "01",
      },
      {
        name: translation("healthcare"),
        count: "02",
      },
      {
        name: translation("technology"),
        count: "01",
      },
      {
        name: translation("hormonal health"),
        count: "02",
      },
      {
        name: translation("mental health & well-being"),
        count: "02",
      },
      {
        name: translation("lifestyle & habits"),
        count: "01",
      },
    ],
  };
};
