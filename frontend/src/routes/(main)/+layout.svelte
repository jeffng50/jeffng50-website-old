<script>
	import '../../app.css';
	import { Navbar, Footer, SlidingText } from '$lib';
	import { PUBLIC_DEPLOY_ENV } from '$env/static/public';
</script>

<Navbar />

<main class="container min-w-full px-4 py-8">
	<slot></slot>
</main>

{#if PUBLIC_DEPLOY_ENV == 'staging'}
	<SlidingText spanProps="text-primary-content">testing·</SlidingText>
{/if}

<Footer />

<style lang="postcss">
	:global(body) {
		@apply bg-primary;
		@apply font-sans;
	}
</style>
