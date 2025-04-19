import { images } from "./images";

export const services = [
  {
    image: images.video,
    name: "online consultations",
  },
  {
    image: images.date,
    name: "booking appointments",
  },
  {
    image: images.prescriptions,
    name: "prescriptions",
  },
  {
    image: images.note,
    name: "medical notes",
  },
  {
    image: images.medicine,
    name: "medicine refills",
  },
] as const;
