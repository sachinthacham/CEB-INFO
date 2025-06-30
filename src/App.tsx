import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import ImageSlider from "./components/Home/ImageSlider";
import EmployeeSearch from "./components/Home/EmployeeSearch";
import FAQ from "./components/Home/FAQ";
import NewsEvents from "./components/Home/NewsEvents";
import QuickLinks from "./components/Home/QuickLinks";
import TrainingBranch from "./components/TrainingBranch/TrainingBranch";
import Generation from "./components/Generation/Generation";
import Transmission from "./components/Transmission/Transmission";
import Distribution from "./components/Distribution/Distribution";
import AMCS from "./components/AMCS/AMCS";
import CS from "./components/CS/CS";
import HumanResources from "./components/HumanResources/HumanResources";
import BillCalculator from "./components/BillCalculator/BillCalculator";
import StandardStationary from "./components/StandardStationary/StandardStationary";
import ProvidentFund from "./components/ProvidentFund/ProvidentFund";
import OrdinarySupplyTariff from "./components/OrdinarySupplyTariff/OrdinarySupplyTariff";
import Chatbot from "./components/Chatbot/Chatbot";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <ImageSlider />
                <div className="mt-12 mx-0 w-full px-4 sm:px-6 lg:px-8 py-2 bg-blue-50 ">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 p-8">
                    <QuickLinks />
                  </div>
                </div>
                <NewsEvents />
                <EmployeeSearch />
              </main>
            }
          />
          <Route path="/generation" element={<Generation />} />
          <Route path="/transmission" element={<Transmission />} />
          <Route path="/distribution" element={<Distribution />} />
          <Route path="/am-cs" element={<AMCS />} />
          <Route path="/cs-division" element={<CS />} />
          <Route path="/training-branch/*" element={<TrainingBranch />} />
          <Route path="/human-resources" element={<HumanResources />} />
          <Route path="/bill-calculator" element={<BillCalculator />} />
          <Route path="/standard-stationary" element={<StandardStationary />} />
          <Route path="/provident-fund" element={<ProvidentFund />} />
          <Route
            path="/ordinary-supply-tariff"
            element={<OrdinarySupplyTariff />}
          />
        </Routes>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
