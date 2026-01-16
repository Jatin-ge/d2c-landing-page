# D2C Landing Page Implementation Plan

## Goal Description
Build a pixel-perfect replica of the [D2C Breakthrough Gems](https://d2c-breakthrough-gems.lovable.app) landing page, featuring a modern dark-mode aesthetic, sticky CTA button, countdown timer, and a secondary page for a GHL order form.

## User Review Required
> [!NOTE]
> I will use **Vite + React + Tailwind CSS** to ensure a modern, performant, and easily maintainable codebase.

## Proposed Changes

### Project Setup
- [ ] Initialize Vite React project
- [ ] Install Tailwind CSS and verify configuration
- [ ] Install `lucide-react` for icons and `react-router-dom` for navigation

### Design System (Tailwind Config)
- [ ] Define custom colors:
    - `brand-dark`: Deep navy/black background
    - `brand-orange`: `#f97316` (Primary accent)
    - `brand-glow`: Soft blue/purple background glow
- [ ] Configure typography (Inter/Sans-serif)

### [Components]
#### [NEW] `src/components/StickyFooter.jsx`
- Fixed bottom bar containing:
    - Countdown timer (starts at 15:00 or similar)
    - "Get Access" CTA button
    - Visible only on scroll/always visible as per request

#### [NEW] `src/pages/LandingPage.jsx`
- **Hero Section**: Headline, Subheadline, Pricing Badge, CTA.
- **Audience Section**: "Perfect For You If..." cards.
- **Problem Section**: "Does This Sound Familiar?" checklist.
- **Solution Section**: "What If You Didn't Have to Guess?" copy.
- **Value Section**: "What You'll See Inside" features.
- **Testimonials**: Review cards.
- **Comparison Table**: Product vs. Courses vs. Agencies.
- **FAQ**: Accordion list.

#### [NEW] `src/pages/OrderPage.jsx`
- Simple container for the GHL (GoHighLevel) Order Form (iframe or placeholder).
- Back button to return to Landing Page.

### [Assets]
- Use CSS gradients and `lucide-react` icons to replicate the visual style without needing external image assets initially.

## Verification Plan
### Automated Tests
- Build verification: `npm run build`

### Manual Verification
- **Visual**: Verify dark mode theme, orange accents, and glow effects match the reference.
- **Functional**:
    - Click "Get Instant Access" -> Navigates to Order Page.
    - Scroll -> Sticky Footer appears/remains visible.
    - Timer -> Counts down correctly.
