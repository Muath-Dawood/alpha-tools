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
    title: translation("questionnaires post-treatment-evaluation title"),
    description: translation("questionnaires post-treatment-evaluation desc"),
    keywords: translation("keywords"),
    alternates: {
      canonical: "/questionnaires post-treatment-evaluation",
      languages: {
        en: "/en/questionnaires post-treatment-evaluation",
        ar: "/ar/questionnaires post-treatment-evaluation",
      },
    },
    openGraph: {
      title: translation("og title questionnaires post-treatment-evaluation"),
      description: translation(
        "og desc questionnaires post-treatment-evaluation",
      ),
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
      title: translation(
        "twitter title questionnaires post-treatment-evaluation",
      ),
      description: translation(
        "twitter desc questionnaires post-treatment-evaluation",
      ),
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
