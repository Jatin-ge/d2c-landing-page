import { useState } from "react";

const funnelFlow = [
  { id: "hero", label: "Hero / Above Fold", page: "1" },
  { id: "brands", label: "Brand Logos Bar", page: "1" },
  { id: "audience", label: "Perfect For You If...", page: "2-3" },
  { id: "pain", label: "Does This Sound Familiar?", page: "3-4" },
  { id: "bridge", label: "What If You Didn't Have to Guess?", page: "4-5" },
  { id: "inside", label: "What You'll See Inside", page: "5-7" },
  { id: "offer", label: "What You Get + Pricing", page: "7-8" },
  { id: "social", label: "Social Proof Section", page: "9" },
  { id: "comparison", label: "Why This Pack? Table", page: "10" },
  { id: "checkout", label: "Checkout + Order Bumps", page: "11-12" },
  { id: "faq", label: "FAQ Section", page: "13-14" },
  { id: "footer", label: "Final CTA + Sticky Bar", page: "14" },
];

const phases = [
  {
    id: "phase1",
    title: "PHASE 1 — Fix Right Now",
    subtitle: "Copy, structure, and conversion tweaks you can implement today without new assets",
    color: "#10B981",
    items: [
      {
        section: "HERO / ABOVE THE FOLD",
        ref: "Page 1",
        priority: "CRITICAL",
        impact: 95,
        observations: [
          "The pre-headline badge says 'Limited Offer for Top 2000+ D2C Founders' — but 'Top 2000+' is contradictory. If 2000+ people already have it, the visitor isn't in an exclusive 'top' group. It undermines the scarcity you're trying to create.",
          "Main headline 'How India's Top D2C Brands Turn Clicks Into Profitable Orders' is decent but passive. It describes what brands DO, not what the READER will GET. The reader isn't boAt — they want to learn FROM boAt.",
          "Subtext mentions 4 brands (boAt, Giva, Minimalist & Libas) and 'claimed by 2000+ Founders' — this is good social proof but it's buried in supporting copy instead of being a standalone trust element.",
          "CTA says 'Get Instant Access @ ₹9' — the '@' symbol feels informal/cheap. For a ₹9 product, you want the CTA to feel premium, not like a text message.",
          "Below CTA: 'Instant PDF delivery + Secure Checkout' — good trust signals but visually weak. They're small and easy to miss.",
          "NO product mockup anywhere above the fold. The visitor has no visual of what they're actually buying. At ₹9, they need to SEE the product to feel it's worth even that.",
          "NO crossed-out anchor price visible above the fold. The ₹9 just sits there without context of what it's 'normally' worth.",
        ],
        fixes: [
          {
            label: "Rewrite pre-headline badge",
            detail: "Change to: '⚡ Used by 2000+ D2C Founders Across India' — removes the contradictory 'Top' + 'Limited' framing and turns it into pure social proof instead.",
            effort: "5 min",
            type: "copy",
          },
          {
            label: "Rewrite main headline to be reader-outcome focused",
            detail: "Option A: 'See the Exact Funnels That Turned Clicks Into ₹100Cr+ Revenue — For boAt, Giva, Minimalist & Libas'\n\nOption B: 'The Funnel Playbook Behind India's Fastest-Growing D2C Brands — Now Yours for ₹9'\n\nBoth shift from 'here's what brands do' to 'here's what YOU get.'",
            effort: "5 min",
            type: "copy",
          },
          {
            label: "Fix the CTA button copy",
            detail: "Change 'Get Instant Access @ ₹9' → 'Unlock All 4 Funnel Breakdowns — ₹9 Only'\n\nThis is more specific (tells them exactly what they get: 4 breakdowns), removes the casual '@', and the 'Only' makes ₹9 feel intentionally cheap rather than accidentally cheap.",
            effort: "2 min",
            type: "copy",
          },
          {
            label: "Add anchor price next to ₹9",
            detail: "Show '₹999  ₹9' (with ₹999 struck through) directly on or near the CTA button. Without an anchor, ₹9 has no reference frame. With ₹999 crossed out, the brain instantly calculates '99% off' and triggers loss aversion.",
            effort: "5 min",
            type: "copy",
          },
          {
            label: "Add a product mockup image above the fold",
            detail: "Create a simple 3D PDF/ebook mockup showing the cover of the funnel breakdown guide. Place it to the right of the headline (desktop) or just below the headline (mobile). Even a flat PDF screenshot with a slight shadow works. This makes the digital product feel tangible.",
            effort: "30 min",
            type: "design",
          },
        ],
      },
      {
        section: "BRAND LOGOS BAR",
        ref: "Page 1 (bottom)",
        priority: "MEDIUM",
        impact: 55,
        observations: [
          "'BREAKDOWNS FROM BRANDS DOING ₹100CR+ ARR' is a strong line — it establishes massive credibility. But the brand names (boAt, GIVA, Minimalist, LIBAS) are displayed as plain text, not actual logos.",
          "Using actual brand logos would create instant visual recognition and trust. Text names feel like claims; logos feel like proof.",
          "The section also mentions SUGAR at the top of page 2 — so there are actually 5 brands, not 4. This inconsistency between '4 brands' in the hero and 5 logos here could confuse visitors.",
        ],
        fixes: [
          {
            label: "Clarify brand count across the page",
            detail: "Either update the hero to say 5 brands or consolidate the brand bar to match the 4 mentioned in the hero. Inconsistency hurts trust — if you can't get your own product count right, can you accurately break down someone else's funnel?",
            effort: "5 min",
            type: "copy",
          },
          {
            label: "Use actual brand logos instead of text",
            detail: "Replace the text brand names with grayscale or white versions of the actual logos. This is a Phase 2 task if you need design resources, but if the logos are available, it's a quick swap.",
            effort: "20 min",
            type: "design",
          },
        ],
      },
      {
        section: "'PERFECT FOR YOU IF...' AUDIENCE SECTION",
        ref: "Pages 2–3",
        priority: "HIGH",
        impact: 72,
        observations: [
          "This section lists 4 audiences: Freelancer, Agency Owner, D2C Founder, Student. The descriptions are generic and don't create desire — they describe the person, not the transformation they'll experience.",
          "The order is wrong from a conversion psychology standpoint. D2C Founder should be FIRST because they're the primary buyer. Putting Freelancer first makes it feel like a product for beginners/side-hustlers, which undercuts the '₹100Cr+ brands' positioning.",
          "Each card has an icon + title + one-line description, but no 'hook.' There's no reason for a visitor to feel 'that's ME, I need this.'",
          "Student as an audience segment at the same level as D2C Founder dilutes the premium positioning. If your hero says '₹100Cr+ brand breakdowns,' a student audience feels off-brand.",
        ],
        fixes: [
          {
            label: "Reorder audience cards by buyer priority",
            detail: "Order should be: (1) D2C Founder → (2) Agency Owner → (3) Freelancer → (4) Student. Lead with your highest-intent buyer. This also reframes the product as 'built for founders, useful for everyone else too.'",
            effort: "5 min",
            type: "copy",
          },
          {
            label: "Rewrite descriptions to be outcome-driven",
            detail: "Current D2C Founder description: 'Model real funnels used by India's fastest-growing D2C brands.' → Better: 'Stop rebuilding your funnel from scratch. See exactly what's working for brands doing ₹100Cr+ and adapt it to your store this week.'\n\nCurrent Agency Owner: 'Scale your services using proven, battle-tested funnel frameworks.' → Better: 'Walk into your next client meeting with funnel strategies backed by India's biggest D2C wins. Close more deals, deliver better results.'\n\nMake each one a mini story about their specific frustration → this product → specific outcome.",
            effort: "15 min",
            type: "copy",
          },
          {
            label: "Consider renaming or repositioning 'Student'",
            detail: "Rename to 'Aspiring D2C Entrepreneur' or 'Future Founder' — this maintains the premium positioning while still welcoming learners. The word 'Student' signals 'I have no money and no business,' which is the opposite of your ideal buyer.",
            effort: "2 min",
            type: "copy",
          },
        ],
      },
      {
        section: "'DOES THIS SOUND FAMILIAR?' PAIN SECTION",
        ref: "Pages 3–4",
        priority: "HIGH",
        impact: 78,
        observations: [
          "This is the pain agitation section with 4 pain points on red backgrounds: (1) Running ads but results feel unpredictable, (2) Not sure if ROAS is showing growth or hiding losses, (3) Invested in courses that didn't translate into real execution, (4) Agencies feel expensive, slow, and disconnected.",
          "Pain point #1 and #2 are very similar — both are about ad performance uncertainty. This feels repetitive rather than building escalating pain.",
          "Pain point #3 (courses that didn't translate) is EXCELLENT — it directly positions this product against the competition (courses). This should be more prominent.",
          "Pain point #4 about agencies is interesting since Growth Escalators IS an agency. This could backfire if the visitor connects the dots.",
        ],
        fixes: [
          {
            label: "Differentiate pain points #1 and #2",
            detail: "Replace #1 with something more specific: 'Spending ₹50K+ monthly on ads but can't tell which part of your funnel is leaking money' — adds a specific number (makes it relatable) and introduces the 'funnel leak' metaphor which directly connects to the product.",
            effort: "5 min",
            type: "copy",
          },
          {
            label: "Add a 5th pain point about competitor success",
            detail: "Add: 'Watching competitors grow faster while using the same ad platforms and budgets as you.' This taps into competitive jealousy — one of the strongest emotions for D2C founders — and directly sets up the bridge section that follows.",
            effort: "5 min",
            type: "copy",
          },
          {
            label: "Rethink the agency pain point",
            detail: "Since YOU are an agency, this could feel hypocritical. Reframe to: 'Hired help that gave you generic strategies instead of brand-specific, proven frameworks.' This criticizes the approach, not the business model you operate in.",
            effort: "5 min",
            type: "copy",
          },
        ],
      },
      {
        section: "'WHAT IF YOU DIDN'T HAVE TO GUESS?' BRIDGE",
        ref: "Pages 4–5",
        priority: "MEDIUM",
        impact: 65,
        observations: [
          "The copy asks what if you could see how India's top brands structure their funnels, then shows three orange pill-shaped elements: 'The headlines.' / 'The CTAs.' / 'The offers.' followed by 'All laid out so you can understand what works before you spend more money.'",
          "The orange pill buttons are visually interesting but content is too generic — 'the headlines, the CTAs, the offers' is just three nouns. No specificity or desire-building.",
          "The closing line 'understand what works before you spend more money' is defensive (about NOT losing money). At ₹9, the bigger motivator is upside potential, not risk avoidance.",
        ],
        fixes: [
          {
            label: "Add specificity to the orange pill elements",
            detail: "Instead of generic nouns, make them specific: 'The exact headlines that stopped the scroll' / 'The CTA placements that doubled checkout rates' / 'The offer structures that turned browsers into repeat buyers' — same visual treatment, 10x more desire.",
            effort: "5 min",
            type: "copy",
          },
          {
            label: "Rewrite closing line to be gain-framed",
            detail: "Change 'understand what works before you spend more money' → 'So you can model what's already proven — and skip the ₹10L in testing these brands already did for you.' Reframes value as saved money AND saved time with a specific number.",
            effort: "5 min",
            type: "copy",
          },
        ],
      },
      {
        section: "'WHAT YOU'LL SEE INSIDE' — FEATURE CARDS",
        ref: "Pages 5–7",
        priority: "HIGH",
        impact: 75,
        observations: [
          "4 feature cards: Real Funnel Breakdowns, CRO Decisions Explained, What to Copy (And What Not To), Actionable Learnings. Each has icon + title + 1-line description.",
          "The descriptions are vague and repeat the hero messaging. By this point, the visitor already knows the basics. You need to go DEEPER here with new, specific information.",
          "Card #3 'What to Copy (And What Not To)' is the most compelling angle on the entire page — it implies curation and judgment. This should be emphasized more.",
          "Card #4 'Actionable Learnings' is generic. Every digital product claims to be 'actionable.'",
        ],
        fixes: [
          {
            label: "Add specific examples inside each card",
            detail: "Card 1: 'See exactly how boAt structures their ad → landing page → checkout flow — including the upsell that most visitors never notice.'\n\nCard 2: 'Why Minimalist uses a specific headline length on product pages — and the conversion math behind it.'\n\nCard 3: 'We'll tell you which Giva tactic only works at their scale — and which ones you can deploy at any budget.'\n\nCard 4: 'Includes a plug-and-play checklist: 12 things to implement on your store within 48 hours.'\n\nSpecificity is the #1 conversion lever for info products.",
            effort: "15 min",
            type: "copy",
          },
        ],
      },
      {
        section: "'WHAT YOU GET' OFFER BOX + ₹9 PRICING",
        ref: "Pages 7–8",
        priority: "CRITICAL",
        impact: 88,
        observations: [
          "Gold-bordered offer box listing: real funnel examples, understanding of headlines/offers/CTAs, actionable learnings, downloadable PDF with visual references. Then: 'Access Price: ₹9 (Limited Time Offer)'.",
          "MAJOR ISSUE: This is the most important section and it's the weakest. The bullet points are generic and repeat what was said above. Zero new information to push a hesitant visitor over the edge.",
          "No anchor price. No value stack. No breakdown of what it 'should' cost. The visitor has no reference frame for whether ₹9 is a good deal.",
          "No mention of page count, number of funnel breakdowns, number of screenshots/visuals, or format details. The visitor is paying for something they can't quantify.",
        ],
        fixes: [
          {
            label: "Build a proper value stack",
            detail: "Rewrite the offer box:\n\n'Here's everything you get:\n→ 4 complete funnel breakdowns (boAt, Giva, Minimalist, Libas) — would take 40+ hours to research yourself\n→ Annotated screenshots of every funnel step with CRO notes\n→ The \"What to Copy\" cheat sheet — our top 12 steal-worthy tactics\n→ PDF format — read on any device, forever\n\nTotal value if you hired us to do this analysis: ₹25,000+\nYour price today: ₹9'\n\nThis creates a massive perceived value gap.",
            effort: "15 min",
            type: "copy",
          },
          {
            label: "Add specificity numbers",
            detail: "Add concrete numbers: 'X pages / X funnel screenshots / X brands / X actionable takeaways.' Something like '47 pages of breakdown' feels more substantial than 'a PDF guide.'",
            effort: "5 min",
            type: "copy",
          },
          {
            label: "Add crossed-out anchor price visually",
            detail: "Show the ₹9 with a prominent crossed-out ₹999. Not too high to feel fake, not too low to feel like no discount. The anchor should appear whenever the price is displayed.",
            effort: "5 min",
            type: "design",
          },
        ],
      },
      {
        section: "SOCIAL PROOF — '2000+ FOUNDERS' + TESTIMONIAL",
        ref: "Page 9",
        priority: "HIGH",
        impact: 80,
        observations: [
          "'Trusted by Indian D2C Founders' badge → 'Join 2000+ Founders Already Growing' headline → Two stat cards (2000+ Founders / 4.9/5 Rating) → ONE testimonial from 'Priya S. • D2C Founder.'",
          "ONE testimonial is not enough. A single testimonial can actually hurt credibility because it looks like you could only find one person to say something nice.",
          "The testimonial itself ('This kit saved me 3 months of trial and error. Worth every second.') is generic — it could be about any product.",
          "The 2000+ and 4.9/5 numbers are strong but unverifiable. No source, no platform, no review screenshot.",
          "This section comes TOO LATE on the page (page 9 of 14). Most scrollers have decided by now. Social proof should appear much earlier.",
        ],
        fixes: [
          {
            label: "Move social proof section higher on the page",
            detail: "Move the '2000+ Founders' section to appear right after the pain section (page 4) and before the bridge. After agitating pain, show proof that others have solved it, THEN present your solution. Much stronger psychological flow.",
            effort: "20 min",
            type: "dev",
          },
          {
            label: "Add at minimum 3-5 more testimonials",
            detail: "You need each one addressing a different angle: (1) quality of breakdowns, (2) specific result after implementing, (3) from an agency owner (different persona), (4) from a skeptic who was surprised. If you don't have these, this is your #1 Phase 2 priority.",
            effort: "Needs testimonials",
            type: "content",
          },
          {
            label: "Add raw screenshot proof",
            detail: "Show a screenshot of WhatsApp/email where someone thanked you or shared a result. Blurred name if needed. Raw screenshots feel 100x more believable than formatted testimonial cards.",
            effort: "10 min if available",
            type: "design",
          },
        ],
      },
      {
        section: "'WHY THIS PACK?' COMPARISON TABLE",
        ref: "Page 10",
        priority: "MEDIUM",
        impact: 62,
        observations: [
          "Comparison table: Funnel Pack vs Courses. Rows: Cost (₹9 vs ₹5,000+), Time to Value (Instant vs Hours of Video), Actionability (Copy & Paste vs Theory), Risk (Zero vs High).",
          "'Hours of Vic...' — the Courses column text is getting TRUNCATED on mobile. Responsive bug that makes the page feel unpolished.",
          "Missing a 3rd column for 'Hiring an Agency' — would make the comparison even more powerful (₹9 vs ₹5,000+ vs ₹50,000+).",
          "The 'Copy & Paste' claim for Actionability is the strongest selling point but isn't expanded on. WHAT can they copy and paste?",
        ],
        fixes: [
          {
            label: "Fix mobile text truncation — URGENT UX bug",
            detail: "The 'Hours of Video' text is cut off in the Courses column. Either reduce font size, abbreviate, or make the table scrollable. This kind of bug at this point in the funnel makes the whole page feel amateur.",
            effort: "10 min",
            type: "dev",
          },
          {
            label: "Add 'Hiring an Agency' as 3rd column",
            detail: "Agency → Cost: ₹50,000+, Time to Value: Weeks, Actionability: Dependent on them, Risk: High. Makes ₹9 feel absurdly cheap against THREE alternatives, not just one.",
            effort: "15 min",
            type: "copy",
          },
          {
            label: "Add a 'Based on Real Data' row",
            detail: "New row: 'Source' → Funnel Pack: 'Real ₹100Cr+ brand funnels' vs Courses: 'Instructor opinions' vs Agency: 'Their past clients.' Reinforces your unique differentiator.",
            effort: "5 min",
            type: "copy",
          },
        ],
      },
      {
        section: "CHECKOUT + ORDER BUMPS",
        ref: "Pages 11–12",
        priority: "CRITICAL",
        impact: 92,
        observations: [
          "Checkout headline: 'Get Instant Access While Offer Lasts' with 'LIMITED TIME: ₹9' badge. Embedded Cashfree payment widget showing Growth Escalators branding.",
          "Main product shows 'Top 5 Winning D2C Brand Funnel Breakdown — ₹9'. BUT the hero says 4 brands! This is a CRITICAL inconsistency that will make detail-oriented buyers hesitate.",
          "Two order bumps: (1) Advanced D2C Growth Kit ₹199 (Worth ₹1999!) — 20 brand breakdowns + CRO & SEO Checklist + 600+ winning ads. (2) Personalized D2C Growth Audit (Meta + CRO) — ₹499.",
          "₹199 bump has a generic Canva-style thumbnail that undercuts the value perception.",
          "Both bumps look visually identical. The ₹199 is a product add-on, the ₹499 is a SERVICE. They should look completely different.",
          "Form only asks for 'Name' — no email field visible before payment. If someone abandons here, you have ZERO way to follow up.",
          "The jump from ₹9 → ₹199 is a 22x price increase. No stepping stone between them.",
          "'Pay ₹9 →' button doesn't seem to update if bumps are checked.",
        ],
        fixes: [
          {
            label: "FIX BRAND COUNT INCONSISTENCY — URGENT",
            detail: "Hero says 4 brands, checkout says 'Top 5'. Pick one and make it consistent EVERYWHERE. This mismatch at the point of purchase kills trust right when it matters most.",
            effort: "5 min",
            type: "copy",
          },
          {
            label: "Add email capture before checkout",
            detail: "Add an email field above the payment form: 'Enter your email — we'll deliver your PDF here instantly.' Even if they abandon payment, you've captured their email for follow-up. This alone can recover 10-20% of abandoners.",
            effort: "30 min",
            type: "dev",
          },
          {
            label: "Improve ₹199 bump thumbnail",
            detail: "Replace the generic Canva mockup with a higher-quality product image. The description is also truncated ('600+ winning ads that...') — show the full text. At ₹199, the visual quality directly impacts take rate.",
            effort: "30 min",
            type: "design",
          },
          {
            label: "Make ₹499 audit bump visually distinct",
            detail: "Add a 'PERSONALIZED' or 'DONE FOR YOU' badge, use a different background color, or add a human photo (the auditor). The buyer needs to understand this is a service, not another PDF.",
            effort: "20 min",
            type: "design",
          },
          {
            label: "Consider adding a ₹49-₹99 bridge bump",
            detail: "The 22x jump from ₹9 → ₹199 is steep. A smaller bump at ₹49 or ₹99 (e.g., 'Add the Funnel Implementation Checklist — ₹49') bridges the gap and creates a stepping stone.",
            effort: "1-2 hours",
            type: "dev",
          },
        ],
      },
      {
        section: "FAQ SECTION",
        ref: "Page 13",
        priority: "MEDIUM",
        impact: 58,
        observations: [
          "5 FAQs: 'Is this really just ₹9?', 'Is this suitable for beginners?', 'What format?', 'Is there any catch?', 'How long do I have access?'",
          "These are all DEFENSIVE FAQs about the offer. None address doubts about VALUE: 'What results have others gotten?', 'How is this different from free YouTube breakdowns?', 'Can I see a sample?'",
          "'Is there any catch?' needs a very strong answer. If it hints at upsells (which exist), it could backfire.",
          "No FAQ about refunds/guarantees. Even at ₹9, a money-back guarantee removes the last thread of resistance.",
        ],
        fixes: [
          {
            label: "Add 2-3 value-focused FAQs",
            detail: "Add: (1) 'How is this different from free breakdowns on YouTube?' — emphasize depth, screenshots, CRO analysis. (2) 'What results can I expect?' — share a mini outcome. (3) 'Is there a money-back guarantee?' — 'Absolutely. If you don't find value, email us for an instant refund.'",
            effort: "15 min",
            type: "copy",
          },
          {
            label: "Rewrite 'Is there any catch?' transparently",
            detail: "Best answer: 'No catch. We offer this at ₹9 because we want you to experience our research quality firsthand. Yes, we have more advanced products for those who want to go deeper — but this ₹9 pack stands completely on its own. 2000+ founders agree.' Honest about upsell intent, framed positively.",
            effort: "5 min",
            type: "copy",
          },
        ],
      },
      {
        section: "FINAL CTA + STICKY BAR + TIMER",
        ref: "Page 14",
        priority: "HIGH",
        impact: 74,
        observations: [
          "'Stop Guessing. Start Growing.' + CTA button + '100% Secure Checkout.' Sticky bar has countdown timer (14:55) + 'Claim for ₹9 Only →'.",
          "The sticky bar with timer is GREAT for urgency. But what happens when the timer hits zero? If nothing changes, returning visitors learn the timer is fake — trust destroyed permanently.",
          "The final headline misses a chance to summarize value one last time before the CTA.",
        ],
        fixes: [
          {
            label: "Add value summary above final CTA",
            detail: "Before 'Stop Guessing' add: '4 complete funnel breakdowns. Annotated screenshots. A plug-and-play checklist. All for less than a chai.' Reminds them what they're getting at the decision point.",
            effort: "5 min",
            type: "copy",
          },
          {
            label: "Validate timer strategy",
            detail: "Make sure the timer has a real consequence: (1) Price goes up to ₹49 after timer, (2) Order bumps disappear, or (3) Use an evergreen cookie-based timer tied to first visit. Never use a timer that resets on refresh with no consequence — it's the fastest way to get negative word of mouth.",
            effort: "1-2 hours",
            type: "dev",
          },
        ],
      },
      {
        section: "OVERALL PAGE FLOW & SEQUENCING",
        ref: "Full page",
        priority: "HIGH",
        impact: 82,
        observations: [
          "Current flow: Hero → Brands → Audience → Pain → Bridge → What's Inside → Offer Box → Social Proof → Comparison → Checkout → FAQ → Final CTA.",
          "SOCIAL PROOF comes TOO LATE (page 9 of 14). Should be much earlier — after pain or after the bridge.",
          "COMPARISON TABLE is disconnected from the offer box. There are 2 full screens between 'here's the price' and 'here's why it's better than alternatives.' They should be adjacent.",
          "NO CTA between pages 2-7 (entire middle of page). Anyone convinced early has to scroll a LONG way to take action.",
          "Page is clearly mobile-first (single column, large text) — correct for Indian D2C ad traffic. Good decision.",
        ],
        fixes: [
          {
            label: "Move social proof higher",
            detail: "Place the '2000+ Founders' section right after the pain section and before the bridge. Flow becomes: Pain → Proof others solved it → Here's the solution. Much stronger.",
            effort: "20 min",
            type: "dev",
          },
          {
            label: "Add a mid-page CTA around page 6-7",
            detail: "After 'What You'll See Inside', add a CTA: 'Get All 4 Breakdowns for ₹9 →'. Visitors convinced by this point shouldn't have to scroll 5 more screens to find checkout.",
            effort: "10 min",
            type: "dev",
          },
          {
            label: "Place comparison table next to offer box",
            detail: "Move 'Why This Pack?' directly below or above the offer box. Sequence: What You Get → Why This vs Alternatives → Price → CTA. Currently the comparison is disconnected from pricing.",
            effort: "10 min",
            type: "dev",
          },
        ],
      },
    ],
  },
  {
    id: "phase2",
    title: "PHASE 2 — Needs Team Resources",
    subtitle: "Higher-effort changes requiring design, dev, or content work from your team",
    color: "#8B5CF6",
    items: [
      {
        section: "POST-PURCHASE UPSELL FLOW",
        ref: "After checkout",
        priority: "CRITICAL",
        impact: 96,
        observations: [
          "The checkout order bumps (₹199 + ₹499) are a good start, but the REAL revenue is on the Thank You page and in the post-purchase email sequence.",
          "At ₹9, you're likely losing money or breaking even on ad spend. The business model depends entirely on backend conversion.",
          "No visibility into what happens after payment. Is there a Thank You page upsell? An email sequence? If not, you're leaving 80%+ of revenue on the table.",
        ],
        fixes: [
          {
            label: "Build a Thank You page OTO",
            detail: "After payment, redirect to: '🎉 Your Pack is on the way! One-time offer: Get a 30-minute 1-on-1 Funnel Strategy Call — ₹1,999 (normally ₹4,999). Only available now.' Targets the buyer's peak excitement moment.",
            effort: "3-5 hours",
            type: "dev + copy",
          },
          {
            label: "Design 7-day email nurture sequence",
            detail: "Day 0: Delivery + welcome. Day 1: '#1 insight most miss in the boAt breakdown.' Day 2: Testimonial/result. Day 3: Soft pitch for ₹199 Growth Kit. Day 4: Case study. Day 5: Hard pitch. Day 7: Final deadline. This sequence can 3-5x revenue per lead.",
            effort: "1-2 days",
            type: "copy + email setup",
          },
          {
            label: "Build abandoned checkout recovery",
            detail: "If someone reaches checkout but doesn't pay (requires email capture from Phase 1 fix): 'Forgot something?' → 24hr: 'Free sample page from boAt breakdown' → 48hr: 'Last reminder before price changes.'",
            effort: "1 day",
            type: "email + dev",
          },
        ],
      },
      {
        section: "VIDEO SALES LETTER (VSL)",
        ref: "Above the fold",
        priority: "HIGH",
        impact: 85,
        observations: [
          "No video anywhere on the page. For low-ticket info products, a 2-4 minute video showing a peek inside can increase conversions by 30-80%.",
          "A founder walkthrough builds trust and desire simultaneously. Also dramatically increases time on page.",
        ],
        fixes: [
          {
            label: "Record a 2-3 minute founder walkthrough",
            detail: "Script: (1) Intro: 'I'm [Name] from Growth Escalators' (2) 'We spent 40+ hours analyzing these funnels' (3) Show ONE insight from one breakdown — enough to prove depth (4) 'There are 4 complete breakdowns like this — yours for ₹9' (5) CTA. A clean loom-style screen recording performs best for this audience.",
            effort: "2-3 hours",
            type: "video + design",
          },
        ],
      },
      {
        section: "EXPANDED SOCIAL PROOF",
        ref: "Throughout page",
        priority: "HIGH",
        impact: 82,
        observations: [
          "Currently: 1 testimonial, 2 stats. For a skeptical D2C founder audience, this is severely insufficient.",
          "The Indian D2C community is tight-knit — founders validate purchases through peer signals. If your product is good, social proof should be obtainable.",
        ],
        fixes: [
          {
            label: "Run a testimonial collection campaign",
            detail: "Email all 2000+ buyers: 'How did the Funnel Pack help you? Reply in 1-2 lines — we'll feature you + give your brand visibility to our audience.' The brand visibility incentive alone should get 5-10% response = 100+ testimonials.",
            effort: "1-2 days",
            type: "outreach",
          },
          {
            label: "Create 1-2 mini case studies",
            detail: "Find your best success story: 'How [Founder] used the Minimalist breakdown to increase CVR from 1.2% to 3.1% in 3 weeks.' Before/after numbers are the gold standard.",
            effort: "3-5 days",
            type: "content",
          },
          {
            label: "Add WhatsApp screenshot proof carousel",
            detail: "Collect and display raw DM/WhatsApp screenshots where buyers shared results. These carry 10x more trust than designed testimonial cards.",
            effort: "2-3 hours",
            type: "design",
          },
        ],
      },
      {
        section: "TRAFFIC-SPECIFIC LANDING PAGES",
        ref: "New pages",
        priority: "HIGH",
        impact: 78,
        observations: [
          "One page serves all traffic — cold, warm, retargeting, organic, all personas. The page compromises to work 'okay' for everyone instead of perfectly for anyone.",
          "The audience section proves you know there are different buyers — but they all see identical messaging.",
        ],
        fixes: [
          {
            label: "Build persona-specific variants",
            detail: "At least 2 variants: (1) Founder-focused: 'Build a ₹100Cr funnel' + pain about CAC/scaling. (2) Agency-focused: 'Win more D2C clients' + pain about churn/proving ROI. Same product, same price, different framing.",
            effort: "1-2 days each",
            type: "copy + dev",
          },
          {
            label: "Dynamic headline by ad source",
            detail: "Use UTM parameters to swap the hero headline based on the ad they clicked. boAt ad → boAt-first headline. Minimalist ad → Minimalist-first. This message match alone can improve conversion 20-40%.",
            effort: "2-3 days",
            type: "dev + copy",
          },
        ],
      },
      {
        section: "ANALYTICS & A/B TESTING",
        ref: "Backend",
        priority: "HIGH",
        impact: 88,
        observations: [
          "No visible analytics or testing setup. Without data, every change is a guess.",
          "Key questions you should answer: scroll depth to checkout, CTA click rate, order bump take rate, post-purchase email opens.",
        ],
        fixes: [
          {
            label: "Install analytics stack",
            detail: "Must-haves: (1) Meta Pixel + Conversions API, (2) GA4 with scroll tracking, (3) Microsoft Clarity (free heatmaps + recordings), (4) UTM tracking on all ad links.",
            effort: "Half day",
            type: "dev",
          },
          {
            label: "Set up A/B testing framework",
            detail: "Priority queue: (1) Headline variants, (2) With/without product mockup, (3) Social proof position, (4) Comparison table 2 vs 3 columns, (5) CTA text variants.",
            effort: "1-2 days",
            type: "dev",
          },
        ],
      },
      {
        section: "EXIT-INTENT & LEAD CAPTURE",
        ref: "New feature",
        priority: "MEDIUM",
        impact: 68,
        observations: [
          "If someone visits and doesn't buy, they're gone forever. No exit popup, no email capture, no alternate path.",
          "You're losing 90-95% of traffic with zero re-engagement capability.",
        ],
        fixes: [
          {
            label: "Add exit-intent popup with free lead magnet",
            detail: "On exit intent: 'Not ready yet? Get our FREE 1-page D2C Funnel Checklist.' Capture email → nurture sequence → pitch ₹9 pack in emails 3-4. Recovers 3-8% of abandoning visitors.",
            effort: "Half day",
            type: "dev + copy",
          },
          {
            label: "Add WhatsApp community opt-in",
            detail: "For the Indian D2C audience, a WhatsApp group link ('Join 500+ founders sharing funnel hacks') can have a higher opt-in rate than email. Nurture in group → sell within group.",
            effort: "2-3 hours",
            type: "dev",
          },
        ],
      },
    ],
  },
];

