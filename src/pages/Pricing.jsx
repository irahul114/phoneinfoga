import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckIcon, 
  StarIcon, 
  XMarkIcon,
  CurrencyDollarIcon,
  SparklesIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';
import PricingCard from '../components/Services/PricingCard';
import FAQ from '../components/Pricing/FAQ';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingPlans = [
    {
      name: 'Starter',
      monthlyPrice: '$99',
      yearlyPrice: '$79',
      period: '/month',
      description: 'Perfect for small creators and startups',
      features: [
        'Basic website design',
        'Social media templates',
        'Email support',
        'Basic analytics',
        '5 revisions included',
        'Standard delivery time'
      ],
      limitations: [
        'Limited customization',
        'Basic SEO optimization',
        'Standard support hours'
      ],
      popular: false,
      color: 'from-blue-500 to-purple-600',
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      monthlyPrice: '$299',
      yearlyPrice: '$239',
      period: '/month',
      description: 'Ideal for growing businesses and creators',
      features: [
        'Custom website design',
        'Social media management',
        'Priority support',
        'Advanced analytics',
        'Unlimited revisions',
        'SEO optimization',
        'Content creation',
        'Fast delivery (7-14 days)',
        'AI tools access'
      ],
      limitations: [
        'Limited integrations',
        'Standard reporting'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-600',
      cta: 'Most Popular'
    },
    {
      name: 'Enterprise',
      monthlyPrice: '$599',
      yearlyPrice: '$479',
      period: '/month',
      description: 'Complete solution for large businesses',
      features: [
        'Premium website design',
        'Full digital marketing',
        '24/7 support',
        'Custom analytics',
        'Unlimited everything',
        'AI tools access',
        'Dedicated manager',
        'Custom integrations',
        'Priority delivery (3-7 days)',
        'White-label options',
        'Custom training'
      ],
      limitations: [],
      popular: false,
      color: 'from-pink-500 to-red-600',
      cta: 'Contact Sales'
    }
  ];

  const addOns = [
    {
      name: 'AI Content Generation',
      price: '$49',
      period: '/month',
      description: 'Unlimited AI-generated content for all platforms',
      features: ['Post generation', 'Caption creation', 'Hashtag research', 'Trend analysis']
    },
    {
      name: 'Premium Analytics',
      price: '$29',
      period: '/month',
      description: 'Advanced analytics and reporting dashboard',
      features: ['Custom reports', 'Real-time data', 'Export options', 'API access']
    },
    {
      name: 'Priority Support',
      price: '$19',
      period: '/month',
      description: '24/7 priority support with dedicated manager',
      features: ['Phone support', 'Live chat', 'Video calls', 'SLA guarantee']
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers. Enterprise customers can also pay via invoice.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial.'
    },
    {
      question: 'What happens if I cancel my subscription?',
      answer: 'You can cancel anytime. Your subscription will remain active until the end of your current billing period, and you\'ll retain access to all features until then.'
    },
    {
      question: 'Do you offer custom enterprise solutions?',
      answer: 'Yes, we provide custom enterprise solutions tailored to your specific needs. Contact our sales team to discuss your requirements.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide email support for all plans, with priority support and live chat available for Professional and Enterprise plans.'
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
          Simple <span className="gradient-text">Pricing</span>
        </h1>
        <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
          Choose the perfect plan for your needs. All plans include our core features 
          with no hidden fees or surprises.
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-white/60'}`}>
            Monthly
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-white' : 'text-white/60'}`}>
            Yearly
          </span>
          {billingCycle === 'yearly' && (
            <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full font-medium">
              Save 20%
            </span>
          )}
        </div>
      </motion.div>

      {/* Pricing Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`card-dark hover-lift hover-glow relative ${
              plan.popular ? 'ring-2 ring-purple-500/50 scale-105' : ''
            }`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                  <StarIcon className="h-4 w-4 mr-1" />
                  Most Popular
                </div>
              </div>
            )}

            {/* Plan Header */}
            <div className="text-center mb-8">
              <h3 className="text-white text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-white/60 text-sm mb-4">{plan.description}</p>
              <div className="flex items-baseline justify-center">
                <span className="text-white text-4xl font-bold">
                  {billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                </span>
                <span className="text-white/60 text-lg ml-1">{plan.period}</span>
              </div>
              {billingCycle === 'yearly' && (
                <p className="text-green-400 text-sm mt-2">
                  Save ${(parseInt(plan.monthlyPrice.replace('$', '')) - parseInt(plan.yearlyPrice.replace('$', ''))) * 12}/year
                </p>
              )}
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-white/80 text-sm">{feature}</span>
                </div>
              ))}
              {plan.limitations.map((limitation, idx) => (
                <div key={idx} className="flex items-center">
                  <XMarkIcon className="h-5 w-5 text-red-400 mr-3 flex-shrink-0" />
                  <span className="text-white/60 text-sm">{limitation}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/25'
                  : 'glass text-white hover:bg-white/20'
              }`}
            >
              {plan.cta}
            </motion.button>

            {/* Additional Info */}
            <div className="text-center mt-4">
              <p className="text-white/40 text-xs">
                {plan.popular ? 'Cancel anytime • 30-day money-back guarantee' : 'Cancel anytime'}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Add-ons Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="glass rounded-2xl p-8"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Add-ons</h2>
          <p className="text-white/70">Enhance your plan with these powerful add-ons</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {addOns.map((addon, index) => (
            <motion.div
              key={addon.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-dark hover-lift hover-glow"
            >
              <div className="text-center mb-4">
                <h3 className="text-white font-semibold text-lg mb-2">{addon.name}</h3>
                <p className="text-white/60 text-sm mb-3">{addon.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-white text-2xl font-bold">{addon.price}</span>
                  <span className="text-white/60 text-sm ml-1">{addon.period}</span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {addon.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckIcon className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full py-2 glass text-white hover:bg-white/20 rounded-lg font-medium transition-all duration-300">
                Add to Plan
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <FAQ faqs={faqs} />
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-center py-16"
      >
        <div className="glass rounded-2xl p-12">
          <div className="flex items-center justify-center mb-6">
            <RocketLaunchIcon className="h-12 w-12 text-blue-400 mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Get Started?
            </h2>
          </div>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who trust us with their digital presence. 
            Start your free trial today and see the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">
              Start Free Trial
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Contact Sales
            </button>
          </div>
          <p className="text-white/40 text-sm mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Pricing;