import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { User, ShoppingBag, MessageCircle, Instagram, Globe, Store, TrendingUp } from 'lucide-react';

const Slide7_Customer360 = () => {
    const components = [
        { icon: User, label: 'Unified Profiles', color: 'text-blue-400', bg: 'bg-blue-500' },
        { icon: ShoppingBag, label: 'Purchase History', color: 'text-emerald-400', bg: 'bg-emerald-500' },
        { icon: MessageCircle, label: 'WhatsApp Chats', color: 'text-green-400', bg: 'bg-green-500' },
        { icon: Instagram, label: 'Social Engagement', color: 'text-pink-400', bg: 'bg-pink-500' },
        { icon: Globe, label: 'Online Browsing', color: 'text-purple-400', bg: 'bg-purple-500' },
        { icon: Store, label: 'In-store Preferences', color: 'text-orange-400', bg: 'bg-orange-500' },
        { icon: TrendingUp, label: 'Predictive Scoring', color: 'text-gold-400', bg: 'bg-gold-500' },
    ];

    return (
        <Slide title="Customer 360 Vision" subtitle="Unified Customer Intelligence Platform">
            {/* Architecture Diagram */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative glass-panel p-10 rounded-xl mb-8"
            >
                <div className="flex flex-wrap justify-center gap-6">
                    {/* Customer at Center */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full flex items-center justify-center shadow-2xl z-10">
                        <div className="text-center">
                            <User size={40} className="text-white mx-auto mb-1" />
                            <p className="text-white font-bold text-sm">Customer</p>
                        </div>
                    </div>

                    {/* Surrounding Components */}
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-8 w-full mt-20">
                        {components.map((comp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                className="flex flex-col items-center group cursor-pointer"
                            >
                                <div className={`${comp.bg} p-4 rounded-lg shadow-lg group-hover:scale-110 transition-transform mb-2`}>
                                    <comp.icon size={28} className="text-white" />
                                </div>
                                <p className={`text-xs ${comp.color} text-center font-semibold`}>{comp.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Example */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="p-6 bg-gradient-to-r from-gold-900/30 to-emerald-900/30 border border-gold-500/30 rounded-lg"
            >
                <p className="text-gold-100">
                    <strong className="text-gold-300 text-lg">Predictive Example:</strong>
                </p>
                <p className="text-white mt-2 leading-relaxed">
                    "Customer X bought a pink saree last Diwali; AI predicts they are likely to purchase this Diwali with a budget between ₹12k–₹18k. System auto-sends personalized WhatsApp message with curated collection."
                </p>
            </motion.div>
        </Slide>
    );
};

export default Slide7_Customer360;
