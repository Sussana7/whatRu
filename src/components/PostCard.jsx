import { Heart } from "lucide-react";

function PostCard({ post, categoryColor, categoryIcon: IconComponent }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md dark:shadow-gray-900/50">
      <div className="flex gap-4">
        <div
          className={`${categoryColor} w-12 h-12 rounded-lg flex items-center justify-center`}
        >
          <IconComponent size={24} className="text-white" />
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold dark:text-white">{post.username}</span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              {post.timestamp}
            </span>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-2">
            {post.content}
          </p>

          <button className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400">
            <Heart size={16} />
            <span className="text-sm">{post.likes}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
