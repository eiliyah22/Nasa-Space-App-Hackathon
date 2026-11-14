import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';

// --- TYPES ---
export interface Post {
  id: number;
  username: string;
  avatarInitials: string;
  avatarColor: string;
  timeAgo: string;
  tag: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
}

// --- DUMMY DATA ---
const BASE_POSTS: Post[] = [
  {
    id: 1,
    username: "Kavish B. (Reef Patrol)",
    avatarInitials: "KB",
    avatarColor: "#F5C870",
    timeAgo: "2 hrs ago",
    tag: "#UnderwaterWaterfall",
    imageUrl: "/oceanvideo.mp4",
    caption: "Sublime morning light over Le Morne lagoon! Comparing our drone orthomosaics with the latest NISAR L-band GCOV raster. The inner lagoon patch reefs show remarkable micro-algae stability despite last week's swell. 🌊🛰️",
    likes: 248,
    comments: 19,
  },
  {
    id: 2,
    username: "Blue Bay Eco-Action",
    avatarInitials: "BB",
    avatarColor: "#A8E6CF",
    timeAgo: "6 hrs ago",
    tag: "#CoralRestoration",
    imageUrl: "/wastemanagement1.jpeg",
    caption: "Blue Bay Eco-Action: 350+ coral cores fragment, anchored this weekend with community volunteers. Huge thanks to everyone who showed up! 🪸🤿",
    likes: 412,
    comments: 34,
  },
  {
    id: 3,
    username: "Tech Savvy Mauritius",
    avatarInitials: "TS",
    avatarColor: "#E2E8F0", 
    timeAgo: "1 day ago",
    tag: "#BeachCleanup",
    imageUrl: "/wastemanagement2.jpeg",
    caption: "Massive turnout at the Le Morne beach cleanup today! Over 50 bags of plastic and debris collected. Protecting our island, one step at a time. ♻️🇲🇺",
    likes: 890,
    comments: 56,
  },
  {
    id: 4,
    username: "Tech Savvy Mauritius",
    avatarInitials: "TS",
    avatarColor: "#E2E8F0",
    timeAgo: "1 day ago",
    tag: "#MangroveRevival",
    imageUrl: "/wastemanagement3.jpeg",
    caption: "Into the mangroves we go. Collecting waste that gets trapped in the roots before it reaches the ocean. Nature's filtration system at work. 🌿🛶",
    likes: 320,
    comments: 12,
  }
];

// --- POST CARD COMPONENT ---
const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl mb-6 overflow-hidden shadow-sm">
      {/* HEADER */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-gray-800"
            style={{ backgroundColor: post.avatarColor }}
          >
            {post.avatarInitials}
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-sm text-gray-900">{post.username}</span>
              <span className="text-blue-500 text-xs">✓</span>
            </div>
            <span className="text-xs text-gray-500">{post.timeAgo}</span>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* TAG */}
      <div className="px-4 pb-2">
         <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
            {post.tag}
         </span>
      </div>

      {/* IMAGE / VIDEO */}
      <div className="w-full aspect-square md:aspect-[4/3] bg-gray-100 relative">
        {post.imageUrl.endsWith(".mp4") ? (
          <video
            src={post.imageUrl}
            controls
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={post.imageUrl}
            alt="Post content"
            className="w-full h-full object-cover"
          />
        )}
        {post.id === 1 && (
          <div className="absolute bottom-4 left-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
            NISAR Track 127 Pass Confirmed
          </div>
        )}
      </div>

      {/* ACTION BUTTONS */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            <button onClick={handleLike} className="flex items-center gap-1.5 text-gray-700 hover:text-red-500 transition-colors">
              <Heart size={24} className={isLiked ? "fill-red-500 text-red-500" : ""} />
              <span className="text-sm font-medium">{likeCount}</span>
            </button>
            <button className="flex items-center gap-1.5 text-gray-700 hover:text-blue-500 transition-colors">
              <MessageCircle size={24} />
              <span className="text-sm font-medium">{post.comments}</span>
            </button>
            <button className="text-gray-700 hover:text-green-500 transition-colors">
              <Send size={24} />
            </button>
          </div>
          <button className="text-gray-700 hover:text-yellow-500 transition-colors">
            <Bookmark size={24} />
          </button>
        </div>

        {/* CAPTION */}
        <div className="text-sm text-gray-800 leading-snug">
          <span className="font-semibold mr-2">{post.username.split(' ')[0]}</span>
          {post.caption}
        </div>
      </div>
    </div>
  );
};

// --- MAIN FEED COMPONENT ---
export default function Feed() {
  // Infinite Scroll State
  const [posts, setPosts] = useState<Post[]>(BASE_POSTS);
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  const loadMorePosts = useCallback(() => {
    if (isLoading) return;
    setIsLoading(true);

    setTimeout(() => {
      const newPosts = BASE_POSTS.map((post, index) => ({
        ...post,
        id: posts.length + index + 1,
      }));
      setPosts((prev) => [...prev, ...newPosts]);
      setIsLoading(false);
    }, 1000);
  }, [isLoading, posts.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMorePosts();
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loadMorePosts]);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-2xl mx-auto pt-6 px-4 pb-20">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}

        {/* THE INVISIBLE SCROLL TRIGGER */}
        <div ref={loaderRef} className="flex justify-center py-10">
          {isLoading ? (
            <div className="text-teal-600 font-medium animate-pulse">Loading more vibes...</div>
          ) : (
            <div className="text-gray-400 text-sm">Scroll for more</div>
          )}
        </div>
      </main>
    </div>
  );
}