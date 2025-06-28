import ImageSlider from "../Home/ImageSlider";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";

const generationLinks = [
  {
    title: "Application for Capturing Daily Generation Data",
    description: "Detailed report on power generation for the year 2023.",
    url: "#",
  },
  {
    title: "Sales and Generation Data Book 2016 Generation",
    description: "Standard operating procedures for major power plants.",
    url: "#",
  },
];

export default function Generation() {
  return (
    <div>
      <ImageSlider />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900">
            Generation Division
          </h1>
          <p className="mt-2 text-gray-600">
            Overseeing the nation's power generation through a diverse portfolio
            of hydro, thermal, and renewable energy sources.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-md font-medium text-gray-900">
            Documents & Reports
          </h3>
          <div className="grid gap-4">
            {generationLinks.map((item, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg p-4 bg-blue-50 hover:bg-blue-100 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-normal text-sm text-gray-900">
                      {item.title}
                    </h4>
                  </div>
                  <a
                    href={item.url}
                    className="inline-flex items-center px-4 py-1.5 text-blue-700 bg-white rounded-md text-sm shadow-md hover:shadow-lg hover:bg-blue-50 hover:text-blue-800 transition-all focus:outline-none focus:ring-2 focus:ring-blue-200"
                  >
                    <DocumentArrowDownIcon className="w-4 h-4 mr-2" />
                    Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
