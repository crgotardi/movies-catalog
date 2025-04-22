import { Anime } from "./anime"
import { Pagination, PaginationRequest } from "./pagination"

export type SearchAnimeRequest = PaginationRequest & {
    q: string,
}

export type SearchAnime = {
    data: Anime[],
    pagination: Pagination
}