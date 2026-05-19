import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const { isDark } = useTheme();

  const experiences = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      location: 'Bangalore, India',
      duration: 'Jan 2022 - Present',
      type: 'Full-time',
      description:
        'Leading frontend development for enterprise web applications using React and modern JavaScript frameworks.',
      achievements: [
        'Developed and maintained 15+ responsive web applications',
        'Improved application performance by 45% through optimization',
        'Mentored junior developers and conducted code reviews',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
      ],
      tech: ['React', 'TypeScript', 'Redux', 'Tailwind CSS', 'Jest'],
      companyUrl: 'https://example.com',
    },
    {
      id: 2,
      title: 'React Developer',
      company: 'Digital Agency Pro',
      location: 'Remote',
      duration: 'Jun 2021 - Dec 2021',
      type: 'Contract',
      description:
        'Built custom React applications for various clients ranging from startups to established businesses.',
      achievements: [
        'Delivered 20+ client projects on time and within budget',
        'Collaborated with design teams to implement pixel-perfect UIs',
        'Integrated third-party APIs and payment gateways',
        'Optimized SEO and accessibility for all projects',
      ],
      tech: ['React', 'Next.js', 'Node.js', 'MongoDB', 'GraphQL'],
      companyUrl: 'https://example.com',
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'StartUp Hub',
      location: 'Mumbai, India',
      duration: 'Jan 2021 - May 2021',
      type: 'Full-time',
      description: 'Developed and maintained web applications for early-stage startups.',
      achievements: [
        'Contributed to 8+ production applications',
        'Learned and implemented React best practices',
        'Participated in agile development processes',
        'Created reusable component libraries',
      ],
      tech: ['React', 'JavaScript', 'CSS3', 'Git', 'Bootstrap'],
      companyUrl: 'https://example.com',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants = {
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
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section id="experience" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience & Journey</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            My professional journey and the roles that have shaped my development career
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div
            className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 ${
              isDark ? 'bg-gray-700' : 'bg-gray-300'
            }`}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-12"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                custom={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 border-4 border-white dark:border-gray-900 z-10" />

                {/* Experience Card */}
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}
                >
                  <div className={`p-6 rounded-2xl glass`}>
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                        <div>
                          <h3
                            className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}
                          >
                            {experience.title}
                          </h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <Briefcase
                              size={16}
                              className={isDark ? 'text-purple-400' : 'text-purple-600'}
                            />
                            <a
                              href={experience.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`font-medium hover:text-purple-400 transition-colors ${
                                isDark ? 'text-gray-300' : 'text-gray-700'
                              }`}
                            >
                              {experience.company}
                            </a>
                            <ExternalLink
                              size={14}
                              className={isDark ? 'text-gray-500' : 'text-gray-400'}
                            />
                          </div>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            experience.type === 'Full-time'
                              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                              : experience.type === 'Contract'
                                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                                : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                          }`}
                        >
                          {experience.type}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <div
                          className={`flex items-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                        >
                          <Calendar size={14} className="mr-1" />
                          {experience.duration}
                        </div>
                        <div
                          className={`flex items-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                        >
                          <MapPin size={14} className="mr-1" />
                          {experience.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4
                        className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}
                      >
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className={`flex items-start ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                          >
                            <span className="text-purple-400 mr-2 mt-1">▸</span>
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4
                        className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}
                      >
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.tech.map(tech => (
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
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Download Resume Button */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16"
        >
          <motion.a
            href="/resume.pdf"
            download
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg`}
          >
            <Briefcase size={20} className="mr-2" />
            Download Full Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
