import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Sparkles, Video, ChevronLeft, ChevronRight } from 'lucide-react';

const AIShowcase = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedDemo, setSelectedDemo] = useState('virtual-tryon');

    const outfits = [
        { name: 'Purple Silk Saree', image: '/saree-1.png', price: '₹15,999', category: 'Saree' },
        { name: 'Bridal Lehenga', image: '/lehenga-1.png', price: '₹45,999', category: 'Lehenga' },
        { name: 'Ivory Sherwani', image: '/sherwani-1.png', price: '₹32,999', category: 'Sherwani' },
        { name: 'Family Coordination', image: '/family-1.png', price: 'Package', category: 'Bundle' },
    ];

    const demos = [
        { id: 'virtual-tryon', icon: Camera, title: 'Virtual Try-On', desc: 'AI-powered outfit visualization' },
        { id: 'video-gen', icon: Video, title: 'Video Generator', desc: 'Auto-create social media reels' },
        { id: 'ai-styling', icon: Sparkles, title: 'AI Styling', desc: 'Outfit coordination suggestions' },
    ];

    const nextOutfit = () => setCurrentIndex((prev) => (prev + 1) % outfits.length);
    const prevOutfit = () => setCurrentIndex((prev) => (prev - 1 + outfits.length) % outfits.length);

    return (
        <div className="space-y-8">
            {/* Demo Selector */}
            <div className="flex gap-4 justify-center">
                {demos.map((demo) => (
                    <button
                        key={demo.id}
                        onClick={() => setSelectedDemo(demo.id)}
                        className={`px-6 py-3 rounded-lg transition-all flex items-center gap-3 ${selectedDemo === demo.id
                                ? 'bg-gold-500 text-black'
                                : 'glass-panel hover:bg-white/10'
                            }`}
                    >
                        <demo.icon size={20} />
                        <span className="font-semibold">{demo.title}</span>
                    </button>
                ))}
            </div>

            {/* Outfit Carousel */}
            <div className="relative">
                <div className="flex items-center justify-center gap-8">
                    {/* Previous Button */}
                    <button
                        onClick={prevOutfit}
                        className="glass-panel p-4 rounded-full hover:bg-white/20 transition-all"
                    >
                        <ChevronLeft size={32} className="text-gold-400" />
                    </button>

                    {/* Main Display */}
                    <div className="relative w-full max-w-2xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="glass-panel rounded-xl overflow-hidden"
                            >
                                <div className="aspect-[4/5] bg-black/40 relative">
                                    <img
                                        src={outfits[currentIndex].image}
                                        alt={outfits[currentIndex].name}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* AI Badge */}
                                    <div className="absolute top-4 right-4 bg-gold-500 text-black px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                                        <Sparkles size={16} />
                                        AI Generated
                                    </div>
                                </div>
                                <div className="p-6 bg-gradient-to-t from-black/80 to-transparent">
                                    <h3 className="text-2xl font-serif text-white mb-2">{outfits[currentIndex].name}</h3>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gold-400 text-xl font-semibold">{outfits[currentIndex].price}</span>
                                        <span className="text-gray-400 text-sm">{outfits[currentIndex].category}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={nextOutfit}
                        className="glass-panel p-4 rounded-full hover:bg-white/20 transition-all"
                    >
                        <ChevronRight size={32} className="text-gold-400" />
                    </button>
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-2 mt-6">
                    {outfits.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 rounded-full transition-all ${index === currentIndex ? 'w-8 bg-gold-500' : 'w-2 bg-gray-600'
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Features List */}
            <div className="grid md:grid-cols-3 gap-4">
                {[
                    '360° Product View',
                    'Real-time Color Customization',
                    'Share on Social Media',
                ].map((feature, i) => (
                    <div key={i} className="glass-panel p-4 rounded-lg text-center text-sm text-gray-300">
                        {feature}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AIShowcase;
