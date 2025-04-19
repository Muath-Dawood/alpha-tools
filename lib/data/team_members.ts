import { useTranslations } from "next-intl";
import { images } from "./images";
import { TeamMember } from "@/types/team";

export const teamMembers = (): TeamMember[] => {
  const translations = useTranslations("team");

  return [
    {
      id: "1",
      image: images.secretary,
      name: translations("noor_khawaja.name"),
      specialites: [translations("noor_khawaja.specialites.0")],
      review: translations("noor_khawaja.review"),
    },
    {
      id: "1",
      image: images.secretary,
      name: translations("Khadija Zaki.name"),
      specialites: [translations("Khadija Zaki.specialites.0")],
      review: translations("Khadija Zaki.review"),
    },
  ];
};
