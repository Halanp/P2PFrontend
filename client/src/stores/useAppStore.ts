import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { playlists as initialPlaylists } from '@/lib/mockData';
import { PlaylistItem } from '@/lib/types';

interface AppState {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  playlists: PlaylistItem[];
  addPlaylist: (name: string) => void;
  deletePlaylist: (id: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      sidebarOpen: false, // Default to closed (no dashboard feel)
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      closeSidebar: () => set({ sidebarOpen: false }),
      searchQuery: '',
      setSearchQuery: (query) => set({ searchQuery: query }),
      activeCategory: 'All',
      setActiveCategory: (category) => set({ activeCategory: category }),
      theme: 'dark',
      toggleTheme: () => set((state) => {
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        if (newTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        return { theme: newTheme };
      }),
      playlists: initialPlaylists,
      addPlaylist: (name) => set((state) => ({
        playlists: [
          ...state.playlists,
          {
            id: `p${Date.now()}`,
            name,
            count: 0,
          }
        ]
      })),
      deletePlaylist: (id) => set((state) => ({
        playlists: state.playlists.filter(p => p.id !== id)
      })),
    }),
    {
      name: 'yt-clone-storage',
      partialize: (state) => ({ theme: state.theme }),
    }
  )
);
