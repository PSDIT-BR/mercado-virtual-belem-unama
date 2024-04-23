import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";

interface SearchInputProps extends ComponentProps<"input"> {}

export function SearchInput({ className, ...props }: SearchInputProps) {
  const classNameMerged = cn("w-[400px] h-10", className);

  return (
    <Input
      type="text"
      placeholder="Buscar produtos..."
      className={classNameMerged}
      {...props}
    />
  );
}
