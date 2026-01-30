import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Minus, Maximize2, Minimize2, Sparkles, User, Bot } from 'lucide-react';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

export const ChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "Hello! Welcome to Ritzy. I'm your AI concierge. How can I assist you in elevating your smart home experience today?",
            sender: 'bot',
            timestamp: new Date(),
        },
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulate bot response (replace with actual AI later)
        setTimeout(() => {
            const botResponse: Message = {
                id: (Date.now() + 1).toString(),
                text: getBotResponse(userMessage.text),
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botResponse]);
            setIsTyping(false);
        }, 1500);
    };

    const getBotResponse = (input: string): string => {
        const lowerInput = input.toLowerCase();
        if (lowerInput.includes('price') || lowerInput.includes('cost')) {
            return "Our automation solutions are bespoke and tailored to your specific needs. I can connect you with a specialist for a personalized quote. Would you like to schedule a consultation?";
        }
        if (lowerInput.includes('service') || lowerInput.includes('what do you do')) {
            return "We specialize in premium home automation, including Lighting Control, Climate Intelligence, Audio/Video distribution, and Security integration. You can explore our Services page for more details.";
        }
        if (lowerInput.includes('contact') || lowerInput.includes('location')) {
            return "You can reach us at +91 98765 43210 or visit our showroom in Bangalore. Check our Contact page for the full address.";
        }
        if (lowerInput.includes('home automation')) {
            return "Home automation is at the core of what we do. From smart lighting to integrated security, we bring your home to life.";
        }
        return "That's an interesting query. While I'm still learning, our team of experts would be delighted to assist you directly. Shall I guide you to our contact page?";
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && !isMinimized && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="mb-4 w-[350px] md:w-[400px] h-[500px] md:h-[600px] bg-white/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 bg-gray-900 text-white flex items-center justify-between shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                    <Sparkles className="w-4 h-4 text-yellow-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Ritzy Concierge</h3>
                                    <p className="text-xs text-gray-400 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                        Online
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setIsMinimized(true)}
                                    className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                                >
                                    <Minus className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-1 hover:bg-red-500/80 rounded-lg transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user'
                                                ? 'bg-gray-900 text-white rounded-br-none'
                                                : 'bg-white border border-gray-100 shadow-sm text-gray-800 rounded-bl-none'
                                            }`}
                                    >
                                        {msg.sender === 'bot' && <Sparkles className="w-3 h-3 text-gray-400 mb-1" />}
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-bl-none shadow-sm flex gap-1">
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75" />
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-gray-100 shrink-0">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSendMessage();
                                }}
                                className="flex items-center gap-2"
                            >
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Ask about our services..."
                                    className="flex-1 bg-gray-100 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-gray-900 transition-all outline-none"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                    className="p-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Launcher Button */}
            <motion.button
                onClick={() => {
                    setIsOpen(true);
                    setIsMinimized(false);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${isOpen && !isMinimized ? 'bg-gray-200 text-gray-600 rotate-90 scale-0 opacity-0 pointer-events-none' : 'bg-gray-900 text-white opacity-100 scale-100'
                    }`}
                style={{ position: 'absolute', bottom: 0, right: 0 }} // Positioning hack for absolute layout if needed, though flex container handles it 
            >
                <MessageCircle className="w-6 h-6" />
            </motion.button>

            {/* Minimized Launcher (When open but minimized) */}
            {isOpen && isMinimized && (
                <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    onClick={() => setIsMinimized(false)}
                    className="w-14 h-14 bg-gray-900 text-white rounded-full shadow-2xl flex items-center justify-center absolute bottom-0 right-0 z-50"
                >
                    <Maximize2 className="w-6 h-6" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
                </motion.button>
            )}
        </div>
    );
};
