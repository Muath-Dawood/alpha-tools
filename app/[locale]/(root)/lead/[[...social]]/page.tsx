"use client";
import { useLocale, useTranslations } from "next-intl";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Link, Locale } from "@/i18n.config";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { images } from "@/lib/data/images";
import Image from "next/image";
import {
  LeadDefaultValues,
  LeadFormSchemaMaker,
  LeadSchemaType,
} from "@/lib/validators/leadSchema";
import { Checkbox } from "@/components/ui/checkbox";
import { sendInformation } from "@/actions/lead";
import { cn } from "@/lib/utils";

const page = ({ params }: { params: { social: string[] } }) => {
  const social = params.social?.length === 1 ? params.social[0] : "website";

  const translation = useTranslations("lead");
  const [isLoading, setIsLoading] = useState(false);
  const locale = useLocale() as Locale;

  const leadFormSchema = LeadFormSchemaMaker();
  const initialValues = LeadDefaultValues;
  const form = useForm<LeadSchemaType>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: initialValues,
  });

  const onSubmit = async (values: LeadSchemaType) => {
    if (isLoading) return;
    setIsLoading(true);
    const response = await sendInformation(values, locale, social);

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
    <main className="flex-center w-full flex-col gap-20 xs:mt-5 xs:px-5 2xl:px-0">
      <section className="flex-center relative w-full flex-col-reverse items-stretch rounded-[0.625rem] border-[#F0F0F0] xs:border xs:shadow-[0px_4px_7px_0px_#3D3D3D1A] lg:h-[39.875rem] lg:flex-row">
        <div className="flex-center flex h-full flex-1 flex-col gap-8 px-5 pt-8 text-center xs:py-12">
          <div className="flex-center max-w-[36.8125rem] flex-col gap-4">
            <Image
              src={images.bigLogo}
              alt="logo"
              className="h-auto w-[9.375rem] xs:w-[12.5rem]"
            />
            <p className="text-sm leading-[1.3125rem] text-muted-foreground">
              {translation("Submit your information")}
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex-center w-full max-w-[36.8125rem] flex-col gap-12 bg-white"
            >
              <div className="flex-center w-full flex-col gap-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="relative w-full">
                      <FormLabel className="input-label inline-block w-full text-start text-base font-semibold leading-4">
                        {translation("name")}
                        <sup>*</sup>
                      </FormLabel>
                      <FormControl>
                        <div className="input-wrapper gap-2 border-[1.5px] border-[#C8C8C8] px-3 has-[input:focus]:border-primary-background [&>input]:placeholder:text-muted-foreground">
                          <FaUser className="h-auto w-5 text-[#0E948A]" />

                          <Input
                            autoComplete="OFF"
                            placeholder={translation("Enter Your First Name")}
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
                      <FormLabel className="input-label inline-block w-full text-start text-base font-semibold leading-4">
                        {translation("phone")}
                        <sup>*</sup>
                      </FormLabel>
                      <FormControl>
                        <div className="input-wrapper gap-2 border-[1.5px] border-[#C8C8C8] px-3 has-[input:focus]:border-primary-background [&>input]:placeholder:text-muted-foreground">
                          <FaPhoneAlt className="h-auto w-5 text-[#0E948A]" />

                          <Input
                            type="number"
                            autoComplete="OFF"
                            placeholder={translation("Enter Your Phone Number")}
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
                  name="privacy"
                  render={({ field }) => (
                    <FormItem className="relative w-full">
                      <FormControl>
                        <div className="flex-center justify-start gap-2">
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="h-5 w-5 rounded-[0.36rem] border-[0.14rem] border-[#E0E0E0] data-[state=checked]:border-none data-[state=checked]:bg-primary-background"
                          />
                          <div className="text-xs font-medium leading-[0.875rem] xs:text-sm">
                            {translation.rich("I confirm", {
                              span: (chunks) => (
                                <Link href={"/privacy"} target="_blank">
                                  <span className="text-[#0684F9] underline decoration-[rgba(6,132,249,0.5)]">
                                    {chunks}
                                  </span>
                                </Link>
                              ),
                            })}
                            <sup className="top-0 text-base font-semibold text-[#F70808]">
                              *
                            </sup>
                          </div>
                        </div>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="btn-effects flex h-[52px] w-full items-center justify-center gap-2 rounded-[10px] bg-primary px-[30px] py-[16px] text-[16px] uppercase text-white"
              >
                {isLoading ? (
                  <div className="h-5 w-5 animate-spin rounded-full border-b-[0.14rem] border-[#1BA2BB]" />
                ) : (
                  translation("Start Your Private Health Assessment")
                )}
              </button>
            </form>
          </Form>
        </div>

        <div
          className={cn(
            "flex-center relative aspect-[1.6375] min-h-[600px] flex-1 items-end justify-start overflow-hidden bg-white px-5 pb-8 xs:rounded-t-[0.625rem] sm:pb-12 lg:aspect-auto lg:rounded-s-none",
            "bg-cover bg-top",
          )}
          style={{
            backgroundImage: `url('${images.hijabi_doctor_hero_section.src}')`,
          }}
        ></div>

        <Image
          src={images.rectDot}
          alt="dots"
          className="absolute -start-9 top-9 hidden lg:block"
        />
        <Image
          src={images.rectDot}
          alt="dots"
          className="absolute -end-9 bottom-9 hidden rotate-180 lg:block"
        />
      </section>
    </main>
  );
};

export default page;
