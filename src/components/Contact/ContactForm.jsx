import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PaperAirplaneIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Message sent successfully! We\'ll get back to you soon.');
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="card-dark text-center py-12"
      >
        <CheckCircleIcon className="h-16 w-16 text-green-400 mx-auto mb-4" />
        <h2 className="text-white text-2xl font-bold mb-4">Message Sent!</h2>
        <p className="text-white/70 mb-6">
          Thank you for reaching out. We've received your message and will get back to you within 2 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="btn-primary"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <div className="card-dark">
      <div className="mb-6">
        <h2 className="text-white text-2xl font-bold mb-2">Send us a Message</h2>
        <p className="text-white/70">Fill out the form below and we'll get back to you as soon as possible.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input w-full"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input w-full"
              placeholder="your@email.com"
            />
          </div>
        </div>

        {/* Company and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">
              Company
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="input w-full"
              placeholder="Your company name"
            />
          </div>
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input w-full"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">
            Subject *
          </label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="input w-full"
          >
            <option value="">Select a subject</option>
            <option value="general">General Inquiry</option>
            <option value="web-design">Website Design</option>
            <option value="social-media">Social Media Management</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="video-editing">Video Editing</option>
            <option value="content-creation">Content Creation</option>
            <option value="technical-support">Technical Support</option>
            <option value="billing">Billing & Payments</option>
            <option value="partnership">Partnership Opportunity</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Budget and Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">
              Budget Range
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="input w-full"
            >
              <option value="">Select budget range</option>
              <option value="under-1k">Under $1,000</option>
              <option value="1k-5k">$1,000 - $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k-plus">$25,000+</option>
              <option value="discuss">Let's discuss</option>
            </select>
          </div>
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">
              Timeline
            </label>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="input w-full"
            >
              <option value="">Select timeline</option>
              <option value="asap">ASAP</option>
              <option value="1-month">Within 1 month</option>
              <option value="2-3-months">2-3 months</option>
              <option value="3-6-months">3-6 months</option>
              <option value="6-months-plus">6+ months</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">
            Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="input w-full resize-none"
            placeholder="Tell us about your project, goals, and any specific requirements..."
          />
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full btn-primary flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <div className="spinner mr-3"></div>
              Sending Message...
            </>
          ) : (
            <>
              <PaperAirplaneIcon className="h-5 w-5 mr-2" />
              Send Message
            </>
          )}
        </motion.button>

        {/* Privacy Notice */}
        <p className="text-white/40 text-xs text-center">
          By submitting this form, you agree to our privacy policy and terms of service. 
          We'll never share your information with third parties.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;