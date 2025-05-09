"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { ReactNode, useState } from "react";
import { CgMathMinus } from "react-icons/cg";
import { GoPlus } from "react-icons/go";

type AccordionProps = {
  children: ReactNode;
  icon?: ReactNode;
  title: string;
  open?: boolean;
  isShadow?: boolean;
  titleClassName?: string;
  className?: string;
  iconClassName?: string;
  iconContainerClassName?: string;
  isArrowIcon?: boolean;
};

const Accordion = (props: AccordionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(props.open ?? false);
  const isShadow = props.isShadow ?? true;

  return (
    <div
      className={`${isShadow ? "shadow-[0.0125rem_0.25rem_0.4375rem_0rem_rgba(0,0,75,0.15)]" : ""} flex w-full flex-col overflow-hidden border-b-[0.0625rem] border-b-[1px] px-[10px] py-[20px]`}
    >
      <div
        className={cn(
          "flex cursor-pointer items-center justify-between",
          props.className,
        )}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className={`flex-center gap-1`}>
          <div className="hidden sm:block">{props.icon}</div>
          <span
            className={cn(
              "text-lg font-medium leading-5 sm:text-xl sm:leading-[1.875rem]",
              props.titleClassName,
              isOpen ? "text-primary-background" : "text-[#6D6D6D]",
            )}
          >
            {props.title}
          </span>
        </div>

        {props.isArrowIcon ? (
          <ChevronDown
            className={cn(
              `h-auto min-w-6 sm:min-w-8 ${isOpen ? "-rotate-180" : ""} transition-transform duration-300`,
              props.iconClassName,
            )}
          />
        ) : isOpen ? (
          <CgMathMinus
            className={cn("h-auto min-w-6 sm:min-w-8", props.iconClassName)}
          />
        ) : (
          <GoPlus
            className={cn("h-auto min-w-6 sm:min-w-8", props.iconClassName)}
          />
        )}
      </div>

      <div
        className={`${isOpen ? (isShadow ? "grid-rows-[1fr] pb-5" : "grid-rows-[1fr]") : "grid-rows-[0fr] pb-0"} grid transition-all duration-300`}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Accordion;
