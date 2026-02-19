# കട്ടിടീച്ചേഷ്ണ - കട്ടി പരിശീലനം & സൃഷ്ടി

**[English]** Photography | Music | Tutoring | Gardening - from Palakkad, Kerala

---

## 📖 **About KuttyTeachers**

കട്ടിടീച്ചേഷ്ണ is a personal portfolio & service platform featuring:

- 📷 **Photography** - Nature, portraits, school photography
- 🎹 **Music** - Piano covers, original compositions, tutorials
- 📚 **Tutoring** - Personal coaching in Math, Science, English, Programming
- 🌿 **Gardening** - Home gardening tips, plant care, organic farming

All from Palakkad, Kerala 🌱

---

## 🚀 **Quick Setup**

### 1. Clone & Setup
```bash
git clone https://github.com/niharsona/kuttyteachers.git
cd kuttyteachers
```

### 2. Update config.json
Edit `config.json` with your details:
```json
{
  "site": {
    "email": "your-email@example.com",
    "phone": "+91-YOUR-NUMBER"
  },
  "socialMedia": {
    "instagram": {
      "url": "https://instagram.com/your-handle",
      "enabled": true
    },
    "whatsapp": {
      "url": "https://wa.me/919XXXXXXXXXX",
      "enabled": true
    }
  }
}
```

### 3. Open Locally
Use a simple HTTP server:
```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server
```

Then open `http://localhost:8000`

### 4. Deploy to GitHub Pages
- Go to Settings → Pages
- Select `main` branch, `/root` folder
- Your site will be live at: `https://username.github.io/kuttyteachers`

---

## 📁 **Folder Structure**

```
kuttyteachers/
├── config.json                    ← ✨ MAIN CONFIG FILE
├── index.html                     ← Home page
│
├── pages/
│   ├── photography.html           ← Photography gallery
│   ├── gardening.html            ← Plant gallery
│   ├── piano.html                ← Music/Piano page
│   ├── tutoring.html             ← Tutoring courses
│   └── about.html                ← About page
│
├── css/
│   ├── common.css                ← ✨ Shared styles (header, footer, nav)
│   ├── photography.css           ← Photography page specific
│   ├── gardening.css             ← Gardening page specific
│   ├── piano.css                 ← Piano page specific
│   ├── tutoring.css              ← Tutoring page specific
│   └── about.css                 ← About page specific
│
├── js/
│   ├── common.js                 ← ✨ Shared functionality (header/footer loader)
│   ├── photography.js            ← Photography page logic
│   ├── gardening.js              ← Gardening page logic
│   ├── piano.js                  ← Piano page logic
│   └── tutoring.js               ← Tutoring page logic
│
├── data/
│   ├── plants-data.json          ← Plant information (with images & videos)
│   ├── photography-data.json     ← Photography (with images & videos)
│   ├── piano-data.json           ← Music pieces (with audio & videos)
│   └── tutoring-data.json        ← Courses, packages, testimonials
│
└── assets/
    ├── images/
    │   ├── logo.png              ← Site logo
    │   ├── photography/          ← Your photos
    │   ├── plants/               ← Plant photos (organized by plant name)
    │   └── testimonials/         ← Student photos
    │
    └── videos/
        ├── photography/          ← Photography tips videos
        ├── plants/               ← Plant care videos
        ├── piano/                ← Music tutorials
        └── tutoring/             ← Tutorial videos
```

---

## ✨ **Key Features**

### 🔄 ONE-FILE UPDATE SYSTEM
Edit `config.json` to update:
- ✅ Social media links (appears everywhere)
- ✅ Logo image
- ✅ Email & phone
- ✅ Navigation menu
- ✅ Site colors & fonts

All pages update automatically!

### 📱 RESPONSIVE DESIGN
- Desktop, tablet, mobile friendly
- Hamburger menu for mobile
- Optimized images

### 🎬 VIDEO SUPPORT
Every project can have videos:
```json
{
  "id": "plant-name",
  "images": ["..."],
  "video": "assets/videos/plants/care-tips.mp4",
  "videoTitle": "Care Instructions"
}
```

### ♿ ACCESSIBLE
- Malayalam & English support
- Semantic HTML
- Screen reader friendly
- Good color contrast

---

## 🖼️ **Adding Content**

