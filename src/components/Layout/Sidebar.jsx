import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { 
  HomeIcon, 
  Cog6ToothIcon, 
  BriefcaseIcon, 
  PhotoIcon, 
  CurrencyDollarIcon,
  ChatBubbleLeftRightIcon,
  UserIcon,
  ShieldCheckIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const Sidebar = ({ isOpen, onClose }) => {
  const navigation = [
    { name: 'Dashboard', href: '/', icon: HomeIcon },
    { name: 'Services', href: '/services', icon: Cog6ToothIcon },
    { name: 'Portfolio', href: '/portfolio', icon: BriefcaseIcon },
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },
    { name: 'Contact', href: '/contact', icon: ChatBubbleLeftRightIcon },
    { name: 'Client Portal', href: '/client-dashboard', icon: UserIcon },
    { name: 'Admin Panel', href: '/admin', icon: ShieldCheckIcon },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.div
        initial={false}
        className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col z-50"
      >
        <div className="flex flex-col flex-grow glass-dark pt-5 pb-4 overflow-y-auto">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 px-6 mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center neon-glow"
            >
              <span className="text-white font-bold text-xl">DC</span>
            </motion.div>
            <div className="ml-3">
              <h1 className="text-white font-bold text-xl gradient-text">Digital Creator</h1>
              <p className="text-white/60 text-sm">Services Platform</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="mt-5 flex-1 px-2 space-y-1">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-white border border-blue-400/30 neon-glow'
                        : 'text-white/70 hover:text-white hover:bg-white/10 hover:scale-105'
                    }`
                  }
                >
                  <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                  {item.name}
                </NavLink>
              </motion.div>
            ))}
          </nav>

          {/* User Section */}
          <div className="flex-shrink-0 flex border-t border-white/10 p-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">U</span>
              </div>
              <div className="ml-3">
                <p className="text-white text-sm font-medium">User Name</p>
                <p className="text-white/60 text-xs">Premium Member</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 left-0 z-50 w-64 glass-dark lg:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">DC</span>
                  </div>
                  <span className="ml-2 text-white font-bold">Digital Creator</span>
                </div>
                <button
                  onClick={onClose}
                  className="text-white/60 hover:text-white p-1"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 p-4 space-y-2">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-white border border-blue-400/30'
                          : 'text-white/70 hover:text-white hover:bg-white/10'
                      }`
                    }
                  >
                    <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                    {item.name}
                  </NavLink>
                ))}
              </nav>

              {/* User Section */}
              <div className="p-4 border-t border-white/10">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">U</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-white text-sm font-medium">User Name</p>
                    <p className="text-white/60 text-xs">Premium Member</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;