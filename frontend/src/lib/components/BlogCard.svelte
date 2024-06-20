<script lang="ts">
	import type { Tags } from '$lib';

	export let title: string;
	export let description: string = '';
	export let imgUrl: string | undefined = undefined;
	export let tags: Tags[] = [];
	export let slug: string;
</script>

<a class="card w-96 bg-base-100 shadow-xl" href={`/blog/article/${slug}`}>
	{#if imgUrl != undefined}
		<figure>
			<img src={imgUrl} alt="Cover for ${title}" />
		</figure>
	{/if}
	<div class="card-body">
		<h2 class="card-title">
			{title}
			<div class="badge badge-secondary">NEW</div>
		</h2>
		<p>{description}</p>
		<div class="card-actions justify-end">
			{#each tags as tag}
				<div class="badge text-black" style:background-color={tag.color}>{tag.name}</div>
			{/each}
		</div>
	</div>
</a>