const priorityConfig = {
  CRITICAL: { bg: "#FEE2E2", text: "#991B1B", border: "#FECACA" },
  HIGH: { bg: "#FEF3C7", text: "#92400E", border: "#FDE68A" },
  MEDIUM: { bg: "#DBEAFE", text: "#1E40AF", border: "#BFDBFE" },
};

const typeConfig = {
  copy: { label: "Copy", color: "#22C55E" },
  design: { label: "Design", color: "#F59E0B" },
  dev: { label: "Dev", color: "#8B5CF6" },
  content: { label: "Content", color: "#EC4899" },
  "dev + copy": { label: "Dev+Copy", color: "#6366F1" },
  "copy + dev": { label: "Copy+Dev", color: "#6366F1" },
  "copy + email setup": { label: "Copy+Email", color: "#6366F1" },
  "email + dev": { label: "Email+Dev", color: "#6366F1" },
  "video + design": { label: "Video", color: "#EF4444" },
  outreach: { label: "Outreach", color: "#14B8A6" },
};

export default function CROAudit() {
  const [activePhase, setActivePhase] = useState("phase1");
  const [expandedItems, setExpandedItems] = useState({ "phase1-0": true });
  const [completedFixes, setCompletedFixes] = useState({});

  const toggleItem = (key) => setExpandedItems((p) => ({ ...p, [key]: !p[key] }));
  const toggleFix = (key) => setCompletedFixes((p) => ({ ...p, [key]: !p[key] }));

  const activeData = phases.find((p) => p.id === activePhase);

  const totalFixes = phases.flatMap((p) => p.items.flatMap((item) => item.fixes)).length;
  const doneFixes = Object.values(completedFixes).filter(Boolean).length;

  return (
    <div style={{ minHeight: "100vh", background: "#08080C", color: "#E4E4E7", fontFamily: "'Instrument Sans', 'DM Sans', system-ui, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />

      {/* HEADER */}
      <div style={{ background: "linear-gradient(180deg, #111118 0%, #08080C 100%)", borderBottom: "1px solid #1E1E26", padding: "28px 20px 20px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#F97316", boxShadow: "0 0 10px #F9731688" }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#F97316", letterSpacing: 1.5, textTransform: "uppercase" }}>
              CRO Funnel Audit — Based on Actual Page Screenshots
            </span>
          </div>
          <h1 style={{ fontSize: 24, fontWeight: 700, margin: "6px 0 4px", color: "#FFF", lineHeight: 1.3 }}>
            D2C Funnel Breakdown Pack — Full Optimization Report
          </h1>
          <p style={{ color: "#71717A", fontSize: 13, margin: 0 }}>
            ecom.growthescalators.com • 12 funnel sections analyzed • {totalFixes} actionable fixes
          </p>
          <div style={{ marginTop: 18, background: "#141419", borderRadius: 10, padding: 14, border: "1px solid #1E1E26" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ fontSize: 12, color: "#A1A1AA" }}>Implementation Progress</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#10B981" }}>{doneFixes}/{totalFixes}</span>
            </div>
            <div style={{ height: 5, background: "#1E1E26", borderRadius: 3, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${totalFixes > 0 ? (doneFixes / totalFixes) * 100 : 0}%`, background: "linear-gradient(90deg, #059669, #10B981)", borderRadius: 3, transition: "width 0.3s" }} />
            </div>
          </div>
        </div>
      </div>

      {/* TABS */}
      <div style={{ position: "sticky", top: 0, zIndex: 10, background: "#08080C", borderBottom: "1px solid #1E1E26", padding: "0 20px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex" }}>
          {phases.map((phase) => (
            <button key={phase.id} onClick={() => setActivePhase(phase.id)} style={{
              flex: 1, padding: "13px 12px", background: "none", border: "none",
              borderBottom: activePhase === phase.id ? `2px solid ${phase.color}` : "2px solid transparent",
              color: activePhase === phase.id ? "#FFF" : "#52525B",
              fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", transition: "all 0.2s",
            }}>
              {phase.id === "phase1" ? `⚡ Phase 1: Fix Now (${phase.items.length} sections)` : `🔧 Phase 2: Team Work (${phase.items.length} sections)`}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "20px 20px 80px" }}>
        <div style={{ marginBottom: 20 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: activeData.color, margin: "0 0 4px" }}>{activeData.title}</h2>
          <p style={{ fontSize: 13, color: "#71717A", margin: 0 }}>{activeData.subtitle}</p>
        </div>

        {activeData.items.map((item, idx) => {
          const itemKey = `${activePhase}-${idx}`;
          const isOpen = expandedItems[itemKey];
          const pc = priorityConfig[item.priority];

          return (
            <div key={itemKey} style={{ background: "#111118", border: "1px solid #1E1E26", borderRadius: 10, marginBottom: 12, overflow: "hidden" }}>
              <button onClick={() => toggleItem(itemKey)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", gap: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1, minWidth: 0 }}>
                  <span style={{ fontSize: 9, fontWeight: 700, padding: "2px 7px", borderRadius: 3, background: pc.bg, color: pc.text, border: `1px solid ${pc.border}`, letterSpacing: 0.5, whiteSpace: "nowrap", flexShrink: 0 }}>{item.priority}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#FFF", textAlign: "left", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.section}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#52525B" }}>{item.ref}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <div style={{ width: 40, height: 4, background: "#1E1E26", borderRadius: 2, overflow: "hidden" }}>
                      <div style={{ width: `${item.impact}%`, height: "100%", background: item.impact > 85 ? "#EF4444" : item.impact > 70 ? "#F59E0B" : "#3B82F6", borderRadius: 2 }} />
                    </div>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, fontWeight: 600, color: item.impact > 85 ? "#EF4444" : item.impact > 70 ? "#F59E0B" : "#3B82F6" }}>{item.impact}</span>
                  </div>
                  <span style={{ color: "#52525B", fontSize: 16, transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▾</span>
                </div>
              </button>

              {isOpen && (
                <div style={{ padding: "0 16px 16px", borderTop: "1px solid #1E1E26" }}>
                  <div style={{ margin: "14px 0" }}>
                    <span style={{ fontSize: 9, fontWeight: 700, color: "#F97316", letterSpacing: 1.2, textTransform: "uppercase" }}>What I Observed</span>
                    {item.observations.map((obs, i) => (
                      <div key={i} style={{ display: "flex", gap: 8, padding: "7px 0", borderBottom: i < item.observations.length - 1 ? "1px solid #151520" : "none" }}>
                        <span style={{ color: "#F97316", fontSize: 8, marginTop: 5, flexShrink: 0 }}>●</span>
                        <p style={{ fontSize: 12.5, color: "#A1A1AA", margin: 0, lineHeight: 1.65 }}>{obs}</p>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: 14 }}>
                    <span style={{ fontSize: 9, fontWeight: 700, color: "#10B981", letterSpacing: 1.2, textTransform: "uppercase" }}>Recommended Fixes</span>
                    <div style={{ marginTop: 8 }}>
                      {item.fixes.map((fix, fi) => {
                        const fKey = `${activePhase}-${idx}-${fi}`;
                        const done = completedFixes[fKey];
                        const tc = typeConfig[fix.type] || { label: fix.type, color: "#71717A" };
                        return (
                          <div key={fi} style={{ background: done ? "#05291A22" : "#0A0A10", border: `1px solid ${done ? "#10B98133" : "#1E1E26"}`, borderRadius: 8, padding: 12, marginBottom: 6 }}>
                            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                              <button onClick={() => toggleFix(fKey)} style={{ width: 18, height: 18, borderRadius: 3, border: `1.5px solid ${done ? "#10B981" : "#3F3F46"}`, background: done ? "#10B981" : "transparent", cursor: "pointer", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1, color: "#FFF", fontSize: 11, padding: 0 }}>
                                {done ? "✓" : ""}
                              </button>
                              <div style={{ flex: 1 }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 5, flexWrap: "wrap" }}>
                                  <span style={{ fontSize: 12.5, fontWeight: 600, color: done ? "#10B981" : "#FFF", textDecoration: done ? "line-through" : "none" }}>{fix.label}</span>
                                  <span style={{ fontSize: 8, padding: "2px 5px", borderRadius: 3, background: `${tc.color}18`, color: tc.color, fontWeight: 600 }}>{tc.label}</span>
                                  {fix.effort && <span style={{ fontSize: 8, padding: "2px 5px", borderRadius: 3, background: "#1E1E26", color: "#71717A", fontFamily: "'JetBrains Mono', monospace" }}>{fix.effort}</span>}
                                </div>
                                <p style={{ fontSize: 12, color: "#8B8B94", margin: 0, lineHeight: 1.7, whiteSpace: "pre-line" }}>{fix.detail}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
