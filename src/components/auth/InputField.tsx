import React from 'react';

interface InputFieldProps {
  label: string;
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  isDarkMode: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  id,
  value,
  onChange,
  placeholder,
  error,
  isDarkMode
}) => {
  return (
    <div>
      <label 
        htmlFor={id} 
        className={`block text-sm font-medium ${
          isDarkMode ? 'text-gray-300' : 'text-gray-700'
        } mb-1`}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`mt-1 block w-full px-3 py-2 ${
          isDarkMode 
            ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' 
            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
        } ${
          error ? (isDarkMode ? 'border-red-500' : 'border-red-500') : ''
        } rounded-md shadow-sm focus:outline-none focus:ring-2 ${
          isDarkMode ? 'focus:ring-blue-500' : 'focus:ring-blue-500'
        } focus:border-transparent transition-colors duration-200`}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p 
          className="mt-1 text-sm text-red-500" 
          id={`${id}-error`}
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;