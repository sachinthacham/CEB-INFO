import { useState } from "react";
import ImageSlider from "../Home/ImageSlider";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";

const subtopics = [
  {
    id: "documents",
    name: "Documents",
    links: [
      { label: "Transmission Grid Code", url: "#" },
      { label: "System Operation Manual", url: "#" },
      { label: "Transmission Planning Criteria", url: "#" },
    ],
  },
  {
    id: "applications",
    name: "Applications",
    links: [
      { label: "Grid Connection Application Form", url: "#" },
      { label: "Transmission Service Request", url: "#" },
    ],
  },
  {
    id: "reports",
    name: "Reports",
    links: [
      { label: "Annual Transmission Report 2023", url: "#" },
      { label: "Monthly Outage Report", url: "#" },
      { label: "System Losses Report", url: "#" },
    ],
  },
];

export default function Transmission() {
  const [activeTab, setActiveTab] = useState("documents");

  const current = subtopics.find((s) => s.id === activeTab);

  return (
    <div>
      <ImageSlider />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900">
            Transmission Division
          </h1>
          <p className="mt-2 text-gray-600">
            Managing the national transmission grid, ensuring reliable and
            efficient power delivery across the country.
          </p>
        </div>
        {/* Subtopic Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8 overflow-x-auto">
            {subtopics.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <DocumentArrowDownIcon className="inline-block w-4 h-4 mr-2" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
        {/* Subtopic Content */}
        <div className="space-y-4">
          <h3 className="text-md font-medium text-gray-900 mb-2">
            {current?.name}
          </h3>
          <div className="grid gap-4">
            {current?.links.map((item, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg p-4 bg-blue-50 hover:bg-blue-100 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-normal text-sm text-gray-900">
                      {item.label}
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
