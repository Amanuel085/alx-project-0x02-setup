import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-6 text-center">
        <h1 className="text-3xl font-semibold text-gray-800">Welcome to SoloForge</h1>
        <p className="text-lg text-gray-600 mt-2">
          Master project autonomy with Next.js, TypeScript, and Tailwind CSS.
        </p>
      </main>
    </div>
  );
}