import { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { useAppStore } from '@/stores/useAppStore';
import { Plus } from 'lucide-react';

interface CreatePlaylistDialogProps {
    children?: React.ReactNode;
}

export function CreatePlaylistDialog({ children }: CreatePlaylistDialogProps) {
    const [open, setOpen] = useState(false);
    const [playlistName, setPlaylistName] = useState('');
    const addPlaylist = useAppStore((state) => state.addPlaylist);

    const handleCreate = () => {
        if (playlistName.trim()) {
            addPlaylist(playlistName.trim());
            setPlaylistName('');
            setOpen(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleCreate();
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children || (
                    <button className="neo-button bg-primary text-white border-black dark:border-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] font-bold uppercase tracking-wider text-sm">
                        <Plus size={20} strokeWidth={2.5} />
                        Create Playlist
                    </button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-md border-2 border-black dark:border-white bg-background shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-black uppercase font-display tracking-tight">
                        Create New Playlist
                    </DialogTitle>
                    <DialogDescription className="font-mono text-sm">
                        Enter a name for your new playlist.
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                    <input
                        type="text"
                        placeholder="Playlist name..."
                        value={playlistName}
                        onChange={(e) => setPlaylistName(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="neo-input w-full h-12 px-4 rounded-lg font-mono"
                        autoFocus
                    />
                </div>
                <DialogFooter className="gap-2 sm:gap-0">
                    <button
                        onClick={() => {
                            setPlaylistName('');
                            setOpen(false);
                        }}
                        className="neo-button bg-background border-black dark:border-white px-6 py-2 rounded-lg hover:bg-muted transition-all font-bold uppercase tracking-wider text-sm"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleCreate}
                        disabled={!playlistName.trim()}
                        className="neo-button bg-primary text-white border-black dark:border-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] font-bold uppercase tracking-wider text-sm"
                    >
                        Create
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
