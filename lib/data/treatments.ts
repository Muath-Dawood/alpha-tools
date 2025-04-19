import { images } from "@/lib/data/images";
import { TreatmentCardProps } from "@/types/treatment";
import { useTranslations } from "next-intl";
export const treatments = (): TreatmentCardProps[] => {
  const translation = useTranslations("treatments");

  return [
    {
      id: "1",
      title: translation("Vaginismus.title"),
      content: `
       <div class="flex gap-3 flex-col">
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Vaginismus.content.p1")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Vaginismus.content.p2")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Vaginismus.content.p3")}</p>
       </div>
      `,
      icon: images.female_icon,
    },
    {
      id: "2",
      title: translation("Pregnancy and fetal health follow-up.title"),
      content: `
       <div class="flex gap-3 flex-col">
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Pregnancy and fetal health follow-up.content.p1")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Pregnancy and fetal health follow-up.content.p2")}</p>
       </div>
      `,
      icon: images.pregnancy_and_fetal_health_follow_up_icon,
    },
    {
      id: "3",
      title: translation("Gynecology for advanced age.title"),
      content: `
       <div class="flex gap-3 flex-col">
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Gynecology for advanced age.content.p1")}</p>
        <div class="flex flex-col">
          <p style="font-size: 20px; color: #B3658C;font-weight:bold">${translation("Gynecology for advanced age.content.osteoporosis.title")}</p>
          <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Gynecology for advanced age.content.osteoporosis.content")}</p>
        </div>
        <div class="flex flex-col">
          <p style="font-size: 20px; color: #B3658C;font-weight:bold">${translation("Gynecology for advanced age.content.Urinary Incontinence.title")}</p>
          <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Gynecology for advanced age.content.Urinary Incontinence.content")}</p>
        </div>
        <div class="flex flex-col">
          <p style="font-size: 20px; color: #B3658C;font-weight:bold">${translation("Gynecology for advanced age.content.Vaginal Dryness.title")}</p>
          <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Gynecology for advanced age.content.Vaginal Dryness.content")}</p>
        </div>
        <div class="flex flex-col">
          <p style="font-size: 20px; color: #B3658C;font-weight:bold">${translation("Gynecology for advanced age.content.Vaginal Atrophy.title")}</p>
          <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Gynecology for advanced age.content.Vaginal Atrophy.content")}</p>
        </div>
        <div class="flex flex-col">
          <p style="font-size: 20px; color: #B3658C;font-weight:bold">${translation("Gynecology for advanced age.content.Uterine cancer and ovarian cancer.title")}</p>
          <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Gynecology for advanced age.content.Uterine cancer and ovarian cancer.content1")}</p>
          <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Gynecology for advanced age.content.Uterine cancer and ovarian cancer.content2")}</p>
        </div>
        <div class="flex flex-col">
          <p style="font-size: 20px; color: #B3658C;font-weight:bold">${translation("Gynecology for advanced age.content.Recurrent UTIs.title")}</p>
          <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Gynecology for advanced age.content.Recurrent UTIs.content")}</p>
        </div>
        <div class="flex flex-col">
          <p style="font-size: 20px; color: #B3658C;font-weight:bold">${translation("Gynecology for advanced age.content.Pelvic Organ Prolapse.title")}</p>
          <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Gynecology for advanced age.content.Pelvic Organ Prolapse.content")}</p>
        </div>
        <div class="flex flex-col">
          <p style="font-size: 20px; color: #B3658C;font-weight:bold">${translation("Gynecology for advanced age.content.Sleep disorders and hot flashes.title")}</p>
          <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Gynecology for advanced age.content.Sleep disorders and hot flashes.content")}</p>
        </div>
        <div class="flex flex-col">
          <p style="font-size: 20px; color: #B3658C;font-weight:bold">${translation("Gynecology for advanced age.content.Psychological changes and depression.title")}</p>
          <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Gynecology for advanced age.content.Psychological changes and depression.content")}</p>
        </div>
       </div>
      `,
      icon: images.gynecology_for_advanced_age_icon,
    },
    {
      id: "4",
      title: translation("Treatment of pelvic muscle weakness.title"),
      content: `
        <div class="flex gap-3 flex-col">
          <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Treatment of pelvic muscle weakness.content.p1")}</p>
          <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Treatment of pelvic muscle weakness.content.p2")}</p>
          <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span> ${translation("Treatment of pelvic muscle weakness.content.p3")}</p>
          <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span> ${translation("Treatment of pelvic muscle weakness.content.p4")}</p>
          <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span> ${translation("Treatment of pelvic muscle weakness.content.p5")}</p>
          <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span> ${translation("Treatment of pelvic muscle weakness.content.p6")}</p>
          <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span> ${translation("Treatment of pelvic muscle weakness.content.p7")}</p>
          <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Treatment of pelvic muscle weakness.content.p8")}</p>
        </div>
      `,
      icon: images.treatment_of_pelvic_muscle_weakness_icon,
    },
    {
      id: "5",
      title: translation(
        "Treatment of recurrent miscarriage and intrauterine fetal death.title",
      ),
      content: `
      <div class="flex gap-3 flex-col">
      <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Treatment of recurrent miscarriage and intrauterine fetal death.content.p1")}</p>
      <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span> ${translation("Treatment of recurrent miscarriage and intrauterine fetal death.content.p2")}</p>
      <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span> ${translation("Treatment of recurrent miscarriage and intrauterine fetal death.content.p3")}</p>
      <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Treatment of recurrent miscarriage and intrauterine fetal death.content.p4")}</p>
      <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Treatment of recurrent miscarriage and intrauterine fetal death.content.p5")}</p>
      <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Treatment of recurrent miscarriage and intrauterine fetal death.content.p6")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span> ${translation("Treatment of recurrent miscarriage and intrauterine fetal death.content.p7")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Treatment of recurrent miscarriage and intrauterine fetal death.content.p8")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Treatment of recurrent miscarriage and intrauterine fetal death.content.p9")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Treatment of recurrent miscarriage and intrauterine fetal death.content.p10")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Treatment of recurrent miscarriage and intrauterine fetal death.content.p11")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span> ${translation("Treatment of recurrent miscarriage and intrauterine fetal death.content.p12")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span> ${translation("Treatment of recurrent miscarriage and intrauterine fetal death.content.p13")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span> ${translation("Treatment of recurrent miscarriage and intrauterine fetal death.content.p14")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span> ${translation("Treatment of recurrent miscarriage and intrauterine fetal death.content.p15")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span> ${translation("Treatment of recurrent miscarriage and intrauterine fetal death.content.p16")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span> ${translation("Treatment of recurrent miscarriage and intrauterine fetal death.content.p17")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Treatment of recurrent miscarriage and intrauterine fetal death.content.p18")}</p>
      </div>
    `,
      icon: images.treatment_of_recurrent_miscarriage_and_intrauterine_fetal_death_icon,
    },
    {
      id: "6",
      title: translation(
        "Treatment of menstrual disorders, ovulation disorders, and hormones.title",
      ),
      content: `
      <div class="flex gap-3 flex-col">
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Treatment of menstrual disorders, ovulation disorders, and hormones.content.p1")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:bold">${translation("Treatment of menstrual disorders, ovulation disorders, and hormones.content.p2")}</p>
        <p style="font-size: 20px; color: #B3658C;font-weight:bold">${translation("Treatment of menstrual disorders, ovulation disorders, and hormones.content.p3")}</p>
        <p style="font-size: 20px; color: #B3658C;font-weight:bold">${translation("Treatment of menstrual disorders, ovulation disorders, and hormones.content.p4")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Treatment of menstrual disorders, ovulation disorders, and hormones.content.p5")}</p>
        <p style="font-size: 20px; color: #B3658C;font-weight:bold">${translation("Treatment of menstrual disorders, ovulation disorders, and hormones.content.p6")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Treatment of menstrual disorders, ovulation disorders, and hormones.content.p7")}</p>
        <p style="font-size: 20px; color: #B3658C;font-weight:bold">${translation("Treatment of menstrual disorders, ovulation disorders, and hormones.content.p8")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Treatment of menstrual disorders, ovulation disorders, and hormones.content.p9")}</p>
        <p style="font-size: 20px; color: #B3658C;font-weight:bold">${translation("Treatment of menstrual disorders, ovulation disorders, and hormones.content.p10")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Treatment of menstrual disorders, ovulation disorders, and hormones.content.p11")}</p>
        <p style="font-size: 20px; color: #B3658C;font-weight:bold">${translation("Treatment of menstrual disorders, ovulation disorders, and hormones.content.p12")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Treatment of menstrual disorders, ovulation disorders, and hormones.content.p13")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Treatment of menstrual disorders, ovulation disorders, and hormones.content.p14")}</p>
      </div>
    `,
      icon: images.treatment_of_menstrual_disorders_ovulation_disorders_and_hormones_icon,
    },
    {
      id: "7",
      title: translation(
        "Ovarian cysts and polycystic ovary syndrome follow-up.title",
      ),
      content: `
      <div class="flex gap-3 flex-col">
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p1")}</p>
        <p style="font-size: 20px; color: #B3658C;font-weight:bold">${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p2")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p3")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p4")}</p>
        <p style="font-size: 20px; color: #B3658C;font-weight:bold">${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p6")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p7")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p8")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p9")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p10")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p11")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p12")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p13")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p14")}</p>
        <p style="font-size: 20px; color: #B3658C;font-weight:bold">${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p15")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p16")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p17")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p18")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p20")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p21")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p22")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p23")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p24")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p25")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p26")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p27")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p28")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p29")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p30")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p31")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p32")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p33")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p34")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p35")}</p>
        <p style="font-size: 20px; color: #B3658C;font-weight:bold">${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p36")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p37")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p38")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p39")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p40")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p41")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p42")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Ovarian cysts and polycystic ovary syndrome follow-up.content.p43")}</p>
      </div>
    `,
      icon: images.ovarian_cysts_and_polycystic_ovary_syndrome_follow_up_icon,
    },
    {
      id: "8",
      title: translation(
        "Cervical cancer prevention and regular screening.title",
      ),
      content: `
      <div class="flex gap-3 flex-col">
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Cervical cancer prevention and regular screening.content.p1")}</p>
        <p style="font-size: 20px; color: #B3658C;font-weight:bold">${translation("Cervical cancer prevention and regular screening.content.p2")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Cervical cancer prevention and regular screening.content.p3")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Cervical cancer prevention and regular screening.content.p4")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Cervical cancer prevention and regular screening.content.p5")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Cervical cancer prevention and regular screening.content.p6")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Cervical cancer prevention and regular screening.content.p7")}</p>
        <p style="font-size: 20px; color: #B3658C;font-weight:bold">${translation("Cervical cancer prevention and regular screening.content.p8")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Cervical cancer prevention and regular screening.content.p9")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Cervical cancer prevention and regular screening.content.p10")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Cervical cancer prevention and regular screening.content.p11")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Cervical cancer prevention and regular screening.content.p12")}</p>
      </div>
    `,
      icon: images.cervical_cancer_prevention_and_regular_screening_icon,
    },
    {
      id: "9",
      title: translation("Birth control and contraception.title"),
      content: `
      <div class="flex gap-3 flex-col">
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Birth control and contraception.content.p1")}</p>
        <p style="font-size: 20px; color: #B3658C;font-weight:bold">${translation("Birth control and contraception.content.p2")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Birth control and contraception.content.p3")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Birth control and contraception.content.p4")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Birth control and contraception.content.p5")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Birth control and contraception.content.p6")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Birth control and contraception.content.p7")}</p> 
      </div>
    `,
      icon: images.birth_control_and_contraception_icon,
    },
    {
      id: "10",
      title: translation(
        "Genital tract infections and vaginal discharge.title",
      ),
      content: `
      <div class="flex gap-3 flex-col">
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Genital tract infections and vaginal discharge.content.p1")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Genital tract infections and vaginal discharge.content.p2")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Genital tract infections and vaginal discharge.content.p3")}</p>
        <p style="font-size: 20px; color: #B3658C;font-weight:bold">${translation("Genital tract infections and vaginal discharge.content.p4")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Genital tract infections and vaginal discharge.content.p5")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Genital tract infections and vaginal discharge.content.p6")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Genital tract infections and vaginal discharge.content.p7")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Genital tract infections and vaginal discharge.content.p8")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Genital tract infections and vaginal discharge.content.p9")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Genital tract infections and vaginal discharge.content.p10")}</p> 
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Genital tract infections and vaginal discharge.content.p11")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Genital tract infections and vaginal discharge.content.p12")}</p> 
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Genital tract infections and vaginal discharge.content.p13")}</p> 
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Genital tract infections and vaginal discharge.content.p14")}</p> 
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Genital tract infections and vaginal discharge.content.p15")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Genital tract infections and vaginal discharge.content.p16")}</p> 
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Genital tract infections and vaginal discharge.content.p17")}</p> 
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Genital tract infections and vaginal discharge.content.p18")}</p> 
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Genital tract infections and vaginal discharge.content.p19")}</p> 
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Genital tract infections and vaginal discharge.content.p20")}</p> 
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Genital tract infections and vaginal discharge.content.p21")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Genital tract infections and vaginal discharge.content.p22")}</p>
      </div>
    `,
      icon: images.genital_tract_infections_and_vaginal_discharge_icon,
    },
    {
      id: "11",
      title: translation(
        "Providing psychological support for mothers and postpartum depression.title",
      ),
      content: `
      <div class="flex gap-3 flex-col">
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Providing psychological support for mothers and postpartum depression.content.p1")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Providing psychological support for mothers and postpartum depression.content.p2")}</p>
        <p style="font-size: 20px; color: #B3658C;font-weight:bold">${translation("Providing psychological support for mothers and postpartum depression.content.p3")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Providing psychological support for mothers and postpartum depression.content.p4")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Providing psychological support for mothers and postpartum depression.content.p5")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Providing psychological support for mothers and postpartum depression.content.p6")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Providing psychological support for mothers and postpartum depression.content.p7")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Providing psychological support for mothers and postpartum depression.content.p8")}</p>
        <p style="font-size: 20px; color: #B3658C;font-weight:bold">${translation("Providing psychological support for mothers and postpartum depression.content.p9")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Providing psychological support for mothers and postpartum depression.content.p10")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Providing psychological support for mothers and postpartum depression.content.p11")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Providing psychological support for mothers and postpartum depression.content.p12")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600"><span style="color:#B3658C;">></span>${translation("Providing psychological support for mothers and postpartum depression.content.p13")}</p>
        <p style="font-size: 20px; color: #B3658C;font-weight:bold">🚨 ${translation("Providing psychological support for mothers and postpartum depression.content.p14")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">🔴 ${translation("Providing psychological support for mothers and postpartum depression.content.p15")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">🔴 ${translation("Providing psychological support for mothers and postpartum depression.content.p16")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">🔴 ${translation("Providing psychological support for mothers and postpartum depression.content.p17")}</p>
        <p style="font-size: 20px; color: #B3658C;font-weight:bold">${translation("Providing psychological support for mothers and postpartum depression.content.p18")}</p>
        <p style="font-size: 16px; color: #555353;font-weight:600">${translation("Providing psychological support for mothers and postpartum depression.content.p19")}</p>
      </div>
    `,
      icon: images.providing_psychological_support_for_mothers_and_postpartum_depression_icon,
    },
  ];
};
