'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '@/lib/data/images';

export default function HeroSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative w-full h-[420px]">
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
          if (typeof swiper.params.navigation !== 'boolean') {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        className="w-full h-full"
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

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center justify-center rtl text-white z-10">
        <div className="text-center px-4">
          <h1 className="text-3xl sm:text-5xl font-bold leading-snug">
            تأجير الأدوات والخدمات<br />بالساعة أو يومياً
          </h1>
          <p className="text-orange-500 font-bold mt-2">Alpha Tools</p>
        </div>
      </div>

      {/* Search bar overlay */}
      <div className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 z-20 w-11/12 sm:w-[600px]">
        <input
          type="text"
          placeholder="...اسم الأداة او الخدمة؟"
          className="w-full rounded-full border px-5 py-3 shadow-lg text-right placeholder:text-gray-400"
        />
      </div>

      {/* Lucide Navigation Arrows */}
      <button
        ref={prevRef}
        className="absolute top-1/2 left-4 -translate-y-1/2 z-20 bg-white/70 hover:bg-white rounded-full p-2 shadow"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>
      <button
        ref={nextRef}
        className="absolute top-1/2 right-4 -translate-y-1/2 z-20 bg-white/70 hover:bg-white rounded-full p-2 shadow"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>
    </div>
  );
}
