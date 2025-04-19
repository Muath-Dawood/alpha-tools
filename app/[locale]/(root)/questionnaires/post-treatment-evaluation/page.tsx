"use client";

import { useLocale, useTranslations } from "next-intl";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { images } from "@/lib/data/images";
import {
  PostTreatmentEvaluationDefaultValues,
  PostTreatmentEvaluationSchemaType,
  PostTreatmentEvaluationSchemaMaker,
  PostTreatmentEvaluationFields,
} from "@/lib/validators/questionnaires/postTreatmentEvaluation";
import useTextDirection from "@/hooks/useTextDirection";
import { sendRequest } from "@/actions/questionnaires/postTreatmentEvaluation";
import QuestionField from "./_components/QuestionField";
import { Locale } from "@/i18n.config";
import { notFound } from "next/navigation";

interface PageProps {
  searchParams: {
    requestCode?: string;
  };
}
const Page = ({ searchParams }: PageProps) => {
  const { requestCode } = searchParams;
  // Redirect to notFound if apiRequestKeyCode is empty or undefined
  if (!requestCode) {
    return notFound();
  }
  const router = useRouter();
  const locale = useLocale() as Locale;
  const dir = useTextDirection();
  const translation = useTranslations(
    "questionnaires post-treatment-evaluation",
  );

  const [isLoading, setIsLoading] = useState(false);

  // Form validation schema
  const formSchema = PostTreatmentEvaluationSchemaMaker();
  const form = useForm<PostTreatmentEvaluationSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: PostTreatmentEvaluationDefaultValues,
  });

  // Form submission handler
  const onSubmit = async (values: PostTreatmentEvaluationSchemaType) => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const response = await sendRequest(values, locale, requestCode);
      if (response?.ok) {
        toast.success(response.message);
        form.reset();

        router.push(`/${locale}`);
      } else {
        toast.error(response?.message || "Please try again later.");
        if (response?.errors) {
          response.errors.forEach((error) =>
            form.setError(error?.field, { message: error?.message }),
          );
        }
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  const questionKeys = [
    "question 1 title",
    "question 2 title",
    "question 3 title",
    "question 4 title",
    "question 5 title",
    "question 6 title",
  ] as const;

  // Questions data
  const questions = questionKeys.map((key, index) => ({
    fieldName:
      `question${index + 1}` as (typeof PostTreatmentEvaluationFields)[number],
    title: translation(key),
  }));

  return (
    <main className="flex-center relative w-full xs:mt-5 xs:px-5 2xl:px-0">
      <section className="w-full items-stretch rounded-lg border-[#F0F0F0] xs:border xs:shadow-md lg:min-h-[40rem]">
        {/* Form Section */}
        <div className="flex-col bg-white px-5 py-8 md:col-span-6">
          {/* Header */}
          <header className="mb-4 flex flex-col items-center justify-center gap-4">
            <Image
              src={images.bigLogo}
              alt="logo"
              className="h-auto w-[9.375rem] xs:w-[12.5rem]"
            />
            <h1 className="text-2xl">{translation("title")}</h1>
            <hr className="h-3 w-full" />
          </header>

          {/* Form */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex w-full flex-col items-center gap-12"
            >
              <div className="flex w-full flex-col items-start gap-7">
                {questions.map(({ fieldName, title }, index) => (
                  <QuestionField
                    key={index}
                    formControl={form.control}
                    title={title}
                    fieldName={fieldName}
                    dir={dir}
                  />
                ))}
              </div>

              <button
                className="flex-center btn-effects h-10 w-[85%] rounded-lg bg-primary-background text-sm font-medium text-white shadow-sm xs:text-base"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-[#1BA2BB]" />
                ) : (
                  translation("submit")
                )}
              </button>
            </form>
          </Form>
        </div>
      </section>

      {/* Decorative Dots */}
      <Image
        src={images.rectDot}
        alt="decorative dots"
        className="absolute -start-9 top-9 hidden lg:block"
      />
      <Image
        src={images.rectDot}
        alt="decorative dots"
        className="absolute -end-9 bottom-9 hidden rotate-180 lg:block"
      />
    </main>
  );
};

export default Page;
