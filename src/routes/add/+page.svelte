<script lang="ts">
    const { form } = $props();
</script>

<svelte:head>
    <title>Search IMDb</title>
</svelte:head>

<div class="max-w-md mx-auto my-8">
    <a
        href="/"
        class="block text-center px-3 py-2 bg-gray-800 text-white text-sm rounded hover:bg-gray-700 cursor-pointer"
    >
        Back
    </a>
</div>

<form
    method="post"
    action="?/search"
    class="max-w-md mx-auto p-4 border rounded"
>
    <div class="mb-3">
        <label class="block text-sm font-medium mb-1">
            Query
            <input
                type="text"
                name="query"
                class="w-full px-2 py-1 border rounded text-sm"
                required
            />
        </label>
    </div>

    <button
        type="submit"
        class="px-3 py-1 bg-gray-800 text-white text-sm rounded hover:bg-gray-700 cursor-pointer"
    >
        Search
    </button>
</form>

{#if form?.results?.titles}
    {#each form?.results?.titles as movie}
        <div class="max-w-md mx-auto p-4 border rounded mb-3 flex gap-3">
            <div class="w-16 h-auto flex-shrink-0">
                <img
                    src={movie.primaryImage?.url}
                    alt=""
                    class="w-full object-cover rounded-xl"
                />
            </div>
            <div class="space-y-1 grow">
                <div class="font-medium text-base">
                    {movie.primaryTitle}
                </div>
                <div class="text-gray-600 text-sm">{movie.startYear}</div>
                <div class="text-gray-600 text-sm flex items-center gap-1">
                    <img class="w-4 h-4" src="/star.webp" alt="" />
                    <span class="font-medium">
                        {movie.rating?.aggregateRating}
                    </span>
                </div>
            </div>

            <form method="post" action="?/add" class="my-auto">
                <input
                    type="hidden"
                    name="data"
                    value={JSON.stringify(movie)}
                />
                <button
                    type="submit"
                    class="py-1 px-3 text-xl font-semibold bg-gray-800 text-white rounded hover:bg-gray-700 cursor-pointer"
                >
                    +
                </button>
            </form>
        </div>
    {/each}
{/if}
