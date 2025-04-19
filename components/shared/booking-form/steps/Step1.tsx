import { Category } from "@/actions/booking";
import { images } from "@/lib/data/images";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";

type Step1Props = {
  categoryId: string;
  setCategoryId: Dispatch<SetStateAction<string>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  categories: [] | Category[];
};

const Step1 = (props: Step1Props) => {
  return (
    <div className="flex-center w-full flex-wrap items-start gap-5 py-2 lg:h-[280px] lg:overflow-auto">
      {props.categories != null
        ? props.categories.map((category) => (
            <div
              key={category.title}
              className={`${category.pm_si === props.categoryId ? "border-[#B3658C]" : "border-[#F3F4F6]"} flex-center relative h-[13.5rem] w-full cursor-pointer flex-col items-start justify-start gap-4 rounded-[0.625rem] border-[0.125rem] px-6 py-5 shadow-[3.12px_9.37px_21.85px_0px_#0000000F] transition-all duration-300 xs:w-[20.9375rem] sm:hover:scale-105 sm:focus:scale-105`}
              onClick={() => props.setCategoryId(category.pm_si)}
            >
              <div className="flex-center h-8 w-8 rounded-[0.5rem] bg-[#B3658C21] xs:h-11 xs:w-11">
                <Image
                  src={images.hospitalUser}
                  alt={category.title}
                  className="h-auto w-4 xs:w-[1.375rem]"
                />
              </div>
              <h3 className="max-w-[90%] text-lg font-bold leading-5 text-primary-background xs:max-w-[16rem] xs:text-xl">
                {category.title}
              </h3>
              <p className="text-sm font-semibold leading-6 text-[#6D6D6D]">
                {category.description}
              </p>

              <div
                className={`${props.categoryId === category.pm_si ? "bg-primary-background" : "border-[0.14rem] border-[#A7A7A7]"} flex-center absolute end-4 top-4 h-6 w-6 rounded-full`}
              >
                {props.categoryId === category.pm_si ? (
                  <FaCheck className="h-3 w-3 text-white" />
                ) : null}
              </div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default Step1;
