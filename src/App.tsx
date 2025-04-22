import { useCallback, useEffect } from 'react'
import './App.css'
import Header from '@/components/Header.tsx'
import Logo from '@/components/Logo.tsx'
import Search from '@/components/Search.tsx'
import TrendingList from '@/components/TrendingList.tsx'
import Grid from '@/components/Grid.tsx'
import Card from '@/components/Card.tsx'
import useAnime from '@/hooks/useAnime.tsx'

function App() {
  const { trendingAnimes, getTrendingAnimes, topAnimes, getTopAnimes } = useAnime()

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

        <TrendingList list={trendingAnimes} />

        <Grid title="Popular">
          {topAnimes.map(anime => (
            <li key={anime.id}>
              <Card>
                <Card.Cover src={anime.cover} alt={anime.title} />
                <Card.Title>{anime.title}</Card.Title>
                <div className="content">
                  <Card.Rating><p>{anime.rating}</p></Card.Rating>
                  <Card.Content>{`${anime.genre} • ${anime.year}`}</Card.Content>
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
