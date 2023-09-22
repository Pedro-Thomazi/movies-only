import styles from './Home.module.css'

import { useState, useEffect } from 'react'

const moviesUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

import MovieCard from '../../Components/MovieCard/MovieCard'

const Home = () => {
  const [topMovies, setTopMovies] = useState<any[]>([])

  const getTopRatedMovies = async (url: string) => {
    const res = await fetch(url)
    const data = await res.json()

    setTopMovies(data.results)
  }

  useEffect(() => {
    const topRatedUrl = `${moviesUrl}top_rated?${apiKey}`

    getTopRatedMovies(topRatedUrl)
  }, [])


  return (
    <div className='container-fluid'>
      <main className={styles.mainHome}>
        <div className='container' id={styles.contant}>
          <div>
            <h2>Explore o Melhor do Mundo do Cinema</h2>
            <p>Seja bem-vindo ao nosso catálogo de filmes, onde você encontrará uma coleção cuidadosamente selecionada de obras cinematográficas incríveis. Aqui, celebramos a sétima arte em toda a sua glória, proporcionando informações essenciais sobre cada filme, incluindo o ano de lançamento, a nota da crítica e muito mais.</p>
            <a className='btn principalBtn' href='#movies'>Ver mais</a>
          </div>
        </div>

        <section className={styles.movies}>
          <div className='container' id={styles.seiLa}>
            <h2 className={styles.h2}>Melhores Filmes</h2>
            <p>Nossa seleção de filmes com as melhores notas é uma verdadeira celebração da excelência cinematográfica. Estas são as obras que cativaram o coração e a mente de críticos e espectadores, elevando-se além das expectativas e deixando uma marca indelével no mundo do cinema. Com histórias envolventes, atuações magistrais e direção visionária, esses filmes são uma ode à arte da narrativa visual. Eles representam o melhor do cinema, proporcionando experiências que transcenderão gerações e continuarão a ser apreciadas como marcos do entretenimento cinematográfico. Explore essa seleção de filmes notáveis e permita-se ser transportado para universos onde a magia do cinema atinge seu auge.</p>
          </div>
          <span id='movies'></span>
          <ul className='row' id={styles.movieList}>
            {topMovies.length === 0 && <p>Carregando...</p>}
            {topMovies.length > 0 && topMovies.map((movie) => (
              <li className='col col-md-4' key={movie.id}>
                <MovieCard movie={movie} />
              </li>
          ))}
          </ul>


        </section>
      </main>
    </div>
  )
}

export default Home