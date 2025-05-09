import { StaticImageData } from "next/image";
import Image from "next/image";
import useTextDirection from "@/hooks/useTextDirection";
import Animate from "@/components/shared/Animate";

type UnspokecnSectionProps = {
  mainImage: StaticImageData;
  title: string;
  desc: string;
  cardImage: StaticImageData;
  cards: {
    title: string;
    desc: string;
  }[];
  isReverse?: boolean;
};

const UnspokenSection = (props: UnspokecnSectionProps) => {
  const dir = useTextDirection();

  return (
    <div className="w-full">
      <div>
        <Animate
          fromRight={dir === "ltr" ? 100 : -100}
          toRight={0}
          initialOpacity={0}
          finalOpcaity={1}
          wrapper="h3"
          once={true}
          className="text-xl font-medium text-[#00AAA1] sm:text-[1.75rem] sm:leading-[150%]"
        >
          {props.title}
        </Animate>

        <Animate
          fromLeft={dir === "ltr" ? 100 : -100}
          toLeft={0}
          initialOpacity={0}
          finalOpcaity={1}
          wrapper="p"
          once={true}
          className="mt-1 max-w-[47.875rem] font-semibold text-[#6b6b6b]"
        >
          {props.desc}
        </Animate>
      </div>

      <div
        className={`${props.isReverse ? "md:flex-row-reverse md:justify-end" : "md:flex-row md:justify-start"} flex-center mt-12 w-full flex-col gap-4 md:items-start`}
      >
        <div className="group top-24 flex-1 overflow-hidden rounded-xl md:sticky">
          <Image
            src={props.mainImage}
            alt={props.title}
            className="transition-all duration-700 sm:group-hover:scale-[1.03]"
            style={{ animationTimingFunction: "ease" }}
          />
        </div>

        <div className="flex-center flex-col justify-start gap-5 md:max-w-[22.3125rem] lg:max-w-none">
          {props.cards.map((card) => (
            <div
              key={card.title}
              className="flex-center flex-col items-start justify-start gap-6 rounded-xl bg-[#0E948A] px-6 py-6 lg:h-[35.625rem] lg:w-[28.3125rem] lg:pe-16"
            >
              <Image
                src={props.cardImage}
                alt="unspoken issues 1"
                className="h-24 w-auto lg:h-36"
              />

              <div className="border-s-[0.1rem] border-white pb-2 ps-5 text-white">
                <h4 className="mb-6 text-xl font-medium leading-[150%] lg:mb-14 lg:text-3xl">
                  {card.title}
                </h4>

                <p className="leading-[150%] lg:text-[20px]">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnspokenSection;
