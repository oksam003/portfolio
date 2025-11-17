# Software Developer Portfolio

A modern, futuristic portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a cool, calm color scheme with a sleek black theme.

## Features

- 🎨 Futuristic black theme with cool colors (cyan, blue, purple, green)
- ⚡ Built with Next.js 14 and TypeScript
- 🎭 Smooth animations using Framer Motion
- 📱 Fully responsive design
- 🎯 Modern UI/UX with glass morphism effects
- ✨ Interactive elements and hover effects

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel (recommended)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main page component
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills section
│   ├── Projects.tsx     # Projects section
│   ├── Contact.tsx      # Contact section
│   └── Footer.tsx       # Footer component
└── public/              # Static assets
```

## Customization

- Update personal information in the respective component files
- Modify colors in `tailwind.config.js`
- Add your projects in `components/Projects.tsx`
- Update social links in `components/Contact.tsx`

## Build for Production

```bash
npm run build
npm start
```

## License

MIT



