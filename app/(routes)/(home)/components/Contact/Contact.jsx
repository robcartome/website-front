"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button"

export default function ContactButton({ type, buttonText }) {
  const buttonContact = {
    outline: (
      <Button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-sky-500 text-sky-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-sky-500 hover:text-white transition-all hover:shadow-sky">
        {buttonText}
      </Button>
    ),
    normal: (
      <Button className="w-full bg-sky-500 hover:bg-sky-400">
        {buttonText}
      </Button>
    ),
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{buttonContact[type]}</DialogTrigger>

      {/* Ajuste del contenido del modal */}
      <DialogContent className="w-full max-w-full sm:max-w-3xl lg:max-w-6xl p-2 overflow-y-auto max-h-[80vh]">
        <DialogTitle className="text-center mb-2">CONTACTANOS</DialogTitle>
        <hr />
        <DialogDescription>
            <div className="w-full h-full">
              {/* Haciendo el iframe completamente responsivo */}
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfwKZecYA-kcoXvu8IiteOGeqLFMS3ivaGXvb093vw-c31F9g/viewform?embedded=true"
                width="100%"
                height="716"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                className="w-full"
              >
                Cargando…
              </iframe>
            </div>
          </DialogDescription>
          {/* Botón de cierre (la "X") */}
      </DialogContent>
    </Dialog>
  );
}
