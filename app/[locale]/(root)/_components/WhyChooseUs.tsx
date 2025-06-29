import { images } from "@/lib/data/images";
import Image from "next/image";
import { useLocale } from "next-intl";
import { Locale } from "@/i18n.config";

function WhyChooseUs() {
  const currentLocale = useLocale() as Locale;

  return (
    <section id="why choose us" className="w-full">
      <h1 className="text-center text-5xl font-bold text-black">
        {currentLocale === "en" ? "Why Choose Us?" : "لماذا عليك اختيارنا؟"}
      </h1>
      <div className="flex h-32 w-full flex-row justify-center gap-5 mt-4 bg-primary-background">
        <div className="frlex-row flex w-[15%] items-center gap-2">
          <Image
            src={images.pricesIcon}
            alt="easy return icon"
            className="w-28"
          />
          <p className="text-white">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="frlex-row flex w-[15%] items-center gap-2">
          <Image
            src={images.delivaryIcon}
            alt="easy return icon"
            className="w-28"
          />
          <p className="text-white">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="frlex-row flex w-[15%] items-center gap-2">
          <Image
            src={images.satisfactionIcon}
            alt="easy return icon"
            className="w-28"
          />
          <p className="text-white">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="frlex-row flex w-[15%] items-center gap-2">
          <Image
            src={images.easyIcon}
            alt="easy return icon"
            className="w-28"
          />
          <p className="text-white">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
