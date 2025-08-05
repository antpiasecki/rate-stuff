import db from "$lib/db";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const movies = await db.movie.findMany({
        orderBy: {
            user_rating: "desc",
        }
    });

    return { movies };
};