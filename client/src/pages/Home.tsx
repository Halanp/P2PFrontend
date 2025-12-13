import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { VideoCard } from '@/components/video/VideoCard';
import { useAppStore } from '@/stores/useAppStore';
import { videos, categories } from '@/lib/mockData';
import { cn } from '@/lib/utils';

export default function Home() {
  const { sidebarOpen, activeCategory, setActiveCategory } = useAppStore();

  const filteredVideos = activeCategory === 'All' 
    ? videos 
    : videos.filter(v => v.categoryId === activeCategory);

  // Duplicate videos to fill the grid for demo
  const displayVideos = [...filteredVideos, ...filteredVideos, ...filteredVideos];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <Sidebar />
      
      <main className={cn(
        "pt-14 transition-all duration-300",
        sidebarOpen ? "md:pl-60" : "pl-0"
      )}>
        {/* Categories Bar */}
        <div className="sticky top-14 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full overflow-x-auto pb-3 pt-3 px-4 flex items-center gap-3 no-scrollbar border-b border-border/40">
           {categories.map((category) => (
             <button
               key={category}
               onClick={() => setActiveCategory(category)}
               className={cn(
                 "px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors",
                 activeCategory === category 
                   ? "bg-foreground text-background" 
                   : "bg-secondary hover:bg-accent text-foreground"
               )}
             >
               {category}
             </button>
           ))}
        </div>

        {/* Video Grid */}
        <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-8">
          {displayVideos.map((video, idx) => (
            <VideoCard key={`${video.id}-${idx}`} video={video} />
          ))}
        </div>
      </main>
    </div>
  );
}
