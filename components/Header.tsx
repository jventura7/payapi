"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Logo from "../public/assets/shared/desktop/logo.svg";
import Menu from "../public/assets/shared/mobile/menu.svg";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-8">
      <Logo />
      <Menu />
    </header>
  );
}
