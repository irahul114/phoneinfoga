import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline';

const ProgressTracker = ({ project }) => {
  const milestones = [
    {
      id: 1,
      title: 'Project Planning',
      description: 'Initial consultation and project scope definition',
      status: 'completed',
      date: 'Nov 1, 2024'
    },
    {
      id: 2,
      title: 'Design Phase',
      description: 'Wireframes, mockups, and design approval',
      status: 'completed',
      date: 'Nov 15, 2024'
    },
    {
      id: 3,
      title: 'Development',
      description: 'Frontend and backend development',
      status: 'in-progress',
      date: 'Dec 1, 2024'
    },
    {
      id: 4,
      title: 'Testing & Review',
      description: 'Quality assurance and client review',
      status: 'pending',
      date: 'Dec 10, 2024'
    },
    {
      id: 5,
      title: 'Launch',
      description: 'Final deployment and go-live',
      status: 'pending',
      date: 'Dec 15, 2024'
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircleIcon className="h-5 w-5 text-green-400" />;
      case 'in-progress':
        return <ClockIcon className="h-5 w-5 text-blue-400" />;
      case 'pending':
        return <div className="w-5 h-5 border-2 border-white/30 rounded-full" />;
      default:
        return <div className="w-5 h-5 border-2 border-white/30 rounded-full" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-400';
      case 'in-progress': return 'text-blue-400';
      case 'pending': return 'text-white/60';
      default: return 'text-white/60';
    }
  };

  return (
    <div className="card-dark">
      <h3 className="text-white font-semibold mb-6">Project Timeline</h3>
      
      <div className="space-y-4">
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start space-x-4"
          >
            {/* Timeline Line */}
            <div className="flex flex-col items-center">
              <div className={`p-2 rounded-full ${
                milestone.status === 'completed' ? 'bg-green-500/20' : 
                milestone.status === 'in-progress' ? 'bg-blue-500/20' : 'bg-white/10'
              }`}>
                {getStatusIcon(milestone.status)}
              </div>
              {index < milestones.length - 1 && (
                <div className={`w-0.5 h-8 mt-2 ${
                  milestone.status === 'completed' ? 'bg-green-400' : 'bg-white/20'
                }`} />
              )}
            </div>

            {/* Milestone Content */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className={`font-semibold ${getStatusColor(milestone.status)}`}>
                  {milestone.title}
                </h4>
                <span className="text-white/60 text-sm">{milestone.date}</span>
              </div>
              <p className="text-white/70 text-sm">{milestone.description}</p>
              
              {milestone.status === 'in-progress' && (
                <div className="mt-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white/60 text-xs">Progress</span>
                    <span className="text-blue-400 text-xs font-medium">65%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-1">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-1 rounded-full transition-all duration-300"
                      style={{ width: '65%' }}
                    />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Overall Progress */}
      <div className="mt-6 pt-6 border-t border-white/10">
        <div className="flex justify-between items-center mb-2">
          <span className="text-white font-semibold">Overall Progress</span>
          <span className="text-white text-lg font-bold">75%</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: '75%' }}
          />
        </div>
        <p className="text-white/60 text-sm mt-2">
          On track to meet the December 15th deadline
        </p>
      </div>
    </div>
  );
};

export default ProgressTracker;