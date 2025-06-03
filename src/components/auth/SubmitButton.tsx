import React from 'react';

interface SubmitButtonProps {
  text: string;
  isSubmitting: boolean;
  isDarkMode: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ text, isSubmitting, isDarkMode }) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
        isDarkMode 
          ? 'bg-blue-600 hover:bg-blue-700' 
          : 'bg-blue-600 hover:bg-blue-700'
      } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
      transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]
      disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100`}
    >
      {isSubmitting ? (
        <div className="flex items-center">
          <svg 
            className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            ></circle>
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Processing...
        </div>
      ) : (
        text
      )}
    </button>
  );
};

export default SubmitButton;