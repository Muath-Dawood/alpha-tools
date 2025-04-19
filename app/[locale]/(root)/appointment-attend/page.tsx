import Loading from "@/components/shared/Loading";
import { Suspense } from "react";
import CardContent from "./_components/CardContent";
import { Locale } from "@/i18n.config";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";

interface PageProps {
  params: {
    locale: Locale;
  };
  searchParams: {
    type?: string;
    key?: string;
  };
}

const Page: React.FC<PageProps> = ({ searchParams, params }) => {
  unstable_setRequestLocale(params.locale);

  const { type: action_type, key: action_key } = searchParams;

  if ((action_type !== "confirm" && action_type !== "cancel") || !action_key) {
    notFound();
  }

  return (
    <main className="mt-5 flex justify-center">
      <div className="flex min-h-[300px] min-w-[300px] max-w-[350px] flex-col items-center gap-3 rounded-md bg-white p-4 shadow-md">
        <Suspense key={`${action_type}-${action_key}`} fallback={<Loading />}>
          <CardContent
            action_type={action_type}
            action_key={action_key}
            locale={params.locale}
          />
        </Suspense>
      </div>
    </main>
  );
};

export default Page;
