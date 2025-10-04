import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FunnelIcon, 
  EyeIcon, 
  HeartIcon, 
  ShareIcon,
  MagnifyingGlassIcon,
  TagIcon
} from '@heroicons/react/24/outline';
import PortfolioCard from '../components/Portfolio/PortfolioCard';
import FilterButton from '../components/Portfolio/FilterButton';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform Redesign',
      client: 'TechCorp Inc.',
      category: 'web',
      type: 'Website Design',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      description: 'Complete redesign of an e-commerce platform with modern UI/UX and improved user experience.',
      tags: ['React', 'E-commerce', 'UI/UX', 'Responsive'],
      likes: 124,
      views: 2340,
      featured: true
    },
    {
      id: 2,
      title: 'Social Media Campaign',
      client: 'Fashion Brand',
      category: 'social',
      type: 'Social Media',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      description: 'Comprehensive social media campaign with engaging content and strategic posting schedule.',
      tags: ['Instagram', 'Content Creation', 'Strategy', 'Analytics'],
      likes: 89,
      views: 1890,
      featured: false
    },
    {
      id: 3,
      title: 'Product Launch Video',
      client: 'StartupXYZ',
      category: 'video',
      type: 'Video Production',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop',
      description: 'Professional product launch video with motion graphics and compelling storytelling.',
      tags: ['Video Editing', 'Motion Graphics', 'Product Launch', 'Marketing'],
      likes: 156,
      views: 3120,
      featured: true
    },
    {
      id: 4,
      title: 'Brand Identity Package',
      client: 'Local Restaurant',
      category: 'branding',
      type: 'Brand Design',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop',
      description: 'Complete brand identity including logo, color palette, and marketing materials.',
      tags: ['Logo Design', 'Branding', 'Identity', 'Marketing'],
      likes: 78,
      views: 1450,
      featured: false
    },
    {
      id: 5,
      title: 'SEO Optimization Project',
      client: 'Online Store',
      category: 'marketing',
      type: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop',
      description: 'Comprehensive SEO audit and optimization resulting in 300% traffic increase.',
      tags: ['SEO', 'Analytics', 'Optimization', 'Growth'],
      likes: 92,
      views: 2100,
      featured: false
    },
    {
      id: 6,
      title: 'Mobile App UI Design',
      client: 'FinTech Startup',
      category: 'mobile',
      type: 'App Design',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      description: 'Modern mobile app interface design with intuitive user experience and accessibility.',
      tags: ['Mobile App', 'UI Design', 'UX', 'FinTech'],
      likes: 134,
      views: 2780,
      featured: true
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'web', name: 'Web Design', count: projects.filter(p => p.category === 'web').length },
    { id: 'social', name: 'Social Media', count: projects.filter(p => p.category === 'social').length },
    { id: 'video', name: 'Video', count: projects.filter(p => p.category === 'video').length },
    { id: 'branding', name: 'Branding', count: projects.filter(p => p.category === 'branding').length },
    { id: 'marketing', name: 'Marketing', count: projects.filter(p => p.category === 'marketing').length },
    { id: 'mobile', name: 'Mobile', count: projects.filter(p => p.category === 'mobile').length }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-8"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Our <span className="gradient-text">Portfolio</span>
        </h1>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Explore our collection of successful projects and see how we've helped creators 
          and businesses achieve their digital goals.
        </p>
      </motion.div>

      {/* Featured Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass rounded-2xl p-8"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
          <div className="flex items-center text-yellow-400">
            <span className="text-sm font-medium mr-2">Featured</span>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <PortfolioCard key={project.id} project={project} index={index} featured={true} />
          ))}
        </div>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="glass rounded-2xl p-6"
      >
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
              <input
                type="text"
                placeholder="Search projects, clients, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <FilterButton
                key={filter.id}
                filter={filter}
                isActive={activeFilter === filter.id}
                onClick={() => setActiveFilter(filter.id)}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* All Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">
            All Projects ({filteredProjects.length})
          </h2>
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-white/60 hover:text-white transition-colors">
              <FunnelIcon className="h-5 w-5 mr-2" />
              <span className="text-sm">Sort by</span>
            </button>
            <select className="bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-400">
              <option>Most Recent</option>
              <option>Most Popular</option>
              <option>Most Viewed</option>
              <option>Alphabetical</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <PortfolioCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
              <MagnifyingGlassIcon className="h-12 w-12 text-white/40" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">No projects found</h3>
            <p className="text-white/60">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        <div className="card text-center">
          <div className="text-3xl font-bold text-white mb-2">150+</div>
          <div className="text-white/60 text-sm">Projects Completed</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-white mb-2">98%</div>
          <div className="text-white/60 text-sm">Client Satisfaction</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-white mb-2">50+</div>
          <div className="text-white/60 text-sm">Happy Clients</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-white mb-2">5+</div>
          <div className="text-white/60 text-sm">Years Experience</div>
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;