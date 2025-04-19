"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";

interface RadioGroupProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>,
    "value" | "onValueChange"
  > {
  value?: string | number; // Accept both string and number
  onValueChange?: (value: string | number) => void; // Handle both types
}

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, value, onValueChange, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    className={cn("flex flex-col gap-1", className)}
    value={value !== undefined ? String(value) : undefined} // Convert to string for Radix compatibility
    onValueChange={(val) =>
      onValueChange?.(!isNaN(Number(val)) ? Number(val) : val)
    } // Convert back to `number` if valid
    {...props}
  />
));
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

export default RadioGroup;
