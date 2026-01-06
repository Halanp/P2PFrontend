import { Video, Channel, PlaylistItem } from './types';

export const currentUser = {
  name: "Demo User",
  avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  email: "demo@example.com"
};

export const categories = [
  "All", "Gaming", "Music", "Live", "Mixes", "Computers", "Programming", "Podcasts", "News", "Sports", "Learning", "Fashion"
];

const channels: Record<string, Channel> = {
  "c1": {
    id: "c1",
    name: "Tech Hunters",
    avatarUrl: "https://images.unsplash.com/photo-1531297461136-8204b255658b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    subscribers: "1.2M",
    verified: true
  },
  "c2": {
    id: "c2",
    name: "Nature Life",
    avatarUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    subscribers: "450K"
  },
  "c3": {
    id: "c3",
    name: "Code Daily",
    avatarUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    subscribers: "89K",
    verified: true
  },
  "c4": {
    id: "c4",
    name: "Music Vibe",
    avatarUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    subscribers: "2.5M",
    verified: true
  }
};

export const videos: Video[] = [
  {
    id: "v1",
    title: "Building a YouTube Clone in 1 Hour",
    description: "In this video we will build a modern YouTube clone using React, Tailwind CSS and Zustand.",
    thumbnailUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6P_g_k", // Use actual youtube ID for ReactPlayer if needed, or sample mp4
    duration: "12:45",
    channel: channels["c3"],
    views: "120K",
    likes: "5.2K",
    uploadDate: "2 days ago",
    categoryId: "Programming"
  },
  {
    id: "v2",
    title: "Top 10 Gadgets of 2025",
    description: "Here are the top 10 gadgets you must have in 2025. From smart glasses to AI pins.",
    thumbnailUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6P_g_k",
    duration: "8:30",
    channel: channels["c1"],
    views: "540K",
    likes: "22K",
    uploadDate: "1 week ago",
    categoryId: "Gaming"
  },
  {
    id: "v3",
    title: "Relaxing Rain Sounds for Sleep",
    description: "Peaceful rain sounds to help you sleep and relax.",
    thumbnailUrl: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6P_g_k",
    duration: "10:00:00",
    channel: channels["c2"],
    views: "1.2M",
    likes: "15K",
    uploadDate: "3 months ago",
    categoryId: "Music"
  },
  {
    id: "v4",
    title: "Lo-Fi Beats to Code To",
    description: "The best lo-fi beats for coding and studying.",
    thumbnailUrl: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6P_g_k",
    duration: "1:00:00",
    channel: channels["c4"],
    views: "890K",
    likes: "34K",
    uploadDate: "1 month ago",
    categoryId: "Music"
  },
  {
    id: "v5",
    title: "How to Center a Div",
    description: "The ultimate guide to centering a div in CSS.",
    thumbnailUrl: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6P_g_k",
    duration: "5:20",
    channel: channels["c3"],
    views: "2.1M",
    likes: "120K",
    uploadDate: "1 year ago",
    categoryId: "Programming"
  },
  {
    id: "v6",
    title: "Amazing Mountain Views 4K",
    description: "Stunning 4K footage of mountains.",
    thumbnailUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6P_g_k",
    duration: "15:10",
    channel: channels["c2"],
    views: "10K",
    likes: "500",
    uploadDate: "5 hours ago",
    categoryId: "Nature"
  },
  {
    id: "v7",
    title: "Cyberpunk City Ambience",
    description: "Futuristic city ambience for focus.",
    thumbnailUrl: "https://images.unsplash.com/photo-1515630278258-407f66498911?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6P_g_k",
    duration: "3:00:00",
    channel: channels["c4"],
    views: "45K",
    likes: "1.2K",
    uploadDate: "2 weeks ago",
    categoryId: "Music"
  },
  {
    id: "v8",
    title: "Setup Tour 2025",
    description: "My new desk setup tour.",
    thumbnailUrl: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6P_g_k",
    duration: "18:45",
    channel: channels["c1"],
    views: "125K",
    likes: "8K",
    uploadDate: "3 days ago",
    categoryId: "Gaming"
  }
];

