# General Sans Font Setup

## Overview
The website is configured to use **General Sans**, a premium sans-serif font designed by Frode Helland. This font provides a clean, modern, and premium aesthetic perfect for furniture and home decor websites.

## Font Files Required

To use General Sans, you need to add the following font files to the `/public/fonts/` directory:

### Required Files:
1. `GeneralSans-Regular.woff2` (weight: 400)
2. `GeneralSans-Regular.woff` (fallback)
3. `GeneralSans-Medium.woff2` (weight: 500)
4. `GeneralSans-Medium.woff` (fallback)
5. `GeneralSans-Semibold.woff2` (weight: 600)
6. `GeneralSans-Semibold.woff` (fallback)
7. `GeneralSans-Bold.woff2` (weight: 700)
8. `GeneralSans-Bold.woff` (fallback)

## Directory Structure

```
teecherz-rebuild/
  └── public/
      └── fonts/
          ├── GeneralSans-Regular.woff2
          ├── GeneralSans-Regular.woff
          ├── GeneralSans-Medium.woff2
          ├── GeneralSans-Medium.woff
          ├── GeneralSans-Semibold.woff2
          ├── GeneralSans-Semibold.woff
          ├── GeneralSans-Bold.woff2
          └── GeneralSans-Bold.woff
```

## How to Add Font Files

1. **Download General Sans:**
   - Visit: https://freebiesbug.com/free-fonts/general-sans/
   - Or search for "General Sans font download"
   - Ensure you have the commercial license if needed for your project

2. **Extract and Convert (if needed):**
   - If you have TTF/OTF files, convert them to WOFF2 and WOFF formats
   - Use tools like:
     - [Transfonter](https://transfonter.org/)
     - [Font Squirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator)

3. **Place Files:**
   - Create the `/public/fonts/` directory if it doesn't exist
   - Copy all font files to `/public/fonts/`

4. **Verify:**
   - The font will automatically load once files are in place
   - Inter font will be used as fallback until General Sans files are added

## Font Weights Used

- **400 (Regular)**: Body text, paragraphs
- **500 (Medium)**: Product names, navigation links
- **600 (Semibold)**: Section subtitles, category subtitles, buttons
- **700 (Bold)**: Headings, section titles, category titles, hero text

## Fallback Fonts

If General Sans files are not found, the website will automatically fall back to:
1. Inter (via Next.js font optimization)
2. System fonts (-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, etc.)

## Performance

- Font files use `font-display: swap` for optimal loading
- WOFF2 format is preferred (smaller file size)
- WOFF format is provided as fallback for older browsers
- Fonts are loaded only when needed

## License

**Important:** Ensure you have the proper license for General Sans:
- Personal use: Usually free
- Commercial use: May require a license
- Check the font license before using in production

---

**Note:** The website is already configured to use General Sans. Simply add the font files to `/public/fonts/` and the font will automatically be applied throughout the site.
