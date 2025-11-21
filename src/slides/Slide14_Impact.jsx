import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { TrendingUp, Users, ShoppingCart, Share2, Store } from 'lucide-react';

const Slide14_Impact = () => {
    const outcomes = [
        {
            icon: Share2,
            metric: '+40%',
            description: 'Increase in online inquiries',
            color: 'from-blue-500 to-blue-700',
            baseline: '500/month → 700/month'
        },
        {
            icon: ShoppingCart,
            metric: '+25%',
            description: 'Higher festival season sales',
            color: 'from-emerald-500 to-emerald-700',
            baseline: 'Diwali/Wedding revenue boost'
        },
        {
            icon: Users,
            metric: '+30%',
            description: 'Increase in repeat purchases',
            color: 'from-purple-500 to-purple-700',
            baseline: 'Customer retention improvement'
        },
        {
            icon: TrendingUp,
            metric: '+50%',
            description: 'Stronger social media reach',
            color: 'from-pink-500 to-pink-700',
            baseline: '50K → 75K monthly impressions'
        },
        {
            icon: Store,
            metric: '+20%',
            description: 'Higher in-store conversions',
            color: 'from-gold-500 to-gold-700',
            baseline: 'Walk-in to purchase ratio'
        },
    ];

    return (
        <Slide title="Expected Impact" subtitle="Quantified Business Outcomes">
            {/* Impact Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
                {outcomes.map((outcome, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 100 }}
                        className="glass-panel rounded-xl overflow-hidden hover:scale-105 transition-all cursor-pointer"
                    >
                        <div className={`p-6 bg-gradient-to-br ${outcome.color} text-center`}>
                            <div className="flex justify-center mb-3">
                                <outcome.icon size={40} className="text-white" />
                            </div>
                            <div className="text-5xl font-serif font-bold text-white mb-2">{outcome.metric}</div>
                            <p className="text-white/90 font-semibold">{outcome.description}</p>
                        </div>
                        <div className="p-4 bg-black/30">
                            <p className="text-sm text-gray-300 text-center">{outcome.baseline}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* ROI Projection */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="glass-panel p-8 rounded-xl bg-gradient-to-br from-gold-900/30 to-emerald-900/20 border-2 border-gold-500/50"
            >
                <h3 className="text-2xl font-serif text-gold-300 mb-6 text-center">Projected ROI</h3>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                    {[
                        { label: 'Investment', value: '₹25-40 lakhs', period: '6 months' },
                        { label: 'Expected Revenue Lift', value: '₹1.2-2 crores', period: 'Year 1' },
                        { label: 'ROI', value: '300-400%', period: 'Within 12-18 months' },
                    ].map((item, i) => (
                        <div key={i} className="text-center">
                            <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                            <p className="text-3xl font-serif text-white font-bold mb-1">{item.value}</p>
                            <p className="text-xs text-gold-300">{item.period}</p>
                        </div>
                    ))}
                </div>

                <p className="text-center text-sm text-gray-300">
                    *Projections based on industry benchmarks and current Mebaz performance
                </p>
            </motion.div>
        </Slide>
    );
};

export default Slide14_Impact;
