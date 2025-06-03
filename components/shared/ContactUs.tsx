"use client";
import {
  ConatctSchemaType,
  contactDefaultValues,
  contactFormSchemaMaker,
} from "@/lib/validators/contactSchema";
import { useLocale, useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuInstagram } from "react-icons/lu";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Locale } from "@/i18n.config";
import { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendMessage } from "@/actions/contact";
import toast from "react-hot-toast";
import Animate from "./Animate";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import {
  FaArrowLeft,
  FaArrowRight,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa6";
import useTextDirection from "@/hooks/useTextDirection";

const ContactUs = () => {
  const translation = useTranslations("contact");
  const conatctFormSchema = contactFormSchemaMaker();
  const [isLoading, setIsLoading] = useState(false);
  const locale = useLocale() as Locale;
  const dir = useTextDirection();
  const initialValues = contactDefaultValues;
  const form = useForm<ConatctSchemaType>({
    resolver: zodResolver(conatctFormSchema),
    defaultValues: initialValues,
  });

  const onSubmit = async (values: ConatctSchemaType) => {
    setIsLoading(true);
    const response = await sendMessage(values, locale);

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
    <section
      className="mb-8 mt-8 w-full scroll-m-8"
      id={locale === "ar" ? "اتصل" : "contact"}
    >
      <Animate
        initialOpacity={0}
        finalOpcaity={1}
        fromScale={0.9}
        toScale={1}
        once={true}
        className="rounded-[0.625rem]"
      >
        <div
          className="relative flex flex-col flex-wrap items-center justify-between gap-10 px-[20px] py-[30px] lg:px-[70px] xl:flex-row"
          style={{
            background:
              "linear-gradient(239.48deg, rgba(101, 179, 175, 0.283) 16.91%, rgba(255, 255, 255, 0.6) 98.33%)",
          }}
        >
          {/* clinic info start */}
          <div className="hidden flex-col items-start justify-start gap-4 text-start xl:flex">
            <div>
              <h1 className="text-[40px] font-[600] text-[#3D3D3D]">
                {translation("title")}
              </h1>
              <h4 className="text-[18px] font-[500] text-[#6D6D6D]">
                {translation("desc")}
              </h4>
            </div>
            <div className="flex items-center text-[16px] font-[400] text-[#6D6D6D]">
              <FiPhone className="me-2 min-h-6 min-w-6 text-primary-background" />
              <div className="flex flex-wrap">
                <a href="tel:+970598070808" className="cursor-pointer">
                  <span>059-807-0808</span>
                </a>
                <span className="mx-2">/</span>
                <a href="tel:+972022921935" className="cursor-pointer">
                  <span>02-2921935</span>
                </a>
              </div>
            </div>
            <div className="flex items-center text-[16px] font-[400] text-[#6D6D6D]">
              <MdOutlineEmail className="me-2 min-h-6 min-w-6 text-primary-background" />
              <div className="flex flex-wrap">
                <a
                  href="mailto:info@bestclinic24.com"
                  className="cursor-pointer"
                >
                  <span>info@bestclinic24.com</span>
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <HiOutlineLocationMarker className="me-2 min-h-6 min-w-6 text-primary-background" />
              <div className="flex flex-wrap text-[16px] font-[400] text-[#6D6D6D]">
                <span>
                  {translation(
                    "Ramallah - Al-Manara - Roundabout - City Center",
                  )}
                </span>
                <span>{translation("Building - 5th Floor")}</span>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <a href="https://facebook.com/BestClinicPS" target="_blank">
                <FaFacebook className="me-2 min-h-6 min-w-6 text-primary-background" />
              </a>
              <a href="https://wa.me/970598070808?text=" target="_blank">
                <FaWhatsapp className="me-2 min-h-6 min-w-6 text-primary-background" />
              </a>
              <a href="https://www.instagram.com/bestclinicps/" target="_blank">
                <LuInstagram className="me-2 min-h-6 min-w-6 text-primary-background" />
              </a>
            </div>
          </div>
          {/* clinic info end */}

          {/* form start */}
          <div
            className={`${dir == "rtl" ? "left-[60px]" : "right-[60px]"} min-h-[440px] w-full max-w-[600px] rounded-[20px] bg-white p-[20px] shadow-md xl:absolute`}
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex-start flex w-full flex-col gap-[10px] p-4 lg:p-10"
              >
                <h2 className="text-[28px] font-[600] text-[#222222]">
                  {translation("Talk to us now")}
                </h2>
                <div className="mb-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="relative w-full text-black">
                        <FormControl>
                          <div className="input-wrapper h-[60px] gap-2 border-[#D4D4D4] px-3 [&>input]:placeholder:text-[#ABABAB]">
                            <Input
                              autoComplete="OFF"
                              placeholder={translation("name")}
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
                      <FormItem className="relative w-full">
                        <FormControl>
                          <div className="input-wrapper h-[60px] gap-2 border-[#D4D4D4] px-3 [&>input]:placeholder:text-[#ABABAB]">
                            <Input
                              type="number"
                              autoComplete="OFF"
                              placeholder={translation("phone")}
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="relative w-full">
                      <FormControl>
                        <div className="input-wrapper h-36 w-full gap-2 border-[#D4D4D4] px-4 py-1 [&>textarea]:placeholder:text-[#ABABAB]">
                          <Textarea
                            {...field}
                            spellCheck={false}
                            autoComplete="OFF"
                            placeholder={translation("message")}
                          />
                        </div>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="mt-4 flex w-full">
                  <button
                    className={`${isLoading ? "active:bg-primary-background" : ""} btn-effects flex h-[55px] w-full items-center justify-center gap-2 rounded-[10px] bg-primary px-[30px] py-[16px] text-[16px] font-bold uppercase text-white`}
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="h-5 w-5 animate-spin rounded-full border-b-[0.14rem] border-[#fff]" />
                    ) : (
                      <>
                        {translation("submit")}
                        {dir == "ltr" ? (
                          <FaArrowRight className="text-[18px]" />
                        ) : (
                          <FaArrowLeft className="text-[18px]" />
                        )}
                      </>
                    )}
                  </button>
                </div>
              </form>
            </Form>
          </div>
          {/* form end */}
        </div>
      </Animate>
    </section>
  );
};

export default ContactUs;
