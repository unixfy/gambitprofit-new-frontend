<script>
	import PageHeader from '$lib/PageHeader.svelte';
	export let data;
</script>

<PageHeader
	title="Frequently Asked Questions"
	subtitle="Commonly asked questions about GambitProfit"
/>

<div class="flex flex-col space-y-4 max-w-screen-sm mx-auto py-8 px-4">
	{#each data.faqs as faq}
		<div
			class="collapse collapse-plus border bg-base-100 rounded-box"
		>
			<input type="checkbox" />
			<div class="collapse-title text-xl font-medium">{faq.q}</div>
			<div class="collapse-content">
				<p>{@html faq.a}</p>
			</div>
		</div>
	{/each}
</div>
