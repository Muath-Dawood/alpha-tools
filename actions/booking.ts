"use server";

import { Locale } from "@/i18n.config";
import { newUserFeilds } from "@/lib/validators/newUserSchema";
import { axiosInstance } from "@/lib/utils";
import axios from "axios";

export type Category = {
  title: string;
  pm_si: string;
  description: string;
};

export const getAllCategories = async (
  language: Locale,
): Promise<
  | {
      ok: boolean;
      status?: number;
      message: string;
      data: Category[] | [];
    }
  | undefined
> => {
  try {
    const form = new FormData();
    form.append(
      "cus_sec_pm_si",
      "a25ZYU0yS21HQU43WUxBT3VHa3hyNUJzRHRzUGppdm5CM0RBR2twb1NHRFhrM1doT3BOcGlFZ3g5WkRBYWxkM0x4Ymo0RUl3MGRMNlgzaHBKekpTc2c9PQsdgn352FCSzv2414sdgn352FCSzv2414",
    );
    const response = await axiosInstance.post("/BOKGTSRCTD", form, {
      headers: {
        language,
        "Content-Type": "multipart/form-data",
      },
    });

    return {
      ok: true,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        ok: false,
        status: error.response?.status,
        message:
          error.response?.data?.message || "An unexpected error occurred",
        data: [],
      };
    } else {
      return {
        ok: false,
        message: "An unexpected error occurred",
        data: [],
      };
    }
  }
};

export type Service = {
  title: string;
  pm_si: string;
  description: string;
};

export const getAllServices = async (
  language: Locale,
  categoryId: string,
): Promise<
  | {
      ok: boolean;
      status?: number;
      message: string;
      data: Service[] | [];
    }
  | undefined
> => {
  try {
    const form = new FormData();
    form.append("category_pm_si", categoryId);
    form.append(
      "cus_sec_pm_si",
      "a25ZYU0yS21HQU43WUxBT3VHa3hyNUJzRHRzUGppdm5CM0RBR2twb1NHRFhrM1doT3BOcGlFZ3g5WkRBYWxkM0x4Ymo0RUl3MGRMNlgzaHBKekpTc2c9PQsdgn352FCSzv2414sdgn352FCSzv2414",
    );
    const response = await axiosInstance.post("/BOKGTSRBCTD", form, {
      headers: {
        language,
        "Content-Type": "multipart/form-data",
      },
    });
    return {
      ok: true,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        ok: false,
        status: error.response?.status,
        message:
          error.response?.data?.message || "An unexpected error occurred",
        data: [],
      };
    } else {
      return {
        ok: false,
        message: "An unexpected error occurred",
        data: [],
      };
    }
  }
};

export const getAllavailableDates = async (
  language: Locale,
  servicesId: string[],
): Promise<
  | {
      ok: boolean;
      status?: number;
      message: string;
      data: string[] | [];
    }
  | undefined
> => {
  try {
    const form = new FormData();
    servicesId.forEach((service) => {
      form.append("services_pm_si[]", service);
    });
    form.append(
      "cus_sec_pm_si",
      "a25ZYU0yS21HQU43WUxBT3VHa3hyNUJzRHRzUGppdm5CM0RBR2twb1NHRFhrM1doT3BOcGlFZ3g5WkRBYWxkM0x4Ymo0RUl3MGRMNlgzaHBKekpTc2c9PQsdgn352FCSzv2414sdgn352FCSzv2414",
    );
    const response = await axiosInstance.post("/BOKGTAVBLDTS", form, {
      headers: {
        language,
        "Content-Type": "multipart/form-data",
      },
    });

    return {
      ok: true,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        ok: false,
        status: error.response?.status,
        message:
          error.response?.data?.message || "An unexpected error occurred",
        data: [],
      };
    } else {
      return {
        ok: false,
        message: "An unexpected error occurred",
        data: [],
      };
    }
  }
};

export const getAllAvailableTime = async (
  language: Locale,
  servicesId: string[],
  date: Date,
): Promise<
  | {
      ok: boolean;
      status?: number;
      message: string;
      data: string[] | [];
    }
  | undefined
