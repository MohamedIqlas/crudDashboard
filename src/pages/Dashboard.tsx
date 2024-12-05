import React from 'react';
import { useAuth } from '../context/AuthContext';

export function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome back, {user?.name}!</h2>
        <p className="text-gray-600">This is your sample dashboard where you can manage your products and brands.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Products Overview</h3>
          <p className="text-3xl font-bold text-indigo-600">10</p>
          <p className="text-sm text-gray-500">Total Products</p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Brands Overview</h3>
          <p className="text-3xl font-bold text-indigo-600">5</p>
          <p className="text-sm text-gray-500">Active Brands</p>
        </div>

        {/* <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Recent Activity</h3>
          <ul className="space-y-2">
            <li className="text-sm text-gray-600">Added new product "Example Product"</li>
            <li className="text-sm text-gray-600">Updated brand "Example Brand"</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}