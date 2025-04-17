import { useCallback, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Logo from './components/Logo'
import Search from './components/Search'
import TrendingList from './components/TrendingList.tsx'
import Grid from './components/Grid.tsx'
import Card from './components/Card.tsx'
import useAnime from './hooks/useAnime.tsx'

function App() {
  const { trendingAnimes, getTrendingAnimes, topAnimes, getTopAnimes, isPending } = useAnime()

  const handleSearch = useCallback((query: string) => {
    console.log('searching...', query)
  }, [])

  useEffect(() => {
    Promise.all([
      getTrendingAnimes(),
      getTopAnimes(),
    ])
  }, [])

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
          <Header.Heading>
            <h1>
              Find 
              <span className="text-gradient"> Animes </span>
              You’ll Love Without the Hassle
            </h1>
          </Header.Heading>
        </Header>

        <Search 
          placeholder="Search through 300+ animes online"
          handleSearch={handleSearch}
        />

        <TrendingList list={trendingAnimes} isPending={isPending} />

        <Grid title="Popular" isPending={isPending}>
          {topAnimes.map(movie => (
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
