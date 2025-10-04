import React from 'react';
import { motion } from 'framer-motion';

const FilterButton = ({ filter, isActive, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
        isActive
          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
          : 'glass text-white/70 hover:text-white hover:bg-white/10'
      }`}
    >
      <span className="text-sm">{filter.name}</span>
      <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
        isActive 
          ? 'bg-white/20 text-white' 
          : 'bg-white/10 text-white/60'
      }`}>
        {filter.count}
      </span>
    </motion.button>
  );
};

export default FilterButton;