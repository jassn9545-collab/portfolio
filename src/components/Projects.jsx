import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { Github, ExternalLink, Filter, Code, Database, Globe } from 'lucide-react';

const Projects = () => {
  const { isDark } = useTheme();
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = useMemo(
    () => [
      {
        id: 1,
        title: 'E-Commerce Platform',
        description:
          'A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
        category: 'Fullstack',
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        featured: true,
      },
      {
        id: 2,
        title: 'Task Management App',
        description:
          'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
        tech: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Socket.io'],
        category: 'Fullstack',
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        featured: true,
      },
      {
        id: 3,
        title: 'Weather Dashboard',
        description:
          'A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
        image: 'https://picsum.photos/seed/weather-dashboard/600/400.jpg',
        tech: ['React', 'Weather API', 'Chart.js', 'Tailwind CSS'],
        category: 'React',
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        featured: false,
      },
      {
        id: 4,
        title: 'Social Media Dashboard',
        description:
          'A comprehensive social media analytics dashboard with real-time data visualization and engagement metrics.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
        tech: ['React', 'Redux', 'D3.js', 'Node.js', 'MongoDB'],
        category: 'React',
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        featured: true,
      },
      {
        id: 5,
        title: 'Portfolio Website',
        description:
          'A modern, responsive portfolio website with smooth animations, dark mode support, and optimized performance.',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
        tech: ['React', 'Tailwind CSS', 'Framer Motion', 'React Router'],
        category: 'React',
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        featured: false,
      },
      {
        id: 6,
        title: 'Blog Platform',
        description:
          'A feature-rich blogging platform with markdown support, user authentication, and content management system.',
        image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop',
        tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
        category: 'Fullstack',
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        featured: true,
      },
    ],
    []
  );

  const filters = ['All', 'React', 'Fullstack'];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter(project => project.category === activeFilter);
  }, [activeFilter, projects]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const projectVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.03,
      y: -10,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  const getCategoryIcon = category => {
    switch (category) {
      case 'React':
        return <Code size={20} />;
      case 'Fullstack':
        return <Database size={20} />;
      default:
        return <Globe size={20} />;
    }
  };

  return (
    <section id="projects" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`text-lg max-w-2xl mx-auto mb-8 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Explore my recent work and personal projects showcasing my skills and expertise
          </motion.p>

          {/* Filter Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            {filters.map(filter => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variants={projectVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : isDark
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                <Filter size={16} className="inline mr-2" />
                {filter}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              custom={index}
              whileHover="hover"
              className={`group relative rounded-2xl overflow-hidden glass cursor-pointer`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium glass ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    {getCategoryIcon(project.category)}
                    <span className="ml-1">{project.category}</span>
                  </span>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                      ⭐ Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>

                <p
                  className={`text-sm mb-4 line-clamp-2 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map(tech => (
                    <span
                      key={tech}
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        isDark
                          ? 'bg-purple-900/30 text-purple-300 border border-purple-500/30'
                          : 'bg-purple-100 text-purple-700 border border-purple-300'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        isDark ? 'text-gray-600' : 'text-gray-500'
                      }`}
                    >
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={projectVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </motion.a>

                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={projectVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-300 ${
                      isDark
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        {filteredProjects.length > 0 && (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              variants={projectVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center px-8 py-3 rounded-lg border-2 font-semibold transition-all duration-300 ${
                isDark
                  ? 'border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900'
                  : 'border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
              }`}
            >
              <Github size={20} className="mr-2" />
              View More on GitHub
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
