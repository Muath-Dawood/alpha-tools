import { appointmentSteps } from "@/lib/data/appointmentSteps";
import { images } from "@/lib/data/images";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { TiStarFullOutline } from "react-icons/ti";
import Animate from "./Animate";
import useTextDirection from "@/hooks/useTextDirection";
import GetInTouch from "./GetInTouch";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

type MakeAppointmentProps = {
  page: "about" | "home";
  isGetInTouch?: boolean;
};

const MakeAppointment = (props: MakeAppointmentProps) => {
  const translation = useTranslations("make an appointment");
  const dir = useTextDirection();

  return (
    <section className="w-full text-center">
      <div>
        <h2 className="text-xl font-bold sm:text-[2.5rem] sm:leading-[3.25rem]">
          <Animate
            fromRight={dir === "ltr" ? 100 : -100}
            toRight={0}
            initialOpacity={0}
            finalOpcaity={1}
            wrapper="span"
            once={true}
          >
            {translation("title")}
          </Animate>
        </h2>
        <p className="mx-auto mt-4 max-w-[47.875rem] font-semibold text-[#6b6b6b]">
          <Animate
            fromLeft={dir === "ltr" ? 100 : -100}
            toLeft={0}
            initialOpacity={0}
            finalOpcaity={1}
            wrapper="span"
            once={true}
          >
            {translation("desc")}
          </Animate>
        </p>
      </div>

      <div
        className={`${props.page === "home" ? "mt-16 gap-8" : "mt-12 flex-col gap-12"} flex-center`}
      >
        <div
          className={`${props.page === "home" ? "flex-col justify-start gap-12" : "flex-wrap gap-3 xl:gap-6"} flex-center`}
        >
          {appointmentSteps.map((appointment, index) =>
            props.page === "home" ? (
              <Animate
                initialOpacity={0}
                finalOpcaity={1}
                fromTop={50}
                toTop={0}
                duration={0.75}
                delay={index * 0.075}
                // fromScale={0}
                // toScale={1}
                once={true}
                className="w-full"
              >
                <div
                  key={appointment.number}
                  className="flex w-full items-start justify-start gap-4"
                >
                  <div className="flex-center min-h-8 min-w-8 rounded-full bg-gradient-to-r from-[#0E948A] to-[#C5EAE9] text-xl font-bold leading-5 text-white sm:min-h-[3.25rem] sm:min-w-[3.25rem] sm:text-[2rem] sm:leading-[2rem]">
                    {appointment.number}
                  </div>

                  <div className="flex-center flex-col items-start gap-2">
                    <h4 className="text-lg font-bold sm:text-[1.875rem] sm:leading-[2.5rem]">
                      {translation(`${appointment.name}.title`)}
                    </h4>

                    <p className="max-w-[38.625rem] text-start text-[0.9375rem] font-semibold leading-6 text-muted-foreground">
                      {translation(`${appointment.name}.desc`)}
                    </p>
                  </div>
                </div>
              </Animate>
            ) : (
              <React.Fragment key={appointment.number}>
                <div className="flex-center h-[11.8125rem] w-[17.5rem] flex-col gap-[0.725rem] rounded-[0.625rem] border-[0.125rem] border-[#1BADA2] px-4 shadow-[0.2px_4px_7px_0px_hsla(240,100%,15%,0.15)]">
                  <div className="flex-center min-h-[2.25rem] min-w-[2.25rem] rounded-full bg-gradient-to-r from-[#0E948A] to-[#C5EAE9] text-xl font-bold leading-[2rem] text-white sm:min-h-[3.25rem] sm:min-w-[3.25rem] sm:text-[2rem]">
                    {appointment.number}
                  </div>

                  <h4 className="text-lg font-medium sm:text-xl sm:leading-5">
                    {translation(`${appointment.name}.title`)}
                  </h4>

                  <p>{translation(`${appointment.name}.short desc`)}</p>
                </div>

                {appointment.number !== appointmentSteps.length ? (
                  <Image
                    src={images.arrowRight}
                    alt="arrow right"
                    className={`${dir === "rtl" ? "rotate-180" : ""} hidden h-auto w-[4.25rem] lg:block xl:w-[6.25rem]`}
                  />
                ) : null}
              </React.Fragment>
            ),
          )}
          {props.page === "home" ? (
            <a href={"#/booking"}>
              <div className="flex-center gap-6 text-base text-white xs:text-lg xs:leading-5 [&>div]:relative [&>div]:z-10 [&>div]:after:absolute [&>div]:after:start-[-0.3125rem] [&>div]:after:top-[-0.3125rem] [&>div]:after:-z-10 [&>div]:after:h-[calc(100%+0.625rem)] [&>div]:after:w-[calc(100%+0.625rem)] [&>div]:after:rounded-[0.25rem] [&>div]:after:bg-secondary-background/20">
                <div className="btn-effects rounded-[0.25rem] bg-primary-background px-3 py-2 font-semibold uppercase xs:px-6 xs:py-4">
                  {translation("book an appointment at the clinic")}
                </div>
              </div>
            </a>
          ) : (
            ""
          )}
        </div>

        {props.page === "home" ? (
          <div className="relative hidden xl:block">
            <Image src={images.makeAppoinmentDoctor} alt="make appoinment" />

            <div className="flex-center absolute bottom-0 start-32 h-11 w-[21.8125rem] gap-2 rounded-[0.625rem] bg-white shadow-[-0.5rem_0.5rem_1.75rem_0rem_#0000000F]">
              <div className="flex-center h-7 w-7 rounded-[0.25rem] bg-[#ECF9F8]">
                <TiStarFullOutline className="h-auto w-[1.125rem] text-primary-background" />
              </div>

              <span className="font-bold text-secondary-background">
                {translation("best certified team")}
              </span>
            </div>

            <Image
              src={images.heal}
              alt="heal"
              className="absolute end-4 top-28"
            />
          </div>
        ) : (
          <a href={"/#booking"} className="w-full sm:w-auto">
            <button className="btn-effects flex h-[52px] w-full items-center justify-center rounded-[10px] bg-[#FFA500] px-[20px] py-[16px] text-[18px] font-medium capitalize text-white xs:px-[30px] xs:text-[20px] sm:w-auto">
              {translation("book an appointment")}
              {dir == "ltr" ? (
                <MdKeyboardArrowRight className="hidden h-auto w-7 text-[18px] xl:block" />
              ) : (
                <MdKeyboardArrowLeft className="hidden h-auto w-8 text-[18px] xl:block" />
              )}
            </button>
          </a>
        )}
      </div>

      {props.isGetInTouch ? (
        <div className="mt-24 w-full">
          <GetInTouch />
        </div>
      ) : null}
    </section>
  );
};

export default MakeAppointment;
