"use client";
import { images } from "@/lib/data/images";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { reviewVideos } from "@/lib/data/experienceVideos";
import { useRef, useState } from "react";
import Animate from "@/components/shared/Animate";
import dynamic from "next/dynamic";
import AutoScroll from "embla-carousel-auto-scroll";
import { Locale } from "@/i18n.config";

const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

const Experience = () => {
  const translation = useTranslations("experience");
  const locale = useLocale() as Locale;

  const [playingVideoIndex, setPlayingVideoIndex] = useState<number>(-1);
  const ref = useRef<HTMLDivElement | null>(null);

  const handlePlay = (index: number) => {
    setPlayingVideoIndex(index);
  };

  return (
    <section
      className="relative mb-20 w-full text-center"
      dir="ltr"
      id={locale === "ar" ? "تجارب ملهمة" : "inspiring experiences"}
    >
      <h2 className="text-[40px] font-bold leading-[3.25rem]">
        <Animate
          fromTop={60}
          toTop={0}
          initialOpacity={0}
          finalOpcaity={1}
          wrapper="span"
          once={true}
        >
          {translation("title")}
        </Animate>
      </h2>
      <h2 className="text-[18px] text-[#9F9F9F]">
        <Animate
          fromTop={60}
          toTop={0}
          initialOpacity={0}
          finalOpcaity={1}
          wrapper="span"
          once={true}
        >
          {translation("subtitle")}
        </Animate>
      </h2>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          AutoScroll({
            speed: 1, // Speed of the auto scroll
            stopOnInteraction: false, // Whether to stop scrolling when the user interacts
            stopOnMouseEnter: true, // Stop on mouse enter for better UX
            stopOnFocusIn: true, // Stop on focus for accessibility
            rootNode: () => ref.current as HTMLDivElement, // Ensure that ref.current is correctly casted
          }),
        ]}
        ref={ref}
        className="w-full"
      >
        <CarouselContent className="mt-10">
          {reviewVideos.map((video, i) => (
            <CarouselItem
              className="experience-card basis-full md:basis-1/2 xl:basis-1/3 [&>div]:p-6"
              key={i}
            >
              <div className="flex-center mx-auto w-full max-w-[28.3125rem] items-start overflow-hidden md:max-w-none">
                <ReactPlayer
                  url={video.url}
                  // poster={images.treatment.src}
                  playing={playingVideoIndex === i}
                  onPlay={() => handlePlay(i)}
                  className="h-full w-full overflow-hidden rounded-[20px] object-cover"
                  height={"100%"}
                  width={"100%"}
                  controls={true}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="-bottom-20 end-12 start-auto top-auto h-8 w-8 bg-[#B3658C] text-white active:bg-primary-background sm:-bottom-24 sm:end-16 sm:h-[2.8125rem] sm:w-[2.8125rem]" />
        <CarouselNext className="-bottom-20 end-0 start-auto top-auto h-8 w-8 bg-[#B3658C] text-white active:bg-primary-background sm:-bottom-24 sm:h-[2.8125rem] sm:w-[2.8125rem]" />
      </Carousel>

      <Image src={images.lines} alt="lines" className="absolute top-5 -z-10" />
    </section>
  );
};

export default Experience;
