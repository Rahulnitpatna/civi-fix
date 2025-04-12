
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Issues = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-6">Browse Issues</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            This page will show all reported issues with advanced filtering and search options.
          </p>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <p className="text-center text-gray-500 dark:text-gray-400">
              Coming soon: Advanced filtering, search, and map view of all reported civic issues.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Issues;