> => {
  try {
    const form = new FormData();
    servicesId.forEach((service) => {
      form.append("services_pm_si[]", service);
    });
    form.append(
      "cus_sec_pm_si",
      "a25ZYU0yS21HQU43WUxBT3VHa3hyNUJzRHRzUGppdm5CM0RBR2twb1NHRFhrM1doT3BOcGlFZ3g5WkRBYWxkM0x4Ymo0RUl3MGRMNlgzaHBKekpTc2c9PQsdgn352FCSzv2414sdgn352FCSzv2414",
    );
    form.append(
      "date",
      date.toLocaleDateString("en-CA", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }),
    );
    const response = await axiosInstance.post("/BOKGTAVBLTIMS", form, {
      headers: {
        language,
        "Content-Type": "multipart/form-data",
      },
    });

    return {
      ok: true,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        ok: false,
        status: error.response?.status,
        message:
          error.response?.data?.message || "An unexpected error occurred",
        data: [],
      };
    } else {
      return {
        ok: false,
        message: "An unexpected error occurred",
        data: [],
      };
    }
  }
};

export type Doctor = {
  pm_si: string;
  name: string;
  specialites: string[];
  image_url: string;
};

export const getAllDoctors = async (
  language: Locale,
  servicesId: string[],
  date: Date,
  time: string,
): Promise<
  | {
      ok: boolean;
      status?: number;
      message: string;
      data: Doctor[] | [];
    }
  | undefined
> => {
  try {
    const form = new FormData();
    servicesId.forEach((service) => {
      form.append("services_pm_si[]", service);
    });
    form.append(
      "cus_sec_pm_si",
      "a25ZYU0yS21HQU43WUxBT3VHa3hyNUJzRHRzUGppdm5CM0RBR2twb1NHRFhrM1doT3BOcGlFZ3g5WkRBYWxkM0x4Ymo0RUl3MGRMNlgzaHBKekpTc2c9PQsdgn352FCSzv2414sdgn352FCSzv2414",
    );
    form.append(
      "date",
      date.toLocaleDateString("en-CA", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }),
    );
    form.append("time", time);
    const response = await axiosInstance.post("/BOKGTAVBLEMPLS", form, {
      headers: {
        language,
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.data.data && response.data.data.length) {
      response.data.data = response.data.data.filter(
        (employee: any) => employee.pm_si != "",
      );
    }

    return {
      ok: true,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        ok: false,
        status: error.response?.status,
        message:
          error.response?.data?.message || "An unexpected error occurred",
        data: [],
      };
    } else {
      return {
        ok: false,
        message: "An unexpected error occurred",
        data: [],
      };
    }
  }
};

type BookError = {
  field: (typeof newUserFeilds)[number];
  message: string;
};

export const book = async (
  language: Locale,
  servicesId: string[],
  date: Date,
  time: string,
  customer_type: "exists" | "new",
  customer_phone: string,
  doctorId: string,
  customer_name?: string,
): Promise<
  | {
      ok: boolean;
      status?: number;
      message: string;
      errors?: BookError[];
      data: Doctor[] | [];
    }
  | undefined
> => {
  try {
    const form = new FormData();
    servicesId.forEach((service) => {
      form.append("services_pm_si[]", service);
    });
    form.append(
      "cus_sec_pm_si",
      "a25ZYU0yS21HQU43WUxBT3VHa3hyNUJzRHRzUGppdm5CM0RBR2twb1NHRFhrM1doT3BOcGlFZ3g5WkRBYWxkM0x4Ymo0RUl3MGRMNlgzaHBKekpTc2c9PQsdgn352FCSzv2414sdgn352FCSzv2414",
    );
    form.append(
      "date",
      date.toLocaleDateString("en-CA", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }),
    );
    form.append("time", time);
    form.append("employee_pm_si", doctorId);
    form.append("customer_type", customer_type);
    form.append("customer_phone", customer_phone);
    if (customer_name) form.append("customer_name", customer_name);
    const response = await axiosInstance.post("/BOKINNEW", form, {
      headers: {
        language,
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response);
    return {
      ok: true,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        ok: false,
        status: error.response?.status,
        message:
          error.response?.data?.message || "An unexpected error occurred",
        errors: error.response?.data?.errors || [],
        data: [],
      };
    } else {
      return {
        ok: false,
        message: "An unexpected error occurred",
        data: [],
      };
    }
  }
};
