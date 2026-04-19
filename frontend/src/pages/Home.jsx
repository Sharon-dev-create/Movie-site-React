import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api"; 
import "../css/Home.css";



function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadPopularMovies = async () => {
            setLoading(true);
            setError(null);
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.error(err);
                setError("Failed to load movies.");
            } finally {
                setLoading(false);
            }
        };

        loadPopularMovies();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        const trimmedQuery = searchQuery.trim();
        if (!trimmedQuery) return;
        if(loading) return;

        setLoading(true);
        setError(null);

        try {
            const results = await searchMovies(trimmedQuery);
            setMovies(results);
        } catch (err) {
            console.error(err);
            setError("Search failed. Please try again.");
        } finally {
            setLoading(false);
        }

        setSearchQuery("");
    };

    return (
        <div className="home"> 
           <form onSubmit={handleSearch} className= "search-form">
            <input type="text"
             placeholder="search for movies.." 
             className="search-input"
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
           </form>

           {loading && <p style={{ textAlign: 'center' }}>Loading movies...</p>}
           {error && <p style={{ textAlign: 'center', color: '#f44336' }}>{error}</p>}
           {!loading && !error && movies.length === 0 && (
               <p style={{ textAlign: 'center' }}>No movies found.</p>
           )}

         <div className="movies-grid">
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
         </div>
    </div>
    );
}

export default Home;