import { StaticImageData } from "next/image";

type Paragraph = {
  text: string;
  note?: string;
};

type SubSections = {
  title: string;
  paragraphs: Paragraph[];
};

export type InformationCategorySubject = {
  id: string;
  image: StaticImageData;
  title: string;
  desc: string;
  section1: {
    subSections: SubSections[];
  };
  section2: {
    image: StaticImageData;
    title: string;
    paragraphs: string[];
  };
};

export type InformationCategory = {
  title: string;
  list: {
    id: string;
    text: string;
  }[];
};
