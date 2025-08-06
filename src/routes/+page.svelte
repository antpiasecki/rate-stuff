<script lang="ts">
    const { data } = $props();
</script>

<svelte:head>
    <title>Rate Stuff</title>
</svelte:head>

<div class="max-w-md mx-auto my-8">
    <a
        href="/add"
        class="block text-center px-3 py-2 bg-gray-800 text-white text-sm rounded hover:bg-gray-700 cursor-pointer"
    >
        Add
    </a>
</div>

{#each data.movies as movie}
    <div class="max-w-md mx-auto p-4 border rounded mb-3 flex gap-4">
        <div class="w-16 h-auto flex-shrink-0">
            <img
                src={movie.imdb_image}
                alt=""
                class="w-full object-cover rounded-xl"
            />
        </div>
        <div class="space-y-1 grow">
            <div class="font-medium text-base">{movie.title}</div>
            <div class="text-gray-600 text-sm">{movie.year}</div>
            <div class="text-gray-600 text-sm">
                {movie.genres.replaceAll(",", " • ")}
            </div>
            <div class="flex gap-4">
                <div class="text-gray-600 text-sm flex items-center gap-1">
                    <img class="w-4 h-4" src="/imdb_logo.webp" alt="" />
                    <span class="font-medium">{movie.imdb_rating}</span>
                </div>
                <div class="text-gray-600 text-sm flex items-center gap-1">
                    <img class="w-4 h-4" src="/star.webp" alt="" />
                    <span class="font-medium">{movie.user_rating}</span>
                </div>
            </div>
            <div class="text-gray-600 text-sm">{movie.user_review}</div>
        </div>

        <a
            href={`/edit/${movie.id}`}
            class="my-auto flex justify-center items-center min-h-9 min-w-9 text-xl font-semibold bg-gray-800 text-white rounded hover:bg-gray-700 cursor-pointer"
            aria-label="Edit"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                ><path
                    d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                /><path
                    d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                /></svg
            >
        </a>
    </div>
{/each}
