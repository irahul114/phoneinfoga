import React from 'react';
import { motion } from 'framer-motion';
import { EyeIcon, HeartIcon, ShareIcon } from '@heroicons/react/24/outline';

const RecentProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website Redesign',
      client: 'TechCorp Inc.',
      status: 'In Progress',
      progress: 75,
      deadline: 'Dec 15, 2024',
      type: 'Website Design',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Social Media Campaign',
      client: 'Fashion Brand',
      status: 'Completed',
      progress: 100,
      deadline: 'Nov 30, 2024',
      type: 'Social Media',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Product Launch Video',
      client: 'StartupXYZ',
      status: 'Review',
      progress: 90,
      deadline: 'Dec 20, 2024',
      type: 'Video Editing',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'SEO Optimization',
      client: 'Local Business',
      status: 'Planning',
      progress: 25,
      deadline: 'Jan 10, 2025',
      type: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-500/20 text-green-400';
      case 'In Progress': return 'bg-blue-500/20 text-blue-400';
      case 'Review': return 'bg-yellow-500/20 text-yellow-400';
      case 'Planning': return 'bg-purple-500/20 text-purple-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="glass rounded-2xl p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Recent Projects</h2>
        <button className="btn-secondary">
          View All Projects
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card-dark hover-lift hover-glow group cursor-pointer"
          >
            {/* Project Image */}
            <div className="relative mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <span className="px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
                  {project.type}
                </span>
              </div>
            </div>
            
            {/* Project Info */}
            <div className="space-y-3">
              <div>
                <h3 className="text-white font-semibold text-lg group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm">Client: {project.client}</p>
              </div>
              
              {/* Progress Bar */}
              <div>
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
              
              {/* Deadline */}
              <div className="flex justify-between items-center">
                <span className="text-white/60 text-sm">Deadline</span>
                <span className="text-white text-sm font-medium">{project.deadline}</span>
              </div>
              
              {/* Actions */}
              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center text-white/60 hover:text-white transition-colors">
                    <EyeIcon className="h-4 w-4 mr-1" />
                    <span className="text-xs">View</span>
                  </button>
                  <button className="flex items-center text-white/60 hover:text-white transition-colors">
                    <HeartIcon className="h-4 w-4 mr-1" />
                    <span className="text-xs">Like</span>
                  </button>
                  <button className="flex items-center text-white/60 hover:text-white transition-colors">
                    <ShareIcon className="h-4 w-4 mr-1" />
                    <span className="text-xs">Share</span>
                  </button>
                </div>
                <button className="btn-primary text-sm px-4 py-2">
                  Manage
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;