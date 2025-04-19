/** @type {import('next-sitemap').IConfig} */

const locales = ["en", "ar"];

const paths = new Set();

module.exports = {
  siteUrl: process.env.BASE_URL,
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ["/sitemap.xml", "/sitemap-0.xml"],
  transform: async (config, path) => {
    const pathWithoutLang = path.split("/").slice(2).join("/"); // removes the /locale in the start of the path

    if (paths.has(pathWithoutLang)) return null;

    paths.add(pathWithoutLang);

    return {
      loc: pathWithoutLang, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs:
        config.alternateRefs ??
        locales.map((locale) => ({
          hreflang: locale,
          href: `${config.siteUrl}${locale}`,
        })),
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
