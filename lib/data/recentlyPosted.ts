import { images } from "./images";

export const recentlyPosted = [
  {
    id: 1,
    image: images.blog1,
    title: "why regular check-ups",
    category: "womens health",
    date: "MAY 24, 2022",
    desc: "Learn why regular check-ups are crucial for detecting early health issues and maintaining optimal well-being.",
  },
  {
    id: 2,
    image: images.blog2,
    title: "erectile dysfunction",
    category: "womens health",
    date: "MAY 24, 2022",
    desc: "Uncover the truth behind common myths about male sexual health and get the facts you need for better understanding and care.",
  },
] as const;
