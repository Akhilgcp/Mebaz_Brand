import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle } from 'lucide-react';

const Slide13_Roadmap = () => {
    const phases = [
        {
            phase: 'Phase 1',
            duration: '0–30 days',
            color: 'from-emerald-500 to-emerald-700',
            tasks: [
                'Social media redesign & content calendar',
                'Google Business Profile overhaul',
                'Competitor analysis deep-dive',
                'Customer data audit'
            ]
        },
        {
            phase: 'Phase 2',
            duration: '30–60 days',
            color: 'from-blue-500 to-blue-700',
            tasks: [
                'Customer 360 platform setup',
                'Loyalty program design & launch',
                'Influencer outreach campaign',
                'Website UX improvements'
            ]
        },
        {
            phase: 'Phase 3',
            duration: '60–120 days',
            color: 'from-purple-500 to-purple-700',
            tasks: [
                'AI chatbot deployment (website + WhatsApp)',
                'WhatsApp automation flows',
                'Virtual try-on MVP launch',
                'First AI-generated video campaigns'
            ]
        },
        {
            phase: 'Phase 4',
            duration: '120–180 days',
            color: 'from-gold-500 to-gold-700',
            tasks: [
                'AI-driven video marketing at scale',
                'SEO + digital content hub',
                'Advanced predictive analytics',
                'Full omnichannel integration'
            ]
        },
    ];

    return (
        <Slide title="Implementation Roadmap" subtitle="Phased Execution Plan">
            <div className="space-y-6">
                {phases.map((phase, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.15 }}
                        className="glass-panel rounded-xl overflow-hidden hover:scale-102 transition-all"
                    >
                        {/* Phase Header */}
                        <div className={`p-4 bg-gradient-to-r ${phase.color} flex items-center justify-between`}>
                            <div className="flex items-center gap-3">
                                <Calendar size={24} className="text-white" />
                                <div>
                                    <h3 className="text-xl font-serif text-white font-bold">{phase.phase}</h3>
                                    <p className="text-sm text-white/80">{phase.duration}</p>
                                </div>
                            </div>
                            <div className="bg-white/20 px-4 py-2 rounded-full text-white text-sm font-semibold">
                                {phase.tasks.length} tasks
                            </div>
                        </div>

                        {/* Tasks */}
                        <div className="p-5">
                            <ul className="space-y-3">
                                {phase.tasks.map((task, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 + index * 0.15 + i * 0.05 }}
                                        className="flex items-start gap-3 text-gray-200 hover:text-white transition-colors cursor-pointer"
                                    >
                                        <CheckCircle size={20} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                                        <span>{task}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Timeline Visualization */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
                className="mt-8 p-6 glass-panel rounded-xl text-center"
            >
                <p className="text-gold-300 font-serif text-lg">
                    Total Timeline: <span className="text-white font-bold">6 months</span> to full digital transformation
                </p>
            </motion.div>
        </Slide>
    );
};

export default Slide13_Roadmap;
