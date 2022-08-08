<script>
	import '@fontsource/inter';
	import '../app.css';
	import { darkmode } from '../stores';
	import { onMount } from 'svelte';
	import Navbar from '@components/Navbar.svelte';
	import Footer from '@components/Footer.svelte';
	import { browser } from '$app/env';

	onMount(async () => {
		if (browser) {
			// Enable darkmode automatically if it's saved in localstorage
			if ($darkmode) {
				document.documentElement.dataset.theme = 'dark';
			} else {
				document.documentElement.dataset.theme = 'light';
			}
		}
	});
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title> | GambitProfit</title>
	<meta name="title" content="| GambitProfit" />
	<meta
		name="description"
		content="The data portal for Gambit Rewards plays. Easily browse, sort, search through, and share plays!"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://gambitprofit.com" />
	<meta property="og:title" content="GambitProfit" />
	<meta
		property="og:description"
		content="The data portal for Gambit Rewards plays. Easily browse, sort, search through, and share plays!"
	/>
	<meta
		property="og:image"
		content="/advert_screenshot.png"
	/>

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://gambitprofit.com" />
	<meta property="twitter:title" content="GambitProfit" />
	<meta
		property="twitter:description"
		content="The data portal for Gambit Rewards plays. Easily browse, sort, search through, and share plays!"
	/>
	<meta
		property="twitter:image"
		content="/advert_screenshot.png"
	/>
</svelte:head>

<Navbar />

<div class="min-h-screen">
	<slot />
</div>

<Footer />
