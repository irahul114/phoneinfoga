import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, StarIcon } from '@heroicons/react/24/outline';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-dark hover-lift hover-glow group cursor-pointer relative"
    >
      {/* Popular Badge */}
      {service.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            <StarIcon className="h-4 w-4 mr-1" />
            Most Popular
          </div>
        </div>
      )}

      {/* Service Icon */}
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 neon-glow">
          <service.icon className="h-8 w-8 text-white" />
        </div>
        <div>
          <h3 className="text-white font-bold text-xl group-hover:text-blue-400 transition-colors">
            {service.title}
          </h3>
          <p className="text-white/60 text-sm">{service.description}</p>
        </div>
      </div>

      {/* Features */}
      <div className="space-y-3 mb-6">
        {service.features.map((feature, idx) => (
          <div key={idx} className="flex items-center">
            <CheckIcon className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
            <span className="text-white/80 text-sm">{feature}</span>
          </div>
        ))}
      </div>

      {/* Price */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-white/60 text-sm">Starting from</span>
          <p className="text-white text-xl font-bold">{service.price}</p>
        </div>
        <div className="text-right">
          <span className="text-white/60 text-sm">Category</span>
          <p className="text-blue-400 text-sm font-medium capitalize">{service.category}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 btn-primary"
        >
          Get Started
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-3 glass text-white hover:bg-white/20 rounded-lg transition-all duration-300"
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;