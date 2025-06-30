import Image from "next/image";
import { useLocale } from "next-intl";
import { Locale } from "@/i18n.config";
import { toolsCategories } from "@/lib/data/categories";

function ToolsForRent() {
  const currentLocale = useLocale() as Locale;

  return (
    <section id="tools categories" className="w-full">
      <h1 className="text-center text-5xl font-bold text-black">
        {currentLocale === "en" ? "Choose Tools Category For Rent" : "اختيار فئة الأدوات للإيجار"}
      </h1>
      <div className="flex w-3/4 flex-row items-center justify-center gap-5 flex-wrap mx-auto mt-4">
        {toolsCategories.map(cat => (
          <div key={cat.id} className="w-1/5 relative aspect-square bg-gray-200">
            <div className="absolute inset-0 flex flex-col w-full">
              <div className="flex-[4] relative">
                <Image
                  src={cat.image_url}
                  alt="man cutting concrete"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-[1]">
                <p className="w-full text-center text-black text-lg font-bold p-2">
                  {cat.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ToolsForRent;
