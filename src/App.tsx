import { useCallback, useEffect, useState } from 'react'
import './App.css'
import Header from '@/components/Header.tsx'
import Logo from '@/components/Logo.tsx'
import Search from '@/components/Search.tsx'
import TrendingList from '@/components/TrendingList.tsx'
import Grid from '@/components/Grid.tsx'
import Card from '@/components/Card.tsx'
import useAnime from '@/hooks/useAnime.tsx'
import usePagination from './hooks/usePagination'

function App() {
  const {
    animes,
    trendingAnimes,
    isAnimesLoading,
    isTrendingAnimesLoading,
    getTopAnimes,
    getTrendingAnimes, 
    searchAnime,
  } = useAnime()

  const { currentPage, onNavigateNext, onNavigatePrevious, resetPagination } = usePagination()

  const [query, setQuery] = useState('')

  useEffect(() => {
    getTrendingAnimes()
  }, [])

  const fetchGridData = useCallback(() => {
    if (query) {
      searchAnime(query, currentPage)
      return
    }
    
    getTopAnimes(currentPage)
  }, [query, currentPage])

  useEffect(() => {
    resetPagination()
  }, [query])

  useEffect(() => {
    fetchGridData()
  }, [currentPage, query])

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <Header>
          <Header.Logo>
            <Logo src="/logo.png" alt="logo" />
          </Header.Logo>
          <Header.Heading>
            <h1>
              Find 
              <span className="text-gradient"> Animes </span>
              You’ll Love Without the Hassle
            </h1>
          </Header.Heading>
        </Header>

        <TrendingList list={trendingAnimes} isLoading={isTrendingAnimesLoading} />

        <Search 
          placeholder="Search through 300+ animes online"
          handleSearch={(query) => setQuery(query?.trim())}
        />

        <Grid 
          title="Popular" 
          isLoading={isAnimesLoading}
          paginationProps={{ currentPage, onNavigateNext, onNavigatePrevious }}
        >
          {animes.map(anime => (
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
