"use client";
import { useLocale, useTranslations } from "next-intl";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import {
  GetInTouchSchemaType,
  getInTouchDefaultValues,
  getInTouchFormSchemaMaker,
} from "@/lib/validators/getInTouchSchema";
import { Locale } from "@/i18n.config";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendRequest } from "@/actions/getInTouch";
import toast from "react-hot-toast";
import { FaFacebook, FaUser, FaWhatsapp } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import useTextDirection from "@/hooks/useTextDirection";
import { LuInstagram } from "react-icons/lu";

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
    <div className="flex-center relative z-20 mx-auto w-full flex-col items-stretch justify-start text-white">
      <h3 className="text-center text-xl font-medium leading-6 text-white sm:text-3xl sm:leading-10 lg:text-start">
        {translation("title")}
      </h3>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex-center e w-full flex-1 flex-col gap-8 bg-transparent py-6 md:py-4 lg:flex-row"
        >
          <div className="flex-center w-full max-w-[30rem] grow flex-col gap-8 lg:w-auto lg:max-w-none lg:flex-row lg:gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="relative w-full flex-1 lg:w-auto">
                  <FormControl>
                    <div className="input-wrapper gap-2 rounded-[0.625rem] border-2 border-white px-3 sm:gap-4 [&>input]:placeholder:text-white">
                      <FaUser className="h-auto w-5" />

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
                    <div className="input-wrapper w-full gap-2 rounded-[0.625rem] border-2 border-white px-3 sm:gap-4 [&>input]:placeholder:text-white">
                      <FaPhoneAlt className="h-auto w-5 text-white" />

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
            className={`flex-center btn-effects h-12 w-full min-w-[8.25rem] max-w-[16.0625rem] rounded-xl bg-[#FFA500] text-base font-medium text-white shadow-[-8px_8px_28px_0px_#0000000F] lg:w-auto`}
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

      <div className="flex-center mt-6 gap-5 sm:mt-10 lg:justify-start [&_svg]:h-8 [&_svg]:w-8 [&_svg]:cursor-pointer [&_svg]:text-white [&_svg]:transition [&_svg]:duration-300">
        <a href="https://facebook.com/BestClinicPS" target="_blank">
          <FaFacebook className="hover:text-secondary-background" />
        </a>
        <a href="https://wa.me/970598070808?text=" target="_blank">
          <FaWhatsapp className="hover:text-secondary-background" />
        </a>
        <a href="https://www.instagram.com/bestclinicps/" target="_blank">
          <LuInstagram className="hover:text-secondary-background" />
        </a>
      </div>
    </div>
  );
};

export default GetInTouch;
