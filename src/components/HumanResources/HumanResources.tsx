import { useState } from "react";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import ImageSlider from "../Home/ImageSlider";
import Pagination from "./Pagination";

const pdfLinks = Array.from({ length: 37 }, (_, i) => ({
  title: `HR Document ${i + 1}`,
  description: `Description for HR Document ${i + 1}.`, // You can update or remove this if not needed
  url: `#`, // Replace with actual PDF URLs
}));

const ITEMS_PER_PAGE = 10;

export default function HumanResources() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(pdfLinks.length / ITEMS_PER_PAGE);

  const startIdx = (page - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;
  const currentLinks = pdfLinks.slice(startIdx, endIdx);

  return (
    <div className="bg-white min-h-screen">
      <ImageSlider />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">
          Human Resources
        </h1>
        <p className="mb-8 text-gray-600">
          Browse and download HR-related documents. Use the pagination below to
          navigate through all available files.
        </p>
        <div className="space-y-4">
          <h3 className="text-md font-medium text-gray-900 mb-2">
            Documents & Reports
          </h3>
          <div className="grid gap-4">
            {currentLinks.map((item, idx) => (
              <div
                key={startIdx + idx}
                className="border border-gray-200 rounded-lg p-4 bg-blue-50 hover:bg-blue-100 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-normal text-sm text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-600 mt-1">
                      {item.description}
                    </p>
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
        {/* Pagination Controls */}
        <div className="flex justify-end">
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      </div>
    </div>
  );
}
