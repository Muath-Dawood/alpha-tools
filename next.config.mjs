import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.bestclinic24.net",
        port: "",
        pathname: "/assets/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
