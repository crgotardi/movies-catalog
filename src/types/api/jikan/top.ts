import { Anime } from "./anime";
import { Pagination } from "./pagination";

export type TopAnimes = {
    data: Anime[],
    pagination: Pagination
}
