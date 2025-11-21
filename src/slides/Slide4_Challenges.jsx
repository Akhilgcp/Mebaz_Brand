import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Eye, Database, Target, Users, Star } from 'lucide-react';

const Slide4_Challenges = () => {
    const challenges = [
        {
            icon: Eye,
            title: 'Low Digital Visibility',
            example: 'Only ~2k average likes per Instagram reel; competitors ~20k+',
            color: 'text-red-400',
            bgColor: 'bg-red-900/20'
        },
        {
            icon: Database,
            title: 'No Customer 360 System',
            example: 'Store + website + WhatsApp data not integrated',
            color: 'text-orange-400',
            bgColor: 'bg-orange-900/20'
        },
        {
            icon: Target,
            title: 'Weak Personalization',
            example: 'Customers receive generic WhatsApp broadcast offers',
            color: 'text-yellow-400',
            bgColor: 'bg-yellow-900/20'
        },
        {
            icon: Users,
            title: 'Low Influencer Engagement',
            example: 'No micro-influencer reels around weddings',
            color: 'text-purple-400',
            bgColor: 'bg-purple-900/20'
        },
        {
            icon: Star,
            title: 'Underutilized Google Business Profile',
            example: 'Only 20–40 new reviews per month; ideal = 200+/month',
            color: 'text-blue-400',
            bgColor: 'bg-blue-900/20'
        },
    ];

    return (
        <Slide title="Key Challenges" subtitle="Barriers to Growth & Digital Transformation">
            <div className="grid md:grid-cols-2 gap-6">
                {challenges.map((challenge, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className={`glass-panel ${challenge.bgColor} p-6 rounded-xl border border-white/10 hover:border-gold-500/50 transition-all cursor-pointer group`}
                    >
                        <div className="flex items-start gap-4">
                            <div className={`${challenge.color} bg-black/40 p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                                <challenge.icon size={28} />
                            </div>
                            <div className="flex-1">
                                <h3 className={`text-lg font-serif ${challenge.color} mb-2`}>
                                    {challenge.title}
                                </h3>
                                <p className="text-sm text-gray-300">
                                    <span className="text-gold-400 font-semibold">Example:</span> {challenge.example}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 p-6 bg-gradient-to-r from-red-900/30 to-orange-900/30 border-l-4 border-red-500 rounded-lg"
            >
                <p className="text-white font-light">
                    <strong className="text-gold-300">Strategic Insight:</strong> These challenges represent untapped opportunities. Addressing them systematically will unlock significant competitive advantages.
                </p>
            </motion.div>
        </Slide>
    );
};

export default Slide4_Challenges;
