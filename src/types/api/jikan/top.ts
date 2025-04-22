import { JikanAnime } from "./anime";
import { Pagination } from "./pagination";

export type TopAnimesApiResponse = {
    data: JikanAnime[],
    pagination: Pagination
}
