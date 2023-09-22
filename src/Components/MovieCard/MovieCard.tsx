import styles from './MovieCard.module.css'

import { Link } from 'react-router-dom'

import {FaStar} from 'react-icons/fa'

const imageUrl = import.meta.env.VITE_IMG


const MovieCard = ({movie, showLink = true}:any) => {
  return (
    <div className='container'>
      <div className={styles.movie}>
        <img src={imageUrl + movie.poster_path} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p><FaStar />{movie.vote_average}</p>
        {showLink && <Link className='btn principalBtn ' to={`/movie/${movie.id}`}>Detalhes</Link>}
      </div>
    </div>
  )
}

export default MovieCard