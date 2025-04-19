"use server";
import { Locale } from "@/i18n.config";
import { axiosInstance } from "@/lib/utils";
import axios from "axios";
import {
  PostTreatmentEvaluationSchemaType,
  PostTreatmentEvaluationFields,
} from "@/lib/validators/questionnaires/postTreatmentEvaluation";

type CustomError = {
  field: (typeof PostTreatmentEvaluationFields)[number];
  message: string;
};

export const sendRequest = async (
  values: PostTreatmentEvaluationSchemaType,
  language: Locale,
  requestCode: string,
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
      "/questionnaires-post-treatment-evaluation",
      { ...values, requestCode },
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
