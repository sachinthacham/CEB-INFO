import { useState } from "react";
import ImageSlider from "../Home/ImageSlider";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import CardLink from "../Common/CardLink";

const subtopics = [
  {
    id: "application-guideline",
    name: "Application Guideline",
    links: [
      { label: "Distribution Connection Guidelines", url: "#" },
      { label: "Service Application Procedures", url: "#" },
      { label: "Technical Requirements Manual", url: "#" },
      { label: "Safety Standards for Distribution", url: "#" },
      { label: "Connection Agreement Template", url: "#" },
    ],
  },
  {
    id: "distribution-coordination",
    name: "Distribution Coordination",
    links: [
      { label: "Distribution Network Planning", url: "#" },
      { label: "Load Management Guidelines", url: "#" },
      { label: "Distribution Maintenance Schedule", url: "#" },
      { label: "Emergency Response Procedures", url: "#" },
      { label: "Customer Service Standards", url: "#" },
      { label: "Distribution Loss Reduction Plan", url: "#" },
    ],
  },
];

export default function Distribution() {
  const [activeTab, setActiveTab] = useState("application-guideline");

  const current = subtopics.find((s) => s.id === activeTab);

  return (
    <div>
      <ImageSlider />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900">
            Distribution Division
          </h1>
          <p className="mt-2 text-gray-600">
            Managing the distribution network, ensuring reliable power delivery
            to customers and maintaining service quality across all distribution
            areas.
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
                  <CardLink
                    href={item.url}
                    icon={<DocumentArrowDownIcon className="w-4 h-4 mr-2" />}
                  >
                    Download PDF
                  </CardLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
