import { Home, Compass, PlaySquare, Clock, ThumbsUp, History, Flame, Music2, Gamepad2, Trophy, Settings, HelpCircle, Flag } from 'lucide-react';
import { useAppStore } from '@/stores/useAppStore';
import { Link, useLocation } from 'wouter';
import { cn } from '@/lib/utils';
import { playlists } from '@/lib/mockData';

const mainLinks = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Compass, label: "Shorts", href: "/shorts" },
  { icon: PlaySquare, label: "Subscriptions", href: "/subscriptions" },
];

const libraryLinks = [
  { icon: History, label: "History", href: "/history" },
  { icon: Clock, label: "Watch Later", href: "/playlist?list=WL" },
  { icon: ThumbsUp, label: "Liked Videos", href: "/playlist?list=LL" },
];

const exploreLinks = [
  { icon: Flame, label: "Trending", href: "/trending" },
  { icon: Music2, label: "Music", href: "/channel/music" },
  { icon: Gamepad2, label: "Gaming", href: "/channel/gaming" },
  { icon: Trophy, label: "Sports", href: "/channel/sports" },
];

export function Sidebar() {
  const { sidebarOpen, toggleSidebar } = useAppStore();
  const [location] = useLocation();

  const SidebarItem = ({ icon: Icon, label, href, isActive }: { icon: any, label: string, href: string, isActive?: boolean }) => (
    <Link href={href} className={cn(
      "flex items-center gap-5 px-3 py-2 rounded-lg hover:bg-accent transition-colors text-sm font-medium",
      isActive ? "bg-accent font-semibold" : "text-foreground"
    )}>
      <Icon size={24} strokeWidth={isActive ? 2.5 : 1.5} />
      <span className="truncate">{label}</span>
    </Link>
  );

  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={toggleSidebar}
        />
      )}

      <aside className={cn(
        "fixed left-0 top-14 bottom-0 w-60 bg-background overflow-y-auto hover:overflow-y-scroll z-50 pb-4 border-r border-border transition-transform duration-300 ease-in-out",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-3 space-y-1 border-b border-border/50 pb-3">
          {mainLinks.map((link) => (
            <SidebarItem 
              key={link.label} 
              {...link} 
              isActive={location === link.href} 
            />
          ))}
        </div>

        <div className="p-3 space-y-1 border-b border-border/50 pb-3">
          <h3 className="px-3 py-2 text-base font-bold">You</h3>
          {libraryLinks.map((link) => (
            <SidebarItem key={link.label} {...link} isActive={location === link.href} />
          ))}
          {playlists.map((playlist) => (
            <Link key={playlist.id} href={`/playlist/${playlist.id}`} className="flex items-center gap-5 px-3 py-2 rounded-lg hover:bg-accent transition-colors text-sm font-medium">
              <div className="w-6 flex justify-center text-xs text-muted-foreground">PL</div>
              <span className="truncate">{playlist.name}</span>
            </Link>
          ))}
        </div>

        <div className="p-3 space-y-1 border-b border-border/50 pb-3">
          <h3 className="px-3 py-2 text-base font-bold">Explore</h3>
          {exploreLinks.map((link) => (
            <SidebarItem key={link.label} {...link} isActive={location === link.href} />
          ))}
        </div>

        <div className="p-3 space-y-1">
          <SidebarItem icon={Settings} label="Settings" href="/settings" />
          <SidebarItem icon={Flag} label="Report history" href="/report" />
          <SidebarItem icon={HelpCircle} label="Help" href="/help" />
        </div>
        
        <div className="px-6 py-4 text-xs text-muted-foreground font-semibold space-y-2">
          <p>About Press Copyright Contact us Creators Advertise Developers</p>
          <p>Terms Privacy Policy & Safety How YouTube works Test new features</p>
          <p className="font-normal text-[10px] mt-2">© 2025 Google LLC</p>
        </div>
      </aside>
    </>
  );
}
