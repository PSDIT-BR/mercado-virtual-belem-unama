import { HeaderLayout } from "@/layouts/HeaderLayout";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative px-24">
      <HeaderLayout className="z-50" />
      <div>{children}</div>
    </div>
  );
}
