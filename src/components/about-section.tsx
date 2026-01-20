import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-sm font-medium text-blue-600 tracking-wider uppercase mb-4">
              About
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Driving Excellence Through Operational Mastery
            </h3>
            <div className="w-20 h-1 bg-blue-600 mb-8"></div>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              With over 15 years of experience leading operations for Fortune 500 companies and 
              high-growth startups, I specialize in building scalable systems that drive sustainable growth.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              My approach combines strategic thinking with hands-on execution, ensuring that operational 
              initiatives align with business objectives and deliver tangible results.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              I've successfully led cross-functional teams of 200+ members, optimized processes that 
              generated $50M+ in cost savings, and implemented systems that scaled operations by 300%.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">15+</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Years of Experience</h4>
                  <p className="text-gray-600">Leading operations across diverse industries and company stages</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">200+</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Team Members Led</h4>
                  <p className="text-gray-600">Building and managing high-performing cross-functional teams</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">$50M+</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Cost Optimization</h4>
                  <p className="text-gray-600">Delivered through strategic process improvements and efficiency gains</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
