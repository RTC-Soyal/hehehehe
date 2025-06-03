import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check system preference for dark mode
  useEffect(() => {
    const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModePreference.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    darkModePreference.addEventListener('change', handleChange);
    return () => darkModePreference.removeEventListener('change', handleChange);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen w-full flex items-center justify-center p-4 transition-colors duration-300 ${
      isDarkMode ? 'bg-gradient-to-br from-gray-900 to-slate-800' : 'bg-gradient-to-br from-blue-50 to-indigo-100'
    }`}>
      {/* Dark mode toggle */}
      <button 
        onClick={toggleDarkMode}
        className={`absolute top-4 right-4 p-2 rounded-full ${
          isDarkMode ? 'bg-gray-800 text-yellow-300' : 'bg-white text-gray-800'
        } shadow-lg hover:scale-110 transition-all duration-200`}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Auth container with glassmorphism */}
      <div className={`w-full max-w-md p-8 rounded-2xl shadow-xl backdrop-blur-sm ${
        isDarkMode 
          ? 'bg-gray-900/70 text-white' 
          : 'bg-white/80 text-gray-800'
      } transition-all duration-300`}>
        <div className="text-center mb-8">
          <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {isLogin ? 'Sign in to continue' : 'Sign up to get started'}
          </p>
        </div>

        {isLogin ? (
          <LoginForm isDarkMode={isDarkMode} />
        ) : (
          <SignupForm isDarkMode={isDarkMode} />
        )}

        <div className="mt-6 text-center">
          <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className={`ml-2 font-medium ${
                isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
              } transition-colors duration-200 focus:outline-none focus:underline`}
            >
              {isLogin ? 'Sign up' : 'Log in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;