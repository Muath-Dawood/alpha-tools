import { Link, Locale } from "@/i18n.config";
import { sendRequest } from "@/actions/appointmentAttend";
import { images } from "@/lib/data/images";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

interface PageProps {
  action_type: "confirm" | "cancel";
  action_key: string;
  locale: Locale;
}

interface Response {
  ok: boolean;
  title?: string;
  status?: number;
  message: string;
}

export default async function CardContent({
  action_key,
  action_type,
  locale,
}: PageProps) {
  const response_data: Response | undefined = await sendRequest(
    { type: action_type, key: action_key },
    locale,
  );
  const translation = await getTranslations("appointmentAttend");
  return (
    <>
      <div className="flex-center mt-4 aspect-square w-[8.1875rem] rounded-full bg-[#A4CFC3]">
        <Image
          src={response_data?.ok == true ? images.shieldTick : images.error}
          alt="tick"
        />
      </div>
      <h1
        className={`text-center ${response_data?.ok == true ? "text-3xl" : "text-xl"}`}
      >
        {response_data?.message}
      </h1>
      <span className="text-center text-base">
        {translation("thank_you_message")}
      </span>

      <Link
        href={"/"}
        className="flex-center btn-effects mb-4 h-10 w-full min-w-[8.25rem] rounded-sm bg-primary-background p-3 text-base font-medium text-white shadow-[-8px_8px_28px_0px_#0000000F] lg:w-auto"
      >
        {translation("back_to_home_page")}
      </Link>
    </>
  );
}
