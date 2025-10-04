import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  SparklesIcon, 
  PhotoIcon, 
  PencilSquareIcon, 
  HashtagIcon,
  RocketLaunchIcon,
  Wand2Icon
} from '@heroicons/react/24/outline';

const AIToolsSection = () => {
  const [activeTool, setActiveTool] = useState('post');

  const aiTools = [
    {
      id: 'post',
      title: 'AI Post Generator',
      description: 'Generate engaging social media posts with AI-powered content creation',
      icon: PencilSquareIcon,
      features: ['Content Generation', 'Platform Optimization', 'Trend Analysis', 'Engagement Prediction'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'caption',
      title: 'AI Caption & Hashtag Generator',
      description: 'Create compelling captions and relevant hashtags for maximum reach',
      icon: HashtagIcon,
      features: ['Smart Captions', 'Hashtag Research', 'Trend Integration', 'Engagement Optimization'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'logo',
      title: 'AI Logo & Banner Creator',
      description: 'Design professional logos and banners with AI-powered creativity',
      icon: PhotoIcon,
      features: ['Logo Design', 'Banner Creation', 'Brand Consistency', 'Multiple Formats'],
      color: 'from-pink-500 to-red-600'
    }
  ];

  const currentTool = aiTools.find(tool => tool.id === activeTool);

  return (
    <div className="glass rounded-2xl p-8">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <SparklesIcon className="h-8 w-8 text-yellow-400 mr-3" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            AI-Powered <span className="gradient-text">Tools</span>
          </h2>
        </div>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          Leverage the power of artificial intelligence to create stunning content, 
          generate engaging posts, and design professional graphics in seconds.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Tool Selection */}
        <div className="space-y-4">
          {aiTools.map((tool) => (
            <motion.button
              key={tool.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTool(tool.id)}
              className={`w-full p-4 rounded-lg text-left transition-all duration-300 ${
                activeTool === tool.id
                  ? 'bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-400/30'
                  : 'glass hover:bg-white/10'
              }`}
            >
              <div className="flex items-center">
                <div className={`w-12 h-12 bg-gradient-to-r ${tool.color} rounded-lg flex items-center justify-center mr-4`}>
                  <tool.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{tool.title}</h3>
                  <p className="text-white/60 text-sm">{tool.description}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Tool Details */}
        <div className="lg:col-span-2">
          <motion.div
            key={activeTool}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="card-dark h-full"
          >
            <div className="flex items-center mb-6">
              <div className={`w-16 h-16 bg-gradient-to-r ${currentTool.color} rounded-xl flex items-center justify-center mr-4 neon-glow`}>
                <currentTool.icon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-white text-2xl font-bold">{currentTool.title}</h3>
                <p className="text-white/60">{currentTool.description}</p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-8">
              <h4 className="text-white font-semibold text-lg">Key Features:</h4>
              {currentTool.features.map((feature, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-3"></div>
                  <span className="text-white/80">{feature}</span>
                </div>
              ))}
            </div>

            {/* Demo Section */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-lg">Try It Now:</h4>
              
              {activeTool === 'post' && (
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Enter your topic or idea..."
                    className="input w-full"
                  />
                  <div className="flex gap-3">
                    <select className="input flex-1">
                      <option>Instagram</option>
                      <option>Twitter</option>
                      <option>LinkedIn</option>
                      <option>Facebook</option>
                    </select>
                    <button className="btn-primary px-6">
                      <Wand2Icon className="h-5 w-5 mr-2" />
                      Generate
                    </button>
                  </div>
                </div>
              )}

              {activeTool === 'caption' && (
                <div className="space-y-4">
                  <textarea
                    placeholder="Describe your content or upload an image..."
                    rows="3"
                    className="input w-full resize-none"
                  />
                  <div className="flex gap-3">
                    <select className="input flex-1">
                      <option>Instagram</option>
                      <option>Twitter</option>
                      <option>TikTok</option>
                      <option>LinkedIn</option>
                    </select>
                    <button className="btn-primary px-6">
                      <HashtagIcon className="h-5 w-5 mr-2" />
                      Generate
                    </button>
                  </div>
                </div>
              )}

              {activeTool === 'logo' && (
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Enter your brand name..."
                    className="input w-full"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Industry (e.g., Tech, Fashion)"
                      className="input"
                    />
                    <select className="input">
                      <option>Modern</option>
                      <option>Classic</option>
                      <option>Minimalist</option>
                      <option>Creative</option>
                    </select>
                  </div>
                  <button className="btn-primary w-full">
                    <PhotoIcon className="h-5 w-5 mr-2" />
                    Create Logo
                  </button>
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold">Ready to get started?</p>
                  <p className="text-white/60 text-sm">Unlock the full potential of AI tools</p>
                </div>
                <button className="btn-primary">
                  <RocketLaunchIcon className="h-5 w-5 mr-2" />
                  Upgrade Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AIToolsSection;