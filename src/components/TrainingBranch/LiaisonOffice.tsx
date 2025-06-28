import { useState } from "react";
import {
  DocumentArrowDownIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";

export default function LiaisonOffice() {
  const [activeSection, setActiveSection] = useState("downloads");

  const contactDetails = [
    {
      label: "Liaison Office (External Training)",
      value: (
        <>
          Ceylon Electricity Board
          <br />
          Training Branch
          <br />
          No. 50, Sir Chittampalam A. Gardiner Mawatha
          <br />
          Colombo 02, Sri Lanka
        </>
      ),
    },
    { label: "Phone", value: "+94 11 232 0911" },
    { label: "Email", value: "liaison.training@ceb.lk" },
    {
      label: "Office Hours",
      value: (
        <>
          Monday - Friday: 8:30 AM - 4:30 PM
          <br />
          Saturday: 8:30 AM - 12:30 PM
          <br />
          Sunday: Closed
        </>
      ),
    },
    { label: "Emergency Contact", value: "+94 11 232 0912" },
  ];

  const downloads = [
    {
      title: "Details of Foreign Visits - 2024",
      description:
        "Summary and documentation of all foreign visits by CEB officials in 2024.",

      url: "#",
    },
    {
      title: "FAQs relevant to foreign visits of CEB Officials",
      description: "Frequently asked questions regarding foreign visits.",

      url: "#",
    },
    {
      title: "Application for Foreign Training",
      description:
        "Application form for CEB officials seeking foreign training.",

      url: "#",
    },
    {
      title: "Nominations for Foreign Travel",
      description: "Nomination form for CEB officials for foreign travel.",

      url: "#",
    },
    {
      title:
        "Application for Prior Permission to be Obtained by Public Officers to Travel Abroad",
      description:
        "Form for public officers to obtain prior permission for foreign travel.",

      url: "#",
    },
    {
      title: "Application for Funds for Travel Abroad",
      description: "Application form for requesting funds for foreign travel.",

      url: "#",
    },
  ];

  const sections = [
    {
      id: "downloads",
      name: "Downloads",
      icon: DocumentArrowDownIcon,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Available Downloads
          </h3>
          <div className="grid gap-4">
            {downloads.map((item, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-normal text-sm text-gray-900">
                      {item.title}
                    </h4>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-1.5 text-blue-700  rounded-md text-sm  shadow-md hover:shadow-lg bg-blue-50 hover:bg-blue-200 hover:text-blue-800 transition-all focus:outline-none focus:ring-2 focus:ring-blue-200"
                  >
                    <EyeIcon className="w-4 h-4 mr-2" />
                    View PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "treasury",
      name: "Treasury Circulars",
      icon: DocumentTextIcon,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Treasury Circulars
          </h3>
          <div className="grid gap-4">
            <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">
                    Circular No. 2024/01
                  </h4>
                  <p className="text-sm text-gray-600">
                    Training budget allocation for 2024
                  </p>
                  <p className="text-xs text-gray-500">
                    Published: January 15, 2024
                  </p>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  View PDF
                </a>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">
                    Circular No. 2023/12
                  </h4>
                  <p className="text-sm text-gray-600">
                    Updated training procedures and guidelines
                  </p>
                  <p className="text-xs text-gray-500">
                    Published: December 10, 2023
                  </p>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  View PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "contact",
      name: "Contact Us",
      icon: EnvelopeIcon,
      content: (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Contact Information
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {contactDetails.map((detail, idx) => (
              <div key={idx}>
                <h4 className="font-medium text-gray-900">{detail.label}</h4>
                <p className="text-sm text-gray-600 mt-1">{detail.value}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Liaison Office (External Training)
        </h1>
        <p className="mt-2 text-gray-600">
          Manage external training programs and coordinate with training
          institutions.
        </p>
      </div>

      {/* Sub Navigation */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeSection === section.id
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <section.icon className="inline-block w-4 h-4 mr-2" />
              {section.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        {sections.find((section) => section.id === activeSection)?.content}
      </div>
    </div>
  );
}
