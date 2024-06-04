<script>
	import { isDark, constants } from '$lib';
</script>

<div class="navbar pt-8 lg:h-48 text-sm bg-primary text-primary-content">
	<div class="navbar-start px-2 lg:px-16">
		<div class="flex lg:hidden dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost btn-circle">
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
			<ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
				{#each Object.entries(constants.navbarLinks) as [title, navbarLink], index}
					<li><a href={navbarLink}>{title}</a></li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="navbar-center">
		<div class="flex lg:hidden">
			<div class="flex justify-center items-center text-lg"><span>Jeff Ng</span></div>
		</div>
		<div class="hidden lg:flex flex-col gap-8">
			<div class="flex justify-center items-center text-2xl"><span>Jeff Ng</span></div>
			<ul class="menu menu-horizontal px-4">
				{#each Object.entries(constants.navbarLinks) as [title, navbarLink], index}
					<li><a href={navbarLink}>{title}</a></li>
					{#if index < Object.entries(constants.navbarLinks).length - 1}
						<li class="hover:bg-transparent"><span>|</span></li>
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
			class="toggle theme-controller"
		/>
	</div>
</div>
