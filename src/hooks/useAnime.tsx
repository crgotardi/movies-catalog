import { useState, useCallback } from 'react'
import { getTop, getRecommendations } from '@/api/jikan/services'
import { TrendingAnime, TopAnime } from '@/types/anime'
import { Anime, RecommendationAnime } from '@/types/api/jikan'

const useAnime = () => {
    const [trendingAnimes, setTrendingAnimes] = useState<TrendingAnime[]>([])
    const [topAnimes, setTopAnimes] = useState<TopAnime[]>([])

    const getTrendingAnimes = useCallback(async () => {
        const res = await getRecommendations()
    
        const data: TrendingAnime[] = res?.data?.data
            ?.map((anime: RecommendationAnime, index: number) => {
                return {
                    position: index + 1,
                    cover: anime.entry[1].images.jpg.image_url
                }
            })
        
        setTrendingAnimes(data)
    }, [])

    const getTopAnimes = useCallback(async () => {
        const res = await getTop()
    
        const data: TopAnime[] = res?.data?.data?.map((anime: Anime) => {
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
    }, [])

    return {
        trendingAnimes,
        topAnimes,
        getTrendingAnimes,
        getTopAnimes
    }
}

export default useAnime