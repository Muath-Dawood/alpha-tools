import React from "react";
import RadioGroupItem from "./RadioGroupItem";

interface RadioGroupItemWithLabelProps {
  value: string | number;
  id: string;
  label: string | number;
}

const RadioGroupItemWithLabel: React.FC<RadioGroupItemWithLabelProps> = ({
  value,
  id,
  label,
}) => {
  return (
    <div className="flex items-center gap-2">
      <RadioGroupItem value={value} id={id} />
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
    </div>
  );
};

export default RadioGroupItemWithLabel;
