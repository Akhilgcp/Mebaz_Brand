import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Slide3_Market = () => {
    const competitorData = [
        { name: 'RS Brothers', score: 82 },
        { name: 'Manyavar', score: 78 },
        { name: 'Kalyan Silks', score: 71 },
        { name: 'Mebaz', score: 54 },
    ];

    const competitors = [
        { brand: 'RS Brothers', strengths: 'High volume, strong offers', weaknesses: 'Low premium appeal' },
        { brand: 'Chandana Brothers', strengths: 'Budget friendly', weaknesses: 'Weak online presence' },
        { brand: 'Kalyan Silks', strengths: 'Premium positioning', weaknesses: 'Limited in Hyderabad' },
        { brand: 'Manyavar', strengths: 'National dominance', weaknesses: 'Higher price segment' },
        { brand: 'Mebaz', strengths: 'Tradition + regional trust', weaknesses: 'Underutilized digital channels', highlight: true },
    ];

    return (
        <Slide title="Market Landscape" subtitle="Competitive Positioning & Brand Recall">
            {/* Competitor Matrix */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-panel p-6 rounded-xl mb-8 overflow-x-auto"
            >
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-gold-500/30">
                            <th className="text-gold-400 py-3 px-4 font-serif text-lg">Brand</th>
                            <th className="text-gold-400 py-3 px-4 font-serif text-lg">Strengths</th>
                            <th className="text-gold-400 py-3 px-4 font-serif text-lg">Weaknesses</th>
                        </tr>
                    </thead>
                    <tbody>
                        {competitors.map((comp, index) => (
                            <motion.tr
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                className={`border-b border-gray-800 hover:bg-white/5 transition-colors ${comp.highlight ? 'bg-gold-900/20 border-gold-500/30' : ''
                                    }`}
                            >
                                <td className={`py-4 px-4 font-semibold ${comp.highlight ? 'text-gold-300' : 'text-white'}`}>
                                    {comp.brand}
                                </td>
                                <td className="py-4 px-4 text-green-400">{comp.strengths}</td>
                                <td className="py-4 px-4 text-red-400">{comp.weaknesses}</td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </motion.div>

            {/* Brand Recall Chart */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="glass-panel p-6 rounded-xl"
            >
                <h3 className="text-2xl font-serif text-gold-300 mb-6">Brand Recall Score</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={competitorData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                        <XAxis dataKey="name" tick={{ fill: '#fff' }} />
                        <YAxis tick={{ fill: '#fff' }} />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #D4AF37', borderRadius: '8px' }}
                            labelStyle={{ color: '#D4AF37' }}
                        />
                        <Bar dataKey="score" fill="#D4AF37" radius={[8, 8, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </motion.div>
        </Slide>
    );
};

export default Slide3_Market;
