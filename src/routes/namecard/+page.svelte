<script lang="ts">
	import { constants, Modal } from '$lib';

	let showModal: boolean = false;
	const memeAudio = new Audio('/audio/sad_hampster_violin_meme.mp3');
	const showModalFunc = () => {
		showModal = true;
		memeAudio.play();
	};
	const stopMemeAudio = () => {
		memeAudio.pause();
		memeAudio.currentTime = 0;
	};
</script>

<div class="flex h-screen flex-col items-center justify-center">
	<div class="card w-72 bg-primary shadow-xl md:w-96">
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
	<button class="btn btn-outline mt-8" on:click={showModalFunc}> still unsure? click me </button>
	<Modal bind:showModal closeText="yes i will :)" closeDialogAction={stopMemeAudio}>
		<div class="items-center justify-center text-center">
			<img src="/images/smallest_violin_hamster_me.png" alt="smallest violin hamster meme but me" />
			<p>pls follow</p>
		</div>
	</Modal>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.red.500);
	}
</style>
