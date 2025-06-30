import { Locale } from "@/i18n.config";
import { unstable_setRequestLocale } from "next-intl/server";
import OurCustomers from './_components/OurCustomers';
import AboutUs from "./_components/AboutUs";
import WhyChooseUs from './_components/WhyChooseUs';
import Services from "./_components/Services";
import ToolsForRent from "./_components/toolsForRent";
import GenForRent from "./_components/genForRent";

export default function Home({ params }: { params: { locale: Locale } }) {
  unstable_setRequestLocale(params.locale);

  return (
    <main className="flex-center mt-5 w-full flex-col gap-11 px-5 sm:gap-20 2xl:px-0">
      <GenForRent />
      <ToolsForRent />
      <Services />
      <WhyChooseUs />
      <AboutUs />
      <OurCustomers />
    </main>
  );
}
