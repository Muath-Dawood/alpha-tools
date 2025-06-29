import { images } from "@/lib/data/images";
import Image from "next/image";

function OurCustomers() {
  return (
    <section className="flex flex-row flex-wrap gap-20 justify-center w-full px-36 py-10 bg-primary-background">
      <Image
        src={images.makitaLogo}
        alt="makita-logo"
        className="w-72"
      />
      <Image
        src={images.boschLogo}
        alt="makita-logo"
        className="w-72"
      />
      <Image
        src={images.blackAndDeckerLogo}
        alt="makita-logo"
        className="w-72"
      />
      <Image
        src={images.blackAndDeckerLogo}
        alt="makita-logo"
        className="w-72"
      />
      <Image
        src={images.makitaLogo}
        alt="makita-logo"
        className="w-72"
      />
      <Image
        src={images.dewaltLogo}
        alt="makita-logo"
        className="w-72"
      />
    </section>
);
}

export default OurCustomers;
