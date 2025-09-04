# Portfolio Website

A modern, responsive portfolio website built with React.js, featuring smooth animations, dark/light mode toggle, and a beautiful UI design.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with seamless adaptation to all screen sizes
- **Dark/Light Mode**: Toggle between themes with local storage persistence
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Modern UI**: Built with Tailwind CSS for a clean, professional appearance
- **Interactive Components**: Hover effects, smooth scrolling, and engaging interactions
- **Contact Form**: Functional contact form with validation and submission handling
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

## 🛠️ Tech Stack

- **Frontend Framework**: React.js 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Routing**: React Router DOM
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation bar with mobile menu
│   ├── Footer.jsx      # Footer with social links
│   └── LoadingSpinner.jsx # Loading animation
├── sections/           # Main page sections
│   ├── Hero.jsx        # Landing section
│   ├── About.jsx       # About me section
│   ├── Skills.jsx      # Skills and technologies
│   ├── Projects.jsx    # Portfolio projects
│   └── Contact.jsx     # Contact form and info
├── context/            # React context
│   └── ThemeContext.jsx # Theme management
├── assets/             # Static assets
├── utils/              # Utility functions
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

- **Hero Section** (`src/sections/Hero.jsx`): Name, title, bio, and profile image
- **About Section** (`src/sections/About.jsx`): Experience, education, and personal story
- **Skills Section** (`src/sections/Skills.jsx`): Your technical skills and proficiency levels
- **Projects Section** (`src/sections/Projects.jsx`): Your portfolio projects
- **Contact Section** (`src/sections/Contact.jsx`): Contact details and social links

### Styling

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Typography**: Update font families and sizes in the Tailwind config
- **Animations**: Adjust animation timings in Framer Motion components

### Theme Configuration

The dark/light mode toggle is handled in `src/context/ThemeContext.jsx`. You can customize:

- Default theme preference
- Theme transition effects
- Local storage key names

## 📱 Responsive Breakpoints

- **Mobile**: `< 768px` (sm:)
- **Tablet**: `768px - 1024px` (md:)
- **Desktop**: `> 1024px` (lg:)

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify

1. Build your project: `npm run build`
2. Drag and drop the `dist/` folder to Netlify
3. Configure custom domain if needed

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add build script to package.json
3. Deploy: `npm run deploy`

## 🔧 Configuration Files

- **`tailwind.config.js`**: Tailwind CSS configuration
- **`postcss.config.js`**: PostCSS plugins configuration
- **`vite.config.js`**: Vite build configuration
- **`package.json`**: Dependencies and scripts

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🎯 Key Components

### Navbar
- Responsive navigation with mobile hamburger menu
- Smooth scrolling to sections
- Theme toggle button
- Transparent to solid background on scroll

### Hero Section
- Animated profile image with pulsing effect
- Call-to-action buttons
- Social media links
- Scroll down indicator

### Skills Section
- Categorized skills with proficiency bars
- Animated skill level indicators
- Additional skills grid

### Projects Section
- Featured projects with large cards
- Smaller project grid
- Hover effects and animations
- Tech stack tags

### Contact Section
- Functional contact form
- Contact information display
- Social media links
- Form validation and submission

## 🚀 Performance Features

- **Code Splitting**: Automatic code splitting with Vite
- **Lazy Loading**: Images and components load as needed
- **Optimized Animations**: Hardware-accelerated animations
- **Minified CSS**: Tailwind CSS purged for production

## 🔒 Security

- Form input validation
- XSS protection
- Secure external links with `rel="noopener noreferrer"`
- Input sanitization

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [Vite](https://vitejs.dev/) - Build tool

## 📞 Support

If you have any questions or need help customizing this portfolio, feel free to:

- Open an issue on GitHub
- Contact me through the contact form
- Reach out on social media

---

**Happy coding! 🎉**
