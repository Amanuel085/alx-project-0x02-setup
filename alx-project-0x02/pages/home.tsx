import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-blue-700 text-center">Welcome to the Home Page</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Project Autonomy" content="Learn to build and manage projects independently using modern tools." />
        <Card title="Reusable Components" content="Create modular components that scale across your application." />
        <Card title="Type Safety" content="Use TypeScript interfaces to catch errors early and improve maintainability." />
      </div>
    </div>
  );
}