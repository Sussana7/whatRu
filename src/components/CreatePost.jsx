import { X } from "lucide-react";

function CreatePost({ onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-red-800">
            Share what you're up to
          </h2>
          <button
            className="text-slate-600 hover:text-red-800"
            onClick={onClose}
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800"
              placeholder="Sussana"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Currently...
            </label>
            <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800">
              <option value="reading">Reading</option>
              <option value="listening">Listening</option>
              <option value="working">Working on</option>
              <option value="doing">Doing</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              What is it?
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800"
              placeholder="Harry Potter by J.K Rowling"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-800 text-white py-3 rounded-lg hover:bg-black transition-colors font-medium"
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
export default CreatePost;
