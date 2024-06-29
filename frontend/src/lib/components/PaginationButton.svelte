<script lang="ts">
	import { goto } from '$app/navigation';
	export let baseUrl: string;
	export let currentPage: number;
	export let totalPage: number;
	$: buttonCount = totalPage > 5 ? 5 : totalPage;
	$: pageLessThanCount = totalPage < 5;
	let hasSkipToLastPage = false;
	$: firstPage = currentPage == 1;
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

<div class="flex">
	<div class="join">
		<button
			class="join-item btn btn-outline"
			disabled={currentPage == 1}
			on:click={async () => goto(`${baseUrl}/${currentPage - 1}`)}>prev</button
		>
		{#each currentButtons as page, index}
			{#if hasSkipToLastPage && index + 1 == buttonCount}
				<button class="join-item btn btn-disabled">{' ...'}</button>
			{/if}
			{#if (firstPage && index == 0) || (!firstPage && index == 1)}
				<a class="join-item btn btn-accent" href={`${baseUrl}/${page}`}>{page}</a>
			{:else}
				<a class="join-item btn" href={`${baseUrl}/${page}`}>{page}</a>
			{/if}
		{/each}
		<button
			class="join-item btn btn-outline"
			disabled={currentPage == totalPage}
			on:click={async () => goto(`${baseUrl}/${currentPage + 1}`)}>next</button
		>
	</div>
</div>
