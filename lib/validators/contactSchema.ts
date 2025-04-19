import { useTranslations } from "next-intl";

import { z } from "zod";

export const contactFormSchemaMaker = () => {
  const translation = useTranslations("contact");

  return z.object({
    name: z.string().min(1, translation("name is required")),
    phone: z.string().min(1, translation("phone is required")),
    message: z.string().min(1, translation("message is required")),
  });
};

export const contactDefaultValues = {
  phone: "",
  name: "",
  message: "",
};

export const contactFeilds = ["phone", "name", "message"] as const;

export type ConatctSchemaType = z.infer<
  ReturnType<typeof contactFormSchemaMaker>
>;