// Live streaming videos with viewer counts
export const liveVideos: (Video & { viewers: string; isLive: boolean })[] = [
  {
    id: "live1",
    title: "🔴 Live Coding: Building a Real-Time Chat App",
    description: "Join me as I build a real-time chat application using WebSockets and React!",
    thumbnailUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6P_g_k",
    duration: "LIVE",
    channel: channels["c3"],
    views: "25K watching",
    likes: "1.8K",
    uploadDate: "Started 2 hours ago",
    categoryId: "Programming",
    viewers: "25K",
    isLive: true
  },
  {
    id: "live2",
    title: "🔴 Epic Gaming Marathon - 24 Hours Stream",
    description: "24-hour gaming session! Come hang out and chat!",
    thumbnailUrl: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6P_g_k",
    duration: "LIVE",
    channel: channels["c1"],
    views: "15K watching",
    likes: "2.5K",
    uploadDate: "Started 6 hours ago",
    categoryId: "Gaming",
    viewers: "15K",
    isLive: true
  },
  {
    id: "live3",
    title: "🔴 Live Music Session - Jazz & Chill",
    description: "Live jazz performance with special guests. Grab your coffee and relax!",
    thumbnailUrl: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6P_g_k",
    duration: "LIVE",
    channel: channels["c4"],
    views: "8.5K watching",
    likes: "950",
    uploadDate: "Started 30 minutes ago",
    categoryId: "Music",
    viewers: "8.5K",
    isLive: true
  },
  {
    id: "live4",
    title: "🔴 Tech News Live - Breaking Tech Headlines",
    description: "Latest tech news and updates happening right now!",
    thumbnailUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6P_g_k",
    duration: "LIVE",
    channel: channels["c1"],
    views: "12K watching",
    likes: "1.2K",
    uploadDate: "Started 1 hour ago",
    categoryId: "News",
    viewers: "12K",
    isLive: true
  },
  {
    id: "live5",
    title: "🔴 Nature Live Cam - Northern Lights Watch",
    description: "Live feed from Norway - watching the Aurora Borealis in real time!",
    thumbnailUrl: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6P_g_k",
    duration: "LIVE",
    channel: channels["c2"],
    views: "45K watching",
    likes: "5.2K",
    uploadDate: "Started 3 hours ago",
    categoryId: "Nature",
    viewers: "45K",
    isLive: true
  },
  {
    id: "live6",
    title: "🔴 Live DJ Set - Electronic Vibes",
    description: "Non-stop electronic beats for your night!",
    thumbnailUrl: "https://images.unsplash.com/photo-1571266028243-d220c6c1e4c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6P_g_k",
    duration: "LIVE",
    channel: channels["c4"],
    views: "6.8K watching",
    likes: "780",
    uploadDate: "Started 45 minutes ago",
    categoryId: "Music",
    viewers: "6.8K",
    isLive: true
  }
];

// Short-form vertical videos (Discover/Shorts)
export const shortsVideos: Video[] = [
  {
    id: "short1",
    title: "Quick CSS Trick You Need to Know!",
    description: "This one CSS trick will blow your mind! 🤯",
    thumbnailUrl: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&q=80",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6P_g_k",
    duration: "0:45",
    channel: channels["c3"],
    views: "2.5M",
    likes: "180K",
    uploadDate: "3 days ago",
    categoryId: "Programming"
  },
  {
    id: "short2",
    title: "Unboxing the Latest iPhone 16 Pro Max",
    description: "First look at the new iPhone!",
    thumbnailUrl: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&q=80",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6P_g_k",
    duration: "0:59",
    channel: channels["c1"],
    views: "5.8M",
    likes: "425K",
    uploadDate: "1 day ago",
    categoryId: "Gaming"
  },
  {
    id: "short3",
    title: "Satisfying Nature Sounds ASMR",
    description: "Pure relaxation in 30 seconds 🌿",
    thumbnailUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&q=80",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6P_g_k",
    duration: "0:30",
    channel: channels["c2"],
    views: "1.2M",
    likes: "95K",
    uploadDate: "2 days ago",
    categoryId: "Nature"
  },
  {
    id: "short4",
    title: "30-Second Beat Drop Challenge",
    description: "Can you handle this beat? 🎵",
    thumbnailUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&q=80",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6P_g_k",
    duration: "0:30",
    channel: channels["c4"],
    views: "3.4M",
    likes: "310K",
    uploadDate: "5 hours ago",
    categoryId: "Music"
  },
  {
    id: "short5",
    title: "Speed Coding Challenge - React Component in 60s",
    description: "Watch me build a React component in under a minute!",
    thumbnailUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&q=80",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6P_g_k",
    duration: "0:58",
    channel: channels["c3"],
    views: "890K",
    likes: "67K",
    uploadDate: "1 week ago",
    categoryId: "Programming"
  },
  {
    id: "short6",
    title: "Gaming Fails Compilation #shorts",
    description: "These fails are hilarious! 😂",
    thumbnailUrl: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&q=80",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6P_g_k",
    duration: "0:42",
    channel: channels["c1"],
    views: "4.2M",
    likes: "380K",
    uploadDate: "2 days ago",
    categoryId: "Gaming"
  },
  {
    id: "short7",
    title: "Sunrise Timelapse - 60 Seconds",
    description: "Beautiful sunrise captured in 4K",
    thumbnailUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&q=80",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6P_g_k",
    duration: "0:60",
    channel: channels["c2"],
    views: "1.8M",
    likes: "125K",
    uploadDate: "4 days ago",
    categoryId: "Nature"
  },
  {
    id: "short8",
    title: "Epic Guitar Solo in 45 Seconds",
    description: "Shredding like there's no tomorrow! 🎸",
    thumbnailUrl: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&q=80",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6P_g_k",
    duration: "0:45",
    channel: channels["c4"],
    views: "2.1M",
    likes: "175K",
    uploadDate: "6 hours ago",
    categoryId: "Music"
  }
];

export const playlists: PlaylistItem[] = [
  { id: "p1", name: "Watch Later", count: 12 },
  { id: "p2", name: "Favorites", count: 8 },
  { id: "p4", name: "Music Mix", count: 50 },
];

