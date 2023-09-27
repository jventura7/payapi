import Tesla from "../../public/assets/shared/desktop/tesla.svg";
import Microsoft from "../../public/assets/shared/desktop/microsoft.svg";
import Oracle from "../../public/assets/shared/desktop/oracle.svg";
import Nvidia from "../../public/assets/shared/desktop/nvidia.svg";
import Google from "../../public/assets/shared/desktop/google.svg";
import HP from "../../public/assets/shared/desktop/hewlett-packard.svg";
import { Button } from "../ui/button";
import { heading_font } from "@/utils/fonts";

export default function HomeAbout() {
  return (
    <div className="bg-mirage-blue p-12 py-20 text-center align-middle">
      <div className="m-auto mb-12 grid w-96 grid-cols-2 justify-items-center gap-12">
        <Tesla />
        <Microsoft />
        <Oracle />
        <Nvidia />
        <Google />
        <HP />
      </div>
      <h1
        className={`${heading_font.className} mb-8 text-center text-5xl text-white`}
      >
        Who we work with
      </h1>
      <p className="mb-8 text-white">
        Today, millions of people around the world have successfully connected
        their accounts to apps they love using our API. We provide developers
        with the tools they need to create easy and accessible experiences for
        their users.
      </p>
      <Button
        className="bg-mirage-blue w-40 rounded-full p-8 py-6 text-white"
        variant={"outline"}
      >
        About Us
      </Button>
    </div>
  );
}
