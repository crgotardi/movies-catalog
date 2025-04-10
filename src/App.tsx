import { useCallback } from 'react'
import './App.css'
import Header from './components/Header'
import Logo from './components/Logo'
import Search from './components/Search'
import TrendingList from './components/TrendingList.tsx'
import Grid from './components/Grid.tsx'
import Card from './components/Card.tsx'

function App() {
  const handleSearch = useCallback((query: string) => {
    console.log('searching...', query)
  }, [])

  const trendingMovies = [
    {
      position: 1,
      cover: '/d&d.png'
    },
    {
      position: 2,
      cover: '/d&d.png'
    },
    {
      position: 3,
      cover: '/d&d.png'
    },
    {
      position: 4,
      cover: '/d&d.png'
    },
    {
      position: 5,
      cover: '/d&d.png'
    },
  ]

  const movies = [
    {
      id: 1,
      cover: '/the-witcher.png',
      title: 'The Witcher Volume 2',
      genre: 'Action',
      rating: 4.8,
      year: 2022
    },
    {
      id: 2,
      cover: '/the-witcher.png',
      title: 'The Witcher Volume 2',
      genre: 'Action',
      rating: 4.8,
      year: 2022
    },
    {
      id: 3,
      cover: '/the-witcher.png',
      title: 'The Witcher Volume 2',
      genre: 'Action',
      rating: 4.8,
      year: 2022
    },
    {
      id: 4,
      cover: '/the-witcher.png',
      title: 'The Witcher Volume 2',
      genre: 'Action',
      rating: 4.8,
      year: 2022
    },
    {
      id: 5,
      cover: '/the-witcher.png',
      title: 'The Witcher Volume 2',
      genre: 'Action',
      rating: 4.8,
      year: 2022
    },
    {
      id: 6,
      cover: '/the-witcher.png',
      title: 'The Witcher Volume 2',
      genre: 'Action',
      rating: 4.8,
      year: 2022
    },
    {
      id: 7,
      cover: '/the-witcher.png',
      title: 'The Witcher Volume 2',
      genre: 'Action',
      rating: 4.8,
      year: 2022
    },
    {
      id: 8,
      cover: '/the-witcher.png',
      title: 'The Witcher Volume 2',
      genre: 'Action',
      rating: 4.8,
      year: 2022
    },
    {
      id: 9,
      cover: '/the-witcher.png',
      title: 'The Witcher Volume 2',
      genre: 'Action',
      rating: 4.8,
      year: 2022
    },
    {
      id: 10,
      cover: '/the-witcher.png',
      title: 'The Witcher Volume 2',
      genre: 'Action',
      rating: 4.8,
      year: 2022
    },
    {
      id: 11,
      cover: '/the-witcher.png',
      title: 'The Witcher Volume 2',
      genre: 'Action',
      rating: 4.8,
      year: 2022
    },
    {
      id: 12,
      cover: '/the-witcher.png',
      title: 'The Witcher Volume 2',
      genre: 'Action',
      rating: 4.8,
      year: 2022
    }
  ]

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <Header>
          <Header.Logo>
            <Logo 
              src="/logo.png" 
              alt="logo"
            />
          </Header.Logo>
          <Header.Cover>
            <img src="/hero.png" alt="hero banner" />
          </Header.Cover>
          <Header.Heading>
            <h1>
              Find 
              <span className="text-gradient"> Movies </span>
              You’ll Love Without the Hassle
            </h1>
          </Header.Heading>
        </Header>

        <Search 
          placeholder="Search through 300+ movies online"
          handleSearch={handleSearch}
        />

        <TrendingList list={trendingMovies} />

        <Grid title="Popular">
          {movies.map(movie => (
            <li key={movie.id}>
              <Card>
                <Card.Cover src={movie.cover} alt={movie.title} />
                <Card.Title title={movie.title} />
                <div className="content">
                  <Card.Rating rating={movie.rating} />
                  <Card.Content content={`${movie.genre} • ${movie.year}`} />
                </div>
              </Card>
            </li>
          ))}
        </Grid>
      </div>
    </main>
  )
}

export default App
