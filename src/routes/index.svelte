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
				<b>Welcome to the new version of GambitProfit.</b> With a new API server and fresh interface
				written from scratch, you'll have a streamlined and more reliable experience - not to mention,
				one that's much easier for the developer to maintain 😊. Note that some features, like notifications,
				remain under development. Stay tuned to see them roll out.
			</p>
		</div>
	</div>
</div>

<div class="max-w-[1920px] mx-auto">
	<MatchDisplay />
</div>
