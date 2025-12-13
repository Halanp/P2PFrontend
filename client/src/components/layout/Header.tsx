import { useState } from 'react';
import { Menu, Search, Mic, Video, Bell, User, X } from 'lucide-react';
import { useAppStore } from '@/stores/useAppStore';
import { Link } from 'wouter';
import { currentUser } from '@/lib/mockData';

export function Header() {
  const { toggleSidebar, searchQuery, setSearchQuery, toggleTheme } = useAppStore();
  const [localSearch, setLocalSearch] = useState(searchQuery);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(localSearch);
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-background z-50 flex items-center justify-between px-4 border-b border-border">
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar}
          className="p-2 hover:bg-accent rounded-full text-foreground"
        >
          <Menu size={24} strokeWidth={1.5} />
        </button>
        <Link href="/" className="flex items-center gap-1">
          <div className="relative flex items-center justify-center w-8 h-6 bg-red-600 rounded-lg">
             <div className="w-0 h-0 border-t-[3px] border-t-transparent border-l-[6px] border-l-white border-b-[3px] border-b-transparent ml-0.5"></div>
          </div>
          <span className="text-xl font-bold tracking-tighter font-sans">YouTube</span>
        </Link>
      </div>

      <div className="hidden sm:flex items-center flex-1 max-w-[720px] mx-4">
        <form onSubmit={handleSearch} className="flex flex-1 items-center">
          <div className="flex flex-1 items-center relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full h-10 pl-4 pr-10 rounded-l-full bg-background border border-r-0 border-border focus:border-blue-500 focus:outline-none"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
            />
            {localSearch && (
              <button 
                type="button"
                onClick={() => setLocalSearch('')}
                className="absolute right-2 p-1 hover:bg-accent rounded-full"
              >
                <X size={16} />
              </button>
            )}
          </div>
          <button 
            type="submit"
            className="h-10 px-6 bg-secondary border border-l-0 border-border rounded-r-full hover:bg-accent flex items-center justify-center"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>
        </form>
        <button className="ml-4 p-2 bg-secondary hover:bg-accent rounded-full flex items-center justify-center">
          <Mic size={20} />
        </button>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <button 
          className="hidden sm:flex p-2 hover:bg-accent rounded-full"
          onClick={toggleTheme}
        >
          <Video size={24} strokeWidth={1.5} />
        </button>
        <button className="p-2 hover:bg-accent rounded-full relative">
          <Bell size={24} strokeWidth={1.5} />
          <span className="absolute top-1 right-1 w-4 h-4 bg-red-600 text-white text-[10px] flex items-center justify-center rounded-full border-2 border-background">
            9+
          </span>
        </button>
        <button className="ml-2 w-8 h-8 rounded-full overflow-hidden bg-accent">
          <img src={currentUser.avatarUrl} alt="User" className="w-full h-full object-cover" />
        </button>
      </div>
    </header>
  );
}
