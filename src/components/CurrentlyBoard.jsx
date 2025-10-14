import { useState } from "react";
import { Plus, Heart, Book, Headphones, Briefcase } from "lucide-react";
import CreatePost from "./CreatePost";
import mockPosts from "../mockPosts.json";
import PostCard from "./PostCard";

function CurrentlyBoard() {
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState("all");
  const categories = {
    reading: { icon: Book, color: "bg-blue-500", label: "Reading" },
    listening: { icon: Headphones, color: "bg-purple-500", label: "Listening" },
    working: { icon: Briefcase, color: "bg-green-500", label: "Working on" },
    doing: { icon: Heart, color: "bg-pink-500", label: "Doing" },
  };
  const [posts, setPosts] = useState(mockPosts);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    category: "reading",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    const postToAdd = {
      id: posts.length + 1,
      title: newPost.title,
      content: newPost.content,
      category: newPost.category,
      likes: 0,
      timestamp: new Date().toLocaleDateString(),
    };

    setPosts([postToAdd, ...posts]);
    setShowModal(false);
    setNewPost({
      title: "",
      content: "",
      category: "reading",
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200">
      <div className="bg-white flex items-center justify-between px-8 py-8">
        <div className="flex flex-col space-y-1 gap-0.5">
          <span className="text-red-800 font-bold text-[1.5rem]">WhatRu</span>
          <span className="text-gray-500">What's everyone up to?</span>
        </div>
        <div>
          <button
            className="bg-red-800 text-white rounded-full flex items-center px-4 py-2 gap-2 hover:bg-black"
            onClick={() => setShowModal(true)}
          >
            <Plus />
            Share
          </button>
        </div>
      </div>
      {showModal && (
        <CreatePost
          onClose={() => setShowModal(false)}
          newPost={newPost}
          setNewPost={setNewPost}
          handleSubmit={handleSubmit}
          categories={categories}
        />
      )}

      <section className="flex gap-6 px-10 py-4">
        <div className="flex gap-2 overflow-x-auto">
          <button
            className="bg-red-800 text-white rounded-full flex items-center px-4 py-2 gap-2 hover:bg-black"
            onClick={() => setFilter("all")}
          >
            All
          </button>
          {Object.entries(categories).map(([key, { label, color }]) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-4 py-2 rounded-full flex items-center gap-2 ${
                filter === key
                  ? `${color} text-white`
                  : "bg-white text-slate-600 border border-slate-300 hover:bg-slate-100"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </section>
      <section className="px-10 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts
            .filter((post) => filter === "all" || post.category === filter)
            .map((post) => (
              <PostCard
                key={post.id}
                post={post}
                categoryIcon={categories[post.category].icon}
                categoryColor={categories[post.category].color}
              />
            ))}
        </div>
      </section>
    </main>
  );
}

export default CurrentlyBoard;
