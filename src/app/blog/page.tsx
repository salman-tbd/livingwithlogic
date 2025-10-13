'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useMemo } from 'react';
import { showToast } from '@/utils/toast';
import { validation } from '@/utils/validation';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, TrendingUp, ArrowRight, Mail, Filter, CheckCircle2 } from 'lucide-react';

const featuredPost = {
  title: 'The Future of Strategic Planning in a Post-Digital World',
  excerpt: 'How modern organizations are adapting their strategic planning processes to navigate unprecedented change and uncertainty.',
  date: '2024-01-15',
  readTime: '8 min read',
  category: 'Strategic Planning',
  image: '/assets/blog/287.jpg',
  slug: 'future-strategic-planning-post-digital-world'
};

const blogPosts = [
  {
    title: 'Building Resilient Leadership Teams in Times of Change',
    excerpt: 'Discover the key characteristics and practices that enable leadership teams to thrive during organizational transformation.',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Leadership',
    image: '/blog/resilient-leadership.jpg',
    slug: 'building-resilient-leadership-teams'
  },
  {
    title: 'Data-Driven Decision Making: Beyond the Buzzwords',
    excerpt: 'A practical framework for implementing truly data-driven decision processes in your organization.',
    date: '2024-01-05',
    readTime: '7 min read',
    category: 'Analytics',
    image: '/blog/data-driven-decisions.jpg',
    slug: 'data-driven-decision-making-framework'
  },
  {
    title: 'The ROI of Team Development: Measuring What Matters',
    excerpt: 'How to quantify the impact of team development initiatives and make the business case for continued investment.',
    date: '2023-12-28',
    readTime: '5 min read',
    category: 'Team Development',
    image: '/blog/team-development-roi.jpg',
    slug: 'roi-team-development-measuring-impact'
  },
  {
    title: 'Cultural Transformation: Leading Change from the Inside Out',
    excerpt: 'A step-by-step approach to driving cultural change that sticks and creates lasting organizational improvement.',
    date: '2023-12-22',
    readTime: '9 min read',
    category: 'Organizational Culture',
    image: '/blog/cultural-transformation.jpg',
    slug: 'cultural-transformation-inside-out'
  },
  {
    title: 'Scaling Agile Methodologies Across Large Organizations',
    excerpt: 'Best practices for implementing agile frameworks at enterprise scale while maintaining flexibility and innovation.',
    date: '2023-12-15',
    readTime: '6 min read',
    category: 'Process Improvement',
    image: '/blog/scaling-agile.jpg',
    slug: 'scaling-agile-methodologies-enterprise'
  },
  {
    title: 'The Psychology of High-Performance Teams',
    excerpt: 'Understanding the psychological factors that drive exceptional team performance and how to cultivate them.',
    date: '2023-12-10',
    readTime: '7 min read',
    category: 'Team Performance',
    image: '/blog/psychology-high-performance.jpg',
    slug: 'psychology-high-performance-teams'
  }
];

