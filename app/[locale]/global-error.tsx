"use client";
import { Link } from "@/i18n.config";
import { images } from "@/lib/data/images";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  const translation = useTranslations("server error");

  return (
    <main className="flex-center mx-auto mt-7 w-full flex-col-reverse justify-around gap-4 px-5 lg:flex-row lg:px-20 lg:pt-12">
      <div className="flex-center flex-1 flex-col gap-4 text-center lg:min-w-[35rem] lg:items-start lg:text-start">
        <p className="text-xl font-extrabold leading-5 tracking-wide text-primary-background sm:text-[3.75rem] sm:leading-[3.75rem]">
          500
        </p>
        <p className="text-xl font-extrabold leading-5 tracking-wide sm:text-[3.75rem] sm:leading-[3.75rem]">
          {translation("Internal Server Error")}
        </p>
        <p>{translation("The server has been deserted a while")}</p>

        <Link href={"/"} className="mt-12">
          <div className="flex-center gap-6 text-base text-white xs:text-lg xs:leading-5 [&>div]:relative [&>div]:z-10 [&>div]:after:absolute [&>div]:after:start-[-0.3125rem] [&>div]:after:top-[-0.3125rem] [&>div]:after:-z-10 [&>div]:after:h-[calc(100%+0.625rem)] [&>div]:after:w-[calc(100%+0.625rem)] [&>div]:after:rounded-[0.25rem] [&>div]:after:bg-secondary-background/20">
            <div className="btn-effects rounded-[0.25rem] bg-primary-background px-3 py-2 font-semibold uppercase xs:px-6 xs:py-4">
              {translation("home page")}
            </div>
          </div>
        </Link>
      </div>

      <div className="max-w-[75%] flex-1 xs:max-w-[60%]">
        <Image
          src={images.server_error}
          alt="not found"
          priority
          className="ms-auto"
        />
      </div>
    </main>
  );
};

export default Error;
