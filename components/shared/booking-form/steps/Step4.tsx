import { Doctor } from "@/actions/booking";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { FaCheck } from "react-icons/fa";
import { images } from "@/lib/data/images";

type Step4Props = {
  doctor: Doctor | null;
  setdoctor: Dispatch<SetStateAction<Doctor | null>>;
  doctors: Doctor[];
};

const Step4 = (props: Step4Props) => {
  return (
    <div className="flex-center w-full flex-wrap items-start gap-4 py-2 lg:h-[280px] lg:overflow-auto">
      {props.doctors.map((doctor) => (
        <div
          className="flex-center relative w-[25.9375rem] cursor-pointer flex-col gap-3 rounded-[0.625rem] border-2 border-[#F3F4F6] p-5 shadow-[3.12px_9.37px_21.85px_0px_#0000000F] transition-all duration-300 xs:h-[10rem] xs:flex-row xs:items-start sm:hover:scale-105 sm:focus:scale-105"
          onClick={() => props.setdoctor(doctor)}
          key={doctor.pm_si}
        >
          <div className="flex-center h-16 w-16 rounded-[0.5rem] bg-[#B3658C]">
            <Image
              src={images.woman_icon}
              className="h-auto w-[3rem]"
              alt={doctor.pm_si}
            />
          </div>

          <div className="flex-center grow flex-col items-start justify-start">
            <div className="flex-center w-full justify-between">
              <h3 className="text-xl font-bold leading-5 text-primary-background">
                {doctor.name}
              </h3>

              <div
                className={`${props.doctor?.pm_si === doctor.pm_si ? "bg-primary-background" : "border-[0.14rem] border-[#A7A7A7]"} flex-center absolute end-4 top-4 h-6 w-6 rounded-full xs:static`}
              >
                {props.doctor?.pm_si === doctor.pm_si ? (
                  <FaCheck className="h-3 w-3 text-white" />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Step4;
