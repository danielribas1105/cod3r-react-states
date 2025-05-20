//import { Geist, Geist_Mono } from "next/font/google";

import MenuItem from "@/components/templates/MenuItem";
import { IconArrowsDownUp, IconForms, IconNumbers } from "@tabler/icons-react";

/* const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
}); */

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-zinc-800 to-black gap-20">
      <div className="text-6xl">
        <span className="opacity-40 font-thin">Gerenciamento de </span>
        <span className="font-black bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
          Estado
        </span>
      </div>
      <div className="flex flex-wrap justify-around w-3/5">
        <MenuItem icone={IconForms} texto="Estado" url="/revisao/estado" />
        <MenuItem
          icone={IconArrowsDownUp}
          texto="Comunicação"
          url="/revisao/comunicacao"
        />
        <MenuItem icone={IconNumbers} texto="Básico" url="/basico" />
      </div>
    </div>
  );
}
