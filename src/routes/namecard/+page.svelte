<script lang="ts">
	import { constants } from '$lib';
</script>

<div class="h-screen flex justify-center items-center">
	<div class="card w-96 bg-primary shadow-xl">
		<div class="flex flex-col items-center pb-4">
			<div class="avatar mt-4">
				<div class="w-24 rounded-full">
					<img src="/images/jeef.arts_logo.png" alt="Avatar" />
				</div>
			</div>
			<h1 class="mt-4 text-xl font-medium">Jeff Ng</h1>
			<div class="flex mt-4 space-x-3 rtl:space-x-reverse md:mt-6">
				<span class="text-sm text-gray-500">artist ·</span>
				<span class="text-sm text-gray-500">software engineer</span>
				<span class="text-sm text-gray-500">· human</span>
			</div>

			<div class="mt-8 grid grid-rows-none gap-2">
				{#each Object.entries(constants.socialMediaLinks) as [title, socialMediaLink]}
					<a class="btn btn-accent btn-wide" href={socialMediaLink}>{title}</a>
				{/each}
			</div>
			<div class="flex mt-4 space-x-3 rtl:space-x-reverse md:mt-6">
				<a class="btn btn-secondary" href="./">See my website</a>
				<a class="btn btn-outline btn-secondary dark:text-white" href="mailto:50jeffng@gmail.com"
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
