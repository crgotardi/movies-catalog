export type PaginationRequest = {
    page: number,
    limit?: number,
}

export type Pagination = {
    has_next_page: boolean,
    last_visible_page: number,
    current_page?: number,
    items?: {
        count: number,
        total: number,
        per_page: number
    }
}