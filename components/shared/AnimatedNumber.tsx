"use client";
import { animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type AnimatedNumberProps = {
  to: number;
  from: number;
  displayed: string;
};
const AnimatedNumber = (props: AnimatedNumberProps) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(props.from, props.to, {
      duration: 1.25,
      onUpdate(value) {
        if (ref?.current) {
          if (value === props.to) ref.current.textContent = props.displayed;
          else ref.current.textContent = value.toFixed(0);
        }
      },
    });
    return () => controls.stop();
  }, [isInView, ref]);

  return <span ref={ref}>{props.from}</span>;
};

export default AnimatedNumber;
