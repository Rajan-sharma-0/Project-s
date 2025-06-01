import React, { useState, useEffect } from 'react';

function Navbar() {
  const [dark, setDark] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <header className="flex items-center justify-between py-4 px-4 sm:py-6 sm:px-8 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h2>
      <div className="flex items-center space-x-2 sm:space-x-4">
        <button
          className="text-gray-400 hover:text-yellow-400"
          onClick={() => setDark((d) => !d)}
          aria-label="Toggle theme"
        >
          <span className="material-icons">
            {dark ? 'light_mode' : 'dark_mode'}
          </span>
        </button>
        
        <button className="text-gray-400 hover:text-white">
          <span className="material-icons">notifications</span>
        </button>
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
          r
        </div>
      </div>
    </header>
  );
}

export default Navbar;