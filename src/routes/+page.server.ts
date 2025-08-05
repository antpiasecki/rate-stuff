import db from "$lib/db";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const movies = await db.movie.findMany({
        orderBy: {
            imdb_rating: "desc",
        }
    });

    return { movies };
};