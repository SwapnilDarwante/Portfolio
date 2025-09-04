import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiEye } from 'react-icons/fi'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Locate',
      description: 'A full-stack platform featuring user authentication, interactive map-based recycling point locator, pickup scheduling, and responsive UI with Tailwind CSS.',
      image: 'https://private-user-images.githubusercontent.com/65482186/286958510-02809587-82e8-4633-a53e-74e7f74654b4.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTY1NDU1NDAsIm5iZiI6MTc1NjU0NTI0MCwicGF0aCI6Ii82NTQ4MjE4Ni8yODY5NTg1MTAtMDI4MDk1ODctODJlOC00NjMzLWE1M2UtNzRlN2Y3NDY1NGI0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA4MzAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwODMwVDA5MTQwMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQ3MTA5N2JjZjZhYzk3Nzg4MzVkZGQ0YmVjNjgxYzI0NjAzZGIxMTg3ZTY4Mzk5NTM4MWFjOTc0N2U2NTNiNGQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.qd9mIo_yT5ScqM1UqM-wmkSny7ED1soacIe5QoK6NHQ',
      tech: ['React', 'Node.js', 'ExpressJs','MongoDB', 'NextJs', 'Tailwind CSS'],
      liveUrl: 'https://elocateinnovate.vercel.app/',
      githubUrl: 'https://github.com/SwapnilDarwante/Elocate',
      featured: true
    },
    {
      id: 2,
      title: 'Hardware Inventory Management System',
      description: 'Develop a full-stack Hardware Inventory Management System for a college enabling branch-wise and lab-wise hardware tracking with a responsive Tailwind CSS UI.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
      tech: ['React', 'HTML', 'CSS', 'Material-UI', 'Redux','Firebase'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application that provides current weather conditions, forecasts, and interactive maps using OpenWeatherMap API.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'Chart.js'],
      liveUrl: 'https://weather-app-three-fawn-73.vercel.app/',
      githubUrl: 'https://github.com/SwapnilDarwante/WeatherApp',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with modern web technologies and featuring smooth animations and dark mode.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'A content management system for blogs with markdown support, user roles, and SEO optimization features.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop',
      tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time chat application with user authentication, private messaging, and file sharing capabilities.',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=500&h=300&fit=crop',
      tech: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false
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
    <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents a unique challenge and learning experience.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          {projects.filter(project => project.featured).map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative bg-white dark:bg-dark-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 card-hover"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Project Links */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/90 text-gray-900 rounded-full hover:bg-white transition-colors duration-300"
                    aria-label="View live project"
                  >
                    <FiEye className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/90 text-gray-900 rounded-full hover:bg-white transition-colors duration-300"
                    aria-label="View source code"
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-300"
                  >
                    <FiGithub className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Other Projects
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group bg-white dark:bg-dark-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 dark:bg-dark-600 text-gray-600 dark:text-gray-400 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-dark-600 text-gray-600 dark:text-gray-400 text-xs rounded">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors duration-300"
                    >
                      <FiExternalLink className="w-3 h-3" />
                      <span>Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium transition-colors duration-300"
                    >
                      <FiGithub className="w-3 h-3" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Interested in working together? Let's discuss your project!
          </p>
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
