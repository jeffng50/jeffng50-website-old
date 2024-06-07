<script lang="ts">
	export let showModal: boolean;
	export let closeText: string = 'close';
	export let closeDialogAction: () => void = () => {};

	let dialog: HTMLDialogElement;
	const closeDialogFunc = () => {
		dialog.close();
		closeDialogAction();
	};

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="flex flex-col" on:click|stopPropagation>
		<slot name="header" />
		<hr />
		<slot />
		<hr />
		<!-- svelte-ignore a11y-autofocus -->
		<button class="btn rounded-none" autofocus on:click={closeDialogFunc}>{closeText}</button>
	</div>
</dialog>
