"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import {
  RadioGroup,
  RadioGroupItemWithLabel,
} from "@/components/ui/radio/index";
import { Control } from "react-hook-form";
import {
  PostTreatmentEvaluationSchemaType,
  PostTreatmentEvaluationFields,
} from "@/lib/validators/questionnaires/postTreatmentEvaluation";

interface QuestionFieldProps {
  formControl: Control<PostTreatmentEvaluationSchemaType>;
  title: string;
  fieldName: (typeof PostTreatmentEvaluationFields)[number];
  dir: "rtl" | "ltr";
}

const QuestionField: React.FC<QuestionFieldProps> = ({
  formControl,
  title,
  fieldName,
  dir,
}) => {
  return (
    <FormField
      control={formControl}
      name={fieldName}
      render={({ field }) => (
        <FormItem className="relative w-full">
          <FormLabel className="input-label inline-block w-full text-start text-base">
            {title}
            <sup>*</sup>
          </FormLabel>
          <FormControl>
            <RadioGroup
              value={field.value?.toString()} // Convert to string for Radix compatibility
              dir={dir}
              onValueChange={(val) => field.onChange(Number(val))} // Convert back to number for form state
            >
              {Array.from({ length: 10 }, (_, i) => {
                const val = i + 1;
                return (
                  <RadioGroupItemWithLabel
                    key={val}
                    value={val} // Pass number directly
                    id={`${fieldName}-${val}`}
                    label={val.toString()}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default QuestionField;
