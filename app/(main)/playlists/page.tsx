"use client";

import { PlaylistManager } from "@/components/PlaylistManager";

export default function PlaylistsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Playlists</h1>
        <p className="text-muted-foreground">Create and manage your music playlists</p>
      </div>

      <PlaylistManager />
    </div>
  );
}