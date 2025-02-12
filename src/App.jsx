import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";

import Home from "./components/home/home";
import MovieList from "./components/movieList/movieList";
import Movie from "./components/movieDetails/movie";
import Login from "./components/User/login";
import Register from "./components/User/register";
import Dashboard from "./components/User/dashboard";

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="movie/:id" element={<Movie />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
