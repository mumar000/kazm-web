# kazm-web

A modern, production-ready React landing page built with Vite, Tailwind CSS v4, and Framer Motion.

## 🚀 Features

- ⚡️ **Lightning Fast**: Built with Vite for optimal performance
- 🎨 **Modern Design**: Tailwind CSS v4 with custom animations
- 🎭 **Smooth Animations**: Framer Motion for delightful user experience
- 📱 **Fully Responsive**: Mobile-first design approach
- ♿️ **Accessible**: Built with accessibility in mind
- 🔍 **SEO Optimized**: Meta tags and semantic HTML
- 📦 **Production Ready**: Code splitting and compression
- 🎯 **Performance Optimized**: Lazy loading and image optimization

## 📦 Tech Stack

- React 18
- Vite
- Tailwind CSS v4
- Framer Motion
- React Router DOM v7
- Lucide React Icons

## 🛠️ Installation

```bash
npm install
```

## 🚀 Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 🏗️ Build

```bash
npm run build
```

## 👀 Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/        # Reusable components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── AboutUs.jsx
│   ├── CoreValues.jsx
│   ├── Footer.jsx
│   └── SEO.jsx
├── screens/          # Page components
│   └── HomePage.jsx
├── hooks/            # Custom React hooks
│   └── useLazyLoad.js
├── utils/            # Utility functions
├── App.jsx           # Main app component
├── main.jsx          # Entry point
└── index.css         # Global styles
```

## 🎨 Customization

### Colors
Edit the color theme in `src/index.css`:
```css
@theme {
  --color-primary-500: #3b82f6;
  /* Add more custom colors */
}
```

### Components
All components are in `src/components/`. Modify them to fit your needs.

### Content
Update the content in each component file to match your brand.

## 📝 Environment Variables

Create a `.env` file in the root directory:
```
VITE_APP_NAME=YourBrand
VITE_API_URL=https://api.example.com
```

## 🚢 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist folder to Netlify
```

## 📄 License

MIT

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
