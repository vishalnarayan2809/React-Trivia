# React Trivia Game 🧠

A modern, interactive trivia quiz application built with React and Vite. Test your knowledge with questions from the Open Trivia Database API, featuring a clean UI and responsive design.

## 🌟 Features

- **Dynamic Questions**: Fetches trivia questions from [Open Trivia Database API](https://opentdb.com/)
- **Fallback System**: Uses local demo data when API is unavailable
- **Interactive Quiz**: Multiple choice questions with radio button selection
- **Real-time Scoring**: Displays correct/incorrect answers with visual feedback
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Clean UI**: Modern design with custom styling and blob decorations

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd React_Trivia/trivia
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎮 How to Play

1. Click "Start Quiz" on the welcome screen
2. Answer all 5 multiple-choice questions by selecting radio buttons
3. Click "Check Answers" to submit your responses
4. View your results with color-coded feedback:
   - 🟢 **Green**: Correct answer
   - 🔴 **Red**: Incorrect answer (your selection)
   - 🟢 **Green**: Correct answer (if you got it wrong)
5. See your final score and click "Play Again" for a new set of questions

## 🛠️ Built With

- **React 19.1.0** - Frontend framework
- **Vite 7.0.0** - Build tool and development server
- **html-entities** - HTML entity decoding
- **CSS3** - Custom styling with Flexbox
- **Open Trivia Database API** - Question source

## 📁 Project Structure

```
trivia/
├── public/
├── src/
│   ├── assets/
│   │   ├── blob1.png
│   │   └── blob2.png
│   ├── components/
│   │   ├── Welcome.jsx      # Welcome screen component
│   │   ├── Quiz.jsx         # Quiz question component
│   │   └── Answers.jsx      # Answer results component
│   ├── App.jsx              # Main application logic
│   ├── App.css              # Component-specific styles
│   ├── index.css            # Global styles
│   ├── main.jsx             # React entry point
│   └── demo.js              # Fallback trivia data
├── index.html               # HTML template
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Key Components

### App.jsx
Main application component managing:
- Game state (welcome, quiz, answers)
- API data fetching with fallback
- Score calculation
- Form handling

### Welcome.jsx
Landing page component with game introduction and start button.

### Quiz.jsx
Individual question component featuring:
- HTML entity decoding for special characters
- Radio button options
- Responsive layout

### Answers.jsx
Results display component showing:
- Color-coded answer feedback
- Disabled form inputs
- Correct answer highlighting

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deploy to Netlify

### Option 1: Deploy from Git Repository (Recommended)

1. **Push your code to a Git repository** (GitHub, GitLab, or Bitbucket):
   ```bash
   # If not already done
   git init
   git add .
   git commit -m "Initial commit: React Trivia Game"
   git branch -M main
   git remote add origin https://github.com/yourusername/react-trivia-game.git
   git push -u origin main
   ```

2. **Deploy on Netlify**:
   - Go to [netlify.com](https://netlify.com) and sign up/login
   - Click "New site from Git"
   - Choose your Git provider (GitHub/GitLab/Bitbucket)
   - Select your repository (`react-trivia-game`)
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - Click "Deploy site"

3. **Custom domain** (optional):
   - Go to Site settings → Domain management
   - Add your custom domain or use the provided `.netlify.app` domain

### Option 2: Manual Deploy

1. **Build the project locally**:
   ```bash
   npm run build
   ```

2. **Deploy the dist folder**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder to the deploy area
   - Your site will be live immediately

### Option 3: Netlify CLI

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Login and deploy**:
   ```bash
   netlify login
   npm run build
   netlify deploy --prod --dir=dist
   ```

### Environment Variables (if needed)

If your app uses environment variables:
1. Go to Site settings → Environment variables
2. Add your variables (e.g., `VITE_API_KEY=your_api_key`)
3. Redeploy the site

### Netlify Configuration

Create a `netlify.toml` file in your project root for advanced configuration:

```toml
[build]
  publish = "dist"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[dev]
  command = "npm run dev"
  port = 5173
```

### Continuous Deployment

Once connected to Git:
- Every push to the main branch automatically triggers a new deployment
- Pull requests create deploy previews
- Branch deploys can be configured for staging environments

### Performance Optimizations

Netlify automatically provides:
- **CDN**: Global content delivery network
- **Compression**: Gzip and Brotli compression
- **Caching**: Intelligent asset caching
- **HTTPS**: Free SSL certificates

### Useful Netlify Features for React Apps

- **Form handling**: Built-in form processing
- **Functions**: Serverless functions for API endpoints
- **Analytics**: Built-in web analytics
- **Split testing**: A/B testing capabilities

### 🔧 Troubleshooting Netlify Deployment

#### Common Issues and Solutions

1. **"html-entities" module not found error**:
   ```bash
   # Install the missing dependency
   npm install html-entities
   
   # Commit the updated package.json
   git add package.json package-lock.json
   git commit -m "Add html-entities dependency"
   git push origin main
   ```

2. **Build fails with dependency errors**:
   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   
   # Test build locally before deploying
   npm run build
   ```

3. **Environment variables not working**:
   - Ensure variables start with `VITE_` prefix
   - Add them in Netlify Site Settings → Environment variables
   - Redeploy after adding variables

4. **404 errors on refresh (SPA routing)**:
   - Ensure `netlify.toml` has the redirect rule:
   ```toml
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

5. **Build command not found**:
   - Verify build settings in Netlify:
     - Build command: `npm run build`
     - Publish directory: `dist`
     - Node version: 18 or higher

#### Quick Fix Commands

```bash
# Fix missing dependencies and redeploy
npm install
git add package.json package-lock.json
git commit -m "Fix dependencies for Netlify deployment"
git push origin main

# Force new deployment
netlify deploy --prod --dir=dist
```

## 🌐 API Integration

The app fetches questions from the Open Trivia Database:
- **Endpoint**: `https://opentdb.com/api.php?amount=5&type=multiple`
- **Fallback**: Local demo data in `src/demo.js`
- **Error Handling**: Graceful fallback for network issues or rate limiting

## 📱 Responsive Design

- Mobile-first approach
- Breakpoint at 420px for optimal mobile experience
- Flexible layout adapting to different screen sizes

## 🎨 Styling

- Custom CSS with CSS Grid and Flexbox
- Google Fonts (Karla) integration
- Color scheme: Blues and grays with accent colors
- Hover effects and smooth transitions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Open Trivia Database](https://opentdb.com/) for providing free trivia questions
- [Vite](https://vitejs.dev/) for the excellent development experience
- [React](https://reactjs.org/) team for the amazing framework

## 🐛 Known Issues

- API rate limiting may occasionally trigger fallback data
- Some special characters in questions require HTML entity decoding

## 🔮 Future Enhancements

- [ ] Difficulty level selection
- [ ] Category filtering
- [ ] Timer functionality
- [ ] High score persistence
- [ ] Question bookmarking
- [ ] Social sharing features

---

Made with ❤️ using React and Vite