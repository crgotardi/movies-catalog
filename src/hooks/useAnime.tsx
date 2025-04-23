import { useState, useCallback } from 'react'
import { 
    getTopAnimes as getTop, 
    getRecommendationAnimes as getRecommendations,
    searchAnime as search 
} from '@/api/jikan/services'
import { TrendingAnime, Anime } from '@/types/anime'
import { formatAnime, formatRecommendedAnime } from '@/helpers/formatFromJikanApi'
import { TopAnimesApiResponse } from '@/types/api/jikan'

const useAnime = () => {
    const [trendingAnimes, setTrendingAnimes] = useState<TrendingAnime[]>([])
    const [isTrendingAnimesLoading, setIsTrendingAnimesLoading] = useState(false)

    const [animes, setAnimes] = useState<Anime[]>([])
    const [isAnimesLoading, setIsAnimesLoading] = useState(false)

    const getTrendingAnimes = useCallback(async () => {
        setIsTrendingAnimesLoading(true)

        const res = await getRecommendations({ page: 1 })
        const topFiveTrendingAnimes = res?.data?.data?.slice(0, 5) || []

        const data: TrendingAnime[] = formatRecommendedAnime(topFiveTrendingAnimes)
        setTrendingAnimes(data)

        setIsTrendingAnimesLoading(false)
    }, [])

    const getTopAnimes = useCallback(async (page: number) => {
        setIsAnimesLoading(true)

        const res = await getTop({ page, limit: 20 })
        const data: Anime[] = formatAnime(res?.data?.data)
        setAnimes(data)

        setIsAnimesLoading(false)
    }, [])

    const searchAnime = useCallback(async (query: string, page: number) => {
        setIsAnimesLoading(true)

        const res = await search({ 
            page,
            q: query
        })
        const data: Anime[] = formatAnime(res?.data?.data)
        setAnimes(data)

        setIsAnimesLoading(false)
    }, [])

    return {
        animes,
        trendingAnimes,
        isAnimesLoading,
        isTrendingAnimesLoading,
        getTopAnimes,
        getTrendingAnimes,
        searchAnime,
    }
}

export default useAnime