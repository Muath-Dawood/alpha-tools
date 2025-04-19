"use server";
import { Locale } from "@/i18n.config";
import { axiosInstance } from "@/lib/utils";
import axios from "axios";
import { LeadFeilds, LeadSchemaType } from "@/lib/validators/leadSchema";

type CustomError = {
  field: (typeof LeadFeilds)[number];
  message: string;
};

export const sendInformation = async (
  values: LeadSchemaType,
  language: Locale,
  source: string,
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
      { ...values, source, gender: "FEMALE", customization_section: "WOMEN" },
      {
        headers: {
          language,
        },
      },
    );

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
