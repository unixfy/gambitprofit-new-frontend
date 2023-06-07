<script>
	import { darkmode } from '../stores.js';

	let mobilemenu = false;

	let toggleDarkMode = function () {
		$darkmode = !$darkmode;
	};

	let toggleMobileMenu = function () {
		mobilemenu = !mobilemenu;
	};
</script>

<div class="bg-base-100">
	<div class="ct">
		<div class="navbar">
			<div class="navbar-start">
				<div class="dropdown">
					<label tabindex="0" class="btn btn-ghost lg:hidden">
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
								d="M4 6h16M4 12h8m-8 6h16"
							/></svg
						>
					</label>
					<ul
						tabindex="0"
						class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li><a href="/static">Home</a></li>
						<li><a href="/faq">FAQ</a></li>
						<li><a href="/api">API</a></li>
						<li><a href="/donate">Donate</a></li>
						<li><a href="/notifications">Notifications</a></li>
						<li><a href="/help">Help</a></li>
						<li><a href="https://unixfy.atlassian.net/rest/collectors/1.0/template/form/5086e8b7" rel="noopener" target="_blank">Feedback</a></li>
					</ul>
				</div>
				<a class="btn btn-ghost normal-case text-xl" href="/static">GambitProfit</a>
			</div>
			<div class="navbar-center hidden lg:flex" />
			<div class="navbar-end space-x-4">
				<div class="hidden lg:flex">
					<ul class="menu menu-horizontal p-0">
						<li><a href="/static">Home</a></li>
						<li><a href="/faq">FAQ</a></li>
						<li><a href="/api">API</a></li>
						<li><a href="/donate">Donate</a></li>
						<li><a href="/notifications">Notifications</a></li>
						<li><a href="/help">Help</a></li>
						<li><a href="https://unixfy.atlassian.net/rest/collectors/1.0/template/form/5086e8b7" rel="noopener" target="_blank">Feedback</a></li>
					</ul>
				</div>
				<div class="tooltip tooltip-left" data-tip="Join our Discord server">
					<a
						class="btn btn-primary btn-square"
						aria-label="Join our Discord server"
						href="https://go.unixfy.net/hca"
						target="_blank"
						rel="noopener"
					>
						<i class="fa-brands fa-discord" />
					</a>
				</div>
				<div class="tooltip tooltip-left" data-tip="Toggle dark mode">
					<button class="btn btn-primary btn-square" aria-label="Toggle dark mode" on:click={toggleDarkMode}>
						{#if $darkmode}
							<i class="fa-solid fa-sun" />
						{:else}
							<i class="fa-solid fa-moon" />
						{/if}
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
