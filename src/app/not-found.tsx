import { motion } from "motion";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex items-center justify-center p-6 overflow-hidden">
      {/* Background animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-10"
            initial={{
              x: Math.random() * 100 + "vw",
              y: Math.random() * 100 + "vh",
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: ["0vh", "-100vh"],
              opacity: [0.1, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: Math.random() * 20 + 10 + "px",
              height: Math.random() * 20 + 10 + "px",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white">
        {/* 404 Text */}
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-9xl md:text-[12rem] font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500"
        >
          404
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="text-2xl md:text-4xl font-light mt-4"
        >
          Oops! Page Not Found
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-300 mt-2 max-w-md mx-auto"
        >
          It seems you’ve wandered into the void. Let’s get you back to reality!
        </motion.p>

        {/* Back to Home Button */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8"
        >
          <Link href="/">
            <a className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              Return Home
            </a>
          </Link>
        </motion.div>

        {/* Animated Orbiting Elements */}
        <motion.div
          className="absolute -top-20 -left-20 w-40 h-40 border-2 border-dashed border-cyan-400 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-24 -right-24 w-32 h-32 border-2 border-dashed border-pink-400 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Footer Credit */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-4 text-gray-400 text-sm"
      >
        Designed with ❤️ by xAI
      </motion.p>
    </div>
  );
}
