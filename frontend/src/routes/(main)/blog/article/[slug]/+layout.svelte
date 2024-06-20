<script lang="ts">
	import { HeadingBreadcrumbs } from '$lib';

	const regexH2: RegExp = /(?<! )#{2} .+/g;

	/** @type { import('./$houdini').LayoutData } */
	export let data;
	$: ({ PostContentWithSlug } = data);
	$: post = $PostContentWithSlug?.data?.posts?.data[0]?.attributes;
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
</script>

{#if !$PostContentWithSlug.fetching && post.content != undefined && headings}
	<HeadingBreadcrumbs>
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

<slot></slot>
