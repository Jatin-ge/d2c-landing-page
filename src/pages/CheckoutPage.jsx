import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Lock, Zap, Star, ChevronDown, ChevronUp, TrendingUp } from 'lucide-react';
import StickyFooter from '../components/StickyFooter';

const CashfreeIframe = () => (
    <div className="w-full overflow-hidden rounded-2xl" style={{ minHeight: 520 }}>
        <iframe
            src="https://payments.cashfree.com/forms/ecom-funnel-ge"
            width="100%"
            height="600"
            style={{ border: 'none', display: 'block' }}
            title="Complete Your Order"
            allow="payment"
        />
    </div>
);

const CheckoutPage = () => {
    const formRef = useRef(null);
    const [showSticky, setShowSticky] = useState(false);
    const [openFaq, setOpenFaq] = useState(0);

    useEffect(() => {
        const handleScroll = () => setShowSticky(window.scrollY > 300);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToForm = useCallback(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    const toggleFaq = useCallback((i) => {
        setOpenFaq(prev => prev === i ? null : i);
    }, []);

    const faqs = [
        { q: "When do I get access?", a: "Instantly. Your PDF lands in your inbox within 2 minutes of payment." },
        { q: "What if I don't like it?", a: "100% money-back guarantee. Email us and we'll refund instantly. No questions asked." },
        { q: "Is my payment secure?", a: "Processed by Cashfree Payments, trusted by 100,000+ Indian businesses. SSL encrypted end-to-end." },
    ];

    return (
        <div className="min-h-screen pb-24 bg-[#030712] text-white overflow-x-hidden font-sans">

            {/* ── 1. TOP BAR ── */}
            <div className="bg-[#0a0f1e] px-4 py-3">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <Link
                        to="/"
                        className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to offer details
                    </Link>
                    <span className="flex items-center gap-1.5 text-green-400 text-xs font-medium">
                        <Lock className="w-3 h-3" />
                        Secured by Cashfree
                    </span>
                </div>
            </div>
            {/* Thin orange gradient separator — matches Page 1 style */}
            <div className="h-px w-full bg-gradient-to-r from-orange-600/0 via-orange-500/80 to-orange-600/0" />

            {/* ── 2. CONFIRMATION HEADER ── */}
            <div className="max-w-4xl mx-auto px-4 pt-8 pb-4 text-center">
                <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 border border-orange-500/20 px-4 py-2 rounded-full text-sm font-semibold">
                    <Zap className="w-4 h-4 fill-current" />
                    You're almost in — complete your order below
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 pb-10">

                {/* ── 3. BUMP VALUE CARD ── */}
                <div className="bg-gradient-to-br from-[#0f172a] to-[#0a0f1e] border border-orange-500/25 rounded-2xl p-5 mb-3">
                    <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="w-4 h-4 text-orange-400 shrink-0" />
                        <span className="text-orange-400 text-xs font-bold uppercase tracking-wider">Most founders also grab these</span>
                    </div>

                    {/* Bump 1 */}
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-orange-500/5 border border-orange-500/20 mb-2.5">
                        <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center shrink-0 text-base">🔥</div>
                        <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                                <span className="text-white font-bold text-sm">Advanced D2C Growth Kit</span>
                                <span className="text-xs bg-orange-500 text-white px-1.5 py-0.5 rounded font-bold">₹199</span>
                                <span className="text-gray-500 text-xs line-through">₹1,999</span>
                            </div>
                            <p className="text-gray-400 text-xs leading-snug">20 brand breakdowns + 600+ ad screenshots + CRO & SEO checklists. 67% of buyers add this.</p>
                        </div>
                    </div>

                    {/* Bump 2 */}
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-purple-500/5 border border-purple-500/20">
                        <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0 text-base">🎯</div>
                        <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                                <span className="text-white font-bold text-sm">Personalized Growth Audit</span>
                                <span className="text-xs bg-purple-500 text-white px-1.5 py-0.5 rounded font-bold">₹499</span>
                                <span className="text-gray-500 text-xs line-through">₹4,999</span>
                            </div>
                            <p className="text-gray-400 text-xs leading-snug">Our experts audit YOUR ads + funnel. Get a custom report with specific fixes to boost ROAS.</p>
                        </div>
                    </div>

                    <p className="text-gray-600 text-xs mt-2.5 text-center">You'll see these options inside the checkout form below ↓</p>
                </div>

                {/* ── 8. CASHFREE PAYMENT FORM ── */}
                <div ref={formRef} className="mb-6">
                    <CashfreeIframe />
                </div>

                {/* ── 5. TRUST BAR ── */}
                <div className="grid grid-cols-3 gap-4 text-center border border-gray-800 rounded-2xl p-5 mb-6 text-gray-400">
                    <div>
                        <div className="font-bold text-white text-sm">SSL Encrypted</div>
                        <div className="text-xs mt-0.5">Secure Checkout</div>
                    </div>
                    <div className="border-x border-gray-800">
                        <div className="font-bold text-white text-sm">Instant Delivery</div>
                        <div className="text-xs mt-0.5">PDF in your inbox</div>
                    </div>
                    <div>
                        <div className="font-bold text-white text-sm">Support Team</div>
                        <div className="text-xs mt-0.5">Available via Email</div>
                    </div>
                </div>

                {/* ── 6. TESTIMONIAL ── */}
                <div className="bg-[#0f172a] border border-gray-800 p-5 rounded-2xl flex items-start gap-4 mb-6">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center font-bold text-white">
                        R
                    </div>
                    <div>
                        <div className="flex text-yellow-500 mb-1">
                            {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 fill-current" />)}
                        </div>
                        <p className="text-gray-200 text-sm mb-1">
                            "The CRO breakdown for Minimalist alone was worth 100x the price. I never realized how much money I was leaving on the table with my current funnel structure."
                        </p>
                        <p className="text-xs text-gray-500 font-bold">Rahul M. <span className="font-normal">• eCommerce Store Owner</span></p>
                    </div>
                </div>

                {/* ── 7. QUICK ANSWERS ── */}
                <div className="mb-8">
                    <h3 className="text-base font-bold mb-3">Quick Answers</h3>
                    <div className="space-y-2">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-[#0f172a] border border-gray-800 rounded-xl overflow-hidden">
                                <button
                                    onClick={() => toggleFaq(i)}
                                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-800/50 transition-colors"
                                >
                                    <span className="font-semibold text-white text-sm pr-4">{faq.q}</span>
                                    {openFaq === i
                                        ? <ChevronUp className="w-4 h-4 text-gray-400 shrink-0" />
                                        : <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />}
                                </button>
                                {openFaq === i && (
                                    <div className="px-4 pb-4 pt-3 text-gray-400 border-t border-gray-800/50 text-sm leading-relaxed">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── 10. FOOTER ── */}
            <footer className="pt-6 pb-8 text-center border-t border-gray-900">
                <p className="text-gray-600 text-xs mb-1">
                    <span className="line-through">₹999</span> → ₹9 today · 100% refund if you're not satisfied
                </p>
                <p className="text-gray-700 text-xs">© 2026 Growth Escalators. All rights reserved.</p>
            </footer>

            {/* ── 11. STICKY BOTTOM BAR ── scrolls to checkout form */}
            {showSticky && <StickyFooter scrollToForm={scrollToForm} />}
        </div>
    );
};

export default CheckoutPage;
