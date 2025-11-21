import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Sparkles, TrendingUp, Zap, Download, ArrowRight, Bot, Users, Star } from 'lucide-react';

const AnimatedSection = ({ children, className = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const LandingPage = () => {
    const handleDownload = () => {
        alert('Pitch deck download would be here - feature coming soon!');
    };

    const features = [
        { icon: Bot, title: 'AI-Powered Solutions', desc: 'Chatbots, Virtual Try-on, Automation' },
        { icon: Users, title: 'Customer 360', desc: 'Unified intelligence platform' },
        { icon: TrendingUp, title: '+40% Growth', desc: 'Projected online inquiries' },
        { icon: Star, title: 'Loyalty Program', desc: 'Mebaz Royal Circle rewards' },
    ];

    const stats = [
        { value: '50+', label: 'Years of Heritage' },
        { value: '₹2-10L', label: 'Avg. Wedding Spend' },
        { value: '300%', label: 'Projected ROI' },
        { value: '6 Months', label: 'Implementation' },
    ];

    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
            {/* Fixed Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-ethnic-pattern bg-cover bg-center opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black via-royal-900/80 to-black"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
                {/* Hero Section */}
                <section className="min-h-screen flex items-center justify-center px-6">
                    <div className="max-w-6xl mx-auto text-center">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block mb-6">
                                <span className="px-6 py-2 bg-gold-500/20 border border-gold-500/50 rounded-full text-gold-300 text-sm uppercase tracking-widest">
                                    Brand Transformation 2025
                                </span>
                            </div>

                            <h1 className="text-7xl md:text-9xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-gold-200 via-gold-400 to-gold-600 mb-6 tracking-tight">
                                MEBAZ
                            </h1>

                            <p className="text-3xl md:text-4xl text-white mb-4 font-light">
                                Brand Enhancement Strategy
                            </p>

                            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
                                Powered by AI • Data • Digital Commerce
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Link
                                    to="/deck/slide/1"
                                    className="group px-10 py-5 bg-gradient-to-r from-gold-500 to-gold-700 text-black font-bold rounded-full hover:from-gold-400 hover:to-gold-600 transition-all transform hover:scale-105 shadow-lg shadow-gold-500/30 flex items-center gap-3"
                                >
                                    <Sparkles size={24} />
                                    <span>Explore Pitch Deck</span>
                                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                                </Link>

                                <button
                                    onClick={handleDownload}
                                    className="px-10 py-5 glass-panel border border-white/30 rounded-full hover:bg-white/10 transition-all flex items-center gap-3"
                                >
                                    <Download size={24} />
                                    <span>Download PDF</span>
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Features Overview */}
                <AnimatedSection className="py-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-5xl font-serif text-gold-300 mb-16 text-center">Key Highlights</h2>
                        <div className="grid md:grid-cols-4 gap-8">
                            {features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="glass-panel p-8 rounded-xl text-center hover:scale-105 transition-all cursor-pointer"
                                >
                                    <div className="bg-gold-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                        <feature.icon size={32} className="text-black" />
                                    </div>
                                    <h3 className="text-xl font-serif text-white mb-2">{feature.title}</h3>
                                    <p className="text-sm text-gray-400">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

                {/* Stats Section */}
                <AnimatedSection className="py-24 px-6 bg-gradient-to-r from-gold-900/20 to-purple-900/20">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-5xl font-serif text-gold-300 mb-16 text-center">By The Numbers</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-center"
                                >
                                    <div className="text-5xl md:text-6xl font-serif text-gold-400 mb-2">{stat.value}</div>
                                    <div className="text-gray-400">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

                {/* Challenge & Opportunity */}
                <AnimatedSection className="py-24 px-6">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                        <div className="glass-panel p-8 rounded-xl border-red-500/30">
                            <h3 className="text-3xl font-serif text-red-300 mb-6">The Challenge</h3>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400">•</span>
                                    <span>Low digital visibility vs. competitors</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400">•</span>
                                    <span>No unified customer data system</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400">•</span>
                                    <span>Limited personalization & AI usage</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400">•</span>
                                    <span>Underutilized social media presence</span>
                                </li>
                            </ul>
                        </div>

                        <div className="glass-panel p-8 rounded-xl border-emerald-500/30 bg-emerald-900/10">
                            <h3 className="text-3xl font-serif text-emerald-300 mb-6">The Opportunity</h3>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400">✓</span>
                                    <span>12-18% YoY wedding market growth</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400">✓</span>
                                    <span>AI adoption = 20-40% conversion boost</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400">✓</span>
                                    <span>70% discovery via Instagram Reels</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-emerald-400">✓</span>
                                    <span>Built-in trust & regional heritage</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </AnimatedSection>

                {/* AI Demo Section */}
                <AnimatedSection className="py-24 px-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-5xl font-serif text-gold-300 mb-4">AI-Powered Virtual Try-On</h2>
                            <p className="text-xl text-gray-400">Experience the future of ethnic wear shopping</p>
                        </div>
                        <div className="glass-panel p-8 rounded-2xl">
                            <div className="grid md:grid-cols-4 gap-6">
                                {[
                                    { img: '/saree-1.png', name: 'Purple Silk Saree', price: '₹15,999' },
                                    { img: '/lehenga-1.png', name: 'Bridal Lehenga', price: '₹45,999' },
                                    { img: '/sherwani-1.png', name: 'Ivory Sherwani', price: '₹32,999' },
                                    { img: '/family-1.png', name: 'Family Package', price: 'Custom' },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="group cursor-pointer"
                                    >
                                        <div className="aspect-[3/4] bg-black/40 rounded-lg overflow-hidden mb-3 relative">
                                            <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                            <div className="absolute top-2 right-2 bg-gold-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                                                AI
                                            </div>
                                        </div>
                                        <h4 className="text-white font-semibold mb-1">{item.name}</h4>
                                        <p className="text-gold-400 text-sm">{item.price}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* CTA Section */}
                <AnimatedSection className="py-32 px-6">
                    <div className="max-w-4xl mx-auto text-center glass-panel p-16 rounded-2xl border-2 border-gold-500/50 bg-gradient-to-br from-gold-900/30 to-purple-900/20">
                        <Zap size={64} className="text-gold-400 mx-auto mb-6" />
                        <h2 className="text-5xl font-serif text-gold-300 mb-6">Ready to Transform?</h2>
                        <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                            Dive into the complete strategy to make Mebaz the #1 ethnic wear brand in South India
                        </p>
                        <Link
                            to="/deck/slide/1"
                            className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-gold-500 to-gold-700 text-black text-xl font-bold rounded-full hover:from-gold-400 hover:to-gold-600 transition-all transform hover:scale-105 shadow-2xl shadow-gold-500/30"
                        >
                            <span>View Full Presentation</span>
                            <ArrowRight size={24} />
                        </Link>
                    </div>
                </AnimatedSection>

                {/* Footer */}
                <footer className="py-12 px-6 border-t border-white/10">
                    <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
                        <p>Mebaz Brand Enhancement Strategy – 2025</p>
                        <p className="mt-2">Prepared for: Vedant Group & Mebaz Leadership</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default LandingPage;
