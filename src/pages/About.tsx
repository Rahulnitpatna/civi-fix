
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-6">About Civifix</h1>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Civifix aims to bridge the gap between citizens and government officials by providing a platform for reporting, tracking, and resolving civic issues. We believe that by enabling better communication and transparency, we can create more livable and responsive communities.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">How We Help</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our platform allows citizens to easily report civic problems such as potholes, garbage dumping, broken streetlights, and more. These issues are verified by the community through a voting system and then forwarded to the relevant government departments for action. Throughout the process, citizens can track the status of their reported issues, promoting transparency and accountability.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">The Team</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Civifix was founded by a team of civic-minded technologists who wanted to create a tool that empowers communities to take an active role in improving their local environment. We work closely with government agencies and community organizations to ensure our platform meets the needs of all stakeholders.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
