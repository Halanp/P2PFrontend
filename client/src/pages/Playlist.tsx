import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { VideoCard } from '@/components/video/VideoCard';
import { videos } from '@/lib/mockData';
import { useAppStore } from '@/stores/useAppStore';
import { List, ArrowLeft, Trash2 } from 'lucide-react';
import { Link, useParams, useLocation } from 'wouter';

export default function Playlist() {
    const params = useParams();
    const [, setLocation] = useLocation();
    const { playlists, deletePlaylist } = useAppStore();

    const playlistId = params.id;
    const playlist = playlists.find(p => p.id === playlistId);

    // Using mock videos for demo
    const playlistVideos = [...videos].slice(0, playlist?.count || 8);

    const handleDelete = () => {
        if (playlist && confirm(`Delete playlist "${playlist.name}"?`)) {
            deletePlaylist(playlist.id);
            setLocation('/watch-later');
        }
    };

    if (!playlist) {
        return (
            <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground flex flex-col">
                <Header />
                <Sidebar />
                <main className="flex-1 w-full max-w-[1600px] mx-auto pt-[4.5rem] px-4 md:px-8 pb-12">
                    <div className="mt-20 text-center">
                        <h1 className="text-4xl font-black font-display uppercase mb-4">Playlist Not Found</h1>
                        <Link href="/watch-later">
                            <button className="neo-button bg-primary text-white border-black dark:border-white px-6 py-3 rounded-lg">
                                Back to Watch Later
                            </button>
                        </Link>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground flex flex-col">
            <Header />
            <Sidebar />

            <main className="flex-1 w-full max-w-[1600px] mx-auto pt-[4.5rem] px-4 md:px-8 pb-12">
                {/* Back Button */}
                <Link href="/watch-later">
                    <button className="mt-6 mb-4 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-mono text-sm">
                        <ArrowLeft size={16} />
                        Back to Watch Later
                    </button>
                </Link>

                {/* Page Header */}
                <div className="mt-2 mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-lg border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                                <List size={32} strokeWidth={2.5} className="text-white" />
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl font-black font-display uppercase leading-none tracking-tighter">
                                    {playlist.name}
                                </h1>
                                <p className="text-sm text-muted-foreground font-mono mt-1">
                                    {playlistVideos.length} videos
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={handleDelete}
                            className="neo-button bg-red-500 text-white border-black dark:border-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-red-600 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] font-bold uppercase tracking-wider text-sm"
                        >
                            <Trash2 size={20} strokeWidth={2.5} />
                            Delete Playlist
                        </button>
                    </div>
                </div>

                {/* Video Grid */}
                {playlistVideos.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-12">
                        {playlistVideos.map((video, idx) => (
                            <VideoCard key={`${video.id}-${idx}`} video={video} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-muted-foreground font-mono text-lg">
                            No videos in this playlist yet.
                        </p>
                    </div>
                )}
            </main>
        </div>
    );
}
