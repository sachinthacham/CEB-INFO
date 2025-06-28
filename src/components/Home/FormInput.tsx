import React from "react";

type FormInputProps = {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
};

const FormInput: React.FC<FormInputProps> = ({
  label,
  id,
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
}) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-normal leading-6 text-blue-900"
    >
      {label}
    </label>
    <div className="mt-2">
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="block w-full rounded-sm border border-gray-200 bg-gray-50/50 py-2 px-4 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 focus:shadow-lg transition-all duration-300 sm:text-sm sm:leading-6 hover:bg-gray-50 hover:border-gray-300"
      />
    </div>
  </div>
);

export default FormInput;
