import { Inter } from "next/font/google";
import "./globals.css";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import { Locale, locales } from "@/i18n.config";
import { NextIntlClientProvider } from "next-intl";
import { getLangDir } from "rtl-detect";
import { Open_Sans, Tajawal } from "next/font/google";
import { images } from "@/lib/data/images";
import Metrics from "@/app/metrics/index";

const openSans = Open_Sans({ subsets: ["latin"] });
const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["500", "700", "800", "900"],
});

const inter = Inter({ subsets: ["latin"] });

// JSON-LD Structured Data
const getJSONLD = () => ({
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Best Clinic",
  url: process.env.BASE_URL,
  description: "عيادة متخصصة في علاج ضعف الانتصاب باستخدام أحدث التقنيات.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ramallah - Al-Manara - Roundabout - City Center",
    addressLocality: "Ramallah",
    addressCountry: "PS",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+972-598070808",
    contactType: "Customer Service",
  },
});

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
    title: translation("title"),
    description: translation("description"),
    keywords: translation("keywords"),
    alternates: {
      canonical: "/",
      languages: {
        en: "/en",
        ar: "/ar",
      },
    },
    openGraph: {
      title: translation("og_title"),
      description: translation("og_description"),
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
      title: translation("twitter_title"),
      description: translation("twitter_description"),
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
  const messages = await getMessages();
  const dir = getLangDir(params.locale);

  return (
    <html lang={params.locale} dir={dir}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getJSONLD()) }}
        />
      </head>
      <NextIntlClientProvider messages={messages} locale={params.locale}>
        <body
          className={`${inter.className} ${params.locale === "ar" ? tajawal.className : openSans.className}`}
        >
          {children}
          <Metrics />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
