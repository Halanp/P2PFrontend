import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { VideoCard } from '@/components/video/VideoCard';
import { videos } from '@/lib/mockData';
import { Download } from 'lucide-react';

export default function Downloads() {
    // Using videos as downloaded videos for demo
    const downloadedVideos = [...videos];

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground flex flex-col">
            <Header />
            <Sidebar />

            <main className="flex-1 w-full max-w-[1600px] mx-auto pt-[4.5rem] px-4 md:px-8 pb-12">
                {/* Page Header */}
                <div className="mt-6 mb-8">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-green-500 rounded-lg border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                            <Download size={32} strokeWidth={2.5} className="text-white" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-black font-display uppercase leading-none tracking-tighter">
                                Downloads
                            </h1>
                            <p className="text-sm text-muted-foreground font-mono mt-1">
                                {downloadedVideos.length} videos downloaded
                            </p>
                        </div>
                    </div>
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-12">
                    {downloadedVideos.map((video, idx) => (
                        <VideoCard key={`${video.id}-${idx}`} video={video} />
                    ))}
                </div>
            </main>
        </div>
    );
}
