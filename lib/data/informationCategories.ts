import {
  InformationCategory,
  InformationCategorySubject,
} from "@/types/medicineInformationSheets";
import { useTranslations } from "next-intl";
import { images } from "./images";

export const informationCategorySubjects = (): InformationCategorySubject[] => {
  const translation = useTranslations("medicine-information-sheets");

  return [
    {
      id: "1",
      image: images.informationSheetSection1,
      title: translation("understanding erectile dysfunction"),
      desc: translation("understanding erectile dysfunction desc"),
      section1: {
        subSections: [
          {
            title: translation(
              "understanding erectile subject 1 section 1 subsection 1 title",
            ),
            paragraphs: [
              {
                text: translation(
                  "understanding erectile subject 1 section 1 subsection 1 desc 1",
                ),
              },
            ],
          },
          {
            title: translation(
              "understanding erectile subject 1 section 1 subsection 2 title",
            ),
            paragraphs: [
              {
                text: translation(
                  "understanding erectile subject 1 section 1 subsection 2 desc 1",
                ),
                note: translation(
                  "understanding erectile subject 1 section 1 subsection 2 desc 1 subdesc",
                ),
              },
              {
                text: translation(
                  "understanding erectile subject 1 section 1 subsection 2 desc 2",
                ),
              },
            ],
          },
        ],
      },
      section2: {
        image: images.informationSheetSection2,
        title: translation(
          "understanding erectile subject 1 section 2 subsection 1 title",
        ),
        paragraphs: [
          translation(
            "understanding erectile subject 1 section 2 subsection 1 desc 1",
          ),
          translation(
            "understanding erectile subject 1 section 2 subsection 1 desc 2",
          ),
          translation(
            "understanding erectile subject 1 section 2 subsection 1 desc 3",
          ),
        ],
      },
    },
    {
      id: "2",
      image: images.informationSheetSection1,
      title: translation("understanding erectile dysfunction"),
      desc: translation("understanding erectile dysfunction desc"),
      section1: {
        subSections: [
          {
            title: translation(
              "understanding erectile subject 2 section 1 subsection 1 title",
            ),
            paragraphs: [
              {
                text: translation(
                  "understanding erectile subject 2 section 1 subsection 1 desc 1",
                ),
              },
            ],
          },
          {
            title: translation(
              "understanding erectile subject 2 section 1 subsection 2 title",
            ),
            paragraphs: [
              {
                text: translation(
                  "understanding erectile subject 2 section 1 subsection 2 desc 1",
                ),
                note: translation(
                  "understanding erectile subject 2 section 1 subsection 2 desc 1",
                ),
              },
              {
                text: translation(
                  "understanding erectile subject 2 section 1 subsection 2 desc 2",
                ),
              },
            ],
          },
        ],
      },
      section2: {
        image: images.informationSheetSection2,
        title: translation(
          "understanding erectile subject 2 section 2 subsection 1 title",
        ),
        paragraphs: [
          translation(
            "understanding erectile subject 2 section 2 subsection 1 desc 1",
          ),
          translation(
            "understanding erectile subject 2 section 2 subsection 1 desc 2",
          ),
          translation(
            "understanding erectile subject 2 section 2 subsection 1 desc 3",
          ),
        ],
      },
    },
    {
      id: "3",
      image: images.informationSheetSection1,
      title: translation("understanding erectile dysfunction"),
      desc: translation("understanding erectile dysfunction desc"),
      section1: {
        subSections: [
          {
            title: translation(
              "understanding erectile subject 3 section 1 subsection 1 title",
            ),
            paragraphs: [
              {
                text: translation(
                  "understanding erectile subject 3 section 1 subsection 1 desc 1",
                ),
              },
            ],
          },
          {
            title: translation(
              "understanding erectile subject 3 section 1 subsection 2 title",
            ),
            paragraphs: [
              {
                text: translation(
                  "understanding erectile subject 3 section 1 subsection 2 desc 1",
                ),
                note: translation(
                  "understanding erectile subject 3 section 1 subsection 2 desc 1",
                ),
              },
              {
                text: translation(
                  "understanding erectile subject 3 section 1 subsection 2 desc 2",
                ),
              },
            ],
          },
        ],
      },
      section2: {
        image: images.informationSheetSection2,
        title: translation(
          "understanding erectile subject 3 section 2 subsection 1 title",
        ),
        paragraphs: [
          translation(
            "understanding erectile subject 3 section 2 subsection 1 desc 1",
          ),
          translation(
            "understanding erectile subject 3 section 2 subsection 1 desc 2",
          ),
          translation(
            "understanding erectile subject 3 section 2 subsection 1 desc 3",
          ),
        ],
      },
    },
    {
      id: "4",
      image: images.informationSheetSection1,
      title: translation("understanding erectile dysfunction"),
      desc: translation("understanding erectile dysfunction desc"),
      section1: {
        subSections: [
          {
            title: translation(
              "understanding erectile subject 4 section 1 subsection 1 title",
            ),
            paragraphs: [
              {
                text: translation(
                  "understanding erectile subject 4 section 1 subsection 1 desc 1",
                ),
              },
            ],
          },
          {
            title: translation(
              "understanding erectile subject 4 section 1 subsection 2 title",
            ),
            paragraphs: [
              {
                text: translation(
                  "understanding erectile subject 4 section 1 subsection 2 desc 1",
                ),
                note: translation(
                  "understanding erectile subject 4 section 1 subsection 2 desc 1",
                ),
              },
              {
                text: translation(
                  "understanding erectile subject 4 section 1 subsection 2 desc 2",
                ),
              },
            ],
          },
        ],
      },
      section2: {
        image: images.informationSheetSection2,
        title: translation(
          "understanding erectile subject 4 section 2 subsection 1 title",
        ),
        paragraphs: [
          translation(
            "understanding erectile subject 4 section 2 subsection 1 desc 1",
          ),
          translation(
            "understanding erectile subject 4 section 2 subsection 1 desc 2",
          ),
          translation(
            "understanding erectile subject 4 section 2 subsection 1 desc 3",
          ),
        ],
      },
    },
    {
      id: "5",
      image: images.informationSheetSection1,
      title: translation("impotence"),
      desc: translation("impotence desc"),
      section1: {
        subSections: [
          {
            title: translation(
              "impotence subject 1 section 1 subsection 1 title",
            ),
            paragraphs: [
              {
                text: translation(
                  "impotence subject 1 section 1 subsection 1 desc 1",
                ),
              },
            ],
          },
          {
            title: translation(
              "impotence subject 1 section 1 subsection 2 title",
            ),
            paragraphs: [
              {
                text: translation(
                  "impotence subject 1 section 1 subsection 2 desc 1",
                ),
                note: translation(
                  "impotence subject 1 section 1 subsection 2 desc 1",
                ),
              },
              {
                text: translation(
                  "impotence subject 1 section 1 subsection 2 desc 2",
                ),
              },
            ],
          },
        ],
      },
      section2: {
        image: images.informationSheetSection2,
        title: translation("impotence subject 1 section 2 subsection 1 title"),
        paragraphs: [
          translation("impotence subject 1 section 2 subsection 1 desc 1"),
          translation("impotence subject 1 section 2 subsection 1 desc 2"),
          translation("impotence subject 1 section 2 subsection 1 desc 3"),
        ],
      },
    },
    {
      id: "6",
      image: images.informationSheetSection1,
      title: translation("impotence"),
      desc: translation("impotence desc"),
      section1: {
        subSections: [
          {
            title: translation(
              "impotence subject 2 section 1 subsection 1 title",
            ),
            paragraphs: [
              {
                text: translation(
                  "impotence subject 2 section 1 subsection 1 desc 1",
                ),
              },
            ],
          },
          {
            title: translation(
              "impotence subject 2 section 1 subsection 2 title",
            ),
            paragraphs: [
              {
                text: translation(
                  "impotence subject 2 section 1 subsection 2 desc 1",
                ),
                note: translation(
                  "impotence subject 2 section 1 subsection 2 desc 1",
                ),
              },
              {
                text: translation(
                  "impotence subject 2 section 1 subsection 2 desc 2",
                ),
              },
            ],
          },
        ],
      },
      section2: {
        image: images.informationSheetSection2,
        title: translation("impotence subject 2 section 2 subsection 1 title"),
        paragraphs: [
          translation("impotence subject 2 section 2 subsection 1 desc 1"),
          translation("impotence subject 2 section 2 subsection 1 desc 2"),
          translation("impotence subject 2 section 2 subsection 1 desc 3"),
        ],
      },
    },
  ];
};

export const informationCategories = (): InformationCategory[] => {
  const translation = useTranslations("medicine-information-sheets");
  return [
    {
      title: translation("understanding erectile dysfunction"),
      list: [
        {
          text: translation("understanding erectile subject1"),
          id: "1",
        },
        {
          text: translation("understanding erectile subject2"),
          id: "2",
        },
        {
          text: translation("understanding erectile subject3"),
          id: "3",
        },
        {
          text: translation("understanding erectile subject4"),
          id: "4",
        },
      ],
    },
    {
      title: translation("impotence"),
      list: [
        {
          text: translation("impotence subject1"),
          id: "5",
        },
        {
          text: translation("impotence subject2"),
          id: "6",
        },
      ],
    },
  ];
};
