import { Link } from "@/i18n.config";
import { images } from "@/lib/data/images";
import { useTranslations } from "next-intl";
import Image from "next/image";

type FinalProps = {
  doctorName: string;
  date: Date | undefined;
  time: string;
};

const Final = (props: FinalProps) => {
  const translation = useTranslations("booking");

  return (
    <div className="flex-center grow flex-col">
      <div className="flex-center aspect-square w-[8.1875rem] rounded-full bg-[#B3658C66]">
        <Image src={images.shieldTick} alt="tick" />
      </div>

      <h3 className="mt-6 text-3xl font-semibold">
        {translation("congratulations")}!
      </h3>

      <p className="mt-3 max-w-[28.625rem] text-center">
        {translation("your appointment with", {
          name: props.doctorName,
          date: props.date?.toLocaleDateString("en-CA", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          }),
          time: props.time,
        })}
      </p>

      <Link href={"/"} className="flex-center mx-auto mt-8 w-full">
        <button
          onClick={() => window.location.reload()}
          className="btn-effects flex h-[52px] w-[250px] items-center justify-center gap-2 rounded-[10px] bg-primary px-[30px] py-[16px] text-[16px] uppercase text-white md:h-[52px] md:w-[220px] lg:h-[52px] lg:w-[210px] xl:h-[52px] xl:w-[286px]"
        >
          {translation("Book another appointment")}
        </button>
      </Link>
    </div>
  );
};

export default Final;
