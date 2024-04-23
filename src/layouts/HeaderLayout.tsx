"use client"
import { ComponentProps, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { SearchInput } from "@/components/Search";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface HeaderLayoutProps extends ComponentProps<"div"> {}

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Catálago de Produtos",
    href: "/catalagos",
  }
];
export function HeaderLayout({ className, ...props }: HeaderLayoutProps) {
  const pathName = usePathname();

  const [currentRouter, setCurrentRouter] = useState(`/`);

  useEffect(() => {
    setCurrentRouter(pathName);
  }, [pathName]);

  const classNameMerged = cn(
    "relative  flex items-center justify-between h-24 w-full  px-28 rounded-md",
    className
  );

  return (
    <div className={classNameMerged} {...props}>
      <div className="flex gap-4 items-center">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
        Mercado Virtual de Belém
      </div>
      <div className="flex">
        <SearchInput />
      </div>
      <div className="flex items-center gap-4">
        <nav className="flex items-center gap-4">
          {menuItems.map(({ href, text }) => (
            <Link
              key={href}
              href={href}
              className={`cursor-pointer hover:bg-slate-50 px-4 py-2 rounded-lg relative ${
                currentRouter === href ? "active-nav" : ""
              }`}
            >
              {text}
            </Link>
          ))}
        </nav>
        <div>
          <Button className="hover:opacity-80">Fazer Login</Button>
        </div>
      </div>
    </div>
  );
}
