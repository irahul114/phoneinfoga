import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  PaperAirplaneIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import ContactForm from '../components/Contact/ContactForm';
import LiveChat from '../components/Contact/LiveChat';

const Contact = () => {
  const [isLiveChatOpen, setIsLiveChatOpen] = useState(false);

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: 'Email Us',
      description: 'Send us an email anytime',
      value: 'hello@digitalcreator.com',
      action: 'mailto:hello@digitalcreator.com'
    },
    {
      icon: PhoneIcon,
      title: 'Call Us',
      description: 'Mon-Fri from 9am to 6pm',
      value: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: MapPinIcon,
      title: 'Visit Us',
      description: 'Come say hello at our office',
      value: '123 Digital Street, Tech City, TC 12345',
      action: 'https://maps.google.com'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Live Chat',
      description: 'Chat with us in real-time',
      value: 'Available 24/7',
      action: () => setIsLiveChatOpen(true)
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const supportTopics = [
    {
      title: 'General Inquiries',
      description: 'Questions about our services, pricing, or general information',
      icon: '💬'
    },
    {
      title: 'Technical Support',
      description: 'Help with existing projects, technical issues, or troubleshooting',
      icon: '🔧'
    },
    {
      title: 'Sales & Partnerships',
      description: 'New project inquiries, partnership opportunities, or custom solutions',
      icon: '🤝'
    },
    {
      title: 'Billing & Payments',
      description: 'Questions about billing, payments, refunds, or account management',
      icon: '💳'
    }
  ];

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
          Get in <span className="gradient-text">Touch</span>
        </h1>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Ready to start your next project? We'd love to hear from you. 
          Get in touch with our team and let's create something amazing together.
        </p>
      </motion.div>

      {/* Contact Methods */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {contactInfo.map((info, index) => (
          <motion.div
            key={info.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card hover-lift hover-glow text-center group cursor-pointer"
            onClick={() => typeof info.action === 'function' ? info.action() : window.open(info.action)}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 neon-glow">
              <info.icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">{info.title}</h3>
            <p className="text-white/60 text-sm mb-3">{info.description}</p>
            <p className="text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
              {info.value}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ContactForm />
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="space-y-8"
        >
          {/* Office Hours */}
          <div className="card-dark">
            <div className="flex items-center mb-6">
              <ClockIcon className="h-6 w-6 text-blue-400 mr-3" />
              <h2 className="text-white text-xl font-bold">Office Hours</h2>
            </div>
            <div className="space-y-3">
              {officeHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-white/80">{schedule.day}</span>
                  <span className="text-white/60 text-sm">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Support Topics */}
          <div className="card-dark">
            <h2 className="text-white text-xl font-bold mb-6">What can we help you with?</h2>
            <div className="space-y-4">
              {supportTopics.map((topic, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-2xl">{topic.icon}</span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{topic.title}</h3>
                    <p className="text-white/60 text-sm">{topic.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Response Promise */}
          <div className="card-dark">
            <div className="flex items-center mb-4">
              <CheckCircleIcon className="h-6 w-6 text-green-400 mr-3" />
              <h2 className="text-white text-xl font-bold">Quick Response Promise</h2>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span className="text-white/80 text-sm">Email responses within 2 hours</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span className="text-white/80 text-sm">Live chat available 24/7</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span className="text-white/80 text-sm">Phone support during business hours</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span className="text-white/80 text-sm">Emergency support for Enterprise clients</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-center py-16"
      >
        <div className="glass rounded-2xl p-12">
          <div className="flex items-center justify-center mb-6">
            <PaperAirplaneIcon className="h-12 w-12 text-blue-400 mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Start Your Project?
            </h2>
          </div>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Don't wait! Get in touch with us today and let's discuss how we can help 
            bring your digital vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">
              Send Message
            </button>
            <button 
              onClick={() => setIsLiveChatOpen(true)}
              className="btn-secondary text-lg px-8 py-4"
            >
              Start Live Chat
            </button>
          </div>
        </div>
      </motion.div>

      {/* Live Chat Widget */}
      <LiveChat isOpen={isLiveChatOpen} onClose={() => setIsLiveChatOpen(false)} />
    </div>
  );
};

export default Contact;