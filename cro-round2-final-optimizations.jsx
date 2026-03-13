import { useState } from "react";

const phases = [
  {
    id: "phase1",
    title: "PHASE 1 — Implement Right Away",
    subtitle: "Copy tweaks, dynamic elements, and structural improvements you can ship today",
    color: "#10B981",
    categories: [
      {
        name: "ABOVE THE FOLD — Final Optimizations",
        items: [
          {
            title: "Rotate brand names dynamically in the headline",
            impact: "HIGH",
            detail: "Instead of listing all 5 brands statically in the subtext, make the headline itself dynamic. Use a typing/fade animation that cycles through: 'See the Exact Funnel That Turned Clicks Into ₹100Cr+ Revenue — for [boAt / GIVA / Minimalist / Libas / SUGAR]'. Each brand name swaps every 3 seconds with a smooth transition. This does two things: (1) creates visual movement that stops the scroll on mobile, and (2) each visitor 'sees' the brand they care most about within seconds. The subtext can then say 'Plus 4 more top D2C brands inside' to maintain the full scope.",
            type: "dev",
            effort: "1-2 hours",
          },
          {
            title: "Make the product mockup card interactive / animate on load",
            impact: "HIGH",
            detail: "Your product mockup card (the dark card showing 'FUNNEL BREAKDOWN PACK' with brand tags) is great but static. Add a subtle entrance animation — have it slide up or fade in with a slight tilt when the page loads. Even better: make the brand name pills on the card pulse or glow one at a time in sequence. This draws the eye to the product visual and makes it feel alive, not like a flat image. On mobile especially, animated elements get 15-25% more visual attention.",
            type: "dev",
            effort: "30-45 min",
          },
          {
            title: "Add a live counter or dynamic social proof near the CTA",
            impact: "HIGH",
            detail: "Right below or above the CTA, add a dynamic element: '🔥 47 founders grabbed this in the last 24 hours' or '✅ Last purchased 12 minutes ago by a D2C founder in Bangalore.' This can be a real counter (if you have the data) or a realistic rotating notification. This creates FOMO and validates the purchase decision in real-time. Tools like ProveSource, UseProof, or a simple custom script can do this. Even a static line like '2,147 copies downloaded this week' is better than nothing — but a dynamic, updating number is far more powerful.",
            type: "dev",
            effort: "1-2 hours",
          },
          {
            title: "Add a micro-interaction to the CTA button",
            impact: "MEDIUM",
            detail: "The orange CTA button is solid, but add a subtle pulse animation (CSS keyframe) that triggers every 5-6 seconds — just a gentle scale-up and glow. Also add a hover/tap state that changes the background slightly and shows a brief shine/sweep effect. These micro-interactions subconsciously signal 'this is the thing to click' and can increase click-through rates by 5-10%. Don't overdo it — one gentle pulse, not a disco ball.",
            type: "dev",
            effort: "20 min",
          },
        ],
      },
      {
        name: "SOCIAL PROOF — Squeeze More Out of What You Have",
        items: [
          {
            title: "Add a live/dynamic download counter instead of static '2000+'",
            impact: "HIGH",
            detail: "Replace the static '2000+' with a number that slowly increments: show '2,147' and have it tick up by 1 every few minutes while the user is on the page. A moving number feels alive and real. A static round number (2000+) feels like an estimate. '2,147' is specific enough to feel counted, not guessed. You can initialize it from your actual data and increment it based on realistic daily download rates.",
            type: "dev",
            effort: "30 min",
          },
          {
            title: "Add a second testimonial with a DIFFERENT persona",
            impact: "HIGH",
            detail: "You have Ankit T. (Shopify Store Owner) — great, that covers the D2C Founder persona. You need at minimum one more from an Agency Owner or Freelancer to cover your other audience segments. The testimonial should reference a different use case: 'Used the Minimalist breakdown in a client pitch — landed a ₹3L retainer. This pack paid for itself 33,000x.' Different personas seeing themselves in the social proof = higher conversion across all traffic segments. If you don't have a real one yet, this is an URGENT Phase 2 item.",
            type: "copy",
            effort: "5 min (if testimonial exists)",
          },
          {
            title: "Show the 4.9/5 rating as interactive stars, not just a number",
            impact: "MEDIUM",
            detail: "Instead of just showing '4.9/5 Average rating' with a static star icon, show 5 star icons with 4.9 of them filled (the 5th star partially filled). Add a micro-animation where the stars fill in sequentially on scroll-into-view. Visual star ratings are universally understood trust signals — they trigger the same trust response people have on Amazon/Google reviews. A number alone doesn't trigger that response as strongly.",
            type: "dev",
            effort: "30 min",
          },
        ],
      },
      {
        name: "PAIN SECTION — Intensify the Emotional Hook",
        items: [
          {
            title: "Add a subtle dynamic element to the pain cards",
            impact: "MEDIUM",
            detail: "Each pain point card currently has a static ✕ icon. Make them animate on scroll: as each card enters the viewport, have it slide in slightly from the left with a quick red flash/pulse on the ✕ icon. This creates a 'punch punch punch' rhythm as the user scrolls, building emotional intensity. Also consider adding a faint red gradient glow behind each card that intensifies slightly on hover/tap — making the 'pain' feel viscerally uncomfortable.",
            type: "dev",
            effort: "45 min",
          },
          {
            title: "Make pain point #1 even more specific with a dynamic number",
            impact: "MEDIUM",
            detail: "Pain point #1 says 'Spending ₹50K+ monthly on ads...' — make the ₹50K dynamic. Use a short script that randomly shows ₹30K, ₹50K, ₹1L, or ₹2L each time the page loads, OR use a URL parameter so your ads can set the number. If someone clicked an ad targeting brands spending ₹1L+/month on ads, the pain point shows ₹1L instead of ₹50K. This level of personalization makes the visitor feel like the page was written specifically for them.",
            type: "dev",
            effort: "30 min",
          },
        ],
      },
      {
        name: "BRIDGE SECTION — 'What If You Didn't Have to Guess'",
        items: [
          {
            title: "Animate the orange pill buttons sequentially",
            impact: "MEDIUM",
            detail: "The three orange pills ('The exact headlines that stopped the scroll' / 'The CTA placements that doubled checkout rates' / 'The offer structures that turned browsers into repeat buyers') should NOT all be visible at once. Instead, have them appear one at a time with a 0.5s delay between each — like a reveal. First pill slides in → pause → second → pause → third. This creates a 'building anticipation' effect and forces the reader to actually read each one instead of scanning past them as a block.",
            type: "dev",
            effort: "30 min",
          },
        ],
      },
      {
        name: "'WHAT YOU'LL SEE INSIDE' — Feature Cards",
        items: [
          {
            title: "Add a blurred preview screenshot inside one card",
            impact: "HIGH",
            detail: "Inside the 'Real Funnel Breakdowns' card, add a small blurred/partially obscured screenshot of an actual page from the PDF. Show just enough to prove the content is real (annotated screenshot, arrows, CRO notes visible but text unreadable). This is the 'peek through the keyhole' technique — it creates massive desire because the brain wants to 'un-blur' the image. Place it below the description text. Even a 50% opacity, heavily blurred image is enough to signal 'this is real content, not vapor.'",
            type: "design",
            effort: "20 min",
          },
          {
            title: "Add a page count / content volume indicator",
            impact: "MEDIUM",
            detail: "Somewhere in or near the feature cards, add a concrete volume indicator: '47 pages • 23 annotated screenshots • 12 plug-and-play tactics across 5 brands.' Right now the visitor knows WHAT's inside but not HOW MUCH. Quantity signals value for information products. A '47-page PDF' feels like serious research; a 'PDF guide' could be 3 pages.",
            type: "copy",
            effort: "5 min",
          },
        ],
      },
      {
        name: "VALUE STACK / OFFER BOX",
        items: [
          {
            title: "Add individual line-item values in the value stack",
            impact: "HIGH",
            detail: "Your value stack lists 4 items with green checkmarks and ends with '₹25,000+ → You pay ₹9.' Make it even more powerful by adding individual values to each line:\n\n✅ 5 complete funnel breakdowns — Value: ₹10,000\n✅ Annotated screenshots with CRO notes — Value: ₹7,500\n✅ The 'What to Copy' cheat sheet — Value: ₹5,000\n✅ Plug-and-play PDF format — Value: ₹2,500\n\nTotal Value: ₹25,000+\nYou pay: ₹9\n\nThis line-by-line value stack makes the ₹25,000 anchor feel calculated, not arbitrary. Each item has its own worth, and the sum reinforces the total. It's the same technique used by every successful infomercial and SaaS pricing page.",
            type: "copy",
            effort: "10 min",
          },
          {
            title: "Add a visual 'savings badge' or 'discount percentage'",
            impact: "MEDIUM",
            detail: "Near the ₹9 price, add a small badge: 'Save 99%' or '₹24,991 OFF.' The human brain processes percentages and absolute savings differently — seeing both the anchor (₹25,000) AND the percentage (99% off) creates a double-trigger of perceived value. A small orange or green badge with 'SAVE 99%' near the price is visually compact but psychologically powerful.",
            type: "design",
            effort: "15 min",
          },
        ],
      },
      {
        name: "COMPARISON TABLE — 'Why This Pack Over Everything Else?'",
        items: [
          {
            title: "Highlight the Funnel Pack row more aggressively",
            impact: "MEDIUM",
            detail: "The Funnel Pack row in each comparison card has a subtle highlight, but make it unmissable. Add a left-side green bar or a glowing border specifically to the Funnel Pack row. The Courses and Agencies rows should look slightly faded/muted (lower opacity text). The visual contrast should make it instantly obvious which option 'wins' before the reader even reads the text. The eye should be drawn to the Funnel Pack row in every single card.",
            type: "design",
            effort: "20 min",
          },
          {
            title: "Add a 'RISK' card explanation below the table",
            impact: "MEDIUM",
            detail: "After the comparison cards, add a one-liner that connects to your money-back guarantee: 'Still not sure? Remember — you're covered by our 100% money-back guarantee. Zero risk at ₹9.' This bridges the comparison table (which ends with Risk: Zero) directly into a guarantee reinforcement. It's the psychological 'close' after the logical comparison.",
            type: "copy",
            effort: "5 min",
          },
        ],
      },
      {
        name: "CHECKOUT SECTION — Friction Reduction",
        items: [
          {
            title: "Remove or make the 'Which of these applies to you?' field optional",
            impact: "HIGH",
            detail: "Your checkout now has 4 fields: Name, Phone, Email, and 'Which of these applies to you?' (dropdown). Every additional form field reduces conversion. The qualifier dropdown is valuable for YOUR segmentation, but it adds friction for the BUYER. For a ₹9 product, you want minimum fields. Two options: (1) Make it optional (remove the red asterisk), or (2) Move it to the Thank You page ('Quick question before we send your PDF — which describes you best?'). You'll get the same data with zero checkout friction.",
            type: "dev",
            effort: "10 min",
          },
          {
            title: "Add order bump products back with improved design",
            impact: "HIGH",
            detail: "I notice the order bumps (₹199 Growth Kit + ₹499 Audit) from the original page aren't visible in this updated version. If they were removed intentionally, reconsider — order bumps at checkout are your primary revenue multiplier on a ₹9 front-end product. If they're still there but below the fold, make sure at least the first bump is visible before the 'Pay' button. The ₹199 bump with the improved copy from earlier can add ₹40-70 average order value (assuming 20-35% take rate).",
            type: "dev",
            effort: "1-2 hours",
          },
          {
            title: "Add trust signals directly inside the checkout form area",
            impact: "MEDIUM",
            detail: "The 'SSL Encrypted / Instant Delivery / Support Team' bar appears below the checkout. Move at least one trust signal INSIDE the form area — directly above the Pay button. Something like: '🔒 Secured by Cashfree Payments • 2,000+ successful transactions.' Trust signals placed inside the form (not below it) reduce abandonment at the final moment of decision.",
            type: "design",
            effort: "15 min",
          },
          {
            title: "The Pay button should show dynamic total if bumps are added",
            impact: "MEDIUM",
            detail: "If you have order bumps, the 'Pay ₹9 →' button should dynamically update to show the new total when bumps are checked (e.g., 'Pay ₹208 →'). A button that always says ₹9 even when ₹199 has been added creates a jarring experience at the payment gateway. Transparency at checkout builds trust.",
            type: "dev",
            effort: "30 min",
          },
        ],
      },
      {
        name: "STICKY BAR + TIMER — Final Tweaks",
        items: [
          {
            title: "Fix the timer showing 00:00 — this is a trust killer",
            impact: "CRITICAL",
            detail: "In your screenshot, the sticky bar timer shows '00:00' with 'Offer may close anytime.' A timer at 00:00 tells the visitor one of two things: (1) The offer already expired (so why is the page still live?), or (2) The timer is fake (destroying trust). You MUST fix this immediately. Options: (a) Set a real 15-30 minute countdown that, when it expires, actually redirects to a 'sorry, offer expired' page or increases the price to ₹49. (b) Replace the timer entirely with a different urgency mechanism: 'Only [X] spots left at ₹9' with a decreasing counter. (c) Remove the timer and use copy-based urgency only: 'Price increases soon — lock in ₹9 now.' A dead timer is worse than no timer at all.",
            type: "dev",
            effort: "1 hour",
          },
          {
            title: "Add the refund guarantee to the sticky bar",
            impact: "MEDIUM",
            detail: "The sticky bar currently shows: Timer + 'Claim for ₹9 Only →' + 'Offer may close anytime.' Add a tiny line: '100% money-back guarantee' near the CTA. The sticky bar follows the user everywhere — it's the most-seen element on the page. Having the guarantee visible at all times addresses the #1 purchase objection (risk) without the user having to scroll to find it.",
            type: "copy",
            effort: "5 min",
          },
        ],
      },
      {
        name: "FAQ SECTION — Strategic Improvements",
        items: [
          {
            title: "Auto-expand the first FAQ by default",
            impact: "MEDIUM",
            detail: "The first FAQ 'Is this really just ₹9?' should be open by default when the user scrolls to this section. This serves two purposes: (1) It immediately answers the biggest skepticism question, and (2) It shows the reader that the FAQs have real, detailed answers (encouraging them to open the others). A closed accordion section requires effort to engage with — removing that friction for the most important question increases FAQ engagement by 30-40%.",
            type: "dev",
            effort: "10 min",
          },
          {
            title: "Add a CTA button at the bottom of the FAQ section",
            impact: "MEDIUM",
            detail: "After the last FAQ, add a CTA: 'Still have questions? WhatsApp us at [number]' OR 'Ready to get started? Get Your Pack — ₹9.' Right now the FAQ section ends and the user hits the final CTA section. But some users will still have unanswered questions — giving them a direct line (WhatsApp) at this point can convert the remaining fence-sitters. Even showing the WhatsApp number you already have in the checkout contact section works.",
            type: "copy + dev",
            effort: "15 min",
          },
        ],
      },
      {
        name: "CREDIBILITY SECTION — 'Built by Growth Escalators'",
        items: [
          {
            title: "Add specific credentials/numbers to the GE section",
            impact: "HIGH",
            detail: "The section says 'We're a team of D2C growth practitioners who've analyzed funnels responsible for crores in revenue.' This is good but vague. Add specific numbers: 'We've managed ₹X Cr in ad spend across 50+ D2C brands, with an average ROAS improvement of X.Xx.' OR '3 years in D2C growth consulting • 50+ brands • ₹X Cr in combined client revenue.' Specific numbers make credibility claims 10x more believable than qualitative statements.",
            type: "copy",
            effort: "5 min",
          },
          {
            title: "Add recognizable client logos if possible",
            impact: "HIGH",
            detail: "If Growth Escalators has worked with any recognizable brands (even small ones), show their logos here: 'Trusted by brands like [logo] [logo] [logo].' Agency credibility is massively boosted by showing who you've worked with. Even 3-4 logos of small-but-real D2C brands would help. If NDAs prevent this, mention the categories: 'Brands in fashion, beauty, electronics, and wellness trust us with their growth.'",
            type: "design",
            effort: "30 min",
          },
        ],
      },
    ],
  },
  {
    id: "phase2",
    title: "PHASE 2 — Needs Resources / Assets",
    subtitle: "Higher-effort changes needing design, dev, video, or outreach work from your team",
    color: "#8B5CF6",
    categories: [
      {
        name: "POST-PURCHASE BACKEND — The Real Revenue Engine",
        items: [
          {
            title: "Build a Thank You page with one-time upsell offer",
            impact: "CRITICAL",
            detail: "After payment, redirect to a dedicated Thank You page (not just a generic 'payment successful' screen). Structure: (1) Confirmation: 'Your Funnel Pack is on the way to [email]!' (2) One-time offer: 'EXCLUSIVE FOR NEW MEMBERS: Get a 30-min 1-on-1 Funnel Strategy Call with our CRO team — ₹1,999 (normally ₹4,999). Only available right now. This page won't show again.' (3) Countdown timer (real, 10 minutes). (4) Skip option at the bottom. This single page can generate more revenue than the entire front-end product. Expect 5-15% take rate at ₹1,999 = ₹100-300 average revenue per front-end buyer.",
            type: "dev + copy",
            effort: "1 day",
          },
          {
            title: "Design a 7-email post-purchase nurture sequence",
            impact: "CRITICAL",
            detail: "Email 0 (immediate): PDF delivery + 'Here's how to get the most from this pack in 15 minutes.'\nEmail 1 (Day 1): 'The #1 thing 90% of people miss in the boAt breakdown' — pure value.\nEmail 2 (Day 2): Testimonial/result + 'Here's what Ankit did after reading page 12.'\nEmail 3 (Day 3): Soft pitch for ₹199 Advanced Growth Kit (for those who didn't buy the bump).\nEmail 4 (Day 5): Case study — 'How a Shopify founder used the Minimalist breakdown to 2x ROAS.'\nEmail 5 (Day 7): Hard pitch for Growth Kit or Audit service, with deadline.\nEmail 6 (Day 10): 'Last chance' + scarcity.\nEmail 7 (Day 14): Long-term relationship — invite to WhatsApp group or upcoming webinar.\n\nThis sequence alone can 3-5x your total revenue per ₹9 buyer.",
            type: "copy + email",
            effort: "2-3 days",
          },
          {
            title: "Build abandoned checkout email/WhatsApp recovery",
            impact: "HIGH",
            detail: "Since you now capture Name + Email + Phone BEFORE payment, you can recover abandoned checkouts. Set up: (1) WhatsApp message at +30 min: 'Hey [Name], looks like you didn't finish grabbing the Funnel Pack. Still interested? Here's your link: [checkout URL]' (2) Email at +2 hours: 'Your ₹9 Funnel Pack is still waiting' + a free sample page as attachment. (3) Email at +24 hours: 'Last reminder — price goes up to ₹49 tomorrow.' This can recover 15-25% of abandoners. WhatsApp recovery in India specifically has 3-5x higher open rates than email.",
            type: "dev + copy",
            effort: "1-2 days",
          },
        ],
      },
      {
        name: "VIDEO — The Biggest Untapped Conversion Lever",
        items: [
          {
            title: "Record a 90-second founder VSL for above the fold",
            impact: "HIGH",
            detail: "Record a short video of the Growth Escalators founder/team lead doing a screen-share walkthrough of ONE page from the PDF. Script: 'Hey, I'm [Name]. We spent 40+ hours breaking down funnels from boAt, GIVA, Minimalist, Libas, and SUGAR. Here's just one thing we found...' → show one annotated screenshot → 'There are 5 complete breakdowns like this, and it's yours for ₹9. Link below.' Keep it raw and authentic — Loom-style recording with webcam in the corner works better than polished production for this audience. Place it right below the hero or replace the product mockup with a video thumbnail.",
            type: "video",
            effort: "2-3 hours",
          },
          {
            title: "Create a 15-second silent auto-play preview for mobile",
            impact: "MEDIUM",
            detail: "Many mobile users won't tap to play a video. Create a 15-second silent auto-play clip that shows: quick scroll through the PDF pages → pause on an annotated screenshot → zoom into a juicy insight (blurred) → text overlay: 'All 5 breakdowns. ₹9. Scroll down.' This plays automatically in the hero area and creates intrigue without requiring any user action. Think of it as a 'motion mockup' of the product.",
            type: "video + dev",
            effort: "3-4 hours",
          },
        ],
      },
      {
        name: "SOCIAL PROOF — Systematic Collection",
        items: [
          {
            title: "Run a testimonial collection campaign to all 2000+ buyers",
            impact: "HIGH",
            detail: "Send an email or WhatsApp broadcast to all existing buyers: 'Quick favor — how has the Funnel Breakdown Pack helped your business? Reply in 1-2 lines and we'll feature you (and your brand gets visibility to our entire audience of D2C founders).' The brand visibility incentive is key — D2C founders want exposure. Expect 5-10% response rate = 100-200 testimonials to choose from. Select the 5-8 best ones that cover: different personas, different outcomes, different brands referenced, and different levels of specificity.",
            type: "outreach",
            effort: "1-2 days",
          },
          {
            title: "Collect WhatsApp/DM screenshot proof",
            impact: "HIGH",
            detail: "Raw, undesigned screenshots of actual WhatsApp messages or DMs carry 10x more trust than formatted testimonial cards. Ask your best customers if you can screenshot their positive messages (name blurred if needed). Display these in a horizontally scrollable carousel on the page. The messy, authentic format screams 'this is real' in a way that no designed card ever could.",
            type: "outreach + design",
            effort: "1-2 days",
          },
          {
            title: "Create 1-2 mini case studies with before/after numbers",
            impact: "HIGH",
            detail: "Find your best buyer success story and create a visual case study block for the page: 'How [Founder Name] used the Minimalist funnel breakdown to improve their CVR from 1.2% → 3.1% in 3 weeks.' Show: Profile photo → Brand name → Before metric → After metric → One-line quote. Before/after numbers are the absolute gold standard of social proof for this audience. Even one strong case study can outperform 10 generic testimonials.",
            type: "content",
            effort: "3-5 days",
          },
        ],
      },
      {
        name: "TRAFFIC & PERSONALIZATION — Advanced Conversion",
        items: [
          {
            title: "Build dynamic headline personalization based on ad UTMs",
            impact: "HIGH",
            detail: "Set up UTM parameter reading so the landing page dynamically adjusts based on the ad the visitor clicked. If they clicked a boAt-focused ad (utm_content=boat), the headline becomes: 'See the Exact Funnel That Turned Clicks Into ₹100Cr+ Revenue — for boAt' with boAt as the featured brand throughout. If they clicked a Minimalist ad, Minimalist leads. This ad-to-page message match can improve conversion 20-40% because the visitor immediately sees the thing that made them click.",
            type: "dev",
            effort: "2-3 days",
          },
          {
            title: "Build persona-specific landing page variants",
            impact: "HIGH",
            detail: "Create at least 2 variants: (1) D2C Founder version — lead with scaling pain, ROAS, CAC problems. Remove Freelancer/Student audience cards. Make it feel like an exclusive founder tool. (2) Agency Owner version — lead with 'Win more D2C clients' messaging, emphasis on using these frameworks in client pitches, show agency-specific testimonial. Same product, same price — different emotional wrapper. Route via separate ad sets.",
            type: "copy + dev",
            effort: "2-3 days per variant",
          },
        ],
      },
      {
        name: "ANALYTICS & OPTIMIZATION — Data-Driven Growth",
        items: [
          {
            title: "Install the full analytics + heatmap stack",
            impact: "HIGH",
            detail: "Must-haves for data-driven optimization: (1) Meta Pixel + Conversions API — for Facebook/Instagram ad optimization. Track PageView, ViewContent, InitiateCheckout, and Purchase events. (2) GA4 with enhanced ecommerce + scroll depth tracking. (3) Microsoft Clarity (free) — heatmaps, scroll maps, and session recordings. Watch 50 session recordings to see where people actually drop off. (4) UTM tracking on every ad link. This gives you the data foundation to make every future optimization decision with confidence instead of guesswork.",
            type: "dev",
            effort: "Half day",
          },
          {
            title: "Set up structured A/B testing",
            impact: "HIGH",
            detail: "Once analytics are in place, run tests in this priority order: (1) Hero with static brand names vs. animated rotating brand name — test which gets more CTA clicks. (2) With blurred preview screenshot vs. without — does the 'peek' increase conversion? (3) Social proof position: current (after pain) vs. earlier (right after hero). (4) Comparison table: with guarantee section vs. without. (5) Checkout fields: 3 fields (remove qualifier) vs. 4 fields. Run each test for 500-1,000 visitors minimum before drawing conclusions.",
            type: "dev",
            effort: "1-2 days setup",
          },
        ],
      },
      {
        name: "LEAD CAPTURE — Don't Lose Non-Buyers",
        items: [
          {
            title: "Add exit-intent popup with a free lead magnet",
            impact: "HIGH",
            detail: "On exit intent (desktop) or after 45s of inactivity (mobile), show a popup: 'Not ready yet? Get our FREE 1-page D2C Funnel Checklist — the same one used by 500+ founders before they bought the full pack.' Capture email → add to a 5-email nurture sequence → pitch the ₹9 pack in email 3-4. This recovers 3-8% of abandoning visitors and builds your email list for future products. The key: the lead magnet must feel valuable on its own, not like a bait-and-switch.",
            type: "dev + copy + design",
            effort: "1 day",
          },
          {
            title: "Add a WhatsApp community opt-in as an alternative CTA",
            impact: "MEDIUM",
            detail: "For the Indian D2C audience, WhatsApp is more trusted than email. Add a secondary CTA option (much smaller than the primary buy button): 'Not sure yet? Join our free D2C Founders WhatsApp group (500+ members).' Inside the group, share daily value, and periodically promote the ₹9 pack. WhatsApp groups in India for niche founder audiences have insane engagement rates (60-80% message read rates) and convert at 3-5x email rates.",
            type: "dev",
            effort: "2-3 hours",
          },
        ],
      },
    ],
  },
];

