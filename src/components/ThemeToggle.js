"use client";
import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
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
      <a
        href="https://www.nvdtopup.web.id?utm_source=news&utm_campaign=redirect-button"
        target="_blank"
        rel="noopener noreferrer"
        className="md:flex flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-2"
      >
        <Image
          src="/images/fire.gif"
          alt="Top Up Icon"
          width={20}
          height={20}
          className="h-5 w-5 object-contain"
        />
        Top Up <span className="hidden md:inline">Sekarang</span>
      </a>
    </div>
  );
};

export default ThemeToggle;
