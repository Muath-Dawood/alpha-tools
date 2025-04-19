"use client";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import useTextDirection from "@/hooks/useTextDirection";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

type CarouselSectionProps = {
  children: ReactNode;
  title: string;
  desc: string;
  align?: "start" | "end" | "center";
  section_header_classes?: string;
};

const CarouselSection = ({
  children,
  align = "start",
}: CarouselSectionProps) => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const dir = useTextDirection();

  // useEffect(() => {
  //   // Ensure that the reference is ready and accessible
  //   if (ref.current) {
  //     console.log("Carousel root node is ready:", ref.current);
  //   }
  // }, [ref]);

  return (
    <div
      ref={ref}
      className="relative flex w-full flex-col items-center justify-between gap-7"
    >
      <div className="flex-center w-full gap-4">
        <button
          type="button"
          name="previous"
          className={`${dir === "rtl" ? "rotate-180" : ""} flex-center group h-11 w-11 cursor-pointer rounded-full bg-[#FEFEFF] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_5px_5px_0px_rgba(0,0,0,0.09),0px_11px_7px_0px,rgba(0,0,0,0.05),0px_20px_8px_0px_rgba(0,0,0,0.01),0px_31px_9px_0px_rgba(0,0,0,0)] transition-all active:scale-95 active:bg-secondary-foreground`}
          onClick={() => api?.scrollPrev()}
        >
          <MdOutlineKeyboardArrowLeft className="h-6 w-6 text-secondary-background transition-all group-active:text-white sm:group-hover:text-secondary-foreground sm:group-active:text-white" />
        </button>

        <button
          type="button"
          name="next"
          className={`${dir === "rtl" ? "rotate-180" : ""} flex-center group h-11 w-11 cursor-pointer rounded-full bg-secondary-background shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_5px_5px_0px_rgba(0,0,0,0.09),0px_11px_7px_0px,rgba(0,0,0,0.05),0px_20px_8px_0px_rgba(0,0,0,0.01),0px_31px_9px_0px_rgba(0,0,0,0)] transition-all active:scale-95 active:bg-secondary-foreground`}
          onClick={() => api?.scrollNext()}
        >
          <MdOutlineKeyboardArrowRight className="h-6 w-6 text-background transition-all group-active:text-white sm:group-hover:text-secondary-foreground sm:group-active:text-white" />
        </button>
      </div>

      <Carousel
        setApi={setApi}
        opts={{
          align,
          loop: true, // Infinite loop enabled
          direction: dir, // Carousel direction
        }}
        plugins={[
          AutoScroll({
            speed: 1, // Speed of the auto scroll
            stopOnInteraction: false, // Whether to stop scrolling when the user interacts
            stopOnMouseEnter: true, // Stop on mouse enter for better UX
            stopOnFocusIn: true, // Stop on focus for accessibility
            rootNode: () => ref.current as HTMLElement, // Ensure that ref.current is correctly casted
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>{children}</CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselSection;
