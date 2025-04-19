"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, Variant } from "framer-motion";
import { PropsWithChildren, useMemo } from "react";

type AnimatedTextProps = {
  wrapper?: keyof JSX.IntrinsicElements;
  fromX?: number | string;
  toX?: number | string;
  fromY?: number | string;
  toY?: number | string;
  fromRotate?: number | string;
  toRotate?: number | string;
  fromTop?: number | string;
  toTop?: number | string;
  fromBottom?: number | string;
  toBottom?: number | string;
  fromRight?: number;
  toRight?: number;
  fromLeft?: number;
  toLeft?: number;
  initialOpacity?: number;
  finalOpcaity?: number;
  fromScale?: number;
  toScale?: number;
  exitOpcaity?: number;
  exitTop?: number;
  exitBottom?: number;
  exitRight?: number;
  exitLeft?: number;
  once?: boolean;
  className?: string;
  duration?: number;
  delay?: number;
  customKey?: number | string;
};

const Animate = (props: PropsWithChildren<AnimatedTextProps>) => {
  const initial: Variant = {
    x: props.fromX,
    y: props.fromY,
    opacity: props.initialOpacity,
    top: props.fromTop,
    bottom: props.fromBottom,
    right: props.fromRight,
    left: props.fromLeft,
    scale: props.fromScale,
    rotate: props.fromRotate,
  };

  const animate: Variant = {
    x: props.toX,
    y: props.toY,
    opacity: props.finalOpcaity,
    top: props.toTop,
    bottom: props.toBottom,
    right: props.toRight,
    left: props.toLeft,
    scale: props.toScale,
    rotate: props.toRotate,
  };

  const exit: Variant = {
    opacity: props.exitOpcaity,
    top: props.exitTop,
    bottom: props.exitBottom,
    right: props.exitRight,
    left: props.exitLeft,
  };

  const MotionWrapper = useMemo(() => {
    return motion.create(props.wrapper ? props.wrapper : "div");
  }, []);

  return (
    <AnimatePresence mode="wait">
      <MotionWrapper
        key={props.customKey}
        className={cn("relative", props.className)}
        initial={"initial"}
        whileInView={"animate"}
        exit={"exit"}
        variants={{
          initial,
          animate,
          exit,
        }}
        transition={{
          duration: props.duration ? props.duration : 1,
          delay: props.delay ? props.delay : 0,
        }}
        viewport={{ once: props.once }}
      >
        {props.children}
      </MotionWrapper>
    </AnimatePresence>
  );
};

export default Animate;
