import { Link } from "@/i18n.config";
import { images } from "@/lib/data/images";
import { useTranslations } from "next-intl";
import Image from "next/image";

const NotFound = () => {
  const translation = useTranslations("not found");

  return (
    <main className="flex-center mx-auto mt-7 w-full flex-col-reverse justify-around gap-4 px-5 lg:flex-row lg:px-20 lg:pt-12">
      <div className="flex-center flex-1 flex-col gap-4 text-center lg:min-w-[35rem] lg:items-start lg:text-start">
        <p className="text-xl font-extrabold leading-5 tracking-wide text-primary-background sm:text-[3.75rem] sm:leading-[3.75rem]">
          {translation("oops")}
        </p>
        <p className="text-xl font-extrabold leading-5 tracking-wide sm:text-[3.75rem] sm:leading-[3.75rem]">
          {translation("page not found")}
        </p>
        <p>{translation("the page you are looking for")}</p>

        <Link href={"/"} className="mt-12">
          <div className="flex-center gap-6 text-base text-white xs:text-lg xs:leading-5">
            <div className="btn-effects flex h-[52px] w-full min-w-[200px] items-center justify-center gap-2 rounded-[10px] bg-primary px-[30px] py-[16px] text-[16px] uppercase text-white">
              {translation("home page")}
            </div>
          </div>
        </Link>
      </div>

      <div className="max-w-[75%] flex-1 xs:max-w-[60%]">
        <Image
          src={images.notFound}
          alt="not found"
          priority
          className="ms-auto"
        />
      </div>
    </main>
  );
};

export default NotFound;
