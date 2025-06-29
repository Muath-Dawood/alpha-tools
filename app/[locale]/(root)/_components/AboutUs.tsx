import { images } from "@/lib/data/images";
import Image from "next/image";
import { useLocale } from "next-intl";
import { Locale } from "@/i18n.config";

function AboutUs() {
  const currentLocale = useLocale() as Locale;

  return (
    <section id="about us" className="w-full">
      <h1 className="text-5xl text-black text-center font-bold">{currentLocale === "en" ? "About Us" : "عن الشركة"}</h1>
      <div className="flex flex-row justify-center gap-5 w-full mt-4">
        <p className="text-3xl w-1/3">
          تأجير الأدوات بالساعة أو يوميًا من Alpha Tools
          <br />
          اصنعها بنفسك مع محترفين!
          <br />
          وفر على نفسك تكلفة الشراء، الصيانة، والتخزين.
          <br />
          تأجير الأدوات بالساعة أو يوميًا من Alpha Tools
          <br />
          اصنعها بنفسك مع محترفين!
          <br />
          وفر على نفسك تكلفة الشراء، الصيانة، والتخزين.
        </p>
        <Image
          src={images.aboutUs}
          alt="makita-logo"
          className="w-1/3"
        />
      </div>
    </section>
);
}

export default AboutUs;
