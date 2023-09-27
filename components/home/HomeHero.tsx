import PhoneMock from "../../public/assets/home/desktop/illustration-phone-mockup.svg";
import EasyToImplement from "../../public/assets/home/desktop/illustration-easy-to-implement.svg";
import Banking from "../../public/assets/home/desktop/icon-banking-and-coverage.svg";
import { heading_font } from "@/utils/fonts";
import ScheduleDemo from "../shared/ScheduleDemo";

export default function HomeHero() {
  return (
    <div className="animate-rise-up flex flex-col items-center justify-center p-8 pt-0">
      <PhoneMock width="300" height="400" viewBox="30 0 300 600" />
      <h1
        className={`${heading_font.className} text-san-juan-blue text-center text-5xl`}
      >
        Start building with our APIs for absolutely free.
      </h1>
      <div className="mt-10 w-full text-center text-lg">
        <ScheduleDemo />
        <h1 className="text-light-san-juan-blue mt-2 text-sm">
          Have any questions? <span className="font-bold">Contact Us</span>
        </h1>
      </div>
    </div>
  );
}
