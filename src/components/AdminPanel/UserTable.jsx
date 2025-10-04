import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  EyeIcon, 
  PencilIcon, 
  TrashIcon,
  MagnifyingGlassIcon,
  FunnelIcon
} from '@heroicons/react/24/outline';

const UserTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      company: 'TechCorp Inc.',
      plan: 'Professional',
      status: 'active',
      joinDate: '2024-01-15',
      lastActive: '2 hours ago'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      company: 'Fashion Brand',
      plan: 'Starter',
      status: 'active',
      joinDate: '2024-02-20',
      lastActive: '1 day ago'
    },
    {
      id: 3,
      name: 'Mike Chen',
      email: 'mike.chen@example.com',
      company: 'StartupXYZ',
      plan: 'Enterprise',
      status: 'pending',
      joinDate: '2024-03-10',
      lastActive: '3 days ago'
    },
    {
      id: 4,
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      company: 'Local Business',
      plan: 'Professional',
      status: 'suspended',
      joinDate: '2024-01-05',
      lastActive: '1 week ago'
    },
    {
      id: 5,
      name: 'Alex Rodriguez',
      email: 'alex.r@example.com',
      company: 'Digital Agency',
      plan: 'Professional',
      status: 'active',
      joinDate: '2024-02-28',
      lastActive: '30 minutes ago'
    }
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || user.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400';
      case 'suspended': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getPlanColor = (plan) => {
    switch (plan) {
      case 'Enterprise': return 'bg-purple-500/20 text-purple-400';
      case 'Professional': return 'bg-blue-500/20 text-blue-400';
      case 'Starter': return 'bg-green-500/20 text-green-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="card-dark">
      {/* Table Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white font-semibold text-lg">Users ({filteredUsers.length})</h3>
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/40" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-blue-400 text-sm"
            />
          </div>
          
          {/* Filter */}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-400"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="suspended">Suspended</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-4 text-white/80 font-medium">User</th>
              <th className="text-left py-3 px-4 text-white/80 font-medium">Company</th>
              <th className="text-left py-3 px-4 text-white/80 font-medium">Plan</th>
              <th className="text-left py-3 px-4 text-white/80 font-medium">Status</th>
              <th className="text-left py-3 px-4 text-white/80 font-medium">Last Active</th>
              <th className="text-left py-3 px-4 text-white/80 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="border-b border-white/5 hover:bg-white/5 transition-colors"
              >
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-bold">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-medium">{user.name}</p>
                      <p className="text-white/60 text-sm">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <p className="text-white">{user.company}</p>
                </td>
                <td className="py-4 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPlanColor(user.plan)}`}>
                    {user.plan}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                    {user.status}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <p className="text-white/80 text-sm">{user.lastActive}</p>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    <button className="p-1 text-white/60 hover:text-white hover:bg-white/10 rounded transition-colors">
                      <EyeIcon className="h-4 w-4" />
                    </button>
                    <button className="p-1 text-white/60 hover:text-white hover:bg-white/10 rounded transition-colors">
                      <PencilIcon className="h-4 w-4" />
                    </button>
                    <button className="p-1 text-white/60 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors">
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/10">
        <p className="text-white/60 text-sm">
          Showing {filteredUsers.length} of {users.length} users
        </p>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 glass text-white/60 hover:text-white hover:bg-white/10 rounded text-sm transition-colors">
            Previous
          </button>
          <button className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded text-sm">
            1
          </button>
          <button className="px-3 py-1 glass text-white/60 hover:text-white hover:bg-white/10 rounded text-sm transition-colors">
            2
          </button>
          <button className="px-3 py-1 glass text-white/60 hover:text-white hover:bg-white/10 rounded text-sm transition-colors">
            3
          </button>
          <button className="px-3 py-1 glass text-white/60 hover:text-white hover:bg-white/10 rounded text-sm transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserTable;