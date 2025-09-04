import { motion } from 'framer-motion'
import { FiCalendar, FiMapPin, FiAward, FiCode } from 'react-icons/fi'

const About = () => {
  const experiences = [
    {
      year: 'Feb 2025 - Present',
      title: 'Software Developer Intern',
      company: 'Multifly Travel Pvt Ltd.',
      description: 'Leading development of enterprise web applications using React, Node.js, and AWS.'
    }
  ]

  const education = [
    {
      year: '2021 - 2025',
      degree: 'Bachelor of Computer Science and Engineering',
      school: 'Dr. Babasaheb Ambedakar Technological University, Lonere',
      description: 'Specialized in Software Engineering and Web Development.'
    },
    {
      year: '2019 - 2021',
      degree: 'HSC - Science',
      school: 'Maharashtra State Board',
      description: 'With 84%'
    },
    {
      year: '2018 - 2019',
      degree: 'SSC',
      school: 'Maharashtra State Board',
      description: 'With 88.20%'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Who I Am?
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
                             <p>
                 I'm a passionate Full-Stack Developer with experience in creating 
                 innovative web solutions. I love solving complex problems and turning ideas into 
                 reality through clean, efficient code.
               </p>
               <p>
                 My journey in tech started with curiosity and has evolved into a deep passion for 
                 creating user-centric applications. I believe in writing code that not only works 
                 but is also maintainable, scalable, and beautiful.
               </p>
               <p>
                 When I'm not coding, you can find me exploring new technologies, contributing to 
                 open-source projects, or sharing knowledge with the developer community.
               </p>
            </div>

                         {/* Quick Stats */}
             <div className="grid grid-cols-2 gap-6 mt-8">
               <div className="text-center p-4 bg-white dark:bg-dark-700 rounded-lg shadow-md">
                 <div className="text-2xl font-bold text-primary-600">1+</div>
                 <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
               </div>
               <div className="text-center p-4 bg-white dark:bg-dark-700 rounded-lg shadow-md">
                 <div className="text-2xl font-bold text-primary-600">10+</div>
                 <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
               </div>
             </div>
          </motion.div>

          {/* Experience & Education Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Experience & Education
            </h3>
            
            {/* Experience */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                <FiCode className="w-5 h-5 mr-2 text-primary-600" />
                Work Experience
              </h4>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-700"
                  >
                    <div className="absolute -left-2 w-4 h-4 bg-primary-600 rounded-full"></div>
                    <div className="text-sm text-primary-600 font-medium">{exp.year}</div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">{exp.title}</div>
                    <div className="text-primary-600 font-medium">{exp.company}</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">{exp.description}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                <FiAward className="w-5 h-5 mr-2 text-primary-600" />
                Education
              </h4>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-700"
                  >
                    <div className="absolute -left-2 w-4 h-4 bg-primary-600 rounded-full"></div>
                    <div className="text-sm text-primary-600 font-medium">{edu.year}</div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">{edu.degree}</div>
                    <div className="text-primary-600 font-medium">{edu.school}</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">{edu.description}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
