# Movie Website React

A React + Vite movie exploration app with a simple home page, favorites page, and movie card UI.

## Project structure

- `src/App.jsx` - root app component and router setup
- `src/components/NavBar.jsx` - top navigation bar for Home and Favorites
- `src/pages/Home.jsx` - main page with search input and movie grid
- `src/pages/Favorites.jsx` - placeholder favorites page
- `src/components/MovieCard.jsx` - presentational movie card with favorite button
- `src/services/api.js` - TMDB API helper functions for popular movies and search
- `src/css/` - component/page-specific styles

## Features

- React application bootstrapped with Vite
- Client-side routing using `react-router-dom`
- Movie card UI with title, genre, and poster
- Favorites page scaffolded for future functionality
- API service prepared for The Movie Database (TMDB)

## Current behavior

- The home page shows a search form and a movie grid
- Submitting the search form currently triggers an alert with the search query
- The favorites page currently displays a placeholder message
- The movie card favorite button currently triggers a browser alert

## Installation

From the `frontend/` folder:

```bash
npm install
```

## Development

Start the Vite development server:

```bash
npm run dev
```

Open the URL shown in the terminal to view the app.

## Build

To create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Available scripts

- `npm run dev` - start the development server
- `npm run build` - build the application for production
- `npm run preview` - preview the production build
- `npm run lint` - run ESLint

## Notes

- This project uses React `^19.2.4` and Vite `^8.0.4`
- The TMDB API key is currently stored in `src/services/api.js`
- Search and popular movie fetching are implemented in `src/services/api.js` but not yet connected to the UI
- The favorites feature is present as a UI route and will need state persistence to store saved movies
