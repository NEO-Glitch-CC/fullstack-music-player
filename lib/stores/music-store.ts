import { create } from 'zustand';

interface Song {
  id: string;
  title: string;
  artist: string;
  audioUrl: string;
  duration: number;
  coverUrl?: string;
  uploadedBy?: string;
  createdAt: Date;
}

interface MusicState {
  songs: Song[];
  currentSong: Song | null;
  isPlaying: boolean;
  volume: number;
  currentTime: number;
  setSongs: (songs: Song[]) => void;
  addSong: (song: Song) => void;
  removeSong: (id: string) => void;
  setCurrentSong: (song: Song | null) => void;
  setIsPlaying: (playing: boolean) => void;
  setVolume: (volume: number) => void;
  setCurrentTime: (time: number) => void;
}

export const useMusicStore = create<MusicState>((set) => ({
  songs: [],
  currentSong: null,
  isPlaying: false,
  volume: 1,
  currentTime: 0,
  setSongs: (songs) => set({ songs }),
  addSong: (song) => set((state) => ({ songs: [...state.songs, song] })),
  removeSong: (id) => set((state) => ({
    songs: state.songs.filter(song => song.id !== id)
  })),
  setCurrentSong: (song) => set({ currentSong: song }),
  setIsPlaying: (playing) => set({ isPlaying: playing }),
  setVolume: (volume) => set({ volume }),
  setCurrentTime: (time) => set({ currentTime: time }),
}));