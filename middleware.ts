import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n.config";
import { pathnames } from "./lib/pathnames";

export default createMiddleware({
  defaultLocale: "en",
  locales,
  localeDetection: true,
  localePrefix: "as-needed",
  alternateLinks: true,
  pathnames,
});

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
