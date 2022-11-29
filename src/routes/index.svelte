<script>
	import MatchDisplay from '@components/MatchDisplay.svelte';
	import { title } from '../stores';

	$title = 'Home';
</script>

<div class="hero homepage-bg">
	<div class="hero-overlay bg-opacity-40" />
	<div class="hero-content py-12 px-8 min-h-[33vh] text-center text-neutral-content">
		<div class="text-white">
			<h1 class="mb-5 text-3xl sm:text-4xl font-bold">Welcome to 💰 GambitProfit</h1>
			<p class="mb-5 text-lg sm:text-xl">The data portal for Gambit Rewards plays.</p>
		</div>
	</div>
</div>

<div class="ct max-w-screen-xl px-2 py-6 sm:py-8 flex flex-col space-y-2 sm:space-y-4">
	<a href="/donate">
		<div class="alert alert-success text-white">
			<div class="flex-col">
				<p><b>Help keep GambitProfit running and support development.</b> Click me to donate.</p>
			</div>
		</div>
	</a>
	<div class="alert alert-info text-white">
		<div class="flex-col">
			<p>
				<b>On 11/01/2022, the 5% discount changed to 10%.</b> All new plays will reflect this discount,
				and all plays added to this site after 10/31/2022 at 9:00pm Pacific reflect the new discount.
			</p>
		</div>
	</div>
</div>

<div class="max-w-[1920px] mx-auto">
	<MatchDisplay />
</div>
