import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { VideoCard } from '@/components/video/VideoCard';
import { liveVideos } from '@/lib/mockData';
import { Radio, Users, Eye } from 'lucide-react';

export default function Live() {
    // Duplicate videos for demo purposes
    const displayVideos = [...liveVideos, ...liveVideos];

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground flex flex-col">
            <Header />
            <Sidebar />

            <main className="flex-1 w-full max-w-[1600px] mx-auto pt-[4.5rem] px-4 md:px-8 pb-12">

                {/* Live Hero Section */}
                <div className="mt-6 mb-12 rounded-xl border-2 border-black dark:border-white bg-gradient-to-br from-red-500 via-rose-500 to-pink-600 p-8 md:p-12 text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] relative overflow-hidden">
                    {/* Animated pulse effect */}
                    <div className="absolute top-4 right-4">
                        <div className="relative">
                            <div className="w-4 h-4 bg-white rounded-full animate-ping opacity-75"></div>
                            <div className="w-4 h-4 bg-white rounded-full absolute top-0 left-0"></div>
                        </div>
                    </div>

                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="relative z-10 max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/20 animate-pulse">
                            <Radio size={12} className="text-red-400" />
                            Live Now
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black font-display uppercase leading-none mb-6 tracking-tighter">
                            Watch it<br />Happen Live
                        </h1>
                        <p className="text-xl opacity-90 font-mono mb-8 max-w-lg">
                            Join thousands of viewers watching live streams from creators around the world. Experience content as it happens.
                        </p>
                        <div className="flex gap-4 items-center flex-wrap">
                            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                                <Users size={16} />
                                <span className="text-sm font-bold">120K+ Watching</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                                <Eye size={16} />
                                <span className="text-sm font-bold">{liveVideos.length} Streams</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Page Title */}
                <div className="mb-8">
                    <h2 className="text-3xl font-black uppercase font-display tracking-tighter mb-2 flex items-center gap-3">
                        <Radio className="text-red-500" size={32} />
                        Live Streams
                    </h2>
                    <p className="text-muted-foreground font-mono text-sm">
                        Currently broadcasting now
                    </p>
                </div>

                {/* Live Videos Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-12">
                    {displayVideos.map((video, idx) => (
                        <div key={`${video.id}-${idx}`} className="group">
                            {/* Video Thumbnail with LIVE badge */}
                            <div className="relative aspect-video rounded-lg border-2 border-black dark:border-white overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200 cursor-pointer mb-3">
                                <img
                                    src={video.thumbnailUrl}
                                    alt={video.title}
                                    className="w-full h-full object-cover"
                                />
                                {/* LIVE Badge */}
                                <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded-md text-xs font-black uppercase tracking-wider border-2 border-white shadow-lg flex items-center gap-1.5 animate-pulse">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    LIVE
                                </div>
                                {/* Viewer Count */}
                                <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-bold border border-white/30 flex items-center gap-1">
                                    <Eye size={12} />
                                    {video.viewers}
                                </div>
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                            </div>

                            {/* Video Info */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-base line-clamp-2 group-hover:text-primary transition-colors">
                                    {video.title}
                                </h3>

                                <div className="flex items-start gap-3">
                                    <img
                                        src={video.channel.avatarUrl}
                                        alt={video.channel.name}
                                        className="w-9 h-9 rounded-full border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-semibold truncate flex items-center gap-1">
                                            {video.channel.name}
                                            {video.channel.verified && (
                                                <span className="text-primary">✓</span>
                                            )}
                                        </p>
                                        <p className="text-xs text-muted-foreground font-mono">
                                            {video.views}
                                        </p>
                                    </div>
                                </div>

                                {/* Category Badge */}
                                <div className="inline-flex items-center px-2 py-1 bg-secondary border border-border rounded text-xs font-bold uppercase tracking-wide">
                                    {video.categoryId}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
