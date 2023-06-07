<script>
	import PageHeader from '$lib/PageHeader.svelte';
	import {title} from '../../stores';
	
	$title = 'API'
</script>

<PageHeader
	title="GambitProfit API"
	subtitle="Utilize our robust API to build your own solutions on top of our data"
/>

<div class="content-wrapper">
	<p>
		We provide a robust, RESTful API upon which anyone may build their own solution, powered by our
		data. We handle the data storage, integrity, calculations, and auto-update from GambitRewards.
		You can focus on building your app. <b
			>In fact, this website and the GambitProfit notifiers are built on top of our API.
		</b>
	</p>
	<h2>Pitfalls</h2>
	<p>You should be aware of the following pitfalls:</p>
	<ul>
		<li>Requests are limited to 500 per session per hour.</li>
		<li>
			We reserve the right to limit any user's access to our API at any time. Yes, abuse is one
			reason why this action may be taken.
		</li>
		<li>You won't get credentials for the API on request.</li>
		<li>Plays (matches) whose play times are older than 7 days ago aren't updated anymore, even if they're not marked as "completed" on Gambit's site.</li>
	</ul>
	<h2>Usage</h2>
	<p>
		Our API is "self-documenting". You can play around with the API in the <a
			href="https://api-prod.gambitprofit.com/api/"
			target="_blank">API playground</a
		>.
	</p>
	<p>
		Also, we provide <a href="https://api-prod.gambitprofit.com/api/schema" target="_blank"
			>OpenAPI schemas</a
		>
		and
		<a href="https://api-prod.gambitprofit.com/api/schema/docs" target="_blank"
			>auto-generated documentation (powered by Redoc)</a
		> for the API, so you can use an OpenAPI-compatible client to easily interact with the API.
	</p>
	<p>
		The developer can provide one-on-one help on a case-by-case basis. Please see the Help page for
		more info.
	</p>
</div>
