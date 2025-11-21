import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { TrendingUp, IndianRupee, Bot, Sparkles, Instagram } from 'lucide-react';

const Slide5_Opportunities = () => {
    const opportunities = [
        {
            icon: TrendingUp,
            stat: '12–18% YoY',
            description: 'South India\'s wedding market growth',
            gradient: 'from-emerald-500 to-emerald-700'
        },
        {
            icon: IndianRupee,
            stat: '₹2–10 lakhs',
            description: 'Hyderabadi families spend on ethnic wear per wedding',
            gradient: 'from-gold-500 to-gold-700'
        },
        {
            icon: Bot,
            stat: '20–40%',
            description: 'Conversion increase with AI-enabled shopping assistants',
            gradient: 'from-blue-500 to-blue-700'
        },
        {
            icon: Sparkles,
            stat: 'Gen-Z Preference',
            description: 'Younger buyers prefer brands with digital try-ons',
            gradient: 'from-purple-500 to-purple-700'
        },
        {
            icon: Instagram,
            stat: '70%',
            description: 'Shopping discovery happens via Instagram Reels',
            gradient: 'from-pink-500 to-pink-700'
        },
    ];

    return (
        <Slide title="Opportunities" subtitle="2025 & Beyond">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {opportunities.map((opp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 100 }}
                        className="glass-panel p-6 rounded-xl hover:scale-105 transition-all cursor-pointer relative overflow-hidden group"
                    >
                        {/* Gradient Accent */}
                        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${opp.gradient}`}></div>

                        <div className="flex flex-col items-center text-center">
                            <div className={`bg-gradient-to-br ${opp.gradient} p-4 rounded-full mb-4 group-hover:scale-110 transition-transform`}>
                                <opp.icon size={32} className="text-white" />
                            </div>

                            <h3 className="text-3xl font-serif text-gold-300 mb-2 font-bold">
                                {opp.stat}
                            </h3>

                            <p className="text-sm text-gray-300 leading-relaxed">
                                {opp.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mt-10 p-8 glass-panel rounded-xl border-2 border-gold-500/50 bg-gradient-to-br from-gold-900/20 to-emerald-900/20 text-center"
            >
                <h3 className="text-2xl font-serif text-gold-300 mb-3">The Time Is NOW</h3>
                <p className="text-lg text-white font-light leading-relaxed max-w-3xl mx-auto">
                    The confluence of digital transformation, AI innovation, and consumer behavior shifts creates a once-in-a-decade opportunity for Mebaz to dominate the ethnic wear market.
                </p>
            </motion.div>
        </Slide>
    );
};

export default Slide5_Opportunities;
