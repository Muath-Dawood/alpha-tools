import { TestimonialCardProps } from "@/types/testimonial";
import { useTranslations } from "next-intl";

export const testimonials = (): TestimonialCardProps[] => {
  const translation = useTranslations("testimonials");

  return [
    {
      title: translation("card_1_title"),
      text: translation("card_1_desc"),
      rating: "5.0",
    },
    {
      title: translation("card_2_title"),
      text: translation("card_2_desc"),
      rating: "5.0",
    },
    {
      title: translation("card_3_title"),
      text: translation("card_3_desc"),
      rating: "5.0",
    },
    {
      title: translation("card_4_title"),
      text: translation("card_4_desc"),
      rating: "5.0",
    },
    {
      title: translation("card_5_title"),
      text: translation("card_5_desc"),
      rating: "5.0",
    },
    {
      title: translation("card_6_title"),
      text: translation("card_6_desc"),
      rating: "5.0",
    },
    {
      title: translation("card_7_title"),
      text: translation("card_7_desc"),
      rating: "5.0",
    },
    {
      title: translation("card_8_title"),
      text: translation("card_8_desc"),
      rating: "5.0",
    },
    {
      title: translation("card_9_title"),
      text: translation("card_9_desc"),
      rating: "5.0",
    },
    {
      title: translation("card_10_title"),
      text: translation("card_10_desc"),
      rating: "5.0",
    },
  ];
};
