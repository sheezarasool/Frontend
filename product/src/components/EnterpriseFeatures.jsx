import React from "react";
import { motion } from "framer-motion";

const EnterpriseFeatures = () => {
  const features = [
    {
      title: "Enterprise AI Engine",
      description:
        "Advanced machine learning algorithms analyze resumes with 99.2% accuracy, processing 10,000+ candidates simultaneously for Fortune 500 scale.",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904L9.043 21m.813-5.096l-.813-5.096m.813 5.096L6.5 21m3.313-5.096L6.5 21"
          />
        </svg>
      ),
    },
    {
      title: "Intelligent Talent Discovery",
      description:
        "Proprietary matching algorithms identify top talent from millions of profiles, reducing time-to-fill by 75% for enterprise teams.",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      ),
    },
    {
      title: "Automated Workflow Engine",
      description:
        "Enterprise-grade automation handles screening, ranking, and initial assessments, processing 50,000+ applications daily.",
      iconColor: "text-yellow-600",
      bgColor: "bg-yellow-50",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      ),
    },
    {
      title: "Executive Dashboard & Analytics",
      description:
        "Real-time recruitment intelligence with C-suite reporting, predictive hiring metrics, and ROI tracking across departments.",
      iconColor: "text-green-600",
      bgColor: "bg-green-50",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.5l1.096-2.215a.75.75 0 011.026-.142l2.427 1.214a1.5 1.5 0 001.664-.265l.775-.989a1.5 1.5 0 012.336-.296l2.368 1.956a1.5 1.5 0 002.138-.282l1.492-1.99a.75.75 0 01.996-.217l3.96 2.376M21 21l-5.197-5.197"
          />
        </svg>
      ),
    },
    {
      title: "Enterprise Collaboration Suite",
      description:
        "Advanced team coordination with role-based permissions, approval workflows, and integrated communication for global teams.",
      iconColor: "text-indigo-600",
      bgColor: "bg-indigo-50",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.75 12a6.75 6.75 0 01-13.5 0 6.75 6.75 0 0113.5 0z"
          />
        </svg>
      ),
    },
    {
      title: "Compliance & Bias Elimination",
      description:
        "Enterprise-grade compliance tools ensure EEOC adherence while eliminating bias with certified fair hiring algorithms.",
      iconColor: "text-red-600",
      bgColor: "bg-red-50",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75l3 3m0 0l3-3m-3 3v2.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-24 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-semibold text-gray-500 tracking-wider mb-2">
            ENTERPRISE PLATFORM
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
            Built for Enterprise Scale <br /> Trusted by Global Leaders
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Our enterprise-grade AI platform processes millions of candidates
            daily, powering recruitment for Fortune 500 companies worldwide with
            unmatched accuracy and scale.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 sm:p-8 flex flex-col cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={{
                scale: 1.05,
                rotateX: 5,
                rotateY: -5,
                boxShadow: "0px 8px 20px rgba(0,0,0,0.1)",
              }}
              transition={{ duration: 0.4 }}
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-lg ${feature.bgColor} ${feature.iconColor} mb-4`}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl text-center py-12 px-6 sm:px-12"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Hiring?
            </h2>
            <p className="text-gray-200 mb-6">
              Join thousands of companies already using SmartResume to hire
              better, faster.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-gray-800 font-semibold rounded-md shadow hover:bg-gray-100 transition"
            >
              Get Started
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnterpriseFeatures;
