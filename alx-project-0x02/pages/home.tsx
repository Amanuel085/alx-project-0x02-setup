import { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

export default function HomePage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);

  const handleAddPost = (newPost: { title: string; content: string }) => {
    setPosts((prev) => [...prev, newPost]);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-blue-700 text-center">Welcome to the Home Page</h1>

      <div className="flex justify-center">
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Add Post
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>

      {isModalOpen && (
        <PostModal onClose={() => setModalOpen(false)} onSubmit={handleAddPost} />
      )}
    </div>
  );
}