import { Locale } from "@/i18n.config";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({ params }: { params: { locale: Locale } }) {
  unstable_setRequestLocale(params.locale);

  return (
    <main className="flex-center mt-5 w-full flex-col gap-20 px-5 sm:gap-36 2xl:px-0">
    </main>
  );
}
