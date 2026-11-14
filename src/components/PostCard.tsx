import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';

// We export this interface so Feed.tsx can use it too
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

export const PostCard: React.FC<{ post: Post }> = ({ post }) => {
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

      {/* IMAGE */}
      <div className="w-full aspect-square md:aspect-[4/3] bg-gray-100 relative">
        <img 
          src={post.imageUrl} 
          alt="Post content" 
          className="w-full h-full object-cover"
        />
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