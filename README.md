# Muraqaba (مراقبة) — Daily Worship Tracker 🕌

**Muraqaba** is an offline-first Progressive Web App (PWA) for tracking daily Islamic worship and acts of obedience, based on the scoring system from the *Alhusoon Alkhamsa* tradition.

---

## 🌟 Features

* **Daily Checklist** — Organized by prayer time. Tap each item to mark it done.
* **Live Scoring** — Points calculated in real time with a circular progress ring.
* **5 Prayers Tracked** — Fajr, Dhuhr, Asr, Maghrib, Isha — each with 4 sub-items (Congregation, Sunnah, Dhikr, Nafilah/Witr).
* **4 Worship Sections:**
  - 🕌 Prayers (60 pts max)
  - 🌿 Daily Manners / Adhkar (7 pts)
  - 📚 Seeking Knowledge (20 pts — **optional, toggle in Settings**)
  - 📖 Quran (9 pts)
  - ☀️ Sunnah Acts (7 pts)
* **Weekly View** — Bar chart + daily breakdown for the last 7 days.
* **Streak Tracking** — Consecutive days with any activity logged.
* **Knowledge Section Toggle** — In Settings, cleanly show or hide the knowledge section (with live max-score update).
* **Bilingual** — Full Arabic (RTL) and English (LTR) support with Hijri date.
* **Offline-First PWA** — Installable on iOS and Android via Service Worker.
* **Data Portability** — Export/import JSON backups. No cloud required.

---

## 🚀 Running Locally

No build tools needed. Pure HTML + CSS + JS.

1. Place `index.html`, `manifest.json`, and `sw.js` in a folder.
2. Open via a local server (e.g. VS Code Live Server, or `python3 -m http.server`).
3. For PWA install prompt, use HTTPS or localhost.

---

## 📊 Scoring System

| Section | Max Points |
|---|---|
| Prayers × 5 (Jamaa + Sunnah + Adhkar + Nafilah) | 60 |
| Daily Manners (7 items) | 7 |
| Seeking Knowledge *(optional)* | 20 |
| Quran (Hifz + Reading + Listening) | 9 |
| Sunnah Acts (7 items) | 7 |
| **Total (with Knowledge)** | **83** |
| **Total (without Knowledge)** | **63** |

---

## رسالة بالعربية

**مراقبة** تطبيق لتتبع العبادات اليومية بنظام نقاط مبني على منهجية الحصون الخمسة. يشمل الصلوات الخمس بتفاصيلها، وآداب يومية، وورد قرآني، وسننًا نبوية.
