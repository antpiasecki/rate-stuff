<script lang="ts">
    let rating = $state(0);
    let hoverRating = $state(0);

    function getStarClass(index: number): string {
        return index <= (hoverRating || rating)
            ? "text-yellow-400"
            : "text-gray-300";
    }
</script>

<div class="flex items-center">
    {#each Array(10).fill(0) as _, i}
        <button
            type="button"
            class="p-1 focus:outline-none"
            onclick={() => (rating = i + 1)}
            onmouseenter={() => (hoverRating = i + 1)}
            onmouseleave={() => (hoverRating = 0)}
            aria-label={`Rate ${i + 1} stars`}
        >
            <span class={`text-2xl ${getStarClass(i + 1)}`}>
                {#if (hoverRating || rating) >= i + 1}
                    ★
                {:else}
                    ☆
                {/if}
            </span>
        </button>
    {/each}
    <span class="ml-2 text-gray-600">{rating}/10</span>
</div>
