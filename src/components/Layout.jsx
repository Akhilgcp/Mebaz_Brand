import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Home, Download } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Layout = ({ children, totalSlides = 15 }) => {
    const navigate = useNavigate();
    const location = useLocation();

    // Extract slide number from path /deck/slide/:id
    const currentSlide = parseInt(location.pathname.split('/').pop()) || 1;

    const nextSlide = () => {
        if (currentSlide < totalSlides) navigate(`/deck/slide/${currentSlide + 1}`);
    };

    const prevSlide = () => {
        if (currentSlide > 1) navigate(`/deck/slide/${currentSlide - 1}`);
    };

    const goToHome = () => navigate('/');

    return (
        <div className="relative w-full h-screen overflow-hidden bg-black text-white font-sans">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-ethnic-pattern bg-cover bg-center opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-royal-900/80 to-black/90"></div>
                {/* Gold Overlay Texture */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
            </div>

            {/* Main Content Area */}
            <div className="relative z-10 w-full h-full flex flex-col">
                {/* Header */}
                <header className="flex justify-between items-center p-6 glass-panel mx-4 mt-4 rounded-xl border-gold-500/30">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center text-black font-bold font-serif text-xl">M</div>
                        <div>
                            <h1 className="text-xl font-serif text-gold-400 tracking-wide">MEBAZ</h1>
                            <p className="text-xs text-gray-400 uppercase tracking-widest">Brand Enhancement 2025</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button onClick={goToHome} className="p-2 hover:bg-white/10 rounded-full transition-colors" title="Back to Webpage">
                            <Home size={20} className="text-gold-200" />
                        </button>
                        <div className="text-sm text-gray-300 font-mono">
                            {currentSlide.toString().padStart(2, '0')} / {totalSlides}
                        </div>
                    </div>
                </header>

                {/* Slide Content */}
                <main className="flex-1 p-8 overflow-hidden flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        {children}
                    </AnimatePresence>
                </main>

                {/* Navigation Footer */}
                <footer className="p-6 flex justify-between items-center">
                    <button
                        onClick={prevSlide}
                        disabled={currentSlide === 1}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full glass-panel transition-all ${currentSlide === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gold-500/20 hover:border-gold-400'}`}
                    >
                        <ChevronLeft size={20} />
                        <span className="uppercase tracking-wider text-sm">Previous</span>
                    </button>

                    <div className="flex gap-2">
                        {Array.from({ length: totalSlides }).map((_, i) => (
                            <div
                                key={i}
                                className={`h-1 rounded-full transition-all duration-300 ${i + 1 === currentSlide ? 'w-8 bg-gold-500' : 'w-2 bg-gray-700'}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        disabled={currentSlide === totalSlides}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full glass-panel transition-all ${currentSlide === totalSlides ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gold-500/20 hover:border-gold-400'}`}
                    >
                        <span className="uppercase tracking-wider text-sm">Next</span>
                        <ChevronRight size={20} />
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default Layout;
