import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";

export default function TrainingCenter() {
  const trainingMaterials = [
    {
      category: "Electrical Engineering",
      documents: [
        {
          title: "Power System Analysis - Course Material",
          description:
            "Comprehensive course material for power system analysis",
          date: "2024-01-15",
          size: "2.5 MB",
        },
        {
          title: "Electrical Safety Guidelines",
          description: "Safety guidelines for electrical work and maintenance",
          date: "2024-01-10",
          size: "1.8 MB",
        },
        {
          title: "Transformer Maintenance Manual",
          description: "Detailed manual for transformer maintenance procedures",
          date: "2024-01-05",
          size: "3.2 MB",
        },
      ],
    },
    {
      category: "Power Generation",
      documents: [
        {
          title: "Thermal Power Plant Operations",
          description: "Operations manual for thermal power plants",
          date: "2024-01-12",
          size: "4.1 MB",
        },
        {
          title: "Hydroelectric Power Systems",
          description: "Training material for hydroelectric power systems",
          date: "2024-01-08",
          size: "2.9 MB",
        },
        {
          title: "Renewable Energy Integration",
          description: "Guide for integrating renewable energy sources",
          date: "2024-01-03",
          size: "2.7 MB",
        },
      ],
    },
    {
      category: "Transmission & Distribution",
      documents: [
        {
          title: "High Voltage Transmission Systems",
          description: "Training material for high voltage transmission",
          date: "2024-01-14",
          size: "3.8 MB",
        },
        {
          title: "Distribution Network Planning",
          description: "Planning guidelines for distribution networks",
          date: "2024-01-09",
          size: "2.3 MB",
        },
        {
          title: "Substation Design Principles",
          description: "Design principles for electrical substations",
          date: "2024-01-06",
          size: "3.5 MB",
        },
      ],
    },
    {
      category: "Safety & Compliance",
      documents: [
        {
          title: "Workplace Safety Procedures",
          description: "Comprehensive workplace safety procedures",
          date: "2024-01-13",
          size: "1.9 MB",
        },
        {
          title: "Environmental Compliance Guidelines",
          description:
            "Guidelines for environmental compliance in power sector",
          date: "2024-01-07",
          size: "2.1 MB",
        },
        {
          title: "Emergency Response Protocols",
          description: "Emergency response protocols for power facilities",
          date: "2024-01-04",
          size: "2.6 MB",
        },
      ],
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Training Center (Castlereagh)
        </h1>
        <p className="mt-2 text-gray-600">
          Access training materials, course content, and educational resources
          from our Castlereagh training center.
        </p>
      </div>

      <div className="space-y-8">
        {trainingMaterials.map((category) => (
          <div
            key={category.category}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {category.category}
            </h2>
            <div className="grid gap-4">
              {category.documents.map((document, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">
                        {document.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {document.description}
                      </p>
                      <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                        <span>
                          Date: {new Date(document.date).toLocaleDateString()}
                        </span>
                        <span>Size: {document.size}</span>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                    >
                      <DocumentArrowDownIcon className="w-4 h-4 mr-2" />
                      Download PDF
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Contact Information */}
      <div className="mt-8 bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Training Center Contact
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900">
              Castlereagh Training Center
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              Ceylon Electricity Board
              <br />
              Training Branch
              <br />
              Castlereagh, Colombo
              <br />
              Sri Lanka
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Contact Details</h4>
            <p className="text-sm text-gray-600 mt-1">
              Phone: +94 11 232 0913
              <br />
              Email: training.center@ceb.lk
              <br />
              Hours: Mon-Fri 8:30 AM - 4:30 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
