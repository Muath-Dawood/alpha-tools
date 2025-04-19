"use server";
import { Locale } from "@/i18n.config";
import {
  ConatctSchemaType,
  contactFeilds,
} from "@/lib/validators/contactSchema";
import { axiosInstance } from "@/lib/utils";
import axios from "axios";

type CustomError = {
  field: (typeof contactFeilds)[number];
  message: string;
};

export const sendMessage = async (
  values: ConatctSchemaType,
  language: Locale,
): Promise<
  | {
      ok: boolean;
      status?: number;
      message: string;
      errors?: CustomError[];
    }
  | undefined
> => {
  try {
    const response = await axiosInstance.post("/contact-us-action", values, {
      headers: {
        language,
      },
    });

    return { ok: true, message: response.data.message };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        ok: false,
        status: error.response?.status,
        message:
          error.response?.data?.message || "An unexpected error occurred",
        errors: error.response?.data?.errors || [],
      };
    } else {
      return {
        ok: false,
        message: "An unexpected error occurred",
      };
    }
  }
};
