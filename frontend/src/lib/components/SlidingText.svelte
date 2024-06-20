<script lang="ts">
	import type { SlidingDirectionType } from '$lib';
	export let spanProps: string = '';
	export let wordLength: number = 12;
	export let slidingDirection: SlidingDirectionType = 'forward';
</script>

<div class="w-full flex items-center overflow-hidden">
	<div class={slidingDirection == 'forward' ? 'slide-forwards' : 'slide-backwards'}>
		{#each { length: wordLength } as _}
			<div class="whitespace-nowrap inline-flex items-center justify-center text-9xl">
				<span class={spanProps}><slot /></span>
			</div>
		{/each}
	</div>
</div>
