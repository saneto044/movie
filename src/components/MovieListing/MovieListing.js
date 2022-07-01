import React from 'react'
import './MovieListing.scss'
import { useSelector } from 'react-redux'
import { getAllMovies ,getAllShows} from '../../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard'

const MovieListing = () => {
  const movies = useSelector(getAllMovies)
  const shows = useSelector(getAllShows)
  let renderMovies,renderShows = '';
  console.log(movies)
  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie,index) => (
      <MovieCard key={index} data={movie} />
    ))
  ):(
    <div className='movies-error'>
      <h3>{movies.Error} error</h3>
    </div>
  )

  renderShows = shows.Response === "True" ? (
    shows.Search.map((movie,index) => (
      <MovieCard key={index} data={movie} />
    ))
  ):(
    <div className='shows-error'>
      <h3>{shows.Error} error</h3>
    </div>
  )
  console.log(renderMovies)
  console.log(movies.Response)
  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'>{renderMovies} </div>
      </div>
      <div className='show-list'>
        <h2>Shows</h2>
        <div className='movie-container'>{renderShows}</div>
      </div>
    </div>
  )
}

export default MovieListing