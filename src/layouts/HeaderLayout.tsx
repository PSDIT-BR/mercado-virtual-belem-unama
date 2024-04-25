"use client";
import { ComponentProps, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { SearchInput } from "@/components/Search";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Login } from "@/components/Login";
import { Cart } from "@/components/Cart";

interface HeaderLayoutProps extends ComponentProps<"div"> {}

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Catálago de Produtos",
    href: "/catalagos",
  },
];
export function HeaderLayout({ className, ...props }: HeaderLayoutProps) {
  const pathName = usePathname();
  const router = useRouter()

  const [currentRouter, setCurrentRouter] = useState(`/`);

  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    setCurrentRouter(pathName);
  }, [pathName]);


  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsScrolled(scrollY > 130);
  }, [scrollY]);


  const classNameMerged = cn(
    "relative  flex items-center justify-between h-20 w-full transition-all duration-300 ease-in-out rounded-md",
    isScrolled && "fixed px-24 top-0 left-0 z-50 w-full z-50 bg-green-400 text-green-900 shadow-md",
    className
  );

  return (
    <div className={classNameMerged} {...props}>
      <div onClick={() => router.replace("/")} className="flex gap-4 items-center cursor-pointer">
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
          <Login />
        </div>
        <div className="relative">
          <Cart />
        </div>
      </div>
    </div>
  );
}
