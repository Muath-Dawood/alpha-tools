import Experience from "./_components/Experience";
import Faq from "./_components/Faq";
import HeroSection from "./_components/HeroSection";
import Team from "@/components/shared/Team";
import { Locale } from "@/i18n.config";
import { unstable_setRequestLocale } from "next-intl/server";
import TreatmentsBenefits from "@/components/shared/TreatmentsBenefits";
import Testimonials from "@/components/shared/Testimonials";
import GetInTouch from "@/components/shared/GetInTouch";
import BookingForm from "@/components/shared/booking-form/BookingForm";
import AboutUs from "./_components/AboutUs";
import Treatments from "./_components/Treatments";
import Contact from "@/components/shared/ContactUs";

export default function Home({ params }: { params: { locale: Locale } }) {
  unstable_setRequestLocale(params.locale);

  return (
    <main className="flex-center mt-5 w-full flex-col gap-20 px-5 sm:gap-36 2xl:px-0">
      <HeroSection />
      <Experience />
      <TreatmentsBenefits />
      <Treatments />
      <GetInTouch />
      <BookingForm />
      <AboutUs />
      <Team />
      <Testimonials />
      <Faq />
      <Contact />
    </main>
  );
}
