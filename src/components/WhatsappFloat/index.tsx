import { ComponentProps } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { cn } from "@/lib/utils";

interface WhatsappFloatProps extends ComponentProps<"div"> {}

export function WhatsappFloat({ className, ...props }: WhatsappFloatProps) {
  const classNameMerged = cn("fixed bottom-10 right-10", className);

  return (
    <div className={classNameMerged} {...props}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="bg-green-500 p-3 text-white rounded-full">
            <FaWhatsapp
              
              color="white"
              size={30}
            />
          </TooltipTrigger>
          <TooltipContent>Comprar por Whatsapp</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
