# Teecherz Marketing Website Rebuild - Execution Plan

## Overview
Rebuild www.teecherz.com using Next.js + Tailwind CSS, inspired by the Lanima Webflow template's visual structure, spacing, and layout hierarchy.

---

## Phase 1: Discovery & Analysis

### 1.1 Reference Material Analysis
**Location:** `/Users/kevinchisango/httrack-sites/lanima/lanima-template.webflow.io/home-v1.html`

**Tasks:**
- [ ] Extract section structure from Lanima HTML
- [ ] Document layout patterns (grids, flexbox, spacing)
- [ ] Identify typography scale and hierarchy
- [ ] Map container widths and breakpoints
- [ ] Note color palette and visual rhythm
- [ ] Document component patterns (cards, buttons, CTAs)

**Key Sections Identified in Lanima:**
1. **Navigation/Header** - Logo, menu, search, cart
2. **Hero Section** - Large headline, subtext, CTA button
3. **Category Section** - 3-column grid with category cards
4. **Product Section** - "Recently Released" with product grid
5. **Feature Section** - 4-column benefits (Free Shipping, Returns, etc.)
6. **CTA Section** - Image + content side-by-side
7. **Trending Products** - Another product grid section
8. **Blog Section** - Blog post cards
9. **Brand Logos** - Client/partner logos
10. **Footer** - Newsletter, links, social icons

### 1.2 Teecherz Content Audit
**Source:** www.teecherz.com (needs access or content provided)

**Tasks:**
- [ ] Document all existing pages and sections
- [ ] Extract copy, headlines, CTAs
- [ ] Identify key value propositions
- [ ] List features/benefits to highlight
- [ ] Gather testimonials/reviews if any
- [ ] Document navigation structure
- [ ] Note any special functionality

**Questions to Answer:**
- What does Teecherz do? (Education platform? Teaching tools?)
- Who is the target audience?
- What are the main CTAs?
- Are there product/service listings?
- Is there a blog or resources section?

---

## Phase 2: Design System Setup

### 2.1 Typography System
**Based on Lanima patterns:**
- Hero headings: Large, bold, high contrast
- Section headings: Medium-large with sub-titles
- Body text: Readable, appropriate line-height
- Small text: Labels, captions, metadata

**Implementation:**
- Use Geist Sans (already in project) or select appropriate font
- Define consistent heading sizes (h1-h6)
- Set line-height and letter-spacing scales
- Create utility classes for text styles

### 2.2 Spacing System
**Extract from Lanima:**
- Container max-widths
- Section padding (vertical spacing)
- Grid gaps
- Component internal spacing

**Tailwind Approach:**
- Use standard Tailwind spacing scale (4, 8, 12, 16, 24, 32, 48, 64, 96, 128)
- Define container widths consistently
- Create section wrapper component with consistent padding

### 2.3 Color Palette
**Extract from Lanima:**
- Primary colors
- Text colors (headings, body, muted)
- Background colors
- Accent/CTA colors

**Implementation:**
- Define in Tailwind config or CSS variables
- Ensure sufficient contrast
- Match Teecherz brand colors (if different from Lanima)

### 2.4 Component Patterns
**Reusable patterns to extract:**
- Button styles (primary, secondary)
- Card components
- Section headers (subtitle + title + divider)
- Product cards
- Feature blocks
- CTA sections

---

## Phase 3: Component Architecture

### 3.1 Folder Structure
```
app/
  layout.tsx
  page.tsx
  globals.css
components/
  layout/
    Header.tsx
    Navigation.tsx
    Footer.tsx
  sections/
    Hero.tsx
    CategoryShowcase.tsx
    ProductGrid.tsx
    Features.tsx
    CTA.tsx
    BlogSection.tsx
    BrandLogos.tsx
  ui/
    Button.tsx
    Card.tsx
    Container.tsx
    SectionHeader.tsx
```

### 3.2 Component Design Principles
- **One section = one component**
- **Props-based customization** (no hardcoded content)
- **Semantic HTML** (proper heading hierarchy, landmarks)
- **Accessible** (ARIA labels, keyboard navigation)
- **Mobile-first responsive**

---

## Phase 4: Implementation Strategy

### 4.1 Build Order (Section-by-Section)

**Step 1: Foundation**
1. Update `layout.tsx` with proper metadata
2. Set up design system in `globals.css`
3. Create base UI components (`Container`, `Button`, `SectionHeader`)

**Step 2: Layout Components**
4. Build `Header` component (navigation, logo, mobile menu)
5. Build `Footer` component (links, newsletter, social)

**Step 3: Hero Section**
6. Build `Hero` component
   - Large headline
   - Subtext
   - Primary CTA button
   - Match Lanima spacing and typography

**Step 4: Category/Showcase Section**
7. Build `CategoryShowcase` component
   - 3-column grid (responsive to 1 column on mobile)
   - Category cards with images
   - Hover effects (if in Lanima)

