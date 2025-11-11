import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white p-6 shadow-lg">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">GlobalWork</h2>
        <p className="text-xs text-gray-400 mt-1">HR Portal</p>
      </div>
      <nav className="space-y-4">
        <Link to="/dashboard" className="block px-4 py-2 rounded hover:bg-gray-800 transition">
          📊 Dashboard
        </Link>
        <Link to="/employees" className="block px-4 py-2 rounded hover:bg-gray-800 transition">
          👥 Employees
        </Link>
        <Link to="/payroll" className="block px-4 py-2 rounded hover:bg-gray-800 transition">
          💰 Payroll
        </Link>
      </nav>
      <div className="mt-12 pt-6 border-t border-gray-700 text-xs text-gray-400">
        <p>&copy; 2025 GlobalWork</p>
      </div>
    </aside>
  );
};

export default Sidebar;
