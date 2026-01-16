import React, { useEffect, useState } from 'react';
import { Check, Star, ArrowRight, ShieldCheck, TrendingUp, Zap, BookOpen, Users, Lock, ChevronDown, ChevronUp, Eye, Target, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import StickyFooter from '../components/StickyFooter';

const LandingPage = () => {
    const navigate = useNavigate();
    const [showSticky, setShowSticky] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setShowSticky(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        { q: "Is this suitable for beginners?", a: "Absolutely. The breakdowns are structured to be understood by anyone, whether you're just starting out or have years of experience. We explain the 'why' behind every decision, not just the 'what'." },
        { q: "What format is the product in?", a: "It is a high-quality PDF breakdown that you can instantly download and read on any device." },
        { q: "Is there a refund policy?", a: "Yes, we offer a 7-day money-back guarantee. If you don't find value, just email us for a full refund." },
        { q: "How long do I have access?", a: "You get lifetime access to the version you purchased." },
        { q: "Will there be updates?", a: "Yes, we periodically update the breakdowns with new examples." },
        { q: "Why is this so cheap?", a: "We believe in accessible education. We want to help as many founders as possible without the high barrier to entry." }
    ];

    return (
        <div className="min-h-screen pb-24 bg-[#030712] text-white overflow-x-hidden font-sans">
            {/* Hero Section */}
            <div className="relative overflow-hidden pt-12 pb-12 md:pt-20 md:pb-16 px-4">
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-900/20 rounded-full blur-[80px] md:blur-[100px] -z-10"></div>

                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-400 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-semibold mb-6 md:mb-8 border border-yellow-500/20">
                        <Zap className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                        Used by Top 500+ D2C Founders
                    </div>

                    <h1 className="text-3xl md:text-6xl font-bold tracking-tight mb-4 md:mb-6 leading-tight">
                        How India's Top D2C Brands <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                            Turn Clicks Into Profitable Orders
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 mb-6 md:mb-8 max-w-xl md:max-w-2xl mx-auto px-4">
                        We broke down the real funnels used by <span className="text-white font-semibold">boAt, Giva, Minimalist & Libas</span> — so you can see what actually works before spending on ads or agencies.
                    </p>

                    <div className="flex flex-col items-center gap-4">
                        <button
                            onClick={() => navigate('/order')}
                            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-bold py-3 md:py-4 px-8 md:px-10 rounded-2xl shadow-[0_0_20px_rgba(249,115,22,0.5)] transition-all duration-300 transform hover:scale-105 active:scale-95 text-lg md:text-xl"
                        >
                            Get Instant Access @ ₹49
                        </button>
                        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-400">
                            <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-yellow-400" /> Instant PDF delivery</span>
                            <span className="hidden md:inline w-1 h-1 bg-gray-600 rounded-full"></span>
                            <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-green-400" /> 7-day money-back guarantee</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Social Proof / Brands */}
            <div className="border-y border-gray-800 bg-gray-900/30 py-6 md:py-8 mb-16 md:mb-20">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="text-gray-500 text-xs md:text-sm uppercase tracking-wider mb-4 md:mb-6">Breakdowns from brands doing ₹100Cr+ ARR</p>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        <span className="text-xl md:text-2xl font-bold text-white">boAt</span>
                        <span className="text-xl md:text-2xl font-bold text-white">GIVA</span>
                        <span className="text-xl md:text-2xl font-bold text-white">Minimalist</span>
                        <span className="text-xl md:text-2xl font-bold text-white">LIBAS</span>
                        <span className="text-xl md:text-2xl font-bold text-white">SUGAR</span>
                    </div>
                </div>
            </div>

            {/* Target Audience */}
            <div className="max-w-6xl mx-auto px-4 mb-16 md:mb-20">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Perfect For You If...</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                    {[
                        { icon: Users, title: "Freelancer", desc: "Looking to deliver better results and clearer funnel strategies for your clients." },
                        { icon: TrendingUp, title: "Agency Owner", desc: "Looking to scale your services using proven, battle-tested funnel frameworks." },
                        { icon: Star, title: "D2C Founder", desc: "Model real funnels used by India's fastest-growing D2C brands." },
                        { icon: BookOpen, title: "Student", desc: "Learn how real-world funnels work beyond theory and textbook examples." }
                    ].map((item, i) => (
                        <div key={i} className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 backdrop-blur-sm p-6 rounded-2xl hover:border-orange-500/50 transition-colors">
                            <item.icon className="w-8 h-8 md:w-10 md:h-10 text-orange-500 mb-4" />
                            <h3 className="text-lg md:text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Problem Section */}
            <div className="max-w-4xl mx-auto px-4 mb-16 md:mb-20">
                <div className="bg-red-500/5 border border-red-500/20 rounded-3xl p-6 md:p-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Does This Sound Familiar?</h2>
                    <div className="space-y-3 md:space-y-4">
                        {[
                            "Running ads, but results feel unpredictable and inconsistent.",
                            "Not sure if ROAS is showing growth or quietly hiding losses.",
                            "Invested in courses that didn't translate into real execution.",
                            "Agencies feel expensive, slow, and disconnected from your business reality."
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 bg-red-500/10 rounded-xl">
                                <div className="min-w-6 min-h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5">
                                    <span className="text-red-500 font-bold text-sm">✕</span>
                                </div>
                                <p className="text-gray-200 text-sm md:text-base">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* "What If You Didn't Have to Guess" Section (Replaced Solution Section) */}
            <div className="max-w-4xl mx-auto px-4 mb-16 md:mb-20 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    What If You Didn't Have<br className="hidden md:block" /> to <span className="text-orange-500">Guess Anymore?</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
                    Instead of relying on opinions, theories, or second-hand advice —
                    what if you could see how <span className="text-white">India's top D2C brands</span> actually structure
                    their funnels?
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-6">
                    {['The headlines.', 'The CTAs.'].map((text, i) => (
                        <div key={i} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all transform hover:scale-105 cursor-default text-lg">
                            {text}
                        </div>
                    ))}
                </div>
                <div className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-10 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all transform hover:scale-105 cursor-default text-lg mb-10">
                    The offers.
                </div>

                <p className="text-gray-400 text-sm md:text-base">
                    All laid out so you can understand what works before you spend more money.
                </p>
            </div>

            {/* What You'll See Inside (2x2 Grid) */}
            <div className="max-w-5xl mx-auto px-4 mb-16 md:mb-20">
                <h2 className="text-3xl font-bold text-center mb-4">What You'll See Inside</h2>
                <p className="text-gray-400 text-center mb-10">A clear breakdown of how top D2C brands structure their funnels — explained simply.</p>

                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        { icon: Eye, title: "Real Funnel Breakdowns", desc: "See how brands like boAt, Giva, Minimalist & Libas structure their product funnels." },
                        { icon: Target, title: "CRO Decisions Explained", desc: "Understand why certain headlines, CTAs, layouts, and offers are used — and how they impact conversion." },
                        { icon: Lightbulb, title: "What to Copy (And What Not To)", desc: "Learn which elements are worth adapting and which ones don't translate across brands." },
                        { icon: Check, title: "Actionable Learnings", desc: "Clear takeaways you can apply to your own store, client work, or experiments." }
                    ].map((item, i) => (
                        <div key={i} className="bg-[#0f172a] border border-gray-800 p-8 rounded-2xl hover:bg-[#1e293b] transition-colors relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-32 bg-orange-500/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-orange-500/10"></div>
                            <div className="w-12 h-12 bg-orange-900/30 text-orange-500 rounded-xl flex items-center justify-center mb-6 border border-orange-500/20">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* What You Get + Guarantee (Image 0 Style) */}
            <div className="max-w-4xl mx-auto px-4 mb-16 md:mb-24 space-y-8">
                {/* What You Get Card */}
                <div className="bg-[#0f172a] border border-yellow-500/30 rounded-3xl p-6 md:p-10 shadow-[0_0_30px_rgba(234,179,8,0.05)]">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">What You Get With the Funnel Breakdown</h2>
                    <ul className="space-y-4 mb-10">
                        {[
                            "Real funnel examples from brands like boAt, Giva, Minimalist & Libas",
                            "A clear understanding of how headlines, offers, and CTAs work together",
                            "Actionable learnings to help you make better funnel decisions",
                            "A low-risk way to learn before spending on courses or agencies"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <div className="min-w-6 min-h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                                    <Check className="w-3.5 h-3.5 text-green-500" />
                                </div>
                                <span className="text-gray-300">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="bg-[#1e293b]/50 rounded-2xl p-8 text-center border border-gray-700">
                        <p className="text-gray-400 mb-2">Access Price:</p>
                        <div className="text-5xl font-bold text-orange-500 mb-2">₹49</div>
                        <p className="text-sm text-gray-500">(one-time)</p>
                    </div>
                </div>

                {/* Guarantee Card */}
                <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-6 md:p-10 text-center">
                    <div className="w-16 h-16 bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <ShieldCheck className="w-8 h-8 text-green-500" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">7-Day Money-Back Guarantee</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        Go through the funnel breakdown at your own pace. If it doesn't add value or change how you look at funnels, just let us know within 7 days and we'll refund you — no questions asked.
                    </p>
                </div>
            </div>

            {/* Testimonials */}
            <div className="max-w-6xl mx-auto px-4 mb-16 md:mb-20">
                <h2 className="text-3xl font-bold text-center mb-8 md:mb-12">What People Are Saying</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { name: "Rajesh K.", role: "D2C Founder", text: "₹49 for this is highway robbery. I paid ₹25K for a course that taught less..." },
                        { name: "Priya M.", role: "Marketer", text: "Used the Minimalist breakdown to fix our landing page – conversions up 23%." },
                        { name: "Arjun S.", role: "Agency Owner", text: "I share this with my team before every new client onboarding. Worth 100x what I paid." }
                    ].map((t, i) => (
                        <div key={i} className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
                            <div className="flex items-center gap-1 text-yellow-500 mb-4">
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                            </div>
                            <p className="text-gray-300 mb-6">"{t.text}"</p>
                            <div>
                                <p className="font-bold text-white">{t.name}</p>
                                <p className="text-sm text-gray-500">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Comparison Table */}
            <div className="max-w-4xl mx-auto px-4 mb-20 md:mb-24">
                <h2 className="text-2xl font-bold text-center mb-8">Why This Pack?</h2>
                <div className="overflow-x-auto bg-gray-900 rounded-3xl border border-gray-800 p-4 md:p-8">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr className="border-b border-gray-800 text-sm md:text-base">
                                <th className="pb-4 pl-2 font-normal text-gray-400 w-1/4">Comparison</th>
                                <th className="pb-4 font-bold text-orange-500 text-base md:text-lg w-1/4">Funnel Pack</th>
                                <th className="pb-4 font-normal text-gray-400 w-1/4">Courses</th>
                                <th className="pb-4 font-normal text-gray-400 w-1/4">Agencies</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800 text-sm md:text-base">
                            {[
                                { feature: "Cost", ours: "₹49", other1: "₹5,000+", other2: "₹50,000+" },
                                { feature: "Time to Value", ours: "Instant", other1: "Hours of Video", other2: "Weeks" },
                                { feature: "Actionability", ours: "Copy & Paste", other1: "Theory", other2: "Done-for-you" },
                                { feature: "Risk", ours: "Zero", other1: "High", other2: "Very High" },
                            ].map((row, i) => (
                                <tr key={i}>
                                    <td className="py-4 pl-2 font-medium text-gray-300">{row.feature}</td>
                                    <td className="py-4 font-bold text-white">{row.ours}</td>
                                    <td className="py-4 text-gray-500">{row.other1}</td>
                                    <td className="py-4 text-gray-500">{row.other2}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-3xl mx-auto px-4 mb-24">
                <h2 className="text-3xl font-bold text-center mb-2">Frequently Asked Questions</h2>
                <p className="text-gray-400 text-center mb-10">Got questions? We've got answers.</p>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-[#0f172a] border border-gray-800 rounded-2xl overflow-hidden">
                            <button
                                onClick={() => toggleFaq(i)}
                                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-800/50 transition-colors"
                            >
                                <span className="font-semibold text-white">{faq.q}</span>
                                {openFaq === i ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                            </button>
                            {openFaq === i && (
                                <div className="p-5 pt-0 text-gray-400 border-t border-gray-800/50">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Final CTA */}
            <div className="text-center px-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">Stop Guessing. <br className="md:hidden" /> Start Growing.</h2>
                <button
                    onClick={() => navigate('/order')}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-bold py-4 px-10 rounded-2xl shadow-lg transition-all transform hover:scale-105 text-xl w-full md:w-auto"
                >
                    Get Instant Access Now
                </button>
                <p className="mt-4 text-sm text-gray-500">100% Secure Payment • Instant Access</p>
            </div>

            {showSticky && <StickyFooter />}
        </div>
    );
};

export default LandingPage;
