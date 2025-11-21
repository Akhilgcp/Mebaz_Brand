import React, { useState } from 'react';
import Slide from '../components/Slide';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, MessageCircle, Camera, Video, ChevronDown, ChevronUp } from 'lucide-react';
import ConversationBubble, { TypingIndicator } from '../components/ConversationBubble';

const Slide9_AISolutions = () => {
    const [expanded, setExpanded] = useState(null);
    const [showChatDemo, setShowChatDemo] = useState(false);
    const [showWhatsAppDemo, setShowWhatsAppDemo] = useState(false);

    const solutions = [
        {
            id: 1,
            icon: Bot,
            title: 'AI Chatbot (Website + WhatsApp)',
            color: 'from-blue-500 to-blue-700',
            examples: [
                '"Show me wedding sarees under ₹15,000"',
                '"Find matching outfits for family photoshoot"',
                '"What are the latest bridal trends?"'
            ],
            features: ['24/7 availability', 'Multi-language support', 'Product recommendations', 'Order tracking']
        },
        {
            id: 2,
            icon: MessageCircle,
            title: 'AI WhatsApp Automation',
            color: 'from-green-500 to-green-700',
            examples: [
                'Automated appointment booking',
                'Personalized product suggestions',
                'Festival offer notifications',
                'Order status updates'
            ],
            features: ['Smart conversation flow', 'CRM integration', 'Broadcast campaigns', 'Analytics dashboard']
        },
        {
            id: 3,
            icon: Camera,
            title: 'AI Virtual Try-On',
            color: 'from-purple-500 to-purple-700',
            examples: [
                'AI generates 360° outfit try-on',
                'Virtual lehenga draping previews',
                'Mix-and-match family outfits',
                'Color customization preview'
            ],
            features: ['Real-time rendering', 'Body type adaptation', 'Share on social media', 'Save favorites']
        },
        {
            id: 4,
            icon: Video,
            title: 'AI Social Media Video Generator',
            color: 'from-pink-500 to-pink-700',
            examples: [
                '"Before & After Bridal Transformation"',
                '"Wedding Family Coordination Look"',
                '"Traditional to Modern Fusion Lookbook"',
                '"Festival Collection Showcase"'
            ],
            features: ['Auto-editing', 'Trending music sync', 'Brand watermark', 'Multi-platform export']
        },
    ];

    return (
        <Slide title="AI Solutions for Mebaz" subtitle="Detailed Implementation Strategy">
            <div className="space-y-6">
                {/* Main Solution Cards Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={solution.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className="glass-panel-ethnic rounded-xl overflow-hidden hover:border-gold-500/50 transition-all cursor-pointer ethnic-pattern-overlay"
                        >
                            {/* Header */}
                            <div
                                onClick={() => setExpanded(expanded === solution.id ? null : solution.id)}
                                className={`p-5 bg-gradient-to-r ${solution.color} flex items-center justify-between`}
                            >
                                <div className="flex items-center gap-3">
                                    <solution.icon size={28} className="text-white" />
                                    <h3 className="text-lg font-serif text-white font-bold">{solution.title}</h3>
                                </div>
                                {expanded === solution.id ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <p className="text-sm text-gray-400 uppercase tracking-wide mb-3">Examples:</p>
                                <ul className="space-y-2 mb-4">
                                    {solution.examples.slice(0, expanded === solution.id ? undefined : 2).map((example, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-300">
                                            <span className="text-gold-400 mt-1">•</span>
                                            <span className="text-sm">{example}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Expanded Features */}
                                <AnimatePresence>
                                    {expanded === solution.id && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="border-t border-gray-700 pt-4 mt-4"
                                        >
                                            <p className="text-sm text-gray-400 uppercase tracking-wide mb-3">Key Features:</p>
                                            <div className="grid grid-cols-2 gap-2">
                                                {solution.features.map((feature, i) => (
                                                    <div key={i} className="bg-black/40 px-3 py-2 rounded-lg text-xs text-gray-300">
                                                        {feature}
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Add demo button for chatbot and WhatsApp */}
                                            {solution.id === 1 && (
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setShowChatDemo(!showChatDemo);
                                                    }}
                                                    className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors w-full"
                                                >
                                                    {showChatDemo ? 'Hide Demo' : 'View Chatbot Demo'}
                                                </button>
                                            )}
                                            {solution.id === 2 && (
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setShowWhatsAppDemo(!showWhatsAppDemo);
                                                    }}
                                                    className="mt-3 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition-colors w-full"
                                                >
                                                    {showWhatsAppDemo ? 'Hide Demo' : 'View WhatsApp Demo'}
                                                </button>
                                            )}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Chatbot Conversation Demo */}
                <AnimatePresence>
                    {showChatDemo && (
                        <motion.div
                            initial={{ opacity: 0, maxHeight: 0 }}
                            animate={{ opacity: 1, maxHeight: 400 }}
                            exit={{ opacity: 0, maxHeight: 0 }}
                            className="glass-panel-ethnic rounded-xl p-6 overflow-hidden"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-lg font-serif text-white flex items-center gap-2">
                                    <Bot className="text-blue-400" size={20} />
                                    24×7 AI Fashion Assistant
                                </h4>
                                <span className="badge-ai">LIVE DEMO</span>
                            </div>
                            <div className="space-y-3 bg-black/30 rounded-lg p-4 max-h-64 overflow-y-auto custom-scrollbar">
                                <ConversationBubble type="customer" delay={0.1}>
                                    Suggest a look for a wedding evening.
                                </ConversationBubble>
                                <TypingIndicator delay={0.3} />
                                <ConversationBubble type="bot" delay={0.8} showAvatar avatarIcon="✨">
                                    Here are 3 stunning options based on gold & emerald tones perfect for a wedding evening:
                                    <br /><br />
                                    1. Classic Kanjivaram Silk Saree (Gold) - ₹22,990<br />
                                    2. Emerald Green Lehenga with Zari Work - ₹35,500<br />
                                    3. Indo-Western Gold Gown - ₹18,750
                                </ConversationBubble>
                                <ConversationBubble type="customer" delay={1.2}>
                                    Show me the lehenga
                                </ConversationBubble>
                                <ConversationBubble type="bot" delay={1.6} showAvatar avatarIcon="✨">
                                    [Image Gallery] Would you like to see similar styles or book a fitting appointment?
                                </ConversationBubble>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* WhatsApp Conversation Demo */}
                <AnimatePresence>
                    {showWhatsAppDemo && (
                        <motion.div
                            initial={{ opacity: 0, maxHeight: 0 }}
                            animate={{ opacity: 1, maxHeight: 400 }}
                            exit={{ opacity: 0, maxHeight: 0 }}
                            className="glass-panel-ethnic rounded-xl p-6 overflow-hidden"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-lg font-serif text-white flex items-center gap-2">
                                    <MessageCircle className="text-green-400" size={20} />
                                    WhatsApp Automation Flow
                                </h4>
                                <span className="badge-new">NEW</span>
                            </div>
                            <div className="space-y-3 bg-black/30 rounded-lg p-4 max-h-64 overflow-y-auto custom-scrollbar">
                                <ConversationBubble type="whatsapp" delay={0.1}>
                                    Send me latest bridal collection
                                </ConversationBubble>
                                <ConversationBubble type="bot" delay={0.4} showAvatar avatarIcon="🛍️">
                                    Hi! Here are 8 new arrivals in our bridal collection.
                                    <br /><br />
                                    Would you like to see:<br />
                                    1️⃣ Lehengas<br />
                                    2️⃣ Sarees<br />
                                    3️⃣ Designer Gowns
                                </ConversationBubble>
                                <ConversationBubble type="whatsapp" delay={0.8}>
                                    Sarees
                                </ConversationBubble>
                                <ConversationBubble type="bot" delay={1.1} showAvatar avatarIcon="🛍️">
                                    Perfect! Here are our top trending Kanjivaram sarees under ₹25,000:
                                    <br /><br />
                                    📸 [Gallery: 6 sarees]<br />
                                    💰 Price range: ₹12,500 - ₹24,990<br />
                                    📍 Available at: Malakpet & Tolichowki stores
                                </ConversationBubble>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Tools Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="p-5 glass-panel-ethnic gradient-ethnic-gold rounded-lg text-center mandala-corners"
                >
                    <p className="text-white font-light">
                        <strong className="text-gold-300">Recommended Tools:</strong> ZMO.ai, Vue.ai, Luma Dream Machine, ChatGPT API, Meta WhatsApp Business API
                    </p>
                </motion.div>
            </div>
        </Slide>
    );
};

export default Slide9_AISolutions;
