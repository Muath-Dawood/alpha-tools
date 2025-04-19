import { useTranslations } from "next-intl";

import { z } from "zod";

export const LeadFormSchemaMaker = () => {
  const translation = useTranslations("lead");

  return z.object({
    name: z.string().min(1, translation("name is required")),
    phone: z.string().min(1, translation("phone is required")),
    privacy: z.boolean().refine((val) => val === true, {
      message: translation("agree to privacy"),
    }),
  });
};

export const LeadDefaultValues = {
  phone: "",
  name: "",
  privacy: false,
};

export const LeadFeilds = ["phone", "name", "privacy"] as const;

export type LeadSchemaType = z.infer<ReturnType<typeof LeadFormSchemaMaker>>;
