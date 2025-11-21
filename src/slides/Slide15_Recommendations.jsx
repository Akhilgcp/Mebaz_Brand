import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { CheckCircle2, Target, Clock, Star, Rocket } from 'lucide-react';

const Slide15_Recommendations = () => {
    const quickWins = [
        { title: 'Launch AI chatbot + WhatsApp automation', timeline: '0-30 days', priority: 'HIGH' },
        { title: 'Modernize brand image through Instagram Reels', timeline: '0-30 days', priority: 'HIGH' },
        { title: 'Optimize Google Business Profile', timeline: '0-15 days', priority: 'MEDIUM' },
    ];

    const mediumTerm = [
        { title: 'Introduce virtual try-on technology', timeline: '30-60 days', priority: 'HIGH' },
        { title: 'Deploy micro-influencer strategy', timeline: '30-90 days', priority: 'MEDIUM' },
        { title: 'Refresh website with premium UX & SEO', timeline: '60-90 days', priority: 'HIGH' },
    ];

    const longTerm = [
        { title: 'Adopt Customer 360 platform', timeline: '90-120 days', priority: 'HIGH' },
        { title: 'Launch Mebaz Royal Circle loyalty program', timeline: '120-180 days', priority: 'MEDIUM' },
    ];

    const implementationTimeline = [
        { phase: 'Phase 1', duration: '0-30 days', focus: 'Quick Wins & Social Media', color: 'emerald' },
        { phase: 'Phase 2', duration: '30-60 days', focus: 'AI Virtual Try-On', color: 'blue' },
        { phase: 'Phase 3', duration: '60-120 days', focus: 'Customer 360 & Website', color: 'purple' },
        { phase: 'Phase 4', duration: '120-180 days', focus: 'Loyalty & Optimization', color: 'gold' },
    ];

    const getPriorityColor = (priority) => {
        return priority === 'HIGH' ? 'bg-red-500' : 'bg-yellow-500';
    };

    return (
        <Slide title="Final Recommendations for Mebaz" subtitle="Strategic Action Plan with Timeline">
            {/* Implementation Timeline */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8 glass-panel-ethnic rounded-xl p-6 gradient-ethnic-gold mandala-corners"
            >
                <div className="flex items-center gap-2 mb-4">
                    <Clock className="text-gold-400" size={24} />
                    <h3 className="text-xl font-serif text-white">6-Month Implementation Timeline</h3>
                </div>
                <div className="grid md:grid-cols-4 gap-4">
                    {implementationTimeline.map((phase, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + i * 0.1 }}
                            className={`bg-${phase.color}-900/30 border-2 border-${phase.color}-500/50 rounded-lg p-4 text-center hover:scale-105 transition-transform`}
                        >
                            <div className="text-sm font-bold text-gray-400 mb-1">{phase.phase}</div>
                            <div className={`text-lg font-serif text-${phase.color}-400 mb-2`}>{phase.duration}</div>
                            <div className="text-xs text-gray-300">{phase.focus}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Quick Wins */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mb-6"
            >
                <div className="flex items-center gap-2 mb-3">
                    <Rocket className="text-emerald-400" size={20} />
                    <h4 className="text-lg font-serif text-emerald-300">Quick Wins (0-30 Days)</h4>
                </div>
                <div className="space-y-3">
                    {quickWins.map((rec, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + index * 0.1 }}
                            className="glass-panel-ethnic p-4 rounded-lg flex items-center justify-between hover:border-emerald-500/50 transition-all ethnic-pattern-overlay"
                        >
                            <div className="flex items-center gap-3">
                                <CheckCircle2 size={20} className="text-emerald-400 flex-shrink-0" />
                                <span className="text-white">{rec.title}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className={`px-3 py-1 ${getPriorityColor(rec.priority)} text-white text-xs font-bold rounded-full`}>
                                    {rec.priority}
                                </span>
                                <span className="text-gray-400 text-sm">{rec.timeline}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Medium Term */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mb-6"
            >
                <div className="flex items-center gap-2 mb-3">
                    <Star className="text-blue-400" size={20} />
                    <h4 className="text-lg font-serif text-blue-300">Medium-Term Priorities (30-90 Days)</h4>
                </div>
                <div className="space-y-3">
                    {mediumTerm.map((rec, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.0 + index * 0.1 }}
                            className="glass-panel-ethnic p-4 rounded-lg flex items-center justify-between hover:border-blue-500/50 transition-all banarasi-weave"
                        >
                            <div className="flex items-center gap-3">
                                <CheckCircle2 size={20} className="text-blue-400 flex-shrink-0" />
                                <span className="text-white">{rec.title}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className={`px-3 py-1 ${getPriorityColor(rec.priority)} text-white text-xs font-bold rounded-full`}>
                                    {rec.priority}
                                </span>
                                <span className="text-gray-400 text-sm">{rec.timeline}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Long Term */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mb-8"
            >
                <div className="flex items-center gap-2 mb-3">
                    <Target className="text-purple-400" size={20} />
                    <h4 className="text-lg font-serif text-purple-300">Long-Term Strategic (90-180 Days)</h4>
                </div>
                <div className="space-y-3">
                    {longTerm.map((rec, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.3 + index * 0.1 }}
                            className="glass-panel-ethnic p-4 rounded-lg flex items-center justify-between hover:border-purple-500/50 transition-all silk-texture"
                        >
                            <div className="flex items-center gap-3">
                                <CheckCircle2 size={20} className="text-purple-400 flex-shrink-0" />
                                <span className="text-white">{rec.title}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className={`px-3 py-1 ${getPriorityColor(rec.priority)} text-white text-xs font-bold rounded-full`}>
                                    {rec.priority}
                                </span>
                                <span className="text-gray-400 text-sm">{rec.timeline}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, type: 'spring', stiffness: 100 }}
                className="glass-panel-ethnic p-10 rounded-xl gradient-ethnic-maroon border-2 border-gold-500 text-center relative overflow-hidden"
            >
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gold-500/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full translate-x-1/2 translate-y-1/2"></div>

                <div className="relative z-10">
                    <Target size={56} className="text-gold-400 mx-auto mb-4" />
                    <h3 className="text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200 font-bold mb-4">
                        The Vision
                    </h3>
                    <p className="text-2xl text-white mb-6 font-light leading-relaxed max-w-3xl mx-auto">
                        Let's make Mebaz the #1 ethnic wear brand in South India
                    </p>
                    <p className="text-gray-300 text-lg mb-4">
                        Through AI, data excellence, and customer-centric innovation
                    </p>
                    <div className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-700 text-black font-bold rounded-full text-lg">
                        🚀 Ready to Launch
                    </div>
                </div>
            </motion.div>

            {/* Footer Note */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7 }}
                className="mt-8 text-center"
            >
                <p className="text-sm text-gray-400">
                    End of Deck • For questions or implementation support, contact the strategy team
                </p>
            </motion.div>
        </Slide>
    );
};

export default Slide15_Recommendations;
