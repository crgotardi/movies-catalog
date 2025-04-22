import { Anime, TrendingAnime } from "@/types/anime";
import { JikanAnime, JikanRecommendationAnime } from "@/types/api/jikan";

/**
 * @description Format a list of JikanAnime objects into an array of Anime objects.
 * @param {JikanAnime[]} animes - An array of JikanAnime objects received from the Jikan API.
 * @returns {Anime[]} An array of Anime objects formatted for the frontend.
 */
export function formatAnime(animes: JikanAnime[]): Anime[] {
    if (!animes?.length) return [];

    const formattedAnimes: Anime[] = animes.map((anime: JikanAnime) => {
        return {
            id: anime.mal_id,
            title: anime.title,
            cover: anime.images.jpg.image_url,
            rating: anime.score,
            genre: anime.genres.length > 0 ? anime.genres[0].name : "N/A",
            year: anime.year,
            synopsis: anime.synopsis
        };
    });

    return formattedAnimes;
}

/**
 * @description Format a list of JikanRecommendationAnime objects into an array of Anime objects.
 * @param {JikanAnime[]} animes - An array of JikanRecommendationAnime objects received from the Jikan API.
 * @returns {Anime[]} An array of Anime objects formatted for the frontend.
 */
export function formatRecommendedAnime(animes: JikanRecommendationAnime[]): TrendingAnime[] {
    if (!animes?.length) return [];

    const formattedAnimes: TrendingAnime[] = animes.map((anime: JikanRecommendationAnime, index: number) => {
        return {
            position: index + 1,
            cover: anime.entry[1].images.jpg.image_url
        };
    });

    return formattedAnimes;
}