<script lang="ts">
    const { data } = $props();

    let rating = $state(data?.movie?.user_rating || 5);
    let hover_rating = $state(0);

    function get_star_class(index: number): string {
        return index <= (hover_rating || rating)
            ? "text-yellow-400"
            : "text-gray-300";
    }
</script>

<div class="max-w-md mx-auto my-8">
    <a
        href="/"
        class="block text-center px-3 py-2 bg-gray-800 text-white text-sm rounded hover:bg-gray-700 cursor-pointer"
    >
        Back
    </a>
</div>

<div class="max-w-md mx-auto p-4 border rounded flex gap-4">
    <div class="w-16 h-auto flex-shrink-0">
        <img
            src={data.movie.imdb_image}
            alt=""
            class="w-full object-cover rounded-xl"
        />
    </div>
    <div class="space-y-1 grow">
        <div class="font-medium text-base">{data.movie.title}</div>
        <div class="text-gray-600 text-sm">{data.movie.year}</div>
        <div class="flex gap-4">
            <div class="text-gray-600 text-sm flex items-center gap-1">
                <img class="w-4 h-4" src="/imdb_logo.webp" alt="" />
                <span class="font-medium">{data.movie.imdb_rating}</span>
            </div>
            <div class="text-gray-600 text-sm flex items-center gap-1">
                <img class="w-4 h-4" src="/star.webp" alt="" />
                <span class="font-medium">{data.movie.user_rating}</span>
            </div>
        </div>

        <div class="flex items-center">
            {#each Array(10).fill(0) as _, i}
                <button
                    type="button"
                    class="p-1 focus:outline-none"
                    onclick={() => (rating = i + 1)}
                    onmouseenter={() => (hover_rating = i + 1)}
                    onmouseleave={() => (hover_rating = 0)}
                    aria-label={`Rate ${i + 1} stars`}
                >
                    <span class={`text-2xl ${get_star_class(i + 1)}`}>
                        {#if (hover_rating || rating) >= i + 1}
                            ★
                        {:else}
                            ☆
                        {/if}
                    </span>
                </button>
            {/each}
        </div>

        <form method="post" action="?/update_rating">
            <input type="hidden" name="rating" value={rating} />
            <button
                type="submit"
                class="block text-center px-3 py-2 w-full bg-gray-800 text-white text-sm rounded hover:bg-gray-700 cursor-pointer"
            >
                Save
            </button>
        </form>
    </div>
</div>
