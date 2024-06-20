<script lang="ts">
	import { marked } from 'marked';
	import { PUBLIC_STRAPI_URL } from '$env/static/public';
	import { dateOptions } from '$lib';

	/** @type { import('./$houdini').PageData } */
	export let data;
	$: ({ PostWithSlug } = data);
	$: post = $PostWithSlug?.data?.posts?.data[0]?.attributes;
</script>

<div class="flex flex-col items-center justify-center">
	<div class="hero mb-8 flex-col items-center justify-center">
		{#if post.cover.data != null}
			<img
				class="hero-overlay h-96 w-max opacity-60"
				src={PUBLIC_STRAPI_URL + post.cover.data.attributes.url}
				alt="Cover for ${post.title}"
			/>
		{/if}
		<div class="hero-content">
			<h1 class="text-8xl">{post.title}</h1>
		</div>
	</div>

	<div class="mb-8 flex flex-row items-center justify-center gap-4">
		{#each post.tags.data as tag}
			<div class="badge text-black" style:background-color={tag.attributes.color}>
				{tag.attributes.name}
			</div>
		{/each}
	</div>

	{#if post.author.data != null}
		<div class="mb-8 flex flex-col items-start justify-start">
			<div class="flex flex-row items-center justify-center gap-4">
				<div class="avatar">
					<div class="w-16 rounded-full">
						{#if post.author.data.attributes.avatar.data != undefined}
							<img
								class=""
								src={PUBLIC_STRAPI_URL + post.author.data.attributes.avatar.data.attributes.url}
								alt="Author avatar for ${post.author.data.attributes.name}"
							/>
						{/if}
					</div>
				</div>
				<div class="flex flex-col">
					<span>{post.author.data.attributes.name}</span>
					<span>{new Date(post.publishedAt).toLocaleTimeString(undefined, dateOptions)}</span>
				</div>
			</div>
		</div>
	{/if}

	<article class="prose mt-8 w-1/3">
		{@html marked(post.content)}
	</article>
</div>
