import { ImageApi } from "./image"
import { UserApi } from "./user"

export type RecommendationAnimeApi = {
    mal_id: string,
    date: string,
    entry: {
        url: string,
        title: string,
        mal_id: number,
        images: {
            jpg: ImageApi,
            webp: ImageApi,
        }
    }[],
    content: string,
    user: UserApi,
}