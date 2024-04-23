import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { HeaderLayout } from "@/layouts/HeaderLayout";

interface LayoutProps extends ComponentProps<"div"> {}

export default function Layout({ className, ...props }: LayoutProps) {
  const classNameMerged = cn("", className);

  return (
    <div className={classNameMerged} {...props}>
      <HeaderLayout />
    </div>
  );
}
