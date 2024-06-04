<script>
	import '../../app.css';
	import { Navbar, Footer } from '$lib';
</script>

<Navbar />

<main class="container min-w-full px-4 py-8">
	<slot></slot>
</main>

<Footer />

<style lang="postcss">
	:global(body) {
		@apply bg-primary;
		@apply font-sans;
	}
</style>
