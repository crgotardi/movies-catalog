import toast from 'react-hot-toast';
import jikanApi from './index'
import { PaginationRequest, SearchAnimeRequest } from '@/types/api/jikan';

export async function getTopAnimes(params: PaginationRequest | undefined) {
    try {
        const res = await jikanApi.get('/top/anime', {
            params: params
        })

        return res
    } catch(error) {
        toast.error(`error getting top animes: ${error}`)
        return []
    }
}

export async function getRecommendationAnimes(params?: PaginationRequest | undefined) {
    try {
        const res = await jikanApi.get('/recommendations/anime', {
            params: params
        })

        return res
    } catch(error) {
        toast.error(`error getting anime recommendations: ${error}`)
        return []
    }
}

export async function searchAnime(params?: SearchAnimeRequest | undefined) {
    try {
        const res = await jikanApi.get('/anime', {
            params: params
        })

        return res
    } catch(error) {
        toast.error(`error searching animes: ${error}`)
        return []
    }
}