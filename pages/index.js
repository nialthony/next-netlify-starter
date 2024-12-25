import React, { useState, useEffect } from 'react';
import { Sun, Moon, Link2, GitHub, Twitter, Linkedin, Instagram } from 'lucide-react';

const SocialMediaLinks = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: GitHub, 
      url: 'https://github.com/yourusername',
      color: 'text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      url: 'https://twitter.com/yourusername',
      color: 'text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://linkedin.com/in/yourusername',
      color: 'text-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900'
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      url: 'https://instagram.com/yourusername',
      color: 'text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900'
    }
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="absolute top-4 right-4">
        <button 
          onClick={toggleDarkMode} 
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          {isDarkMode ? <Sun className="text-yellow-500" /> : <Moon className="text-blue-800" />}
        </button>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 dark:text-white">Your Name</h1>
        <p className="text-gray-600 dark:text-gray-300">Web Developer | Designer | Creative Thinker</p>
      </div>

      <div className="flex space-x-4">
        {socialLinks.map((link) => (
          <a 
            key={link.name}
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`
              p-3 rounded-full transition-all duration-300 transform 
              hover:scale-110 hover:shadow-lg
              ${link.color}
            `}
          >
            <link.icon size={24} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaLinks;