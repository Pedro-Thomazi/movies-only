import styles from './Search.module.css'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../../Components/MovieCard/MovieCard'

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY


const Search = () => {
  const [searchParams] = useSearchParams()

  const [movies, setMovies] = useState<any[]>([])
  const query = searchParams.get('q')

  const getSearchMovies = async (url: string) => {
    const res = await fetch(url)
    const data = await res.json()

    setMovies(data.results)
  }

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`

    getSearchMovies(searchWithQueryURL)
  }, [query])


  return (
    <div className='container'>
      <section className={styles.movies}>
        <div className='container' id={styles.seiLa}>
          <h2>Resultados para: <span className={styles.span}>{query}</span></h2>
        </div>
        <ul className='row' id={styles.movieList}>
          {movies.length === 0 && <p>Carregando...</p>}
          {movies.length > 0 && movies.map((movie) => (
            <li className='col col-md-4' key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Search