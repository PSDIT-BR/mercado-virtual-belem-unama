import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { FaCartPlus } from "react-icons/fa";

interface CartProps extends ComponentProps<"div"> {}

export function Cart({ className, ...props }: CartProps) {
  const classNameMerged = cn("", className);

  return (
    <Sheet>
      <SheetTrigger>
        <div className="p-3 bg-gray-50 rounded-lg cursor-pointer">
          <FaCartPlus size={20} />
        </div>
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
          {2}
        </span>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrinho</SheetTitle>
          <SheetDescription>
            Suas compras estão aqui, finalize o seu pedido.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
