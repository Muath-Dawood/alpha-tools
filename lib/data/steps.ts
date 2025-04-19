import { images } from "./images";

export const steps = [
  {
    step: 1,
    image: images.category,
    name: "categories",
  },
  {
    step: 2,
    image: images.hand_icon,
    name: "treatments",
  },
  {
    step: 3,
    image: images.date_calendar,
    name: "date",
  },
  {
    step: 4,
    image: images.doctor_icon,
    name: "doctors",
  },
  {
    step: 5,
    image: images.file_note_icon,
    name: "details",
  },
] as const;
