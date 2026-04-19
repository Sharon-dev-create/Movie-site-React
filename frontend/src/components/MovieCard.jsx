import "../css/MovieCard.css"

function MovieCard({ movie }) {

    function onFavClick() {
        alert(`You have favorited ${movie.title}!`);
    }
    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.poster} alt={movie.title} />
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onFavClick}>
                    ♥
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.genre}</p>
        </div>
    </div>
}

export default MovieCard;