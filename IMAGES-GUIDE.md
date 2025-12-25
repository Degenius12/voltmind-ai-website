# Image Assets Guide for VoltMind AI Website

## 📁 Recommended Folder Structure

Create an `images/` folder in your project root with the following structure:

```
images/
│
├── logo.png                    # Main company logo (transparent PNG)
├── logo-white.png              # White version for dark backgrounds
├── favicon.png                 # Browser tab icon (32x32 or 64x64)
│
├── team/                       # Team member photos
│   ├── alex-stevens.jpg
│   ├── maria-chen.jpg
│   └── james-park.jpg
│
├── clients/                    # Client logos
│   ├── techcorp.png
│   ├── global-solutions.png
│   ├── innovation-labs.png
│   └── enterprise-pro.png
│
├── case-studies/              # Case study featured images
│   ├── techstore-hero.jpg
│   ├── healthfirst-hero.jpg
│   └── precision-parts-hero.jpg
│
├── og-images/                 # Social media share images
│   ├── og-home.jpg           # Homepage (1200x630px)
│   ├── og-solutions.jpg
│   ├── og-about.jpg
│   └── og-contact.jpg
│
└── icons/                     # Custom icons (if not using SVG inline)
    ├── service-ai.svg
    ├── service-automation.svg
    ├── service-consulting.svg
    └── service-gbp.svg
```

## 🎨 Image Specifications

### Logo
- **Format:** PNG with transparent background
- **Size:** 300-400px width recommended
- **White version:** For dark backgrounds (footer)
- **Color:** Use your brand colors

