import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { SearchInput } from "@/components/Search";
import { Button } from "@/components/ui/button";

interface HeaderLayoutProps extends ComponentProps<"div"> {}

const menuItems = [{ name: "Home" }, { name: "About" }, { name: "Contact" }];

export function HeaderLayout({ className, ...props }: HeaderLayoutProps) {
  const classNameMerged = cn("flex items-center w-full justify-between px-32 mt-6", className);

  return (
    <div className={classNameMerged} {...props}>
      <div className="flex gap-4 items-center">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
        Mercado Virtual de Belém    
      </div>
      <div className="flex ">
        <SearchInput />
      </div>
      <div className="flex items-center gap-4">
        {menuItems.map((item) => (
          <p className=" hover:bg-slate-100 px-4 py-2 rounded-lg cursor-pointer" key={item.name}>{item.name}</p>
        ))}
        <div>
            <Button className="hover:opacity-80">Fazer Login</Button>
        </div>
      </div>
    </div>
  );
}
