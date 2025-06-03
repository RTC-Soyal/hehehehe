import { useState } from 'react';
import InputField from './InputField';
import PasswordField from './PasswordField';
import SubmitButton from './SubmitButton';

interface LoginFormProps {
  isDarkMode: boolean;
}

const LoginForm = ({ isDarkMode }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let isValid = true;
    
    // Email validation
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Password validation
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log('Login with:', { email, password });
        setIsSubmitting(false);
        // Here you would handle the actual login logic
      }, 1500);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputField
        label="Email"
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        error={emailError}
        isDarkMode={isDarkMode}
      />
      
      <PasswordField
        label="Password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={passwordError}
        isDarkMode={isDarkMode}
      />
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className={`h-4 w-4 rounded border-gray-300 ${
              isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'
            }`}
          />
          <label
            htmlFor="remember-me"
            className={`ml-2 block text-sm ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Remember me
          </label>
        </div>

        <button
          type="button"
          className={`text-sm font-medium ${
            isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
          }`}
        >
          Forgot password?
        </button>
      </div>

      <SubmitButton
        text="Sign In"
        isSubmitting={isSubmitting}
        isDarkMode={isDarkMode}
      />
      
      <div className={`relative mt-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        <div className="absolute inset-0 flex items-center">
          <div className={`w-full border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className={`px-2 ${isDarkMode ? 'bg-gray-900/70' : 'bg-white/80'}`}>
            Or continue with
          </span>
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-3 gap-3">
        <button
          type="button"
          className={`flex w-full items-center justify-center rounded-md border ${
            isDarkMode 
              ? 'border-gray-700 bg-gray-800 hover:bg-gray-700' 
              : 'border-gray-300 bg-white hover:bg-gray-50'
          } py-2 px-4 text-sm font-medium shadow-sm transition-colors duration-200`}
        >
          Google
        </button>
        <button
          type="button"
          className={`flex w-full items-center justify-center rounded-md border ${
            isDarkMode 
              ? 'border-gray-700 bg-gray-800 hover:bg-gray-700' 
              : 'border-gray-300 bg-white hover:bg-gray-50'
          } py-2 px-4 text-sm font-medium shadow-sm transition-colors duration-200`}
        >
          Apple
        </button>
        <button
          type="button"
          className={`flex w-full items-center justify-center rounded-md border ${
            isDarkMode 
              ? 'border-gray-700 bg-gray-800 hover:bg-gray-700' 
              : 'border-gray-300 bg-white hover:bg-gray-50'
          } py-2 px-4 text-sm font-medium shadow-sm transition-colors duration-200`}
        >
          GitHub
        </button>
      </div>
    </form>
  );
};

export default LoginForm;