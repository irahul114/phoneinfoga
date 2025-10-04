import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  PaperAirplaneIcon, 
  PaperClipIcon,
  UserIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const MessageThread = ({ messages }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    // Handle message sending logic here
    setNewMessage('');
  };

  return (
    <div className="card-dark h-[600px] flex flex-col">
      {/* Messages Header */}
      <div className="p-4 border-b border-white/10">
        <h3 className="text-white font-semibold">Project Discussion</h3>
        <p className="text-white/60 text-sm">E-commerce Website Redesign</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`flex ${message.type === 'client' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] ${message.type === 'client' ? 'order-2' : 'order-1'}`}>
              {message.type === 'agent' && (
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-2">
                    <span className="text-white text-xs font-bold">
                      {message.sender.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <span className="text-white/80 text-sm font-medium">{message.sender}</span>
                </div>
              )}
              
              <div
                className={`p-3 rounded-lg ${
                  message.type === 'client'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-white/10 text-white'
                }`}
              >
                <p className="text-sm">{message.message}</p>
                
                {/* Attachments */}
                {message.attachments && (
                  <div className="mt-2 space-y-1">
                    {message.attachments.map((attachment, idx) => (
                      <div key={idx} className="flex items-center text-xs opacity-80">
                        <PaperClipIcon className="h-3 w-3 mr-1" />
                        <span>{attachment}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="flex items-center mt-2">
                  <ClockIcon className="h-3 w-3 text-white/40 mr-1" />
                  <span className="text-xs text-white/40">
                    {message.timestamp}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-white/10">
        <form onSubmit={handleSendMessage} className="flex space-x-2">
          <div className="flex-1 relative">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:border-blue-400 text-sm"
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/40 hover:text-white/60"
            >
              <PaperClipIcon className="h-4 w-4" />
            </button>
          </div>
          <button
            type="submit"
            disabled={!newMessage.trim()}
            className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <PaperAirplaneIcon className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default MessageThread;