### Favicon
- **Format:** PNG or ICO
- **Sizes:** 16x16, 32x32, 64x64, 128x128, 256x256
- **Tool:** [Favicon Generator](https://realfavicongenerator.net/)

### Team Photos
- **Format:** JPG (for photographs)
- **Size:** 500x500px (square)
- **Style:** Professional headshots
- **Background:** Consistent (all on same color or similar)
- **Optimization:** Compress to under 100KB each

### Client Logos
- **Format:** PNG with transparent background
- **Size:** 200-300px width
- **Style:** Grayscale or monochrome for uniformity
- **Background:** Transparent

### Case Study Images
- **Format:** JPG or WebP
- **Size:** 1200x675px (16:9 aspect ratio)
- **Quality:** High quality but compressed
- **Content:** Screenshots, product photos, or custom graphics

### Open Graph Images (Social Sharing)
- **Format:** JPG
- **Size:** 1200x630px (Facebook/LinkedIn standard)
- **Content:** Page title + brand elements + compelling visual
- **Text:** Large, readable text
- **Safe zone:** Keep important content in center 1200x600px

## 🔧 Image Optimization

### Recommended Tools

1. **TinyPNG** (https://tinypng.com/)
   - Compress JPG and PNG
   - Reduces file size by 50-80%

2. **Squoosh** (https://squoosh.app/)
   - Convert to WebP format
   - Advanced compression options

3. **ImageOptim** (Mac)
   - Batch optimization
   - Removes metadata

4. **GIMP** (Free Photoshop alternative)
   - Resize and edit images
   - Export at optimal quality

### Optimization Checklist
- [ ] Resize images to exact dimensions needed
- [ ] Compress images (aim for <200KB per image)
- [ ] Convert to WebP where supported
- [ ] Remove EXIF metadata
- [ ] Use progressive JPEG format
- [ ] Test loading speed

## 📝 How to Add Images to Website

### Logo
Replace the SVG in all HTML files' header:

```html
<!-- Current: SVG placeholder -->
<a href="index.html" class="header__logo">
  <svg>...</svg>
  VoltMind AI
</a>

<!-- Replace with: -->
<a href="index.html" class="header__logo">
  <img src="images/logo.png" alt="VoltMind AI" height="40">
  VoltMind AI
</a>
```

### Favicon
Add to `<head>` of all HTML files:

```html
<link rel="icon" type="image/png" sizes="32x32" href="images/favicon.png">
<link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png">
```

### Team Photos
In `about.html`, replace gradient placeholders:

```html
<!-- Current: Gradient placeholder -->
<div style="...gradient...">AS</div>

<!-- Replace with: -->
<img src="images/team/alex-stevens.jpg"
     alt="Alex Stevens - CEO"
     style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover;">
```

### Client Logos
In `index.html`, replace text placeholders:

```html
<!-- Current: Text placeholder -->
<div>TechCorp Inc.</div>

<!-- Replace with: -->
<img src="images/clients/techcorp.png"
     alt="TechCorp Inc."
     style="max-width: 150px; height: auto; opacity: 0.6;">
```

### Case Study Images
Add featured images to case studies:

```html
<div style="margin-bottom: 48px;">
  <img src="images/case-studies/techstore-hero.jpg"
       alt="TechStore E-commerce Platform"
       style="width: 100%; border-radius: 12px; box-shadow: var(--shadow-lg);">
</div>
```

### Open Graph Images
Add to `<head>` of each page:

```html
<!-- Open Graph / Facebook -->
<meta property="og:image" content="https://voltmindai.com/images/og-images/og-home.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://voltmindai.com/images/og-images/og-home.jpg">
```

## 🎯 Image Best Practices

### For Performance
1. **Use appropriate formats:**
   - JPG for photos
   - PNG for logos/graphics with transparency
   - WebP for modern browsers (with JPG fallback)
   - SVG for icons and simple graphics

2. **Responsive images:**
```html
<img src="image-small.jpg"
     srcset="image-small.jpg 400w,
             image-medium.jpg 800w,
             image-large.jpg 1200w"
     sizes="(max-width: 768px) 100vw, 50vw"
     alt="Description">
```

3. **Lazy loading:**
```html
<img src="image.jpg" loading="lazy" alt="Description">
```

### For SEO
1. **Always use descriptive alt text:**
   - ✅ `alt="Team meeting discussing AI implementation strategy"`
   - ❌ `alt="image1.jpg"`

2. **Use descriptive filenames:**
   - ✅ `custom-ai-solution-dashboard.jpg`
   - ❌ `IMG_1234.jpg`

3. **Include captions where appropriate**

### For Accessibility
1. **Decorative images:** Use `alt=""` (empty)
2. **Informative images:** Describe content
3. **Complex images:** Provide detailed description nearby
4. **Text in images:** Avoid if possible, or repeat in alt text

## 🖼️ Where to Get Images

### Stock Photos
- **Unsplash** (https://unsplash.com/) - Free, high quality
- **Pexels** (https://pexels.com/) - Free stock photos
- **Pixabay** (https://pixabay.com/) - Free images

### For Team Photos
- Professional photographer
- Consistent lighting and background
- Business casual or business formal attire
- Same crop and orientation

### For Custom Graphics
- **Canva** (https://canva.com/) - Easy design tool
- **Figma** (https://figma.com/) - Professional design
- Hire a designer on Fiverr or Upwork

### For Icons
- Already using inline SVG (no images needed)
- **Font Awesome** - Icon library
- **Heroicons** - Beautiful hand-crafted SVG icons
- **Lucide** - Icon library

## 🚀 Quick Setup Steps

1. **Create folders:**
```bash
mkdir -p images/team images/clients images/case-studies images/og-images images/icons
```

2. **Add your images** to appropriate folders

3. **Optimize all images** using TinyPNG or similar

4. **Update HTML files** with image paths

5. **Test on localhost** to ensure all images load

6. **Deploy** to production

## ✅ Image Checklist

Before launch, verify:

- [ ] Logo looks crisp on all pages
- [ ] Logo has white version for dark footer
- [ ] Favicon appears in browser tab
- [ ] All team photos are same size and style
- [ ] Client logos are consistent style (grayscale recommended)
- [ ] All images have descriptive alt text
- [ ] Images are optimized (compressed)
- [ ] No broken image links
- [ ] Images load quickly on mobile
- [ ] Open Graph images for all main pages
- [ ] Images look good on retina displays

## 🎨 Image Design Tips

### Professional Brand Consistency
- Use same photo style across all team members
- Client logos should be monochrome or grayscale
- Maintain consistent spacing and sizing
- Use your brand colors in custom graphics

### Trust & Credibility
- Use real photos, not obvious stock photos
- Show real products/dashboards (or realistic mockups)
- Include recognizable client logos (with permission)
- Professional quality photos only

### For B2B Audience
- Clean, modern aesthetic
- Professional settings
- Avoid overly casual or playful imagery
- Focus on business value and results

---

**Need Help?**
If you need assistance with image preparation or optimization, consider hiring a designer or using the tools mentioned above.

For questions about specific image requirements, refer to each section above.