import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  EyeIcon, 
  PencilIcon, 
  TrashIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const ProjectTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Website Redesign',
      client: 'TechCorp Inc.',
      assignedTo: 'Sarah Johnson',
      status: 'in-progress',
      progress: 75,
      budget: '$5,000',
      deadline: 'Dec 15, 2024',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Social Media Campaign',
      client: 'Fashion Brand',
      assignedTo: 'Mike Chen',
      status: 'review',
      progress: 90,
      budget: '$2,500',
      deadline: 'Nov 30, 2024',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'SEO Optimization',
      client: 'Local Business',
      assignedTo: 'Emily Davis',
      status: 'completed',
      progress: 100,
      budget: '$1,800',
      deadline: 'Nov 20, 2024',
      priority: 'low'
    },
    {
      id: 4,
      title: 'Product Launch Video',
      client: 'StartupXYZ',
      assignedTo: 'Alex Rodriguez',
      status: 'pending',
      progress: 25,
      budget: '$3,200',
      deadline: 'Dec 20, 2024',
      priority: 'high'
    },
    {
      id: 5,
      title: 'Brand Identity Package',
      client: 'Digital Agency',
      assignedTo: 'Sarah Johnson',
      status: 'in-progress',
      progress: 60,
      budget: '$4,500',
      deadline: 'Jan 10, 2025',
      priority: 'medium'
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.assignedTo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || project.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-400';
      case 'in-progress': return 'bg-blue-500/20 text-blue-400';
      case 'review': return 'bg-yellow-500/20 text-yellow-400';
      case 'pending': return 'bg-gray-500/20 text-gray-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-500/20 text-red-400';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'low': return 'bg-green-500/20 text-green-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="card-dark">
      {/* Table Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white font-semibold text-lg">Projects ({filteredProjects.length})</h3>
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/40" />
            <input
              type="text"
              placeholder="Search projects..."
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
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="review">Review</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-4 text-white/80 font-medium">Project</th>
              <th className="text-left py-3 px-4 text-white/80 font-medium">Client</th>
              <th className="text-left py-3 px-4 text-white/80 font-medium">Assigned To</th>
              <th className="text-left py-3 px-4 text-white/80 font-medium">Progress</th>
              <th className="text-left py-3 px-4 text-white/80 font-medium">Status</th>
              <th className="text-left py-3 px-4 text-white/80 font-medium">Priority</th>
              <th className="text-left py-3 px-4 text-white/80 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((project, index) => (
              <motion.tr
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="border-b border-white/5 hover:bg-white/5 transition-colors"
              >
                <td className="py-4 px-4">
                  <div>
                    <p className="text-white font-medium">{project.title}</p>
                    <div className="flex items-center text-white/60 text-sm">
                      <span>{project.budget}</span>
                      <span className="mx-2">•</span>
                      <span>{project.deadline}</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <p className="text-white">{project.client}</p>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white text-xs font-bold">
                        {project.assignedTo.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <span className="text-white text-sm">{project.assignedTo}</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <div className="w-16 bg-white/10 rounded-full h-2 mr-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <span className="text-white text-sm font-medium">{project.progress}%</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status.replace('-', ' ')}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
                    {project.priority}
                  </span>
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
          Showing {filteredProjects.length} of {projects.length} projects
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

export default ProjectTable;