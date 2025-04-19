"use client";
import { useLocale, useTranslations } from "next-intl";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import {
  GetInTouchSchemaType,
  getInTouchDefaultValues,
  getInTouchFormSchemaMaker,
} from "@/lib/validators/getInTouchSchema";
import { Locale } from "@/i18n.config";
import { useState } from "react";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendRequest } from "@/actions/getInTouch";
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import { images } from "@/lib/data/images";
import useTextDirection from "@/hooks/useTextDirection";

const GetInTouch = () => {
  const translation = useTranslations("get in touch today");
  const getInTouchFormSchema = getInTouchFormSchemaMaker();
  const [isLoading, setIsLoading] = useState(false);
  const locale = useLocale() as Locale;
  const dir = useTextDirection();

  const initialValues = getInTouchDefaultValues;
  const form = useForm<GetInTouchSchemaType>({
    resolver: zodResolver(getInTouchFormSchema),
    defaultValues: initialValues,
  });

  const onSubmit = async (values: GetInTouchSchemaType) => {
    if (isLoading) return;
    setIsLoading(true);
    const response = await sendRequest(values, locale);

    if (response?.ok) {
      toast.success(response.message);
      form.reset();
    } else {
      toast.error(response?.message ?? "Try Agian Later");
      if (response?.errors) {
        for (let error of response.errors) {
          form.setError(
            error?.field,
            {
              message: error?.message,
            },
            {
              shouldFocus: true,
            },
          );
        }
      }
    }

    setIsLoading(false);
  };

  return (
    <div className="flex-center relative z-20 mx-auto w-full max-w-[72.75rem] flex-col items-stretch justify-start overflow-hidden rounded-lg border border-[#DBE7E5] shadow-[2px_4px_7px_0px_#3D3D3D1A] md:flex-row">
      <Image
        src={images.getinTouch}
        alt="image"
        className="absolute start-0 top-0 -z-10 hidden h-full w-full min-w-[72.625rem] md:block"
        style={{
          transform: dir === "rtl" ? "rotateZ(180deg) rotateX(180deg)" : "",
        }}
      />

      <div className="flex-center flex-col justify-start gap-3 bg-primary-background pb-5 pe-4 ps-4 pt-5 md:w-[24.5rem] md:items-start md:bg-transparent md:ps-10 md:pt-11 lg:w-[23.5rem] lg:pt-5">
        <h3 className="text-xl font-medium leading-6 text-white">
          {translation("title")}
        </h3>

        <p className="max-w-[16.1875rem] text-center text-sm leading-[1.05rem] text-white md:text-start">
          {translation("desc")}
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex-center w-full flex-1 flex-col gap-8 bg-white px-4 py-6 md:bg-transparent md:py-4 lg:flex-row"
        >
          <div className="flex-center w-full max-w-[30rem] grow flex-col gap-8 lg:w-auto lg:max-w-none lg:flex-row lg:gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="relative w-full flex-1 lg:w-auto">
                  <FormControl>
                    <div className="input-wrapper gap-2 border-primary-background px-3 [&>input]:placeholder:text-muted-foreground">
                      <FaUser className="h-auto w-5 text-primary-background" />

                      <Input
                        autoComplete="OFF"
                        placeholder={translation("name placeholder")}
                        {...field}
                      />
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="relative w-full flex-1 lg:w-auto">
                  <FormControl>
                    <div className="input-wrapper w-full gap-2 border-primary-background px-3 [&>input]:placeholder:text-muted-foreground">
                      <FaPhoneAlt className="h-auto w-5 text-primary-background" />

                      <Input
                        type="number"
                        autoComplete="OFF"
                        placeholder={translation("phone placeholder")}
                        {...field}
                      />
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <button
            className={`flex-center btn-effects h-10 w-full min-w-[8.25rem] max-w-[16.0625rem] rounded-sm bg-primary-background text-base font-medium text-white shadow-[-8px_8px_28px_0px_#0000000F] lg:w-auto`}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="h-5 w-5 animate-spin rounded-full border-b-[0.14rem] border-[#fff]" />
            ) : (
              translation("contact us")
            )}
          </button>
        </form>
      </Form>
    </div>
  );
};

export default GetInTouch;
