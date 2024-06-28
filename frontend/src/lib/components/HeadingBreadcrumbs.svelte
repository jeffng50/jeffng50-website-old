<script lang="ts">
	export let id: string = '';
</script>

<div
	class={`bg-accent breadcrumbs sticky top-0 max-w-full flex-wrap items-center justify-center text-2xl ${$$restProps.class || ''}`}
	{id}
>
	<slot></slot>
</div>
