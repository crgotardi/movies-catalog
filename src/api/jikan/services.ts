import toast from 'react-hot-toast';
import { AxiosRequestConfig } from 'axios'
import jikanApi from './index'

export async function getTop(params: AxiosRequestConfig<{}>) {
    try {
        const res = await jikanApi.get('/top/anime', {
            params: params
        })

        return res
    } catch(error) {
        toast.error(`error getting top animes: ${error}`)
    }
}

export async function getRecommendations(params?: AxiosRequestConfig<any> | undefined) {
    try {
        const res = await jikanApi.get('/recommendations/anime', {
            params: params
        })

        return res
    } catch(error) {
        toast.error(`error getting trending animes: ${error}`)
    }
}

export async function search(params?: AxiosRequestConfig<any> | undefined) {
    try {
        const res = await jikanApi.get('/anime', {
            params: params
        })

        return res
    } catch(error) {
        toast.error(`error getting trending animes: ${error}`)
    }
}