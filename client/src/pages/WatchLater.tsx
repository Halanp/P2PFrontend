import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { VideoCard } from '@/components/video/VideoCard';
import { CreatePlaylistDialog } from '@/components/CreatePlaylistDialog';
import { videos } from '@/lib/mockData';
import { useAppStore } from '@/stores/useAppStore';
import { Clock, List, Trash2 } from 'lucide-react';
import { Link } from 'wouter';

export default function WatchLater() {
    // Using videos as saved/watch later for demo
    const watchLaterVideos = [...videos];
    const { playlists, deletePlaylist } = useAppStore();

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground flex flex-col">
            <Header />
            <Sidebar />

            <main className="flex-1 w-full max-w-[1600px] mx-auto pt-[4.5rem] px-4 md:px-8 pb-12">
                {/* Page Header */}
                <div className="mt-6 mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-secondary rounded-lg border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                                <Clock size={32} strokeWidth={2.5} className="text-white" />
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl font-black font-display uppercase leading-none tracking-tighter">
                                    Watch Later
                                </h1>
                                <p className="text-sm text-muted-foreground font-mono mt-1">
                                    {watchLaterVideos.length} videos saved
                                </p>
                            </div>
                        </div>
                        <CreatePlaylistDialog />
                    </div>
                </div>

                {/* Playlists Section */}
                {playlists.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-2xl font-black uppercase font-display tracking-tight mb-6 flex items-center gap-2">
                            <List size={24} strokeWidth={2.5} />
                            Your Playlists
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {playlists.map((playlist) => (
                                <div
                                    key={playlist.id}
                                    className="group relative p-6 rounded-xl border-2 border-black dark:border-white bg-gradient-to-br from-accent to-muted hover:from-primary hover:to-secondary text-foreground hover:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all cursor-pointer"
                                >
                                    <Link href={`/playlist/${playlist.id}`}>
                                        <div className="mb-3">
                                            <div className="w-12 h-12 bg-black/10 dark:bg-white/10 rounded-lg flex items-center justify-center mb-3 border border-black/20 dark:border-white/20">
                                                <List size={24} strokeWidth={2.5} />
                                            </div>
                                            <h3 className="text-xl font-black uppercase font-display tracking-tight mb-1">
                                                {playlist.name}
                                            </h3>
                                            <p className="text-sm opacity-70 font-mono">
                                                {playlist.count} videos
                                            </p>
                                        </div>
                                    </Link>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (confirm(`Delete playlist "${playlist.name}"?`)) {
                                                deletePlaylist(playlist.id);
                                            }
                                        }}
                                        className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-lg border-2 border-black dark:border-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                                    >
                                        <Trash2 size={16} strokeWidth={2.5} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Saved Videos Section */}
                <div className="mb-6">
                    <h2 className="text-2xl font-black uppercase font-display tracking-tight mb-6">
                        Saved Videos
                    </h2>
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-12">
                    {watchLaterVideos.map((video, idx) => (
                        <VideoCard key={`${video.id}-${idx}`} video={video} />
                    ))}
                </div>
            </main>
        </div>
    );
}
