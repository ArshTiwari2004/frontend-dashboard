import React from 'react';

const Header = () => {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold mb-2">JEE Main</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        2025 - 2009 | 173 Papers | 15825 Qs
      </p>
      <div className="flex gap-4 text-sm font-medium">
        <span className="text-blue-600 dark:text-blue-400">Physics PYQs</span>
        <span className="text-green-600 dark:text-green-400">Chemistry PYQs</span>
        <span className="text-purple-600 dark:text-purple-400">Mathematics PYQs</span>
      </div>
    </div>
  );
};

export default Header;