import { useState } from "react";

const phases = [
  {
    id: "now",
    name: "🔧 BUILD NOW — Page 1 Fixes + Page 2 Build",
    color: "#10B981",
    items: [
      {
        title: "1. Fix headline spacing gap",
        status: "build",
        effort: "30 min",
        detail: "The rotating brand name creates a visible gap: 'boAt  's ₹100Cr+'. The animated span is fixed-width for the longest name (Minimalist) but shorter names like boAt leave trailing whitespace.\n\nFix approach — restructure the headline so the brand name sits cleanly:\n\nCurrent: 'See the Exact Funnel Behind [boAt]'s ₹100Cr+ Revenue'\n\nOption 1 (easiest): Make the span width auto/dynamic with CSS transition on width. Use a hidden measuring span to calculate the width of the current brand name and animate the container width.\n\nOption 2 (restructure): Change the headline to put the brand name where variable width doesn't matter:\n'The Funnel Behind [boAt]'s ₹100Cr+ — Now Yours for ₹9'\nor\n'How [boAt] Built a ₹100Cr+ Funnel — And What You Can Learn for ₹9'\n\nEither way, eliminate the visible gap. It's the first thing a visitor sees.",
      },
      {
        title: "2. Build Odra Organics case study section on Page 1",
        status: "build",
        effort: "2-3 hours",
        detail: "━━━━━━━━━━━━━━━━━━━━━━━━━━\nPLACEMENT: Between the Guarantee section and the 'Built by Growth Escalators' section\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nSECTION HEADING:\n'From the Field' (small label, like the 'Trusted by Indian D2C Founders' style)\n\nMAIN HEADING:\n'Real Results From a Real D2C Brand'\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━\nCASE STUDY CARD (dark card, orange-bordered left side):\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nAvatar: Orange circle with 'OO' text (same style as the 'GE', 'R', 'A' avatars used in testimonials)\n\nBrand: Odra Organics\nFounder: Aniket\nCategory badge: 'Organic / Wellness D2C'\n\nQuote:\n\"We were running ads but our funnel had gaps we couldn't see. After going through the breakdown pack, we restructured our landing page flow and offer placement based on what was working for the featured brands. The results showed within weeks — our cost per acquisition dropped and conversions improved noticeably.\"\n— Aniket, Founder, Odra Organics\n\n5 stars above the quote (same style as other testimonials)\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━\nBEFORE → AFTER METRIC CARDS (3 cards in a row):\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nCard 1:\nLabel: 'Funnel Clarity'\nBefore (red/muted): 'Guessing'\nAfter (green/bold): 'Data-backed'\nArrow or → between them\n\nCard 2:\nLabel: 'Implementation'\nBefore: 'Weeks of testing'\nAfter: '48 hours'\n\nCard 3:\nLabel: 'Confidence'\nBefore: 'Is this working?'\nAfter: 'We know why'\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━\nFOOTER LINE:\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n'Results may vary. Odra Organics is a real D2C brand that used the Funnel Breakdown Pack.'\n(Small, muted text — legal disclaimer style)\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━\nDESIGN NOTES:\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n• Same dark theme as rest of page\n• Quote card should have a subtle green or orange left border (like a 'success' indicator)\n• Before/After cards: 'Before' values in muted red/gray, 'After' values in bright green or white bold\n• The whole section should feel like a 'proof moment' — slightly different visual treatment from the testimonial carousel above, to signal 'this is a deeper story, not just a quick review'",
      },
      {
        title: "3. Optimize bump descriptions inside Cashfree dashboard",
        status: "build",
        effort: "30 min",
        detail: "Since you can edit product names, descriptions, images, and prices in Cashfree, optimize these directly:\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━\nBUMP 1 — ₹199 Advanced D2C Growth Kit\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nProduct name in Cashfree:\n'Advanced D2C Growth Kit — ₹199 (Worth ₹1,999)'\n\nDescription (make sure it's NOT truncated — keep it short enough to display fully):\n'20 brand funnel breakdowns + CRO & SEO Checklists + 600+ winning ad screenshots. Everything you need to scale.'\n\nImage: Replace the current Canva-style mockup with a cleaner, higher-quality product image. Even a simple dark-background mockup with the text '20 Brands · 600+ Ads · CRO + SEO' overlaid would be better.\n\nPrice: ₹199 (keep as-is)\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━\nBUMP 2 — ₹499 Personalized Growth Audit\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nProduct name in Cashfree:\n'Personalized D2C Growth Audit (Meta + CRO) — ₹499'\n\nDescription:\n'Our team audits YOUR ads and funnel. Get a custom report showing exactly what's killing your ROAS — and how to fix it.'\n\nImage: Use a different visual style from bump 1 to signal this is a SERVICE, not a product. Consider: a person/team icon, or a mockup of an 'audit report' document. Anything that looks different from a PDF product.\n\nPrice: ₹499 (keep as-is)\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━\nWHY THIS MATTERS:\n━━━━━━━━━━━━━━━━━━━━━━━━━━\nThe Cashfree widget is where the actual purchase decision happens for bumps. If the description is truncated or the image looks low-effort, take rates drop. These changes take 30 minutes in the Cashfree dashboard and can meaningfully increase AOV.",
      },
      {
        title: "4. Build Page 2 — Dedicated checkout page",
        status: "build",
        effort: "1 day",
        detail: "URL: ecom.growthescalators.com/checkout (or /order)\n\nThis is a NEW page. All CTAs on Page 1 link here. Page 2 is short, focused, and wraps around the Cashfree widget with maximum trust context.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━\nPAGE 2 COMPLETE STRUCTURE:\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nSECTION 1: TOP BAR\n• Background: Slightly different shade from Page 1 (subtle gradient, or a thin orange top border to signal 'you're on a new page')\n• Left: '← Back to offer details' (links back to Page 1 — for anyone who wants to re-read)\n• Right: '🔒 Secured by Cashfree'\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nSECTION 2: ORDER CONFIRMATION HEADER\n• Badge: '⚡ You're almost in — complete your order below'\n• Mini product recap card (dark, compact):\n  - 'FUNNEL BREAKDOWN PACK'\n  - '5 brand breakdowns · 47 pages · 23 screenshots'\n  - '₹999 → ₹9 · SAVE 99%'\n• Trust snapshot (inline or beside the card):\n  - '2,155+ founders already have this'\n  - '4.9/5 average rating'\n  - '100% money-back guarantee'\n\nThis section should be 1 mobile screen max. It's a REMINDER, not a re-sell.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nSECTION 3: BUMP PRE-FRAME (ABOVE the Cashfree widget)\n• Short line of text: 'Most founders add these to their order:'\n• This primes the buyer to look at the bumps inside the Cashfree widget as recommendations, not upsells. One line of copy, massive psychological difference.\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nSECTION 4: CASHFREE WIDGET (embedded)\n• The Cashfree form with all products, bumps, form fields, and Pay button\n• We don't modify the widget itself — but we optimize what's INSIDE it via the Cashfree dashboard (Item 3 above)\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nSECTION 5: TRUST REINFORCEMENT (below the widget)\n• '🔒 SSL Encrypted · Instant PDF Delivery · Support Team via Email'\n• One testimonial (reuse the strongest one — Rahul M.'s quote about Minimalist is good)\n• Mini FAQ — just 3 purchase-specific questions:\n  1. 'When do I get access?' → 'Instantly. Your PDF lands in your inbox within 2 minutes of payment.'\n  2. 'What if I don't like it?' → '100% money-back guarantee. Email us, we refund instantly. No questions.'\n  3. 'Is my payment secure?' → 'Processed by Cashfree Payments, trusted by 100,000+ Indian businesses.'\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nSECTION 6: STICKY BOTTOM BAR\n• Same style as Page 1: Timer + 'Complete Order →' + '100% money-back guarantee'\n• The timer should continue from where it was on Page 1 (shared cookie/session value)\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━\nDESIGN RULES:\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n• Same dark theme, same fonts, same orange accent as Page 1\n• Page should be SHORT: 3-4 mobile screens maximum\n• NO navigation menu, NO footer links, NO distractions — this is a focused checkout\n• The Cashfree widget is the visual centerpiece\n• Everything else on the page exists to build trust AROUND the widget\n• Mobile-first: test on iPhone SE width first",
      },
      {
        title: "5. Update Page 1 — Remove checkout, update all CTAs",
        status: "build",
        effort: "1-2 hours",
        detail: "Once Page 2 is built:\n\n1. REMOVE from Page 1:\n   • The entire checkout section (the 'Get Instant Access While Offer Lasts' heading, the Cashfree widget, and the 'SSL Encrypted / Instant Delivery / Support Team' bar below it)\n   • Keep everything else as-is\n\n2. UPDATE all CTAs on Page 1 to link to Page 2:\n   • Hero CTA: 'Unlock All 5 Funnel Breakdowns — ₹9 Only' → links to /checkout\n   • Mid-page CTA: 'Get All 5 Breakdowns — ₹9 Only →' → links to /checkout\n   • Post-FAQ CTA: 'Get Your Pack — ₹9 Only →' → links to /checkout\n   • Final CTA: 'Get Your Pack Now — ₹9 Only →' → links to /checkout\n   • Sticky bar CTA: 'Claim for ₹9 Only →' → links to /checkout\n\n3. The 'LIMITED TIME: ₹9' badge above the old checkout section can be removed since the checkout is now on Page 2\n\n4. The page flow on Page 1 now ends with:\n   ... Credibility section → FAQ → Final CTA section → Footer\n   (No checkout form visible anywhere on Page 1)",
      },
      {
        title: "6. Add CTA button pulse animation (all CTAs, both pages)",
        status: "build",
        effort: "15 min",
        detail: "Add to your global CSS:\n\n@keyframes ctaPulse {\n  0%, 100% {\n    transform: scale(1);\n    box-shadow: 0 4px 15px rgba(249, 115, 22, 0.2);\n  }\n  50% {\n    transform: scale(1.02);\n    box-shadow: 0 4px 25px rgba(249, 115, 22, 0.4);\n  }\n}\n\n.cta-button {\n  animation: ctaPulse 5s ease-in-out infinite;\n}\n\nApply the .cta-button class to every orange CTA on both pages. Gentle pulse every 5 seconds — draws subconscious attention without being annoying.",
      },
      {
        title: "7. Add sequential animation to bridge section orange pills",
        status: "build",
        effort: "30 min",
        detail: "Page 1, bridge section: The three orange pills should animate in one at a time when they scroll into view.\n\nImplementation:\n\n1. Use Intersection Observer to detect when the pills container enters viewport\n2. Each pill starts with opacity: 0; transform: translateY(20px);\n3. On intersection, add a class that triggers the animation\n4. Stagger: pill 1 = 0s delay, pill 2 = 0.4s delay, pill 3 = 0.8s delay\n\n.pill { opacity: 0; transform: translateY(20px); transition: all 0.5s ease; }\n.pill.visible { opacity: 1; transform: translateY(0); }\n.pill:nth-child(1) { transition-delay: 0s; }\n.pill:nth-child(2) { transition-delay: 0.4s; }\n.pill:nth-child(3) { transition-delay: 0.8s; }\n\nThis creates the 'reveal' effect that makes each pill feel important.",
      },
    ],
  },
  {
    id: "cashfree",
    name: "⚙️ CASHFREE DASHBOARD — Optimize Inside the Widget",
    color: "#F59E0B",
    items: [
      {
        title: "1. Update Bump 1 — ₹199 Advanced D2C Growth Kit",
        status: "cashfree",
        effort: "15 min",
        detail: "In the Cashfree dashboard:\n\nProduct name:\n'Advanced D2C Growth Kit — Worth ₹1,999!'\n\nDescription (keep short to avoid truncation):\n'20 brand funnel breakdowns + CRO & SEO Checklists + 600+ winning ad screenshots. Everything to scale your D2C brand.'\n\nImage:\nReplace the current Canva mockup with a cleaner image. Options:\n• Dark background with bold white text: '20 Brands · 600+ Ads · CRO + SEO'\n• Or a multi-product flat lay mockup\n• Keep it high-contrast and readable at small size\n\nPrice: ₹199",
      },
      {
        title: "2. Update Bump 2 — ₹499 Personalized Growth Audit",
        status: "cashfree",
        effort: "15 min",
        detail: "In the Cashfree dashboard:\n\nProduct name:\n'Personalized Growth Audit (Meta + CRO)'\n\nDescription:\n'Our experts audit YOUR ads and funnel. Custom report showing what's hurting your ROAS — with specific fixes.'\n\nImage:\nMake this visually DIFFERENT from Bump 1 to signal it's a service, not a product:\n• A 'report document' mockup, or\n• An icon-based image showing 'audit process' steps\n• Avoid the same collage style as Bump 1\n\nPrice: ₹499",
      },
      {
        title: "3. Verify main product text in Cashfree",
        status: "cashfree",
        effort: "5 min",
        detail: "Make sure the main product line in Cashfree reads:\n'Top 5 Winning D2C Brand Funnel Breakdown — ₹9'\n\nThis should be consistent with '5 brands' mentioned throughout Page 1. If it still says '3' or '4' anywhere, update it.",
      },
    ],
  },
  {
    id: "analytics",
    name: "📊 PHASE 2.5 — Analytics Stack",
    color: "#3B82F6",
    items: [
      {
        title: "1. Meta Pixel + Conversions API — 2-page funnel events",
        status: "analytics",
        effort: "2-3 hours",
        detail: "Now critical because you need to track the Page 1 → Page 2 handoff.\n\nPage 1 events:\n• PageView — on load\n• ViewContent — scroll past hero (50% depth)\n• All CTA clicks — track which CTA position drives the most Page 2 visits (hero, mid-page, post-FAQ, final, sticky bar)\n\nPage 2 events:\n• InitiateCheckout — on page load (everyone here is pre-qualified)\n• AddToCart — when a bump is checked in Cashfree widget (may need Cashfree webhook or postMessage listener)\n• Purchase — on successful payment (Cashfree callback/webhook)\n\nConversions API (server-side) is essential for iOS accuracy — up to 40% of pixel events are blocked without it.\n\nFunnel in Meta: Page 1 View → CTA Click → Page 2 View → Purchase. Each step measurable.",
      },
      {
        title: "2. GA4 with scroll depth + ecommerce",
        status: "analytics",
        effort: "2 hours",
        detail: "Page 1: Scroll depth events at 25/50/75/90%. Track which CTA gets clicked most.\nPage 2: begin_checkout event on load. purchase event with revenue on completion.\n\nKey diagnostic metric: Page 1 → Page 2 click-through rate.\n• Below 15% → Page 1 isn't convincing enough\n• Above 15% but low Page 2 conversion → Page 2 has friction\n• Above 15% and good Page 2 conversion → funnel is working\n\nThis diagnostic clarity is the biggest advantage of the 2-page structure.",
      },
      {
        title: "3. Microsoft Clarity — both pages",
        status: "analytics",
        effort: "30 min",
        detail: "Free heatmaps and session recordings. Install on BOTH pages.\n\nWeek 1 action: Watch 50 session recordings.\n• On Page 1: Where do people stop scrolling? Which CTA gets the most clicks? Do they read the case study?\n• On Page 2: Do people scroll past the Cashfree widget? Do they interact with bumps? Where do they hesitate?",
      },
      {
        title: "4. UTM tracking framework",
        status: "analytics",
        effort: "1 hour",
        detail: "Every ad link uses:\n• utm_source=facebook/instagram/google\n• utm_medium=cpc/story/reel\n• utm_campaign=funnel_pack_cold/funnel_pack_retarget\n• utm_content=boat_hook/minimalist_hook/generic\n\nCreate a naming convention doc. Share with anyone running ads. This lets you measure which creative → Page 1 → Page 2 → Purchase path performs best.",
      },
      {
        title: "5. Conversion dashboard (Google Sheets or Looker Studio)",
        status: "analytics",
        effort: "2-3 hours",
        detail: "Daily tracking:\n• Page 1 visits\n• Page 1 → Page 2 CTR (the new key metric)\n• Page 2 visits\n• Page 2 → Purchase CR\n• Bump 1 take rate (₹199)\n• Bump 2 take rate (₹499)\n• Average order value\n• Revenue per Page 1 visitor\n• Ad spend / CPA\n\nReview daily for first 2 weeks, then weekly. This is your CRO compass.",
      },
    ],
  },
  {
    id: "phase3",
    name: "🎬 PHASE 3 — VSL + Thank You + Recovery",
    color: "#8B5CF6",
    items: [
      {
        title: "🔴 HIGHEST PRIORITY: 90-second Founder VSL",
        status: "phase3",
        effort: "Half day",
        detail: "Place on Page 1, in/near the hero section. Single highest-impact remaining item.\n\nScript:\n[0-10s] Hook: 'If you're running a D2C brand and spending on ads, I want to show you something that took us 40+ hours.'\n[10-30s] Context: 'We broke down the exact funnels used by boAt, GIVA, Minimalist, Libas, and SUGAR — brands doing ₹100Cr+. Not theory. Actual screenshots with CRO notes.'\n[30-50s] Proof: Screen-share ONE annotated page. Point out one specific insight.\n[50-70s] Social proof: '2,000+ founders have grabbed this. Here's what one said...' (show testimonial).\n[70-90s] CTA: 'The entire pack — all 5 brands — is yours for ₹9. Less than a chai. Link below.'\n\nFormat: Loom-style recording, webcam in corner, screen share. No fancy editing. Authenticity > polish.",
      },
      {
        title: "15-second silent auto-play preview for mobile",
        status: "phase3",
        effort: "3-4 hours",
        detail: "Auto-playing, muted, looping clip in the hero area:\n0-3s: Quick scroll through PDF pages\n3-8s: Pause on annotated screenshot\n8-12s: Zoom into blurred insight\n12-15s: Text overlay: '5 brands. ₹9. Scroll down ↓'\n\nMade from actual PDF screenshots in Canva or any video editor. Plays automatically on mobile, no tap required.",
      },
      {
        title: "Thank You page with one-time upsell",
        status: "phase3",
        effort: "1 day",
        detail: "After Cashfree payment success, redirect to:\n\n1. '🎉 You're in! Your Funnel Pack is being sent to [email].'\n2. 'While you wait — exclusive one-time offer:'\n3. '30-min 1-on-1 Funnel Strategy Call — ₹1,999 (normally ₹4,999). Only available right now.'\n4. 10-minute real countdown\n5. What's included: 3-4 bullets about the call\n6. Skip: 'No thanks, take me to my download →'\n\nExpected: 5-10% take rate = ₹100-200 additional revenue per buyer.",
      },
      {
        title: "Abandoned checkout recovery (WhatsApp + Email)",
        status: "phase3",
        effort: "1 day",
        detail: "For people who reach Page 2 but don't complete payment:\n\nWhatsApp sequence:\n+15 min: 'Hey [Name]! Your ₹9 Funnel Pack is still reserved. Complete here: [link]'\n+4 hrs: '2,000+ founders already have this. Don't miss out: [link]'\n+24 hrs: 'Last chance at ₹9 — price going to ₹49 soon: [link]'\n\nEmail backup:\n+30 min: 'Your pack is waiting'\n+24 hrs: Free sample page attached\n+48 hrs: 'Price increasing tomorrow'\n\nRequires: Capturing email/phone from Cashfree form data before payment completion (check if Cashfree webhooks support this).",
      },
    ],
  },
];

