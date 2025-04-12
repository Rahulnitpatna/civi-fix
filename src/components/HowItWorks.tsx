
import React from 'react';
import { Flag, ThumbsUp, Clipboard, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Flag className="h-8 w-8 text-civifix-blue" />,
      title: 'Report an Issue',
      description: 'Take a photo of a civic problem, add a description and your location is automatically detected.',
    },
    {
      icon: <ThumbsUp className="h-8 w-8 text-civifix-blue" />,
      title: 'Community Verification',
      description: 'Other citizens in your area can view and verify the issue by upvoting it.',
    },
    {
      icon: <Clipboard className="h-8 w-8 text-civifix-blue" />,
      title: 'Official Notification',
      description: 'Once verified, the relevant government department is automatically notified about the issue.',
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-civifix-blue" />,
      title: 'Track Resolution',
      description: 'Follow the progress as officials address the problem and mark it as resolved.',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How Civifix Works</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A simple, four-step process to address and resolve civic issues in your community.
          </p>
        </div>
        
        <div className="mt-16">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white dark:bg-gray-900 px-4 text-sm text-gray-500 dark:text-gray-400">
                Simple Process
              </span>
            </div>
          </div>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 h-full">
                  <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <span className="absolute top-4 right-4 inline-flex items-center justify-center h-6 w-6 rounded-full bg-civifix-blue text-white text-xs font-medium">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
                
                {index !== steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 dark:text-gray-600">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
