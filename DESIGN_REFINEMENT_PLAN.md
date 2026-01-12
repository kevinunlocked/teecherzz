# Design Refinement Plan - Matching Lanima Template

Based on the uploaded screenshots, here's a comprehensive plan to refine the design to match the Lanima template patterns.

## Key Design Patterns Identified from Screenshots

### 1. Category Showcase Section
**Current:** 4 categories in 4-column grid
**Expected:** 3 categories in 3-column grid with:
- Colored backgrounds (blue, orange, white/gray)
- Product images on the right side of each card
- Text on the left side
- Animated divider that expands on hover
- More prominent styling

**Action Items:**
- [ ] Reduce to 3 categories (remove Office from showcase, keep it separate)
- [ ] Add product images to category cards
- [ ] Restructure layout: text left, image right
- [ ] Enhance colored backgrounds (more vibrant)
- [ ] Improve divider animation
- [ ] Match exact spacing and typography

### 2. Services/Features Section
**Current:** 4-column grid with icons and text
**Expected:** 
- Cleaner icon presentation
- Better spacing between items
- Icons should be more prominent (SVG icons, not emojis)
- Section title: "Order now! We're at your Absolute service" (already correct)
- More refined typography

**Action Items:**
- [ ] Replace emoji icons with proper SVG icons
- [ ] Improve icon container styling
- [ ] Refine spacing and alignment
- [ ] Match exact text styling from Lanima

### 3. CTA Section ("Create Your Dream Space")
**Current:** Image and content side-by-side
**Expected:**
- Image on LEFT side (currently might be wrong order)
- Content on RIGHT side
- More prominent styling
- Better image presentation
- Button styling matches Lanima

**Action Items:**
- [ ] Verify image/content order (should be image left, content right)
- [ ] Improve image styling and presentation
- [ ] Refine typography hierarchy
- [ ] Match button styling exactly

### 4. Product Grid Sections
**Current:** Basic product cards
**Expected:**
- Section headers with "RECENTLY RELEASED" subtitle
- "Latest Collection" title with divider line
- Product cards with better image presentation
- Price formatting (e.g., "$ 26.00 USD")
- Strikethrough prices for discounts
- "View All Products" button styling

**Action Items:**
- [ ] Refine section header styling (subtitle + title + divider)
- [ ] Improve product card design
- [ ] Better image aspect ratios
- [ ] Price formatting to match exactly
- [ ] Button styling refinement

### 5. Footer Section
**Current:** 4-column layout
**Expected:**
- Newsletter signup on left with email input
- Social media icons (Twitter, Facebook, YouTube, Instagram)
- Three columns: Store, Company, Service
- Bottom section with copyright and links
- Dark background with white text
- Better spacing and typography

**Action Items:**
- [ ] Restructure footer layout to match Lanima
- [ ] Add newsletter form with proper styling
- [ ] Add social media icons (SVG)
- [ ] Refine column structure
- [ ] Improve bottom footer section
- [ ] Match exact spacing and typography

### 6. Hero Section
**Current:** Centered text with buttons
**Expected:**
- Large, bold headline
- Subtext paragraph
- Single CTA button (secondary style)
- Generous spacing
- Clean, minimal design

**Action Items:**
- [ ] Verify hero styling matches Lanima
- [ ] Refine typography scale
- [ ] Ensure proper spacing

### 7. Blog Section (If Needed)
**Current:** Not present
**Expected:**
- "READ OUR BLOG" subtitle
- "The Future of Home Decor" title
- 2-column blog post grid
- Blog cards with images, dates, titles
- "Read More" links with arrow icons
- "View All Blogs" button

**Action Items:**
- [ ] Create BlogSection component
- [ ] Match Lanima blog card design
- [ ] Add proper styling and layout

### 8. Brand Logos Section (If Needed)
**Current:** Not present
**Expected:**
- Horizontal row of brand/client logos
- Even spacing
- Grayscale or colored logos

**Action Items:**
- [ ] Create BrandLogos component (if applicable)
- [ ] Add if Teecherz has partner/client logos

## Detailed Refinement Tasks

### Phase 1: Category Showcase Refinement
1. **Reduce to 3 categories:**
   - Dining Room (blue background)
   - Living Room (orange background)
   - Bedroom (gray/white background)
   - Move Office to separate section

2. **Restructure card layout:**
   - Text content on left
   - Product image on right
   - Colored background fills entire card
   - Divider animation on hover

3. **Add product images:**
   - Source appropriate furniture images
   - Position images on right side
   - Ensure proper aspect ratios

### Phase 2: Services Section Refinement
1. **Replace emoji icons:**
   - Create or source SVG icons
   - Free Shipping icon (shopping bag)
   - Returns icon (circular arrow)
   - 24 Hours Service icon (clock with 24)
   - Fast Delivery icon (truck with checkmark)

