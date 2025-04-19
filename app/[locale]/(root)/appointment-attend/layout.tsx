import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Locale, locales } from "@/i18n.config";
import { images } from "@/lib/data/images";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const translation = await getTranslations({
    locale,
    namespace: "layout.metaData",
  });

  return {
    metadataBase: new URL(
      process.env.BASE_URL || "https://woman.bestclinic24.com",
    ),
    title: translation("appointment-attend title"),
    description: translation("appointment-attend desc"),
    keywords: translation("keywords"),
    alternates: {
      canonical: "/appointment-attend",
      languages: {
        en: "/en/appointment-attend",
        ar: "/ar/appointment-attend",
      },
    },
    openGraph: {
      title: translation("og title appointment-attend"),
      description: translation("og desc appointment-attend"),
      url: process.env.BASE_URL,
      locale,
      type: "website",
      images: [
        {
          url: images.socialMediaLogo.src,
          alt: translation("logo_alt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: translation("twitter title appointment-attend"),
      description: translation("twitter desc appointment-attend"),
      images: [images.socialMediaLogo.src],
    },
  };
}
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(params.locale);

  return children;
}
