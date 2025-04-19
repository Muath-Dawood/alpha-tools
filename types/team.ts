import { StaticImageData } from "next/image";

export type TeamMember = {
  id: string;
  image: StaticImageData;
  name: string;
  specialites: string[];
  review: string;
};
