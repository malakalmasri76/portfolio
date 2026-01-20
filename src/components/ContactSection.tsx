import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Calendar } from 'lucide-react';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" ref={ref} className="py-32 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-sm font-medium text-blue-600 tracking-wider uppercase mb-4">
            Let's Connect
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Ready to Transform Your Operations?
          </h3>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Available for consulting engagements, advisory roles, and executive positions. 
            Let's discuss how I can help drive operational excellence in your organization.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.a
              href="mailto:alexander.chen@example.com"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                <Mail className="text-blue-600 group-hover:text-white transition-colors" size={28} />
              </div>
              <h4 className="font-semibold text-lg mb-2">Email</h4>
              <p className="text-gray-600 text-sm">alexander.chen@example.com</p>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/alexanderchen"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                <Linkedin className="text-blue-600 group-hover:text-white transition-colors" size={28} />
              </div>
              <h4 className="font-semibold text-lg mb-2">LinkedIn</h4>
              <p className="text-gray-600 text-sm">Connect with me</p>
            </motion.a>

            <motion.a
              href="https://calendly.com/alexanderchen"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                <Calendar className="text-blue-600 group-hover:text-white transition-colors" size={28} />
              </div>
              <h4 className="font-semibold text-lg mb-2">Schedule Call</h4>
              <p className="text-gray-600 text-sm">Book a meeting</p>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-10 text-white"
          >
            <h4 className="text-2xl font-bold mb-3">
              Open to Strategic Opportunities
            </h4>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Currently exploring executive leadership roles, board positions, and select consulting engagements 
              with forward-thinking organizations committed to operational excellence.
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105">
              Download Executive Resume
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-20 pt-12 border-t border-gray-200 text-center text-gray-500 text-sm"
      >
        <p>© 2026 Alexander Chen. All rights reserved.</p>
        <p className="mt-2">Based in San Francisco Bay Area • Available for global engagements</p>
      </motion.div>
    </section>
  );
}
