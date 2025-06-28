import { useState } from "react";
import {
  DocumentTextIcon,
  CalendarIcon,
  AcademicCapIcon,
  MegaphoneIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EyeIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

export default function ExaminationUnit() {
  const [activeSection, setActiveSection] = useState("results");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [examPage, setExamPage] = useState(1);

  const examinations = [
    {
      id: 1,
      title: "Qualifying Examinations for Clerks from Class III to II B",
      date: "2024-01-15",
      links: [
        { label: "Syllabus", url: "#" },
        { label: "Subject", url: "#" },
      ],
    },
    {
      id: 2,
      title: "Examinations for Promotion of Draughtman",
      date: "2024-01-10",
      links: [
        { label: "Syllabus", url: "#" },
        { label: "Subject", url: "#" },
      ],
    },
    {
      id: 3,
      title: "CEB Middle Level Technical Grades Examinations",
      date: "2024-01-08",
      links: [
        { label: "Advertisement", url: "#" },
        { label: "Syllabus", url: "#" },
        { label: "Subject", url: "#" },
      ],
    },
    {
      id: 4,
      title:
        "Competitive Examination for Recruitment of Internal Auditor Class II Grade II-2025 (Internal)",
      date: "2024-01-05",
      links: [{ label: "Paper 1", url: "#" }],
    },
    {
      id: 5,
      title:
        "2nd, 3rd, 4th Board Examination for Middle Level Technical Service - Mechanical Superintendents(2018-2024)",
      date: "2024-01-03",
      links: [
        { label: "Paper 1", url: "#" },
        { label: "Paper 2", url: "#" },
        { label: "Paper 3", url: "#" },
        { label: "Paper 4", url: "#" },
        { label: "Marking Scheme", url: "#" },
      ],
    },
    {
      id: 6,
      title:
        "2nd, 3rd & 4th Board Examinations for Middle Level Technical Service - Civil Superintendents(2018-2024)",
      date: "2024-01-01",
      links: [
        { label: "Paper 1", url: "#" },
        { label: "Paper 2", url: "#" },
      ],
    },
    {
      id: 7,
      title:
        "3rd & 4th Board Examinations for Middle Level Technical Grades - Electrical Superintdents' Service",
      date: "2023-12-28",
      links: [
        { label: "Paper 1", url: "#" },
        { label: "Paper 2", url: "#" },
        { label: "Paper 3", url: "#" },
        { label: "Marking Scheme", url: "#" },
        { label: "Syllabus", url: "#" },
      ],
    },
    {
      id: 8,
      title:
        "Promotion Examinations for CEB C all Centre Operators Grade III to II B",
      date: "2023-12-25",
      links: [
        { label: "Paper 1", url: "#" },
        { label: "Paper 2", url: "#" },
      ],
    },
    {
      id: 9,
      title:
        "Competitive Examination for Recruitment of Human Resources Officer Class II Grade II - 2024(Internal)",
      date: "2023-12-22",
      links: [
        { label: "Paper 1", url: "#" },
        { label: "Paper 2", url: "#" },
        { label: "Paper 3", url: "#" },
        { label: "Marking Scheme", url: "#" },
      ],
    },
    {
      id: 10,
      title:
        "Competitive Examination for Recruitment of System Operators (Internal) - 2024",
      date: "2023-12-20",
      links: [
        { label: "Paper 1", url: "#" },
        { label: "Paper 2", url: "#" },
        { label: "Marking Scheme", url: "#" },
      ],
    },
    {
      id: 11,
      title: "Promotional Examinations for CEB Security Guards 2021",
      date: "2023-12-18",
      links: [
        { label: "Paper 1", url: "#" },
        { label: "Paper 2", url: "#" },
        { label: "Paper 3", url: "#" },
        { label: "Paper 4", url: "#" },
        { label: "Marking Scheme", url: "#" },
        { label: "Syllabus", url: "#" },
      ],
    },
    {
      id: 12,
      title: "Efficiency Bar Examination for Security Officers - 2021",
      date: "2023-12-15",
      links: [
        { label: "Paper 1", url: "#" },
        { label: "Paper 2", url: "#" },
      ],
    },
  ];

  const examinationResults = [
    {
      id: 1,
      title: "Electrical Engineering - Final Examination 2024",
      date: "2024-03-15",
    },
    {
      id: 2,
      title: "Power Systems - Mid Term Examination 2024",
      date: "2024-02-20",
    },
    {
      id: 3,
      title: "Transmission & Distribution - Final 2024",
      date: "2024-03-10",
    },
    {
      id: 4,
      title: "Safety & Compliance - Final 2024",
      date: "2024-03-05",
    },
    {
      id: 5,
      title: "Renewable Energy - Final 2024",
      date: "2024-02-28",
    },
    {
      id: 6,
      title:
        "Competitive Examination for Recruitment of Accountant Class II Grade II (Internal) - 2024",
      date: "",
    },
    {
      id: 7,
      title:
        "Competitive Examination for Recruitment of Human Resource Officer (Internal) - 2024",
      date: "",
    },
    {
      id: 8,
      title:
        "Competitive Examination for Recruitment of System Operators (Internal) - 2024",
      date: "",
    },
    {
      id: 9,
      title:
        "Efficiency Bar Test for Data Entry Operators in Class II B - 2022",
      date: "",
    },
    {
      id: 10,
      title:
        "Practical Test for Promotion of Data Entry Operators From Class III to IIB",
      date: "",
    },
    {
      id: 11,
      title:
        "Qualifying Examination for Promotion of Clerks in Grade III to II B - 2022",
      date: "",
    },
    {
      id: 12,
      title: "Efficiency Bar Examination for Clerks in Grade IIB - 2022",
      date: "",
    },
    {
      id: 13,
      title:
        "Efficiency Bar Examination for Cashier Clerks in Grade IIB - 2022",
      date: "",
    },
    {
      id: 14,
      title:
        "Qualifying Examination for Promotion of Cashier Clerks in Class III to IIB - 2022",
      date: "",
    },
    {
      id: 15,
      title:
        "Qualifying Examination for Promotion of Store Keepers from Class III to IIB - 2021",
      date: "",
    },
    {
      id: 16,
      title: "Efficiency Bar Examination for Store Keepers in Class IIB - 2021",
      date: "",
    },
    {
      id: 17,
      title:
        "Qualifying Examination for Promotion of Store Keepers - Class I - 2021",
      date: "",
    },
    {
      id: 18,
      title:
        "Efficiency Bar Examination for Consumer Service Aids in Class IIB - 2020",
      date: "",
    },
    {
      id: 19,
      title: "Efficiency Bar Examination for Secretaries Class IIA - 2020",
      date: "",
    },
    {
      id: 20,
      title:
        "Qualifying Examination for Promotion of Secretaries Class II B to II A - 2020",
      date: "",
    },
    {
      id: 21,
      title: "Efficiency Bar Examination of Secretaries Cl II A - 2020",
      date: "",
    },
    {
      id: 22,
      title:
        "Competitive Examination for Recruitment of Store Keepers Grade III (Internal) - 2022",
      date: "",
    },
    {
      id: 23,
      title: "Typists Exam",
      date: "",
    },
    {
      id: 24,
      title:
        "Competitive Examination for Recruitment of Confidential Secretary (English) - 2024",
      date: "",
    },
    {
      id: 25,
      title:
        "4th Board Examinations for Middle Level Technical Grades Electrical Superintendent Service 2016/2023(2023)",
      date: "",
    },
  ];

  const professionalSubtopics = [
    {
      title: "Application for Professional Examination",
      links: [{ label: "Download Application PDF", url: "#" }],
    },
    {
      title: "Circulars",
      links: [
        { label: "2010/GM/11/Training", url: "#" },
        { label: "2010/GM/11/Training-Annexure 1", url: "#" },
        { label: "ES 3rd Board Past Paper - Sinhala", url: "#" },
        { label: "Syllabus for the Third Board Examination", url: "#" },
      ],
    },
  ];

  const advertisements = [
    {
      id: 1,
      title: "Examination Schedule Announcement - 2024",
      date: "2024-01-15",
      type: "Schedule",
    },
    {
      id: 2,
      title: "Registration Deadline Extension",
      date: "2024-01-10",
      type: "Deadline",
    },
    {
      id: 3,
      title: "New Examination Centers Added",
      date: "2024-01-08",
      type: "Information",
    },
    {
      id: 4,
      title: "Examination Fee Structure Update",
      date: "2024-01-05",
      type: "Fee",
    },
  ];

  const calendarEvents = [
    {
      id: 1,
      title: "Electrical Engineering Final Exam",
      date: "2024-03-15",
      type: "Examination",
    },
    {
      id: 2,
      title: "Power Systems Mid Term",
      date: "2024-02-20",
      type: "Examination",
    },
    {
      id: 3,
      title: "Registration Deadline",
      date: "2024-02-10",
      type: "Deadline",
    },
    {
      id: 4,
      title: "Professional Engineer Certification",
      date: "2024-04-15",
      type: "Examination",
    },
    {
      id: 5,
      title: "Results Publication",
      date: "2024-03-20",
      type: "Results",
    },
  ];

  const sections = [
    {
      id: "results",
      name: "Examination Results",
      icon: DocumentTextIcon,
      content: (
        <div className="space-y-4">
          <h3 className="text-md font-medium text-gray-900">
            Examination Results
          </h3>
          <div className="space-y-3">
            {examinationResults
              .slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              )
              .map((result) => (
                <div
                  key={result.id}
                  className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-normal text-sm text-gray-900">
                        {result.title}
                      </h4>
                      <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                        <span>
                          Date: {new Date(result.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-1.5 text-blue-700 bg-white rounded-md text-sm  shadow-md hover:shadow-lg hover:bg-blue-50 hover:text-blue-800 transition-all focus:outline-none focus:ring-2 focus:ring-blue-200"
                    >
                      <EyeIcon className="w-4 h-4 mr-2" />
                      View Results
                    </a>
                  </div>
                </div>
              ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <div className="text-sm text-gray-700">
              Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
              {Math.min(currentPage * itemsPerPage, examinationResults.length)}{" "}
              of {examinationResults.length} results
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeftIcon className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={
                  currentPage * itemsPerPage >= examinationResults.length
                }
                className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "examinations",
      name: "Examinations",
      icon: AcademicCapIcon,
      content: (
        <div className="space-y-4">
          <h3 className="text-md font-medium text-gray-900">Examinations</h3>
          <div className="space-y-3">
            {examinations
              .slice((examPage - 1) * itemsPerPage, examPage * itemsPerPage)
              .map((exam) => (
                <div
                  key={exam.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-5 flex flex-col gap-2"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs text-gray-400 font-mono">
                          #{exam.id}
                        </span>
                        <h4 className="font-normal text-blue-900 text-base md:text-sm">
                          {exam.title}
                        </h4>
                      </div>
                      <div className="flex items-center space-x-4 text-xs text-gray-600 mb-2">
                        <span>
                          Date:{" "}
                          {exam.date
                            ? new Date(exam.date).toLocaleDateString()
                            : "-"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {exam.links &&
                      exam.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          className="inline-flex items-center px-3 py-1.5 rounded-md bg-blue-50 text-blue-800 text-xs font-normal hover:bg-blue-100 border border-blue-100 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      ))}
                  </div>
                </div>
              ))}
          </div>
          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <div className="text-sm text-gray-700">
              Showing {(examPage - 1) * itemsPerPage + 1} to{" "}
              {Math.min(examPage * itemsPerPage, examinations.length)} of{" "}
              {examinations.length} examinations
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setExamPage(Math.max(1, examPage - 1))}
                disabled={examPage === 1}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeftIcon className="w-4 h-4" />
              </button>
              <button
                onClick={() => setExamPage(examPage + 1)}
                disabled={examPage * itemsPerPage >= examinations.length}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "professional",
      name: "Professional Examination",
      icon: AcademicCapIcon,
      content: (
        <div className="space-y-6">
          <h3 className="text-md font-medium text-gray-900 mb-2">
            Professional Examinations
          </h3>
          {professionalSubtopics.map((sub, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-5 flex flex-col gap-2"
            >
              <h4 className="font-semibold text-blue-900 text-base md:text-lg mb-2">
                {sub.title}
              </h4>
              <div className="flex flex-wrap gap-2 mt-1">
                {sub.links.map((link, lidx) => (
                  <a
                    key={lidx}
                    href={link.url}
                    className="inline-flex items-center px-3 py-1.5 rounded-md bg-blue-50 text-blue-800 text-xs font-medium hover:bg-blue-100 border border-blue-100 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "advertisements",
      name: "Advertisements",
      icon: MegaphoneIcon,
      content: (
        <div className="space-y-4">
          <h3 className="text-md font-medium text-gray-900">
            Advertisements & Announcements
          </h3>
          <div className="space-y-3">
            {advertisements.map((ad) => (
              <div
                key={ad.id}
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">{ad.title}</h4>
                    <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                      <span>
                        Date: {new Date(ad.date).toLocaleDateString()}
                      </span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                        {ad.type}
                      </span>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-1.5 text-blue-700 bg-white rounded-md text-sm shadow-md hover:shadow-lg hover:bg-blue-50 hover:text-blue-800 transition-all focus:outline-none focus:ring-2 focus:ring-blue-200"
                  >
                    <ArrowTopRightOnSquareIcon className="w-4 h-4 mr-2" />
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "calendar",
      name: "Examination Calendar",
      icon: CalendarIcon,
      content: (
        <div className="space-y-4">
          <h3 className="text-md font-medium text-gray-900">
            Examination Calendar 2024
          </h3>
          <div className="space-y-3">
            {calendarEvents.map((event) => (
              <div
                key={event.id}
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-normal text-sm text-gray-900">
                      {event.title}
                    </h4>
                    <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                      <span>
                        Date: {new Date(event.date).toLocaleDateString()}
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          event.type === "Examination"
                            ? "bg-red-100 text-red-800"
                            : event.type === "Deadline"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {event.type}
                      </span>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-1.5 text-blue-700 bg-white rounded-md text-sm  shadow-md hover:shadow-lg hover:bg-blue-50 hover:text-blue-800 transition-all focus:outline-none focus:ring-2 focus:ring-blue-200"
                  >
                    <EyeIcon className="w-4 h-4 mr-2" />
                    View Details
                  </a>
                </div>
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
        <h1 className="text-3xl font-bold text-blue-900">Examination Unit</h1>
        <p className="mt-2 text-gray-600">
          Access examination results, schedules, and professional certification
          information.
        </p>
      </div>

      {/* Sub Navigation */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8 overflow-x-auto">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
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
