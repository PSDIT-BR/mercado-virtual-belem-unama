import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface FooterLayoutProps extends ComponentProps<"div"> {}

export function FooterLayout({ className, ...props }: FooterLayoutProps) {
  const classNameMerged = cn(
    "py-6 flex justify-center items-center w-full my-6 bg-green-300 rounded-lg px-10",
    className
  );

  return (
    <div className={classNameMerged} {...props}>
      <div className="flex justify-between w-full items-center">
        <span>
          <strong>© 2024</strong> Todos os direitos reservados.
        </span>
        <div className="flex items-center gap-6 justify-center">
          <Image src="/unamalogo.png" alt="logo unama" width={80} height={80} />
          
          <div className="flex items-center gap-1">
            Desenvolvido por{" "}
            <span className="font-bold ">Os Zés e a colmeia</span> 💛
          </div>

        </div>
      </div>
    </div>
  );
}
