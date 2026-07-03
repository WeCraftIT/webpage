# WE CRAFT IT — Premium Digital Engineering Studio

> **You Dream It. We Build It.**

A premium, modern, design-forward software services studio website built for **WE CRAFT IT**. Crafted with a focus on visual storytelling, engineering-studio aesthetics, technical minimalism, and smooth micro-interactions.

Inspired by premium digital product platforms like Vercel, Linear, Framer, and Supabase.

---

## 🚀 Live Site
Check out the live website deployed on GitHub Pages:
👉 **[https://WeCraftIT.github.io/webpage/](https://WeCraftIT.github.io/webpage/)**

---

## 🛠️ Technology Stack
- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 8
- **Styling**: Tailwind CSS v4 (using native `@tailwindcss/vite` configuration)
- **Animations**: Framer Motion
- **Scroll Engine**: Lenis (for inertia smooth scrolling)
- **Icons**: Lucide React

---

## ✨ Studio Features
1. **Cinematic Intro Loader**: Full-screen startup overlay showing the enlarged brand logo with a canvas-based flame physics engine circulating colored embers.
2. **Minimalist Visual Spacing**: Spacing system (`gap-24 md:gap-36`) designed to match premium, technical dark-mode agency portfolios.
3. **Engineering Services Grid**: Outlines professional execution capabilities including Custom Software, SaaS Applications, AI Integrations, and Academic Solutions.
4. **Chatbot Spec Sheet Form**: A simplified 4-field contact system with chatbot-style prompt box integration:
   - Paperclip attachment button supporting mockups or spec file uploading.
   - Live character counter.
   - Auto-generated project spec sheet summary redirected directly to Gmail compose at `connect.wecraftit@gmail.com`.
5. **Linear/Vercel Theme**: Dark-first experience utilizing curated dark slate tones, fine gradient borders, and subtle glows.

---

## 💻 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open **[http://localhost:5173/portfolio/](http://localhost:5173/portfolio/)** to preview the site locally with Hot Module Replacement (HMR).

### 3. Production Build
```bash
npm run build
```
Compiles and outputs production-ready assets directly into the **`docs/`** directory.

---

## 🌐 Deploy to GitHub Pages
The project is configured to compile directly into the `/docs` directory to support GitHub Pages.

1. Commit and push the changes:
   ```bash
   git add .
   git commit -m "docs: Update WE CRAFT IT documentation"
   git push origin main
   ```
2. Go to your repository settings on GitHub.
3. Select **Pages** on the left sidebar.
4. Set the **Source** to `Deploy from a branch`.
5. Under **Branch**, select `main` and change the folder from `/ (root)` to **`/docs`**.
6. Click **Save**.
