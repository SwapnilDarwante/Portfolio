# Portfolio Demo Guide

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to `http://localhost:5173`

## ✨ Features to Test

### 🎨 Theme Toggle
- Click the sun/moon icon in the navbar to switch between light and dark modes
- Theme preference is saved in local storage

### 📱 Responsive Design
- Resize your browser window to test mobile, tablet, and desktop layouts
- Test the mobile hamburger menu on small screens

### 🎭 Animations
- Scroll through the page to see smooth animations
- Hover over project cards and buttons for interactive effects
- Watch the loading spinner on initial page load

### 🔗 Navigation
- Click navigation links to smoothly scroll to sections
- Use the back-to-top button in the footer
- Test mobile navigation menu

### 📝 Contact Form
- Fill out the contact form (simulated submission)
- Test form validation
- See loading states and success/error messages

### 🎯 Interactive Elements
- Hover over project cards to see tech stack and links
- Click on social media icons
- Test the skills proficiency bars

## 🛠️ Customization

### Personal Information
- Update `src/sections/Hero.jsx` with your name and bio
- Modify `src/sections/About.jsx` with your experience
- Edit `src/sections/Skills.jsx` with your skills
- Update `src/sections/Projects.jsx` with your projects
- Change `src/sections/Contact.jsx` with your contact details

### Styling
- Modify `tailwind.config.js` for custom colors and fonts
- Update `src/index.css` for additional custom styles

### Theme
- Customize theme behavior in `src/context/ThemeContext.jsx`

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel**: Connect GitHub repo for automatic deployment
- **Netlify**: Drag and drop the `dist/` folder
- **GitHub Pages**: Use the `dist/` folder

## 🔧 Troubleshooting

### Common Issues
1. **Node.js Version**: Ensure you have Node.js 18+ installed
2. **Dependencies**: Run `npm install` if you encounter module errors
3. **Build Errors**: Check console for specific error messages

### Performance
- The app includes lazy loading and optimized animations
- Images are loaded from Unsplash for demo purposes
- Replace with your own images for production

## 📱 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

**Enjoy your new portfolio! 🎉**
