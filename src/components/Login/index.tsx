"use client";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { FaGoogle } from "react-icons/fa";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

interface LoginProps extends ComponentProps<typeof DialogContent> {}

export function Login({ className, ...props }: LoginProps) {
  const classNameMerged = cn("", className);

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="hover:opacity-80">Fazer Login</Button>
      </DialogTrigger>
      <DialogContent {...props}>
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">Login</DialogTitle>
          <DialogDescription>
            Faça o seu login e disfrute de todos os benefícios de ser um usuário
            cadastrado.
          </DialogDescription>
        </DialogHeader>
        <div>
          <div className="flex cursor-pointer items-center gap-2 rounded p-2 bg-blue-500 ">
            <div className="p-2 bg-white">
              <FaGoogle size={20} />
            </div>
            <div className=" text-lg text-center font-medium  w-full text-white">
              Logar com o Google
            </div>
          </div>
          <Separator className="mt-2" />
          <p className="text-gray-400 text-end text-sm">Faça login agora mesmo</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