**Step 5: Product/Content Sections**
8. Build `ProductGrid` component
   - Section header (subtitle + title + divider)
   - Responsive grid (4 columns → 2 → 1)
   - Product cards with images, names, prices
   - "View All" CTA

**Step 6: Features Section**
9. Build `Features` component
   - 4-column grid (responsive)
   - Icon + heading + description pattern
   - Match Lanima spacing

**Step 7: CTA Section**
10. Build `CTA` component
    - Image + content side-by-side
    - Headline, description, button
    - Responsive (stack on mobile)

**Step 8: Additional Sections**
11. Build `BlogSection` (if Teecherz has blog)
12. Build `BrandLogos` (if applicable)
13. Build any Teecherz-specific sections

**Step 9: Assembly**
14. Assemble all sections in `app/page.tsx`
15. Ensure proper spacing between sections
16. Test responsive breakpoints

---

## Phase 5: Content Integration

### 5.1 Content Mapping
- Map Teecherz content to Lanima-inspired sections
- Adapt copy to fit Teecherz's voice and messaging
- Replace placeholder images with Teecherz assets
- Update CTAs to match Teecherz goals

### 5.2 Content Strategy
- **Hero:** Main value proposition + primary CTA
- **Categories/Features:** Key product/service areas
- **Products/Services:** Main offerings grid
- **Benefits:** Why choose Teecherz
- **Testimonials:** Social proof (if available)
- **CTA:** Secondary conversion point
- **Footer:** Contact, links, newsletter

---

## Phase 6: Responsive Design

### 6.1 Breakpoint Strategy
**Based on Lanima patterns:**
- Mobile: < 768px (single column, stacked)
- Tablet: 768px - 1024px (2 columns, adjusted spacing)
- Desktop: > 1024px (full grid, generous spacing)

### 6.2 Mobile-First Approach
- Start with mobile layout
- Add tablet/desktop enhancements
- Test on actual devices
- Ensure touch targets are adequate

---

## Phase 7: Polish & Optimization

### 7.1 Visual Refinement
- Match spacing exactly to Lanima reference
- Ensure typography hierarchy is clear
- Verify color contrast
- Add subtle animations/transitions (if in Lanima)

### 7.2 Performance
- Optimize images (Next.js Image component)
- Lazy load below-fold content
- Minimize CSS bundle
- Ensure fast load times

### 7.3 Accessibility
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation
- Screen reader testing
- Color contrast compliance

---

## Phase 8: Testing & Review

### 8.1 Cross-Browser Testing
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

### 8.2 Responsive Testing
- Multiple device sizes
- Landscape/portrait orientations
- Touch interactions

### 8.3 Content Review
- Proofread all copy
- Verify all links work
- Check CTAs point to correct destinations
- Ensure images load correctly

---

## Phase 9: Deployment Preparation

### 9.1 Final Checks
- [ ] All sections render correctly
- [ ] No console errors
- [ ] All images optimized
- [ ] Metadata updated (SEO)
- [ ] Analytics/tracking added (if needed)

### 9.2 Build & Test
- Run `npm run build`
- Test production build locally
- Fix any build errors
- Verify static generation works

---

## Key Constraints & Rules

### ✅ DO:
- Use Lanima as **visual/structure reference only**
- Build clean React components
- Use Tailwind utility classes
- Maintain consistent spacing scale
- One section = one component
- Semantic HTML
- Mobile-first responsive

### ❌ DON'T:
- Copy Webflow class names
- Use Webflow JavaScript
- Copy Webflow markup directly
- Use inline styles
- Use arbitrary Tailwind values (unless necessary)
- Redesign unless asked

---

## Questions to Resolve Before Starting

1. **Content Access:** How do we access www.teecherz.com content? (Screenshot, content doc, or live site access?)

2. **Branding:** Should we use Teecherz brand colors or match Lanima's palette?

3. **Images:** Do we have Teecherz images/assets, or use placeholders initially?

4. **Functionality:** Any interactive features needed? (Forms, modals, animations?)

5. **Pages:** Is this just the homepage, or multiple pages?

6. **Content Priority:** Which sections are most important for Teecherz?

---

## Estimated Timeline

- **Phase 1-2:** 2-3 hours (Analysis + Design System)
- **Phase 3-4:** 4-6 hours (Component Development)
- **Phase 5:** 2-3 hours (Content Integration)
- **Phase 6-7:** 2-3 hours (Responsive + Polish)
- **Phase 8-9:** 1-2 hours (Testing + Deployment Prep)

**Total:** ~12-17 hours of focused development

---

## Next Steps

1. **Review this plan** - Confirm approach and priorities
2. **Resolve questions** - Get content access and clarify requirements
3. **Begin Phase 1** - Start analyzing Lanima structure in detail
4. **Iterate** - Build section-by-section, review as we go

---

## Notes

- This plan is flexible and can be adjusted based on:
  - Content availability
  - Specific Teecherz requirements
  - Design preferences
  - Timeline constraints

- We'll work section-by-section, so you can review progress incrementally.
