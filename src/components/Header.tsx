"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";

import { Icons } from "@/components/Icons";
import { ToggleTheme } from "@/components/ToggleTheme";

import { cn } from "@/utils/cn";

const ITEMS = [
  {
    name: "Home",
    slug: "/",
  },
  {
    name: "About",
    slug: "/about",
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  function handleScroll() {
    if (window.scrollY > 0) {
      return setIsScrolled(true);
    }

    return setIsScrolled(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 h-17 w-full transition-colors duration-200 ease-out border-b-[.75px] border-transparent",
        isScrolled &&
          "bg-background dark:bg-background/40 backdrop-blur-md border-border dark:border-[#262626]/50"
      )}
    >
      <nav className="flex h-full items-center justify-between gap-4 sm:gap-6 px-4 sm:px-6 max-w-[670px] mx-auto w-full">
        <Link
          href="/"
          className="p-1 rounded outline-none focus-visible:ring-1 focus-visible:ring-neutral-300/80 dark:focus-visible:ring-neutral-800"
        >
          <Icons.logo className="w-[60px] sm:w-[70px]" />
        </Link>
        <div className="flex items-center gap-3 sm:gap-5">
          <div className="hidden sm:flex items-center gap-5">
            {ITEMS.map(({ name, slug }) => (
              <Link
                key={name}
                href={slug}
                className={cn(
                  "text-sm p-1 rounded font-[460] leading-none outline-none focus-visible:ring-1 focus-visible:ring-neutral-300/80 dark:focus-visible:ring-neutral-800",
                  pathname === slug
                    ? "text-primary"
                    : "duration-200 text-foreground hover:text-primary"
                )}
              >
                {name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <ToggleTheme />
            <Divider />
            <a
              href="https://github.com/Manish-Tamang"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-md p-0.5 outline-none focus-visible:ring-1 focus-visible:ring-neutral-300/80 dark:focus-visible:ring-neutral-800"
            >
              <Icons.github className="size-4 text-neutral-400 duration-150 group-hover:text-neutral-500 dark:group-hover:text-neutral-300 dark:text-neutral-600" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

function Divider() {
  return <div aria-hidden className="h-5 w-px bg-border" />;
}
