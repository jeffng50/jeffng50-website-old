<script>
	import { isDark, constants } from '$lib';
</script>

<div class="navbar bg-primary text-primary-content pt-8 text-sm lg:h-48">
	<div class="navbar-start px-2 lg:px-16">
		<div class="dropdown flex lg:hidden">
			<div tabindex="0" role="button" class="btn btn-circle btn-ghost">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/></svg
				>
			</div>
			<ul
				class="menu dropdown-content menu-sm rounded-box bg-base-100 z-[1] mt-3 flex w-52 flex-col gap-8 p-2 shadow"
			>
				{#each Object.entries(constants.navbarLinks) as [title, navbarLink], index}
					<li><a class="btn btn-primary" href={navbarLink}>{title}</a></li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="navbar-center">
		<div class="flex lg:hidden">
			<div class="flex items-center justify-center text-lg"><span>Jeff Ng</span></div>
		</div>
		<div class="hidden flex-col gap-8 lg:flex">
			<div class="flex items-center justify-center text-2xl"><span>Jeff Ng</span></div>
			<ul class="flex flex-row gap-4 px-4">
				{#each Object.entries(constants.navbarLinks) as [title, navbarLink], index}
					<li
						class="rounded-btn hover:bg-base-content hover:text-base-content px-4 py-2 hover:bg-opacity-10"
					>
						<a href={navbarLink}>{title}</a>
					</li>
					{#if index < Object.entries(constants.navbarLinks).length - 1}
						<li class="py-2"><span>|</span></li>
					{/if}
				{/each}
			</ul>
		</div>
	</div>
	<div class="navbar-end px-2 lg:px-16">
		<input
			type="checkbox"
			checked={$isDark}
			on:change={isDark.toggle}
			value="mythemedark"
			class="theme-controller toggle"
		/>
	</div>
</div>
