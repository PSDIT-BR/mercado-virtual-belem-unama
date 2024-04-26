import { SomeDesktop } from "@/components/SomeDesktop";
import { WhatsappFloat } from "@/components/WhatsappFloat";
import { FooterLayout } from "@/layouts/FooterLayout";
import { HeaderLayout } from "@/layouts/HeaderLayout";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <SomeDesktop>
        <div className="py-2 w-full bg-green-300 flex items-center justify-center">
          Bem-vindo ao melhor catálago de produtos do{" "}
          <span className="mx-1 font-medium">VER-O-PESO</span>. Sinta-se em casa
          💚
        </div>
        <div className="relative px-24">
          <HeaderLayout className="z-50" />
          {children}
          <FooterLayout />
          <WhatsappFloat />
        </div>
      </SomeDesktop>
    </div>
  );
}
