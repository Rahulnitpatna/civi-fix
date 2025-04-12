
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, AlertTriangle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/30 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <div>
              <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/50 px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-200">
                Citizen-powered civic engagement
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Report civic issues.</span>
              <span className="block text-civifix-blue">Track real solutions.</span>
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-300 sm:mt-5 sm:text-lg">
              Civifix connects citizens and government officials to resolve civic problems efficiently. Report potholes, garbage dumping, broken streetlights, and more. Make your community better, together.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/report">
                <Button size="lg" className="w-full sm:w-auto bg-civifix-blue hover:bg-blue-600">
                  Report an Issue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/issues">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Browse Issues
                </Button>
              </Link>
            </div>
            
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <MapPin className="mr-1.5 h-5 w-5 flex-shrink-0 text-civifix-green" />
                <span>Location-based</span>
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <AlertTriangle className="mr-1.5 h-5 w-5 flex-shrink-0 text-civifix-orange" />
                <span>Real-time alerts</span>
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <CheckCircle className="mr-1.5 h-5 w-5 flex-shrink-0 text-civifix-blue" />
                <span>Transparent tracking</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="relative mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="h-48 bg-blue-500 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-civifix-blue to-blue-400"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <MapPin className="h-16 w-16 opacity-75" />
                </div>
              </div>
              <div className="p-4 space-y-4">
                <div className="flex gap-2">
                  {['Potholes', 'Garbage', 'Streetlights', 'Water', 'All Issues'].map((category, index) => (
                    <span 
                      key={index} 
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        index === 0
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
                      }`}
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <div className="space-y-3">
                  {[
                    { title: 'Pothole on Main Street', status: 'Reported', votes: 8 },
                    { title: 'Broken streetlight at Park Avenue', status: 'In Progress', votes: 12 },
                    { title: 'Garbage dump near City Mall', status: 'Resolved', votes: 23 }
                  ].map((issue, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-100">{issue.title}</p>
                        <span className={`issue-status-badge ${
                          issue.status === 'Reported' ? 'issue-status-badge-reported' :
                          issue.status === 'In Progress' ? 'issue-status-badge-in-progress' :
                          'issue-status-badge-resolved'
                        }`}>
                          {issue.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <span className="text-civifix-blue font-medium">{issue.votes}</span>
                        <span className="text-gray-500 dark:text-gray-400">votes</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="absolute -right-4 -bottom-4 h-24 w-24 bg-civifix-green/20 rounded-full blur-2xl"></div>
            <div className="absolute -left-8 -top-8 h-32 w-32 bg-civifix-blue/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
