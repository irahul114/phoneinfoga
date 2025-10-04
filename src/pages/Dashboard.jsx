import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChartBarIcon, 
  UsersIcon, 
  CurrencyDollarIcon, 
  BriefcaseIcon,
  TrendingUpIcon,
  TrendingDownIcon,
  EyeIcon,
  HeartIcon,
  ShareIcon
} from '@heroicons/react/24/outline';
import ServiceCard from '../components/Dashboard/ServiceCard';
import AnalyticsWidget from '../components/Dashboard/AnalyticsWidget';
import RecentProjects from '../components/Dashboard/RecentProjects';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$24,580',
      change: '+12.5%',
      trend: 'up',
      icon: CurrencyDollarIcon,
      color: 'from-green-400 to-blue-500'
    },
    {
      title: 'Active Projects',
      value: '18',
      change: '+3',
      trend: 'up',
      icon: BriefcaseIcon,
      color: 'from-blue-400 to-purple-500'
    },
    {
      title: 'Total Clients',
      value: '142',
      change: '+8.2%',
      trend: 'up',
      icon: UsersIcon,
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Success Rate',
      value: '94%',
      change: '+2.1%',
      trend: 'up',
      icon: ChartBarIcon,
      color: 'from-pink-400 to-red-500'
    }
  ];

  const services = [
    {
      title: 'Website Design',
      description: 'Custom website design and development',
      icon: '🎨',
      projects: 12,
      revenue: '$8,500',
      status: 'active'
    },
    {
      title: 'Social Media',
      description: 'Content creation and account growth',
      icon: '📱',
      projects: 8,
      revenue: '$5,200',
      status: 'active'
    },
    {
      title: 'Digital Marketing',
      description: 'SEO, ads, and promotional campaigns',
      icon: '📈',
      projects: 15,
      revenue: '$12,300',
      status: 'active'
    },
    {
      title: 'Video Editing',
      description: 'Professional video editing services',
      icon: '🎬',
      projects: 6,
      revenue: '$3,800',
      status: 'active'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-8"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Welcome to{' '}
          <span className="gradient-text">Digital Creator</span>
        </h1>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          Your premium platform for professional digital creator services. 
          Transform your ideas into reality with our expert team.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => (
          <AnalyticsWidget key={stat.title} stat={stat} index={index} />
        ))}
      </motion.div>

      {/* Services Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="glass rounded-2xl p-8"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Our Services</h2>
          <button className="btn-primary">
            View All Services
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </motion.div>

      {/* Recent Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <RecentProjects />
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="glass rounded-2xl p-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="card-dark text-left group"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white text-xl">🚀</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">Start New Project</h3>
                <p className="text-white/60 text-sm">Create a new service request</p>
              </div>
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="card-dark text-left group"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white text-xl">💬</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">Contact Support</h3>
                <p className="text-white/60 text-sm">Get help from our team</p>
              </div>
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="card-dark text-left group"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white text-xl">📊</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">View Analytics</h3>
                <p className="text-white/60 text-sm">Check your performance</p>
              </div>
            </div>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;