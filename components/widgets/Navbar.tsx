"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuTrigger
} from "../ui/navigation-menu";
import { NavbarMenu } from "@/lib/constants";
import React from "react";
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose, DrawerHeader } from "../ui/drawer";

const Navbar = () => {
  const isMobile = useIsMobile();

  return (
    <header className="w-full border-b bg-background/60 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 no-underline">
            <div className="h-8 w-8 rounded-md bg-linear-to-br from-purple-500 to-pink-500 shadow-sm" />
            <span className="text-lg font-semibold">MusicPlayer</span>
          </Link>
        </div>

        {/* Center: Navigation (hidden on very small screens) */}
        <nav className="flex-1">
          <NavigationMenu viewport={isMobile}>
            <NavigationMenuList className="flex items-center justify-center gap-2">
              {NavbarMenu.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className="rounded-md px-3 py-2 text-sm font-medium text-foreground/90 hover:bg-muted/30"
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}

              {/* Extra menu trigger for mobile to show a compact menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hidden md:inline-flex">More</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 p-2">
                    {NavbarMenu.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link href={item.href} className="block rounded-md px-3 py-2 text-sm">
                            {item.label}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Right: Search + Avatar */}
        <div className="flex items-center gap-3">
          <form className="hidden items-center gap-2 md:flex" onSubmit={(e) => e.preventDefault()}>
            <input
              aria-label="Search songs, artists, playlists"
              placeholder="Search music..."
              className="h-9 w-64 rounded-md border px-3 text-sm outline-none placeholder:text-muted-foreground/60"
            />
          </form>

          {/* Avatar placeholder */}
          <div className="flex items-center gap-2">
            <Link href="/profile" className="inline-flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-muted/30" />
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile: Hamburger button and Drawer from UI kit */}
      <div className="md:hidden">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between py-2">
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <button
                  aria-label="Open menu"
                  className="inline-flex items-center justify-center rounded-md p-2 text-foreground/90"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </DrawerTrigger>

              <DrawerContent>
                <DrawerHeader>
                  <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-md bg-linear-to-br from-purple-500 to-pink-500" />
                      <span className="font-semibold">MusicPlayer</span>
                    </Link>
                    <DrawerClose asChild>
                      <button aria-label="Close menu" className="p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </DrawerClose>
                  </div>
                </DrawerHeader>

                <div className="p-4">
                  <ul className="flex flex-col gap-2">
                    {NavbarMenu.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="block rounded-md px-3 py-2 text-base font-medium">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;