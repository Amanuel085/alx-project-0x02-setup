import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <div className="p-6 space-y-6 text-center">
        <h1 className="text-3xl font-bold text-green-700">About SoloForge</h1>

        <div className="flex flex-col items-center gap-4">
          <Button label="Small Button" size="small" shape="rounded-sm" />
          <Button label="Medium Button" size="medium" shape="rounded-md" />
          <Button label="Large Button" size="large" shape="rounded-full" />
        </div>
      </div>
    </div>
  );
}