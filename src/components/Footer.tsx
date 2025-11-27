import Link from "next/link";

import { ArrowUpRightIcon } from "lucide-react";

export const NAVIGATE = [
  {
    name: "Home",
    slug: "/",
  },
  {
    name: "About",
    slug: "/about",
  },
];

export function Footer() {
  function getFullYear() {
    return new Date().getFullYear();
  }

  return (
    <footer className="relative z-10">
      <div className="relative mx-auto max-w-[670px] w-full px-4 sm:px-6 pb-5">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center sm:justify-between">
          <div className="flex flex-col gap-1 order-2 sm:order-1">
            <p className="text-[13px] text-foreground text-center sm:text-left">
              &#169; {getFullYear()},{" "}
              <a
                href="https://manishtamang.com"
                target="_blank"
                rel="noopener noreferrer"
                className="duration-200 hover:text-primary outline-none focus-visible:ring-1 focus-visible:ring-neutral-300/80 dark:focus-visible:ring-neutral-800"
              >
                Manish Gole Tamang.
              </a>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 order-1 sm:order-2">
            <div className="flex gap-4 sm:gap-5">
              {NAVIGATE.map(({ name, slug }, idx) => (
                <Link
                  key={idx}
                  href={slug}
                  className="px-1 rounded group flex w-fit items-center gap-1 text-[13px] text-foreground duration-200 hover:text-primary outline-none focus-visible:ring-1 focus-visible:ring-neutral-300/80 dark:focus-visible:ring-neutral-800"
                >
                  {name}
                </Link>
              ))}
            </div>
            <div className="hidden sm:block">
              <Divider />
            </div>
            <div className="flex gap-4 sm:gap-5">
              <a
                href="https://github.com/Manish-Tamang"
                target="_blank"
                rel="noopener noreferrer"
                className="px-1 rounded group flex w-fit items-center gap-1 text-[13px] text-foreground duration-200 hover:text-primary outline-none focus-visible:ring-1 focus-visible:ring-neutral-300/80 dark:focus-visible:ring-neutral-800"
              >
                GitHub
                <ArrowIconGlitch />
              </a>
              <a
                href="https://x.com/Manishtamangxyz"
                target="_blank"
                rel="noopener noreferrer"
                className="px-1 rounded group flex w-fit items-center gap-1 text-[13px] text-foreground duration-200 hover:text-primary outline-none focus-visible:ring-1 focus-visible:ring-neutral-300/80 dark:focus-visible:ring-neutral-800"
              >
                X (Twitter)
                <ArrowIconGlitch />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ArrowIconGlitch() {
  return (
    <div className="group relative overflow-hidden font-medium">
      <span className="invisible">
        <ArrowUpRightIcon size={10} />
      </span>
      <span className="absolute left-0 top-0 text-neutral-500 dark:text-neutral-400 transition-transform duration-300 ease-in-out hover:duration-300 group-hover:-translate-y-full group-hover:translate-x-full">
        <ArrowUpRightIcon size={10} />
      </span>
      <span className="absolute left-0 top-0 -translate-x-full translate-y-full text-primary transition-transform duration-300 ease-in-out hover:duration-300 group-hover:translate-x-0 group-hover:translate-y-0">
        <ArrowUpRightIcon size={10} />
      </span>
    </div>
  );
}

function Divider() {
  return <div aria-hidden className="h-[21px] w-px bg-border" />;
}
