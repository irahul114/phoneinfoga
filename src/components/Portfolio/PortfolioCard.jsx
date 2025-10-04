import React from 'react';
import { motion } from 'framer-motion';
import { EyeIcon, HeartIcon, ShareIcon, TagIcon } from '@heroicons/react/24/outline';

const PortfolioCard = ({ project, index, featured = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`card-dark hover-lift hover-glow group cursor-pointer relative ${
        featured ? 'ring-2 ring-yellow-400/30' : ''
      }`}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute -top-2 -right-2 z-10">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
            Featured
          </div>
        </div>
      )}

      {/* Project Image */}
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
            >
              <EyeIcon className="h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
            >
              <HeartIcon className="h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
            >
              <ShareIcon className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="space-y-3">
        <div>
          <h3 className="text-white font-bold text-lg group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-white/60 text-sm">Client: {project.client}</p>
        </div>

        <p className="text-white/70 text-sm line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 bg-white/10 text-white/60 text-xs rounded-full">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between pt-3 border-t border-white/10">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-white/60">
              <HeartIcon className="h-4 w-4 mr-1" />
              <span className="text-sm">{project.likes}</span>
            </div>
            <div className="flex items-center text-white/60">
              <EyeIcon className="h-4 w-4 mr-1" />
              <span className="text-sm">{project.views}</span>
            </div>
          </div>
          <span className="px-2 py-1 bg-white/10 text-white/60 text-xs rounded-full">
            {project.type}
          </span>
        </div>
      </div>

      {/* Action Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full mt-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-400/30 text-white rounded-lg font-medium transition-all duration-300 hover:from-blue-500/30 hover:to-purple-600/30"
      >
        View Project
      </motion.button>
    </motion.div>
  );
};

export default PortfolioCard;