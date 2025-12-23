'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/lib/stores/auth-store";
import { createClient } from "@/lib/utils/supabase/supabase.client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


export default function StudioNavbar() {
  const { user, clearAuth } = useAuthStore();
  const router = useRouter();
  const supabase = createClient();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Failed to sign out");
      return;
    }

    clearAuth();
    router.push('/sign-in');
    toast.success("Signed out successfully");
  }

  return (
    <header className="fixed top-0 z-5 w-full bg-white/20 backdrop-blur-xs inset-x-0 flex items-center justify-between p-4 border-b border-accent">
      <div />
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 cursor-pointer">
        <Avatar className="">
          <AvatarImage src={user?.avatarUrl} />
          <AvatarFallback>{user?.email?.[0].toUpperCase()}</AvatarFallback>
        </Avatar>
        <span className="text-white text-md font-medium">{user?.fullName}</span>
        </div>
        {/* <Button onClick={handleSignOut} variant='outline'>Sign Out</Button> */}
      </div>
    </header>
  )
}