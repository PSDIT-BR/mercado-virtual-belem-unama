import { ComponentProps } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface WhatsappFloatProps extends ComponentProps<"div"> {}

export function WhatsappFloat({ className, ...props }: WhatsappFloatProps) {
  const classNameMerged = cn("fixed bottom-10 right-10", className);

  return (
    <div className={classNameMerged} {...props}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="bg-green-500 p-3 text-white rounded-full">
            <Link href="https://wa.link/uv4ico" target="_blank">
              <FaWhatsapp color="white" size={30} />
            </Link>
          </TooltipTrigger>
          <TooltipContent>Comprar por Whatsapp</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
