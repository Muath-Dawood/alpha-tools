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
      id: "2",
      image: images.secretary,
      name: translations("Khadija Zaki.name"),
      specialites: [translations("Khadija Zaki.specialites.0")],
      review: translations("Khadija Zaki.review"),
    },
    {
      id: "3",
      image: images.doctor11,
      name: translations("murad_hammouri.name"),
      specialites: [
        translations("murad_hammouri.specialites.0"),
        translations("murad_hammouri.specialites.1"),
      ],
      review: translations("murad_hammouri.review"),
    },
    {
      id: "4",
      image: images.doctor14,
      name: translations("moamen.name"),
      specialites: [
        translations("moamen.specialites.0"),
        translations("moamen.specialites.1"),
      ],
      review: translations("moamen.review"),
    },
    {
      id: "5",
      image: images.nurse1,
      name: translations("bilal_zahaika.name"),
      specialites: [],
      review: translations("bilal_zahaika.review"),
    },
    {
      id: "6",
      image: images.nurse2,
      name: translations("saleh.name"),
      specialites: [],
      review: translations("saleh.review"),
    },
  ];
};
