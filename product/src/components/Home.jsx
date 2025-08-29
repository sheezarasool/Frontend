import { FaBolt, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8 lg:py-16">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

        {/* ---------- Left Section ---------- */}
        <motion.div
          className="space-y-6 text-center lg:text-left"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, staggerChildren: 0.2 },
            },
          }}
        >
          {/* Tagline */}
          <motion.div
            className="flex items-center justify-center lg:justify-start space-x-2 text-xs font-semibold text-gray-500 tracking-widest uppercase"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <FaBolt className="text-yellow-500 w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm">AI-POWERED RESUME INTELLIGENCE</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          >
            The Future of<br />
            Enterprise<br />
            Hiring<br />
            <span className="text-blue-600">is Here</span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            SmartResume empowers enterprise teams with AI-driven recruitment
            intelligence. Reduce time-to-hire by 75%, eliminate bias, and
            discover exceptional talent with our advanced machine learning
            platform trusted by Fortune 500 companies.
          </motion.p>

          {/* CTA */}
          <motion.button
            className="px-6 py-3 bg-gray-900 text-white font-medium rounded-lg shadow hover:bg-gray-800 transition text-sm lg:text-base"
            variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Create Free Account →
          </motion.button>

          {/* Security Note */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-4 text-xs lg:text-sm text-gray-500"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            <div className="flex items-center space-x-1">
              <FaBolt className="w-3 h-3 text-yellow-500" />
              <span>Enterprise-grade security</span>
            </div>
            <span className="hidden sm:inline text-gray-400">•</span>
            <span>SOC 2 & GDPR Compliant</span>
          </motion.div>
        </motion.div>

        {/* ---------- Right Section (Card) ---------- */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="bg-white shadow-xl rounded-2xl p-4 sm:p-6 w-full max-w-sm sm:max-w-md lg:max-w-lg border border-gray-100 relative"
            whileHover={{ scale: 1.02 }}
          >
            {/* Pin Icon */}
            <motion.div
              className="absolute -right-3 -top-3 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-yellow-500 flex items-center justify-center text-white shadow text-sm"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              📌
            </motion.div>

            {/* Card Header */}
            <div className="flex justify-between items-center mb-4 sm:mb-5">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900">
                Candidate Analysis
              </h3>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs sm:text-sm text-green-600 font-medium">
                  AI Processing
                </span>
              </div>
            </div>

            {/* Progress Bars */}
            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              {[
                { label: "Skills Match", value: 92, color: "bg-green-500" },
                { label: "Experience Level", value: 85, color: "bg-blue-500" },
                { label: "Culture Fit", value: 78, color: "bg-purple-500" },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs sm:text-sm text-gray-600 mb-1">
                    <span className="font-medium">{item.label}</span>
                    <span className="text-gray-900 font-bold">{item.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full ${item.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${item.value}%` }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.3 }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Recommendation Box */}
            <motion.div
              className="bg-green-50 border border-green-200 text-green-800 p-3 sm:p-4 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="flex items-start space-x-2 sm:space-x-3">
                <FaCheckCircle className="text-green-600 mt-0.5 flex-shrink-0 w-4 h-4" />
                <div>
                  <p className="font-semibold text-xs sm:text-sm mb-1">
                    AI Recommendation
                  </p>
                  <p className="text-xs sm:text-sm leading-snug">
                    Excellent candidate match! Strong technical skills and cultural
                    alignment. Recommend for interview.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
