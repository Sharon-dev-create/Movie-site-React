# Movie Website React

A modern React application for exploring movies, built with Vite. Discover popular movies, search for your favorites, and save them to your personal favorites list.

## 🚀 Live Demo

Check out the live application: [Movie Website on Vercel](https://moviewebsite-9w3eht0gc-sharon-emmanuels-projects-bd854b70.vercel.app)

## ✨ Features

- **Movie Discovery**: Browse popular movies from The Movie Database (TMDB)
- **Search Functionality**: Find movies by title
- **Favorites System**: Save and manage your favorite movies
- **Responsive Design**: Optimized for desktop and mobile devices
- **Fast Performance**: Built with Vite for lightning-fast development and builds

## 🏗️ Project Structure

```
src/
├── components/
│   ├── MovieCard.jsx      # Movie card component with favorite toggle
│   └── NavBar.jsx         # Navigation bar
├── pages/
│   ├── Home.jsx           # Main page with search and movie grid
│   └── Favorites.jsx      # Favorites page
├── contexts/
│   └── MovieContext.jsx   # React context for movie state management
├── services/
│   └── api.js             # TMDB API integration
├── css/                   # Component-specific styles
└── App.jsx                # Root component with routing
```

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd movie-website-react/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 🚀 Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

## 📦 Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code quality

## 🔧 Technologies Used

- **React** 19.2.4 - UI library
- **Vite** 8.0.4 - Build tool and dev server
- **React Router** - Client-side routing
- **TMDB API** - Movie data source
- **CSS Modules** - Component styling

## 📝 Notes

- TMDB API key is configured in `src/services/api.js`
- Search and popular movie fetching are fully implemented
- Favorites feature includes UI and basic state management
- Consider adding local storage or a backend for persistent favorites

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
