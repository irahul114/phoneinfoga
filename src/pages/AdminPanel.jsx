import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UsersIcon, 
  BriefcaseIcon, 
  CurrencyDollarIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  ShieldCheckIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  PlusIcon
} from '@heroicons/react/24/outline';
import AdminCard from '../components/AdminPanel/AdminCard';
import UserTable from '../components/AdminPanel/UserTable';
import ProjectTable from '../components/AdminPanel/ProjectTable';
import AnalyticsChart from '../components/AdminPanel/AnalyticsChart';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      title: 'Total Users',
      value: '1,247',
      change: '+12.5%',
      trend: 'up',
      icon: UsersIcon,
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Active Projects',
      value: '89',
      change: '+8.2%',
      trend: 'up',
      icon: BriefcaseIcon,
      color: 'from-green-500 to-blue-600'
    },
    {
      title: 'Monthly Revenue',
      value: '$45,680',
      change: '+15.3%',
      trend: 'up',
      icon: CurrencyDollarIcon,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Success Rate',
      value: '96.8%',
      change: '+2.1%',
      trend: 'up',
      icon: ChartBarIcon,
      color: 'from-pink-500 to-red-600'
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: ChartBarIcon },
    { id: 'users', name: 'Users', icon: UsersIcon },
    { id: 'projects', name: 'Projects', icon: BriefcaseIcon },
    { id: 'payments', name: 'Payments', icon: CurrencyDollarIcon },
    { id: 'settings', name: 'Settings', icon: Cog6ToothIcon }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'user_signup',
      message: 'New user registered: john.doe@example.com',
      timestamp: '2 minutes ago',
      icon: '👤'
    },
    {
      id: 2,
      type: 'project_completed',
      message: 'Project "E-commerce Redesign" completed by Sarah Johnson',
      timestamp: '15 minutes ago',
      icon: '✅'
    },
    {
      id: 3,
      type: 'payment_received',
      message: 'Payment of $2,500 received from TechCorp Inc.',
      timestamp: '1 hour ago',
      icon: '💳'
    },
    {
      id: 4,
      type: 'support_ticket',
      message: 'New support ticket created by Fashion Brand',
      timestamp: '2 hours ago',
      icon: '🎫'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Admin Panel</h1>
          <p className="text-white/70">Manage your platform and monitor performance</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-white font-semibold">Admin User</p>
            <p className="text-white/60 text-sm">System Administrator</p>
          </div>
          <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center">
            <ShieldCheckIcon className="h-6 w-6 text-white" />
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => (
          <AdminCard key={stat.title} stat={stat} index={index} />
        ))}
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="glass rounded-xl p-2"
      >
        <div className="flex space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <tab.icon className="h-5 w-5" />
                <span>{tab.name}</span>
              </div>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Tab Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Analytics Chart */}
            <div className="lg:col-span-2">
              <AnalyticsChart />
            </div>

            {/* Recent Activities */}
            <div className="card-dark">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-white text-xl font-bold">Recent Activities</h2>
                <button className="text-blue-400 hover:text-blue-300 text-sm">
                  View All
                </button>
              </div>
              
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start space-x-3 p-3 glass rounded-lg"
                  >
                    <span className="text-lg">{activity.icon}</span>
                    <div className="flex-1">
                      <p className="text-white text-sm">{activity.message}</p>
                      <p className="text-white/60 text-xs">{activity.timestamp}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">User Management</h2>
              <button className="btn-primary">
                <PlusIcon className="h-5 w-5 mr-2" />
                Add User
              </button>
            </div>
            <UserTable />
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Project Management</h2>
              <button className="btn-primary">
                <PlusIcon className="h-5 w-5 mr-2" />
                Create Project
              </button>
            </div>
            <ProjectTable />
          </div>
        )}

        {activeTab === 'payments' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Payment Management</h2>
              <button className="btn-primary">
                <CurrencyDollarIcon className="h-5 w-5 mr-2" />
                Process Payment
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-dark">
                <h3 className="text-white font-semibold mb-4">Recent Payments</h3>
                <div className="space-y-3">
                  {[
                    { id: 'PAY-001', amount: '$2,500', client: 'TechCorp Inc.', date: '2 hours ago', status: 'completed' },
                    { id: 'PAY-002', amount: '$1,800', client: 'Fashion Brand', date: '1 day ago', status: 'completed' },
                    { id: 'PAY-003', amount: '$5,000', client: 'StartupXYZ', date: '2 days ago', status: 'pending' }
                  ].map((payment, index) => (
                    <div key={index} className="flex items-center justify-between p-3 glass rounded-lg">
                      <div>
                        <p className="text-white font-medium">{payment.id}</p>
                        <p className="text-white/60 text-sm">{payment.client}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-semibold">{payment.amount}</p>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          payment.status === 'completed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {payment.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-dark">
                <h3 className="text-white font-semibold mb-4">Payment Analytics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Total Revenue</span>
                    <span className="text-white font-semibold">$45,680</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">This Month</span>
                    <span className="text-green-400 font-semibold">+15.3%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Pending Payments</span>
                    <span className="text-yellow-400 font-semibold">$12,500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Success Rate</span>
                    <span className="text-green-400 font-semibold">98.2%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">System Settings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-dark">
                <h3 className="text-white font-semibold mb-4">General Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Site Maintenance</span>
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-white/20 transition-colors">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">User Registration</span>
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-500 transition-colors">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Email Notifications</span>
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-500 transition-colors">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="card-dark">
                <h3 className="text-white font-semibold mb-4">Security Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Two-Factor Auth</span>
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-500 transition-colors">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Session Timeout</span>
                    <select className="bg-white/5 border border-white/20 rounded-lg px-3 py-1 text-white text-sm">
                      <option>30 minutes</option>
                      <option>1 hour</option>
                      <option>2 hours</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Password Policy</span>
                    <select className="bg-white/5 border border-white/20 rounded-lg px-3 py-1 text-white text-sm">
                      <option>Strong</option>
                      <option>Medium</option>
                      <option>Weak</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default AdminPanel;