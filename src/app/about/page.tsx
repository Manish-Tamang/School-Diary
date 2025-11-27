import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

export default function About() {
  return (
    <main className="relative overflow-hidden min-h-screen">
      <div className="mt-16 sm:mt-20 relative">
        <div className="w-full max-w-[670px] mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                About
              </h1>
              <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
                Welcome to my school dairy. A collection of moments, memories, and visual stories.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:gap-6">
              <section className="flex flex-col gap-4">
                <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
                  About This School Dairy
                </h2>
                <div className="flex flex-col gap-3 text-sm sm:text-base text-foreground/80 leading-relaxed">
                  <p>
                    I passed out my school in 2080 B.S from Prashanti Academy. I used to make different websites at that time and was curious to build something so i build the first version of this school diary and published (commited to github)
                    on Mar 2, 2024. While i'm building and updating this v2 of the school dairy it's 11:56 PM on Nov 29, 2025 listing music of NJK, Pidit.
                  </p>
                </div>
              </section>

              <section className="flex flex-col gap-4">
                <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
                  Built With
                </h2>
                <div className="flex flex-col gap-3">
                  <ul className="flex flex-col gap-2 text-sm sm:text-base text-foreground/80">
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <span>Next.js - React framework for production</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <span>Firebase - Backend and storage solution</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <span>TypeScript - Type-safe development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <span>Tailwind CSS - Modern styling</span>
                    </li>
                  </ul>
                </div>
              </section>
              <section className="flex flex-col gap-4">
                <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
                  Connect
                </h2>
                <div className="flex flex-col gap-3">
                  <p className="text-sm sm:text-base text-foreground/80">
                    Feel free to reach out or connect with me through the following channels:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <a
                      href="https://github.com/Manish-Tamang"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 text-sm sm:text-base text-foreground hover:text-primary transition-colors duration-200 outline-none focus-visible:ring-1 focus-visible:ring-neutral-300/80 dark:focus-visible:ring-neutral-800 rounded px-2 py-1"
                    >
                      <span>GitHub</span>
                      <ArrowUpRightIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <a
                      href="https://x.com/Manishtamangxyz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 text-sm sm:text-base text-foreground hover:text-primary transition-colors duration-200 outline-none focus-visible:ring-1 focus-visible:ring-neutral-300/80 dark:focus-visible:ring-neutral-800 rounded px-2 py-1"
                    >
                      <span>X (Twitter)</span>
                      <ArrowUpRightIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <a
                      href="https://manishtamang.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 text-sm sm:text-base text-foreground hover:text-primary transition-colors duration-200 outline-none focus-visible:ring-1 focus-visible:ring-neutral-300/80 dark:focus-visible:ring-neutral-800 rounded px-2 py-1"
                    >
                      <span>Website</span>
                      <ArrowUpRightIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>
              </section>
              <div className="pt-4 border-t border-border">
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

