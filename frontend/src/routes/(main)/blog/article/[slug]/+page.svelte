<script lang="ts">
	import { marked } from 'marked';
	import { gfmHeadingId } from 'marked-gfm-heading-id';
	import { PUBLIC_STRAPI_URL } from '$env/static/public';
	import { dateOptions, HeadingBreadcrumbs } from '$lib';

	const regexH2: RegExp = /(?<! )#{2} .+/g;

	/** @type { import('./$houdini').PageData } */
	export let data;
	$: ({ PostWithSlug } = data);
	$: post = $PostWithSlug?.data?.posts?.data[0]?.attributes;
	$: headings = post.content.match(regexH2);

	// @ts-ignore
	const scrollIntoView = ({ target }) => {
		const el = document.getElementById(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			block: 'center',
			behavior: 'smooth'
		});
	};

	marked.use(gfmHeadingId({ prefix: '##-' }));
</script>

{#if $PostWithSlug.fetching}
	<span class="loading loading-ball loading-lg"></span>
{:else}
	{#if post.content != undefined && headings}
		<HeadingBreadcrumbs class="hidden">
			<ul>
				{#each headings as heading}
					<li>
						<a
							href={`${heading.toLowerCase().split(' ').join('-')}`}
							on:click|preventDefault={scrollIntoView}>{heading}</a
						>
					</li>
				{/each}
			</ul>
		</HeadingBreadcrumbs>
	{/if}
	<div class="flex flex-col items-center justify-center">
		<h1 class="mb-8 text-4xl lg:text-8xl">{post.title}</h1>

		<div class="mb-8 flex flex-row items-center justify-center gap-4">
			{#each post.tags.data as tag}
				<div class="badge text-black" style:background-color={tag.attributes.color}>
					{tag.attributes.name}
				</div>
			{/each}
		</div>

		<div class="mb-8 flex items-center justify-center">
			{#if post.cover.data != null}
				<img
					class="h-96 w-full"
					src={PUBLIC_STRAPI_URL + post.cover.data.attributes.url}
					alt="Cover for ${post.title}"
				/>
			{/if}
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

		<article class="prose mt-8 w-4/5">
			{@html marked(post.content)}
		</article>
	</div>
{/if}
