"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Dispatch, SetStateAction, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Locale } from "@/i18n.config";
import { ar } from "date-fns/locale";
import { enUS } from "date-fns/locale";

type Step3Props = {
  date: Date | undefined;
  selectedTime: string;
  availableDates: string[];
  treatmentId: string;
  times: string[];
  setTimes: Dispatch<SetStateAction<string[] | []>>;
  setSelectedTime: Dispatch<SetStateAction<string>>;
  onDateSelect: (
    date: Date | undefined,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
  ) => Promise<void>;
};

const Step3 = (props: Step3Props) => {
  const translation = useTranslations("booking");
  const locale = useLocale() as Locale;
  const [isOpen, setIsOpen] = useState(false);
  const languageMap = {
    en: enUS,
    ar: ar,
  };

  const isDateDisabled = (date: Date) => {
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;

    return !props.availableDates.includes(formattedDate);
  };

  return (
    <div className="flex-center mt-4 flex-col justify-start gap-6 lg:h-[280px] lg:overflow-auto">
      <Popover open={isOpen} onOpenChange={() => setIsOpen((prev) => !prev)}>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !props.date && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="me-2 h-4 w-4" />
            {props.date ? (
              format(props.date, "PPP", { locale: languageMap[locale] })
            ) : (
              <span>{translation("Pick a date")}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            locale={languageMap[locale]}
            mode="single"
            selected={props.date}
            onSelect={(date) => props.onDateSelect(date, setIsOpen)}
            initialFocus
            disabled={(date) => isDateDisabled(date)}
          />
        </PopoverContent>
      </Popover>

      <div className="flex-center max-w-[43.75rem] flex-wrap gap-3">
        {props.date
          ? props.times.map((time) => (
              <div
                className={`${time == props.selectedTime ? "bg-[#B3658C] text-white" : "bg-[#B3658C33] text-[#6B7280] hover:bg-[#B3658C] hover:text-foreground focus:bg-[#E2F4F3] focus:text-foreground"} flex-center h-[2.5625rem] w-[6.5625rem] cursor-pointer rounded-[0.5rem] text-sm font-semibold leading-5 transition-all duration-300`}
                onClick={() => props.setSelectedTime(time)}
                key={time}
              >
                {time}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Step3;
