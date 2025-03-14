// pages/404.jsx
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NotFound() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  const numberVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl w-full text-center text-white"
      >
        {/* 404 Number Animation */}
        <motion.h1
          variants={numberVariants}
          className="text-9xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500"
        >
          404
        </motion.h1>

        {/* Main Message */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-semibold mb-6"
        >
          Oops! Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg mx-auto"
        >
          It seems you've ventured into the unknown. The page you're looking for doesn't exist or has been moved.
        </motion.p>

        {/* Back Home Button */}
        <motion.div variants={itemVariants}>
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-medium text-lg shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300"
            >
              Return Home
            </motion.button>
          </Link>
        </motion.div>

        {/* Floating Particles */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
