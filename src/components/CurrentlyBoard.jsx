import { useState } from "react";
import { Plus } from "lucide-react";
import CreatePost from "./CreatePost";

function CurrentlyBoard() {
  const [showModal, setShowModal] = useState(false);
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200">
      <div className="bg-white flex items-center justify-between px-8 py-8">
        <div className="flex flex-col space-y-1 gap-0.5">
          <span className="text-red-800 font-bold text-[1.5rem]">
            WhatRu
          </span>
          <span className="text-gray-500">What's everyone up to?</span>
        </div>
        <div>
          <button className="bg-red-800 text-white rounded-full flex items-center px-4 py-2 gap-2 hover:bg-black"
            onClick={() => setShowModal(true)}>
            <Plus />
            Share
          </button>
        </div>
      </div>
      {showModal && <CreatePost />}
    </main>
  );
}

export default CurrentlyBoard;
