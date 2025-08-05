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

export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const title = data.get("title") as string;
        const year = parseInt(data.get("year") as string);
        const imdb_rating = parseFloat(data.get("imdb_rating") as string);

        await db.movie.create({
            data: {
                title,
                year,
                imdb_rating,
            }
        })
    }
};