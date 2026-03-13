
import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="w-12 h-12 rounded-full animate-spin border-4 border-solid border-blue-500 border-t-transparent"></div>
      <p className="mt-4 text-gray-600 dark:text-gray-300">Génération du rapport en cours...</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">Cela peut prendre quelques instants.</p>
    </div>
  );
};

export default Spinner;
