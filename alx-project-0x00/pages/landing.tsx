import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>

      {/* Render the Card components */}
      <Card />
      <Card />

      {/* Render Button components with required shapes */}
      <div className="mt-6 flex gap-4">
        <Button title="Small Rounded" style="bg-blue-500 rounded-sm" />
        <Button title="Medium Rounded" style="bg-green-500 rounded-md" />
        <Button title="Full Rounded" style="bg-purple-500 rounded-full" />
      </div>
    </div>
  );
};

export default Landing;
