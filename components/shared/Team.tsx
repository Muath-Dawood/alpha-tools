import { teamMembers } from "@/lib/data/team_members";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Animate from "@/components/shared/Animate";
import useTextDirection from "@/hooks/useTextDirection";
import { images } from "@/lib/data/images";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Locale } from "@/i18n.config";

const Team = () => {
  const translation = useTranslations("team");
  const dir = useTextDirection();
  const team_members_list = teamMembers();
  const locale = useLocale() as Locale;

  return (
    <section
      className="w-full"
      id={locale === "ar" ? "الفريق الطبي" : "medical team"}
    >
      <div className="flex flex-col gap-2 text-center">
        <h2 className="mx-auto text-center text-xl font-medium text-[#3D3D3D] sm:text-[2.5rem] sm:leading-[3.25rem] md:text-start">
          <Animate
            fromRight={dir === "ltr" ? 100 : -100}
            toRight={0}
            initialOpacity={0}
            finalOpcaity={1}
            wrapper="span"
            once={true}
          >
            {translation("title")}
          </Animate>
        </h2>
        <p className="mx-auto max-w-[69.125rem] text-center text-[17px] font-[600] text-[#9F9F9F]">
          <Animate
            fromLeft={dir === "ltr" ? 100 : -100}
            toLeft={0}
            initialOpacity={0}
            finalOpcaity={1}
            wrapper="span"
            once={true}
          >
            {translation("desc")}
          </Animate>
        </p>
      </div>

      <div className="grid-col-1 mx-auto mt-14 grid w-fit gap-x-5 gap-y-16 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {team_members_list.map((team_member, i) => (
          <Animate
            className="flex h-[420px] w-[320px] flex-col gap-[30px] rounded-[20px] bg-white p-[30px] shadow-[0_0_13px_0_rgba(195,195,195,0.25)]"
            customKey={i}
            fromTop={75}
            toTop={0}
            initialOpacity={0}
            finalOpcaity={1}
            delay={0.1 * i}
            once={true}
          >
            <div className="flex-center flex h-[200px] w-full rounded-[20px] bg-[#B3658C17]">
              <Image
                src={images.woman_2_icon}
                alt="doctor"
                className="h-[50%] w-[50%]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-[26px] font-[800] text-[#3D3D3D]">
                {team_member.name}
              </h1>
              <div className="flex-center flex-col items-start">
                {team_member.specialites.map((speciality) => (
                  <div
                    className="flex items-center gap-1 text-[17px] font-[500] text-[#9F9F9F]"
                    key={speciality}
                  >
                    {dir == "rtl" ? (
                      <MdKeyboardArrowLeft className="text-[17px] text-[#9F9F9F]" />
                    ) : (
                      <MdKeyboardArrowRight className="text-[17px] text-[#9F9F9F]" />
                    )}
                    {speciality}
                  </div>
                ))}
              </div>
            </div>
          </Animate>
        ))}
      </div>
    </section>
  );
};

export default Team;
