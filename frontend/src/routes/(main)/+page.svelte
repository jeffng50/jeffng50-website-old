<script>
	import { marked } from 'marked';
	import { navigating } from '$app/stores';
	import { Hero } from '$lib';

	/** @type { import('./$houdini').PageData } */
	export let data;
	$: ({ HomePage } = data);
	$: console.log($HomePage.data?.homePage?.data);
	$: homePage = $HomePage?.data?.homePage?.data?.attributes;
</script>

<div
	class="rounded-badge bg-base-100 flex flex-col items-center justify-center px-4 py-8 md:px-8 md:py-16"
>
	{#if $navigating || $HomePage.fetching}
		<span class="loading loading-ball loading-lg"></span>
	{:else if homePage != undefined}
		<Hero>{@html marked(homePage.welcomeMessage)}</Hero>
		<div class="divider"></div>
		{#if homePage.body != undefined}
			<div class="prose text-center">
				{@html marked(homePage.body)}
			</div>
		{/if}
	{/if}
</div>
