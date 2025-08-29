// src/components/StatsSection.jsx
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const StatsSection = () => {
  const stats = [
    {
      number: 75,
      suffix: "%",
      title: "Time-to-Hire Reduction",
      description: "Average improvement across Fortune 500 clients",
    },
    {
      number: 99.2,
      suffix: "%",
      title: "AI Accuracy Rate",
      description: "Industry-leading candidate matching precision",
    },
    {
      number: 2500,
      suffix: "+",
      title: "Enterprise Clients",
      description: "Global companies trust our platform",
    },
    {
      number: 50,
      suffix: "M+",
      title: "Profiles Processed",
      description: "Analyzed by our enterprise AI engine daily",
    },
  ];

  const companies = [
    "TechCorp",
    "InnovateInc",
    "GlobalSoft",
    "FutureWorks",
    "DataDriven",
    "CloudFirst",
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Powering Enterprise Hiring Worldwide
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Join Fortune 500 companies who have transformed their talent
            acquisition with SmartResume&apos;s enterprise AI platform
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
            >
              <div className="text-5xl lg:text-6xl font-black text-gray-900 mb-4">
                <CountUp
                  start={0}
                  end={stat.number}
                  duration={2.5}
                  decimals={stat.number % 1 !== 0 ? 1 : 0}
                />
                {stat.suffix}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {stat.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Logos Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-base text-gray-500 font-medium mb-8">
            Trusted by leading companies worldwide
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, color: "#111827" }}
                className="text-xl lg:text-2xl font-bold text-gray-300 cursor-pointer transition-colors duration-300"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
