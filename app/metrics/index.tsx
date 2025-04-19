import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import MicrosoftClarity from "./MicrosoftClarity";
import Chatwoot from "./Chatwoot";

const Metrics = () => (
  <>
    <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ""} />
    <GoogleTagManager
      gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER || ""}
    />
    <MicrosoftClarity />
    <Chatwoot
      locale="ar"
      baseUrl="https://chat.burj-al-barmajah.com"
      websiteToken="MFk8afgeur7Br7qAnLZ4K9cL"
    />
  </>
);

export default Metrics;
