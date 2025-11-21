import React from 'react';
import { motion } from 'framer-motion';

const slideVariants = {
    initial: { opacity: 0, x: 50, scale: 0.95 },
    animate: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, x: -50, scale: 0.95, transition: { duration: 0.4 } }
};

const Slide = ({ title, subtitle, children, className = "" }) => {
    return (
        <motion.div
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`w-full max-w-7xl h-full flex flex-col ${className}`}
        >
            {(title || subtitle) && (
                <div className="mb-8 border-l-4 border-gold-500 pl-6">
                    {title && (
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-white via-gold-100 to-gold-300 font-bold mb-2"
                        >
                            {title}
                        </motion.h2>
                    )}
                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-xl text-gold-200/80 font-light tracking-wide"
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </div>
            )}

            <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar">
                {children}
            </div>
        </motion.div>
    );
};

export default Slide;
