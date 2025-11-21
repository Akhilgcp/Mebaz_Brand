import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Instagram, Users, Youtube, Star } from 'lucide-react';

const Slide10_Marketing = () => {
    const strategies = [
        {
            icon: Instagram,
            title: 'Instagram Premium Strategy',
            color: 'from-pink-500 to-purple-600',
            items: [
                '"Saree of the Week" reels',
                'Behind-the-scenes bridal photoshoots',
                'Family outfit coordination reels',
                'Trend-based festival content',
                'Customer transformation stories'
            ]
        },
        {
            icon: Users,
            title: 'Influencer Strategy',
            color: 'from-blue-500 to-cyan-600',
            items: [
                '20 micro influencers (20k–70k followers)',
                'Budget-friendly collaborations',
                'Wedding bloggers + Hyderabad creators',
                'Authentic customer testimonials',
                'Seasonal campaign partnerships'
            ]
        },
        {
            icon: Youtube,
            title: 'YouTube Content Strategy',
            color: 'from-red-500 to-orange-600',
            items: [
                '"Hyderabad Wedding Diaries" series',
                '"Mebaz Bridal Studio Tour"',
                'Styling tips & tutorials',
                'Customer success stories',
                'Behind-the-brand storytelling'
            ]
        },
        {
            icon: Star,
            title: 'Google Business Optimization',
            color: 'from-gold-500 to-yellow-600',
            items: [
                'Add 20+ photos monthly',
                'Reply to every review within 24hrs',
                'Promote festival offers',
                'Post weekly updates',
                'Target 200+ reviews/month'
            ]
        },
    ];

    return (
        <Slide title="Digital Marketing Strategy" subtitle="Multi-Channel Growth Plan">
            <div className="grid md:grid-cols-2 gap-6">
                {strategies.map((strategy, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="glass-panel rounded-xl overflow-hidden hover:scale-102 transition-all"
                    >
                        {/* Header */}
                        <div className={`p-4 bg-gradient-to-r ${strategy.color} flex items-center gap-3`}>
                            <div className="bg-white/20 p-3 rounded-lg">
                                <strategy.icon size={28} className="text-white" />
                            </div>
                            <h3 className="text-xl font-serif text-white font-bold">{strategy.title}</h3>
                        </div>

                        {/* Content */}
                        <div className="p-5">
                            <ul className="space-y-3">
                                {strategy.items.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 + index * 0.1 + i * 0.05 }}
                                        className="flex items-start gap-3 text-gray-200"
                                    >
                                        <div className="mt-1.5 w-2 h-2 bg-gold-400 rounded-full flex-shrink-0"></div>
                                        <span className="text-sm">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Key Metrics */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="mt-8 grid grid-cols-3 gap-4"
            >
                {[
                    { label: 'Target Monthly Reach', value: '500K+' },
                    { label: 'Engagement Rate Goal', value: '8-12%' },
                    { label: 'Content Frequency', value: '5-7 posts/week' },
                ].map((metric, i) => (
                    <div key={i} className="glass-panel p-4 rounded-xl text-center">
                        <p className="text-3xl font-serif text-gold-400 font-bold mb-1">{metric.value}</p>
                        <p className="text-sm text-gray-400">{metric.label}</p>
                    </div>
                ))}
            </motion.div>
        </Slide>
    );
};

export default Slide10_Marketing;
