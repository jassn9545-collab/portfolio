import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

const Skills = () => {
  const { isDark } = useTheme();

  const skills = {
    Frontend: [
      { name: 'React', icon: '⚛️', level: 90, color: 'from-cyan-400 to-blue-500' },
      { name: 'JavaScript', icon: '🟨', level: 85, color: 'from-yellow-400 to-yellow-600' },
      { name: 'TypeScript', icon: '🔷', level: 80, color: 'from-blue-400 to-blue-600' },
      { name: 'HTML5', icon: '📄', level: 95, color: 'from-orange-400 to-red-500' },
      { name: 'CSS3', icon: '🎨', level: 90, color: 'from-blue-400 to-purple-500' },
      { name: 'Tailwind CSS', icon: '🌊', level: 85, color: 'from-cyan-400 to-teal-500' },
    ],
    Backend: [
      { name: 'Node.js', icon: '🟢', level: 75, color: 'from-green-400 to-green-600' },
      { name: 'Express', icon: '🚂', level: 70, color: 'from-gray-400 to-gray-600' },
      { name: 'MongoDB', icon: '🍃', level: 65, color: 'from-green-500 to-green-700' },
      { name: 'PostgreSQL', icon: '🐘', level: 60, color: 'from-blue-500 to-blue-700' },
      { name: 'REST APIs', icon: '🔌', level: 80, color: 'from-purple-400 to-purple-600' },
    ],
    Tools: [
      { name: 'Git', icon: '📦', level: 85, color: 'from-orange-400 to-red-500' },
      { name: 'VS Code', icon: '💻', level: 90, color: 'from-blue-400 to-blue-600' },
      { name: 'Figma', icon: '🎯', level: 70, color: 'from-purple-400 to-pink-500' },
      { name: 'Webpack', icon: '📦', level: 65, color: 'from-blue-500 to-blue-700' },
      { name: 'Docker', icon: '🐳', level: 55, color: 'from-cyan-400 to-blue-500' },
      { name: 'CI/CD', icon: '🔄', level: 60, color: 'from-green-400 to-teal-500' },
    ],
  };

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

  const categoryVariants = {
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

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
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
    <section id="skills" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={categoryVariants} className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </motion.h2>
          <motion.p
            variants={categoryVariants}
            className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            My technical toolkit and proficiency levels in modern web development technologies
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              variants={categoryVariants}
              custom={categoryIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div className={`p-6 rounded-2xl glass h-full`}>
                <h3 className={`text-xl font-bold mb-6 gradient-text`}>{category}</h3>
                <div className="space-y-4">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      custom={skillIndex}
                      whileHover="hover"
                      className={`p-4 rounded-xl glass cursor-pointer group`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span
                            className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}
                          >
                            {skill.name}
                          </span>
                        </div>
                        <span
                          className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                        >
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div
                        className={`w-full h-2 rounded-full overflow-hidden ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}
                      >
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.5 + skillIndex * 0.1,
                            ease: 'easeOut',
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16"
        >
          <motion.h3 variants={categoryVariants} className="text-2xl font-bold text-center mb-8">
            <span className="gradient-text">Other Technologies</span>
          </motion.h3>

          <motion.div variants={categoryVariants} className={`p-8 rounded-2xl glass text-center`}>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Redux Toolkit',
                'React Router',
                'Axios',
                'Jest',
                'React Testing Library',
                'ESLint',
                'Prettier',
                'Netlify',
                'Vercel',
                'AWS',
                'Firebase',
                'GraphQL',
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  variants={skillVariants}
                  custom={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isDark
                      ? 'bg-purple-900/30 text-purple-300 border border-purple-500/30 hover:bg-purple-900/50'
                      : 'bg-purple-100 text-purple-700 border border-purple-300 hover:bg-purple-200'
                  }`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
