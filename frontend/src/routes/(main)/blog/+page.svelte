<script lang="ts">
	import { BlogCard } from '$lib';
	import { PUBLIC_STRAPI_URL } from '$env/static/public';
	/** @type { import('./$houdini').PageData } */
	export let data;

	$: ({ PostsInfo } = data);
</script>

<div class="m-8 flex items-center justify-center">
	<div class="grid grid-cols-3 gap-16">
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
</div>
