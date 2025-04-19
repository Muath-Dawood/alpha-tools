import { images } from "@/lib/data/images";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { unstable_setRequestLocale } from "next-intl/server";
import { Locale } from "@/i18n.config";

const page = ({ params }: { params: { locale: Locale } }) => {
  unstable_setRequestLocale(params.locale);
  const translation = useTranslations("terms");
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
          src={images.terms}
          alt="terms"
          priority
          className="absolute end-0 top-1/2 hidden h-auto w-[18.75rem] -translate-y-1/2 lg:block 2xl:end-[5%]"
        />
      </div>

      <div className="flex w-full flex-col gap-4">
        <div className="flex-center flex-col gap-[3rem] rounded-md bg-white p-5 shadow-[0_0px_6px_-1px_rgb(0_0_0_/_0.1),0_2px_4px_-2px_rgb(0_0_0_/_0.1)] lg:px-10 [&_h2]:text-lg [&_h2]:font-semibold sm:[&_h2]:text-2xl sm:[&_h2]:leading-[1.5rem] [&_h3]:text-base [&_h3]:font-medium sm:[&_h3]:text-xl sm:[&_h3]:leading-[1.25rem] [&_p]:text-base sm:[&_p]:text-lg sm:[&_p]:leading-[1.7rem]">
          <div className="flex-center w-full flex-col items-start gap-5">
            <h2>{translation("introduction")}</h2>
            <p>{translation("introduction text")}</p>
          </div>

          <ol className="flex-center flex-col gap-[2rem]">
            <li className="flex-center w-full flex-col items-start gap-5">
              <h2>1. {translation("objectives and scope")}</h2>
              <p>{translation("objectives and scope text")}</p>

              <ol className="flex-center ms-2 w-full flex-col items-start gap-4">
                <li className="flex-center ms-2 w-full flex-col items-start gap-3">
                  <h3>1.1 {translation("page objectives")}</h3>
                  <p>{translation("page objectivnes text")}</p>
                </li>

                <li className="flex-center ms-2 w-full flex-col items-start gap-3">
                  <h3>
                    1.2{" "}
                    {translation(
                      "scope of medical services for sexual health issues",
                    )}
                  </h3>
                  <p>
                    {translation(
                      "scope of medical services for sexual health issues text",
                    )}
                  </p>
                </li>
              </ol>
            </li>

            <li className="flex-center w-full flex-col items-start gap-5">
              <h2>2. {translation("general terms")}</h2>
              <p>{translation("general terms text 1")}</p>
              <p>{translation("general terms text 2")}</p>
              <p>{translation("general terms text 3")}</p>

              <ol className="flex-center ms-2 w-full flex-col items-start gap-4">
                <li className="flex-center ms-2 w-full flex-col items-start gap-3">
                  <h3>2.1 {translation("legal responsibility")}</h3>
                  <p>{translation("legal responsibility text")}</p>
                </li>

                <li className="flex-center ms-2 w-full flex-col items-start gap-3">
                  <h3>2.2 {translation("use of information")}</h3>
                  <p>{translation("use of information text")}</p>
                </li>
              </ol>
            </li>

            <li className="flex-center w-full flex-col items-start gap-5">
              <h2>3. {translation("medical content")}</h2>
              <p>{translation("medical content text")}</p>
            </li>

            <li className="flex-center w-full flex-col items-start gap-5">
              <h2>4. {translation("reliance on information")}</h2>
              <p>{translation("legal responsibility text")}</p>
            </li>

            <li className="flex-center w-full flex-col items-start gap-5">
              <h2>5. {translation("privacy and personal data")}</h2>
              <p>{translation("privacy and personal data text")}</p>

              <ol className="flex-center ms-2 w-full flex-col items-start gap-4">
                <li className="flex-center ms-2 w-full flex-col items-start gap-3">
                  <h3>5.1 {translation("data collection")}</h3>
                  <p>{translation("data collection text")}</p>
                </li>

                <li className="flex-center ms-2 w-full flex-col items-start gap-3">
                  <h3>5.2 {translation("data protection")}</h3>
                  <p>{translation("data protection text")}</p>
                </li>
              </ol>
            </li>

            <li className="flex-center w-full flex-col items-start gap-5">
              <h2>6. {translation("payments and fees")}</h2>
              <p>{translation("payments and fees text")}</p>
            </li>

            <li className="flex-center w-full flex-col items-start gap-5">
              <h2>7. {translation("modifications and updates")}</h2>
              <p>{translation("modifications and updates text")}</p>
            </li>

            <li className="flex-center w-full flex-col items-start gap-5">
              <h2>8. {translation("final terms")}</h2>
              <p>{translation("final terms text")}</p>

              <ol className="flex-center ms-2 w-full flex-col items-start gap-4">
                <li className="flex-center ms-2 w-full flex-col items-start gap-3">
                  <h3>8.1 {translation("applicable law")}</h3>
                  <p>{translation("applicable law text")}</p>
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default page;
