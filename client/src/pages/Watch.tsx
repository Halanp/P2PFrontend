import { useParams } from "wouter";
import ReactPlayer from 'react-player';
import { Header } from '@/components/layout/Header';
import { VideoCard } from '@/components/video/VideoCard';
import { videos } from '@/lib/mockData';
import { ThumbsUp, ThumbsDown, Share2, Scissors, MoreHorizontal, Download } from 'lucide-react';
import { useState } from 'react';

export default function Watch() {
  const { id } = useParams();
  const video = videos.find(v => v.id === id) || videos[0];
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);

  // Filter out current video from suggestions
  const suggestions = videos.filter(v => v.id !== video.id);
  const displaySuggestions = [...suggestions, ...suggestions];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      
      <main className="pt-14 flex flex-col lg:flex-row max-w-[1800px] mx-auto">
        {/* Primary Column - Video Player & Info */}
        <div className="flex-1 p-4 lg:p-6 lg:pr-6">
          {/* Player Container */}
          <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl mb-4 relative z-10 group">
             {/* @ts-ignore - ReactPlayer types are sometimes tricky */}
             <ReactPlayer 
               url={video.videoUrl} 
               width="100%" 
               height="100%" 
               controls
               playing
               light={video.thumbnailUrl} // Use thumbnail as placeholder
               playIcon={
                 <div className="w-16 h-16 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-red-600 transition-colors">
                    <svg className="w-8 h-8 fill-white ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                 </div>
               }
             />
          </div>

          <h1 className="text-xl font-bold line-clamp-2 mb-2">{video.title}</h1>

          {/* Action Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <a href={`/channel/${video.channel.id}`} className="flex-shrink-0">
                <img src={video.channel.avatarUrl} alt={video.channel.name} className="w-10 h-10 rounded-full object-cover" />
              </a>
              <div className="flex flex-col mr-4">
                <a href={`/channel/${video.channel.id}`} className="font-semibold text-base hover:text-foreground/80">{video.channel.name}</a>
                <span className="text-xs text-muted-foreground">{video.channel.subscribers} subscribers</span>
              </div>
              <button className="bg-foreground text-background hover:bg-foreground/90 px-4 py-2 rounded-full font-medium text-sm transition-colors">
                Subscribe
              </button>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              <div className="flex items-center bg-secondary rounded-full h-9">
                <button className="flex items-center gap-2 px-4 hover:bg-accent h-full rounded-l-full border-r border-border/50 transition-colors">
                  <ThumbsUp size={18} />
                  <span className="text-sm font-medium">{video.likes}</span>
                </button>
                <button className="px-4 hover:bg-accent h-full rounded-r-full transition-colors">
                  <ThumbsDown size={18} />
                </button>
              </div>
              
              <button className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-accent rounded-full text-sm font-medium transition-colors whitespace-nowrap">
                <Share2 size={18} /> Share
              </button>
              
              <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-accent rounded-full text-sm font-medium transition-colors whitespace-nowrap">
                <Download size={18} /> Download
              </button>

              <button className="flex items-center gap-2 p-2 bg-secondary hover:bg-accent rounded-full transition-colors">
                <MoreHorizontal size={18} />
              </button>
            </div>
          </div>

          {/* Description Box */}
          <div className="bg-secondary rounded-xl p-3 text-sm cursor-pointer hover:bg-secondary/80 transition-colors" onClick={() => setDescriptionExpanded(!descriptionExpanded)}>
            <div className="font-medium mb-1">
              {video.views} views • {video.uploadDate}
            </div>
            <p className={descriptionExpanded ? "" : "line-clamp-2"}>
              {video.description}
              <br /><br />
              This is a mock description to demonstrate the expand functionality. In a real app, this would contain links, timestamps, and more detailed information about the video content.
            </p>
            <button className="mt-1 font-semibold text-foreground/80 hover:text-foreground">
              {descriptionExpanded ? "Show less" : "...more"}
            </button>
          </div>

          {/* Comments Section (Mock) */}
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-4">Comments</h3>
            {/* Add comment input */}
            <div className="flex gap-4 mb-6">
               <div className="w-10 h-10 rounded-full bg-accent flex-shrink-0 overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Me" />
               </div>
               <div className="flex-1">
                 <input type="text" placeholder="Add a comment..." className="w-full border-b border-border bg-transparent py-2 focus:border-foreground outline-none transition-colors" />
               </div>
            </div>
            
            {/* Mock Comments */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex-shrink-0" />
                <div>
                  <div className="flex items-center gap-2 text-xs mb-1">
                    <span className="font-semibold">User {i}</span>
                    <span className="text-muted-foreground">2 days ago</span>
                  </div>
                  <p className="text-sm mb-2">This is a great video! Really helped me understand the concepts.</p>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
                       <ThumbsUp size={14} /> 12
                    </button>
                    <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
                       <ThumbsDown size={14} />
                    </button>
                    <button className="text-xs font-medium hover:bg-secondary px-3 py-1 rounded-full">Reply</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Column - Recommendations */}
        <div className="lg:w-[350px] xl:w-[400px] p-4 lg:p-6 lg:pl-0">
           <div className="flex flex-col gap-2">
             {displaySuggestions.map((v, idx) => (
               <VideoCard key={`${v.id}-sug-${idx}`} video={v} layout="row" />
             ))}
           </div>
        </div>
      </main>
    </div>
  );
}
