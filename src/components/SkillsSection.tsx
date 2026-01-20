import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Settings, Users, TrendingUp, Target, Workflow, Shield } from 'lucide-react';

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    {
      icon: Settings,
      title: 'Process Optimization',
      description: 'Streamlining operations and eliminating inefficiencies to maximize productivity and reduce costs.',
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Building and scaling high-performance teams with a focus on culture, development, and retention.',
    },
    {
      icon: TrendingUp,
      title: 'Business Scaling',
      description: 'Implementing systems and frameworks that support rapid growth while maintaining quality.',
    },
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Translating long-term vision into actionable roadmaps with clear KPIs and accountability.',
    },
    {
      icon: Workflow,
      title: 'Supply Chain Management',
      description: 'Optimizing end-to-end supply chain operations for efficiency, reliability, and cost-effectiveness.',
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Identifying operational risks and implementing mitigation strategies to ensure business continuity.',
    },
  ];

  return (
    <section id="skills" ref={ref} className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-medium text-blue-600 tracking-wider uppercase mb-4">
            Core Expertise
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Operational Excellence Across All Dimensions
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive skill set honed through years of solving complex operational challenges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <skill.icon className="text-blue-600" size={28} />
              </div>
              <h4 className="text-xl font-semibold mb-3">{skill.title}</h4>
              <p className="text-gray-600 leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
