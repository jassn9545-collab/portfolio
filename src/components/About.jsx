import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { User, Briefcase, Award, Code, Calendar, MapPin } from 'lucide-react';

const About = () => {
  const { isDark } = useTheme();

  const stats = [
    {
      icon: Briefcase,
      value: '3+',
      label: 'Years Experience',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Code,
      value: '25+',
      label: 'Projects Completed',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Award,
      value: '5+',
      label: 'Happy Clients',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: User,
      value: '1000+',
      label: 'Hours Coded',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Figma', 'Webpack', 'Docker', 'CI/CD'] },
  ];

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

  const statVariants = {
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
      y: -5,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section id="about" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            Get to know me better - my journey, skills, and what drives me as a developer
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image and Basic Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="relative">
              <div className="relative w-64 h-64 mx-auto">
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 animate-pulse`}
                />
                <div
                  className={`absolute inset-2 rounded-full ${isDark ? 'bg-gray-800' : 'bg-white'} flex items-center justify-center`}
                >
                  <User size={80} className={isDark ? 'text-gray-600' : 'text-gray-400'} />
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center lg:text-left">
              <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Amandeep Singh
              </h3>
              <p className="text-purple-400 font-medium mb-4">
                React Developer | Frontend Engineer
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm">
                <div className={`flex items-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <MapPin size={16} className="mr-1" />
                  India
                </div>
                <div className={`flex items-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <Calendar size={16} className="mr-1" />
                  Available for hire
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* About Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Hello! I'm Amandeep, a passionate frontend developer with over 3 years of experience
              in building modern, responsive web applications. I specialize in React and its
              ecosystem, creating beautiful and functional user interfaces that deliver exceptional
              user experiences.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
            >
              My journey in web development started with a curiosity about how websites work, and it
              has evolved into a career focused on crafting digital solutions that make a
              difference. I'm constantly learning new technologies and best practices to stay
              current in this ever-evolving field.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
            >
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing my knowledge with the developer community.
            </motion.p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={statVariants}
              whileHover="hover"
              className={`p-6 rounded-2xl glass text-center group cursor-pointer`}
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon size={32} className="text-white" />
              </div>
              <div className={`text-3xl font-bold mb-2 gradient-text`}>{stat.value}</div>
              <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold text-center mb-8">
            <span className="gradient-text">Technical Skills</span>
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillCategory, categoryIndex) => (
              <motion.div
                key={skillCategory.category}
                variants={itemVariants}
                className={`p-6 rounded-2xl glass`}
              >
                <h4 className={`text-lg font-semibold mb-4 gradient-text`}>
                  {skillCategory.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        isDark
                          ? 'bg-purple-900/30 text-purple-300 border border-purple-500/30'
                          : 'bg-purple-100 text-purple-700 border border-purple-300'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
