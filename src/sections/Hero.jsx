import { motion } from 'framer-motion'
import { FiArrowDown, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/SwapnilDarwante', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/swapnil-darwante-8a199b302/', label: 'LinkedIn' }
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-20">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Profile Image */}
          <div className="relative mx-auto mb-8">
                      <motion.div
            animate={{ 
              boxShadow: [
                "0 0 0 0 rgba(59, 130, 246, 0.4)",
                "0 0 0 20px rgba(59, 130, 246, 0)",
                "0 0 0 0 rgba(59, 130, 246, 0)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary-400 to-purple-500 mx-auto flex items-center justify-center text-white text-4xl md:text-5xl font-bold"
          >
            SD
          </motion.div>
          </div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Swapnil Darwante
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-6"
          >
            Full-Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8"
          >
            Passionate about creating beautiful, functional, and user-friendly web applications. 
            I love turning ideas into reality through code.
          </motion.p>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <button 
            onClick={scrollToAbout}
            className="btn-primary"
          >
            View Projects
          </button>
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex justify-center space-x-6 mb-8"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.8 }}
              className="p-3 rounded-full bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900 dark:hover:text-primary-400 transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 hover:text-primary-600 transition-colors duration-300"
            aria-label="Scroll down"
          >
            <FiArrowDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
