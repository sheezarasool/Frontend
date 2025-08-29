import React from "react";
import { motion } from "framer-motion";

const EnterpriseTestimonials = () => {
  const testimonials = [
    {
      text: "SmartResume's enterprise platform transformed our global hiring at scale. We've reduced time-to-hire by 78% across 180 countries while maintaining our high talent bar.",
      name: "Sarah Chen",
      role: "Chief Talent Officer",
      company: "Microsoft",
      initials: "SC",
    },
    {
      text: "The predictive analytics and bias elimination features are exceptional. We've improved hiring quality by 65% while ensuring complete compliance with global regulations.",
      name: "Michael Rodriguez",
      role: "VP of Global Talent Acquisition",
      company: "Goldman Sachs",
      initials: "MR",
    },
    {
      text: "Processing 50,000+ applications daily was impossible before SmartResume. Their AI engine handles our enterprise volume while identifying top 1% candidates with 99% accuracy.",
      name: "Emily Johnson",
      role: "Head of Talent Strategy",
      company: "Amazon",
      initials: "EJ",
    },
    {
      text: "The ROI was immediate and substantial. We've saved $2.3M annually in recruitment costs while dramatically improving candidate experience and quality.",
      name: "David Kim",
      role: "Chief Human Resources Officer",
      company: "JPMorgan Chase",
      initials: "DK",
    },
    {
      text: "Enterprise-grade security, seamless integration with our existing systems, and unmatched AI accuracy. SmartResume delivers everything we need at Fortune 500 scale.",
      name: "Lisa Thompson",
      role: "Global Head of Recruitment",
      company: "Deloitte",
      initials: "LT",
    },
    {
      text: "Scaling from 100K to 500K employees required next-level hiring technology. SmartResume's enterprise platform made rapid, quality hiring possible.",
      name: "James Wilson",
      role: "VP of People Operations",
      company: "Tesla",
      initials: "JW",
    },
  ];

  const stats = [
    { value: "4.9/5", label: "Average Rating" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" },
    { value: "SOC 2", label: "Compliant" },
  ];

  return (
    <section className="bg-white py-16 sm:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Trusted by Fortune 500 Global Leaders
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            See how the world's largest enterprises are transforming their
            talent acquisition with SmartResume's AI-powered platform.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 border border-gray-100 rounded-xl shadow-sm p-6 flex flex-col"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.4 }}
            >
              {/* Stars */}
              <div className="flex mb-4 text-yellow-400">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="w-5 h-5"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-6 flex-1 leading-relaxed">{t.text}</p>

              {/* Author */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700">
                  {t.initials}
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.3 } },
          }}
        >
          {stats.map((s, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                {s.value}
              </p>
              <p className="text-gray-600 text-sm sm:text-base">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EnterpriseTestimonials;
