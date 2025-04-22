import { Image } from "./image"
import { Pagination } from "./pagination"
import { User } from "./user"

export type RecommendationAnimesApiResponse = {
    data: JikanRecommendationAnime[],
    pagination: Pagination
}

export type JikanRecommendationAnime = {
    mal_id: string,
    date: string,
    entry: {
        url: string,
        title: string,
        mal_id: number,
        images: {
            jpg: Image,
            webp: Image,
        }
    }[],
    content: string,
    user: User,
}