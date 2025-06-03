import { useState } from 'react';
import InputField from './InputField';
import PasswordField from './PasswordField';
import SubmitButton from './SubmitButton';

interface SignupFormProps {
  isDarkMode: boolean;
}

const SignupForm = ({ isDarkMode }: SignupFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [termsError, setTermsError] = useState('');

  const validateForm = () => {
    let isValid = true;
    
    // Name validation
    if (!name) {
      setNameError('Name is required');
      isValid = false;
    } else {
      setNameError('');
    }
    
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
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      isValid = false;
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      setPasswordError('Password must include uppercase, lowercase, and numbers');
      isValid = false;
    } else {
      setPasswordError('');
    }

    // Confirm password validation
    if (!confirmPassword) {
      setConfirmPasswordError('Please confirm your password');
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    } else {
      setConfirmPasswordError('');
    }
    
    // Terms agreement validation
    if (!agreedToTerms) {
      setTermsError('You must agree to the terms and conditions');
      isValid = false;
    } else {
      setTermsError('');
    }

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log('Sign up with:', { name, email, password });
        setIsSubmitting(false);
        // Here you would handle the actual signup logic
      }, 1500);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <InputField
        label="Full Name"
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="John Doe"
        error={nameError}
        isDarkMode={isDarkMode}
      />

      <InputField
        label="Email"
        type="email"
        id="signup-email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        error={emailError}
        isDarkMode={isDarkMode}
      />
      
      <PasswordField
        label="Password"
        id="signup-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={passwordError}
        isDarkMode={isDarkMode}
      />
      
      <PasswordField
        label="Confirm Password"
        id="confirm-password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        error={confirmPasswordError}
        isDarkMode={isDarkMode}
      />
      
      <div className="mt-4">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className={`h-4 w-4 rounded border-gray-300 ${
                isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'
              } transition-colors duration-200`}
            />
          </div>
          <div className="ml-3 text-sm">
            <label 
              htmlFor="terms" 
              className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}
            >
              I agree to the 
              <a href="#" className={`font-medium ${
                isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
              }`}> Terms of Service </a> 
              and 
              <a href="#" className={`font-medium ${
                isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
              }`}> Privacy Policy</a>
            </label>
            {termsError && <p className="mt-1 text-red-500 text-xs">{termsError}</p>}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <SubmitButton 
          text="Create Account" 
          isSubmitting={isSubmitting}
          isDarkMode={isDarkMode}
        />
      </div>
      
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

export default SignupForm;