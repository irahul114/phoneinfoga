import React from 'react';
import { motion } from 'framer-motion';
import { 
  ClockIcon, 
  UserIcon, 
  CurrencyDollarIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const ProjectCard = ({ project, index }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-500/20';
      case 'in-progress': return 'text-blue-400 bg-blue-500/20';
      case 'review': return 'text-yellow-400 bg-yellow-500/20';
      case 'pending': return 'text-gray-400 bg-gray-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-500/20';
      case 'medium': return 'text-yellow-400 bg-yellow-500/20';
      case 'low': return 'text-green-400 bg-green-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-dark hover-lift hover-glow group cursor-pointer"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-white font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-white/70 text-sm mb-3">{project.description}</p>
        </div>
        <div className="flex flex-col space-y-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
            {project.status.replace('-', ' ')}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
            {project.priority} priority
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-white/60 text-sm">Progress</span>
          <span className="text-white text-sm font-medium">{project.progress}%</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>

      {/* Project Details */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-white/60">
            <ClockIcon className="h-4 w-4 mr-2" />
            <span className="text-sm">Deadline</span>
          </div>
          <span className="text-white text-sm font-medium">{project.deadline}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-white/60">
            <UserIcon className="h-4 w-4 mr-2" />
            <span className="text-sm">Assigned to</span>
          </div>
          <span className="text-white text-sm font-medium">{project.assignedTo}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-white/60">
            <CurrencyDollarIcon className="h-4 w-4 mr-2" />
            <span className="text-sm">Budget</span>
          </div>
          <span className="text-white text-sm font-medium">{project.budget}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-white/60 text-sm">Last update</span>
          <span className="text-white text-sm font-medium">{project.lastUpdate}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 btn-primary text-sm px-4 py-2"
        >
          <EyeIcon className="h-4 w-4 mr-2" />
          View Details
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 glass text-white hover:bg-white/20 rounded-lg transition-all duration-300"
        >
          <ChatBubbleLeftRightIcon className="h-4 w-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;