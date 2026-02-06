# 💖 PINK TEAM VITE 💖

The most eye-searing website ever created, now powered by Vite!

## 🚀 How to Deploy to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and log in
2. Click the **+** button in the top right → **New repository**
3. Name it `pink-team-vite` (or whatever you want)
4. Make it **Public**
5. **DON'T** initialize with README, .gitignore, or license
6. Click **Create repository**

### Step 2: Update vite.config.js

Open `vite.config.js` and change the base path to match your repo name:

```js
export default defineConfig({
  base: '/your-repo-name/',  // Change this to match your repo name
})
```

If your repo is named `pink-team-vite`, keep it as is. If you named it something else like `my-awesome-site`, change it to `/my-awesome-site/`.

### Step 3: Push Your Code to GitHub

Open your terminal in the `pink-team-vite` folder and run:

```bash
git init
git add .
git commit -m "💖 Initial commit - PINK TEAM FOREVER"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/pink-team-vite.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username!

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. That's it! The workflow will automatically run and deploy your site

### Step 5: Visit Your Site

After the GitHub Action completes (check the **Actions** tab), your site will be live at:

```
https://YOUR-USERNAME.github.io/pink-team-vite/
```

## 🛠️ Local Development

Install dependencies (you only need to do this once):
```bash
npm install
```

Run the dev server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## ⚠️ WARNING

This website may cause:
- Eye strain
- Seizures
- An overwhelming desire to redesign everything
- Sudden appreciation for minimalism
- Loss of professional credibility

View at your own risk! 💖✨🌈
