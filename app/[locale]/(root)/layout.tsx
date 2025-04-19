import Chat from "@/components/shared/Chat";
import Footer from "@/components/shared/Footer";
import MobileNavbar from "@/components/shared/MobileNavbar";
import Navbar from "@/components/shared/Navbar";
import { Locale, locales } from "@/i18n.config";
import { images } from "@/lib/data/images";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Toaster } from "react-hot-toast";

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
    title: translation("home title"),
    description: translation("home desc"),
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

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(params.locale);
  return (
    <div className="flex-center mx-auto h-full min-h-[100dvh] w-full flex-col justify-between">
      <Navbar />
      <MobileNavbar />
      <div className="w-full max-w-[1400px] overflow-x-clip md:overflow-x-visible">
        {children}
      </div>
      <Footer />
      <Toaster position="top-center" />
      <Chat />
    </div>
  );
}
