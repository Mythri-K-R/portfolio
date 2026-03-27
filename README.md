# Mythri K R — Portfolio Website

Welcome to my personal portfolio website! This is a clean, modern, and fully responsive portfolio showcasing my work, skills, education, and experience as an AI & Data Science student and full-stack developer.

**Live Site:** [Your Portfolio URL]  
**GitHub:** [Mythri-K-R](https://github.com/Mythri-K-R)  
**LinkedIn:** [Mythri K R](https://www.linkedin.com/in/mythri-k-r-932377312/)  
**Email:** mythrikr88@gmail.com

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Available Scripts](#available-scripts)
- [Configuration](#configuration)
- [Customization Guide](#customization-guide)
- [Deployment](#deployment)
- [Performance Optimization](#performance-optimization)
- [Contributing](#contributing)
- [License](#license)

---

## 📖 About

This portfolio website is a comprehensive showcase of my professional journey as:

- **AI & Data Science Student** at SDM Institute of Technology
- **Full-Stack Developer** with experience in modern web technologies
- **Software Developer Intern** at Mitra Softwares

The site includes detailed sections for:

- **Hero Section** — Eye-catching introduction
- **Experience** — Professional internships and projects
- **Education** — Academic background and achievements
- **Skills** — Technical competencies and tools
- **Projects** — Showcase of completed work
- **Achievements** — Certifications and accomplishments
- **Contact** — Ways to get in touch

---

## ✨ Features

- ✅ **Fully Responsive Design** — Works seamlessly on desktop, tablet, and mobile
- ✅ **Modern UI/UX** — Clean, minimal design with smooth animations
- ✅ **Fast Performance** — Optimized with Vite for quick load times
- ✅ **SEO-Friendly** — Meta tags and structured content
- ✅ **Dark Mode Ready** — CSS variables for easy theme customization
- ✅ **Icon System** — Lucide React icons for consistent visuals
- ✅ **Static Content** — No backend required, easy to update
- ✅ **Production-Ready** — Optimized build and deployment-ready

---

## 🛠️ Tech Stack

### Frontend

- **React 18** — UI library for building interactive components
- **Vite 5** — Lightning-fast build tool and dev server
- **CSS3** — Custom styling with CSS modules
- **Lucide React** — Beautiful, consistent icons

### Tools & Development

- **Node.js & npm** — JavaScript runtime and package manager
- **Git** — Version control
- **Responsive Design** — Mobile-first approach

### Deployment Options

- **Vercel** (Recommended) — Zero-config deployment
- **GitHub Pages** — Free static hosting
- **Netlify** — Alternative deployment platform

---

## 📁 Project Structure

```
portfolio/
├── public/                      # Static files
│   └── resume.pdf              # Downloadable resume
├── src/
│   ├── assets/                 # Images, icons, and static assets
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation header
│   │   ├── Navbar.css
│   │   ├── Footer.jsx          # Footer with links
│   │   └── Footer.css
│   ├── sections/
│   │   ├── Hero.jsx            # Introduction section
│   │   ├── Experience.jsx      # Work experience & internships
│   │   ├── Education.jsx       # Academic background
│   │   ├── Skills.jsx          # Technical skills
│   │   ├── Projects.jsx        # Portfolio projects
│   │   ├── Achievements.jsx    # Certifications & awards
│   │   ├── Contact.jsx         # Contact form/information
│   │   └── [Section].css       # Corresponding styles
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   ├── index.css               # Global styles
│   └── data.js                 # Content data (easily editable)
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── vite.config.js             # Vite configuration
├── README.md                   # This file
└── .gitignore                  # Git ignore rules

```

---

## 🚀 Installation & Setup

### Prerequisites

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download](https://git-scm.com/)

### Step 1: Clone the Repository

```bash
git clone https://github.com/Mythri-K-R/portfolio.git
cd portfolio
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Run Development Server

```bash
npm run dev
```

The application will be available at **[http://localhost:5173](http://localhost:5173)**

---

## 📝 Available Scripts

In the project directory, you can run:

### `npm run dev`

Starts the development server with hot module replacement (HMR).

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view in browser.

### `npm run build`

Builds the app for production to the `dist` folder.

```bash
npm run build
```

The build is minified and optimized for best performance.

### `npm run preview`

Previews the production build locally before deployment.

```bash
npm run preview
```

---

## ⚙️ Configuration

### Updating Portfolio Content

All portfolio content is centralized in `src/data.js`. Edit this file to customize your portfolio:

```javascript
export const data = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/your-profile",
  github: "https://github.com/your-username",
  // ... more fields
};
```

**To update sections:**

1. Open `src/data.js`
2. Modify the relevant arrays (education, experience, skills, projects, etc.)
3. Changes will hot-reload in development

### Vite Configuration

Edit `vite.config.js` to modify build settings:

```javascript
export default defineConfig({
  plugins: [react()],
  // Add custom config here
});
```

---

## 🎨 Customization Guide

### Changing Colors & Theme

Edit CSS files in `src/sections/` and `src/components/` to customize colors:

```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  --text-color: #000;
  --bg-color: #fff;
}
```

### Adding New Sections

1. Create a new file: `src/sections/YourSection.jsx`
2. Create corresponding CSS: `src/sections/YourSection.css`
3. Import and add to `App.jsx`
4. Add data to `src/data.js` if needed

### Modifying Navbar/Footer

- **Navbar:** Edit `src/components/Navbar.jsx`
- **Footer:** Edit `src/components/Footer.jsx`
- Update styles in corresponding CSS files

### Updating Resume

Replace `public/resume.pdf` with your resume file.

---

## 🌐 Deployment

### Option 1: Deploy to Vercel (Recommended ⭐)

**Easiest and fastest deployment option**

1. Push your code to GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Go to [vercel.com](https://vercel.com) and sign in with GitHub

3. Click **New Project** and select your portfolio repository

4. Vercel will auto-detect Vite settings — click **Deploy**

5. Your site will be live! Domain assigned automatically.

6. (Optional) Connect custom domain in Vercel dashboard

### Option 2: Deploy to GitHub Pages

1. Install gh-pages:

```bash
npm install --save-dev gh-pages
```

2. Update `package.json`:

```json
{
  "homepage": "https://Mythri-K-R.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy:

```bash
npm run deploy
```

Your site will be live at `https://Mythri-K-R.github.io/portfolio`

### Option 3: Deploy to Netlify

1. Build your project:

```bash
npm run build
```

2. Go to [netlify.com](https://netlify.com) and sign in

3. Drag and drop the `dist` folder, or connect your GitHub repo

4. Netlify will auto-detect Vite and deploy

---

## ⚡ Performance Optimization

This portfolio is already optimized with:

- **Vite's code splitting** — Faster loading
- **CSS scoping** — Smaller bundle size
- **Lazy loading** — Images load on demand
- **Minified production build** — Compressed assets

### Additional Optimization Tips:

- Use optimized images (WebP format when possible)
- Compress assets before adding
- Use React DevTools to identify performance bottlenecks
- Monitor with Lighthouse audit (Chrome DevTools)

---

## 🤝 Contributing

This is a personal portfolio, but feel free to:

- Fork the repo and customize for your own portfolio
- Report bugs or issues
- Suggest improvements

### To Contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source. Feel free to use it as a template for your own portfolio.

---

## 🔗 Useful Links

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Lucide React Icons](https://lucide.dev/)
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Vercel Deployment Guide](https://vercel.com/docs)

---

## 📞 Get In Touch

- **Email:** mythrikr88@gmail.com
- **Phone:** +91 9742244431
- **LinkedIn:** [Mythri K R](https://www.linkedin.com/in/mythri-k-r-932377312/)
- **GitHub:** [Mythri-K-R](https://github.com/Mythri-K-R)
- **Location:** Karnataka, India

---

## 🙏 Acknowledgments

Built with ❤️ using React, Vite, and modern web technologies.  
Check out other projects on [GitHub](https://github.com/Mythri-K-R)

---

**Last Updated:** March 2026  
**Portfolio Version:** 1.0.0

```

---

## 📁 Project Structure

```

src/
├── components/
│ ├── Navbar.jsx / .css
│ └── Footer.jsx / .css
├── sections/
│ ├── Hero.jsx / .css
│ ├── Education.jsx / .css
│ ├── Experience.jsx / .css
│ ├── Skills.jsx / .css
│ ├── Projects.jsx / .css
│ ├── Achievements.jsx / .css
│ └── Contact.jsx / .css
├── data.js ← All your info lives here
├── App.jsx
├── main.jsx
└── index.css ← Design tokens & global styles

```

## ✏️ Updating Content

All content is in **`src/data.js`** — edit that file to update your name, projects, skills, achievements, etc. No need to touch any other file.

## 🛠 Tech Stack

- React 18
- Vite
- Lucide React (icons)
- Google Fonts (DM Serif Display + DM Sans)
- Pure CSS (no UI framework)
```
