import { useTranslations } from "next-intl";
import { z } from "zod";

export const PostTreatmentEvaluationSchemaMaker = () => {
  const t = useTranslations("questionnaires post-treatment-evaluation");

  const errorMessage = t("response must be between 1 and 10");

  return z.object({
    question1: z.number().min(1, errorMessage).max(10, errorMessage),
    question2: z.number().min(1, errorMessage).max(10, errorMessage),
    question3: z.number().min(1, errorMessage).max(10, errorMessage),
    question4: z.number().min(1, errorMessage).max(10, errorMessage),
    question5: z.number().min(1, errorMessage).max(10, errorMessage),
    question6: z.number().min(1, errorMessage).max(10, errorMessage),
  });
};

export const PostTreatmentEvaluationDefaultValues = {
  question1: 1,
  question2: 1,
  question3: 1,
  question4: 1,
  question5: 1,
  question6: 1,
};

export const PostTreatmentEvaluationFields = [
  "question1",
  "question2",
  "question3",
  "question4",
  "question5",
  "question6",
] as const;

export type PostTreatmentEvaluationSchemaType = z.infer<
  ReturnType<typeof PostTreatmentEvaluationSchemaMaker>
>;
