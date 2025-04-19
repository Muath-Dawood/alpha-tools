import { useTranslations } from "next-intl";
import { images } from "./images";

export const treatmentsBenefits = () => {
  const translation = useTranslations("benefits of treatments");

  return [
    {
      image: images.personal_and_confidential_icon,
      title: translation("Personal and confidential"),
      desc: translation("Personal and confidential desc"),
    },
    {
      image: images.innovative_technology_icon,
      title: translation("Innovative technology"),
      desc: translation("Innovative technology desc"),
    },
    {
      image: images.specialized_and_expert_team_icon,
      title: translation("Specialized and expert team"),
      desc: translation("Specialized and expert team desc"),
    },
    {
      image: images.treatment_without_discomfort_icon,
      title: translation("Treatment without discomfort"),
      desc: translation("Treatment without discomfort desc"),
    },
    {
      image: images.long_term_results_icon,
      title: translation("Long term results"),
      desc: translation("Long term results desc"),
    },
    {
      image: images.revitalize_sexual_function_icon,
      title: translation("Revitalize sexual function"),
      desc: translation("Revitalize sexual function desc"),
    },
    {
      image: images.research_proven_treatment_icon,
      title: translation("Research proven treatment"),
      desc: translation("Research proven treatment desc"),
    },
    {
      image: images.pain_free_and_side_effect_free_care_icon,
      title: translation("Pain free and side effect free care"),
      desc: translation("Pain free and side effect free care desc"),
    },
  ];
};
