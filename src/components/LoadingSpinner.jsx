import { motion } from 'framer-motion'

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center gradient-bg">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full mx-auto mb-4"
        />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2"
        >
          Loading Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-gray-500 dark:text-gray-400"
        >
          Please wait while we prepare something amazing...
        </motion.p>
      </div>
    </div>
  )
}

export default LoadingSpinner
