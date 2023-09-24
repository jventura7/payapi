import PhoneMock from "../../public/assets/home/desktop/illustration-phone-mockup.svg";
import EasyToImplement from "../../public/assets/home/desktop/illustration-easy-to-implement.svg";
import Banking from "../../public/assets/home/desktop/icon-banking-and-coverage.svg";
import { heading_font } from "@/utils/fonts";

export default function HomeHero() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <PhoneMock width="300" height="400" viewBox="30 0 300 600" />
      <h1
        className={`${heading_font.className} text-san-juan-blue text-center text-5xl`}
      >
        Start building with our APIs for absolutely free.
      </h1>
      <div></div>
    </div>
  );
}
