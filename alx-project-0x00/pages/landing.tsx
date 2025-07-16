import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>

      {/* Reuse Card component */}
      <Card />
      <Card />

      {/* Buttons with required shapes */}
      <div className="mt-6 flex gap-4">
        <Button title="Small Rounded" styles="bg-blue-500 rounded-sm" />
        <Button title="Medium Rounded" styles="bg-green-500 rounded-md" />
        <Button title="Full Rounded" styles="bg-purple-500 rounded-full" />
        <Button title="Large Rounded" variant="bg-red-500 rounded-lg" />
      </div>
    </div>
  );
};

export default Landing;
