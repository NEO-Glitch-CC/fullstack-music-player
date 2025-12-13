import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/widgets/AppSidebar";
import StudioNavbar from "@/components/widgets/StudioNavbar";
import { MusicPlayer } from "@/components/MusicPlayer";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="min-h-screen w-full">
        <StudioNavbar />
        <div className="pb-24">
          {children}
        </div>
      </main>
      <MusicPlayer />
    </SidebarProvider>
  );
}

export default layout;