const statusConfig = {
  build: { label: "Build", color: "#10B981" },
  cashfree: { label: "Cashfree Dashboard", color: "#F59E0B" },
  analytics: { label: "Analytics", color: "#3B82F6" },
  phase3: { label: "Phase 3", color: "#8B5CF6" },
};

export default function ExecutionPlan() {
  const [activePhase, setActivePhase] = useState("now");
  const [done, setDone] = useState({});
  const [expandedItems, setExpandedItems] = useState({});

  const activeData = phases.find((p) => p.id === activePhase);
  const allItems = phases.flatMap((p) => p.items);
  const doneCount = Object.values(done).filter(Boolean).length;

  const toggleDone = (k) => setDone((p) => ({ ...p, [k]: !p[k] }));
  const toggleExpand = (k) => setExpandedItems((p) => ({ ...p, [k]: p[k] === false ? true : p[k] === undefined ? false : !p[k] }));

  return (
    <div style={{ minHeight: "100vh", background: "#06060A", color: "#E4E4E7", fontFamily: "'Instrument Sans', system-ui, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />

      {/* HEADER */}
      <div style={{ borderBottom: "1px solid #1A1A22", padding: "24px 20px 18px", background: "linear-gradient(180deg, #0E0E14, #06060A)" }}>
        <div style={{ maxWidth: 840, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#10B981", boxShadow: "0 0 8px #10B98166" }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#10B981", letterSpacing: 1.5, textTransform: "uppercase" }}>
              Locked Execution Plan — Final Version
            </span>
          </div>
          <h1 style={{ fontSize: 21, fontWeight: 700, color: "#FFF", margin: "6px 0 3px", lineHeight: 1.3 }}>
            2-Page Funnel: Build Plan & Specs
          </h1>
          <p style={{ fontSize: 11, color: "#52525B", margin: "0 0 14px" }}>
            {allItems.length} total items · Page 1 sells → Page 2 closes → Analytics → Phase 3
          </p>

          {/* Progress */}
          <div style={{ background: "#0E0E14", borderRadius: 8, padding: 12, border: "1px solid #1A1A22" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
              <span style={{ fontSize: 11, color: "#71717A" }}>Overall progress</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#10B981" }}>{doneCount}/{allItems.length}</span>
            </div>
            <div style={{ height: 4, background: "#1A1A22", borderRadius: 2, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${allItems.length > 0 ? (doneCount / allItems.length) * 100 : 0}%`, background: "linear-gradient(90deg, #059669, #10B981)", borderRadius: 2, transition: "width 0.3s" }} />
            </div>
          </div>

          {/* Phase summary cards */}
          <div style={{ display: "flex", gap: 6, marginTop: 12 }}>
            {phases.map((p) => (
              <div key={p.id} onClick={() => setActivePhase(p.id)} style={{ flex: 1, background: activePhase === p.id ? `${p.color}10` : "#0E0E14", borderRadius: 6, padding: "8px 4px", border: `1px solid ${activePhase === p.id ? p.color + "33" : "#1A1A22"}`, textAlign: "center", cursor: "pointer" }}>
                <div style={{ fontSize: 18, fontWeight: 700, color: p.color, fontFamily: "'JetBrains Mono', monospace" }}>{p.items.length}</div>
                <div style={{ fontSize: 7.5, color: "#52525B", marginTop: 1 }}>
                  {p.id === "now" ? "Build Now" : p.id === "cashfree" ? "Cashfree" : p.id === "analytics" ? "Analytics" : "Phase 3"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TABS */}
      <div style={{ position: "sticky", top: 0, zIndex: 10, background: "#06060A", borderBottom: "1px solid #1A1A22", padding: "0 20px" }}>
        <div style={{ maxWidth: 840, margin: "0 auto", display: "flex" }}>
          {phases.map((p) => (
            <button key={p.id} onClick={() => setActivePhase(p.id)} style={{
              flex: 1, padding: "11px 6px", background: "none", border: "none",
              borderBottom: activePhase === p.id ? `2px solid ${p.color}` : "2px solid transparent",
              color: activePhase === p.id ? "#FFF" : "#52525B",
              fontSize: 10, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
            }}>
              {p.name.split(" — ")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: 840, margin: "0 auto", padding: "16px 20px 60px" }}>
        <h2 style={{ fontSize: 15, fontWeight: 700, color: activeData.color, margin: "0 0 12px" }}>{activeData.name}</h2>

        {activeData.items.map((item, ii) => {
          const key = `${activePhase}-${ii}`;
          const isDone = done[key];
          const isExpanded = expandedItems[key] !== false;
          const sc = statusConfig[item.status];

          return (
            <div key={ii} style={{ background: isDone ? "#05291A0D" : "#0E0E14", border: `1px solid ${isDone ? "#10B98115" : "#1A1A22"}`, borderRadius: 8, marginBottom: 6, overflow: "hidden" }}>
              <div style={{ display: "flex", alignItems: "center", padding: "11px 12px", gap: 8 }}>
                <button onClick={() => toggleDone(key)} style={{ width: 17, height: 17, borderRadius: 3, border: `1.5px solid ${isDone ? "#10B981" : "#3F3F46"}`, background: isDone ? "#10B981" : "transparent", cursor: "pointer", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#FFF", fontSize: 10, padding: 0 }}>
                  {isDone ? "✓" : ""}
                </button>
                <button onClick={() => toggleExpand(key)} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "space-between", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", padding: 0, gap: 8 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: isDone ? "#10B981" : "#FFF", textDecoration: isDone ? "line-through" : "none", textAlign: "left", lineHeight: 1.3 }}>{item.title}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, flexShrink: 0 }}>
                    {item.effort && <span style={{ fontSize: 7.5, padding: "1.5px 5px", borderRadius: 3, background: "#1A1A22", color: "#52525B", fontFamily: "'JetBrains Mono', monospace" }}>{item.effort}</span>}
                    <span style={{ color: "#52525B", fontSize: 12, transform: isExpanded ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▾</span>
                  </div>
                </button>
              </div>
              {isExpanded && (
                <div style={{ padding: "0 12px 12px 37px", borderTop: "1px solid #131316" }}>
                  <p style={{ fontSize: 11.5, color: "#636370", margin: "8px 0 0", lineHeight: 1.75, whiteSpace: "pre-line" }}>{item.detail}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
