<script lang="ts">
	import { page } from '$app/stores';
	import { BlogCard, PaginationButton, Alert } from '$lib';
	import { PUBLIC_STRAPI_URL } from '$env/static/public';
	/** @type { import('./$houdini').PageData } */
	export let data;

	$: ({ PostsInfo } = data);
	$: posts = $PostsInfo?.data?.posts?.data;
	$: meta = $PostsInfo?.data?.posts?.meta;
</script>

<div class="m-8 flex items-center justify-center">
	{#if $PostsInfo.fetching}
		<span class="loading loading-ball loading-lg"></span>
	{:else}
		<div class="flex flex-col items-center justify-center gap-8">
			<Alert
				mode="warning"
				title="still work in progress"
				description="you shouldn't be here >:("
			/>
			<div class="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
				{#if posts != undefined}
					{#each posts as post}
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
				{/if}
			</div>
			<PaginationButton
				relativeUrl={$page.url.pathname}
				currentPage={meta.pagination.page}
				totalPage={meta.pagination.pageCount}
			/>
		</div>
	{/if}
</div>
