"use client";

import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

type IntroVideoProps = {
  url: string;
  className?: string;
  containerClassName?: string;
};

const IntroVideo = (props: IntroVideoProps) => {
  return (
    <section className={cn("mt-10 w-full sm:mt-16", props.containerClassName)}>
      <div
        className={cn(
          "flex-center relative mx-auto aspect-[2.14] max-w-[1200px] rounded-xl bg-secondary-background",
          props.className,
        )}
      >
        <div className="absolute -top-[16%] h-[110%] w-[94%] overflow-hidden rounded-xl">
          <ReactPlayer
            url={props.url}
            height={"100%"}
            width={"100%"}
            // poster={images.treatment_bg.src}
          />
        </div>
      </div>
    </section>
  );
};

export default IntroVideo;
