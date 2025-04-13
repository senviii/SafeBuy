import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function reportURL(url) {
  await addDoc(collection(db, "reports"), { url, timestamp: Date.now() });
}

function checkURL() {
    const url = document.getElementById('urlInput').value;
    const result = document.getElementById('result');
    const redFlags = [
        "login", "signin", "secure", "account", "update", "verify", "bank", "paypal", "payment", 
        "free", "bonus", "deal", "offer", "gift", "coupon", "discount", "%", "cashback", 
        "bit.ly", "tinyurl", "goo.gl", "rb.gy", ".ru", ".tk", ".ml", ".cf", ".gq", 
        "suspicious", "unusual", "important", "immediate", "alert", "credentials", "reset",
        "store-clone", "checkout", "prize", "0auth", "auth", "epay", "safepay", "wallet",
        "redirect", "tracking", "phishing", "spoof", "fakeshop", "cheapbrand", "login-confirmation"
      ];
      async function advancedCheckURL(url) {
        const res = await fetch('http://127.0.0.1:5000/api/check_url', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url })
        });
        const data = await res.json();
        return data.prediction; // could be "safe", "suspicious", or "scam"
      }
      
    if (!url) {
        result.textContent = "Oops! Please paste a link 🌐";
        result.style.color = "#ff4081";
        return;
    }
    // Simulated phishing check
    if (url.includes("phishy") || url.includes("suspicious")) {
        result.textContent = "⚠️ This link looks shady! Avoid it!";
        result.style.color = "#e91e63";
    } else {
        result.textContent = "✅ This link seems okay! Shop away 🛍️";
        result.style.color = "green";
    }
}
