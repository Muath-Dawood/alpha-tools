import { useTranslations } from "next-intl";
import { z } from "zod";

const nameWithCharactersAndSpaces = /^[\p{L}\p{M}\p{Zs}]+$/u;

export const newUserSchemaMaker = () => {
  const translation = useTranslations("booking");

  return z.object({
    name: z
      .string()
      .min(1, translation("name is required"))
      .regex(nameWithCharactersAndSpaces, {
        message: translation("name must be chars"),
      }),
    phone: z.string().min(1, translation("phone is required")),
  });
};

export const newUserDefaultValues = {
  phone: "",
  name: "",
};

export const newUserFeilds = ["phone", "name"] as const;

export type NewUserSchemaType = z.infer<ReturnType<typeof newUserSchemaMaker>>;
