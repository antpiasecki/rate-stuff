<script lang="ts">
    const { form } = $props();
</script>

<form
    method="post"
    action="?/search"
    class="max-w-sm mx-auto p-4 border rounded my-8"
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
        <div class="max-w-md mx-auto p-4 border rounded mb-3 flex gap-4">
            <div
                class="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex-shrink-0"
            ></div>
            <div class="space-y-1">
                <div class="font-medium text-base">
                    {movie.primaryTitle}
                </div>
                <div class="text-gray-600 text-sm">{movie.startYear}</div>
                <div class="text-gray-600 text-sm flex items-center gap-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-5 h-5 text-yellow-500"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clip-rule="evenodd"
                        />
                    </svg>
                    <span class="font-medium"
                        >{movie.rating?.aggregateRating}</span
                    >
                </div>

                <form method="post" action="?/add">
                    <input
                        type="hidden"
                        name="data"
                        value={JSON.stringify(movie)}
                    />
                    <button type="submit">+</button>
                </form>
            </div>
        </div>
    {/each}
{/if}
