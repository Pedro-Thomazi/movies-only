import styles from './Header.module.css'

import logo from '../../assets/movie.png'

import { Link, useNavigate } from 'react-router-dom'

import { BiSearchAlt2 } from 'react-icons/bi'

import { FormEvent, useState } from 'react'

const Header = () => {

  const [search, setSearch] = useState<string>('')
  const navigate = useNavigate()

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!search) return

    navigate(`/search?q=${search}`)
    setSearch('')
  }

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Link to='/'>
          <img className={styles.logo} src={logo} alt="Logo Movies Only" />
          <h1 className={styles.title}>Movies<span>Only</span></h1>
        </Link>
      </div>

      <form onSubmit={handleSubmit} className={styles.search}>
        <input type="text"
          placeholder='Busque por um filme'
          onChange={(e) => setSearch(e.target.value)}
          value={search} />
        <button>
          <BiSearchAlt2 />
        </button>
      </form>
    </header>
  )
}

export default Header