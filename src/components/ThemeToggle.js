"use client";
import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Separator } from "./ui/separator";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex items-center gap-3">
      <DropdownMenu>
        <DropdownMenuTrigger
          asChild
          className="rounded-full hover:scale-[1.1] transition-transform"
        >
          <Button variant="outline" size="icon">
            {theme === "dark" ? (
              <Moon size={20} />
            ) : theme === "light" ? (
              <Sun size={20} />
            ) : (
              <Laptop size={20} />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="translate-y-3">
          <DropdownMenuLabel className="pl-2">Experimental</DropdownMenuLabel>
          <Separator />
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Tombol Top Up Sekarang */}
      <Button asChild variant="outline" size="lg">
         <Link href="https://www.nvdtopup.web.id"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 gap-2"
      >
        <Image
          src="/images/fire.gif"
          alt="Top Up Icon"
          width={20}
          height={20}
          className="h-5 w-5 object-contain"
        />
        Top Up <span className="hidden md:inline">Sekarang</span>
             </Link>
      </Button>
    </div>
  );
};

export default ThemeToggle;
