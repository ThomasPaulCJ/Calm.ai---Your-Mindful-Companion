# 🌐 Share Calm.ai with ngrok

## What is ngrok?
ngrok creates a secure tunnel from a public URL to your local development server, perfect for:
- ✅ **Instant sharing** with friends/colleagues
- ✅ **Testing on mobile devices**
- ✅ **Demo presentations**
- ✅ **No deployment needed**

## 🚀 Quick Setup Steps

### 1. Install ngrok
```bash
# Option 1: Download from https://ngrok.com/download
# Option 2: Using npm (if you prefer)
npm install -g ngrok

# Option 3: Using brew (macOS)
brew install ngrok/ngrok/ngrok
```

### 2. Start Your Calm.ai App
```bash
npm run dev
```
Your app will run on `http://localhost:5173` (default Vite port)

### 3. Open New Terminal & Run ngrok
```bash
ngrok http 5173
```

### 4. Get Your Public URLs
ngrok will show you something like:
```
Session Status    online
Account           your-email@example.com
Version           3.x.x
Region            United States (us)
Latency           -
Web Interface     http://127.0.0.1:4040
Forwarding        https://abc123.ngrok.io -> http://localhost:5173
Forwarding        http://abc123.ngrok.io -> http://localhost:5173

Connections       ttl     opn     rt1     rt5     p50     p90
                  0       0       0.00    0.00    0.00    0.00
```

## 🎉 Your Calm.ai is Now Live!

- **HTTPS URL**: `https://abc123.ngrok.io` (recommended)
- **HTTP URL**: `http://abc123.ngrok.io`
- **Web Interface**: `http://127.0.0.1:4040` (to monitor traffic)

## 💡 Pro Tips

### Free vs Paid
- **Free**: Random URLs, 2-hour sessions, basic features
- **Paid**: Custom domains, longer sessions, more features

### Custom Subdomain (Paid)
```bash
ngrok http 5173 --subdomain=calm-ai-demo
# Creates: https://calm-ai-demo.ngrok.io
```

### Keep It Running
- Keep both terminals open (dev server + ngrok)
- Share the ngrok URL with anyone
- They can access your Calm.ai app instantly!

## 🔒 Security Notes
- ngrok URLs are public but hard to guess
- Don't share sensitive data through ngrok tunnels
- Free accounts show ngrok branding page first

## 📱 Perfect For:
- **Mobile testing**: Test on your phone instantly
- **Client demos**: Share with stakeholders immediately  
- **Team collaboration**: Let teammates test features
- **Presentations**: Live demo without deployment

## 🛑 When to Stop
Press `Ctrl+C` in the ngrok terminal to stop the tunnel.