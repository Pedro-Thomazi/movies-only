import styles from './Movie.module.css'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from 'react-icons/bs'

import MovieCard from '../../Components/MovieCard/MovieCard'

const moviesUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Movie = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState<any>(null)


  const getMovie = async (url: string) => {
    const res = await fetch(url)
    const data = await res.json()

    setMovie(data)
  }

  useEffect(() => {
    const movieUrl = `${moviesUrl}${id}?${apiKey}`

    getMovie(movieUrl)
  }, [])

  const formatCurrency = (number:number) => {
    return number.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }


  return (
    <div className='container'>
      {movie && (
        <div className='row'>
          <div className='col-md-6'>
            <MovieCard movie={movie} showLink={false} />
          </div>
          <div id={styles.infoContainer} className='col-md-6'>
            <p className={styles.tagline}>{movie.tagline}</p>
            <div className={styles.infoMovie}>
              <h3><BsWallet2 /> Orçamento:</h3>
              <p>{formatCurrency(movie.budget)}</p>
            </div>
            <div className={styles.infoMovie}>
              <h3><BsGraphUp /> Receita:</h3>
              <p>{formatCurrency(movie.revenue)}</p>
            </div>
            <div className={styles.infoMovie}>
              <h3><BsHourglassSplit /> Duração:</h3>
              <p>{movie.runtime} minutos</p>
            </div>
            <div className={styles.infoMovie} id={styles.description}>
              <h3><BsFillFileEarmarkTextFill /> Descrição:</h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Movie