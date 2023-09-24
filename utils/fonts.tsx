import { DM_Serif_Display, Public_Sans } from "next/font/google";

export const heading_font = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});
export const body_font = Public_Sans({
  weight: ["400", "600", "900"],
  subsets: ["latin"],
});
