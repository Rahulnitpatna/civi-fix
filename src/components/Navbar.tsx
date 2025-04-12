
import React, { useState } from 'react';
import { Bell, Menu, X, LogIn, LogOut, User, Home, MapPin, Plus, Settings, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // For demo purposes

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <MapPin className="h-8 w-8 text-civifix-blue" />
                <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">Civifix</span>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:ml-6 gap-4">
            <Link to="/" className="text-gray-600 hover:text-civifix-blue dark:text-gray-300 dark:hover:text-civifix-light-blue px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/issues" className="text-gray-600 hover:text-civifix-blue dark:text-gray-300 dark:hover:text-civifix-light-blue px-3 py-2 text-sm font-medium">
              Issues
            </Link>
            <Link to="/campaigns" className="text-gray-600 hover:text-civifix-blue dark:text-gray-300 dark:hover:text-civifix-light-blue px-3 py-2 text-sm font-medium">
              Campaigns
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-civifix-blue dark:text-gray-300 dark:hover:text-civifix-light-blue px-3 py-2 text-sm font-medium">
              About
            </Link>

            {isLoggedIn ? (
              <>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-civifix-red"></span>
                </Button>
                <Link to="/report">
                  <Button className="bg-civifix-blue hover:bg-blue-600">
                    <Plus className="mr-2 h-4 w-4" />
                    Report Issue
                  </Button>
                </Link>
                <div className="ml-3 relative">
                  <div>
                    <Button variant="ghost" size="icon" onClick={() => setIsLoggedIn(false)}>
                      <User className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <Button onClick={() => setIsLoggedIn(true)} className="bg-civifix-blue hover:bg-blue-600">
                <LogIn className="mr-2 h-4 w-4" />
                Sign In
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            {isLoggedIn && (
              <>
                <Button variant="ghost" size="icon" className="relative mr-2">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-civifix-red"></span>
                </Button>
                <Link to="/report" className="mr-2">
                  <Button size="icon" className="bg-civifix-blue hover:bg-blue-600">
                    <Plus className="h-5 w-5" />
                  </Button>
                </Link>
              </>
            )}
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-civifix-blue hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800">
              <Home className="inline-block mr-2 h-5 w-5" />
              Home
            </Link>
            <Link to="/issues" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-civifix-blue hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800">
              <List className="inline-block mr-2 h-5 w-5" />
              Issues
            </Link>
            <Link to="/campaigns" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-civifix-blue hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800">
              <Settings className="inline-block mr-2 h-5 w-5" />
              Campaigns
            </Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-civifix-blue hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800">
              <MapPin className="inline-block mr-2 h-5 w-5" />
              About
            </Link>
            
            {isLoggedIn ? (
              <Button 
                onClick={() => setIsLoggedIn(false)} 
                className="w-full justify-start px-3 py-2 rounded-md text-base font-medium text-white bg-civifix-blue hover:bg-blue-600"
              >
                <LogOut className="inline-block mr-2 h-5 w-5" />
                Sign Out
              </Button>
            ) : (
              <Button 
                onClick={() => setIsLoggedIn(true)} 
                className="w-full justify-start px-3 py-2 rounded-md text-base font-medium text-white bg-civifix-blue hover:bg-blue-600"
              >
                <LogIn className="inline-block mr-2 h-5 w-5" />
                Sign In
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
