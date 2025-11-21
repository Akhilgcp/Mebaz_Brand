import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Sparkles, Upload, Scan, Palette, Share2, ShoppingCart, ArrowRight } from 'lucide-react';
import AIShowcase from '../components/AIShowcase';

const Slide16_AIDemo = () => {
    const tryOnFlow = [
        { icon: Upload, step: '1', title: 'Upload Photo', desc: 'Customer uploads selfie or full photo' },
        { icon: Scan, step: '2', title: 'AI Detection', desc: 'AI detects body shape & facial features' },
        { icon: Sparkles, step: '3', title: 'Generate Look', desc: 'High-quality ethnic outfit rendering' },
        { icon: Palette, step: '4', title: 'Customize', desc: 'Choose color, fabric, drape style' },
        { icon: Share2, step: '5', title: 'Share/Save', desc: 'Share on social or save to wishlist' },
        { icon: ShoppingCart, step: '6', title: 'Purchase', desc: 'Direct checkout or book appointment' },
    ];

    const benefits = [
        { title: 'Helps Remote Shoppers', icon: '🌍', desc: 'Try outfits from anywhere' },
        { title: 'Reduces Returns', icon: '↩️', desc: '70% fewer exchanges' },
        { title: 'Creates Excitement', icon: '✨', desc: 'Viral social media shares' },
        { title: 'Increases Conversions', icon: '📈', desc: '+35% purchase rate' },
    ];

    const beforeAfterExamples = [
        { category: 'Lehenga', before: 'Simple photo', after: 'Elegant bridal lehenga with AI rendering' },
        { category: 'Sherwani', before: 'Customer selfie', after: 'Premium sherwani with accessories' },
    ];

    return (
        <Slide title="AI Virtual Try-On Experience" subtitle="See the Future of E-Commerce">
            {/* Introduction */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8 p-6 glass-panel-ethnic rounded-xl border-gold-500/30 gradient-ethnic-gold text-center mandala-corners"
            >
                <div className="flex items-center justify-center gap-3 mb-3">
                    <Sparkles size={32} className="text-gold-400" />
                    <h3 className="text-2xl font-serif text-gold-300">AI-Generated Product Visualization</h3>
                    <span className="badge-ai">AI POWERED</span>
                </div>
                <p className="text-gray-300 max-w-3xl mx-auto">
                    Upload a photo → AI generates 3–5 ethnic-wear looks in real-time → Share, save, or purchase directly.
                </p>
            </motion.div>

            {/* Virtual Try-On Flow */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mb-8"
            >
                <h4 className="text-lg font-serif text-white mb-4 flex items-center gap-2">
                    <Sparkles className="text-purple-400" size={20} />
                    How It Works
                </h4>
                <div className="grid grid-cols-6 gap-3">
                    {tryOnFlow.map((step, i) => (
                        <React.Fragment key={i}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6 + i * 0.1 }}
                                className="glass-panel-ethnic rounded-lg p-4 text-center hover:scale-105 transition-transform ethnic-pattern-overlay"
                            >
                                <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                                    <step.icon size={20} className="text-white" />
                                </div>
                                <div className="text-xs font-bold text-gold-400 mb-1">STEP {step.step}</div>
                                <div className="text-sm text-white font-semibold mb-1">{step.title}</div>
                                <div className="text-xs text-gray-400">{step.desc}</div>
                            </motion.div>
                            {i < tryOnFlow.length - 1 && (
                                <div className="flex items-center justify-center">
                                    <ArrowRight className="text-gold-500" size={20} />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </motion.div>

            {/* Before/After Examples */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="mb-8 glass-panel-ethnic rounded-xl p-6 banarasi-weave"
            >
                <h4 className="text-lg font-serif text-white mb-4">Before → After Examples</h4>
                <div className="grid md:grid-cols-2 gap-4">
                    {beforeAfterExamples.map((example, i) => (
                        <div key={i} className="bg-black/40 rounded-lg p-4 border border-purple-500/20">
                            <div className="text-purple-400 font-semibold mb-2">{example.category}</div>
                            <div className="flex items-center gap-3">
                                <div className="flex-1 text-center p-3 bg-gray-800 rounded">
                                    <div className="text-sm text-gray-400 mb-1">Before</div>
                                    <div className="text-xs text-white">{example.before}</div>
                                </div>
                                <ArrowRight className="text-gold-500" size={24} />
                                <div className="flex-1 text-center p-3 bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded">
                                    <div className="text-sm text-purple-300 mb-1">After</div>
                                    <div className="text-xs text-white">{example.after}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* AI Showcase Gallery */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
            >
                <AIShowcase />
            </motion.div>

            {/* Benefits Grid */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="mt-8 grid md:grid-cols-4 gap-4"
            >
                {benefits.map((benefit, i) => (
                    <div key={i} className="glass-panel-ethnic rounded-lg p-4 text-center hover:scale-105 transition-transform silk-texture">
                        <div className="text-3xl mb-2">{benefit.icon}</div>
                        <div className="text-white font-semibold text-sm mb-1">{benefit.title}</div>
                        <div className="text-gray-400 text-xs">{benefit.desc}</div>
                    </div>
                ))}
            </motion.div>

            {/* Implementation Tools */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="mt-8 p-5 glass-panel-ethnic gradient-ethnic-maroon rounded-lg text-center"
            >
                <p className="text-white font-light">
                    <strong className="text-purple-300">Implementation Tools:</strong> ZMO.ai (Virtual Try-On), Vue.ai (Product Visualization), Luma Dream Machine (3D Rendering)
                </p>
            </motion.div>
        </Slide>
    );
};

export default Slide16_AIDemo;
