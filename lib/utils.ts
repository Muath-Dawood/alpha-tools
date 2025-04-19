import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const axiosInstance = axios.create({
  baseURL: "https://www.bestclinic24.net",
  timeout: 30000,
  headers: { "Content-Type": "application/json" },
});
