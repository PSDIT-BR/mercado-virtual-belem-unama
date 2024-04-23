import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface PageProps extends ComponentProps<"div"> {}

export default function Page({ className, ...props }: PageProps) {
  const classNameMerged = cn("", className);

  return (
    <div className={classNameMerged} {...props}>  
        
    </div>
  );
}
