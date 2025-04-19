import { useTranslations } from "next-intl";

import { z } from "zod";

export const getInTouchFormSchemaMaker = () => {
  const translation = useTranslations("get in touch today");

  return z.object({
    name: z.string().min(1, translation("name is required")),
    phone: z.string().min(1, translation("phone is required")),
  });
};

export const getInTouchDefaultValues = {
  phone: "",
  name: "",
};

export const getInTouchFeilds = ["phone", "name"] as const;

export type GetInTouchSchemaType = z.infer<
  ReturnType<typeof getInTouchFormSchemaMaker>
>;
