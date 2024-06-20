<script lang="ts">
	import { BlogCard } from '$lib';
	import { PUBLIC_STRAPI_URL } from '$env/static/public';
	/** @type { import('./$houdini').PageData } */
	export let data;

	$: ({ PostsInfo } = data);
</script>

<div class="m-8 flex items-center justify-center">
	{#if $PostsInfo.fetching}
		<span class="loading loading-ball loading-lg"></span>
	{:else}
		<div class="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
			{#each $PostsInfo.data.posts.data as post}
				<BlogCard
					title={post.attributes.title}
					description={post.attributes.description}
					imgUrl={post.attributes.cover.data
						? PUBLIC_STRAPI_URL + post.attributes.cover.data.attributes.url
						: undefined}
					tags={post.attributes.tags.data.map(
						// @ts-ignore
						(item) => ({
							name: item.attributes.name,
							color: item.attributes.color
						})
					)}
					slug={post.attributes.slug}
				/>
			{/each}
		</div>
	{/if}
</div>