2. **Improve styling:**
   - Better icon containers
   - Refined typography
   - Improved spacing

### Phase 3: CTA Section Refinement
1. **Verify layout order:**
   - Image on left
   - Content on right
   - Responsive stacking on mobile

2. **Enhance styling:**
   - Better image presentation
   - Refined typography
   - Button styling

### Phase 4: Product Grid Refinement
1. **Section headers:**
   - "RECENTLY RELEASED" subtitle (uppercase, small)
   - "Latest Collection" title (large, bold)
   - Divider line below title

2. **Product cards:**
   - Better image presentation
   - Price formatting: "$ XX.XX USD"
   - Strikethrough for original prices
   - Hover effects

### Phase 5: Footer Refinement
1. **Restructure layout:**
   - Newsletter on left
   - Social icons in top right
   - Three columns: Store, Company, Service
   - Bottom section with copyright

2. **Add elements:**
   - Newsletter form with email input
   - Social media icons (SVG)
   - Proper link structure

### Phase 6: Typography & Spacing Redesign

#### Typography System (Based on Lanima Screenshots)

**Hero Typography:**
- Hero Heading: Very large, bold, high contrast
- Hero Text: Medium-large, readable line-height
- Font weight: Bold for headings, regular for body

**Section Headers:**
- Subtitle: Small, uppercase, letter-spaced (e.g., "RECENTLY RELEASED")
  - Font size: ~12-14px
  - Letter spacing: 0.1-0.15em
  - Font weight: Semibold (600)
- Title: Large, bold (e.g., "Latest Collection")
  - Font size: ~32-48px (responsive)
  - Font weight: Bold (700)
  - Line height: Tight (1.1-1.2)

**Category Cards:**
- Subtitle: Small, uppercase (e.g., "MODERN CHAIR")
  - Font size: ~11-12px
  - Letter spacing: Wide
- Category Name: Large, bold
  - Font size: ~24-32px
  - Font weight: Bold

**Product Cards:**
- Product Name: Medium, semibold
  - Font size: ~16-18px
  - Font weight: Semibold (600)
- Price: Medium, bold
  - Font size: ~16px
  - Font weight: Bold
- Original Price: Smaller, strikethrough
  - Font size: ~14px
  - Color: Muted

**Body Text:**
- Paragraph: Readable, comfortable line-height
  - Font size: ~16-18px
  - Line height: 1.6-1.8
  - Color: Muted (70% opacity)

**Navigation:**
- Links: Small, uppercase or regular
  - Font size: ~14px
  - Font weight: Medium (500) or Semibold
  - Letter spacing: Slight for uppercase

**Footer:**
- Headings: Small, uppercase
  - Font size: ~12-14px
  - Letter spacing: Wide
- Links: Small, regular
  - Font size: ~14px
  - Color: Muted

#### Typography Implementation Tasks:
- [ ] Define typography scale in globals.css
- [ ] Create typography utility classes
- [ ] Update all headings to match Lanima sizes
- [ ] Update body text styling
- [ ] Update subtitle styling (uppercase, letter-spaced)
- [ ] Update product card typography
- [ ] Update navigation typography
- [ ] Update footer typography
- [ ] Ensure consistent font weights throughout

#### Spacing System:
1. **Match Lanima spacing:**
   - Section padding: Generous vertical spacing
   - Grid gaps: Consistent spacing between items
   - Component internal: Balanced padding
   - Container padding: Responsive horizontal padding

### Phase 7: Color Refinement
1. **Category card colors:**
   - Blue: More vibrant blue for Dining
   - Orange: More vibrant orange for Living
   - Gray: Clean gray/white for Bedroom

2. **Ensure consistency:**
   - Teecherz red (#DC2626) for accents
   - Proper contrast ratios
   - Consistent color usage

## Implementation Priority

### High Priority (Core Visual Match)
1. Category Showcase - 3 items with images and colored backgrounds
2. Services Section - SVG icons and refined styling
3. Footer - Restructure to match Lanima layout
4. Product Grid - Section headers and card styling

### Medium Priority (Polish)
5. CTA Section - Layout verification and styling
6. Typography - Match exact sizes and weights
7. Spacing - Match exact padding and gaps

### Low Priority (Enhancements)
8. Blog Section - If needed
9. Brand Logos - If applicable
10. Animations - Smooth transitions and hover effects

## Next Steps

1. **Start with Category Showcase** - Most visually distinct
2. **Refine Services Section** - Icon replacement
3. **Update Footer** - Major layout changes
4. **Polish Product Grids** - Section headers and styling
5. **Verify CTA Section** - Layout and styling
6. **Final Typography & Spacing** - Match exactly

---

**Note:** This plan focuses on matching the Lanima template's visual design patterns while maintaining the Teecherz content and brand colors.
