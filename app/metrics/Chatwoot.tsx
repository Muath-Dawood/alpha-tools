"use client";

import { useEffect } from "react";

type ChatwootProps = {
  locale?: string;
  baseUrl?: string;
  websiteToken?: string;
};

const Chatwoot = ({
  locale = "en",
  baseUrl = "https://chat.burj-al-barmajah.com", // 👈 غيّر إلى دومينك الصحيح
  websiteToken = "MFk8afgeur7Br7qAnLZ4K9cL", // 👈 التوكين من لوحة Chatwoot
}: ChatwootProps) => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (document.getElementById("chatwoot-script")) return;

    window.chatwootSettings = {
      locale,
      position: "right",
    };

    const script = document.createElement("script");
    script.id = "chatwoot-script";
    script.src = `${baseUrl}/packs/js/sdk.js`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      if (window.chatwootSDK) {
        window.chatwootSDK.run({
          websiteToken,
          baseUrl,
        });
      }
    };

    document.head.appendChild(script);
  }, [locale, baseUrl, websiteToken]);

  return null;
};

export default Chatwoot;
