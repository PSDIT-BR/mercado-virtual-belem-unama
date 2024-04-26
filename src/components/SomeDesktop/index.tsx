"use client";
import { ComponentProps, ReactNode } from "react";

import { useMediaQuery } from "usehooks-ts";
import { cn } from "@/lib/utils";

import { GoAlert } from "react-icons/go";

interface SomeDesktopProps extends ComponentProps<"div"> {
  children: ReactNode;
}

export function SomeDesktop({
  children,
  className,
  ...props
}: SomeDesktopProps) {
  const classNameMerged = cn("", className);

  const isDesktop = useMediaQuery("(min-width: 1280px)");

  if (!isDesktop) {
    return (
      <div className="flex flex-col justify-center bg-green-400 rounded-lg items-center  h-screen text-center">
        <GoAlert className="text-red-500 text-6xl mx-auto mb-4" />
        <h1 className="text-red-500 text-2xl font-bold mb-2">Oops!</h1>
        <p className="text-white text-lg">
          Esta página só está disponível em dispositivos desktop. (1280px)
        </p>
      </div>
    );
  }
  return <div className={classNameMerged} {...props}>{children}</div>;
}
