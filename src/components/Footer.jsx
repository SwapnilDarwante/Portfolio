import { motion } from 'framer-motion'
import { FiArrowUp, FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/SwapnilDarwante', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/swapnil-darwante-8a199b302/', label: 'LinkedIn' }
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-dark-900 text-white relative">
      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-all duration-300"
        aria-label="Back to top"
      >
        <FiArrowUp className="w-5 h-5" />
      </motion.button>

      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Swapnil Darwante
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full-Stack Developer passionate about creating innovative web solutions 
              and turning ideas into reality through clean, efficient code.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link, index) => (
                <motion.button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05, duration: 0.5 }}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm"
                >
                  {link}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="p-3 bg-gray-800 hover:bg-primary-600 text-gray-400 hover:text-white rounded-full transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full h-px bg-gray-800 my-8"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-gray-400 text-sm"
        >
          <p>
            © {currentYear} Swapnil Darwante. All rights reserved. Made with{' '}
            <FiHeart className="inline w-4 h-4 text-red-500 mx-1" />
            {' '}and lots of coffee.
          </p>
          <p className="mt-2">
            Built with React, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </footer>
  )
}

export default Footer
