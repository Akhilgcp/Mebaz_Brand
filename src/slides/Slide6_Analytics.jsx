import React, { useState } from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis } from 'recharts';
import { Shirt, Crown, Users2, Baby, Package } from 'lucide-react';

const Slide6_Analytics = () => {
    const categoryData = [
        { name: 'Sarees', value: 45, icon: Shirt, color: '#D4AF37' },
        { name: 'Lehengas', value: 20, icon: Crown, color: '#F59E0B' },
        { name: 'Sherwanis', value: 18, icon: Users2, color: '#8B5CF6' },
        { name: 'Kids Wear', value: 10, icon: Baby, color: '#EC4899' },
        { name: 'Others', value: 7, icon: Package, color: '#6B7280' },
    ];

    const seasonData = [
        { season: 'Ugadi', increase: 35 },
        { season: 'Diwali', increase: 48 },
        { season: 'Wedding Season', increase: 70 },
    ];

    const segments = [
        { name: 'Brides', color: 'from-pink-500 to-pink-700' },
        { name: 'Groom Family', color: 'from-blue-500 to-blue-700' },
        { name: 'Traditional Shoppers', color: 'from-gold-500 to-gold-700' },
        { name: 'Festival Shoppers', color: 'from-purple-500 to-purple-700' },
        { name: 'High-value NRI Shoppers', color: 'from-emerald-500 to-emerald-700' },
    ];

    return (
        <Slide title="Customer Analytics Insights" subtitle="Understanding Our Customer Base">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Category Split */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-panel p-6 rounded-xl"
                >
                    <h3 className="text-xl font-serif text-gold-300 mb-4">Category Split</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie
                                data={categoryData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, value }) => `${name}: ${value}%`}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {categoryData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </motion.div>

                {/* Season Demand Peaks */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="glass-panel p-6 rounded-xl"
                >
                    <h3 className="text-xl font-serif text-gold-300 mb-4">Season Demand Peaks</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={seasonData}>
                            <XAxis dataKey="season" tick={{ fill: '#fff', fontSize: 12 }} />
                            <YAxis tick={{ fill: '#fff' }} />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #D4AF37', borderRadius: '8px' }}
                            />
                            <Bar dataKey="increase" fill="#D4AF37" radius={[8, 8, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                    <p className="text-sm text-gray-400 mt-3">Wedding season (Oct–Feb): +60–80% increase</p>
                </motion.div>
            </div>

            {/* Customer Segments */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 glass-panel p-6 rounded-xl"
            >
                <h3 className="text-xl font-serif text-gold-300 mb-4">Top Customer Segments</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {segments.map((seg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                            className={`p-4 rounded-lg bg-gradient-to-br ${seg.color} text-white text-center font-semibold text-sm hover:scale-105 transition-transform cursor-pointer`}
                        >
                            {seg.name}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </Slide>
    );
};

export default Slide6_Analytics;
