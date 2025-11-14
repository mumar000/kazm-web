# Deployment Guide

## Vercel (Recommended)

1. Install Vercel CLI:
\`\`\`bash
npm install -g vercel
\`\`\`

2. Deploy:
\`\`\`bash
vercel
\`\`\`

3. For production:
\`\`\`bash
vercel --prod
\`\`\`

## Netlify

1. Build the project:
\`\`\`bash
npm run build
\`\`\`

2. Deploy the \`dist\` folder to Netlify

### Netlify Configuration
Create \`netlify.toml\`:
\`\`\`toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
\`\`\`

## GitHub Pages

1. Install gh-pages:
\`\`\`bash
npm install -D gh-pages
\`\`\`

2. Add to package.json:
\`\`\`json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
\`\`\`

3. Update vite.config.js:
\`\`\`javascript
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
})
\`\`\`

4. Deploy:
\`\`\`bash
npm run deploy
\`\`\`

## Docker

Create \`Dockerfile\`:
\`\`\`dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
\`\`\`

Build and run:
\`\`\`bash
docker build -t landing-page .
docker run -p 8080:80 landing-page
\`\`\`
