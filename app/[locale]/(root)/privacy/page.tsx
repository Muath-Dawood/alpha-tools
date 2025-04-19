import { images } from "@/lib/data/images";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { unstable_setRequestLocale } from "next-intl/server";
import { Locale } from "@/i18n.config";

const page = ({ params }: { params: { locale: Locale } }) => {
  unstable_setRequestLocale(params.locale);
  const translation = useTranslations("privacy");

  return (
    <main className="flex-center mx-auto mb-20 mt-7 w-full flex-col items-start gap-16 px-5 2xl:px-0">
      <div className="flex-center relative h-[23.125rem] w-full flex-col items-center gap-6 rounded-[1.25rem] bg-gradient-to-r from-[#C8E9D2] from-50% to-[#F7D7B1] px-4 lg:items-start xl:items-center">
        <h1 className="text-2xl font-medium leading-8 -tracking-tight sm:text-4xl sm:leading-[2.75rem] lg:text-[3.75rem] lg:leading-[4.5rem]">
          {translation("title")}
        </h1>

        <div className="flex-center flex-col gap-3">
          <p className="text-center text-lg leading-6 sm:text-[1.5625rem] sm:leading-[1.5625rem]">
            {translation("desc")}
          </p>
          <p>
            {translation("date", { day: "07", month: "July", year: "2024" })}
          </p>
        </div>

        <Image
          src={images.privacy}
          alt="privacy"
          priority
          className="absolute end-0 top-1/2 hidden h-auto w-[18.75rem] -translate-y-1/2 lg:block 2xl:end-[5%]"
        />
      </div>

      <div className="flex w-full flex-col gap-4">
        <div className="flex-center lmd:px-10 flex-col gap-[3rem] rounded-md bg-white p-5 shadow-[0_0px_6px_-1px_rgb(0_0_0_/_0.1),0_2px_4px_-2px_rgb(0_0_0_/_0.1)] [&_h2]:text-lg [&_h2]:font-semibold sm:[&_h2]:text-2xl sm:[&_h2]:leading-[1.5rem] [&_h3]:text-base [&_h3]:font-medium sm:[&_h3]:text-xl sm:[&_h3]:leading-[1.25rem] [&_p]:text-base sm:[&_p]:text-lg sm:[&_p]:leading-[1.7rem]">
          <div className="flex-center w-full flex-col items-start gap-5">
            <h2>{translation("introduction")}</h2>
            <p>{translation("introduction text")}</p>
          </div>

          <ol className="flex-center flex-col gap-[2rem]">
            <li className="flex-center w-full flex-col items-start gap-5">
              <h2>1. {translation("data we collect")}</h2>
              <p>{translation("data we collect text")}</p>

              <div className="flex-center ms-2 w-full flex-col items-start gap-4">
                <div className="flex-center ms-2 w-full flex-col items-start gap-3">
                  <h3>1.1 {translation("personal information")}</h3>
                  <p>{translation("personal information text")}</p>
                </div>
              </div>
            </li>

            <li className="flex-center w-full flex-col items-start gap-5">
              <h2>2. {translation("how we use the data")}</h2>
              <p>{translation("how we use the data text")}</p>

              <div className="flex-center ms-2 w-full flex-col items-start gap-4">
                <div className="flex-center ms-2 w-full flex-col items-start gap-3">
                  <h3>2.1 {translation("specific purposes for data use")}</h3>
                  <p>{translation("specific purposes for data use text")}</p>
                </div>
              </div>
            </li>

            <li className="flex-center w-full flex-col items-start gap-5">
              <h2>3. {translation("data retention")}</h2>
              <p>{translation("data retention text")}</p>

              <div className="flex-center ms-2 w-full flex-col items-start gap-4">
                <div className="flex-center ms-2 w-full flex-col items-start gap-3">
                  <h3>3.1 {translation("security measures")}</h3>
                  <p>{translation("security measures text")}</p>
                </div>
              </div>
            </li>

            <li className="flex-center w-full flex-col items-start gap-5">
              <h2>4. {translation("data sharing")}</h2>
              <p>{translation("data sharing text")}</p>

              <div className="flex-center ms-2 w-full flex-col items-start gap-4">
                <div className="flex-center ms-2 w-full flex-col items-start gap-3">
                  <h3>4.1 {translation("who we can share data with")}</h3>
                  <p>{translation("who we can share data with text")}</p>
                </div>
              </div>
            </li>

            <li className="flex-center w-full flex-col items-start gap-5">
              <h2>5. {translation("user rights")}</h2>
              <p>{translation("user rights text")}</p>

              <div className="flex-center ms-2 w-full flex-col items-start gap-4">
                <div className="flex-center ms-2 w-full flex-col items-start gap-3">
                  <h3>5.1 {translation("accessing data")}</h3>
                  <p>{translation("accessing data text")}</p>
                </div>
              </div>
            </li>

            <li className="flex-center w-full flex-col items-start gap-5">
              <h2>6. {translation("changes to the privacy policy")}</h2>
              <p>{translation("changes to the privacy policy text")}</p>

              <div className="flex-center ms-2 w-full flex-col items-start gap-4">
                <div className="flex-center ms-2 w-full flex-col items-start gap-3">
                  <h3>6.1 {translation("notification of changes")}</h3>
                  <p>{translation("notification of changes text")}</p>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default page;
