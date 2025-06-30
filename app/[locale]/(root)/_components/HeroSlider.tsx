"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides, images } from "@/lib/data/images";
import AlphaToolsLogo from "@/assets/images/alpha-tools-logo-colored.svg";
export default function HeroSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative h-[420px] w-full">
      <Swiper
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{ delay: 5000 }}
        loop
        onBeforeInit={(swiper) => {
          if (typeof swiper.params.navigation !== "boolean") {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        className="h-full w-full"
      >
        {heroSlides.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`Hero Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="rtl absolute inset-0 z-10 flex items-center justify-center text-black">
        <div className="w-1/4 h-full pt-10 pr-10 text-right bg-gradient-to-bl from-white to-transparent transform -skew-x-12">
          <h1 className="text-xl font-bold leading-snug mb-2 sm:text-3xl">
            تأجير {" "}
            <span className="text-3xl text-primary-background sm:text-5xl">الأدوات..</span>
          </h1>
          <h1 className="text-xl font-bold leading-snug mb-2 mr-20 sm:text-3xl">و</h1>
          <h1 className="text-3xl font-bold leading-snug text-primary-background mr-24 mb-2 sm:text-5xl">
            الخدمات
          </h1>
          <h1 className="text-xl font-bold leading-snug mr-20 sm:text-3xl">بالساعة أو يوميا</h1>
          <div className="w-full flex flex-row justify-start gap-8 items-start">
            <h1 className="text-xl font-bold leading-snug mr-28 sm:text-3xl">من</h1>
            <div
              className="w-40 h-40 bg-primary-background"
              style={{
                WebkitMaskImage: `url(${images.alphaToolsLogo.src})`,
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                WebkitMaskSize: 'contain',
                maskImage: `url(${images.alphaToolsLogo.src})`,
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
                maskSize: 'contain',
              }}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-[-25px] left-1/2 z-20 w-11/12 -translate-x-1/2 transform sm:w-[600px]">
        <input
          type="text"
          placeholder="...اسم الأداة او الخدمة؟"
          className="w-full rounded-full border px-5 py-3 text-right shadow-lg placeholder:text-gray-400"
        />
      </div>

      <button
        ref={prevRef}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/70 p-2 shadow hover:bg-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-gray-700" />
      </button>
      <button
        ref={nextRef}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/70 p-2 shadow hover:bg-white"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-gray-700" />
      </button>
    </div>
  );
}
