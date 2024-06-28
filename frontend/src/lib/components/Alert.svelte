<script lang="ts">
	import type { AlertMode } from '$lib';
	import IconInformationOutline from '~icons/mdi/information-outline';
	import IconCheckCircleOutline from '~icons/mdi/check-circle-outline';
	import IconAlertOutline from '~icons/mdi/alert-outline';
	import IconEmoticonSadOutline from '~icons/mdi/emoticon-sad-outline';

	export let mode: AlertMode;
	export let title: string;
	export let description: string = '';

	const classname: { [K in AlertMode]: string } = {
		basic: 'shadow-lg',
		info: 'alert-info',
		success: 'alert-success',
		warning: 'alert-warning',
		error: 'alert-error'
	};
	const displayClassname = classname[mode];
</script>

<div role="alert" class={`alert ${displayClassname}`}>
	{#if mode == 'basic' || mode == 'info'}
		<IconInformationOutline class="h-6 w-6 shrink-0" />
	{:else if mode == 'success'}
		<IconCheckCircleOutline class="h-6 w-6 shrink-0" />
	{:else if mode == 'warning'}
		<IconAlertOutline class="h-6 w-6 shrink-0" />
	{:else if mode == 'error'}
		<IconEmoticonSadOutline class="h-6 w-6 shrink-0" />
	{:else}<!-- svelte-ignore empty-block -->{/if}
	<div class="flex flex-col">
		<span>{title}</span>
		<span class="text-xs">{description}</span>
	</div>
</div>
