"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import useTextDirection from "@/hooks/useTextDirection";

type CarouselProps = {
  slides: { name: string; content: React.ReactNode }[];
  showNav?: boolean;
  loop?: boolean;
  className?: string;
};

const CarouselWithNav: React.FC<CarouselProps> = ({
  slides,
  showNav = true,
  loop = false,
  className,
}) => {
  const dir = useTextDirection();
  const [carouselRef, api] = useEmblaCarousel({ loop, direction: dir });
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const navRef = React.useRef<HTMLDivElement>(null);

  // Function to move to a specific slide and sync the tab scroll position
  const scrollTo = (index: number) => {
    api?.scrollTo(index);
    setSelectedIndex(index);
    syncTabsScroll(index);
  };

  // Ensure active tab is always centered
  const syncTabsScroll = (index: number) => {
    if (!navRef.current) return;

    const activeTab = navRef.current.children[index] as HTMLElement;
    if (activeTab) {
      const navContainer = navRef.current;
      const offset =
        activeTab.offsetLeft -
        navContainer.clientWidth / 2 +
        activeTab.clientWidth / 2;
      navContainer.scrollTo({ left: offset, behavior: "smooth" });
    }
  };

  // Sync navbar scrolling when navigating with arrows
  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      const newIndex = api.selectedScrollSnap();
      setSelectedIndex(newIndex);
      syncTabsScroll(newIndex);
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className={cn("relative w-full", className)} dir={dir}>
      {/* Scrollable Navigation Bar */}
      {showNav && (
        <div className="no-scrollbar w-full overflow-x-auto">
          <div
            ref={navRef}
            className="carousel_with_nav_scrollbar flex space-x-4 overflow-x-auto whitespace-nowrap px-4 pb-2"
            style={{
              scrollBehavior: "smooth",
            }} // Ensures smooth scrolling
          >
            {slides.map((slide, index) => (
              <button
                key={index}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors",
                  selectedIndex === index
                    ? "rounded-md bg-primary text-white"
                    : "text-gray-500 hover:text-gray-700",
                )}
                onClick={() => scrollTo(index)}
              >
                {slide.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Navigation Arrows */}
      <div className="flex-center mb-3 mt-4 gap-2">
        <Button
          className="rounded-full bg-[#B3658C4D] p-2"
          disabled={!loop && selectedIndex === 0}
          onClick={() => scrollTo(selectedIndex - 1)}
        >
          {dir === "ltr" ? (
            <MdKeyboardArrowLeft className="h-6 w-6" />
          ) : (
            <MdOutlineKeyboardArrowRight className="h-6 w-6" />
          )}
        </Button>

        <Button
          className="rounded-full bg-[#B3658C4D] p-2"
          disabled={!loop && selectedIndex === slides.length - 1}
          onClick={() => scrollTo(selectedIndex + 1)}
        >
          {dir === "ltr" ? (
            <MdOutlineKeyboardArrowRight className="h-6 w-6" />
          ) : (
            <MdKeyboardArrowLeft className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={carouselRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="flex min-w-full justify-center p-4">
              {slide.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselWithNav;
