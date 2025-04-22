import { JikanAnime } from "./anime"
import { Pagination, PaginationRequest } from "./pagination"

export type SearchAnimeRequest = PaginationRequest & {
    q: string,
}

export type SearchAnimeApiResponse = {
    data: JikanAnime[],
    pagination: Pagination
}