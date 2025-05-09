import { images } from "@/lib/data/images";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Accordion from "@/components/shared/Accordion";
import Animate from "@/components/shared/Animate";
import useTextDirection from "@/hooks/useTextDirection";
import { cn } from "@/lib/utils";
import { Locale } from "@/i18n.config";
const Faq = () => {
  const translation = useTranslations("faq");
  const dir = useTextDirection();
  const locale = useLocale() as Locale;
  return (
    <section
      className="flex w-full flex-col gap-10"
      id={locale === "ar" ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
    >
      <div className="text-center">
        <h2 className="text-[40px] font-[700] leading-[52px] text-[#3D3D3D]">
          <Animate
            fromRight={dir === "ltr" ? 100 : -100}
            toRight={0}
            initialOpacity={0}
            finalOpcaity={1}
            wrapper="span"
            once={true}
          >
            {translation.rich("title", {
              span: (chunks) => <div>{chunks}</div>,
            })}
          </Animate>
        </h2>

        <p className="text-[18px] text-[#9F9F9F]">
          <Animate
            fromLeft={dir === "ltr" ? 100 : -100}
            toLeft={0}
            initialOpacity={0}
            finalOpcaity={1}
            wrapper="span"
            once={true}
          >
            {translation("desc")}
          </Animate>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-[30px] rounded-[25px] px-[41px] py-[61px] shadow-[0px_0px_6px_0px_#9E9E9E40] lg:grid-cols-3">
        <div
          className={cn(
            "flex flex-col items-center justify-center gap-7 rounded-[20px] p-6 text-center shadow-md lg:rounded-none",
            `${dir == "ltr" ? "lg:rounded-l-[20px]" : "lg:rounded-r-[20px]"}`,
          )}
          style={{
            background:
              "linear-gradient(239.48deg, #0E948A 16.91%, rgba(255, 255, 255, 0.6) 98.33%)",
          }}
        >
          <Image
            src={images.hijabi_doctor}
            className="w-[35%] rounded-xl object-cover lg:w-full xl:w-full"
            alt="doctor"
          />
          <h1 className="text-[32px] font-medium text-[#3D3D3D]">
            {translation("Need help?  Talk to our expert")}
          </h1>

          <a href="tel:+970598070808">
            <button className="btn-effects flex h-[55px] max-w-[332px] items-center justify-center rounded-[10px] bg-primary-background px-[20px] py-[18px] text-[18px] font-[600] uppercase text-white lg:px-[60px] xl:px-[88px]">
              {translation("Talk to our expert now!")}
            </button>
          </a>
        </div>

        <div className="lg:col-span-2">
          <Accordion
            title={translation(
              "should I visit the doctor after childbirth.title",
            )}
            isShadow={false}
            iconContainerClassName="border-none"
            className=""
            titleClassName="text-base leading-5"
          >
            <div className="overflow-hidden text-[16px] font-[500] text-[#6D6D6D]">
              {translation("should I visit the doctor after childbirth.desc")}
            </div>
          </Accordion>
          <Accordion
            title={translation(
              "are there foods or practices to avoid during pregnancy.title",
            )}
            isShadow={false}
            iconContainerClassName="border-none"
            className=""
            titleClassName="text-base leading-5"
          >
            <div className="overflow-hidden text-[16px] font-[500] text-[#6D6D6D]">
              {translation(
                "are there foods or practices to avoid during pregnancy.desc",
              )}
            </div>
          </Accordion>
          <Accordion
            title={translation("can I travel during pregnancy.title")}
            isShadow={false}
            iconContainerClassName="border-none"
            className=""
            titleClassName="text-base leading-5"
          >
            <div className="overflow-hidden text-[16px] font-[500] text-[#6D6D6D]">
              {translation("can I travel during pregnancy.desc")}
            </div>
          </Accordion>
          <Accordion
            title={translation(
              "what are the early symptoms of uterine cancer.title",
            )}
            isShadow={false}
            iconContainerClassName="border-none"
            className=""
            titleClassName="text-base leading-5"
          >
            <div className="overflow-hidden text-[16px] font-[500] text-[#6D6D6D]">
              {translation(
                "what are the early symptoms of uterine cancer.desc",
              )}
            </div>
          </Accordion>
          <Accordion
            title={translation(
              "how is polycystic ovary syndrome (PCOS) diagnosed.title",
            )}
            isShadow={false}
            iconContainerClassName="border-none"
            className=""
            titleClassName="text-base leading-5"
          >
            <div className="overflow-hidden text-[16px] font-[500] text-[#6D6D6D]">
              {translation(
                "how is polycystic ovary syndrome (PCOS) diagnosed.desc",
              )}
            </div>
          </Accordion>
          <Accordion
            title={translation(
              "can polycystic ovary syndrome (PCOS) be completely cured.title",
            )}
            isShadow={false}
            iconContainerClassName="border-none"
            className=""
            titleClassName="text-base leading-5"
          >
            <div className="overflow-hidden text-[16px] font-[500] text-[#6D6D6D]">
              {translation(
                "can polycystic ovary syndrome (PCOS) be completely cured.desc",
              )}
            </div>
          </Accordion>
          <Accordion
            title={translation("what is the best contraceptive method.title")}
            isShadow={false}
            iconContainerClassName="border-none"
            className=""
            titleClassName="text-base leading-5"
          >
            <div className="overflow-hidden text-[16px] font-[500] text-[#6D6D6D]">
              {translation("what is the best contraceptive method.desc")}
            </div>
          </Accordion>
          <Accordion
            title={translation("what are emergency contraceptive pills.title")}
            isShadow={false}
            iconContainerClassName="border-none"
            className=""
            titleClassName="text-base leading-5"
          >
            <div className="overflow-hidden text-[16px] font-[500] text-[#6D6D6D]">
              {translation("what are emergency contraceptive pills.desc")}
            </div>
          </Accordion>
          <Accordion
            title={translation(
              "what is the difference between menopause and perimenopause.title",
            )}
            isShadow={false}
            iconContainerClassName="border-none"
            className=""
            titleClassName="text-base leading-5"
          >
            <div className="overflow-hidden text-[16px] font-[500] text-[#6D6D6D]">
              {translation(
                "what is the difference between menopause and perimenopause.desc",
              )}
            </div>
          </Accordion>
          <Accordion
            title={translation("can an ectopic pregnancy be saved.title")}
            isShadow={false}
            iconContainerClassName="border-none"
            className=""
            titleClassName="text-base leading-5"
          >
            <div className="overflow-hidden text-[16px] font-[500] text-[#6D6D6D]">
              {translation("can an ectopic pregnancy be saved.desc")}
            </div>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
