import { useTranslations } from "next-intl";
import AnimatedNumber from "./AnimatedNumber";

const Statistics = () => {
  const translation = useTranslations("statistics");

  return (
    <div className="flex-center mx-auto w-full max-w-[1024px] flex-col justify-between gap-y-8 md:flex-row lg:px-8">
      <div className="flex-center flex-col">
        <div className="bg-gradient-to-r from-[#0E948A] to-[#C5EAE9] bg-clip-text text-[3rem] leading-[3.25rem] text-transparent">
          <AnimatedNumber displayed="1,000" from={0} to={1000} />+
        </div>

        <div className="text-sm leading-6 text-[#6D6D6D]">
          {translation("successful consultations")}
        </div>
      </div>

      <div className="flex-center flex-col">
        <div className="bg-gradient-to-r from-[#0E948A] to-[#C5EAE9] bg-clip-text text-[3rem] leading-[3.25rem] text-transparent">
          <AnimatedNumber displayed="25" from={0} to={25} />+
        </div>

        <div className="text-sm leading-6 text-[#6D6D6D]">
          {translation("healthcare professionals")}
        </div>
      </div>

      <div className="flex-center flex-col">
        <div className="bg-gradient-to-r from-[#0E948A] to-[#C5EAE9] bg-clip-text text-[3rem] leading-[3.25rem] text-transparent">
          <AnimatedNumber displayed="98" from={0} to={98} />%
        </div>

        <div className="text-sm leading-6 text-[#6D6D6D]">
          {translation("patient satisfaction rate")}
        </div>
      </div>

      <div className="flex-center flex-col">
        <div className="bg-gradient-to-r from-[#0E948A] to-[#C5EAE9] bg-clip-text text-[3rem] leading-[3.25rem] text-transparent">
          <AnimatedNumber displayed="15" from={0} to={15} />+
        </div>

        <div className="text-sm leading-6 text-[#6D6D6D]">
          {translation("top specialists")}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
