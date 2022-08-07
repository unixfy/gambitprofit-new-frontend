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

<Navbar />

<div class="min-h-screen">
	<slot />
</div>

<Footer />
