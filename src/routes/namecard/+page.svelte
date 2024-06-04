<script lang="ts">
	import { constants } from '$lib';
</script>

<div class="flex h-screen items-center justify-center">
	<div class="card w-96 bg-primary shadow-xl">
		<div class="flex flex-col items-center pb-4">
			<div class="avatar mt-4">
				<div class="w-24 rounded-full">
					<img src="/images/jeef.arts_logo.png" alt="Avatar" />
				</div>
			</div>
			<h1 class="mt-4 text-xl font-medium">Jeff Ng</h1>
			<div class="mt-4 flex space-x-3 md:mt-6 rtl:space-x-reverse">
				<span class="text-sm text-gray-500">artist ·</span>
				<span class="text-sm text-gray-500">software engineer</span>
				<span class="text-sm text-gray-500">· human</span>
			</div>

			<div class="mt-8 grid grid-rows-none gap-2">
				{#each Object.entries(constants.socialMediaLinks) as [title, socialMediaLink]}
					<a class="btn btn-secondary btn-wide" href={socialMediaLink}>{title}</a>
				{/each}
			</div>
			<div class="mt-4 flex space-x-3 md:mt-6 rtl:space-x-reverse">
				<a class="btn btn-accent" href="./">See my website</a>
				<a class="btn btn-outline btn-accent dark:text-white" href="mailto:50jeffng@gmail.com"
					>Mail me</a
				>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.red.500);
	}
</style>
