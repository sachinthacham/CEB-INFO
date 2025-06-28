import { useState } from "react";
import ImageSlider from "../Home/ImageSlider";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";

const subtopics = [
  {
    id: "50th-anniversary",
    name: "Letter Heads - 50th Anniversary (2019)",
    links: [
      { label: "Microsoft Office Word File", url: "#" },
      { label: "Adobe Photoshop (PSD) Files", url: "#" },
      { label: "JPG File", url: "#" },
      { label: "Adobe Illustrator (AI) File", url: "#" },
    ],
  },
  {
    id: "internal-letter-heads",
    name: "Internal Letter Heads",
    links: [
      { label: "Internal Letter Head - English", url: "#" },
      { label: "Internal Letter Head - Sinhala", url: "#" },
    ],
  },
  {
    id: "external-letter-heads",
    name: "External Letter Heads",
    links: [
      { label: "External Letter Head - English", url: "#" },
      { label: "External Letter Head - Sinhala", url: "#" },
      { label: "External Letter Head - Tamil", url: "#" },
    ],
  },
  {
    id: "New CEB Corporate Branding",
    name: "New CEB Corporate Branding",
    links: [
      { label: "CEB Colour Scheme", url: "#" },
      { label: "Example of Car Sticker", url: "#" },
      { label: "Examples for Exterior Sign Boards", url: "#" },
      { label: "Examples for Interior Sign Boards", url: "#" },
      { label: "Exterior Sign Board 1", url: "#" },
      { label: "Exterior sign Board 2", url: "#" },
      { label: "Interior Sign Board 1", url: "#" },

      { label: "Interior Sign Board 2", url: "#" },
      { label: "Interior Sign Board 3", url: "#" },
      { label: "Examples for CEB Office Exterior appearance", url: "#" },
      { label: "Examples for CEB office interior appearance ", url: "#" },
      { label: "Mannar Wind Power Project Sign Board", url: "#" },
    ],
  },
  {
    id: "visiting-card",
    name: "CEB Visiting Card",
    links: [
      { label: "Adobe Illustrator artwork File", url: "#" },
      { label: "Color Scheme and Font details", url: "#" },
      { label: "Sample Visiting Card Image", url: "#" },
      { label: "Font Helvetica (If requested by Printer)", url: "#" },
      {
        label: "MS Word file to provide card holders information to Printer",
        url: "#",
      },
      {
        label: "Font Trade Gothic LT Std Bold (If requested by Printer)",
        url: "#",
      },
      {
        label: "Font Trade Gothic Lt Std CN (If requested by Printer)",
        url: "#",
      },
    ],
  },
  {
    id: "logo-formats",
    name: "CEB Standard Logo Formats",
    links: [
      {
        label:
          "CEB logo standard (Colour) - For use within MS Office documents (scalable)",
        url: "#",
      },
      {
        label:
          "CEB logo standard (Black & Whilte)  - For use within MS Office documents for Black-white Printing (scalable/openable in vector graphic applications)",
        url: "#",
      },
      {
        label:
          "CEB logo Standard (Colour)  - Picture format (would pixelate upon up-scaling)",
        url: "#",
      },
      {
        label:
          "CEB logo Standard  - Adobe Illustrator CS3 for commercial printing applications (scalable)",
        url: "#",
      },
    ],
  },
];

export default function StandardStationary() {
  const [activeTab, setActiveTab] = useState("50th-anniversary");
  const current = subtopics.find((s) => s.id === activeTab);

  return (
    <div>
      <ImageSlider />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900">
            Standard CEB Stationary
          </h1>
          <p className="mt-2 text-gray-600">
            Official templates and branding guidelines for CEB stationary.
          </p>
        </div>

        {/* Subtopic Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex flex-wrap space-x-8">
            {subtopics.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap mb-2 ${
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
                    target="_blank"
                    rel="noopener noreferrer"
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
