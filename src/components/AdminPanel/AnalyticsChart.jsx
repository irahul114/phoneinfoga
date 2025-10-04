import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChartBarIcon,
  TrendingUpIcon,
  TrendingDownIcon
} from '@heroicons/react/24/outline';

const AnalyticsChart = () => {
  const chartData = [
    { month: 'Jan', revenue: 32000, users: 120, projects: 45 },
    { month: 'Feb', revenue: 35000, users: 135, projects: 52 },
    { month: 'Mar', revenue: 38000, users: 148, projects: 58 },
    { month: 'Apr', revenue: 42000, users: 162, projects: 65 },
    { month: 'May', revenue: 45000, users: 175, projects: 72 },
    { month: 'Jun', revenue: 48000, users: 189, projects: 78 },
    { month: 'Jul', revenue: 52000, users: 205, projects: 85 },
    { month: 'Aug', revenue: 48000, users: 198, projects: 82 },
    { month: 'Sep', revenue: 55000, users: 220, projects: 92 },
    { month: 'Oct', revenue: 58000, users: 235, projects: 98 },
    { month: 'Nov', revenue: 62000, users: 248, projects: 105 },
    { month: 'Dec', revenue: 45680, users: 1247, projects: 89 }
  ];

  const maxRevenue = Math.max(...chartData.map(d => d.revenue));
  const maxUsers = Math.max(...chartData.map(d => d.users));
  const maxProjects = Math.max(...chartData.map(d => d.projects));

  const metrics = [
    {
      title: 'Revenue Growth',
      value: '+15.3%',
      trend: 'up',
      icon: TrendingUpIcon,
      color: 'text-green-400'
    },
    {
      title: 'User Growth',
      value: '+12.5%',
      trend: 'up',
      icon: TrendingUpIcon,
      color: 'text-blue-400'
    },
    {
      title: 'Project Completion',
      value: '+8.2%',
      trend: 'up',
      icon: TrendingUpIcon,
      color: 'text-purple-400'
    }
  ];

  return (
    <div className="card-dark">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-white text-xl font-bold">Analytics Overview</h2>
        <div className="flex items-center space-x-4">
          <select className="bg-white/5 border border-white/20 rounded-lg px-3 py-1 text-white text-sm focus:outline-none focus:border-blue-400">
            <option>Last 12 months</option>
            <option>Last 6 months</option>
            <option>Last 3 months</option>
            <option>This month</option>
          </select>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass rounded-lg p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm">{metric.title}</p>
                <p className={`text-lg font-bold ${metric.color}`}>{metric.value}</p>
              </div>
              <metric.icon className={`h-6 w-6 ${metric.color}`} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Chart */}
      <div className="space-y-6">
        {/* Revenue Chart */}
        <div>
          <h3 className="text-white font-semibold mb-4">Monthly Revenue</h3>
          <div className="h-64 flex items-end space-x-2">
            {chartData.map((data, index) => (
              <motion.div
                key={data.month}
                initial={{ height: 0 }}
                animate={{ height: `${(data.revenue / maxRevenue) * 100}%` }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                className="flex-1 bg-gradient-to-t from-blue-500 to-purple-600 rounded-t-lg min-h-[4px] relative group"
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-black/80 text-white text-xs px-2 py-1 rounded">
                    ${data.revenue.toLocaleString()}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            {chartData.map((data) => (
              <span key={data.month} className="text-white/60 text-xs">
                {data.month}
              </span>
            ))}
          </div>
        </div>

        {/* Users Chart */}
        <div>
          <h3 className="text-white font-semibold mb-4">User Growth</h3>
          <div className="h-32 flex items-end space-x-2">
            {chartData.map((data, index) => (
              <motion.div
                key={data.month}
                initial={{ height: 0 }}
                animate={{ height: `${(data.users / maxUsers) * 100}%` }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                className="flex-1 bg-gradient-to-t from-green-500 to-blue-600 rounded-t-lg min-h-[4px] relative group"
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {data.users}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Projects Chart */}
        <div>
          <h3 className="text-white font-semibold mb-4">Project Completion</h3>
          <div className="h-32 flex items-end space-x-2">
            {chartData.map((data, index) => (
              <motion.div
                key={data.month}
                initial={{ height: 0 }}
                animate={{ height: `${(data.projects / maxProjects) * 100}%` }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                className="flex-1 bg-gradient-to-t from-purple-500 to-pink-600 rounded-t-lg min-h-[4px] relative group"
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {data.projects}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-8 pt-6 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-white/60 text-sm">Total Revenue</p>
            <p className="text-white text-xl font-bold">$456,680</p>
          </div>
          <div className="text-center">
            <p className="text-white/60 text-sm">Total Users</p>
            <p className="text-white text-xl font-bold">1,247</p>
          </div>
          <div className="text-center">
            <p className="text-white/60 text-sm">Total Projects</p>
            <p className="text-white text-xl font-bold">89</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsChart;