import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { MessageSquare, Search, TrendingDown, TrendingUp, Lightbulb } from 'lucide-react';

const Slide8_BrandPerception = () => {
    return (
        <Slide title="Brand Perception on AI Platforms" subtitle="ChatGPT & Perplexity Analysis">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Current Status */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-panel p-6 rounded-xl border-blue-500/30"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <MessageSquare className="text-blue-400" size={32} />
                        <h3 className="text-xl font-serif text-blue-300">Current Insights</h3>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <TrendingUp className="text-emerald-400 mt-1" size={20} />
                            <p className="text-gray-200">Recognized as <strong className="text-emerald-400">traditional</strong>, <strong className="text-emerald-400">trusted</strong> brand</p>
                        </div>

                        <div className="flex items-start gap-3">
                            <TrendingDown className="text-red-400 mt-1" size={20} />
                            <p className="text-gray-200">Low <strong className="text-red-400">modern digital footprint</strong></p>
                        </div>

                        <div className="flex items-start gap-3">
                            <TrendingDown className="text-orange-400 mt-1" size={20} />
                            <p className="text-gray-200">Competitors appear <strong className="text-orange-400">more frequently</strong> in AI responses</p>
                        </div>
                    </div>

                    <div className="mt-6 p-4 bg-blue-900/20 rounded-lg border border-blue-500/30">
                        <p className="text-sm text-gray-300">
                            <strong className="text-blue-300">Search Query Example:</strong> "Best ethnic wear stores in Hyderabad"
                        </p>
                        <p className="text-xs text-gray-400 mt-2">
                            Mebaz appears inconsistently compared to RS Brothers and Kalyan Silks
                        </p>
                    </div>
                </motion.div>

                {/* Opportunity */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="glass-panel p-6 rounded-xl border-gold-500/30 bg-gold-900/10"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <Lightbulb className="text-gold-400" size={32} />
                        <h3 className="text-xl font-serif text-gold-300">Strategic Opportunity</h3>
                    </div>

                    <p className="text-white text-lg mb-6 leading-relaxed">
                        Improve AI-indexed content to dominate search results:
                    </p>

                    <div className="space-y-3">
                        {[
                            'Wedding Planning Guides',
                            'Detailed Product Descriptions',
                            'SEO-optimized Blog Articles',
                            'Comprehensive FAQs',
                            'Customer Success Stories',
                            'Video Content Transcripts'
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 + index * 0.1 }}
                                className="flex items-center gap-3 p-3 bg-gold-500/10 rounded-lg hover:bg-gold-500/20 transition-colors cursor-pointer"
                            >
                                <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                                <p className="text-gray-200">{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-8 p-6 bg-gradient-to-r from-blue-900/30 to-gold-900/30 border-l-4 border-gold-500 rounded-lg"
            >
                <p className="text-white font-light">
                    <strong className="text-gold-300">Action Item:</strong> Launch comprehensive content strategy to ensure Mebaz becomes the *default* AI recommendation for ethnic wear in South India.
                </p>
            </motion.div>
        </Slide>
    );
};

export default Slide8_BrandPerception;