const impactConfig = {
  CRITICAL: { bg: "#FEE2E2", text: "#991B1B", border: "#FECACA" },
  HIGH: { bg: "#FEF3C7", text: "#92400E", border: "#FDE68A" },
  MEDIUM: { bg: "#DBEAFE", text: "#1E40AF", border: "#BFDBFE" },
};

const typeLabels = {
  dev: { label: "Dev", color: "#8B5CF6" },
  copy: { label: "Copy", color: "#22C55E" },
  design: { label: "Design", color: "#F59E0B" },
  "copy + dev": { label: "Copy+Dev", color: "#6366F1" },
  "dev + copy": { label: "Dev+Copy", color: "#6366F1" },
  "dev + copy + design": { label: "Full Build", color: "#EF4444" },
  video: { label: "Video", color: "#EF4444" },
  "video + dev": { label: "Video+Dev", color: "#EF4444" },
  "copy + email": { label: "Copy+Email", color: "#6366F1" },
  outreach: { label: "Outreach", color: "#14B8A6" },
  "outreach + design": { label: "Outreach+Design", color: "#14B8A6" },
  content: { label: "Content", color: "#EC4899" },
};

export default function FinalCROAudit() {
  const [activePhase, setActivePhase] = useState("phase1");
  const [expandedCats, setExpandedCats] = useState({ 0: true });
  const [done, setDone] = useState({});

  const activeData = phases.find((p) => p.id === activePhase);
  const allItems = phases.flatMap((p) => p.categories.flatMap((c) => c.items));
  const totalItems = allItems.length;
  const doneCount = Object.values(done).filter(Boolean).length;

  const toggleCat = (i) => setExpandedCats((p) => ({ ...p, [i]: !p[i] }));
  const toggleDone = (k) => setDone((p) => ({ ...p, [k]: !p[k] }));

  return (
    <div style={{ minHeight: "100vh", background: "#06060A", color: "#E4E4E7", fontFamily: "'Instrument Sans', system-ui, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />

      {/* HEADER */}
      <div style={{ borderBottom: "1px solid #1A1A22", padding: "28px 20px 20px", background: "linear-gradient(180deg, #0E0E14, #06060A)" }}>
        <div style={{ maxWidth: 840, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#F97316", boxShadow: "0 0 8px #F9731666" }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#F97316", letterSpacing: 1.5, textTransform: "uppercase" }}>
              Round 2 — CRO Deep Dive on Updated Page
            </span>
          </div>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: "#FFF", margin: "6px 0 3px", lineHeight: 1.3 }}>
            What's Still on the Table — Final Optimization Pass
          </h1>
          <p style={{ fontSize: 12, color: "#52525B", margin: 0 }}>
            {totalItems} remaining optimizations across dynamic elements, friction reduction, and revenue backend
          </p>
          <div style={{ marginTop: 16, background: "#0E0E14", borderRadius: 8, padding: 12, border: "1px solid #1A1A22" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
              <span style={{ fontSize: 11, color: "#71717A" }}>Progress</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#10B981" }}>{doneCount}/{totalItems}</span>
            </div>
            <div style={{ height: 4, background: "#1A1A22", borderRadius: 2, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${totalItems > 0 ? (doneCount / totalItems) * 100 : 0}%`, background: "linear-gradient(90deg, #059669, #10B981)", borderRadius: 2, transition: "width 0.3s" }} />
            </div>
          </div>
        </div>
      </div>

      {/* TABS */}
      <div style={{ position: "sticky", top: 0, zIndex: 10, background: "#06060A", borderBottom: "1px solid #1A1A22", padding: "0 20px" }}>
        <div style={{ maxWidth: 840, margin: "0 auto", display: "flex" }}>
          {phases.map((p) => (
            <button key={p.id} onClick={() => { setActivePhase(p.id); setExpandedCats({ 0: true }); }} style={{
              flex: 1, padding: "12px 10px", background: "none", border: "none",
              borderBottom: activePhase === p.id ? `2px solid ${p.color}` : "2px solid transparent",
              color: activePhase === p.id ? "#FFF" : "#52525B",
              fontSize: 11, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
            }}>
              {p.id === "phase1" ? `⚡ Phase 1: Ship Now (${p.categories.reduce((a, c) => a + c.items.length, 0)})` : `🔧 Phase 2: Team Work (${p.categories.reduce((a, c) => a + c.items.length, 0)})`}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: 840, margin: "0 auto", padding: "20px 20px 80px" }}>
        <h2 style={{ fontSize: 16, fontWeight: 700, color: activeData.color, margin: "0 0 4px" }}>{activeData.title}</h2>
        <p style={{ fontSize: 12, color: "#52525B", margin: "0 0 20px" }}>{activeData.subtitle}</p>

        {activeData.categories.map((cat, ci) => {
          const isOpen = expandedCats[ci];
          return (
            <div key={ci} style={{ marginBottom: 12 }}>
              <button onClick={() => toggleCat(ci)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", background: "#0E0E14", border: "1px solid #1A1A22", borderRadius: isOpen ? "10px 10px 0 0" : 10, cursor: "pointer", fontFamily: "inherit" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#FFF" }}>{cat.name}</span>
                  <span style={{ fontSize: 10, color: "#52525B", fontFamily: "'JetBrains Mono', monospace" }}>{cat.items.length} items</span>
                </div>
                <span style={{ color: "#52525B", fontSize: 14, transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▾</span>
              </button>

              {isOpen && (
                <div style={{ background: "#0A0A10", border: "1px solid #1A1A22", borderTop: "none", borderRadius: "0 0 10px 10px", padding: "8px 12px 12px" }}>
                  {cat.items.map((item, ii) => {
                    const key = `${activePhase}-${ci}-${ii}`;
                    const isDone = done[key];
                    const ic = impactConfig[item.impact];
                    const tc = typeLabels[item.type] || { label: item.type, color: "#71717A" };
                    return (
                      <div key={ii} style={{ background: isDone ? "#05291A15" : "#08080C", border: `1px solid ${isDone ? "#10B98122" : "#151518"}`, borderRadius: 8, padding: 12, marginTop: 6 }}>
                        <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                          <button onClick={() => toggleDone(key)} style={{ width: 18, height: 18, borderRadius: 3, border: `1.5px solid ${isDone ? "#10B981" : "#3F3F46"}`, background: isDone ? "#10B981" : "transparent", cursor: "pointer", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2, color: "#FFF", fontSize: 10, padding: 0 }}>
                            {isDone ? "✓" : ""}
                          </button>
                          <div style={{ flex: 1 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap", marginBottom: 6 }}>
                              <span style={{ fontSize: 12.5, fontWeight: 600, color: isDone ? "#10B981" : "#FFF", textDecoration: isDone ? "line-through" : "none", lineHeight: 1.3 }}>{item.title}</span>
                              <span style={{ fontSize: 8, fontWeight: 700, padding: "2px 6px", borderRadius: 3, background: ic.bg, color: ic.text, border: `1px solid ${ic.border}`, letterSpacing: 0.3 }}>{item.impact}</span>
                              <span style={{ fontSize: 8, padding: "2px 5px", borderRadius: 3, background: `${tc.color}15`, color: tc.color, fontWeight: 600 }}>{tc.label}</span>
                              {item.effort && <span style={{ fontSize: 8, padding: "2px 5px", borderRadius: 3, background: "#1A1A22", color: "#52525B", fontFamily: "'JetBrains Mono', monospace" }}>{item.effort}</span>}
                            </div>
                            <p style={{ fontSize: 12, color: "#71717A", margin: 0, lineHeight: 1.7, whiteSpace: "pre-line" }}>{item.detail}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
