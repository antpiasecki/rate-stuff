import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import db from "$lib/db";

export const actions: Actions = {
    search: async ({ request }) => {
        const data = await request.formData();
        const query = data.get("query") as string;

        const resp = await fetch("https://api.imdbapi.dev/search/titles?query=" + encodeURIComponent(query))
        const results = await resp.json();

        return { results }
    },
    add: async ({ request }) => {
        const data = await request.formData();
        const movie = JSON.parse(data.get("data") as string);

        // TODO: is encodeURIComponent enough here?
        const resp = await fetch("https://api.imdbapi.dev/titles/" + encodeURIComponent(movie.id))
        const result = await resp.json();
        const genres = result?.genres ? result.genres.join(",") : "";

        await db.movie.create({
            data: {
                title: movie.primaryTitle,
                year: movie.startYear,
                genres,
                imdb_image: movie.primaryImage.url,
                imdb_rating: movie.rating.aggregateRating,
            }
        })

        redirect(302, "/")
    }
};