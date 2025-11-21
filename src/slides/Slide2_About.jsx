import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Sparkles, Users, TrendingUp, AlertCircle } from 'lucide-react';

const Slide2_About = () => {
    const stats = [
        { icon: Calendar, label: 'Founded', value: '1971', color: 'text-gold-400' },
        { icon: MapPin, label: 'Key Locations', value: 'Hyderabad & Andhra Pradesh', color: 'text-blue-400' },
        { icon: Sparkles, label: 'Focus', value: 'Ethnic Wear Excellence', color: 'text-purple-400' },
    ];

    return (
        <Slide title="About Mebaz" subtitle="A Legacy of Trust & Tradition">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column - Stats */}
                <div className="space-y-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            className="flex items-center gap-4 glass-panel p-6 rounded-xl hover:bg-white/20 transition-all cursor-pointer"
                        >
                            <div className={`${stat.color} bg-black/30 p-4 rounded-full`}>
                                <stat.icon size={32} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</p>
                                <p className="text-2xl font-serif text-white font-bold">{stat.value}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Right Column - Details */}
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="glass-panel p-6 rounded-xl"
                    >
                        <h3 className="text-xl font-serif text-gold-300 mb-4 flex items-center gap-2">
                            <TrendingUp size={24} />
                            Product Portfolio
                        </h3>
                        <ul className="space-y-3 text-gray-200">
                            {['Sarees', 'Bridal Wear', 'Sherwanis', 'Kids Ethnic Wear', 'Festival Collections'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="glass-panel p-6 rounded-xl border-gold-500/30"
                    >
                        <h3 className="text-xl font-serif text-gold-300 mb-3 flex items-center gap-2">
                            <Users size={24} />
                            Brand Strengths
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            Trust • Tradition • Festival-Wedding Expertise
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="glass-panel p-6 rounded-xl border-red-500/40 bg-red-900/10"
                    >
                        <h3 className="text-xl font-serif text-red-300 mb-3 flex items-center gap-2">
                            <AlertCircle size={24} />
                            Current Gaps
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            Limited digital presence • Weak modern marketing • Low personalization
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Example Box */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mt-8 p-5 bg-gradient-to-r from-gold-900/30 to-gold-800/20 border border-gold-500/30 rounded-lg"
            >
                <p className="text-sm text-gold-200 italic">
                    <strong className="text-gold-400">Example:</strong> Mebaz bridal collections are often purchased for weddings, yet digital promotion remains very low compared to RS Brothers or Kalyan Silks.
                </p>
            </motion.div>
        </Slide>
    );
};

export default Slide2_About;
