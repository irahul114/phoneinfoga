import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ComputerDesktopIcon, 
  DevicePhoneMobileIcon, 
  ChartBarIcon, 
  VideoCameraIcon,
  PencilSquareIcon,
  SparklesIcon,
  CheckIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import ServiceCard from '../components/Services/ServiceCard';
import PricingCard from '../components/Services/PricingCard';
import AIToolsSection from '../components/Services/AIToolsSection';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const services = [
    {
      id: 1,
      title: 'Website Design & Development',
      description: 'Custom website design and development with modern UI/UX, responsive design, and SEO optimization.',
      icon: ComputerDesktopIcon,
      features: ['Custom Design', 'Responsive Layout', 'SEO Optimization', 'CMS Integration', 'Performance Optimization'],
      price: 'Starting at $2,500',
      category: 'web',
      popular: true
    },
    {
      id: 2,
      title: 'Social Media Content Creation',
      description: 'Professional social media content creation including posts, stories, and video content for all platforms.',
      icon: DevicePhoneMobileIcon,
      features: ['Content Strategy', 'Visual Design', 'Video Creation', 'Platform Optimization', 'Analytics'],
      price: 'Starting at $800/month',
      category: 'social',
      popular: false
    },
    {
      id: 3,
      title: 'Account Growth & Branding',
      description: 'Complete account growth strategy including profile optimization, bio design, and brand identity setup.',
      icon: ChartBarIcon,
      features: ['Profile Optimization', 'Bio Design', 'Brand Identity', 'Growth Strategy', 'Analytics'],
      price: 'Starting at $1,200',
      category: 'growth',
      popular: false
    },
    {
      id: 4,
      title: 'Digital Marketing Services',
      description: 'Comprehensive digital marketing including SEO, paid ads, email marketing, and promotional campaigns.',
      icon: ChartBarIcon,
      features: ['SEO Optimization', 'Paid Advertising', 'Email Marketing', 'Campaign Management', 'ROI Tracking'],
      price: 'Starting at $1,500/month',
      category: 'marketing',
      popular: true
    },
    {
      id: 5,
      title: 'Video Editing & Production',
      description: 'Professional video editing services including post-production, motion graphics, and color grading.',
      icon: VideoCameraIcon,
      features: ['Video Editing', 'Motion Graphics', 'Color Grading', 'Audio Enhancement', 'Format Optimization'],
      price: 'Starting at $100/hour',
      category: 'video',
      popular: false
    },
    {
      id: 6,
      title: 'Blogging & Content Writing',
      description: 'Professional content writing and blogging services with SEO optimization and content strategy.',
      icon: PencilSquareIcon,
      features: ['Content Writing', 'SEO Optimization', 'Content Strategy', 'Blog Management', 'Analytics'],
      price: 'Starting at $0.10/word',
      category: 'content',
      popular: false
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small creators and startups',
      features: [
        'Basic website design',
        'Social media templates',
        'Email support',
        'Basic analytics',
        '5 revisions included'
      ],
      popular: false,
      color: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses and creators',
      features: [
        'Custom website design',
        'Social media management',
        'Priority support',
        'Advanced analytics',
        'Unlimited revisions',
        'SEO optimization',
        'Content creation'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'Complete solution for large businesses',
      features: [
        'Premium website design',
        'Full digital marketing',
        '24/7 support',
        'Custom analytics',
        'Unlimited everything',
        'AI tools access',
        'Dedicated manager',
        'Custom integrations'
      ],
      popular: false,
      color: 'from-pink-500 to-red-600'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'web', name: 'Web Design' },
    { id: 'social', name: 'Social Media' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'video', name: 'Video' },
    { id: 'content', name: 'Content' }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-8"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Our <span className="gradient-text">Services</span>
        </h1>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Professional digital creator services designed to elevate your brand and grow your online presence. 
          From website design to social media management, we've got you covered.
        </p>
      </motion.div>

      {/* Service Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 mb-8"
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                : 'glass text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            {category.name}
          </button>
        ))}
      </motion.div>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredServices.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </motion.div>

      {/* AI Tools Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <AIToolsSection />
      </motion.div>

      {/* Pricing Plans */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="glass rounded-2xl p-8"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Choose Your <span className="gradient-text">Plan</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Flexible pricing plans designed to meet your needs and budget. 
            Start small and scale as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        className="text-center py-16"
      >
        <div className="glass rounded-2xl p-12">
          <div className="flex items-center justify-center mb-6">
            <SparklesIcon className="h-12 w-12 text-yellow-400 mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Get Started?
            </h2>
          </div>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who trust us with their digital presence. 
            Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">
              Start Your Project
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Schedule Consultation
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;