"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";

// Extend props to handle both `string` and `number`
interface RadioGroupItemProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    "value"
  > {
  value: string | number; // Accept both string and number
}

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, value, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(
      "h-[17px] w-[17px] rounded-full border shadow-sm disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-background data-[state=checked]:text-primary-foreground",
      className,
    )}
    value={String(value)} // Ensure compatibility by converting to string
    {...props}
  />
));
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export default RadioGroupItem;
