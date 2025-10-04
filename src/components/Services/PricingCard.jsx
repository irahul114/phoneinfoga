import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, StarIcon } from '@heroicons/react/24/outline';

const PricingCard = ({ plan, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`card-dark hover-lift hover-glow relative ${
        plan.popular ? 'ring-2 ring-purple-500/50 scale-105' : ''
      }`}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium">
            <StarIcon className="h-4 w-4 mr-1" />
            Most Popular
          </div>
        </div>
      )}

      {/* Plan Header */}
      <div className="text-center mb-8">
        <h3 className="text-white text-2xl font-bold mb-2">{plan.name}</h3>
        <p className="text-white/60 text-sm mb-4">{plan.description}</p>
        <div className="flex items-baseline justify-center">
          <span className="text-white text-4xl font-bold">{plan.price}</span>
          <span className="text-white/60 text-lg ml-1">{plan.period}</span>
        </div>
      </div>

      {/* Features */}
      <div className="space-y-4 mb-8">
        {plan.features.map((feature, idx) => (
          <div key={idx} className="flex items-center">
            <CheckIcon className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
            <span className="text-white/80 text-sm">{feature}</span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
          plan.popular
            ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/25'
            : 'glass text-white hover:bg-white/20'
        }`}
      >
        {plan.popular ? 'Get Started Now' : 'Choose Plan'}
      </motion.button>

      {/* Additional Info */}
      <div className="text-center mt-4">
        <p className="text-white/40 text-xs">
          {plan.popular ? 'Cancel anytime • 30-day money-back guarantee' : 'Cancel anytime'}
        </p>
      </div>
    </motion.div>
  );
};

export default PricingCard;