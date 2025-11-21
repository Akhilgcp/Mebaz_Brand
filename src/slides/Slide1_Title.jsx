import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';

const Slide1_Title = () => {
    return (
        <Slide className="flex flex-col items-center justify-center text-center">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative p-12 border border-gold-500/30 bg-black/40 backdrop-blur-sm rounded-2xl max-w-4xl"
            >
                {/* Decorative Corners */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold-500 rounded-tl-xl"></div>
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold-500 rounded-tr-xl"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold-500 rounded-bl-xl"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold-500 rounded-br-xl"></div>

                <motion.h1
                    className="text-6xl md:text-8xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-gold-200 via-gold-400 to-gold-600 mb-6 tracking-tight"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                >
                    MEBAZ
                </motion.h1>

                <motion.div
                    className="h-1 w-32 bg-gold-500 mx-auto mb-8"
                    initial={{ width: 0 }}
                    animate={{ width: 128 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                />

                <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
                    Brand Enhancement Strategy – 2025
                </h2>

                <p className="text-xl text-gold-200/80 font-light tracking-widest uppercase mb-12">
                    Powered by AI • Data • Digital Commerce
                </p>

                <div className="text-sm text-gray-400 font-mono border-t border-gray-800 pt-6 mt-6">
                    Prepared for: <span className="text-white">Vedant Group & Mebaz Leadership</span>
                </div>
            </motion.div>
        </Slide>
    );
};

export default Slide1_Title;
