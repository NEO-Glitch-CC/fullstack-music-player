"use client";

import { Search, User2, LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { SidebarTrigger } from "../ui/sidebar";
import { useAuthStore } from "@/lib/stores/auth-store";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const StudioNavbar = () => {
  const { user, logout } = useAuthStore();
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    logout();
    router.push("/sign-in");
  };

  return (
    <div className="w-full p-2 flex items-center justify-between border-b border-b-neutral-200">
      <div className="flex items-center justify-start gap-2">
        <SidebarTrigger variant={'outline'} size={'lg'} />
        <div className="w-px mx-2 h-10 bg-neutral-200" />
        <div className="flex items-center justify-start">
          <span className="text-md space-x-2 font-regular text-neutral-500">
            <span>MENU</span>
            <span>/</span>
            <span className="text-neutral-800 font-medium">Studio</span>
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="hidden sm:flex">
          <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-center gap-2">
              <input
                aria-label="Search songs, artists, playlists"
                placeholder="Search music..."
                className="h-10 w-100 border px-3 text-sm outline-none placeholder:text-muted-foreground/60"
              />
              <Button
                variant={'outline'}
                size={'icon-lg'}
              >
                <Search className="w-7 h-7 text-neutral-600" />
              </Button>
            </div>
          </form>
        </div>
        <div className="sm:hidden">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant={'outline'} size={'icon-lg'}>
                <Search className="w-7 h-7 text-neutral-800" />
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
                    className="h-9 w-full   border px-3 text-sm outline-none placeholder:text-muted-foreground/60"
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
        </div>
        <div className="w-px mx-2 h-10 bg-neutral-200" />
        <Popover>
          <PopoverTrigger asChild>
            <Button variant={'outline'} size={'icon-lg'}>
              <User2 className="w-7 h-7 text-neutral-800" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-48">
            <div className="space-y-2">
              <div className="px-2 py-1">
                <p className="text-sm font-medium">{user?.fullName || user?.email}</p>
                <p className="text-xs text-muted-foreground">{user?.email}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="w-full justify-start"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

export default StudioNavbar;