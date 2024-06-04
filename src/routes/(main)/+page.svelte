<script>
	import { Hero, SlidingText } from '$lib';
	import { DEPLOY_ENV } from '$env/static/private';

	console.log(DEPLOY_ENV);
</script>

<div class="flex flex-col rounded-badge bg-base-100 px-4 py-8 md:px-8 md:py-16">
	<Hero />
	<div class="divider"></div>
	<div class="text-center">
		<span
			>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
			been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
			galley of type and scrambled it to make a type specimen book. It has survived not only five
			centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
			was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
			passages, and more recently with desktop publishing software like Aldus PageMaker including
			versions of Lorem Ipsum.</span
		>
	</div>
</div>
<SlidingText spanProps="text-primary-content">testing·</SlidingText>
