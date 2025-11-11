import React from 'react';

interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  role: 'Employee' | 'Admin';
  contractStatus: 'Active' | 'Pending' | 'Expired';
}

interface Props {
  employee: Employee;
  onEdit?: (employee: Employee) => void;
  onDelete?: (id: string) => void;
}

const EmployeeCard: React.FC<Props> = ({ employee, onEdit, onDelete }) => {
  const statusColors = {
    Active: 'bg-green-100 text-green-800',
    Pending: 'bg-yellow-100 text-yellow-800',
    Expired: 'bg-red-100 text-red-800',
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {employee.firstName} {employee.lastName}
          </h3>
          <p className="text-sm text-gray-600">{employee.email}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[employee.contractStatus]}`}>
          {employee.contractStatus}
        </span>
      </div>
      <div className="space-y-2 text-sm text-gray-700 mb-4">
        <p><strong>Country:</strong> {employee.country}</p>
        <p><strong>Role:</strong> {employee.role}</p>
      </div>
      <div className="flex gap-2">
        {onEdit && (
          <button onClick={() => onEdit(employee)} className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
            Edit
          </button>
        )}
        {onDelete && (
          <button onClick={() => onDelete(employee.id)} className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default EmployeeCard;
