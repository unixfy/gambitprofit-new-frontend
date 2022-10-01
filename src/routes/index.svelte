<script>
	import MatchDisplay from '@components/MatchDisplay.svelte';
	import {title} from '../stores';
	
	$title = 'Home'
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

<div class="ct max-w-screen-xl px-2 py-6 sm:py-8 flex flex-col space-y-6 sm:space-y-8">
	<div class="alert alert-info text-white">
		<div>
			<p>
				<b>On 10/01/2022 at 12:15am Pacific, the 10% discount changed to 5%.</b> All new plays will reflect this discount, and all plays whose cutoffs had not passed on 10/01/2022 at 11:20am Pacific were retroactively updated to reflect the new discount.
			</p>
			<p>
				<b>The <a href="/donate" target="_blank">Donate page</a> is now live!</b> The next features will be persistent settings and notifications...
			</p>
		</div>
	</div>
</div>

<div class="max-w-[1920px] mx-auto">
	<MatchDisplay />
</div>
