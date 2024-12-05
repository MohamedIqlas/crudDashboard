import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Package, Tags, Settings, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export function Sidebar() {
  const { logout } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      logout();
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative h-full">
      {/* Hamburger Menu */}
      <button
        className="p-2 bg-gray-800 text-white fixed top-4 left-4 z-50 md:hidden"
        onClick={toggleSidebar}
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4 transition-transform transform z-50 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-64'
        } md:translate-x-0 md:static`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white md:hidden"
          onClick={toggleSidebar}
        >
          <X className="h-6 w-6" />
        </button>

        <div className="space-y-6 mt-8 md:mt-0">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-2 rounded-lg ${
                isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
              }`
            }
          >
            <LayoutDashboard className="h-5 w-5" />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/dashboard/products"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-2 rounded-lg ${
                isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
              }`
            }
          >
            <Package className="h-5 w-5" />
            <span>Products</span>
          </NavLink>

          <NavLink
            to="/dashboard/brands"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-2 rounded-lg ${
                isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
              }`
            }
          >
            <Tags className="h-5 w-5" />
            <span>Brands</span>
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-2 rounded-lg ${
                isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
              }`
            }
          >
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </NavLink>

          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 p-2 rounded-lg text-red-400 hover:bg-gray-700 w-full"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}
