<script lang="ts">
	import { goto } from '$app/navigation';
	export let relativeUrl: string;
	export let currentPage: number;
	export let totalPage: number;
	$: buttonCount = totalPage > 5 ? 5 : totalPage;
	$: pageLessThanCount = totalPage < 5;
	let hasSkipToLastPage = false;
	let firstPage = false;
	// assignment allows currentPage to be reactive, thus functional for loop
	$: currentButtons = Array.from({ length: buttonCount }, (_, i) => {
		if (currentPage + i - 1 > totalPage) {
			return;
		}
		// last index
		if (!pageLessThanCount && i + 1 == buttonCount) {
			hasSkipToLastPage = true;
			return totalPage;
		}
		if (currentPage == 1) {
			firstPage = true;
			return currentPage + i;
		}
		if (i == 0) {
			return 1;
		} else if (i == 1) {
			return currentPage;
		} else {
			return currentPage + i - 1;
		}
	}).filter((e) => e != undefined);
</script>

<div class="flex flex-row">
	<button
		class="btn btn-outline mr-4"
		disabled={currentPage == 1}
		on:click={async () => goto(`.${relativeUrl}?page=${currentPage - 1}`)}>prev</button
	>
	<div class="flex flex-row items-center justify-center gap-2">
		{#each currentButtons as page, index}
			{#if hasSkipToLastPage && index + 1 == buttonCount}
				<span>{' ...'}</span>
			{/if}
			{#if (firstPage && index == 0) || (!firstPage && index == 1)}
				<a class="bg-primary" href={`.${relativeUrl}?page=${page}`}>{page}</a>
			{:else}
				<a href={`.${relativeUrl}?page=${page}`}>{page}</a>
			{/if}
		{/each}
	</div>
	<button
		class="btn btn-outline ml-4"
		disabled={currentPage == totalPage}
		on:click={async () => goto(`.${relativeUrl}?page=${currentPage + 1}`)}>next</button
	>
</div>
