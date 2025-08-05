<script lang="ts">
    import StarPicker from "$lib/StarPicker.svelte";

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
        <div class="space-y-1">
            <div class="font-medium text-base">{movie.title}</div>
            <div class="text-gray-600 text-sm">{movie.year}</div>
            <div class="flex gap-4">
                <div class="text-gray-600 text-sm flex items-center gap-1">
                    <img class="w-4 h-4" src="/imdb_logo.webp" alt="" />
                    <span class="font-medium">{movie.imdb_rating}</span>
                </div>
                <div class="text-gray-600 text-sm flex items-center gap-1">
                    <img class="w-4 h-4" src="/star.webp" alt="" />
                    <span class="font-medium">0</span>
                </div>
            </div>
        </div>
    </div>
{/each}
