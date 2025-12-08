"use client";

import { Search, User2 } from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { SidebarTrigger } from "../ui/sidebar";
import Link from "next/link";

const StudioNavbar = () => {
  return (
    <div className="w-full p-2 flex items-center justify-between border-b border-b-accent">
      <SidebarTrigger variant={'outline'} size={'icon-sm'} />
      <div className="flex items-center gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant={'outline'} size={'icon-sm'}>
              <Search className="w-5 h-5 text-neutral-800" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="min-w-sm me-2">
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <div className="">
                <h3 className="text-lg font-medium text-neutrl-800">Search</h3>
                <p className="text-sm text-neutral-600">Search something you want to see or listen.</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  aria-label="Search songs, artists, playlists"
                  placeholder="Search music..."
                  className="h-9 w-full rounded-md border px-3 text-sm outline-none placeholder:text-muted-foreground/60"
                />
                <Button
                  variant={'outline'}
                  className=""
                >
                  <Search className="w-6 h-6 text-neutral-600" />
                </Button>
              </div>
            </form>
          </PopoverContent>
        </Popover>
        <Link href={"/"}>
          <Button variant={'outline'} size={'icon-sm'}>
            <User2 className="w-5 h-5 text-neutral-800"/>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default StudioNavbar;