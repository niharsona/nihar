# 🚀 QUICK START GUIDE - കട്ടിടീച്ചേഷ്ണ

## ⏰ 5-MINUTE SETUP

### Step 1: Update config.json (2 mins)
Open `config.json` and update ONLY these fields:

```json
{
  "site": {
    "email": "YOUR_EMAIL@example.com",
    "phone": "+91-YOUR_NUMBER"
  },
  "socialMedia": {
    "instagram": {
      "url": "https://instagram.com/YOUR_HANDLE",  // ← Change this
      "enabled": true                               // ← And enable it
    },
    "whatsapp": {
      "url": "https://wa.me/919XXXXXXXXXX",        // ← Change your number
      "enabled": true
    }
  }
}
```

### Step 2: Add Your Logo (1 min)
Replace `assets/images/logo.png` with your logo

### Step 3: Test Locally (1 min)
```bash
# Terminal/Command Prompt
python -m http.server 8000

# Then open: http://localhost:8000
```

### Step 4: Push to GitHub (1 min)
```bash
git add .
git commit -m "Initial setup with config"
git push origin main
```

✅ **Done!**

---

## 📋 NEXT STEPS (Priority Order)

### Week 1: Setup
- [ ] Update config.json with your details
- [ ] Add your logo
- [ ] Test locally
- [ ] Push to GitHub
- [ ] Enable GitHub Pages

### Week 2: Add Content
- [ ] Create `data/plants-data.json` with your plants
- [ ] Upload plant images to `assets/images/plants/`
- [ ] Create `data/photography-data.json` with your photos
- [ ] Upload photos to `assets/images/photography/`

### Week 3: Add More
- [ ] Create `data/piano-data.json` (if needed)
- [ ] Create `data/tutoring-data.json` (if needed)
- [ ] Upload videos to `assets/videos/`
- [ ] Add video links to JSON files

### Week 4: Polish & Launch
- [ ] Test all pages on mobile
- [ ] Update CSS files if needed (gardening.css, photography.css, etc.)
- [ ] Add custom page-specific styles
- [ ] Deploy to custom domain (optional)

---

## 🎯 WHAT TO EDIT WHEN

### To change social links everywhere:
Edit `config.json` → `socialMedia` section

### To change menu everywhere:
Edit `config.json` → `navigation` array

### To change header/footer design:
Edit `css/common.css`

### To change gardening page only:
Edit `pages/gardening.html` + `css/gardening.css` + `js/gardening.js`

### To add plant data:
Edit `data/plants-data.json`

---

## 📁 FILE LOCATIONS

```
ALWAYS PUT:                          IN THIS FOLDER:
Plant images                         assets/images/plants/PLANT_NAME/
Photography images                  assets/images/photography/
Plant videos                         assets/videos/plants/
Photography videos                  assets/videos/photography/
Your logo                            assets/images/logo.png
Plant data                           data/plants-data.json
Photography data                    data/photography-data.json
```

---

## 💻 EDIT THESE FILES ONLY

```
✅ config.json                       (Site config - MOST IMPORTANT!)
✅ data/plants-data.json            (Add your plants)
✅ data/photography-data.json       (Add your photos)
✅ css/gardening.css                (Customize gardening page style)
✅ css/photography.css              (Customize photography page style)
✅ js/gardening.js                  (Customize gardening page logic)
✅ js/photography.js                (Customize photography page logic)

❌ DO NOT EDIT:
❌ css/common.css                   (This is shared by all pages)
❌ js/common.js                     (This loads header/footer)
❌ pages/gardening.html             (Only add new content containers)
```

---

## 🎬 ADDING YOUR FIRST PLANT

1. Open `data/plants-data.json`
2. Copy this template into the `plants` array:

```json
{
  "id": "my-plant",
  "category": "herbs",
  "name": "ചെടിയുടെ നാമം",
  "scientificName": "Scientific Name",
  "description": "വിവരണം",
  "climate": "കാലാവസ്ഥ വിവരണം",
  "soil": "വളം വിവരണം",
  "watering": "നീരാൾ നിർദ്ദേശം",
  "sunlight": "സൂര്യപ്രകാശ ആവശ്യകത",
  "harvestTime": "വളർച്ചി സമയം",
  "images": [
    "assets/images/plants/my-plant/image1.jpg",
    "assets/images/plants/my-plant/image2.jpg",
    "assets/images/plants/my-plant/image3.jpg"
  ],
  "video": "assets/videos/plants/my-plant-care.mp4",
  "videoTitle": "പരിചരണ ভিഡിയോ"
}
```

3. Upload your plant images to: `assets/images/plants/my-plant/`
4. Save & test locally

---

## 📱 CHECK IF WORKING

Open your browser and check:
- ✅ Header appears with logo & menu
- ✅ Menu items are clickable
- ✅ Footer appears with social links
- ✅ Social links open in new tab
- ✅ Mobile hamburger menu works
- ✅ All pages load without errors (check console: F12)

---

## 🆘 IF SOMETHING BREAKS

1. **Check browser console:** F12 → Console tab
2. **Look for red errors** in console
3. **Check JSON syntax:** Use https://jsonlint.com
4. **Verify file paths:** Make sure files exist where referenced

---

## 🎓 LEARN MORE

- **README.md** - Full documentation
- **PROJECT-STRUCTURE.md** - Detailed architecture
- **QUICK-REFERENCE.md** - One-page cheat sheet
- **SETUP-GUIDE.md** - Step-by-step guide

---

## 📧 COMMON QUESTIONS

**Q: How do I change the site colors?**
A: Edit `config.json` → `colors` section

**Q: How do I add my Instagram link?**
A: Edit `config.json` → `socialMedia` → `instagram` → `url`

**Q: How do I add a video to a plant?**
A: Upload video to `assets/videos/plants/` then add to `data/plants-data.json`:
```json
"video": "assets/videos/plants/plant-care.mp4",
"videoTitle": "പരിചരണം"
```

**Q: Will updating config.json affect all pages?**
A: YES! That's the point - one file, all pages update.

**Q: Can I delete the "About" page?**
A: Yes, but remove it from `config.json` navigation first

---

## ✨ YOU'RE ALL SET!

Start with these 3 things:
1. Update `config.json`
2. Add your logo
3. Add your first plant/photo to the data files

Everything else can be added gradually. Enjoy! 🌱

---

**Questions?** Check README.md or QUICK-REFERENCE.md

**Ready?** Get started: `python -m http.server 8000`
