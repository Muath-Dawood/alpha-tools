"use client";
import { images } from "@/lib/data/images";
import { steps } from "@/lib/data/steps";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import {
  newUserDefaultValues,
  newUserFeilds,
  newUserSchemaMaker,
  NewUserSchemaType,
} from "@/lib/validators/newUserSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  existUserDefaultValues,
  existUserFeilds,
  existUserSchemaMaker,
  ExistUserSchemaType,
} from "@/lib/validators/existUserSchema";
import Final from "./steps/Final";
import Loading from "@/components/shared/Loading";
import {
  book,
  Category,
  Doctor,
  getAllavailableDates,
  getAllAvailableTime,
  getAllCategories,
  getAllDoctors,
  getAllServices,
  Service,
} from "@/actions/booking";
import { Locale } from "@/i18n.config";
import toast from "react-hot-toast";
import useTextDirection from "@/hooks/useTextDirection";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const BookingForm = () => {
  const translation = useTranslations("booking");
  const dir = useTextDirection();
  const locale = useLocale() as Locale;
  const [treatments, setTreatments] = useState<Service[]>([]);
  const [availableDates, setAvailableDates] = useState<string[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [treatmentId, setTreatmentId] = useState<string>("");
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [categoryId, setCategoryId] = useState("");
  const [userType, setUserType] = useState<"exists" | "new">("exists");
  const [times, setTimes] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const onSubmit = async () => {
    setIsLoading(true);
    let isValid = false;
    if (userType === "exists") {
      isValid = existUserFeilds.every(
        (value) => !existUser?.getFieldState(value).invalid,
      );
      if (isValid) {
        const response = await book(
          locale,
          [treatmentId],
          date!,
          selectedTime,
          userType,
          existUser.getValues().phone,
          doctor?.pm_si!,
        );
        // console.log(response);

        if (!response?.ok) toast.error(response?.message ?? "Try Agian Later");

        if (response?.ok) setCurrentStep((prev) => prev + 1);
        else if (response?.errors && response.errors.length > 0) {
          existUser.setError(
            "phone",
            {
              message:
                response.errors[0].field === "phone"
                  ? response.errors[0]?.message
                  : response.errors[1]?.message,
            },
            {
              shouldFocus: true,
            },
          );
        }
      }
    } else if (userType == "new") {
      isValid = newUserFeilds.every(
        (value) => !newUser?.getFieldState(value).invalid,
      );
      if (isValid) {
        const response = await book(
          locale,
          [treatmentId],
          date!,
          selectedTime,
          userType,
          newUser.getValues().phone,
          doctor?.pm_si!,
          newUser.getValues().name,
        );

        if (!response?.ok) toast.error(response?.message || "Try Again Later");

        if (response?.ok) setCurrentStep((prev) => prev + 1);
        else if (response?.errors) {
          for (let error of response.errors) {
            newUser.setError(
              error.field,
              {
                message: error.message,
              },
              {
                shouldFocus: true,
              },
            );
          }
        }
      }
    }
    setIsLoading(false);
  };

  const onDateSelect = async (
    date: Date | undefined,
    setIsOpen?: Dispatch<SetStateAction<boolean>>,
  ) => {
    if (!date) return;
    setIsLoading(true);
    setDate(date);
    if (setIsOpen) setIsOpen(false);
    const response = await getAllAvailableTime(locale, [treatmentId], date);

    if (response && response?.ok) {
      setTimes(response.data);
      setSelectedTime(response.data[0]);
    }

    setIsLoading(false);
  };

  const newUserFormSchema = newUserSchemaMaker();
  const newUser = useForm<NewUserSchemaType>({
    resolver: zodResolver(newUserFormSchema),
    defaultValues: newUserDefaultValues,
  });

  const existUserFormSchema = existUserSchemaMaker();
  const existUser = useForm<ExistUserSchemaType>({
    resolver: zodResolver(existUserFormSchema),
    defaultValues: existUserDefaultValues,
  });

  const formSteps = [
    <Step1
      categoryId={categoryId}
      setCategoryId={setCategoryId}
      setIsLoading={setIsLoading}
      categories={categories}
    />,
    <Step2
      treatmentId={treatmentId}
      setTreatmentId={setTreatmentId}
      setIsLoading={setIsLoading}
      categoryId={categoryId}
      treatments={treatments}
    />,
    <Step3
      selectedTime={selectedTime}
      setSelectedTime={setSelectedTime}
      date={date}
      availableDates={availableDates}
      treatmentId={treatmentId}
      onDateSelect={onDateSelect}
      times={times}
      setTimes={setTimes}
    />,
    <Step4 doctor={doctor} setdoctor={setDoctor} doctors={doctors} />,
    <Step5
      setUserType={setUserType}
      userType={userType}
      existUserForm={existUser}
      newUserForm={newUser}
      onSubmit={onSubmit}
    />,
  ];

  const getTreatments = async () => {
    setIsLoading(true);
    const response = await getAllServices(locale, categoryId);
    if (response && response?.ok) {
      setTreatments(response?.data);
      setTreatmentId(response.data[0]?.pm_si || "");
    } else {
      toast.error(response?.message ? response.message : "Try Again Later");
      setCurrentStep((prev) => prev - 1);
    }

    setIsLoading(false);
  };

  const getAvailableDates = async () => {
    setIsLoading(true);
    const response = await getAllavailableDates(locale, [treatmentId]);
    if (response && response?.ok) {
      // console.log(response.data);
      setAvailableDates(response.data);
      await onDateSelect(new Date(response.data[0]));
    }

    setIsLoading(false);
  };

  const getDoctors = async () => {
    setIsLoading(true);
    const response = await getAllDoctors(
      locale,
      [treatmentId],
      date!,
      selectedTime,
    );
    if (response && response?.ok) {
      setDoctors(response.data);
      setDoctor(response.data[0]);
    }

    setIsLoading(false);
  };

  const next = async () => {
    if (currentStep === 1 && categoryId) {
      setCurrentStep((prev) => prev + 1);
      await getTreatments();
    } else if (currentStep === 2 && treatmentId) {
      setCurrentStep((prev) => prev + 1);
      await getAvailableDates();
    } else if (currentStep === 3) {
      if (!date) {
        toast.error("Please select a date");
        return;
      }
      setCurrentStep((prev) => prev + 1);
      await getDoctors();
    } else if (currentStep === 4) setCurrentStep((prev) => prev + 1);
    else if (currentStep === 5) {
      if (userType === "exists") {
        existUser.handleSubmit(onSubmit)();
      } else if (userType === "new") {
        newUser.handleSubmit(onSubmit)();
      }
    }
  };

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const response = await getAllCategories(locale);
      if (response && response?.ok) {
        setCategories(response?.data);
        setCategoryId(response.data[0]?.pm_si || "");
      }
    })();
    setIsLoading(false);
  }, []);

  return (
    <main
      className="flex-center mt-5 w-full flex-col gap-20 px-5 2xl:px-0"
      id={locale === "ar" ? "احجز الآن" : "book-now"}
    >
      <section className="flex-center relative min-h-[43.4375rem] w-full flex-col justify-between gap-12 pb-8 pt-6 md:gap-5 lg:h-[43.4375rem] lg:min-h-fit lg:rounded-[0.625rem] lg:border lg:border-[#EFF0F6] lg:shadow-[0px_2px_6px_0px_#13124212]">
        {currentStep > steps.length ? (
          <Final
            doctorName={doctor?.name ?? ""}
            date={date}
            time={selectedTime}
          />
        ) : (
          <>
            <div
              className={`${isLoading ? "grow" : ""} flex-center w-full flex-col gap-16`}
            >
              <div className="flex-center w-full flex-col text-center">
                <h1 className="text-[40px] font-bold leading-[3.25rem]">
                  {translation("title")}
                </h1>

                <p className="text-[18px] text-[#9F9F9F]">
                  {translation("desc")}
                </p>

                <div className="flex-center mt-12 w-full xs:gap-2 md:gap-4">
                  {steps.map((step) => (
                    <div
                      key={step.name}
                      className="flex-center relative xs:gap-2 md:gap-4"
                    >
                      {step.step !== 1 ? (
                        <div
                          className={`${currentStep + 1 > step.step ? "after:w-full" : currentStep + 1 === step.step ? "after:w-1/2 after:delay-300" : "after:w-0"} relative h-[0.375rem] w-10 rounded-[2.5rem] bg-[#B3658C33] transition-all duration-500 after:absolute after:start-0 after:top-0 after:h-full after:bg-[#B3658C] after:transition-all after:duration-500 xs:w-[3.6rem] xs:after:rounded-[2.5rem] sm:w-[4.125rem] md:w-[6.125rem]`}
                        ></div>
                      ) : null}

                      <div
                        className={`${currentStep >= step.step ? "bg-[#B3658C]" : "bg-[#B3658C33]"} flex-center relative h-[1.75rem] w-[1.75rem] rounded-full delay-300 md:h-16 md:w-16`}
                      >
                        <Image
                          src={step.image}
                          alt={step.name}
                          className="h-auto w-4 transition-all duration-500 md:w-7"
                          style={{
                            filter:
                              currentStep >= step.step && step.step !== 1
                                ? "invert(100%) brightness(200%) contrast(200%)"
                                : "",
                          }}
                        />
                      </div>

                      <p
                        className={`${dir === "ltr" ? "translate-x-1/2" : "-translate-x-1/2"} absolute -bottom-5 end-3 hidden text-xs font-semibold leading-3 md:end-8 md:block md:text-[0.9375rem] md:leading-[0.9375rem]`}
                      >
                        {translation(step.name)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {isLoading ? <Loading /> : formSteps[currentStep - 1]}
            </div>

            <div className="flex-center mx-auto w-full max-w-[55rem] justify-between gap-6">
              {currentStep === 1 ? (
                <div></div>
              ) : (
                <button
                  className="flex h-[52px] min-w-[150px] border-spacing-1 items-center justify-center gap-2 rounded-[10px] border-[2px] border-[#B3658C] bg-white px-[30px] py-[16px] text-[16px] uppercase text-primary"
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                >
                  {dir == "ltr" ? (
                    <FaArrowLeft className="text-[18px]" />
                  ) : (
                    <FaArrowRight className="text-[18px]" />
                  )}
                  {translation("previous step")}
                </button>
              )}

              <button
                className="btn-effects flex h-[52px] min-w-[150px] items-center justify-center gap-2 rounded-[10px] bg-primary px-[30px] py-[16px] text-[16px] uppercase text-white"
                onClick={next}
              >
                {currentStep !== steps.length
                  ? translation("next step")
                  : translation("submit")}
                {dir == "ltr" ? (
                  <FaArrowRight className="text-[18px]" />
                ) : (
                  <FaArrowLeft className="text-[18px]" />
                )}
              </button>
            </div>
          </>
        )}

        <Image
          src={images.circle}
          alt="circle"
          className="absolute start-6 top-12 -z-10 hidden lg:block"
        />

        <Image
          src={images.circle}
          alt="circle"
          className="absolute bottom-12 end-6 -z-10 hidden lg:block"
        />
      </section>
    </main>
  );
};

export default BookingForm;
