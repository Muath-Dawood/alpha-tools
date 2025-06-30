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
      <div className="flex w-2/3 flex-row items-center justify-center gap-5 flex-wrap mx-auto mt-4">
        <div className="w-1/4 relative aspect-square bg-gray-300">
          <div className="absolute inset-0 flex flex-col w-full">
            <div className="flex-[4] relative">
              <Image
                src={images.concreteCutService}
                alt="man cutting concrete"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-[1]">
              <p className="w-full text-center text-black p-2">
                Lorem ipsum dolor sit.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/4 relative aspect-square bg-gray-200">
          <div className="absolute inset-0 flex flex-col w-full">
            <div className="flex-[4] relative">
              <Image
                src={images.concreteCoreService}
                alt="man cutting concrete"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-[1]">
              <p className="w-full text-center text-black p-2">
                Lorem ipsum dolor sit.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/4 relative aspect-square bg-gray-200">
          <div className="absolute inset-0 flex flex-col w-full">
            <div className="flex-[4] relative">
              <Image
                src={images.demolationService}
                alt="man cutting concrete"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-[1]">
              <p className="w-full text-center text-black p-2">
                Lorem ipsum dolor sit.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/4 relative aspect-square bg-gray-200">
          <div className="absolute inset-0 flex flex-col w-full">
            <div className="flex-[4] relative">
              <Image
                src={images.rockCrushService}
                alt="man cutting concrete"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-[1]">
              <p className="w-full text-center text-black p-2">
                Lorem ipsum dolor sit.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/4 relative aspect-square bg-gray-200">
          <div className="absolute inset-0 flex flex-col w-full">
            <div className="flex-[4] relative">
              <Image
                src={images.cctvService}
                alt="man cutting concrete"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-[1]">
              <p className="w-full text-center text-black p-2">
                Lorem ipsum dolor sit.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/4 relative aspect-square bg-gray-200">
          <div className="absolute inset-0 flex flex-col w-full">
            <div className="flex-[4] relative">
              <Image
                src={images.concreteScarifyService}
                alt="man cutting concrete"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-[1]">
              <p className="w-full text-center text-black p-2">
                Lorem ipsum dolor sit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
