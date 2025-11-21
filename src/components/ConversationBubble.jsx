import React from 'react';
import { motion } from 'framer-motion';

const ConversationBubble = ({
    type = 'customer', // 'customer', 'bot', 'whatsapp'
    children,
    delay = 0,
    showAvatar = false,
    avatarIcon = null
}) => {
    const bubbleStyles = {
        customer: 'chat-bubble-customer text-blue-900',
        bot: 'chat-bubble-bot text-gray-800',
        whatsapp: 'chat-bubble-whatsapp text-green-900'
    };

    const alignments = {
        customer: 'justify-end',
        bot: 'justify-start',
        whatsapp: 'justify-end'
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.3 }}
            className={`flex items-end gap-2 ${alignments[type]}`}
        >
            {showAvatar && type === 'bot' && (
                <div className="w-8 h-8 rounded-full bg-gold-400 flex items-center justify-center text-black flex-shrink-0">
                    {avatarIcon || '🤖'}
                </div>
            )}

            <div className={`max-w-[70%] px-4 py-2.5 ${bubbleStyles[type]}`}>
                <p className="text-sm leading-relaxed">{children}</p>
            </div>

            {showAvatar && type === 'customer' && (
                <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white flex-shrink-0">
                    👤
                </div>
            )}
        </motion.div>
    );
};

export const TypingIndicator = ({ delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay }}
            className="flex items-end gap-2 justify-start"
        >
            <div className="w-8 h-8 rounded-full bg-gold-400 flex items-center justify-center text-black flex-shrink-0">
                🤖
            </div>
            <div className="chat-bubble-bot px-4 py-3">
                <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </motion.div>
    );
};

export default ConversationBubble;
