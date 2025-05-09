import { TestimonialCardProps } from "@/types/testimonial";
import { useTranslations } from "next-intl";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

const TestimonialCard = (props: TestimonialCardProps) => {
  const translation = useTranslations("testimonials");

  return (
    <div
      dir="auto"
      className="relative mx-1 mb-11 mt-3 flex min-h-[379px] flex-col items-start justify-between gap-[30px] rounded-[20px] bg-opacity-[60%] text-center shadow-[0px_0px_9.8px_0px_#94949440] group-odd:-bottom-10"
      style={{
        background:
          "linear-gradient(690deg, rgba(14, 148, 138, 1) 50%, rgba(255, 255, 255, 0.6) 98.33%)",
      }}
    >
      <div className="flex w-full flex-col items-start justify-center gap-5 p-[20px]">
        <BiSolidQuoteAltRight className="h-[3.125rem] w-[3.125rem] text-[#046F67]" />

        <h3 className="mx-auto text-center text-[26px] font-[700] text-white">
          {props.title}
        </h3>

        <p
          className="text-[17px] font-[500] leading-7 text-white"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: "5",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {props.text}
        </p>
      </div>

      <div className="flex-center w-full justify-between rounded-b-[20px] bg-white p-[30px]">
        <p className="flex-center items-end gap-[2px]">
          <span className="text-[25px] font-[800] text-[#FFCC00]">
            {props.rating}
          </span>
          <span className="text-[25px] font-[500] text-white">/</span>
          <span className="text-[16px] font-[500] text-white">
            5.0 {translation("rating")}
          </span>
        </p>

        <div className="flex gap-1">
          <FaStar className="text-[27.87px] text-[#FFCC00]" />
          <FaStar className="text-[27.87px] text-[#FFCC00]" />
          <FaStar className="text-[27.87px] text-[#FFCC00]" />
          <FaStar className="text-[27.87px] text-[#FFCC00]" />
          <FaStar className="text-[27.87px] text-[#FFCC00]" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
