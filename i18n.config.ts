import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import { pathnames } from "./lib/pathnames";

export const locales = ["en", "ar"] as const;
export const localesName = {
  en: "english",
  ar: "arabic",
} as const;
export type Locale = (typeof locales)[number];

export const { Link, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
  });
