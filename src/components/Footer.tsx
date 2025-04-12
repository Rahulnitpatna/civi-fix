
import React from 'react';
import { MapPin, Mail, Phone, Github, Twitter, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <MapPin className="h-6 w-6 text-civifix-blue" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">Civifix</span>
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Connecting citizens and government to build better communities through effective civic problem-solving.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-civifix-blue dark:text-gray-400 dark:hover:text-civifix-light-blue">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-civifix-blue dark:text-gray-400 dark:hover:text-civifix-light-blue">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-civifix-blue dark:text-gray-400 dark:hover:text-civifix-light-blue">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-civifix-blue dark:text-gray-400 dark:hover:text-civifix-light-blue">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-civifix-blue dark:text-gray-300 dark:hover:text-civifix-light-blue">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-civifix-blue dark:text-gray-300 dark:hover:text-civifix-light-blue">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/issues" className="text-gray-600 hover:text-civifix-blue dark:text-gray-300 dark:hover:text-civifix-light-blue">
                  Browse Issues
                </Link>
              </li>
              <li>
                <Link to="/campaigns" className="text-gray-600 hover:text-civifix-blue dark:text-gray-300 dark:hover:text-civifix-light-blue">
                  Campaigns
                </Link>
              </li>
              <li>
                <Link to="/report" className="text-gray-600 hover:text-civifix-blue dark:text-gray-300 dark:hover:text-civifix-light-blue">
                  Report an Issue
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Categories
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/issues?category=roads" className="text-gray-600 hover:text-civifix-blue dark:text-gray-300 dark:hover:text-civifix-light-blue">
                  Roads & Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/issues?category=waste" className="text-gray-600 hover:text-civifix-blue dark:text-gray-300 dark:hover:text-civifix-light-blue">
                  Garbage & Waste
                </Link>
              </li>
              <li>
                <Link to="/issues?category=water" className="text-gray-600 hover:text-civifix-blue dark:text-gray-300 dark:hover:text-civifix-light-blue">
                  Water & Drainage
                </Link>
              </li>
              <li>
                <Link to="/issues?category=electricity" className="text-gray-600 hover:text-civifix-blue dark:text-gray-300 dark:hover:text-civifix-light-blue">
                  Electricity & Lighting
                </Link>
              </li>
              <li>
                <Link to="/issues?category=public" className="text-gray-600 hover:text-civifix-blue dark:text-gray-300 dark:hover:text-civifix-light-blue">
                  Public Spaces
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-civifix-blue mr-2" />
                <span className="text-gray-600 dark:text-gray-300">
                  123 Civic Center, City Hall, NY 12345
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-civifix-blue mr-2" />
                <a href="mailto:info@civifix.org" className="text-gray-600 hover:text-civifix-blue dark:text-gray-300 dark:hover:text-civifix-light-blue">
                  info@civifix.org
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-civifix-blue mr-2" />
                <a href="tel:+1-234-567-8901" className="text-gray-600 hover:text-civifix-blue dark:text-gray-300 dark:hover:text-civifix-light-blue">
                  +1 (234) 567-8901
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-6 flex flex-col md:flex-row justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Civifix. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/terms" className="text-sm text-gray-500 hover:text-civifix-blue dark:text-gray-400 dark:hover:text-civifix-light-blue">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-sm text-gray-500 hover:text-civifix-blue dark:text-gray-400 dark:hover:text-civifix-light-blue">
              Privacy Policy
            </Link>
            <Link to="/faq" className="text-sm text-gray-500 hover:text-civifix-blue dark:text-gray-400 dark:hover:text-civifix-light-blue">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
