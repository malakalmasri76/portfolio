import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Award } from 'lucide-react';

export default function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const achievements = [
    {
      metric: '300%',
      label: 'Growth in Operations Capacity',
      description: 'Scaled operational infrastructure to support 3x revenue growth over 18 months without proportional cost increase.',
      impact: 'Enabled company to handle $150M in annual revenue',
    },
    {
      metric: '$50M+',
      label: 'Cost Savings Delivered',
      description: 'Led comprehensive cost optimization initiative across procurement, logistics, and workforce management.',
      impact: 'Improved EBITDA margin by 12 percentage points',
    },
    {
      metric: '40%',
      label: 'Efficiency Improvement',
      description: 'Redesigned core operational workflows using lean methodologies and automation technologies.',
      impact: 'Reduced time-to-market by 6 weeks on average',
    },
    {
      metric: '95%',
      label: 'Employee Retention Rate',
      description: 'Implemented talent development programs and enhanced organizational culture across operations teams.',
      impact: 'Ranked top 10% in industry for employee satisfaction',
    },
    {
      metric: '24/7',
      label: 'Global Operations',
      description: 'Established and managed operations across 15 countries with 24/7 support infrastructure.',
      impact: 'Reduced service response time by 60%',
    },
    {
      metric: '99.8%',
      label: 'Service Level Achievement',
      description: 'Maintained industry-leading SLA performance through robust process controls and monitoring systems.',
      impact: 'Increased customer satisfaction score to 4.8/5.0',
    },
  ];

  return (
    <section id="achievements" ref={ref} className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-medium text-blue-600 tracking-wider uppercase mb-4">
            Measurable Impact
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Results That Drive Business Value
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track record of delivering transformational outcomes across key operational metrics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all"
            >
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <Award className="text-blue-600" size={24} />
              </div>
              
              <div className="mb-4">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">
                  {achievement.metric}
                </div>
                <h4 className="text-xl font-semibold text-gray-900">{achievement.label}</h4>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {achievement.description}
              </p>
              
              <div className="flex items-start gap-2 pt-4 border-t border-gray-200">
                <ArrowUpRight className="text-blue-600 mt-0.5 shrink-0" size={18} />
                <p className="text-sm font-medium text-blue-600">
                  {achievement.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional highlight section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-white text-center"
        >
          <h4 className="text-3xl font-bold mb-4">
            Recognized for Operational Excellence
          </h4>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Awards and recognition from industry leaders for transformative operational achievements
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-blue-100">
            <div>
              <div className="text-3xl font-bold text-white">2023</div>
              <div className="text-sm">Operations Leader of the Year</div>
            </div>
            <div className="w-px bg-blue-400"></div>
            <div>
              <div className="text-3xl font-bold text-white">Top 50</div>
              <div className="text-sm">Most Influential Ops Executives</div>
            </div>
            <div className="w-px bg-blue-400"></div>
            <div>
              <div className="text-3xl font-bold text-white">MBA</div>
              <div className="text-sm">Harvard Business School</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
