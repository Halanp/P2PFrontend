import { useState } from 'react';
import { Menu, Search, Video, Bell, User, X, Sparkles, Settings, LogOut, RefreshCw } from 'lucide-react';
import { useAppStore } from '@/stores/useAppStore';
import { Link } from 'wouter';
import { currentUser } from '@/lib/mockData';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const mockNotifications = [
  {
    id: 1,
    type: 'video',
    channel: 'Tech Hunters',
    avatar: 'https://images.unsplash.com/photo-1531297461136-8204b255658b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    message: 'uploaded a new video: Top 10 Gadgets of 2025',
    time: '2 hours ago',
    thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    unread: true,
  },
  {
    id: 2,
    type: 'like',
    channel: 'Code Daily',
    avatar: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    message: 'liked your comment on "Building a YouTube Clone"',
    time: '5 hours ago',
    unread: true,
  },
  {
    id: 3,
    type: 'comment',
    channel: 'Music Vibe',
    avatar: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    message: 'replied to your comment: "Great playlist!"',
    time: '1 day ago',
    unread: true,
  },
  {
    id: 4,
    type: 'video',
    channel: 'Nature Life',
    avatar: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    message: 'uploaded: Amazing Mountain Views 4K',
    time: '2 days ago',
    unread: false,
  },
];

export function Header() {
  const { toggleSidebar, searchQuery, setSearchQuery, toggleTheme } = useAppStore();
  const [localSearch, setLocalSearch] = useState(searchQuery);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(localSearch);
  };

  const unreadCount = mockNotifications.filter(n => n.unread).length;

  return (
    <header className="fixed top-0 left-0 right-0 h-18 bg-background z-50 flex items-center justify-between px-6 border-b-2 border-black dark:border-white">
      <div className="flex items-center gap-6">
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-accent rounded-md border-2 border-transparent hover:border-black dark:hover:border-white transition-all"
        >
          <Menu size={24} strokeWidth={2.5} />
        </button>
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-10 h-10 bg-primary border-2 border-black dark:border-white rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] group-hover:translate-x-[1px] group-hover:translate-y-[1px] group-hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
            <Sparkles className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-black tracking-tighter font-display uppercase italic">Peer<span className="text-primary">Flix</span></span>
        </Link>
      </div>

      <div className="hidden md:flex items-center flex-1 max-w-[600px] mx-8">
        <form onSubmit={handleSearch} className="flex flex-1 items-center relative group">
          <input
            type="text"
            placeholder="FIND SOMETHING RAD..."
            className="neo-input h-12 rounded-none rounded-l-lg border-r-0 font-mono text-sm placeholder:text-muted-foreground/70"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
          />
          {localSearch && (
            <button
              type="button"
              onClick={() => setLocalSearch('')}
              className="absolute right-16 p-1 hover:bg-muted rounded-full"
            >
              <X size={16} />
            </button>
          )}
          <button
            type="submit"
            className="h-12 px-6 bg-primary text-white border-2 border-black dark:border-white border-l-2 rounded-r-lg hover:bg-primary/90 flex items-center justify-center transition-colors font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] group-hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-active:translate-x-[2px] group-active:translate-y-[2px] group-active:shadow-none"
          >
            <Search size={20} strokeWidth={3} className="mr-2" />
          </button>
        </form>
      </div>

      <div className="flex items-center gap-4">
        <button
          className="hidden sm:flex p-2 neo-button bg-white dark:bg-black text-foreground hover:bg-muted aspect-square items-center justify-center rounded-full"
          onClick={toggleTheme}
        >
          <div className="w-4 h-4 rounded-full bg-current" />
        </button>

        {/* Notifications Popover */}
        <Popover open={notificationsOpen} onOpenChange={setNotificationsOpen}>
          <PopoverTrigger asChild>
            <button className="neo-button p-0 w-10 h-10 flex items-center justify-center rounded-full bg-secondary text-white relative">
              <Bell size={20} strokeWidth={2.5} />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-black text-[10px] font-bold flex items-center justify-center rounded-sm border border-black">
                  {unreadCount}
                </span>
              )}
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-96 p-0 border-2 border-black dark:border-white bg-background shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]" align="end">
            <div className="p-4 border-b-2 border-black dark:border-white">
              <h3 className="font-black uppercase text-lg font-display tracking-tight">Notifications</h3>
            </div>
            <div className="max-h-[500px] overflow-y-auto">
              {mockNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 border-b border-black/10 dark:border-white/10 hover:bg-accent/20 transition-colors cursor-pointer ${notification.unread ? 'bg-accent/10' : ''
                    }`}
                >
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-md border-2 border-black dark:border-white overflow-hidden flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                      <img src={notification.avatar} alt={notification.channel} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm leading-tight mb-1">
                        <span className="font-bold">{notification.channel}</span>{' '}
                        <span className="text-muted-foreground">{notification.message}</span>
                      </p>
                      <p className="text-xs text-muted-foreground font-mono">{notification.time}</p>
                    </div>
                    {notification.thumbnail && (
                      <div className="w-16 h-16 rounded-md border border-black/20 dark:border-white/20 overflow-hidden flex-shrink-0">
                        <img src={notification.thumbnail} alt="" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 border-t-2 border-black dark:border-white text-center">
              <button className="text-sm font-bold uppercase tracking-wide hover:text-primary transition-colors">
                View All Notifications
              </button>
            </div>
          </PopoverContent>
        </Popover>

        {/* User Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="w-10 h-10 rounded-lg overflow-hidden border-2 border-black dark:border-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all">
              <img src={currentUser.avatarUrl} alt="User" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 border-2 border-black dark:border-white bg-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]" align="end">
            <div className="px-3 py-3 border-b-2 border-black/10 dark:border-white/10">
              <p className="font-bold text-sm">{currentUser.name}</p>
              <p className="text-xs text-muted-foreground font-mono">{currentUser.email}</p>
            </div>
            <Link href="/profile">
              <DropdownMenuItem className="cursor-pointer font-bold uppercase text-sm tracking-wide">
                <User size={16} strokeWidth={2.5} className="mr-2" />
                Profile
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem className="cursor-pointer font-bold uppercase text-sm tracking-wide">
              <Settings size={16} strokeWidth={2.5} className="mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer font-bold uppercase text-sm tracking-wide">
              <RefreshCw size={16} strokeWidth={2.5} className="mr-2" />
              Switch Account
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-black/10 dark:bg-white/10" />
            <DropdownMenuItem className="cursor-pointer font-bold uppercase text-sm tracking-wide text-red-600 dark:text-red-400">
              <LogOut size={16} strokeWidth={2.5} className="mr-2" />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
