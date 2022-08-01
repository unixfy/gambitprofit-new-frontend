<script>
	import '@fontsource/inter';
	import '../app.css';
	import { darkmode } from '../stores';
	import { onMount } from 'svelte';

	onMount(async () => {
		if (browser) {
			// Enable darkmode automatically if it's saved in localstorage
			if ($darkmode) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}
	});
</script>

<div class="min-h-screen"><slot /></div>
