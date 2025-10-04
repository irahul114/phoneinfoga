import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  EyeIcon,
  DownloadIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import ProjectCard from '../components/ClientDashboard/ProjectCard';
import MessageThread from '../components/ClientDashboard/MessageThread';
import ProgressTracker from '../components/ClientDashboard/ProgressTracker';

const ClientDashboard = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Website Redesign',
      status: 'in-progress',
      progress: 75,
      deadline: 'Dec 15, 2024',
      assignedTo: 'Sarah Johnson',
      lastUpdate: '2 hours ago',
      priority: 'high',
      budget: '$5,000',
      description: 'Complete redesign of the e-commerce platform with modern UI/UX'
    },
    {
      id: 2,
      title: 'Social Media Campaign',
      status: 'review',
      progress: 90,
      deadline: 'Nov 30, 2024',
      assignedTo: 'Mike Chen',
      lastUpdate: '1 day ago',
      priority: 'medium',
      budget: '$2,500',
      description: 'Monthly social media content creation and management'
    },
    {
      id: 3,
      title: 'SEO Optimization',
      status: 'completed',
      progress: 100,
      deadline: 'Nov 20, 2024',
      assignedTo: 'Emily Davis',
      lastUpdate: '3 days ago',
      priority: 'low',
      budget: '$1,800',
      description: 'Website SEO audit and optimization implementation'
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'Sarah Johnson',
      message: 'Hi! I\'ve completed the homepage design. Please review the mockups and let me know your thoughts.',
      timestamp: '2 hours ago',
      type: 'agent',
      attachments: ['homepage-mockup.png', 'mobile-design.png']
    },
    {
      id: 2,
      sender: 'You',
      message: 'The design looks great! I love the color scheme. Can we make the CTA buttons more prominent?',
      timestamp: '1 hour ago',
      type: 'client'
    },
    {
      id: 3,
      sender: 'Sarah Johnson',
      message: 'Absolutely! I\'ll update the CTA buttons and send you the revised version by tomorrow.',
      timestamp: '30 minutes ago',
      type: 'agent'
    }
  ];

  const tabs = [
    { id: 'projects', name: 'My Projects', count: projects.length },
    { id: 'messages', name: 'Messages', count: messages.length },
    { id: 'files', name: 'Files', count: 12 },
    { id: 'billing', name: 'Billing', count: null }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-500/20';
      case 'in-progress': return 'text-blue-400 bg-blue-500/20';
      case 'review': return 'text-yellow-400 bg-yellow-500/20';
      case 'pending': return 'text-gray-400 bg-gray-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-500/20';
      case 'medium': return 'text-yellow-400 bg-yellow-500/20';
      case 'low': return 'text-green-400 bg-green-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

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
          <h1 className="text-3xl font-bold text-white mb-2">Client Dashboard</h1>
          <p className="text-white/70">Manage your projects and communicate with our team</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-white font-semibold">John Doe</p>
            <p className="text-white/60 text-sm">Premium Client</p>
          </div>
          <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">JD</span>
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
        <div className="card text-center">
          <div className="text-2xl font-bold text-white mb-1">{projects.length}</div>
          <div className="text-white/60 text-sm">Active Projects</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-white mb-1">$9,300</div>
          <div className="text-white/60 text-sm">Total Investment</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-white mb-1">94%</div>
          <div className="text-white/60 text-sm">Satisfaction Rate</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-white mb-1">12</div>
          <div className="text-white/60 text-sm">Files Shared</div>
        </div>
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
                <span>{tab.name}</span>
                {tab.count !== null && (
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    activeTab === tab.id ? 'bg-white/20' : 'bg-white/10'
                  }`}>
                    {tab.count}
                  </span>
                )}
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
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">My Projects</h2>
              <button className="btn-primary">
                Request New Project
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'messages' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Messages</h2>
              <button className="btn-primary">
                <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2" />
                New Message
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <MessageThread messages={messages} />
              </div>
              <div className="space-y-4">
                <div className="card-dark">
                  <h3 className="text-white font-semibold mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full text-left p-3 glass rounded-lg text-white hover:bg-white/10 transition-colors">
                      <DocumentTextIcon className="h-5 w-5 inline mr-2" />
                      Request Revision
                    </button>
                    <button className="w-full text-left p-3 glass rounded-lg text-white hover:bg-white/10 transition-colors">
                      <StarIcon className="h-5 w-5 inline mr-2" />
                      Rate Service
                    </button>
                    <button className="w-full text-left p-3 glass rounded-lg text-white hover:bg-white/10 transition-colors">
                      <DownloadIcon className="h-5 w-5 inline mr-2" />
                      Download Files
                    </button>
                  </div>
                </div>

                <div className="card-dark">
                  <h3 className="text-white font-semibold mb-4">Team Members</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">SJ</span>
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">Sarah Johnson</p>
                        <p className="text-white/60 text-xs">Project Manager</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">MC</span>
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">Mike Chen</p>
                        <p className="text-white/60 text-xs">Content Creator</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">ED</span>
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">Emily Davis</p>
                        <p className="text-white/60 text-xs">SEO Specialist</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'files' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Project Files</h2>
              <button className="btn-primary">
                <DownloadIcon className="h-5 w-5 mr-2" />
                Download All
              </button>
            </div>

            <div className="card-dark">
              <div className="space-y-4">
                {[
                  { name: 'homepage-mockup.png', size: '2.4 MB', date: '2 hours ago', type: 'image' },
                  { name: 'mobile-design.png', size: '1.8 MB', date: '2 hours ago', type: 'image' },
                  { name: 'project-brief.pdf', size: '856 KB', date: '1 day ago', type: 'document' },
                  { name: 'brand-guidelines.pdf', size: '3.2 MB', date: '3 days ago', type: 'document' }
                ].map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-4 glass rounded-lg">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-white text-sm">
                          {file.type === 'image' ? '🖼️' : '📄'}
                        </span>
                      </div>
                      <div>
                        <p className="text-white font-medium">{file.name}</p>
                        <p className="text-white/60 text-sm">{file.size} • {file.date}</p>
                      </div>
                    </div>
                    <button className="p-2 glass text-white hover:bg-white/20 rounded-lg transition-colors">
                      <DownloadIcon className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'billing' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Billing & Payments</h2>
              <button className="btn-primary">
                View All Invoices
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-dark">
                <h3 className="text-white font-semibold mb-4">Recent Invoices</h3>
                <div className="space-y-3">
                  {[
                    { id: 'INV-001', amount: '$2,500', date: 'Nov 15, 2024', status: 'paid' },
                    { id: 'INV-002', amount: '$1,800', date: 'Oct 15, 2024', status: 'paid' },
                    { id: 'INV-003', amount: '$5,000', date: 'Dec 1, 2024', status: 'pending' }
                  ].map((invoice, index) => (
                    <div key={index} className="flex items-center justify-between p-3 glass rounded-lg">
                      <div>
                        <p className="text-white font-medium">{invoice.id}</p>
                        <p className="text-white/60 text-sm">{invoice.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-semibold">{invoice.amount}</p>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          invoice.status === 'paid' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {invoice.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-dark">
                <h3 className="text-white font-semibold mb-4">Payment Methods</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 glass rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white text-sm">💳</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">•••• •••• •••• 4242</p>
                        <p className="text-white/60 text-sm">Expires 12/25</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                      Default
                    </span>
                  </div>
                </div>
                <button className="w-full mt-4 py-2 glass text-white hover:bg-white/20 rounded-lg font-medium transition-all duration-300">
                  Add Payment Method
                </button>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ClientDashboard;