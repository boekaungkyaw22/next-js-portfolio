"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/flotingNavbar";
import { IconHome, IconUser, IconMessage} from "@tabler/icons-react";

export function NavBar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 dark:text-white text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 dark:text-white text-white" />,
    },
    {
      name: "Contact",
      link: "https://www.linkedin.com/in/boe-kaung-kyaw-a214aa293/",
      icon: (
        <IconMessage className="h-4 w-4 dark:text-white text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

