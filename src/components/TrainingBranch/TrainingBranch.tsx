import { useState, useEffect } from "react";
import { Link, Routes, Route, useLocation, Navigate } from "react-router-dom";
import LiaisonOffice from "../TrainingBranch/LiaisonOffice";
import TrainingCenter from "../TrainingBranch/TrainingCenter";
import ExaminationUnit from "./ExaminationUnit";
import ImageSlider from "../Home/ImageSlider";

export default function TrainingBranch() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(() => {
    const path = location.pathname;
    if (path.includes("/liaison")) return "liaison";
    if (path.includes("/training-center")) return "training-center";
    if (path.includes("/examination")) return "examination";
    return "liaison"; // default
  });

  // Update active tab when location changes
  useEffect(() => {
    const path = location.pathname;
    if (path.includes("/liaison")) setActiveTab("liaison");
    else if (path.includes("/training-center")) setActiveTab("training-center");
    else if (path.includes("/examination")) setActiveTab("examination");
    else setActiveTab("liaison");
  }, [location.pathname]);

  const tabs = [
    {
      id: "liaison",
      name: "Liaison Office (External Training)",
      href: "liaison",
    },
    {
      id: "training-center",
      name: "Training Center (Castlereagh)",
      href: "training-center",
    },
    {
      id: "examination",
      name: "Examination Unit",
      href: "examination",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Image Slider */}
      <ImageSlider />

      {/* Sub Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                to={tab.href}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="/" element={<Navigate to="liaison" replace />} />
          <Route path="liaison" element={<LiaisonOffice />} />
          <Route path="training-center" element={<TrainingCenter />} />
          <Route path="examination" element={<ExaminationUnit />} />
        </Routes>
      </div>
    </div>
  );
}