### Add a Plant
Edit `data/plants-data.json`:
```json
{
  "id": "basil",
  "category": "herbs",
  "name": "കരിമലങ്ങ",
  "scientificName": "Ocimum basilicum",
  "description": "വളരെ സുഗന്ധമുള്ള ചെടി",
  "climate": "വെഷ്ട സമയാവസ്ഥ",
  "soil": "നന്നായ ഡ്രെയിനേജ്",
  "watering": "ദിവസംതോറും",
  "sunlight": "പൂർണ സൂര്യപ്രകാശം",
  "harvestTime": "1.5 മാസം",
  "images": [
    "assets/images/plants/basil/basil-1.jpg",
    "assets/images/plants/basil/basil-2.jpg",
    "assets/images/plants/basil/basil-3.jpg"
  ],
  "video": "assets/videos/plants/basil-care.mp4",
  "videoTitle": "കരിമലങ്ങ പരിചരണം"
}
```

### Add a Photo
Edit `data/photography-data.json`:
```json
{
  "id": "sunset-portrait",
  "category": "portrait",
  "title": "സൂര്യാസ്തമയ പ്രതിരൂപം",
  "location": "പാലക്കാട് കുന്ന്",
  "images": [
    "assets/images/photography/sunset-1.jpg",
    "assets/images/photography/sunset-2.jpg"
  ],
  "video": "assets/videos/photography/sunset-tips.mp4",
  "videoTitle": "സൂര്യാസ്തമയ ഫോട്ടോഗ്രാഫി ടിപ്സ്"
}
```

---

## 🎨 **Customization**

### Change Colors
Edit `config.json` → `colors` section:
```json
"colors": {
  "primaryGreen": "#2d6a4f",
  "forestGreen": "#40916c",
  "leafGreen": "#52b788"
}
```

### Change Fonts
Edit `config.json` → `fonts` section:
```json
"fonts": {
  "primary": "'Inter', system-ui, sans-serif",
  "display": "'Syne', sans-serif",
  "malayalam": "'Noto Sans Malayalam', sans-serif"
}
```

### Update Social Links
Edit `config.json` → `socialMedia`:
```json
"instagram": {
  "url": "https://instagram.com/YOUR_HANDLE",
  "enabled": true
}
```

---

## 🧪 **Testing**

### Validate JSON
Use https://jsonlint.com to validate JSON files before pushing

### Test Locally
```bash
# Python 3
python -m http.server 8000

# Then open http://localhost:8000
```

### Check Mobile
- Use browser DevTools (F12) → Toggle device toolbar
- Test on actual mobile device

---

## 📚 **Page-by-Page Guide**

### Home Page (index.html)
- Hero section with services overview
- Links to all sections
- Call-to-action buttons

### Photography (pages/photography.html)
- Photo gallery with filtering
- Category system (Nature, Portraits, etc.)
- Video tutorials for each photo
- Click to expand with full details

### Gardening (pages/gardening.html)
- Plant gallery with filtering
- Plant care information:
  - ☀️ Sunlight requirements
  - 💧 Watering schedule
  - 🥔 Soil type
  - 🌡️ Climate preferences
- Video care guides for each plant
- Modal popup for detailed info

### Music (pages/piano.html)
- Music pieces with categories
- Audio player for each piece
- Video tutorials & behind-scenes
- Coming soon: Streaming from multiple sources

### Tutoring (pages/tutoring.html)
- Course listings with filtering
- Pricing packages
- Student testimonials
- Booking system (can be integrated)

### About (pages/about.html)
- Mission & vision statement
- Services overview
- Contact information
- Links to all services

---

## 🔧 **Troubleshooting**

| Problem | Solution |
|---------|----------|
| Header not showing | Check `<div id="header-container"></div>` exists |
| Footer not showing | Check `<div id="footer-container"></div>` exists |
| Images not loading | Check image paths in JSON start with `assets/images/` |
| Videos not playing | Upload to `assets/videos/` or use YouTube/Vimeo URLs |
| Social links broken | Check URLs in `config.json` are correct |
| JSON error in console | Validate JSON at https://jsonlint.com |

---

## 📞 **Contact & Support**

- 📧 Email: contact@kuttyteachers.in
- 📍 Location: Palakkad, Kerala
- 💬 WhatsApp: [Link in config.json]

---

## 📝 **License & Usage**

This is a personal portfolio website. Feel free to use the code as a template for your own projects.

---

## 🚀 **Future Enhancements**

- [ ] Admin panel for easy content management
- [ ] Student portal with progress tracking
- [ ] Online booking & payment system
- [ ] Blog section for tips & tutorials
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Social media feed integration
- [ ] Email newsletter signup

---

## 🙏 **Credits**

Built with ❤️ in Palakkad, Kerala

- 🎨 Design: KuttyTeachers
- 💻 Development: Custom web solution
- 📱 Responsive Framework: Mobile-first CSS
- 🌍 Fonts: Google Fonts

---

**Last Updated:** February 2026

**Repository:** https://github.com/niharsona/kuttyteachers

---

### ✨ Happy Learning, Creating & Growing! 🌱📸🎹📚
