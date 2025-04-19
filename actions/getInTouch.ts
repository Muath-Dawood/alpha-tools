"use server";
import { Locale } from "@/i18n.config";
import {
  GetInTouchSchemaType,
  getInTouchFeilds,
} from "@/lib/validators/getInTouchSchema";
import { axiosInstance } from "@/lib/utils";
import axios from "axios";

type CustomError = {
  field: (typeof getInTouchFeilds)[number];
  message: string;
};

export const sendRequest = async (
  values: GetInTouchSchemaType,
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
    const response = await axiosInstance.post(
      "/leads-store",
      {
        ...values,
        source: "website",
        gender: "FEMALE",
        customization_section: "WOMEN",
      },
      {
        headers: {
          language,
        },
      },
    );
    return { ok: true, message: response.data.message };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
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
