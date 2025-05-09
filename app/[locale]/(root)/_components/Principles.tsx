import GetInTouch from "./GetInTouch";
import { images } from "@/lib/data/images";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Principles = () => {
  const translation = useTranslations("principle tha drive use");

  return (
    <section className="w-screen bg-[#0E948A] px-5">
      <div className="mx-auto max-w-[1400px] py-12 text-white">
        <div className="flex-center items-start xl:gap-[6%] 2xl:gap-[10%]">
          <div className="hidden h-auto max-w-[38%] border-b border-white xl:block">
            <Image src={images.closeUpDoctor} alt="dotor" />
          </div>

          <div className="flex-center flex-1 flex-col justify-start gap-6 sm:gap-8 md:gap-16 xl:mt-10 xl:items-start">
            <h2 className="text-xl font-medium sm:text-[2.5rem] sm:leading-[3.25rem]">
              {translation("Principles that Drives Us")}
            </h2>

            <div className="flex-center max-w-[43rem] flex-wrap items-start gap-5 sm:gap-10 md:gap-y-20 xl:max-w-none xl:justify-start">
              <div className="flex-center flex-col items-start justify-start gap-2 sm:gap-4">
                <div className="flex-center gap-2">
                  <div className="flex-center aspect-square w-12 rounded-sm bg-[#91BDBA80] sm:w-[3.75rem]">
                    <Image
                      src={images.clockLight}
                      alt="clock"
                      className="h-auto w-8 sm:w-auto"
                    />
                  </div>

                  <p className="max-w-36 text-lg font-medium leading-[150%] sm:text-xl">
                    {translation("24/7 Customer Support")}
                  </p>
                </div>

                <p className="max-w-80 leading-[150%]">
                  {translation("Our team is here 24/7")}
                </p>
              </div>

              <div className="flex-center flex-col items-start justify-start gap-2 sm:gap-4">
                <div className="flex-center gap-2">
                  <div className="flex-center aspect-square w-12 rounded-sm bg-[#91BDBA80] sm:w-[3.75rem]">
                    <Image
                      src={images.chat}
                      alt="chat"
                      className="h-auto w-8 sm:w-auto"
                    />
                  </div>

                  <p className="max-w-36 text-lg font-medium leading-[150%] sm:text-xl">
                    {translation("Direct Access to Experts")}
                  </p>
                </div>

                <p className="max-w-80 leading-[150%]">
                  {translation("Connect with licensed")}
                </p>
              </div>

              <div className="flex-center flex-col items-start justify-start gap-2 sm:gap-4">
                <div className="flex-center gap-2">
                  <div className="flex-center aspect-square w-12 rounded-sm bg-[#91BDBA80] sm:w-[3.75rem]">
                    <Image
                      src={images.flash}
                      alt="flash"
                      className="h-auto w-8 sm:w-auto"
                    />
                  </div>

                  <p className="max-w-36 text-lg font-medium leading-[150%] sm:text-xl">
                    {translation("Timely Responses")}
                  </p>
                </div>

                <p className="max-w-80 leading-[150%]">
                  {translation("We respond quickly and efficiently")}
                </p>
              </div>

              <div className="flex-center flex-col items-start justify-start gap-2 sm:gap-4">
                <div className="flex-center gap-2">
                  <div className="flex-center aspect-square w-12 rounded-sm bg-[#91BDBA80] sm:w-[3.75rem]">
                    <Image
                      src={images.hugeiconsIdea}
                      alt="idea"
                      className="h-auto w-8 sm:w-auto"
                    />
                  </div>

                  <p className="max-w-36 text-lg font-medium leading-[150%] sm:text-xl">
                    {translation("Tailored Solutions")}
                  </p>
                </div>

                <p className="max-w-80 leading-[150%]">
                  {translation("We offer tailored mental health")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 lg:ms-10">
          <GetInTouch />
        </div>
      </div>
    </section>
  );
};

export default Principles;
