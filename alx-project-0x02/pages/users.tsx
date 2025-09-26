import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { type UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

export default function UsersPage({ users }: UsersPageProps) {
  return (
    <div>
      <Header />
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold text-teal-700 text-center">Users Page</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ✅ Static site generation with async/await
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserProps[] = await res.json();

  return {
    props: {
      users,
    },
  };
}