import { Service } from "@/actions/booking";
import { Dispatch, SetStateAction } from "react";
import { FaCheck } from "react-icons/fa";

type Step2Props = {
  treatmentId: string;
  categoryId: string;
  setTreatmentId: Dispatch<SetStateAction<string>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  treatments: [] | Service[];
};

const Step2 = (props: Step2Props) => {
  return (
    <div className="flex-center w-full flex-wrap items-start gap-5 py-2 lg:h-[280px] lg:overflow-auto">
      {props.treatments.map((treatment) => (
        <div
          key={treatment.title}
          className={`${treatment.pm_si === props.treatmentId ? "border-[#B3658C]" : "border-[#F3F4F6]"} flex-center relative h-[14.325rem] w-full cursor-pointer flex-col items-start justify-start gap-4 rounded-[0.625rem] border-[0.125rem] px-6 py-5 shadow-[3.12px_9.37px_21.85px_0px_#0000000F] transition-all duration-300 xs:w-[20.9375rem] sm:hover:scale-105 sm:focus:scale-105`}
          onClick={() => props.setTreatmentId(treatment.pm_si)}
          dir="rtl"
        >
          <h3 className="max-w-[90%] text-lg font-bold leading-[1.35rem] text-primary-background xs:max-w-[16rem]">
            {treatment.title}
          </h3>
          <p className="text-sm font-semibold leading-6 text-[#6D6D6D]">
            {treatment.description}
          </p>

          <div
            className={`${props.treatmentId === treatment.pm_si ? "bg-primary-background" : "border-[0.14rem] border-[#A7A7A7]"} flex-center absolute end-4 top-4 h-6 w-6 rounded-full`}
          >
            {props.treatmentId === treatment.pm_si ? (
              <FaCheck className="h-3 w-3 text-white" />
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Step2;
