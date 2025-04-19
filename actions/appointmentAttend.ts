"use server";
import { Locale } from "@/i18n.config";
import {
  appointmentAttendFeilds,
  AppointmentAttendSchemaType,
} from "@/lib/validators/appointmentAttendSchema";
import { axiosInstance } from "@/lib/utils";
import axios from "axios";

type CustomError = {
  field: (typeof appointmentAttendFeilds)[number];
  message: string;
};

export const sendRequest = async (
  values: AppointmentAttendSchemaType,
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
    const params = new URLSearchParams({
      ...values,
    }).toString();

    const response = await axiosInstance.get(
      `/attend-appointment-actions?${params}`,
      {
        headers: {
          language,
        },
      },
    );

    return {
      ok: true,
      message: response.data.message,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response);

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
