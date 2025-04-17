import jikanApi from '../api/jikan/index.ts'
import { useState, useTransition, useCallback } from 'react'
import { TrendingAnime, TopAnime } from '../types/anime'
import { RecommendationAnimeApi } from '../types/api/jikan/recommendations.ts'
import { TopAnimeApi } from '../types/api/jikan/top.ts'

const useAnime = () => {
    const [trendingAnimes, setTrendingAnimes] = useState<TrendingAnime[]>([])
    const [topAnimes, setTopAnimes] = useState<TopAnime[]>([])
    const [isPending, startTransition] = useTransition()

    async function getTrendingAnimes() {
        const res = await jikanApi.get('/recommendations/anime', {
            params: {
                page: 1
            }
        })
    
        const data: TrendingAnime[] = res?.data?.data
            ?.map((anime: RecommendationAnimeApi, index: number) => {
                return {
                    position: index + 1,
                    cover: anime.entry[1].images.jpg.image_url
                }
            })
        
        setTrendingAnimes(data)
    }

    async function getTopAnimes() {
        startTransition(async () => {
            const res = await jikanApi.get('/top/anime', {
                params: {
                    page: 1,
                    limit: 20,
                }
            })
        
            const data: TopAnime[] = res?.data?.data?.map((anime: TopAnimeApi) => {
                return {
                    id: anime.mal_id,
                    title: anime.title,
                    cover: anime.images.jpg.image_url,
                    rating: anime.score,
                    genre: anime.genres[0].name,
                    year: anime.year
                }
            })
            
            setTopAnimes(data)
        })
    }

    return {
        isPending,
        trendingAnimes,
        getTrendingAnimes,
        topAnimes,
        getTopAnimes
    }
}

export default useAnime