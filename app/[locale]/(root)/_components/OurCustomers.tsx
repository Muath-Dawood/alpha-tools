import { images } from "@/lib/data/images";
import Image from "next/image";
import { useLocale } from "next-intl";
import { Locale } from "@/i18n.config";

function OurCustomers() {
  const currentLocale = useLocale() as Locale;

  return (
    <section className="w-full">
      <h1 className="text-5xl text-black text-center font-bold">{currentLocale === "en" ? "Our Customers" : "من زبائننا"}</h1>
      <div className="flex flex-row flex-wrap gap-20 justify-center w-full mt-4 px-36 py-10 bg-primary-background">
        <Image
          src={images.makitaLogo}
          alt="makita-logo"
          className="w-72"
        />
        <Image
          src={images.boschLogo}
          alt="makita-logo"
          className="w-72"
        />
        <Image
          src={images.blackAndDeckerLogo}
          alt="makita-logo"
          className="w-72"
        />
        <Image
          src={images.blackAndDeckerLogo}
          alt="makita-logo"
          className="w-72"
        />
        <Image
          src={images.makitaLogo}
          alt="makita-logo"
          className="w-72"
        />
        <Image
          src={images.dewaltLogo}
          alt="makita-logo"
          className="w-72"
        />
      </div>
    </section>
);
}

export default OurCustomers;
