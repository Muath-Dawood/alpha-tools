import { useTranslations } from "next-intl";

import { z } from "zod";

export const existUserSchemaMaker = () => {
  const translation = useTranslations("booking");

  return z.object({
    phone: z.string().min(1, translation("phone is required")),
  });
};

export const existUserDefaultValues = {
  phone: "",
};

export const existUserFeilds = ["phone"] as const;

export type ExistUserSchemaType = z.infer<
  ReturnType<typeof existUserSchemaMaker>
>;