const categories = [
  'All Posts',
  'Strategic Planning',
  'Leadership',
  'Team Development',
  'Organizational Culture',
  'Process Improvement',
  'Analytics'
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Posts');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  // Filter posts based on selected category
  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'All Posts') {
      return blogPosts;
    }
    return blogPosts.filter(post => post.category === selectedCategory);
  }, [selectedCategory]);

  // Newsletter subscription handler
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newsletterEmail.trim()) {
      return;
    }

    const emailError = validation.email(newsletterEmail);
    if (emailError) {
      showToast.error('Please enter a valid email address.');
      return;
    }

    setIsSubscribing(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Newsletter subscription:', newsletterEmail);
      
      // Show success message
      showToast.newsletterSuccess();
      setNewsletterEmail('');
    } catch {
      showToast.error('There was an error subscribing. Please try again.');
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/blog/business-partners-connecting-jigsaw-puzzle-pieces.jpg"
            alt="Business partners connecting jigsaw puzzle pieces representing collaboration"
            fill
            className="object-cover"
            priority
            onError={(e) => {
              // Hide image on error and show gradient background
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-surface-900 via-primary-900/80 to-surface-900"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-accent-300 font-bold rounded-2xl shadow-glow border border-accent-400/30 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <BookOpen size={20} className="mr-2" />
              BUSINESS INSIGHTS
            </motion.div>
            <motion.h1 
              className="heading-hero text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Insights &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                Thought Leadership
              </span>
            </motion.h1>
            <motion.p 
              className="body-large text-surface-200 mb-12 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Expert perspectives on business strategy, leadership, and organizational excellence. Stay ahead with actionable insights from our consulting experience.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <a 
                  href="#featured-post"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-surface-900 font-bold text-lg rounded-2xl hover:bg-surface-50 transition-all duration-300 shadow-soft hover:shadow-elevated focus-ring"
                >
                  <BookOpen size={20} />
                  <span>Read Latest Article</span>
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  href="/booking"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-2xl font-bold text-lg transition-all duration-300 border border-white/30 hover:border-white/50 focus-ring-inset"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowRight size={24} className="rotate-90" />
        </motion.div>
      </motion.section>

      {/* Featured Post - Professional Dark */}
      <motion.section 
        id="featured-post" 
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Sophisticated Dark Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-surface-900 via-surface-800 to-surface-900"></div>
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 via-transparent to-accent-900/10"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-accent-300 font-bold rounded-2xl shadow-glow border border-accent-400/30 mb-8">
                <TrendingUp size={20} className="mr-2" />
                FEATURED ARTICLE
              </div>
              <h2 className="heading-section text-white mb-8">
                Must-Read{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                  Insights
                </span>
              </h2>
            </motion.div>

            {/* Featured Article Card */}
            <motion.div 
              className="card-glass hover:bg-white/15 transition-all duration-500 border-surface-700/50 hover:border-accent-400/50 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-12">
                <div>
                  <div className="flex items-center mb-6">
                    <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-bold shadow-soft">
                      {featuredPost.category}
                    </span>
                    <span className="text-surface-300 ml-6 text-lg">{featuredPost.readTime}</span>
                  </div>
                  <h3 className="heading-card text-white mb-6 group-hover:text-accent-300 transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="body-regular text-surface-300 mb-8 group-hover:text-white transition-colors">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-surface-300 flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                    <motion.button 
                      onClick={() => showToast.blogLoginRequired()}
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl hover:from-primary-700 hover:to-accent-700 transition-all duration-300 font-bold shadow-soft hover:shadow-elevated focus-ring"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Read Article</span>
                      <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden min-h-[400px] border-2 border-primary-400/30 group-hover:border-accent-400/50 transition-colors">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback to placeholder on error
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `
                        <div class="bg-gradient-to-br from-primary-100/20 to-accent-100/20 rounded-2xl flex items-center justify-center min-h-[400px] border-2 border-primary-400/30 group-hover:border-accent-400/50 transition-colors">
                          <div class="text-center">
                            <svg class="w-16 h-16 text-primary-400 mx-auto mb-4 group-hover:text-accent-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253z"></path>
                            </svg>
                            <span class="text-primary-400 text-xl font-bold group-hover:text-accent-400 transition-colors">Featured Article</span>
                          </div>
                        </div>
                      `;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Categories Filter - Professional Light */}
      <motion.section 
        className="relative py-20 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Sophisticated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-surface-50 via-surface-100 to-primary-50"></div>
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/5 via-transparent to-accent-900/5"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm text-primary-600 font-bold rounded-2xl shadow-soft border border-primary-200/50 mb-8">
                <Filter size={20} className="mr-2" />
                EXPLORE BY CATEGORY
              </div>
              <h2 className="heading-section text-surface-900 mb-8">
                Discover Insights That{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  Matter to You
                </span>
              </h2>
            </motion.div>

            {/* Categories Grid */}
            <div className="flex flex-wrap gap-6 justify-center">
              {categories.map((category, index) => {
                const isActive = selectedCategory === category;
                return (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-soft hover:shadow-elevated focus-ring ${
                      isActive 
                        ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white scale-105' 
                        : 'bg-white text-surface-700 border-2 border-surface-200 hover:border-primary-300 hover:text-primary-600 hover:bg-primary-50'
                    }`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: isActive ? 1.05 : 1 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: isActive ? 1.1 : 1.05 }}
                    whileTap={{ scale: isActive ? 1.02 : 0.98 }}
                  >
                    {category}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Blog Posts Grid - Professional Light */}
      <motion.section 
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Sophisticated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-surface-50 via-surface-100 to-surface-200"></div>
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/5 via-transparent to-accent-900/5"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm text-primary-600 font-bold rounded-2xl shadow-soft border border-primary-200/50 mb-8">
                <BookOpen size={20} className="mr-2" />
                LATEST ARTICLES
              </div>
              <h2 className="heading-section text-surface-900 mb-4">
                Expert{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  Knowledge Library
                </span>
              </h2>
              {selectedCategory !== 'All Posts' && (
                <p className="body-regular text-surface-600 mb-4">
                  Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} in{' '}
                  <span className="font-bold text-primary-600">{selectedCategory}</span>
                </p>
              )}
            </motion.div>

            {/* Articles Grid */}
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredPosts.map((post, index) => (
                <motion.article 
                  key={index} 
                  className="card-elevated hover:shadow-elevated transition-all duration-500 overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  {/* Article Image Placeholder */}
                  <div className="h-56 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center border-b border-surface-200/50 group-hover:from-primary-200 group-hover:to-accent-200 transition-colors">
                    <div className="text-center">
                      <BookOpen size={48} className="text-primary-600 mx-auto mb-2 group-hover:text-accent-600 transition-colors" />
                      <span className="text-primary-600 font-bold group-hover:text-accent-600 transition-colors">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <span className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-secondary-600 to-accent-600 text-white rounded-xl font-bold text-sm shadow-soft">
                        {post.category}
                      </span>
                      <span className="text-surface-500 ml-4 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="heading-card text-surface-900 mb-4 group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="body-regular text-surface-600 mb-6">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-surface-500 text-sm flex items-center">
                        <Calendar size={14} className="mr-2" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                      <motion.button 
                        onClick={() => showToast.blogLoginRequired()}
                        className="inline-flex items-center text-primary-600 hover:text-accent-600 font-bold transition-colors group/btn"
                        whileHover={{ x: 4 }}
                      >
                        <span>Read More</span>
                        <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
                ))}
              </div>
            ) : (
              <motion.div 
                className="text-center py-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <BookOpen size={40} className="text-primary-600" />
                </div>
                <h3 className="heading-card text-surface-900 mb-4">
                  No articles found in &quot;{selectedCategory}&quot;
                </h3>
                <p className="body-regular text-surface-600 mb-8">
                  We&apos;re working on adding more content in this category. Check back soon or explore other topics.
                </p>
                <motion.button
                  onClick={() => setSelectedCategory('All Posts')}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl hover:from-primary-700 hover:to-accent-700 transition-all duration-300 font-bold shadow-soft hover:shadow-elevated focus-ring"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>View All Posts</span>
                  <ArrowRight size={16} />
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      </motion.section>

      {/* Newsletter Signup - Professional Dark */}
      <motion.section 
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Sophisticated Dark Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-surface-900 via-surface-800 to-surface-900"></div>
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 via-transparent to-accent-900/10"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            {/* Section Header */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-accent-300 font-bold rounded-2xl shadow-glow border border-accent-400/30 mb-8">
                <Mail size={20} className="mr-2" />
                NEWSLETTER
              </div>
              <h2 className="heading-section text-white mb-8">
                Stay Updated with Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400">
                  Latest Insights
                </span>
              </h2>
              <p className="body-large text-surface-300 mb-12">
                Get expert perspectives on business strategy and leadership delivered directly to your inbox.
              </p>
            </motion.div>

            {/* Newsletter Form */}
            <motion.form 
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-surface-700 rounded-xl text-white placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-accent-400 font-medium text-lg transition-all duration-300"
              />
              <motion.button 
                type="submit"
                disabled={isSubscribing || !newsletterEmail.trim()}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl hover:from-primary-700 hover:to-accent-700 transition-all duration-300 font-bold text-lg shadow-soft hover:shadow-elevated focus-ring disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={!isSubscribing ? { scale: 1.05 } : {}}
                whileTap={!isSubscribing ? { scale: 0.98 } : {}}
              >
                {isSubscribing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Subscribing...</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe Now</span>
                    <Mail size={18} />
                  </>
                )}
              </motion.button>
            </motion.form>

            {/* Disclaimer */}
            <motion.p 
              className="text-surface-400 text-sm flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <CheckCircle2 size={16} className="mr-2" />
              No spam. Unsubscribe at any time.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* CTA Section - Professional Gradient */}
      <motion.section 
        className="relative py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Sophisticated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-accent-600 to-secondary-600"></div>
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface-900/20 via-transparent to-surface-900/10"></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-bold rounded-2xl shadow-glow border border-white/30 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <CheckCircle2 size={20} className="mr-2" />
              READY TO START?
            </motion.div>
            <motion.h2 
              className="heading-section text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Apply These Insights?
            </motion.h2>
            <motion.p 
              className="body-large text-white/90 mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Transform these strategic concepts into actionable plans for your organization. Let&apos;s discuss how our expertise can drive your success.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  href="/booking"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-primary-600 font-bold text-lg rounded-2xl hover:bg-surface-50 transition-all duration-300 shadow-soft hover:shadow-elevated focus-ring"
                >
                  <Calendar size={20} />
                  <span>Schedule Strategy Session</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
