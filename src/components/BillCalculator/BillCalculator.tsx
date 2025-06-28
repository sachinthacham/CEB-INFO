import ImageSlider from "../Home/ImageSlider";

export default function BillCalculator() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1">
        <ImageSlider />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">
            Bill Calculator
          </h1>
          <p className="text-gray-500">
            Bill calculator functionality coming soon.
          </p>
        </div>
      </main>
    </div>
  );
}
