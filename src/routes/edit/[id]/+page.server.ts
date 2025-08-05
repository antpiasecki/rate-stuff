import db from "$lib/db";
import { error, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
    const movie = await db.movie.findUnique({ where: { id: params.id } });
    if (!movie) {
        error(404, "Movie not found");
    }

    return { movie }
};

export const actions: Actions = {
    update_rating: async ({ request, params }) => {
        const data = await request.formData();
        const rating = parseInt(data.get("rating") as string);

        await db.movie.update({
            where: { id: params.id },
            data: { user_rating: rating }
        })
    }
};