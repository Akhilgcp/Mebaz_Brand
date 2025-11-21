import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Sparkles, Video, Image as ImageIcon, TrendingUp, Zap } from 'lucide-react';

const Slide17_AIContent = () => {
    const contentTypes = [
        {
            icon: ImageIcon,
            title: 'AI-Generated Product Photos',
            metric: '100+ images/week',
            color: 'from-purple-500 to-pink-500',
            examples: [
                'Lehenga in multiple color variations',
                'Sherwani on AI-generated models',
                'Saree draping style variations',
                'Kids ethnic wear seasonal looks'
            ]
        },
        {
            icon: Video,
            title: 'Auto-Generated Reels',
            metric: '5-7 sec clips',
            color: 'from-blue-500 to-cyan-500',
            examples: [
                'Before/After bridal makeovers',
                'Product showcase with music',
                'Festival collection highlights',
                'Customer testimonial clips'
            ]
        },
        {
            icon: Sparkles,
            title: 'Campaign Visuals',
            metric: 'Multi-platform ready',
            color: 'from-gold-500 to-orange-500',
            examples: [
                'Instagram carousel posts',
                'Facebook ad creatives',
                'YouTube thumbnail designs',
                'Google Display banners'
            ]
        }
    ];

    const campaignCaptions = [
        { text: '"Festive Vibes 2025 Collection"', theme: 'Diwali Launch' },
        { text: '"Try Before You Buy — AI Preview"', theme: 'Virtual Try-On' },
        { text: '"Heritage Woven in Every Detail"', theme: 'Brand Story' },
        { text: '"Your Perfect Wedding Look Awaits"', theme: 'Bridal Campaign' },
    ];

    const tools = [
        { name: 'Midjourney', purpose: 'Product photography' },
        { name: 'DALL-E 3', purpose: 'Campaign creatives' },
        { name: 'Stable Diffusion', purpose: 'Model variations' },
        { name: 'Runway ML', purpose: 'Video generation' },
    ];

    return (
        <Slide title="AI-Generated Visual Content" subtitle="Scaling Content Production with AI">
            <div className="space-y-6">
                {/* Content Types Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {contentTypes.map((type, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 + index * 0.1 }}
                            className="glass-panel-ethnic rounded-xl p-6 hover:scale-105 transition-transform ethnic-pattern-overlay"
                        >
                            <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${type.color} flex items-center justify-center mb-4`}>
                                <type.icon size={28} className="text-white" />
                            </div>
                            <h3 className="text-lg font-serif text-white mb-2">{type.title}</h3>
                            <p className="text-gold-400 text-sm font-semibold mb-4">{type.metric}</p>
                            <ul className="space-y-2">
                                {type.examples.map((example, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                                        <span className="text-gold-400 mt-0.5">✓</span>
                                        <span>{example}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* AI-Generated Gallery Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="glass-panel-ethnic rounded-xl p-6 gradient-ethnic-gold"
                >
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-serif text-white">AI Image Gallery</h3>
                        <span className="badge-ai">AI POWERED</span>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {['/saree-1.png', '/lehenga-1.png', '/sherwani-1.png', '/family-1.png'].map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 + i * 0.1 }}
                                className="aspect-[3/4] rounded-lg overflow-hidden border-2 border-gold-500/30 hover:border-gold-500 transition-colors relative group"
                            >
                                <img src={img} alt={`AI Generated ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                                <div className="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 rounded text-xs font-bold">
                                    AI
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <p className="text-gray-400 text-sm mt-4 text-center italic">
                        All product images generated using AI tools for rapid content creation
                    </p>
                </motion.div>

                {/* Campaign Captions & Tools */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Sample Captions */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="glass-panel-ethnic rounded-xl p-6 banarasi-weave"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <TrendingUp className="text-pink-400" size={20} />
                            <h4 className="text-lg font-serif text-white">Sample Campaign Captions</h4>
                        </div>
                        <div className="space-y-3">
                            {campaignCaptions.map((caption, i) => (
                                <div key={i} className="bg-black/40 p-3 rounded-lg border-l-4 border-gold-500">
                                    <p className="text-white font-semibold text-sm mb-1">{caption.text}</p>
                                    <p className="text-gray-400 text-xs">Theme: {caption.theme}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* AI Tools */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                        className="glass-panel-ethnic rounded-xl p-6 silk-texture"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <Zap className="text-yellow-400" size={20} />
                            <h4 className="text-lg font-serif text-white">AI Tools Stack</h4>
                        </div>
                        <div className="space-y-3">
                            {tools.map((tool, i) => (
                                <div key={i} className="flex justify-between items-center bg-black/40 p-3 rounded-lg">
                                    <span className="text-white font-semibold">{tool.name}</span>
                                    <span className="text-gray-400 text-sm">{tool.purpose}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 p-3 bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-lg border border-purple-500/30">
                            <p className="text-sm text-white">
                                <strong className="text-purple-300">Est. Output:</strong> 400+ visuals/month across all platforms
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Benefits Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    className="glass-panel-ethnic rounded-xl p-5 gradient-ethnic-maroon mandala-corners"
                >
                    <div className="grid md:grid-cols-4 gap-4 text-center">
                        <div>
                            <div className="text-3xl font-serif text-gold-400 mb-1">90%</div>
                            <div className="text-xs text-gray-400">Cost Reduction</div>
                        </div>
                        <div>
                            <div className="text-3xl font-serif text-gold-400 mb-1">10x</div>
                            <div className="text-xs text-gray-400">Faster Production</div>
                        </div>
                        <div>
                            <div className="text-3xl font-serif text-gold-400 mb-1">24/7</div>
                            <div className="text-xs text-gray-400">Content Generation</div>
                        </div>
                        <div>
                            <div className="text-3xl font-serif text-gold-400 mb-1">∞</div>
                            <div className="text-xs text-gray-400">Creative Variations</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Slide>
    );
};

export default Slide17_AIContent;
