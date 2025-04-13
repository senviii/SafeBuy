# 🛡️ SafeBuy – Shop Smart, Shop Safe

A browser extension that protects users from online shopping scams by detecting fake e-commerce sites, shady sellers, and phishing attempts — all in real-time.

---

## 🔍 Overview

Online scams are getting sneakier — from fake discounts and cloned shopping websites to shady sellers with no history.

**SafeBuy** acts as your personal shopping bodyguard. It scans websites as you browse, detects risks, and warns you *before* you get scammed.

---

## 🚀 Features

- 🔗 **Phishing & Clone Site Detection**  
  Detects suspicious URLs using machine learning and curated threat lists.

- 🛒 **Fake Seller Risk Analysis**  
  Flags sellers with bot-like review patterns or zero credibility.

- ⭐ **SafeBuy Trust Score**  
  Gives each site or seller a badge:  
  🟢 Safe | ⚠️ Warning | ❌ Scam

- 📢 **Community Reports**  
  Users can report suspicious websites/sellers to improve detection.

- 📦 **Fake Discount Checker** *(Coming Soon)*  
  Compares prices across trusted sources to flag "too good to be true" deals.

---

## 🧠 Tech Stack

| Component            | Tech Used                       |
|---------------------|----------------------------------|
| Browser Extension    | JavaScript, Manifest v3          |
| Phishing Detection   | ML (Random Forest/XGBoost), Python |
| UI                   | HTML/CSS + Vanilla JS            |
| Reports (Optional)   | Firebase / MongoDB               |

---

## 📁 Project Structure

Here’s a breakdown of key files and what they do:

| File/Folder      | Purpose                                               |
|------------------|--------------------------------------------------------|
| `popup.html`     | The extension popup UI shown when the icon is clicked |
| `popup.js`       | JavaScript logic to analyze URLs and show trust score |
| `manifest.json`  | Metadata + permissions config for the Chrome extension |
| `.gitignore`     | Keeps the repo clean by ignoring unwanted files        |
| `LICENSE`        | Open-source under the MIT license                      |
| `README.md`      | You're reading it — complete overview & instructions   |

---

## 🎯 Use Case Example

> You land on a shady-looking site offering 90% off iPhones...  
> SafeBuy instantly scans the site, runs a phishing check, analyzes seller data…  
> 🚨 A warning pops up: **"3 scam reports found. Risky pricing patterns detected!"**  
> ✅ You leave before losing your money.

---

## 🛠️ Installation

1. Go to `chrome://extensions` (or `opera://extensions`)
2. Enable **Developer Mode**
3. Click **Load Unpacked**
4. Select the folder where this project is saved

You're all set! The SafeBuy icon will appear in your browser.

---

## 🌱 Future Scope

- Mobile browser & app support  
- AI-powered fraud pattern detection  
- Public API for store verification  
- Verified seller badge ecosystem

---

## 🏆 Hackathon Submission

This project was built for **AMUHACKS 4.0 – Cyber Crime Prevention Track**, with the vision of helping users avoid online shopping scams in real-time.

---

## 🤝 Contributors

Made with 💙 by:

**Saanvi Mahika**  
📧 Email: sm9511@srmist.edu.in  
🔗 [GitHub](https://github.com/senviii)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

### 🔖 Hashtags
#AMUHACKS4.0 #CSSAMU #AMU

