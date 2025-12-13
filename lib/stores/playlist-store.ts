import { create } from 'zustand';

interface Playlist {
  id: string;
  name: string;
  userId: string;
  createdAt: Date;
  songs?: Song[];
}

interface Song {
  id: string;
  title: string;
  artist: string;
  audioUrl: string;
  duration: number;
  coverUrl?: string;
}

interface PlaylistState {
  playlists: Playlist[];
  currentPlaylist: Playlist | null;
  setPlaylists: (playlists: Playlist[]) => void;
  addPlaylist: (playlist: Playlist) => void;
  removePlaylist: (id: string) => void;
  setCurrentPlaylist: (playlist: Playlist | null) => void;
  addSongToPlaylist: (playlistId: string, song: Song) => void;
  removeSongFromPlaylist: (playlistId: string, songId: string) => void;
}

export const usePlaylistStore = create<PlaylistState>((set) => ({
  playlists: [],
  currentPlaylist: null,
  setPlaylists: (playlists) => set({ playlists }),
  addPlaylist: (playlist) => set((state) => ({ playlists: [...state.playlists, playlist] })),
  removePlaylist: (id) => set((state) => ({
    playlists: state.playlists.filter(p => p.id !== id)
  })),
  setCurrentPlaylist: (playlist) => set({ currentPlaylist: playlist }),
  addSongToPlaylist: (playlistId, song) => set((state) => ({
    playlists: state.playlists.map(p =>
      p.id === playlistId
        ? { ...p, songs: [...(p.songs || []), song] }
        : p
    )
  })),
  removeSongFromPlaylist: (playlistId, songId) => set((state) => ({
    playlists: state.playlists.map(p =>
      p.id === playlistId
        ? { ...p, songs: (p.songs || []).filter(s => s.id !== songId) }
        : p
    )
  })),
}));