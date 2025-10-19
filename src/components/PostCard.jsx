import { useState } from "react";
import { Heart, MessageCircle, X } from "lucide-react";

function PostCard({
  post,
  categoryColor,
  categoryIcon: IconComponent,
  onLike,
  onAddComment,
}) {
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");

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

          {/* Like and Comment Buttons */}
          <div className="flex gap-4">
            <button
              className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400"
              onClick={onLike}
            >
              <Heart size={16} />
              <span className="text-sm">{post.likes}</span>
            </button>

            <button
              className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
              onClick={() => setShowComments(true)}
            >
              <MessageCircle size={16} />
              <span className="text-sm">{post.comments}</span>
            </button>
          </div>
        </div>
      </div>

      {showComments && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-96 shadow-lg relative">
            {/* Close Button */}
            <button
              onClick={() => setShowComments(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <X size={20} />
            </button>

            {/* Comment Section */}
            <h3 className="text-lg font-semibold mb-3 dark:text-white">
              Comments
            </h3>

            <div className="space-y-2 mb-4">
              {post.commentList && post.commentList.length > 0 ? (
                post.commentList.map((c, i) => (
                  <p key={i} className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">{c.username}: </span>
                    {c.text}
                  </p>
                ))
              ) : (
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  No comments yet.
                </p>
              )}
            </div>

            {/* Add Comment Input */}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Add a comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="flex-1 border rounded-lg px-3 py-1.5 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <button
                className="bg-blue-500 text-white px-3 py-1.5 rounded-lg hover:bg-blue-600 text-sm"
                onClick={() => {
                  if (commentText.trim() !== "") {
                    onAddComment(commentText);
                    setCommentText(""); 
                  }
                }}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PostCard;
