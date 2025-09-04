import { motion } from 'framer-motion'
import { 
  FiCode, FiDatabase, FiServer, FiMonitor, FiTool
} from 'react-icons/fi'

const Skills = () => {
  const skillCategories = [
    {
      name: 'Frontend Development',
      icon: FiMonitor,
      skills: [
        { name: 'HTML5', icon: FiCode, level: 95, color: 'text-orange-500' },
        { name: 'CSS3', icon: FiCode, level: 90, color: 'text-blue-500' },
        { name: 'JavaScript', icon: FiCode, level: 92, color: 'text-yellow-500' },
        { name: 'React.js', icon: FiCode, level: 90, color: 'text-blue-400' },
        { name: 'Tailwind CSS', icon: FiCode, level: 88, color: 'text-cyan-500' }
      ]
    },
    {
      name: 'Backend Development',
      icon: FiServer,
      skills: [
        { name: 'Node.js', icon: FiCode, level: 88, color: 'text-green-600' },
        { name: 'Express.js', icon: FiCode, level: 85, color: 'text-gray-600' },
        { name: 'Python', icon: FiCode, level: 80, color: 'text-blue-500' },
        { name: 'Java', icon: FiCode, level: 75, color: 'text-red-600' }
      ]
    },
    {
      name: 'Database & Cloud',
      icon: FiDatabase,
      skills: [
        { name: 'MongoDB', icon: FiCode, level: 85, color: 'text-green-500' },
        { name: 'PostgreSQL', icon: FiCode, level: 80, color: 'text-blue-600' },
        { name: 'MySQL', icon: FiCode, level: 78, color: 'text-blue-500' },
        { name: 'AWS', icon: FiCode, level: 80, color: 'text-orange-500' }
      ]
    },
    {
      name: 'Tools & Others',
      icon: FiTool,
      skills: [
        { name: 'Git', icon: FiCode, level: 90, color: 'text-orange-600' },
        { name: 'Docker', icon: FiCode, level: 75, color: 'text-blue-500' },
        { name: 'Figma', icon: FiCode, level: 70, color: 'text-purple-500' },
        { name: 'VS Code', icon: FiCode, level: 95, color: 'text-blue-500' },
        { name: 'Postman', icon: FiCode, level: 85, color: 'text-orange-500' }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg mr-4">
                  <category.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.name}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <skill.icon className={`w-5 h-5 ${skill.color}`} />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                    </div>
                    
                    {/* Skill Level Bar */}
                    <div className="flex items-center space-x-2">
                      <div className="w-20 h-2 bg-gray-200 dark:bg-dark-600 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3, duration: 1 }}
                          className="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
                        />
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 w-8 text-right">
                        {skill.level}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Other Skills & Competencies
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'RESTful APIs', 'GraphQL', 'Microservices', 'CI/CD', 'Agile/Scrum', 'UI/UX Design',
              'Performance Optimization', 'Security Best Practices', 'Testing (Jest, Cypress)', 
              'SEO Optimization', 'Cross-browser Compatibility', 'Responsive Design'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + (index * 0.05) }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-100 dark:bg-dark-600 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg text-center text-sm font-medium hover:bg-primary-100 hover:text-primary-700 dark:hover:bg-primary-900 dark:hover:text-primary-300 transition-all duration-300"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
