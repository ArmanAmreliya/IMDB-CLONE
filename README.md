# IMDB Clone 🎬

A modern, responsive web application that replicates the core features of IMDb, built with React, Vite, and Tailwind CSS. Browse popular, top-rated, and upcoming movies, view detailed movie info, and manage user authentication with a clean, intuitive UI.

## 🚀 Features

- **Home Page:**
  - Carousel of trending/popular movies (fetched from TMDB API)
  - Quick links to login/register
  - Movie list previews
- **Movie List Pages:**
  - Browse by Popular, Top Rated, Upcoming
  - Responsive card layout for movies
- **Movie Details:**
  - Full details, ratings, genres, synopsis, production companies
  - Direct links to official homepage and IMDb
- **User Authentication:**
  - Register and login (mocked for demo)
  - Personalized dashboard with welcome and logout
- **Navigation:**
  - Sticky header with IMDb branding and quick links
- **Responsive Design:**
  - Mobile-friendly, fast, and visually appealing

## 🛠️ Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/) (blazing fast dev/build)
- [Tailwind CSS](https://tailwindcss.com/) & Bootstrap for styling
- [React Router v7](https://reactrouter.com/)
- [TMDB API](https://www.themoviedb.org/documentation/api) for movie data
- [React Responsive Carousel](https://www.npmjs.com/package/react-responsive-carousel)

## 📦 Getting Started

1. **Clone the repo:**
   ```bash
   git clone https://github.com/armanamreliya/IMDB-CLONE.git
   cd imdb-clone
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the app locally:**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173)

## 🌐 Deployment

- Deploys easily to Vercel, Netlify, or GitHub Pages.
- Production build:
  ```bash
  npm run build
  npm run preview
  ```

## 📁 Project Structure

- `src/components/` — Reusable UI components (Header, Card, etc.)
- `src/components/home/` — Home page and carousel
- `src/components/movieList/` — Movie list pages
- `src/components/movieDetails/` — Movie details page
- `src/components/User/` — Auth (login, register, dashboard)

## 🙏 Credits

- Movie data & images: [TMDB API](https://www.themoviedb.org/)
- Logo: IMDb (for educational/demo use)

---

> This project is for learning/demo purposes only. Not affiliated with IMDb or TMDB.
