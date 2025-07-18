"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("bg-[#b3658c24] p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-[#4B5563] font-semibold rounded-md w-9  text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-primary-background [&:has([aria-selected])]:bg-primary-background first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 text-[#6B7280] font-bold",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-7 w-8 p-0 aria-selected:opacity-100 hover:bg-secondary-background hover:text-white",
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary-background text-white hover:bg-primary-background hover:text-white focus:bg-primary-background focus:text-white",
        day_today: "bg-secondary-background text-white",
        day_outside: "day-outside",
        day_disabled: " line-through decoration-foreground ",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      formatters={{
        formatWeekdayName: (day, options) =>
          day
            .toLocaleDateString(options?.locale?.code, { weekday: "short" })
            .substring(
              options?.locale?.code === "ar" ? 2 : 0,
              options?.locale?.code === "ar" ? 10 : 3,
            ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
