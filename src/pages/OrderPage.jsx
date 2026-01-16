import React, { useEffect, useState, useRef } from 'react';
import { Star, TrendingUp, Users, Lightbulb, Rocket, ShieldCheck, ArrowDown } from 'lucide-react';

const OrderPage = () => {
    const [activeReview, setActiveReview] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const formRef = useRef(null);

    const reviews = [
        { initial: "P", name: "Priya S.", role: "D2C Founder", text: "This kit saved me 3 months of trial and error. Worth every rupee." },
        { initial: "R", name: "Rahul M.", role: "eCommerce Store Owner", text: "The CRO checklist alone paid for itself 10x over." },
        { initial: "A", name: "Ankit T.", role: "Shopify Store Owner", text: "Finally knew what to focus on. Stopped wasting time on things that didn't matter." },
        { initial: "S", name: "Sneha K.", role: "Marketing Head", text: "The best investment for our marketing team this year." }
    ];

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://www.agency.growthescalators.com/js/form_embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    // Auto-sliding reviews
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setActiveReview((prev) => (prev + 1) % reviews.length);
        }, 2500);
        return () => clearInterval(interval);
    }, [isPaused, reviews.length]);

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-[#030712] text-[#f9fafb] font-sans antialiased pb-24 overflow-x-hidden">

            {/* SECTION 1: Price Comparison */}
            <section className="pt-16 pb-12 px-2 md:px-4 max-w-5xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 leading-tight">
                    Great, You're in the right direction
                </h1>
                <p className="text-gray-400 text-center mb-10 text-lg">
                    For Action Takers like you we've a recommendation
                </p>

                {/* Force 2 columns even on mobile (grid-cols-2) */}
                <div className="grid grid-cols-2 gap-3 md:gap-6 items-stretch max-w-4xl mx-auto">
                    {/* Card 1: ₹49 (Learning) */}
                    <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-4 md:p-8 text-center flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-800 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                            <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-gray-400" />
                        </div>
                        <div className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">₹49</div>
                        <div className="text-sm md:text-xl font-bold text-gray-300 mb-2 md:mb-4">The Learner</div>
                        <p className="text-gray-400 text-xs md:text-base">Great if you're looking to learn the fundamentals.</p>
                    </div>

                    {/* Card 2: ₹499 (Execution) */}
                    <div className="bg-orange-600 rounded-3xl p-4 md:p-8 text-center transform md:scale-105 shadow-2xl shadow-orange-900/50 relative overflow-hidden ring-4 ring-orange-500/20 flex flex-col items-center justify-center">
                        <div className="absolute top-0 right-0 bg-yellow-400 text-black text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 rounded-bl-xl">RECOMMENDED</div>
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                            <Rocket className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        </div>
                        <div className="text-3xl md:text-5xl font-bold text-white mb-1 md:mb-2">₹499</div>
                        <div className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-4">The Executioner</div>
                        <p className="text-orange-100 font-medium text-xs md:text-base mb-2 md:mb-6">
                            For those who want to <span className="font-bold underline">implement immediately</span>.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 2: Order Form (Ready to move up the ladder) */}
            <section className="py-10 px-4" ref={formRef}>
                <header className="text-center max-w-4xl mx-auto mb-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                        Ready to Move Up <br />
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            The Ladder?
                        </span>
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg">
                        Complete the order form below to secure your spot.
                    </p>
                </header>

                <main className="max-w-4xl mx-auto">
                    <div className="bg-gray-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-4 md:p-8 shadow-2xl">
                        <div id="order-form-container" className="min-h-[800px]">
                            <iframe
                                src="https://www.agency.growthescalators.com/widget/form/QOaO1bJoTSjGbX93bbJ5"
                                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '12px' }}
                                id="inline-QOaO1bJoTSjGbX93bbJ5"
                                data-layout="{'id':'INLINE'}"
                                data-trigger-type="alwaysShow"
                                data-trigger-value=""
                                data-activation-type="alwaysActivated"
                                data-activation-value=""
                                data-deactivation-type="neverDeactivate"
                                data-deactivation-value=""
                                data-form-name="Ecom Funnel "
                                data-height="1889"
                                data-layout-iframe-id="inline-QOaO1bJoTSjGbX93bbJ5"
                                data-form-id="QOaO1bJoTSjGbX93bbJ5"
                                title="Ecom Funnel "
                            ></iframe>
                        </div>
                    </div>

                    <div className="mt-8 grid grid-cols-3 gap-4 text-center border-t border-gray-800 pt-8 text-gray-400">
                        <div>
                            <div className="font-bold text-white text-sm">Secure Checkout</div>
                            <div className="text-xs">SSL Encrypted</div>
                        </div>
                        <div className="border-x border-gray-800">
                            <div className="font-bold text-white text-sm">24/7 Support</div>
                            <div className="text-xs">Success Team</div>
                        </div>
                        <div>
                            <div className="font-bold text-white text-sm">Instant Access</div>
                            <div className="text-xs">Start Today</div>
                        </div>
                    </div>
                </main>
            </section>

            {/* SECTION 3: Social Proof (2000+ Founders) */}
            <section className="py-12 px-4 max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-[#1e293b] text-gray-300 px-4 py-1.5 rounded-full text-sm font-medium border border-gray-800 mb-8 mx-auto table">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                    Trusted by Indian D2C Founders
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 leading-tight">
                    Join <span className="text-orange-500">2000+ Founders</span> Already Growing
                </h2>

                {/* Stats Cards (2 side by side) */}
                <div className="grid grid-cols-2 gap-4 md:gap-8 mb-12">
                    <div className="bg-[#0f172a] border border-gray-800 p-6 rounded-2xl flex flex-col items-center shadow-lg">
                        <Users className="w-8 h-8 text-orange-500 mb-3" />
                        <div className="text-2xl md:text-4xl font-bold text-white mb-1">2000+</div>
                        <div className="text-gray-400 text-xs md:text-sm">Founders using this</div>
                    </div>
                    <div className="bg-[#0f172a] border border-gray-800 p-6 rounded-2xl flex flex-col items-center shadow-lg">
                        <Star className="w-8 h-8 text-yellow-500 mb-3 fill-current" />
                        <div className="text-2xl md:text-4xl font-bold text-white mb-1">4.9/5</div>
                        <div className="text-gray-400 text-xs md:text-sm">Average rating</div>
                    </div>
                </div>

                {/* Sliding Reviews */}
                <div
                    className="relative h-40 md:h-32 mb-12"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                >
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-all duration-700 transform ${index === activeReview ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                                }`}
                        >
                            <div className="bg-[#0f172a] border border-gray-800 p-6 rounded-2xl flex items-center gap-4 shadow-xl">
                                <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center font-bold text-white text-lg">
                                    {review.initial}
                                </div>
                                <div>
                                    <div className="flex text-yellow-500 mb-1">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 fill-current" />)}
                                    </div>
                                    <p className="text-gray-200 font-medium text-sm md:text-base mb-1">"{review.text}"</p>
                                    <p className="text-xs text-gray-500 font-bold">{review.name} <span className="font-normal">• {review.role}</span></p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Dots indicator */}
                    <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
                        {reviews.map((_, i) => (
                            <button
                                key={i}
                                className={`w-2 h-2 rounded-full transition-all ${i === activeReview ? 'bg-orange-500 w-4' : 'bg-gray-700'}`}
                                onClick={() => setActiveReview(i)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4: Guarantee */}
            <section className="py-8 px-4 max-w-4xl mx-auto mb-10">
                <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8 text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-green-500 via-green-400 to-green-500 opacity-50"></div>
                    <div className="w-16 h-16 bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <ShieldCheck className="w-8 h-8 text-green-500" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">7-Day Money-Back Guarantee</h2>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                        Go through the funnel breakdown at your own pace. If it doesn't add value or change how you look at funnels, just let us know within 7 days and we'll refund you — no questions asked.
                    </p>
                </div>
            </section>

            {/* Button to Scroll Back to Form */}
            <div className="text-center px-4 mb-20">
                <button
                    onClick={scrollToForm}
                    className="group bg-white text-black hover:bg-gray-200 font-bold py-4 px-10 rounded-full shadow-lg transition-all transform hover:scale-105 flex items-center gap-2 mx-auto"
                >
                    Complete Your Order Now
                    <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </button>
            </div>

            <footer className="py-10 text-center border-t border-gray-900">
                <p className="text-gray-600 text-xs">© 2026 Growth Escalators. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default OrderPage;
