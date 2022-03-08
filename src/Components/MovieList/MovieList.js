import React from 'react'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = ({movies,inputSearch, rating}) => {
    
    return (
        <div className='movie-list' >
            {movies
                .filter(movie => movie.title.toUpperCase().includes(inputSearch.toUpperCase())
                &&
                movie.rate >= rating
            )
            .map(el => <MovieCard movie={el} key={el.id} />)}
        </div>
    );
    
}


export default MovieList