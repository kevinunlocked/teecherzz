# Hero Image Setup

The hero section now uses an image file named: `hero-living-room.jpg`

**Action Required:**
1. Save the provided living room image to: `public/Shop - Teecherz Home & Office/hero-living-room.jpg`
2. The image should show a modern living room with dark gray sofas, coffee table, and decorative elements

**Current Status:**
- Hero component updated to use the new image
- CTA section updated to use the new image (replaced imgi_1_webbanner1-scaled.jpg)
- All image components now have `unoptimized` prop to fix visibility issues

**Image Visibility Fix:**
- Added `unoptimized` prop to all Next.js Image components
- This ensures images load immediately without optimization delays
