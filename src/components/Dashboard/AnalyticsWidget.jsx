import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUpIcon, TrendingDownIcon } from '@heroicons/react/24/outline';

const AnalyticsWidget = ({ stat, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card hover-lift hover-glow"
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-white/60 text-sm font-medium">{stat.title}</p>
          <p className="text-white text-2xl font-bold mt-1">{stat.value}</p>
          <div className="flex items-center mt-2">
            {stat.trend === 'up' ? (
              <TrendingUpIcon className="h-4 w-4 text-green-400 mr-1" />
            ) : (
              <TrendingDownIcon className="h-4 w-4 text-red-400 mr-1" />
            )}
            <span className={`text-sm font-medium ${
              stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
            }`}>
              {stat.change}
            </span>
            <span className="text-white/40 text-sm ml-1">vs last month</span>
          </div>
        </div>
        <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center neon-glow`}>
          <stat.icon className="h-8 w-8 text-white" />
        </div>
      </div>
    </motion.div>
  );
};

export default AnalyticsWidget;