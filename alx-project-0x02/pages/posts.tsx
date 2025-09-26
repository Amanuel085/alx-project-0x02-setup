import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <div>
      <Header />
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold text-purple-700 text-center">Posts Page</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ✅ Static site generation with async/await
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=12");
  const posts: PostProps[] = await res.json();

  return {
    props: {
      posts,
    },
  };
}