import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Search, Bell, User, X } from 'lucide-react';

export function Navbar() {
  const { user } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="bg-white shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Search Bar (Full on Desktop, Icon on Mobile) */}
          <div className="flex flex-1 justify-center lg:justify-start">
            <div className="hidden lg:block w-full max-w-md">
              {/* Full Search Bar for Desktop */}
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Search..."
                  type="search"
                />
              </div>
            </div>

            {/* Search Icon for Mobile */}
            <button
              onClick={toggleSearch}
              className="lg:hidden p-2 rounded-full text-gray-400 hover:text-gray-500"
            >
              {isSearchOpen ? <X className="h-6 w-6" /> : <Search className="h-6 w-6" />}
            </button>
          </div>

          {/* Notification and User Icons */}
          <div className="flex items-center space-x-4">
            {/* Notification Icon (Always Visible) */}
            <button className="p-2 rounded-full text-gray-400 hover:text-gray-500">
              <Bell className="h-6 w-6" />
            </button>

            {/* User Profile Menu */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="sr-only">Open user menu</span>
                <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                  {user?.name?.charAt(0).toUpperCase() || <User className="h-5 w-5" />}
                </div>
              </button>
              {isProfileOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <div className="px-4 py-2 text-sm text-gray-700 border-b">
                      <p className="font-medium">{user?.name}</p>
                      <p className="text-gray-500">{user?.email}</p>
                    </div>
                    <a
                      href="#profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Your Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Expandable Search Bar for Mobile */}
        {isSearchOpen && (
          <div className="lg:hidden mt-4">
            <label htmlFor="mobile-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="mobile-search"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Search..."
                type="search"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
