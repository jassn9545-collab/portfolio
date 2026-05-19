# Amandeep Singh - React Developer Portfolio

A premium, modern, production-ready React portfolio website showcasing the work and skills of a frontend developer with 2+ years of experience.

## 🚀 Features

### Core Features
- **Modern Tech Stack**: React 19, Redux Toolkit, React Router v6, Tailwind CSS, Framer Motion
- **Dark/Light Theme**: Smooth theme switching with Redux state management
- **Glassmorphism Design**: Premium UI with blur backgrounds and soft borders
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Interactive Elements**: Custom hooks, animated stats dashboard, and more

### Advanced Features
- **Error Boundaries**: Graceful error handling with user-friendly error pages
- **Custom Hooks**: `useTheme`, `useScroll`, `useTypewriter` for reusable logic
- **Project Filtering**: Dynamic project showcase with category filters
- **Contact Form**: EmailJS integration for functional contact form
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility
- **Performance Optimized**: Lazy loading, code splitting, and optimized animations

### Unique Elements
- **Interactive Stats Dashboard**: Animated counters and progress bars
- **Typewriter Effect**: Dynamic text animation in hero section
- **Scroll Progress Bar**: Visual indication of page scroll progress
- **Timeline Experience**: Vertical timeline for work experience
- **Hover Animations**: Sophisticated hover effects and transitions

## 🛠 Tech Stack

### Frontend
- **React 19** - Latest React with functional components and hooks
- **Redux Toolkit** - State management for theme and global state
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Modern icon library

### Development Tools
- **ESLint + Prettier** - Code formatting and linting
- **EmailJS** - Contact form functionality
- **Axios** - HTTP client for API calls

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation bar with theme toggle
│   ├── Hero.jsx        # Hero section with typewriter effect
│   ├── About.jsx       # About section with stats
│   ├── Skills.jsx      # Skills showcase with progress bars
│   ├── Projects.jsx    # Project gallery with filtering
│   ├── Experience.jsx  # Work experience timeline
│   ├── StatsDashboard.jsx # Interactive stats dashboard
│   ├── Contact.jsx     # Contact form with EmailJS
│   ├── Footer.jsx      # Footer with social links
│   ├── ErrorBoundary.jsx # Error handling component
│   └── LoadingSpinner.jsx # Loading component
├── pages/              # Page components
│   └── Home.jsx        # Main home page
├── redux/              # Redux store and slices
│   ├── store/          # Store configuration
│   │   └── store.js    # Main store setup
│   └── slices/         # Redux slices
│       └── themeSlice.js # Theme state management
├── hooks/              # Custom React hooks
│   ├── useTheme.js     # Theme management hook
│   ├── useScroll.js    # Scroll position hook
│   └── useTypewriter.js # Typewriter animation hook
├── utils/              # Utility functions
├── assets/             # Static assets
└── index.css           # Global styles and Tailwind
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm start` - Run development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (one-way operation)

## ⚙️ Configuration

### EmailJS Setup
To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and email template
3. Update the credentials in `src/components/Contact.jsx`:
   ```javascript
   emailjs.send(
     'YOUR_SERVICE_ID',     // Replace with your service ID
     'YOUR_TEMPLATE_ID',    // Replace with your template ID
     {
       from_name: formData.name,
       from_email: formData.email,
       message: formData.message,
     },
     'YOUR_PUBLIC_KEY'      // Replace with your public key
   )
   ```

### Theme Customization
The theme is managed through Redux Toolkit. Default theme is dark mode.

### Tailwind CSS Configuration
Custom configurations in `tailwind.config.js`:
- Custom animations (gradient, float, pulse-slow)
- Extended backdrop blur
- Inter font family
- Custom color schemes

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Design System

### Colors
- **Primary**: Purple to Blue gradient
- **Dark Theme**: Gray backgrounds with purple accents
- **Light Theme**: White/light gray with purple accents

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold with gradient text
- **Body**: Regular weight with good contrast

### Animations
- **Page Transitions**: Smooth fade-in effects
- **Hover States**: Scale and translate effects
- **Loading**: Skeleton loaders and spinners
- **Scroll**: Parallax and progress indicators

## 🚀 Deployment to Vercel

### Quick Deploy (Recommended)
1. **Push to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Create React App
   - Click "Deploy"

3. **Your Live URL**: 
   - Portfolio will be available at: `https://amandeep-portfolio.vercel.app`

### Alternative: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel --prod
```

### Netlify Alternative
1. **Push to GitHub**
2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Add new site from Git
   - Build command: `npm run build`
   - Publish directory: `build`

### Manual Deployment
```bash
npm run build
# Upload the 'build' folder contents to any hosting service
```

### ✅ Pre-Deployment Checklist
- [ ] All personal info updated (name, email, phone)
- [ ] Projects updated with your actual work
- [ ] EmailJS configured (optional, for contact form)
- [ ] Test all sections in development
- [ ] Build successfully (`npm run build`)

## 🔧 Customization

### Adding New Projects
Edit `src/components/Projects.jsx` and add to the `projects` array:

```javascript
{
  id: uniqueId,
  title: 'Project Name',
  description: 'Project description',
  image: 'image-url',
  tech: ['React', 'Node.js'],
  category: 'React', // or 'Fullstack'
  liveUrl: 'https://example.com',
  githubUrl: 'https://github.com',
  featured: true // or false
}
```

### Updating Personal Information
- **Name**: Update in `src/components/Hero.jsx` and `src/components/Footer.jsx`
- **Contact Info**: Update in `src/components/Contact.jsx`
- **Experience**: Update in `src/components/Experience.jsx`
- **Skills**: Update in `src/components/Skills.jsx`

## 🐛 Troubleshooting

### Common Issues

1. **EmailJS not working**
   - Check your EmailJS credentials
   - Ensure email template is properly configured
   - Verify domain is whitelisted in EmailJS

2. **Animations not smooth**
   - Check browser compatibility
   - Reduce animation complexity on lower-end devices
   - Ensure CSS transforms are used instead of position changes

3. **Theme not persisting**
   - Add localStorage persistence in useTheme hook
   - Check Redux DevTools for state changes

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: amandeep@example.com
- **GitHub**: [Your GitHub Profile]
- **LinkedIn**: [Your LinkedIn Profile]

---

Built with ❤️ using React and Tailwind CSS
