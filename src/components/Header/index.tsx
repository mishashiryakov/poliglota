"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import { routes } from "@/constants/routes";

export const Header = () => {
  const pathname = usePathname();

  const isHome = pathname === routes.home;
  const isDictionary = pathname === routes.dictionary;
  const isQuizz = pathname === routes.quiz;

  return (
    <header className="h-[75px]">
      <nav className="h-full flex gap-12 items-center justify-center px-8  shadow-md">
        <Link
          href={routes.home}
          className={twMerge("font-bold", isHome && "overline ")}
        >
          Home
        </Link>
        <Link
          href={routes.dictionary}
          className={twMerge("font-bold", isDictionary && "overline ")}
        >
          Dictionary
        </Link>
        <Link
          href={routes.quiz}
          className={twMerge("font-bold", isQuizz && "overline ")}
        >
          Quizz
        </Link>
      </nav>
    </header>
  );
};
