import ImageSlider from "../Home/ImageSlider";
import {
  DocumentArrowDownIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

const providentFundLinks = [
  { title: "Housing Loan Application", url: "#" },
  { title: "Housing Loan - Instructions", url: "#" },
  { title: "Marriage and Education Loan Application", url: "#" },
  { title: "Marriage and Education Loan - Instructions", url: "#" },
];

export default function ProvidentFund() {
  return (
    <div>
      <ImageSlider />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900">Provident Fund</h1>
          <p className="mt-2 text-gray-600">
            Access forms, guides, and important documents related to the CEB
            Provident Fund.
          </p>
        </div>

        <div className="space-y-4">
          {/* External Link */}
          <div className="mb-6 text-center">
            <a
              href="http://epf.ceb/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg font-semibold text-blue-600 hover:text-blue-800 hover:underline transition-colors"
            >
              <span>Click Here To View Your Balance</span>
              <ArrowTopRightOnSquareIcon className="w-5 h-5" />
            </a>
          </div>

          <h3 className="text-md font-medium text-gray-900">
            Documents & Forms
          </h3>
          <div className="grid gap-4">
            {providentFundLinks.map((item, idx) => (
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
