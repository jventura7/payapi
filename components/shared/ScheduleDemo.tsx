import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ScheduleDemo() {
  return (
    <div>
      <Input
        className="placeholder:text-light-san-juan-blue mb-4 rounded-full p-6 placeholder:font-semibold"
        type="email"
        placeholder="Enter email address"
      />
      <Button className="bg-dark-pink w-full rounded-full p-6 font-semibold transition duration-300 hover:opacity-70">
        Schedule a demo
      </Button>
    </div>
  );
}
