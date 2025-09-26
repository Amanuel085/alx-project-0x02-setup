import Header from "@/components/layout/Header";

export default function PostsPage() {
  return (
    <div>
      <Header />
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold text-purple-700">Posts Page</h1>
        <p className="text-gray-600 mt-2">This is where posts will be displayed.</p>
      </div>
    </div>
  );
}