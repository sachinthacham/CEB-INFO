import ImageSlider from "../Home/ImageSlider";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";

const amcsLinks = [
  {
    title: "Asset Management Policy",
    description: "Official policy document for asset management.",
    url: "#",
  },
  {
    title: "Customer Service Charter",
    description:
      "Charter outlining customer service standards and commitments.",
    url: "#",
  },
  {
    title: "Annual AM & CS Report 2023",
    description:
      "Comprehensive report on asset management and customer service for 2023.",
    url: "#",
  },
  {
    title: "Complaint Handling Procedure",
    description: "Step-by-step guide for handling customer complaints.",
    url: "#",
  },
];

export default function AMCS() {
  return (
    <div>
      <ImageSlider />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900">
            AM &amp; CS Division( OH & S Branch)
          </h1>
          <p className="mt-2 text-gray-600">
            Asset Management &amp; Customer Service Division: Ensuring optimal
            asset utilization and delivering excellent customer service.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-md font-medium text-gray-900">
            Documents &amp; Resources
          </h3>
          <div className="grid gap-4">
            {amcsLinks.map((item, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg p-4 bg-blue-50 hover:bg-blue-100 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-normal text-sm text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-600">{item.description}</p>
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
