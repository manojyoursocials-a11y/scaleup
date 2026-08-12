# Scaleup Unisex Salon — Website

A polished, editorial-luxury salon website built with plain **HTML, CSS, and JavaScript**.
No framework, no build step, no dependencies — open `index.html` and it runs.

Recreates the structure of `scaleup-salon-eux-demo.vercel.app` with an upgraded
design system, warm palette, refined typography (Cormorant Garamond + Inter + JetBrains Mono),
animated reveals, gallery filter, testimonial scroller, and a working contact-to-WhatsApp form.

---

## 📁 File Structure

```
scaleup-salon/
├── index.html              ← Homepage (hero, about, textures, services, gallery preview, testimonials, CTA)
├── services.html           ← Full service list with pricing
├── gallery.html            ← Filterable gallery (All / Bridal / Hair Colour / Curly / Men's)
├── about.html              ← Story, timeline, principles, founders
├── contact.html            ← Booking form + location info
│
├── css/
│   └── styles.css          ← All styling (design tokens, components, responsive)
│
├── js/
│   └── main.js             ← Nav toggle, scroll reveals, gallery filter, testimonial controls, form
│
└── images/                 ← All photos (placeholders included; swap with real photos)
    ├── README.md           ← Lists every required filename + image specs
    ├── about.png
    ├── salon-wide.png
    ├── gallery.png
    ├── scale curly.jpg
    ├── scale wavy.jpg
    ├── scale straight.jpg
    ├── services-hair.png
    ├── services-nails.png
    ├── services-facial.png
    ├── bridal 1.jpg, bridal 2.jpg, bridal 3.jpg
    ├── color 1.jpg, color 2.jpg, color 3.jpg
    ├── men 1.jpg, men 2.jpg, men 3.jpg, men 4.jpg, men 5.jpg
    └── venisha co founder.jpg
```

---

## 🚀 Run Locally

**Option 1 — Just open the file:**
Double-click `index.html`. Done.

**Option 2 — Local server** (recommended; required if you want clean URLs):
```bash
# Python 3
cd scaleup-salon
python3 -m http.server 8000
# then open http://localhost:8000

# Or with Node
npx serve .
```

---

## 🌐 Deploy

### Vercel (one-command)
```bash
npm install -g vercel
cd scaleup-salon
vercel
```

### Netlify
Drag the entire `scaleup-salon` folder onto https://app.netlify.com/drop — done.

### GitHub Pages
1. Push the folder to a GitHub repo.
2. Settings → Pages → Source: `main` branch, `/` root → Save.
3. Your site will be at `https://<username>.github.io/<repo>/`.

### Cloudflare Pages, Render, Surge, Firebase Hosting
All work the same — static files, no build step.

---

## 🎨 Customising

### Change colours
Open `css/styles.css` and edit the `:root` block at the top:
```css
:root {
  --cream:      #f7f1ea;    /* background */
  --ink:        #1a1614;    /* primary text */
  --blush-deep: #b87253;    /* accent — buttons, links, italics */
  ...
}
```

### Change fonts
The Google Fonts link is in the `<head>` of every HTML file. Replace
`Cormorant+Garamond` (serif display) and `Inter` (sans body) with whatever you want.

### Update content
Each HTML file is a single document — find the section you want and edit the text directly.
No templating, no JS bundles to rebuild.

### Replace placeholder images
The `images/` folder currently contains **generated placeholder images**.
See `images/README.md` for the exact filenames the site expects.
Drop in real photos using the same filenames and refresh — that's it.

### Wire up the booking form
The contact form currently:
1. Collects name, phone, email, service, date, time, notes.
2. Builds a WhatsApp pre-filled message and opens `wa.me/919003158542`.

To send to email or a backend instead, edit `js/main.js` (the `contact-form` submit handler).
Easy options:
- **Formspree** — add `action="https://formspree.io/f/YOUR_ID"` to the `<form>` tag.
- **Netlify Forms** — add `netlify` and `name="booking"` attributes; works automatically.
- **Custom backend** — replace the handler with a `fetch()` POST to your API.

---

## ✨ Features

- Fully responsive (mobile-first, breakpoints at 500 / 860 px)
- Sticky glass-blur navigation
- Scroll-triggered reveal animations (IntersectionObserver)
- Filterable gallery (data-attribute driven, no library)
- Horizontal scroll-snap testimonial carousel with prev/next controls
- WhatsApp-integrated booking form with confirmation feedback
- Refined editorial typography (serif display + clean sans + mono accents)
- Warm cream / blush / terracotta palette tuned for salon brand
- Accessible: semantic HTML, keyboard-friendly, alt text everywhere

---

## 📞 Contact details in the site

- **Phone**: +91 90031 58542
- **Address**: New No 18, Old No 26, 2nd Floor, Hoppman Street, Ramapuram, Chennai 600089
- **Hours**: Mon–Sat 10AM–8PM · Sun 10AM–6PM
- **Instagram**: @scaleup_salon
- **WhatsApp**: wa.me/919003158542

To change any of these, do a global find-and-replace across the five HTML files.

---

## License
Free to use, modify, and deploy for the Scaleup Unisex Salon project.
