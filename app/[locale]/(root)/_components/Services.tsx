import { images } from "@/lib/data/images";
import Image from "next/image";
import { useLocale } from "next-intl";
import { Locale } from "@/i18n.config";

function Services() {
  const currentLocale = useLocale() as Locale;

  return (
    <section id="services" className="w-full">
      <h1 className="text-center text-5xl font-bold text-black">
        {currentLocale === "en" ? "Services We Provide" : "الخدمات التي نقدمها"}
      </h1>
      <div className="flex w-2/3 flex-row items-center justify-center gap-5 flex-wrap mx-auto">
        <div className="w-1/5 bg-gray-300">
          <div className="relative w-full aspect-square overflow-hidden">
            <Image
              src={images.concreteCutService}
              alt="man cutting concrete"
              fill
              className="object-cover"
            />
          </div>
          <p className="w-full text-center text-black p-2">
            Lorem ipsum dolor sit.
          </p>
        </div>
        <div className="w-1/5 bg-gray-300">
          <div className="relative w-full aspect-square overflow-hidden">
            <Image
              src={images.concreteCutService}
              alt="man cutting concrete"
              fill
              className="object-cover"
            />
          </div>
          <p className="w-full text-center text-black p-2">
            Lorem ipsum dolor sit.
          </p>
        </div>
        <div className="w-1/5 bg-gray-300">
          <div className="relative w-full aspect-square overflow-hidden">
            <Image
              src={images.concreteCutService}
              alt="man cutting concrete"
              fill
              className="object-cover"
            />
          </div>
          <p className="w-full text-center text-black p-2">
            Lorem ipsum dolor sit.
          </p>
        </div>
        <div className="w-1/5 bg-gray-300">
          <div className="relative w-full aspect-square overflow-hidden">
            <Image
              src={images.concreteCutService}
              alt="man cutting concrete"
              fill
              className="object-cover"
            />
          </div>
          <p className="w-full text-center text-black p-2">
            Lorem ipsum dolor sit.
          </p>
        </div>
        <div className="w-1/5 bg-gray-300">
          <div className="relative w-full aspect-square overflow-hidden">
            <Image
              src={images.concreteCutService}
              alt="man cutting concrete"
              fill
              className="object-cover"
            />
          </div>
          <p className="w-full text-center text-black p-2">
            Lorem ipsum dolor sit.
          </p>
        </div>
        <div className="w-1/5 bg-gray-300">
          <div className="relative w-full aspect-square overflow-hidden">
            <Image
              src={images.concreteCutService}
              alt="man cutting concrete"
              fill
              className="object-cover"
            />
          </div>
          <p className="w-full text-center text-black p-2">
            Lorem ipsum dolor sit.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
