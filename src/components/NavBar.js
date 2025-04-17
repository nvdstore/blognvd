"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import dynamic from "next/dynamic"
import UserDropdown from "./AdminComponents/UserDropdown"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const ThemeToggle = dynamic(() => import("./ThemeToggle"), { ssr: false })

const useScrollDirection = () => {
  const [scrollDir, setScrollDir] = useState("up")

  useEffect(() => {
    let lastScrollY = window.scrollY

    const updateScrollDir = () => {
      const scrollY = window.scrollY
      setScrollDir(scrollY > lastScrollY ? "down" : "up")
      lastScrollY = scrollY > 0 ? scrollY : 0
    }

    window.addEventListener("scroll", updateScrollDir)
    return () => window.removeEventListener("scroll", updateScrollDir)
  }, [])

  return scrollDir
}

const NavBar = ({ className }) => {
  const { data: session } = useSession()
  const scrollDirection = useScrollDirection()

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: scrollDirection === "down" ? -80 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-background shadow-sm",
        className
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="flex items-center gap-[3px] text-base font-semibold sm:text-2xl">
            <Image
              src="/images/logonvd.gif"
              width={30}
              height={30}
              alt="Logo"
              className="w-[25px] sm:w-[30px] dark:invert dark:contrast-200 dark:brightness-125"
            />
            <span>NVDSTORE</span>
          </Link>

          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className=" mx-4 hover:border-current transition-all py-2 border-b-2 border-transparent">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/blogs" legacyBehavior passHref>
                    <NavigationMenuLink className=" mx-4 hover:border-current transition-all py-2 border-b-2 border-transparent">
                      Artikel
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className=" mx-4 hover:border-current transition-all py-2 border-b-2 border-transparent">
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

                 <a
    href="https://www.takapedia.com?utm_source=news&utm_campaign=redirect-button"
    target="_blank"
    rel="noopener noreferrer"
    className="md:flex flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 gap-2"
  >
    <Image
      src="/_next/static/media/fire.3dc720a7.gif"
      alt="Top Up Icon"
      width={20}
      height={20}
      className="h-5 w-5 object-contain"
    />
    Top Up <span className="hidden md:inline">Sekarang</span>
  </a>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            {session?.user?.isAdmin && <UserDropdown />}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="backdrop-blur-md bg-transparent border-none text-white">
                <SheetHeader>
                  <SheetTitle className="text-white">NVDSTORE NEWS</SheetTitle>
                  <SheetDescription>Portal Berita Game Terdepan di Indonesia</SheetDescription>
                </SheetHeader>
                <div className="py-4">
                  <nav className="flex flex-col space-y-4">
                    <Link href="/blogs" className="text-sm font-medium hover:underline">
                      Home
                    </Link>
                    <Link href="/blogs" className="text-sm font-medium hover:underline">
                      Artikel
                    </Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default NavBar
