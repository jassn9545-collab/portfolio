import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { Code2, GitBranch, Users, Clock, TrendingUp, Award, Zap, Target } from 'lucide-react';

const StatsDashboard = () => {
  const { isDark } = useTheme();
  const [activeMetric, setActiveMetric] = useState(null);
  const [animatedStats, setAnimatedStats] = useState({
    codeLines: 0,
    commits: 0,
    projects: 0,
    hours: 0,
    clients: 0,
    awards: 0,
    performance: 0,
    accuracy: 0,
  });

  const targetStats = React.useMemo(
    () => ({
      codeLines: 50000,
      commits: 1250,
      projects: 25,
      hours: 1000,
      clients: 5,
      awards: 8,
      performance: 98,
      accuracy: 95,
    }),
    []
  );

  const metrics = [
    {
      id: 'codeLines',
      label: 'Lines of Code',
      value: targetStats.codeLines.toLocaleString(),
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      description: 'Code written across all projects',
      unit: 'lines',
    },
    {
      id: 'commits',
      label: 'Git Commits',
      value: targetStats.commits.toLocaleString(),
      icon: GitBranch,
      color: 'from-green-500 to-teal-500',
      description: 'Version control commits',
      unit: 'commits',
    },
    {
      id: 'projects',
      label: 'Projects Completed',
      value: targetStats.projects,
      icon: Target,
      color: 'from-purple-500 to-pink-500',
      description: 'Successfully delivered projects',
      unit: 'projects',
    },
    {
      id: 'hours',
      label: 'Coding Hours',
      value: targetStats.hours.toLocaleString(),
      icon: Clock,
      color: 'from-orange-500 to-red-500',
      description: 'Total development hours',
      unit: 'hours',
    },
    {
      id: 'clients',
      label: 'Happy Clients',
      value: targetStats.clients,
      icon: Users,
      color: 'from-indigo-500 to-purple-500',
      description: 'Satisfied clients worldwide',
      unit: 'clients',
    },
    {
      id: 'awards',
      label: 'Achievements',
      value: targetStats.awards,
      icon: Award,
      color: 'from-yellow-500 to-orange-500',
      description: 'Awards and recognitions',
      unit: 'awards',
    },
    {
      id: 'performance',
      label: 'Performance Score',
      value: `${targetStats.performance}%`,
      icon: TrendingUp,
      color: 'from-emerald-500 to-green-500',
      description: 'Average performance optimization',
      unit: '%',
    },
    {
      id: 'accuracy',
      label: 'Code Accuracy',
      value: `${targetStats.accuracy}%`,
      icon: Zap,
      color: 'from-pink-500 to-rose-500',
      description: 'Bug-free code delivery rate',
      unit: '%',
    },
  ];

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setAnimatedStats(prevStats => {
        const newStats = {};
        Object.keys(targetStats).forEach(key => {
          newStats[key] = Math.floor(targetStats[key] * easeOutQuart);
        });
        return newStats;
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [targetStats]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  const getAnimatedValue = key => {
    const value = animatedStats[key];
    if (key === 'performance' || key === 'accuracy') {
      return `${value}%`;
    }
    return value.toLocaleString();
  };

  return (
    <section id="stats" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-4" variants={cardVariants}>
            <span className="gradient-text">Interactive Stats Dashboard</span>
          </motion.h2>
          <motion.p
            className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
            variants={cardVariants}
          >
            Real-time metrics showcasing my development journey and achievements
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              variants={cardVariants}
              custom={index}
              whileHover="hover"
              onMouseEnter={() => setActiveMetric(metric.id)}
              onMouseLeave={() => setActiveMetric(null)}
              className={`relative p-6 rounded-2xl glass cursor-pointer group overflow-hidden`}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Icon */}
              <motion.div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${metric.color} mb-4`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <metric.icon size={24} className="text-white" />
              </motion.div>

              {/* Value */}
              <div className={`text-2xl md:text-3xl font-bold mb-2 gradient-text`}>
                {getAnimatedValue(metric.id)}
              </div>

              {/* Label */}
              <div
                className={`text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
              >
                {metric.label}
              </div>

              {/* Description (shown on hover) */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: activeMetric === metric.id ? 1 : 0,
                  height: activeMetric === metric.id ? 'auto' : 0,
                }}
                className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
              >
                {metric.description}
              </motion.div>

              {/* Animated Ring for percentage metrics */}
              {(metric.id === 'performance' || metric.id === 'accuracy') && (
                <div className="absolute top-2 right-2">
                  <svg className="w-8 h-8 transform -rotate-90">
                    <circle
                      cx="16"
                      cy="16"
                      r="14"
                      stroke={isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}
                      strokeWidth="2"
                      fill="none"
                    />
                    <motion.circle
                      cx="16"
                      cy="16"
                      r="14"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 14}`}
                      strokeDashoffset={`${2 * Math.PI * 14 * (1 - animatedStats[metric.id] / 100)}`}
                      transition={{ duration: 2, ease: 'easeOut' }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#3B82F6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Progress Bars Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className={`p-8 rounded-2xl glass`}
        >
          <h3 className={`text-2xl font-bold mb-6 text-center gradient-text`}>Skill Proficiency</h3>

          <div className="space-y-6">
            {[
              { name: 'Frontend Development', level: 90, color: 'from-blue-500 to-cyan-500' },
              { name: 'React & Ecosystem', level: 85, color: 'from-purple-500 to-pink-500' },
              { name: 'UI/UX Design', level: 75, color: 'from-green-500 to-teal-500' },
              { name: 'Performance Optimization', level: 80, color: 'from-orange-500 to-red-500' },
              { name: 'Problem Solving', level: 88, color: 'from-indigo-500 to-purple-500' },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                custom={index}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {skill.name}
                  </span>
                  <span
                    className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                  >
                    {skill.level}%
                  </span>
                </div>
                <div
                  className={`w-full h-3 rounded-full overflow-hidden ${
                    isDark ? 'bg-gray-700' : 'bg-gray-200'
                  }`}
                >
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.5,
                      delay: index * 0.2,
                      ease: 'easeOut',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Facts Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {[
            {
              emoji: '☕',
              title: 'Coffee Cups',
              value: '847',
              description: 'Coffee cups consumed while coding',
            },
            {
              emoji: '🐛',
              title: 'Bugs Fixed',
              value: '2.3K',
              description: 'Bugs squashed across projects',
            },
            {
              emoji: '🚀',
              title: 'Deployments',
              value: '156',
              description: 'Successful deployments to production',
            },
          ].map((fact, index) => (
            <motion.div
              key={fact.title}
              variants={cardVariants}
              custom={index}
              whileHover="hover"
              className={`p-6 rounded-2xl glass text-center`}
            >
              <div className="text-4xl mb-3">{fact.emoji}</div>
              <div className={`text-3xl font-bold mb-2 gradient-text`}>{fact.value}</div>
              <div className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {fact.title}
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {fact.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsDashboard;
