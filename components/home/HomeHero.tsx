import PhoneMock from "../../public/assets/home/desktop/illustration-phone-mockup.svg";
import EasyToImplement from "../../public/assets/home/desktop/illustration-easy-to-implement.svg";
import Banking from "../../public/assets/home/desktop/icon-banking-and-coverage.svg";
import { heading_font } from "@/utils/fonts";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function HomeHero() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <PhoneMock width="300" height="400" viewBox="30 0 300 600" />
      <h1
        className={`${heading_font.className} text-san-juan-blue text-center text-5xl`}
      >
        Start building with our APIs for absolutely free.
      </h1>
      <div className="mt-10 w-full text-lg">
        <Input
          className="mb-4 rounded-full p-6 placeholder:font-semibold placeholder:text-slate-400"
          type="email"
          placeholder="Enter email address"
        />
        <Button className="bg-dark-pink w-full rounded-full p-6 font-semibold transition duration-300 hover:opacity-70">
          Schedule a demo
        </Button>
      </div>
    </div>
  );
}
