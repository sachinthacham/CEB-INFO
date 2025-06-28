import { useState } from "react";
import type { FormEvent } from "react";
import FormInput from "./FormInput";

interface EmployeeSearchForm {
  name: string;
  designation: string;
  telephoneNumber: string;
  pfNumber: string;
  branch: string;
}

export default function EmployeeSearch() {
  const [formData, setFormData] = useState<EmployeeSearchForm>({
    name: "",
    designation: "",
    telephoneNumber: "",
    pfNumber: "",
    branch: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log("Search form submitted:", formData);
  };

  return (
    <div id="employee-search" className="bg-blue-50 py-16 sm:py-15">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex flex-col items-center mb-4">
            <span className="inline-block w-10 h-1 bg-blue-500 rounded-full mb-2" />

            <h2 className="text-xl font-bold leading-7 text-blue-900 mb-2">
              Employee Search
            </h2>
          </div>
          <p className="mt-2 text-lg leading-6 text-blue-800 max-w-3xl mx-auto">
            Search for CEB employees using any of the following criteria. Find
            contact information, designations, and department details quickly.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100 p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First row: 4 input fields */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-6">
              <FormInput
                label="Name"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Enter employee name"
              />
              <FormInput
                label="Designation"
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={(e) =>
                  setFormData({ ...formData, designation: e.target.value })
                }
                placeholder="Enter designation"
              />
              <FormInput
                label="Telephone Number"
                id="telephoneNumber"
                name="telephoneNumber"
                value={formData.telephoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, telephoneNumber: e.target.value })
                }
                type="tel"
                placeholder="Enter telephone number"
              />
              <FormInput
                label="PF Number"
                id="pfNumber"
                name="pfNumber"
                value={formData.pfNumber}
                onChange={(e) =>
                  setFormData({ ...formData, pfNumber: e.target.value })
                }
                placeholder="Enter PF number"
              />
            </div>

            {/* Second row: Branch and Submit button */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-6">
              <FormInput
                label="Branch"
                id="branch"
                name="branch"
                value={formData.branch}
                onChange={(e) =>
                  setFormData({ ...formData, branch: e.target.value })
                }
                placeholder="Enter branch"
              />
              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-1/2 rounded-sm border-2 border-blue-700 bg-transparent text-blue-700 px-6 py-2 text-md font-semibold shadow-sm hover:bg-blue-50 hover:border-blue-800 hover:text-blue-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200 transition-all duration-300"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
