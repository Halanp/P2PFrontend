import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { Upload as UploadIcon, Radio, Video, Image as ImageIcon, Tag, Globe, Lock, Eye, Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Upload() {
    const [activeTab, setActiveTab] = useState<'video' | 'live'>('video');
    const [videoFile, setVideoFile] = useState<File | null>(null);
    const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
    const [dragActive, setDragActive] = useState(false);
    const [streamKeyCopied, setStreamKeyCopied] = useState(false);

    // Mock stream credentials
    const streamKey = "live_sk_a1b2c3d4e5f6g7h8i9j0";
    const rtmpUrl = "rtmp://live.streampunk.io/live";

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setVideoFile(e.dataTransfer.files[0]);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setVideoFile(e.target.files[0]);
        }
    };

    const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setThumbnailFile(e.target.files[0]);
        }
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setStreamKeyCopied(true);
        setTimeout(() => setStreamKeyCopied(false), 2000);
    };

    const handlePublish = () => {
        // Mock publish action
        alert('Video published successfully! (This is a demo - no actual upload occurred)');
    };

    const handleStartStream = () => {
        // Mock start stream action
        alert('Stream started! (This is a demo - no actual stream was initiated)');
    };

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground flex flex-col">
            <Header />
            <Sidebar />

            <main className="flex-1 w-full max-w-[1400px] mx-auto pt-[4.5rem] px-4 md:px-8 pb-12">

                {/* Hero Section */}
                <div className="mt-6 mb-12 rounded-xl border-2 border-black dark:border-white bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 p-8 md:p-12 text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="relative z-10 max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/20">
                            <UploadIcon size={12} />
                            Create Content
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black font-display uppercase leading-none mb-6 tracking-tighter">
                            Share Your<br />Story
                        </h1>
                        <p className="text-xl opacity-90 font-mono mb-4 max-w-lg">
                            Upload videos or start streaming live. Your content, your audience, your impact.
                        </p>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 mb-8 border-b-2 border-black dark:border-white pb-4">
                    <button
                        onClick={() => setActiveTab('video')}
                        className={cn(
                            "px-6 py-3 rounded-lg font-bold uppercase tracking-wider text-sm border-2 transition-all flex items-center gap-2",
                            activeTab === 'video'
                                ? "bg-primary text-white border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] translate-x-[-2px] translate-y-[-2px]"
                                : "bg-background border-border hover:border-black dark:hover:border-white hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                        )}
                    >
                        <Video size={20} />
                        Upload Video
                    </button>
                    <button
                        onClick={() => setActiveTab('live')}
                        className={cn(
                            "px-6 py-3 rounded-lg font-bold uppercase tracking-wider text-sm border-2 transition-all flex items-center gap-2",
                            activeTab === 'live'
                                ? "bg-red-600 text-white border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] translate-x-[-2px] translate-y-[-2px]"
                                : "bg-background border-border hover:border-black dark:hover:border-white hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                        )}
                    >
                        <Radio size={20} />
                        Go Live
                    </button>
                </div>

                {/* Video Upload Tab */}
                {activeTab === 'video' && (
                    <div className="space-y-6">
                        {/* Drag and Drop Zone */}
                        <div
                            onDragEnter={handleDrag}
                            onDragLeave={handleDrag}
                            onDragOver={handleDrag}
                            onDrop={handleDrop}
                            className={cn(
                                "border-4 border-dashed rounded-xl p-12 text-center transition-all",
                                dragActive
                                    ? "border-primary bg-primary/10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                                    : "border-border hover:border-black dark:hover:border-white"
                            )}
                        >
                            <UploadIcon size={64} className="mx-auto mb-4 text-muted-foreground" />
                            <h3 className="text-2xl font-black uppercase mb-2">
                                {videoFile ? videoFile.name : 'Drop Your Video Here'}
                            </h3>
                            <p className="text-muted-foreground font-mono mb-6">
                                or click to browse • MP4, MOV, AVI • Max 2GB
                            </p>
                            <input
                                type="file"
                                id="video-upload"
                                className="hidden"
                                accept="video/*"
                                onChange={handleFileChange}
                            />
                            <label htmlFor="video-upload">
                                <button
                                    type="button"
                                    onClick={() => document.getElementById('video-upload')?.click()}
                                    className="neo-button bg-primary text-white px-6 py-3 rounded-lg font-bold uppercase tracking-wider"
                                >
                                    Select File
                                </button>
                            </label>
                        </div>

                        {/* Video Details Form */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold uppercase mb-2">Video Title *</label>
                                    <input
                                        type="text"
                                        placeholder="Enter a catchy title..."
                                        className="neo-input w-full"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold uppercase mb-2">Description</label>
                                    <textarea
                                        rows={5}
                                        placeholder="Tell viewers what your video is about..."
                                        className="neo-input w-full resize-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold uppercase mb-2">Category *</label>
                                    <select className="neo-input w-full">
                                        <option>Select a category</option>
                                        <option>Gaming</option>
                                        <option>Music</option>
                                        <option>Programming</option>
                                        <option>Education</option>
                                        <option>Entertainment</option>
                                        <option>Sports</option>
                                        <option>News</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold uppercase mb-2 flex items-center gap-2">
                                        <Tag size={16} />
                                        Tags
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="gaming, tutorial, 2024 (comma separated)"
                                        className="neo-input w-full"
                                    />
                                </div>
                            </div>

                            <div className="space-y-6">
                                {/* Thumbnail Upload */}
                                <div>
                                    <label className="block text-sm font-bold uppercase mb-2 flex items-center gap-2">
                                        <ImageIcon size={16} />
                                        Thumbnail
                                    </label>
                                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-black dark:hover:border-white transition-all">
                                        <ImageIcon size={48} className="mx-auto mb-2 text-muted-foreground" />
                                        <p className="text-sm text-muted-foreground mb-3">
                                            {thumbnailFile ? thumbnailFile.name : 'Upload custom thumbnail'}
                                        </p>
                                        <input
                                            type="file"
                                            id="thumbnail-upload"
                                            className="hidden"
                                            accept="image/*"
                                            onChange={handleThumbnailChange}
                                        />
                                        <label htmlFor="thumbnail-upload">
                                            <button
                                                type="button"
                                                onClick={() => document.getElementById('thumbnail-upload')?.click()}
                                                className="neo-button bg-secondary text-white px-4 py-2 rounded text-sm font-bold uppercase"
                                            >
                                                Choose Image
                                            </button>
                                        </label>
                                    </div>
                                </div>

                                {/* Visibility */}
                                <div>
                                    <label className="block text-sm font-bold uppercase mb-2 flex items-center gap-2">
                                        <Globe size={16} />
                                        Visibility *
                                    </label>
                                    <div className="space-y-3">
                                        {[
                                            { value: 'public', label: 'Public', icon: Globe, desc: 'Everyone can watch' },
                                            { value: 'unlisted', label: 'Unlisted', icon: Eye, desc: 'Anyone with link' },
                                            { value: 'private', label: 'Private', icon: Lock, desc: 'Only you' },
                                        ].map((option) => (
                                            <label
                                                key={option.value}
                                                className="flex items-center gap-3 p-3 border-2 border-border rounded-lg cursor-pointer hover:border-black dark:hover:border-white transition-all"
                                            >
                                                <input type="radio" name="visibility" value={option.value} defaultChecked={option.value === 'public'} />
                                                <option.icon size={20} className="text-muted-foreground" />
                                                <div>
                                                    <div className="font-bold">{option.label}</div>
                                                    <div className="text-xs text-muted-foreground font-mono">{option.desc}</div>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Publish Button */}
                        <div className="flex justify-end">
                            <button
                                onClick={handlePublish}
                                className="neo-button bg-primary text-white px-8 py-4 rounded-lg text-lg font-black uppercase tracking-wider hover:bg-primary/90"
                            >
                                Publish Video
                            </button>
                        </div>
                    </div>
                )}

                {/* Go Live Tab */}
                {activeTab === 'live' && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Left Column - Stream Details */}
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold uppercase mb-2">Stream Title *</label>
                                    <input
                                        type="text"
                                        placeholder="What are you streaming today?"
                                        className="neo-input w-full"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold uppercase mb-2">Description</label>
                                    <textarea
                                        rows={5}
                                        placeholder="Tell viewers what to expect..."
                                        className="neo-input w-full resize-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold uppercase mb-2">Category *</label>
                                    <select className="neo-input w-full">
                                        <option>Select a category</option>
                                        <option>Gaming</option>
                                        <option>Music</option>
                                        <option>Programming</option>
                                        <option>Just Chatting</option>
                                        <option>Creative</option>
                                        <option>Sports</option>
                                    </select>
                                </div>

                                {/* Thumbnail Upload */}
                                <div>
                                    <label className="block text-sm font-bold uppercase mb-2 flex items-center gap-2">
                                        <ImageIcon size={16} />
                                        Stream Thumbnail
                                    </label>
                                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-black dark:hover:border-white transition-all">
                                        <ImageIcon size={48} className="mx-auto mb-2 text-muted-foreground" />
                                        <p className="text-sm text-muted-foreground mb-3">Upload thumbnail</p>
                                        <button className="neo-button bg-secondary text-white px-4 py-2 rounded text-sm font-bold uppercase">
                                            Choose Image
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Stream Setup */}
                            <div className="space-y-6">
                                <div className="p-6 border-2 border-black dark:border-white rounded-lg bg-secondary/10">
                                    <h3 className="text-xl font-black uppercase mb-4 flex items-center gap-2">
                                        <Radio className="text-red-500" />
                                        Stream Configuration
                                    </h3>

                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-xs font-bold uppercase text-muted-foreground mb-2">
                                                RTMP URL
                                            </label>
                                            <div className="flex gap-2">
                                                <input
                                                    type="text"
                                                    value={rtmpUrl}
                                                    readOnly
                                                    className="neo-input flex-1 font-mono text-sm"
                                                />
                                                <button
                                                    onClick={() => copyToClipboard(rtmpUrl)}
                                                    className="neo-button bg-secondary text-white p-2 rounded"
                                                >
                                                    <Copy size={16} />
                                                </button>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold uppercase text-muted-foreground mb-2">
                                                Stream Key
                                            </label>
                                            <div className="flex gap-2">
                                                <input
                                                    type="password"
                                                    value={streamKey}
                                                    readOnly
                                                    className="neo-input flex-1 font-mono text-sm"
                                                />
                                                <button
                                                    onClick={() => copyToClipboard(streamKey)}
                                                    className="neo-button bg-secondary text-white p-2 rounded"
                                                >
                                                    {streamKeyCopied ? <Check size={16} /> : <Copy size={16} />}
                                                </button>
                                            </div>
                                            <p className="text-xs text-muted-foreground mt-2 font-mono">
                                                ⚠️ Keep your stream key private!
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Instructions */}
                                <div className="p-6 border-2 border-black dark:border-white rounded-lg bg-accent/10">
                                    <h4 className="font-bold uppercase mb-3">Setup Instructions</h4>
                                    <ol className="space-y-2 text-sm font-mono">
                                        <li>1. Open your streaming software (OBS, Streamlabs, etc.)</li>
                                        <li>2. Copy the RTMP URL and Stream Key above</li>
                                        <li>3. Paste them into your software settings</li>
                                        <li>4. Configure your scene and audio</li>
                                        <li>5. Click "Start Stream" below when ready!</li>
                                    </ol>
                                </div>

                                {/* Estimated Stats */}
                                <div className="p-4 border-2 border-border rounded-lg bg-muted/5">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground font-mono">Estimated Latency:</span>
                                        <span className="font-bold">2-4 seconds</span>
                                    </div>
                                    <div className="flex justify-between text-sm mt-2">
                                        <span className="text-muted-foreground font-mono">Max Viewers:</span>
                                        <span className="font-bold">Unlimited</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Start Stream Button */}
                        <div className="flex justify-end">
                            <button
                                onClick={handleStartStream}
                                className="neo-button bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-black uppercase tracking-wider hover:bg-red-700 flex items-center gap-3 animate-pulse"
                            >
                                <Radio size={24} />
                                Start Streaming
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
