import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Crown, Star, Gift, Calendar, Zap, Heart } from 'lucide-react';

const Slide11_Loyalty = () => {
    const benefits = [
        {
            icon: Star,
            title: 'Earn Points',
            description: 'On every purchase - ₹100 = 10 points',
            color: 'from-gold-500 to-gold-700'
        },
        {
            icon: Calendar,
            title: 'Early Access',
            description: 'Exclusive preview of Diwali & wedding collections',
            color: 'from-purple-500 to-purple-700'
        },
        {
            icon: Gift,
            title: 'Birthday Rewards',
            description: 'Special discount on your birthday month',
            color: 'from-pink-500 to-pink-700'
        },
        {
            icon: Zap,
            title: 'Free Services',
            description: 'Complimentary blouse stitching for premium members',
            color: 'from-blue-500 to-blue-700'
        },
        {
            icon: Heart,
            title: 'Personalized Offers',
            description: 'AI-curated deals based on your preferences',
            color: 'from-red-500 to-red-700'
        },
    ];

    const tiers = [
        { name: 'Silver', spend: '₹25K/year', color: 'bg-gray-400' },
        { name: 'Gold', spend: '₹50K/year', color: 'bg-gold-500' },
        { name: 'Platinum', spend: '₹1L+/year', color: 'bg-purple-600' },
    ];

    return (
        <Slide title="Mebaz Royal Circle" subtitle="Premium Loyalty Program">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="glass-panel p-8 rounded-xl mb-8 bg-gradient-to-br from-gold-900/30 to-purple-900/20 border-2 border-gold-500/50 text-center"
            >
                <div className="flex justify-center mb-4">
                    <Crown size={48} className="text-gold-400" />
                </div>
                <h3 className="text-3xl font-serif text-gold-300 mb-3">Welcome to the Royal Circle</h3>
                <p className="text-gray-300 max-w-2xl mx-auto">
                    A premium rewards program designed to celebrate our most valued customers with exclusive benefits and personalized experiences.
                </p>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
                {benefits.map((benefit, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="glass-panel p-6 rounded-xl hover:scale-105 transition-all cursor-pointer"
                    >
                        <div className={`bg-gradient-to-br ${benefit.color} p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto`}>
                            <benefit.icon size={28} className="text-white" />
                        </div>
                        <h4 className="text-lg font-serif text-gold-300 mb-2 text-center">{benefit.title}</h4>
                        <p className="text-sm text-gray-300 text-center">{benefit.description}</p>
                    </motion.div>
                ))}
            </div>

            {/* Membership Tiers */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="glass-panel p-6 rounded-xl"
            >
                <h3 className="text-xl font-serif text-gold-300 mb-4 text-center">Membership Tiers</h3>
                <div className="flex justify-center gap-6">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.1 + index * 0.1 }}
                            className={`${tier.color} text-white px-8 py-4 rounded-lg text-center hover:scale-110 transition-transform cursor-pointer`}
                        >
                            <p className="text-xl font-bold font-serif mb-1">{tier.name}</p>
                            <p className="text-sm opacity-90">{tier.spend}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </Slide>
    );
};

export default Slide11_Loyalty;
