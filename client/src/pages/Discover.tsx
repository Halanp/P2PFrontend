import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { VideoCard } from '@/components/video/VideoCard';
import { shortsVideos } from '@/lib/mockData';
import { Sparkles, TrendingUp } from 'lucide-react';

export default function Discover() {
    // Duplicate videos for demo purposes
    const displayVideos = [...shortsVideos, ...shortsVideos];

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground flex flex-col">
            <Header />
            <Sidebar />

            <main className="flex-1 w-full max-w-[1600px] mx-auto pt-[4.5rem] px-4 md:px-8 pb-12">

                {/* Hero Section */}
                <div className="mt-6 mb-12 rounded-xl border-2 border-black dark:border-white bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-8 md:p-12 text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
                    <div className="relative z-10 max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/20">
                            <Sparkles size={12} />
                            Discover Shorts
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black font-display uppercase leading-none mb-6 tracking-tighter">
                            Quick Hits<br />Big Impact
                        </h1>
                        <p className="text-xl opacity-90 font-mono mb-8 max-w-lg">
                            Bite-sized content that packs a punch. Discover trending shorts from creators worldwide.
                        </p>
                        <div className="flex gap-4 items-center">
                            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                                <TrendingUp size={16} />
                                <span className="text-sm font-bold">Trending Now</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Page Title */}
                <div className="mb-8">
                    <h2 className="text-3xl font-black uppercase font-display tracking-tighter mb-2">
                        Discover Videos
                    </h2>
                    <p className="text-muted-foreground font-mono text-sm">
                        Explore trending content from creators worldwide
                    </p>
                </div>

                {/* Video Grid - Regular Video Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-12">
                    {displayVideos.map((video, idx) => (
                        <VideoCard key={`${video.id}-${idx}`} video={video} />
                    ))}
                </div>
            </main>
        </div>
    );
}
