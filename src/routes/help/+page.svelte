<script>
	import PageHeader from '@components/PageHeader.svelte';
	import {title} from '../../stores';
	
	$title = 'Help'
</script>

<PageHeader title="Help" subtitle="Receive assistance with this site and its features" />

<div class="content-wrapper">
	<p>
		Unixfy - the developer - is reachable through a variety of means.
		<a href="https://unixfy.net/contact" class="font-bold" target="_blank" rel="noopener"
			>A full list of contact methods</a
		> is available at unixfy.net.
	</p>
	<p>
		Alternately, if you prefer Discord, you can add <a
			href="https://unixfy.net/discord"
			class="font-bold"
			target="_blank"
			rel="noopener">Unixfy's Discord handle</a
		>, or
		<a href="https://go.unixfy.net/hca" class="font-bold" target="_blank" rel="noopener"
			>join the Discord server for this site</a
		>. (A link to the Discord server is also available in the upper right corner of this page.)
	</p>
</div>
