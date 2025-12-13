import { Video } from '@/lib/types';
import { Link } from 'wouter';
import { MoreVertical } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoCardProps {
  video: Video;
  layout?: 'grid' | 'row';
}

export function VideoCard({ video, layout = 'grid' }: VideoCardProps) {
  return (
    <div className={cn("group flex gap-3 cursor-pointer", layout === 'grid' ? "flex-col" : "flex-row")}>
      <Link href={`/watch/${video.id}`} className={cn("relative rounded-xl overflow-hidden aspect-video bg-muted", layout === 'row' ? "w-40 sm:w-64 flex-shrink-0" : "w-full")}>
        <img 
          src={video.thumbnailUrl} 
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
          {video.duration}
        </div>
      </Link>
      
      <div className="flex gap-3 items-start flex-1 min-w-0 pr-6 relative">
        {layout === 'grid' && (
          <Link href={`/channel/${video.channel.id}`} className="flex-shrink-0 mt-0.5">
            <img 
              src={video.channel.avatarUrl} 
              alt={video.channel.name} 
              className="w-9 h-9 rounded-full object-cover"
            />
          </Link>
        )}
        
        <div className="flex flex-col gap-1 min-w-0">
          <Link href={`/watch/${video.id}`}>
            <h3 className="text-base font-semibold leading-tight line-clamp-2 group-hover:text-primary/90">
              {video.title}
            </h3>
          </Link>
          
          <div className="text-sm text-muted-foreground flex flex-col sm:flex-row sm:items-center sm:gap-1 flex-wrap">
            <Link href={`/channel/${video.channel.id}`} className="hover:text-foreground transition-colors flex items-center gap-1">
              {video.channel.name}
              {video.channel.verified && (
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-muted-foreground">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path>
                </svg>
              )}
            </Link>
            {layout === 'row' && <span className="hidden sm:inline">•</span>}
            <div className="flex items-center">
              <span>{video.views} views</span>
              <span className="mx-1">•</span>
              <span>{video.uploadDate}</span>
            </div>
          </div>

          {layout === 'row' && (
            <p className="text-xs text-muted-foreground mt-2 line-clamp-2 hidden sm:block">
              {video.description}
            </p>
          )}
        </div>

        <button className="absolute top-0 right-[-10px] opacity-0 group-hover:opacity-100 p-1 hover:bg-accent rounded-full transition-opacity">
          <MoreVertical size={20} />
        </button>
      </div>
    </div>
  );
}
