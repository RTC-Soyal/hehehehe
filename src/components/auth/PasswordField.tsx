import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface PasswordFieldProps {
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  isDarkMode: boolean;
}

const PasswordField = ({
  label,
  id,
  value,
  onChange,
  error,
  isDarkMode
}: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          className={`mt-1 block w-full px-3 py-2 ${
            isDarkMode 
              ? 'bg-gray-800 border-gray-700 text-white' 
              : 'bg-white border-gray-300 text-gray-900'
          } ${
            error ? (isDarkMode ? 'border-red-500' : 'border-red-500') : ''
          } rounded-md shadow-sm focus:outline-none focus:ring-2 ${
            isDarkMode ? 'focus:ring-blue-500' : 'focus:ring-blue-500'
          } focus:border-transparent transition-colors duration-200 pr-10`}
          aria-describedby={error ? `${id}-error` : undefined}
        />
        <button
          type="button"
          className={`absolute inset-y-0 right-0 pr-3 flex items-center ${
            isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'
          } transition-colors duration-200`}
          onClick={togglePasswordVisibility}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
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

export default PasswordField;