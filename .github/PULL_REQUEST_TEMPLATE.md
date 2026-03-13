# Merge Checklist: v2-optimizations → main

> Complete ALL items before merging. This is a live production funnel.

## Build
- [ ] `npm run build` completes without errors
- [ ] No console errors or warnings in the browser

## Visual QA
- [ ] Reviewed all sections on desktop (1440px)
- [ ] Reviewed all sections on mobile (375px)
- [ ] Reviewed all sections on tablet (768px)
- [ ] No broken layouts, overlapping elements, or missing images
- [ ] Animations and transitions work correctly

## Conversion Elements
- [ ] All CTAs are visible, clickable, and link to the correct destination
- [ ] Forms submit correctly
- [ ] Trust signals (testimonials, badges, guarantees) are displaying properly
- [ ] Pricing section is accurate and up to date

## Tracking
- [ ] Google Tag Manager events fire correctly for key actions (CTA clicks, form submits)
- [ ] No duplicate or missing GTM events

## Regression Check
- [ ] Everything that worked on `main` still works the same way
- [ ] No unintended changes outside the scope of this PR (review the diff)

## What changed in this PR?
<!-- Briefly describe what was optimized or changed -->

## Why is it safe to merge now?
<!-- Explain what was tested and how you verified it works -->
