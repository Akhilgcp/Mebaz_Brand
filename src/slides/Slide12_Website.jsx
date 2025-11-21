import React, { useState } from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Zap, Image, Sparkles, Users2, Package, ChevronRight, Star, TrendingUp } from 'lucide-react';

const Slide12_Website = () => {
    const [selectedMockup, setSelectedMockup] = useState('hero');

    const enhancements = [
        {
            icon: Zap,
            title: 'Fast-Loading Pages',
            description: 'Optimized for <2 second load times',
            impact: '+30% conversion'
        },
        {
            icon: Image,
            title: 'Premium Photography',
            description: '360° product views & lifestyle shots',
            impact: 'Higher engagement'
        },
        {
            icon: Sparkles,
            title: 'AI Outfit Coordination',
            description: 'Suggest matching outfits automatically',
            impact: '+40% cart value'
        },
        {
            icon: Users2,
            title: 'Family Shopping Bundles',
            description: 'Pre-curated wedding packages',
            impact: 'Simplified buying'
        },
        {
            icon: Package,
            title: 'Wedding Lookbooks',
            description: 'Themed collections with stories',
            impact: 'Emotional connection'
        },
    ];

    const mockupSections = [
        { id: 'hero', label: 'Hero Banner', icon: Sparkles },
        { id: 'collections', label: 'Featured Collections', icon: Package },
        { id: 'ai', label: 'AI Recommendations', icon: TrendingUp },
    ];

    return (
        <Slide title="Website Enhancement" subtitle="Digital Storefront Transformation">
            {/* Key Enhancements */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                {enhancements.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 1, x: index % 2 === 0 ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="glass-panel-ethnic p-6 rounded-xl hover:border-gold-500/50 transition-all ethnic-pattern-overlay"
                    >
                        <div className="flex items-start gap-4">
                            <div className="bg-gradient-to-br from-gold-500 to-gold-700 p-3 rounded-lg flex-shrink-0">
                                <item.icon size={24} className="text-white" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-serif text-gold-300 mb-1">{item.title}</h3>
                                <p className="text-sm text-gray-300 mb-2">{item.description}</p>
                                <p className="text-xs text-emerald-400 font-semibold">Impact: {item.impact}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Website Mockup with Interactive Sections */}
            <motion.div
                initial={{ opacity: 1, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="glass-panel-ethnic p-8 rounded-xl gradient-ethnic-gold border-2 border-gold-500/30"
            >
                <div className="text-center mb-6">
                    <h3 className="text-2xl font-serif text-gold-300 mb-2">Enhanced User Experience</h3>
                    <p className="text-gray-300">Click sections to preview website features</p>
                </div>

                {/* Section Selector */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                    {mockupSections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => setSelectedMockup(section.id)}
                            className={`p-4 rounded-lg transition-all ${selectedMockup === section.id
                                ? 'bg-gold-500 text-black border-2 border-gold-400'
                                : 'bg-white/10 text-gold-200 border-2 border-white/20 hover:bg-white/20'
                                }`}
                        >
                            <div className="flex items-center justify-center gap-2">
                                <section.icon size={20} />
                                <span className="font-semibold text-sm">{section.label}</span>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Mockup Visualization - ABSOLUTELY NO ANIMATIONS */}
                <div className="bg-black/40 rounded-lg p-6 border border-white/10 min-h-[320px]">
                    {/* Hero Banner Mockup */}
                    <div className={selectedMockup === 'hero' ? 'block' : 'hidden'}>
                        <div className="space-y-4">
                            <div className="bg-gradient-to-r from-maroon-900/40 to-gold-900/40 rounded-lg p-8 border border-gold-500/30">
                                <div className="text-center">
                                    <div className="inline-block px-4 py-1 bg-gold-500 text-black text-xs font-bold rounded-full mb-3">
                                        FESTIVE COLLECTION 2025
                                    </div>
                                    <h2 className="text-3xl font-serif text-gold-300 mb-2">Timeless Elegance Meets Modern Grace</h2>
                                    <p className="text-white mb-4 font-medium">Discover our curated wedding & festive collection</p>
                                    <div className="flex gap-3 justify-center">
                                        <div className="px-6 py-2 bg-gold-500 text-black rounded-full text-sm font-semibold flex items-center gap-2">
                                            Shop Collection <ChevronRight size={16} />
                                        </div>
                                        <div className="px-6 py-2 bg-white/20 text-white rounded-full text-sm font-semibold">
                                            Virtual Try-On
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                                <div className="bg-white/5 rounded-lg overflow-hidden border border-white/20">
                                    <img src="/hero_saree.png" alt="Sarees" className="w-full h-24 object-cover" />
                                    <div className="p-2 text-center bg-gradient-to-t from-black/60 to-transparent">
                                        <div className="text-sm text-white font-semibold">Premium Sarees</div>
                                    </div>
                                </div>
                                <div className="bg-white/5 rounded-lg overflow-hidden border border-white/20">
                                    <img src="/lehenga.png" alt="Lehengas" className="w-full h-24 object-cover" />
                                    <div className="p-2 text-center bg-gradient-to-t from-black/60 to-transparent">
                                        <div className="text-sm text-white font-semibold">Bridal Lehengas</div>
                                    </div>
                                </div>
                                <div className="bg-white/5 rounded-lg overflow-hidden border border-white/20">
                                    <img src="/sherwani.png" alt="Sherwanis" className="w-full h-24 object-cover" />
                                    <div className="p-2 text-center bg-gradient-to-t from-black/60 to-transparent">
                                        <div className="text-sm text-white font-semibold">Groom Sherwanis</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Featured Collections Mockup */}
                    <div className={selectedMockup === 'collections' ? 'block' : 'hidden'}>
                        <div className="space-y-4">
                            <h3 className="text-xl font-serif text-gold-300 mb-4">Trending Collections</h3>
                            <div className="grid grid-cols-4 gap-3">
                                <div className="bg-gradient-to-br from-gold-900/30 to-maroon-900/30 rounded-lg p-3 border border-gold-500/30 hover:scale-105 transition-transform">
                                    <div className="h-28 rounded mb-2 overflow-hidden">
                                        <img src="/bridal.png" alt="Bridal Luxe" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="text-xs font-bold text-gold-400 mb-1">NEW ARRIVAL</div>
                                    <div className="text-sm text-white font-semibold">Bridal Luxe</div>
                                    <div className="text-xs text-gray-300 mt-1">24+ Items</div>
                                </div>
                                <div className="bg-gradient-to-br from-gold-900/30 to-maroon-900/30 rounded-lg p-3 border border-gold-500/30 hover:scale-105 transition-transform">
                                    <div className="h-28 rounded mb-2 overflow-hidden">
                                        <img src="/festive_gold.png" alt="Festive Gold" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="text-xs font-bold text-gold-400 mb-1">HOT TRENDING</div>
                                    <div className="text-sm text-white font-semibold">Festive Gold</div>
                                    <div className="text-xs text-gray-300 mt-1">18+ Items</div>
                                </div>
                                <div className="bg-gradient-to-br from-gold-900/30 to-maroon-900/30 rounded-lg p-3 border border-gold-500/30 hover:scale-105 transition-transform">
                                    <div className="h-28 rounded mb-2 overflow-hidden">
                                        <img src="/heritage.png" alt="Royal Heritage" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="text-xs font-bold text-gold-400 mb-1">BESTSELLER</div>
                                    <div className="text-sm text-white font-semibold">Royal Heritage</div>
                                    <div className="text-xs text-gray-300 mt-1">32+ Items</div>
                                </div>
                                <div className="bg-gradient-to-br from-gold-900/30 to-maroon-900/30 rounded-lg p-3 border border-gold-500/30 hover:scale-105 transition-transform">
                                    <div className="h-28 rounded mb-2 overflow-hidden">
                                        <img src="/lehenga.png" alt="Modern Fusion" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="text-xs font-bold text-gold-400 mb-1">TRENDING NOW</div>
                                    <div className="text-sm text-white font-semibold">Modern Fusion</div>
                                    <div className="text-xs text-gray-300 mt-1">15+ Items</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* AI Recommendations Mockup */}
                    <div className={selectedMockup === 'ai' ? 'block' : 'hidden'}>
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 mb-4">
                                <Sparkles className="text-purple-400" size={24} />
                                <h3 className="text-xl font-serif text-white">Recommended Just For You</h3>
                                <span className="badge-ai ml-2">AI POWERED</span>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-lg p-4 border border-purple-500/30">
                                    <div className="h-32 rounded mb-2 overflow-hidden">
                                        <img src="/hero_saree.png" alt="Gold Kanjivaram" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="text-sm text-white font-semibold mb-1">Gold Kanjivaram</div>
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-xs text-purple-400 font-bold">95% Match</span>
                                        <Star className="text-yellow-400" size={14} fill="currentColor" />
                                    </div>
                                    <div className="text-xs text-gray-300">Based on your style preferences</div>
                                </div>
                                <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-lg p-4 border border-purple-500/30">
                                    <div className="h-32 rounded mb-2 overflow-hidden">
                                        <img src="/lehenga.png" alt="Emerald Lehenga" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="text-sm text-white font-semibold mb-1">Emerald Lehenga</div>
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-xs text-purple-400 font-bold">92% Match</span>
                                        <Star className="text-yellow-400" size={14} fill="currentColor" />
                                    </div>
                                    <div className="text-xs text-gray-300">Trending this week</div>
                                </div>
                                <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-lg p-4 border border-purple-500/30">
                                    <div className="h-32 rounded mb-2 overflow-hidden">
                                        <img src="/sherwani.png" alt="Matching Sherwani" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="text-sm text-white font-semibold mb-1">Matching Sherwani</div>
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-xs text-purple-400 font-bold">88% Match</span>
                                        <Star className="text-yellow-400" size={14} fill="currentColor" />
                                    </div>
                                    <div className="text-xs text-gray-300">Complements your selection</div>
                                </div>
                            </div>
                            <div className="bg-black/40 rounded p-3 border border-purple-500/20">
                                <p className="text-xs text-gray-300 text-center font-medium">
                                    💡 AI analyzes browsing history, preferences, and trending styles to show personalized recommendations
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-center text-sm text-gray-400 mt-4">
                    Mobile-first design • SEO optimized • Accessibility compliant
                </p>
            </motion.div>
        </Slide>
    );
};

export default Slide12_Website;
