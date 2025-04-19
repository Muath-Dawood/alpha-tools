import { StaticImageData } from "next/image";

export type Blog = {
  id: string;
  image: StaticImageData;
  background_image: StaticImageData;
  title: string;
  category: string;
  date: string;
  desc: string;
  summary?: string;
  toRead: string;
  writtenBy: string;
  list: {
    title: string;
    desc: {
      text: string;
      subItems?: {
        title: string;
        desc: string;
      }[];
    }[];
  }[];
};

export type PopularBlogs = {
  image: StaticImageData;
  title: string;
  category: string;
  toRead: string;
  id: string;
};

export type BlogHeader = {
  id: string;
  title: string;
  desc: string;
  kewords: string;
};
