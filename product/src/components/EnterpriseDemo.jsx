import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function EnterpriseDemo() {
  const checklist = [
    "Enterprise-grade security & compliance",
    "Dedicated customer success team",
    "Custom integration & white-glove setup",
    "Advanced analytics & executive reporting",
    "Multi-tenant architecture & SSO",
    "24/7 priority support & SLA guarantee",
  ];

  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-2xl shadow-2xl px-4 sm:px-6 md:px-10 py-10 sm:py-14 max-w-6xl mx-auto mt-12">
      
      {/* Header Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="uppercase text-xs sm:text-sm font-semibold tracking-wide mb-3 text-gray-300">
            Enterprise Solution Ready
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug mb-5">
            Scale Your Enterprise <br className="hidden sm:block" /> Hiring Intelligence
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mb-8">
            Join Fortune 500 companies who have transformed their talent
            acquisition with our enterprise AI platform. Schedule a custom demo
            and discover how SmartResume can revolutionize your hiring at scale.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-white text-slate-800 px-6 py-3 rounded-md font-semibold shadow-lg hover:shadow-xl hover:bg-gray-100 transition"
          >
            Sign Up Now →
          </motion.button>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 sm:p-8 shadow-lg"
        >
          <h3 className="text-lg font-semibold mb-5">Enterprise Demo Includes</h3>
          <motion.ul
            className="space-y-4 text-gray-200 text-sm sm:text-base"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {checklist.map((item, idx) => (
              <motion.li
                key={idx}
                className="flex items-start gap-3"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
          <div className="mt-6 text-xs sm:text-sm text-gray-300 flex flex-col sm:flex-row justify-between gap-2">
            <span>Custom enterprise demo</span>
            <span>ROI analysis included</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-300 border-t border-slate-600 mt-12 pt-6"
      >
        <span>✔ SOC 2 Type II Certified</span>
        <span>✔ Enterprise SSO Ready</span>
        <span>✔ 99.9% SLA Guarantee</span>
        <span>✔ 24/7 Priority Support</span>
      </motion.div>
    </div>
  );
}
