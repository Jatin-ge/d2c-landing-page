import React, { useState, useEffect } from 'react';
import { Timer, ArrowRight } from 'lucide-react';

const StickyFooter = ({ scrollToForm }) => {
    const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-[#0f172a]/95 backdrop-blur-md border-t border-gray-800 p-4 z-50 animate-in slide-in-from-bottom-full duration-500">
            <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-orange-500 font-mono font-bold text-xl">
                    <Timer className="w-6 h-6 animate-pulse" />
                    <span>{formatTime(timeLeft)}</span>
                </div>

                <div className="flex-1 md:text-center hidden md:block">
                    <p className="text-gray-300 text-sm">
                        Offer expires soon! <span className="text-white font-bold text-orange-400 underline italic">CLAIM FOR ₹9</span> before access closes.
                    </p>
                </div>

                <button
                    onClick={scrollToForm}
                    className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-orange-900/20 flex items-center gap-2 text-sm md:text-base transition-all transform hover:scale-105"
                >
                    Claim for ₹9 Only
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

export default StickyFooter;
