import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-dark hover-lift hover-glow group cursor-pointer"
    >
      <div className="flex items-center mb-4">
        <div className="text-3xl mr-3">{service.icon}</div>
        <div>
          <h3 className="text-white font-semibold text-lg">{service.title}</h3>
          <p className="text-white/60 text-sm">{service.description}</p>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-white/60 text-sm">Active Projects</span>
          <span className="text-white font-semibold">{service.projects}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-white/60 text-sm">Revenue</span>
          <span className="text-green-400 font-semibold">{service.revenue}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-white/60 text-sm">Status</span>
          <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
            {service.status}
          </span>
        </div>
      </div>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full mt-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-400/30 text-white rounded-lg font-medium transition-all duration-300 hover:from-blue-500/30 hover:to-purple-600/30"
      >
        View Details
      </motion.button>
    </motion.div>
  );
};

export default ServiceCard;