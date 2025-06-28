import ImageSlider from "../Home/ImageSlider";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";

const tariffLinks = [
  { title: "Domestic Purpose", url: "#" },
  { title: "Non Domestic Purpose", url: "#" },
];

export default function OrdinarySupplyTariff() {
  return (
    <div>
      <ImageSlider />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900">
            Ordinary Supply Tariff (With Effect From 16th September 2014)
          </h1>
          <p className="mt-2 text-gray-600">
            Information on current and historical electricity tariffs.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-md font-medium text-gray-900">
            Tariff Documents
          </h3>
          <div className="grid gap-4">
            {tariffLinks.map((item, idx) => (
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
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DocumentArrowDownIcon className="w-4 h-4 mr-2" />
                    View PDF
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
